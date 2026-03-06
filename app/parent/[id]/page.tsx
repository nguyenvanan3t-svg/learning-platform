"use client"

import { useState,useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export default function ParentDashboard(){

const [subject,setSubject]=useState("Toán")
const [grade,setGrade]=useState("")
const [topic,setTopic]=useState("")
const [difficulty,setDifficulty]=useState("Dễ")
const [count,setCount]=useState(5)

const [assignments,setAssignments]=useState<any[]>([])

useEffect(()=>{
loadAssignments()
},[])

async function loadAssignments(){

const { data } = await supabase
.from("assignments")
.select("*")
.order("created_at",{ascending:false})

setAssignments(data || [])

}

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

loadAssignments()

}

return(

<div className="max-w-6xl">

<h1 className="text-3xl font-bold mb-8">
Tạo bài tập
</h1>

<div className="grid grid-cols-5 gap-4">

<select
className="border p-2 rounded"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
>
<option>Toán</option>
<option>Tiếng Anh</option>
<option>Tiếng Việt</option>
</select>

<input
className="border p-2 rounded"
placeholder="Lớp"
value={grade}
onChange={(e)=>setGrade(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Chủ đề"
value={topic}
onChange={(e)=>setTopic(e.target.value)}
/>

<select
className="border p-2 rounded"
value={difficulty}
onChange={(e)=>setDifficulty(e.target.value)}
>
<option>Dễ</option>
<option>Trung bình</option>
<option>Khó</option>
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
Tạo bài
</button>

<h2 className="text-xl font-bold mt-10 mb-4">
Bài đã tạo
</h2>

<div className="grid grid-cols-2 gap-4">

{assignments.map(a=>(

<div key={a.id} className="bg-white p-4 rounded shadow">

<p className="font-semibold">
{a.subject} • {a.topic}
</p>

<p className="text-sm text-gray-500">
Lớp {a.grade}
</p>

<Link
href={`/parent/${a.id}`}
className="text-blue-600 mt-2 block"
>
Xem đáp án
</Link>

</div>

))}

</div>

</div>

)

}