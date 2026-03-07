import OpenAI from "openai"

export async function aiSolve(question:string){

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const res = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[{

role:"user",
content:`Giải bài toán tiểu học sau từng bước dễ hiểu:

${question}`

}]

})

return res.choices[0].message.content

}