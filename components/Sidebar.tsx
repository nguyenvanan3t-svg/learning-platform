"use client"

import Link from "next/link"

export default function Sidebar(){

return(

<div className="w-64 bg-white border-r p-6 flex flex-col">

<h1 className="text-2xl font-bold text-pink-500 mb-10">
AI Learning
</h1>

<nav className="space-y-2">

<Link
href="/parent"
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
👨‍🏫 Trang bố
</Link>

<Link
href="/child"
className="flex items-center gap-3 p-3 rounded-lg
hover:bg-pink-50
active:bg-pink-100
transition
cursor-pointer"
>
👧 Trang con
</Link>

</nav>

</div>

)

}