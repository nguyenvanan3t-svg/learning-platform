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

Yêu cầu:

1. Câu hỏi rõ ràng cho học sinh lớp nhỏ
2. Đáp án chỉ ghi số (không ghi đơn vị)
3. Giải thích từng bước dễ hiểu
4. KHÔNG dùng LaTeX hoặc ký hiệu toán học

Ví dụ giải thích đúng:

Bước 1: Hình vuông có 4 cạnh bằng nhau  
Bước 2: Diện tích = cạnh × cạnh  
Bước 3: 4 × 4 = 16  
Bước 4: Diện tích = 16 cm²

Trả về JSON:

[
{
"question":"...",
"answer":"...",
"solution":"...",
"type":"math"
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

const questions = JSON.parse(
text.slice(jsonStart,jsonEnd)
)


// tạo assignment (giữ đúng database hiện tại)

const { data: assignment } = await supabase
.from("assignments")
.insert({
subject,
grade,
topic,
difficulty
})
.select()
.single()


// insert questions (batch cho nhanh)

const questionRows = questions.map((q:any)=>({

assignment_id:assignment.id,
question:q.question,
answer:q.answer,
solution:q.solution,
type:q.type || "text"

}))

await supabase
.from("questions")
.insert(questionRows)


return Response.json({
success:true
})

}

catch(err){

console.error(err)

return Response.json(
{error:"generate failed"},
{status:500}
)

}

}