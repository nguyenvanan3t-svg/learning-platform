import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request){

try{

const body = await req.json()

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const prompt = `
Bạn là giáo viên tiểu học.

Tạo ${body.count} bài tập môn ${body.subject} lớp ${body.grade}

Chủ đề: ${body.topic}

Độ khó: ${body.difficulty}

Trả về JSON dạng:

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

const jsonStart = text.indexOf("[")
const jsonEnd = text.lastIndexOf("]")+1

const questions = JSON.parse(text.slice(jsonStart,jsonEnd))

// tạo assignment

const { data:assignment } = await supabase
.from("assignments")
.insert({

subject:body.subject,
grade:body.grade,
topic:body.topic,
difficulty:body.difficulty

})
.select()
.single()

// lưu questions

for(const q of questions){

await supabase.from("questions").insert({

assignment_id:assignment.id,
question:q.question,
answer:q.answer,
solution:q.solution,
type:q.type || "text"

})

}

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