"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function TestPage(){

useEffect(()=>{

async function load(){

const {data,error} = await supabase
.from("users")
.select("*")

console.log(data)

}

load()

},[])

return(

<div>

<h1>Kết nối Supabase thành công</h1>

</div>

)

}