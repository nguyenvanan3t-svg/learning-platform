"use server"
import OpenAI from "openai"

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

export async function aiFallback(question:string){

const prompt=`
Giải bài toán tiểu học sau.

Trả JSON:

{
"answer":"",
"steps":""
}

Bài toán:
${question}
`

const res = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"user",content:prompt}
]

})

const text=res.choices[0].message.content || "{}"

try{
return JSON.parse(text)
}catch{

return{
answer:"",
steps:"Không giải được"
}

}

}