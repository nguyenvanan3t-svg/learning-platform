"use client"

import { useEffect,useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

export default function ChildPage(){

const [grouped,setGrouped]=useState<any>({})

useEffect(()=>{
load()
},[])

async function load(){

const { data } = await supabase
.from("assignments")
.select("*")
.order("created_at",{ascending:false})

const groups:any={}

data?.forEach(a=>{
if(!groups[a.subject]) groups[a.subject]=[]
groups[a.subject].push(a)
})

setGrouped(groups)

}

return(

<div className="max-w-7xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6">
Danh sách bài tập
</h1>

<div className="grid grid-cols-3 gap-6">

{Object.keys(grouped).map(subject=>(

<div key={subject} className="bg-white shadow rounded-lg p-4">

<h2 className="text-xl font-semibold mb-4">
📚 {subject}
</h2>

{grouped[subject].map((a:any)=>(

<Link key={a.id} href={`/child/${a.id}`}>

<div className="border rounded-lg p-3 mb-3 hover:bg-gray-50 cursor-pointer">

<p className="font-semibold">
{a.topic}
</p>

<p className="text-sm text-gray-500">
{new Date(a.created_at).toLocaleString()}
</p>

</div>

</Link>

))}

</div>

))}

</div>

</div>

)

}