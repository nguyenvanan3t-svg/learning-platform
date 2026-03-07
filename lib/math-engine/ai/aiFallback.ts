"use server"

import OpenAI from "openai"

export async function aiFallback(question:string){

const openai = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

const res = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"user",
content:`Giải bài toán tiểu học sau và trả về JSON:

{
answer:"...",
steps:"..."
}

${question}`
}
]

})

const text = res.choices[0].message.content || ""

try{
return JSON.parse(text)
}catch{
return {answer:"",steps:text}
}

}