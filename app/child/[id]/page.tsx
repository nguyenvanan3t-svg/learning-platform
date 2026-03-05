"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useParams } from "next/navigation"

export default function AssignmentPage(){

const { id } = useParams()

const [questions,setQuestions]=useState<any[]>([])

useEffect(()=>{
loadQuestions()
},[])

async function loadQuestions(){

const { data } = await supabase
.from("questions")
.select("*")
.eq("assignment_id",id)
.order("id",{ascending:true})

setQuestions(data || [])

}

return(

<div style={{maxWidth:800,margin:"auto"}}>

<h1>Làm bài</h1>

{questions.map((q,i)=>(

<div key={q.id} style={{border:"1px solid #ccc",marginBottom:10,padding:10}}>

<b>Câu {i+1}</b>

<p>{q.question}</p>

<input
style={{width:"100%",padding:6}}
placeholder="Nhập đáp án"
/>

</div>

))}

</div>

)

}