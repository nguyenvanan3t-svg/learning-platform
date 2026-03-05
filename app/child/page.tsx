"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function ChildPage(){

const [questions,setQuestions]=useState<any[]>([])
const [answers,setAnswers]=useState<any>({})

useEffect(()=>{

loadQuestions()

},[])

async function loadQuestions(){

const { data } = await supabase
.from("questions")
.select("*")
.order("id",{ascending:true})
.limit(10)

setQuestions(data||[])

}

function updateAnswer(id:string,value:string){

setAnswers({
...answers,
[id]:value
})

}

async function submit(){

for(const q of questions){

const correct =
answers[q.id]?.trim() === q.answer.trim()

await supabase.from("submissions").insert({

question_id:q.id,
answer:answers[q.id],
correct:correct

})

}

alert("Đã nộp bài")

}

return(

<div className="max-w-3xl mx-auto">

<h1 className="text-3xl font-bold mb-8">
Bài tập hôm nay
</h1>

{questions.map((q,i)=>(

<div
key={q.id}
className="border rounded p-5 mb-6"
>

<p className="font-bold mb-2">
Câu {i+1}
</p>

<p className="mb-4">
{q.question}
</p>

<input
className="border p-2 w-full rounded"
placeholder="Nhập đáp án"
onChange={(e)=>updateAnswer(q.id,e.target.value)}
/>

</div>

))}

<button
onClick={submit}
className="bg-green-600 text-white px-6 py-3 rounded"
>

Nộp bài

</button>

</div>

)

}