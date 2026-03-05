import OpenAI from "openai"

export async function POST(req:Request){

const { question, answer } = await req.json()

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const completion = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"user",
content:`
Giải thích đơn giản cho học sinh tiểu học:

Câu hỏi:
${question}

Đáp án đúng:
${answer}

Hãy giải thích từng bước dễ hiểu.
`
}
]

})

return Response.json({
explain: completion.choices[0].message.content
})

}