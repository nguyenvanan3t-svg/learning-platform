"use client"

import { useEffect,useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function ParentView(){

const { id } = useParams()

const [questions,setQuestions] = useState<any[]>([])

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

<div className="max-w-3xl mx-auto p-6">

<h1 className="text-2xl font-bold mb-6">
Chi tiết bài tập
</h1>

{questions.map((q,i)=>(

<div key={q.id} className="border p-4 mb-4 rounded">

<p className="font-semibold">
Câu {i+1}
</p>

<p>{q.question}</p>

<p className="mt-2 text-green-600">
Đáp án: {q.answer}
</p>

</div>

))}

</div>

)

}