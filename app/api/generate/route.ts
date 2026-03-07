import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"
import { solveMath } from "@/lib/math-engine"

const supabase=createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req:Request){

try{

const body=await req.json()

const {subject,grade,topic,difficulty,count}=body

if(!subject||!grade||!topic||!count){

return Response.json(
{error:"missing fields"},
{status:400}
)

}

const openai=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const prompt=`
Bạn là giáo viên tiểu học.

Tạo ${count} bài tập môn ${subject} lớp ${grade}

Chủ đề: ${topic}

Yêu cầu:
${difficulty}

Trả về JSON:

[
{
"question":"...",
"type":"math"
}
]

Không tạo đáp án.
`

const completion=await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"user",
content:prompt
}
]

})

const text=completion.choices[0].message.content||""

const jsonStart=text.indexOf("[")
const jsonEnd=text.lastIndexOf("]")+1

const questions=JSON.parse(text.slice(jsonStart,jsonEnd))

const {data:assignment}=await supabase
.from("assignments")
.insert({
subject,
grade,
topic,
difficulty
})
.select()
.single()

const rows = await Promise.all(
questions.map(async (q:any)=>{

const solution = await solveMath(q.question)

if(!solution){
return{
assignment_id:assignment.id,
question:q.question,
answer:"",
solution:"Không giải được",
type:"math"
}
}

return{
assignment_id:assignment.id,
question:q.question,
answer:solution.answer,
solution:solution.steps,
type:"math"
}

})
)

await supabase
.from("questions")
.insert(rows)

return Response.json({success:true})

}

catch(err){

console.error(err)

return Response.json(
{error:"generate failed"},
{status:500}
)

}

}