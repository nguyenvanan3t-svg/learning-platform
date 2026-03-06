"use client"

import { useEffect,useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export default function SubjectPage(){

const { subject } = useParams()

const [assignments,setAssignments]=useState<any[]>([])

useEffect(()=>{
load()
},[])

async function load(){

const { data } = await supabase
.from("assignments")
.select("*")
.eq("subject",subject)
.order("created_at",{ascending:false})

setAssignments(data || [])

}

return(

<div>

<h1 className="text-3xl font-bold text-pink-500 mb-6">
Môn {subject}
</h1>

<div className="grid grid-cols-2 gap-6">

{assignments.map(a=>(

<Link
key={a.id}
href={`/child/${a.id}`}
className="bg-white rounded-xl shadow p-6
hover:shadow-lg
hover:scale-105
active:scale-95
transition
cursor-pointer"
>

<p className="font-bold text-lg">
{a.topic}
</p>

<p className="text-gray-500">
Lớp {a.grade}
</p>

</Link>

))}

</div>

</div>

)

}