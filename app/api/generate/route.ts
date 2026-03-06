import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request){

try{

const body = await req.json()

const subject = body.subject
const grade = body.grade
const topic = body.topic
const difficulty = body.difficulty
const count = body.count


// kiểm tra dữ liệu đầu vào

if(!subject || !grade || !topic || !count){

return Response.json(
{ error:"missing fields"},
{ status:400 }
)

}


const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})


const prompt = `
Bạn là giáo viên tiểu học.

Tạo ${count} bài tập môn ${subject} lớp ${grade}

Chủ đề: ${topic}

Độ khó: ${difficulty}

Chỉ trả về JSON.

[
{
"question":"...",
"answer":"...",
"solution":"...",
"type":"text"
}
]
`


const completion = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"user",
content:prompt
}
]

})


const text = completion.choices[0].message.content || ""


// tách JSON

const jsonStart = text.indexOf("[")
const jsonEnd = text.lastIndexOf("]")+1

if(jsonStart === -1 || jsonEnd === -1){

throw new Error("AI response invalid")

}

const questions = JSON.parse(
text.slice(jsonStart,jsonEnd)
)


// tạo assignment

const { data: assignment , error:assignmentError } = await supabase
.from("assignments")
.insert({
subject,
grade,
topic,
difficulty,
question_count:questions.length
})
.select()
.single()


if(assignmentError){

throw assignmentError

}


// chuẩn bị dữ liệu questions

const questionRows = questions.map((q:any)=>({

assignment_id:assignment.id,
question:q.question,
answer:q.answer,
solution:q.solution,
type:q.type || "text"

}))


// insert 1 lần (nhanh hơn)

const { error:questionError } = await supabase
.from("questions")
.insert(questionRows)


if(questionError){

throw questionError

}


return Response.json({

success:true,
assignment_id:assignment.id

})


}

catch(err){

console.error(err)

return Response.json(
{ error:"generate failed"},
{ status:500 }
)

}

}