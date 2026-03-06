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

await loadAssignments()

}

return(

<div className="max-w-5xl mx-auto">

<h1 className="text-3xl font-bold text-pink-500 mb-8">
Tạo bài tập
</h1>

<div className="grid grid-cols-5 gap-4 bg-white p-6 rounded-xl shadow">

{/* Môn học */}

<select
className="border p-2 rounded"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
>

<option value="Toán">Toán</option>
<option value="Tiếng Anh">Tiếng Anh</option>
<option value="Tiếng Việt">Tiếng Việt</option>

</select>

{/* Lớp */}

<input
className="border p-2 rounded"
placeholder="Lớp"
value={grade}
onChange={(e)=>setGrade(e.target.value)}
/>

{/* Chủ đề */}

<input
className="border p-2 rounded"
placeholder="Chủ đề"
value={topic}
onChange={(e)=>setTopic(e.target.value)}
/>

{/* Độ khó */}

<select
className="border p-2 rounded"
value={difficulty}
onChange={(e)=>setDifficulty(e.target.value)}
>

<option>Dễ</option>
<option>Trung bình</option>
<option>Khó</option>

</select>

{/* Số câu */}

<input
type="number"
className="border p-2 rounded"
value={count}
onChange={(e)=>setCount(Number(e.target.value))}
/>

</div>

<button
onClick={generate}
className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition text-white px-6 py-2 rounded-lg"
>

Tạo bài tập

</button>

{/* Danh sách bài đã tạo */}

<h2 className="text-xl font-bold mt-10 mb-4">
Bài đã tạo
</h2>

<div className="space-y-3">

{assignments.map((a)=>(
  
<div key={a.id} className="border p-4 rounded bg-white shadow-sm flex justify-between items-center">

<div>

<p className="font-semibold">
{a.subject} - {a.topic}
</p>

<p className="text-sm text-gray-500">
Lớp {a.grade} • {new Date(a.created_at).toLocaleString()}
</p>

</div>

<Link
href={`/parent/${a.id}`}
className="text-blue-600 hover:underline"
>

Xem chi tiết

</Link>

</div>

))}

</div>

</div>

)

}