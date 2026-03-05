"use client"

import { useState } from "react"

export default function ParentDashboard(){

const [subject,setSubject]=useState("")
const [grade,setGrade]=useState("")
const [topic,setTopic]=useState("")
const [difficulty,setDifficulty]=useState("dễ")
const [count,setCount]=useState(5)

const generate = async ()=>{

await fetch("/api/generate",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
subject,
grade,
topic,
difficulty,
count
})
})

}

return(

<div>

<h1 className="text-2xl font-bold mb-6">
Tạo bài tập
</h1>

<div className="grid grid-cols-5 gap-4">

<input
className="border p-2 rounded"
placeholder="Môn"
onChange={(e)=>setSubject(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Lớp"
onChange={(e)=>setGrade(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Chủ đề"
onChange={(e)=>setTopic(e.target.value)}
/>

<select
className="border p-2 rounded"
onChange={(e)=>setDifficulty(e.target.value)}
>

<option>dễ</option>
<option>trung bình</option>
<option>khó</option>

</select>

<input
type="number"
className="border p-2 rounded"
value={count}
onChange={(e)=>setCount(Number(e.target.value))}
/>

</div>

<button
onClick={generate}
className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
>

Tạo bài tập

</button>

</div>

)

}