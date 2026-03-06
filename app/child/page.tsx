"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"
import AssignmentCard from "@/components/AssignmentCard"

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

<h1 className="text-3xl font-bold text-pink-500 mb-8">
Bài tập của con
</h1>

<div className="grid grid-cols-3 gap-6">

{assignments.map(a=>(

<Link key={a.id} href={`/child/${a.id}`}>

<AssignmentCard assignment={a}/>

</Link>

))}

</div>

</div>

)

}