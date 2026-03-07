"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { gradeAnswer } from "@/lib/grader"
import { solveMath } from "@/lib/math-engine"

export default function AssignmentPage(){

const params = useParams()
const id = params?.id as string

const [questions,setQuestions] = useState<any[]>([])
const [answers,setAnswers] = useState<any>({})
const [score,setScore] = useState<number|null>(null)
const [explanations,setExplanations] = useState<any>({})
const [loading,setLoading] = useState(false)
const [submitted,setSubmitted] = useState(false)
const [checking,setChecking] = useState(true)

useEffect(()=>{
if(id){
load()
}
},[id])

async function load(){

const { data: qdata, error } = await supabase
.from("questions")
.select("*")
.eq("assignment_id",id)

if(error){
console.error("load questions error",error)
}

setQuestions(qdata || [])

const { data: result } = await supabase
.from("results")
.select("*")
.eq("assignment_id",id)
.maybeSingle()

if(result){

setSubmitted(true)
setScore(result.score)
setAnswers(result.answers || {})

}

setChecking(false)

}

function updateAnswer(qid:string,val:string){

if(submitted) return

setAnswers({
...answers,
[qid]:val
})

}

async function submit(){

if(submitted) return

setLoading(true)

let correct = 0
const explains:any = {}

for(const q of questions){

const userAnswer = answers[q.id]?.trim() || ""
const correctAnswer = q.answer?.trim() || ""

const isCorrect = gradeAnswer(userAnswer,correctAnswer,q.type)

if(isCorrect){
correct++
continue
}

/* chỉ giải thích khi sai */

if(q.type === "math"){

const result = await solveMath(q.question)

if(!result) continue

const correctAnswer = result.answer

}else{

const res = await fetch("/api/explain-language",{
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
score:finalScore,
answers:answers

})

setSubmitted(true)
setLoading(false)

}

if(checking){
return <div className="p-6">Loading...</div>
}

function getHint(answer:string){

if(!answer) return ""

if(answer.length < 10)
return "Trả lời ngắn gọn (ví dụ: 36)"

return "Trả lời bằng câu hoàn chỉnh"

}

return(

<div className="max-w-3xl mx-auto p-6">

<h1 className="text-2xl font-bold mb-6">
Làm bài
</h1>

{Array.isArray(questions) && questions.map((q,i)=>{

const userValue = answers?.[q.id] || ""

const isCorrect = gradeAnswer(
userValue,
q.answer,
q.type
)

return(

<div key={q.id} className="bg-white shadow rounded-lg p-4 mb-4">

<p className="font-semibold mb-2">
Câu {i+1}
</p>

<p className="mb-3">
{q.question}
</p>

<input
disabled={submitted}
value={answers?.[q.id] || ""}
className={`border w-full p-2 rounded outline-none
focus:ring-2 focus:ring-pink-400

${
submitted
? isCorrect
? "border-green-500 bg-green-50"
: "border-red-500 bg-red-50"
: ""
}
`}
placeholder="Nhập đáp án"
onChange={(e)=>updateAnswer(q.id,e.target.value)}
/>

<p className="text-sm text-gray-400 mt-1">
Gợi ý: {getHint(q.answer)}
</p>

{submitted && !isCorrect && explanations[q.id] && (

<div className="mt-3 bg-yellow-50 border border-yellow-200 p-3 rounded">

<p className="font-semibold text-yellow-700">
💡 Giải thích
</p>

<p className="text-gray-700">
{explanations[q.id]}
</p>

</div>

)}

{submitted && !isCorrect && (

<p className="text-sm text-red-600 mt-2">
Đáp án đúng: {q.answer}
</p>

)}

</div>

)

})}

{!submitted && (

<button
onClick={submit}
disabled={loading}
className="bg-pink-500 hover:bg-pink-600 active:scale-95
text-white px-6 py-2 rounded-lg transition"
>

{loading ? "Đang chấm bài..." : "Nộp bài"}

</button>

)}

{score!==null && (

<div className="mt-6 text-xl font-bold text-pink-600">
Điểm: {score}/10
</div>

)}

{submitted && (

<div className="mt-4 text-green-600 font-semibold">

Bạn đã hoàn thành bài này.

</div>

)}

</div>

)

}