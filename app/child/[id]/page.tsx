"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useParams } from "next/navigation"

export default function AssignmentPage(){

const { id } = useParams()

const [questions,setQuestions]=useState<any[]>([])
const [answers,setAnswers]=useState<any>({})

useEffect(()=>{
load()
},[])

async function load(){

const { data } = await supabase
.from("questions")
.select("*")
.eq("assignment_id",id)
.order("id",{ascending:true})

setQuestions(data || [])

}

function change(qid:string,value:string){

setAnswers({
...answers,
[qid]:value
})

}

async function submit(){

for(const q of questions){

await supabase.from("submissions").insert({

question_id:q.id,
answer:answers[q.id] || ""

})

}

alert("Đã nộp bài")

}

return(

<div className="max-w-3xl mx-auto">

<h1 className="text-3xl font-bold mb-6">
Làm bài
</h1>

{questions.map((q,i)=>(

<div key={q.id} className="border p-4 mb-4 rounded">

<p className="font-bold">
Câu {i+1}
</p>

<p className="mb-3">
{q.question}
</p>

<input
className="border p-2 w-full"
onChange={(e)=>change(q.id,e.target.value)}
placeholder="Nhập đáp án"
/>

</div>

))}

<button
onClick={submit}
className="bg-green-600 text-white px-6 py-2 rounded"
>

Nộp bài

</button>

</div>

)

}