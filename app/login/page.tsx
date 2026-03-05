"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login = async () => {

const {data,error} = await supabase.auth.signInWithPassword({

email,
password

})

if(error){

alert(error.message)

}else{

window.location.href="/parent"

}

}

return(

<div className="flex flex-col items-center mt-40 gap-4">

<h1 className="text-3xl font-bold">

Đăng nhập

</h1>

<input
className="border p-2"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border p-2"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={login}
className="bg-green-500 text-white px-4 py-2"
>

Đăng nhập

</button>

</div>

)

}