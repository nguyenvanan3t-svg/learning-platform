"use client"

import { useEffect,useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function ChildPage(){

const [assignments,setAssignments]=useState<any[]>([])
const [grouped,setGrouped]=useState<any>({})

useEffect(()=>{
loadAssignments()
},[])

async function loadAssignments(){

const { data } = await supabase
.from("assignments")
.select("*")
.order("created_at",{ascending:false})

setAssignments(data || [])

groupBySubject(data || [])

}

function groupBySubject(data:any[]){

const groups:any={}

data.forEach(a=>{

if(!groups[a.subject]){
groups[a.subject]=[]
}

groups[a.subject].push(a)

})

setGrouped(groups)

}

return(

<div style={{maxWidth:900,margin:"auto"}}>

<h1>Danh sách bài tập</h1>

{Object.keys(grouped).map(subject=>(

<div key={subject} style={{marginBottom:30}}>

<h2 style={{color:"#444"}}>
📚 {subject}
</h2>

{grouped[subject].map((a:any)=>(
  
<Link key={a.id} href={`/child/${a.id}`}>

<div
style={{
border:"1px solid #ccc",
padding:15,
marginBottom:10
}}
>

<b>{a.topic}</b>

<div>
{new Date(a.created_at).toLocaleString()}
</div>

</div>

</Link>

))}

</div>

))}

</div>

)

}