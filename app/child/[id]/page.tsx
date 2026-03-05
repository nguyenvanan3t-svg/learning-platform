"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function AssignmentPage(){

const params = useParams()
const id = params?.id as string

const [questions,setQuestions] = useState<any[]>([])
const [answers,setAnswers] = useState<any>({})
const [score,setScore] = useState<number|null>(null)
const [explanations,setExplanations] = useState<any>({})

useEffect(()=>{
if(id){
load()
}
},[id])

async function load(){

if(!id) return

const { data,error } = await supabase
.from("questions")
.select("*")
.eq("assignment_id",id)

if(error){
console.error(error)
return
}

setQuestions(data || [])

}

function updateAnswer(qid:string,val:string){

setAnswers({
...answers,
[qid]:val
})

}

async function submit(){

let correct = 0
const explains:any = {}

for(const q of questions){

const userAnswer = answers[q.id]?.trim().toLowerCase()
const correctAnswer = q.answer.trim().toLowerCase()

if(userAnswer === correctAnswer){
correct++
}else{

const res = await fetch("/api/explain",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
question:q.question,
answer:q.answer
})
})

const data = await res.json()

explains[q.id] = data.explain

}

}

setExplanations(explains)

const finalScore = Math.round(correct/questions.length * 10)

setScore(finalScore)

await supabase.from("results").insert({
assignment_id:id,
score:finalScore
})

}

if(!questions){
return <div className="p-6">Loading...</div>
}

return(

<div className="max-w-3xl mx-auto p-6">

<h1 className="text-2xl font-bold mb-6">
Làm bài
</h1>

{questions.map((q,i)=>(

<div key={q.id} className="bg-white shadow rounded-lg p-4 mb-4">

<p className="font-semibold mb-2">
Câu {i+1}
</p>

<p className="mb-3">
{q.question}
</p>

<input
className="border w-full p-2 rounded"
placeholder="Nhập đáp án"
onChange={(e)=>updateAnswer(q.id,e.target.value)}
/>

{explanations[q.id] && (

<div className="mt-3 bg-yellow-50 border border-yellow-200 p-3 rounded">

<p className="font-semibold text-yellow-700">
💡 Giải thích
</p>

<p className="text-gray-700">
{explanations[q.id]}
</p>

</div>

)}

</div>

))}

<button
onClick={submit}
className="bg-blue-600 text-white px-6 py-2 rounded-lg"
>
Nộp bài
</button>

{score!==null && (

<div className="mt-6 text-xl font-bold">
Điểm: {score}/10
</div>

)}

</div>

)

}