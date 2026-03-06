"use client"

import { useEffect,useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function ParentAssignment(){

const { id } = useParams()

const [questions,setQuestions]=useState<any[]>([])

useEffect(()=>{
load()
},[])

async function load(){

const { data } = await supabase
.from("questions")
.select("*")
.eq("assignment_id",id)

setQuestions(data || [])

}

return(

<div>

<h1 className="text-2xl font-bold mb-6">
Chi tiết bài tập
</h1>

{questions.map((q,i)=>(

<div key={q.id} className="bg-white p-4 rounded shadow mb-4">

<p className="font-semibold">
Câu {i+1}
</p>

<p>{q.question}</p>

<p className="text-green-600 mt-2">
Đáp án: {q.answer}
</p>

</div>

))}

</div>

)

}