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

const { data, error } = await supabase
.from("assignments")
.select("*")
.order("created_at",{ascending:false})

if(error){
console.log(error)
return
}

setAssignments(data || [])

}

return(

<div style={{maxWidth:800,margin:"auto"}}>

<h1>Danh sách bài tập</h1>

{assignments.map((a,index)=>(

<Link key={a.id} href={`/child/${a.id}`}>

<div
style={{
border:"1px solid #ccc",
padding:15,
marginBottom:10,
cursor:"pointer"
}}
>

<b>Bài {index+1}</b>

<div>Môn: {a.subject}</div>

<div>Chủ đề: {a.topic}</div>

<div>
{new Date(a.created_at).toLocaleString()}
</div>

</div>

</Link>

))}

</div>

)

}