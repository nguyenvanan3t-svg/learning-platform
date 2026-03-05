"use client"

import { useEffect,useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function ChildPage(){

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

return(

<div className="max-w-3xl mx-auto">

<h1 className="text-3xl font-bold mb-6">
Danh sách bài tập
</h1>

{assignments.map((a,i)=>(

<Link key={a.id} href={`/child/${a.id}`}>

<div className="border p-4 mb-4 rounded cursor-pointer hover:bg-gray-100">

<p className="font-bold">
Bài {i+1} - {a.subject} lớp {a.grade}
</p>

<p>
Chủ đề: {a.topic}
</p>

<p className="text-sm text-gray-500">
{new Date(a.created_at).toLocaleString()}
</p>

</div>

</Link>

))}

</div>

)

}