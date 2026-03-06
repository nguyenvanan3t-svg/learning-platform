"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export default function ChildPage(){

const [assignments,setAssignments]=useState<any[]>([])

useEffect(()=>{
load()
},[])

async function load(){

const { data } = await supabase
.from("assignments")
.select("*")
.order("created_at",{ascending:false})

setAssignments(data || [])

}

return(

<div>

<h1 className="text-3xl font-bold mb-8">
Bài tập của con
</h1>

<div className="grid grid-cols-3 gap-6">

{assignments.map(a=>(

<Link key={a.id} href={`/child/${a.id}`}>

<div className="bg-white shadow rounded-lg p-6 hover:shadow-lg">

<p className="font-bold text-lg">
{a.subject}
</p>

<p className="text-gray-500">
{a.topic}
</p>

</div>

</Link>

))}

</div>

</div>

)

}