"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function RegisterPage(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const register = async () => {

const {data,error} = await supabase.auth.signUp({

email:email,
password:password

})

if(error){

alert(error.message)

}else{

alert("Đăng ký thành công!")

}

}

return(

<div className="flex flex-col items-center mt-40 gap-4">

<h1 className="text-3xl font-bold">

Đăng ký tài khoản bố

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
onClick={register}
className="bg-blue-500 text-white px-4 py-2"
>

Đăng ký

</button>

</div>

)

}