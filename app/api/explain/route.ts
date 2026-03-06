import OpenAI from "openai"

export async function POST(req:Request){

const {question,answer} = await req.json()

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const completion = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[

{
role:"user",
content:`
Câu hỏi:
${question}

Đáp án đúng:
${answer}

Hãy giải thích cho học sinh tiểu học hiểu.

YÊU CẦU:

- Giải thích từng bước
- Không dùng LaTeX
- Không dùng \\text hoặc \\times
- Chỉ dùng chữ và phép tính bình thường

Ví dụ:

Bước 1: Chu vi hình vuông = cạnh × 4  
Bước 2: Cạnh = 5 cm  
Bước 3: 5 × 4 = 20  
Kết quả: Chu vi = 20 cm
`
}

]

})

let explain = completion.choices[0].message.content || ""

explain = explain
.replace(/\\\\/g,"")
.replace(/\\text/g,"")
.replace(/\\times/g,"×")
.replace(/\$/g,"")
.replace(/\[/g,"")
.replace(/\]/g,"")

return Response.json({
explain
})

}