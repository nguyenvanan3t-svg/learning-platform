"use client"

import { useEffect,useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Results(){

const [data,setData]=useState<any[]>([])

useEffect(()=>{

load()

},[])

async function load(){

const { data } = await supabase
.from("submissions")
.select("*")

setData(data||[])

}

const correct =
data.filter(d=>d.correct).length

return(

<div>

<h1 className="text-2xl font-bold mb-6">
Kết quả
</h1>

<p className="mb-4">
Số câu đúng: {correct} / {data.length}
</p>

</div>

)

}