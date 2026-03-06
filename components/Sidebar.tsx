"use client"

import Link from "next/link"

export default function Sidebar(){

return(

<div className="w-64 bg-white border-r p-6 flex flex-col">

<h1 className="text-xl font-bold mb-10">
AI Learning
</h1>

<nav className="space-y-4">

<Link href="/parent" className="block hover:text-blue-600">
Dashboard bố
</Link>

<Link href="/child" className="block hover:text-blue-600">
Trang học của con
</Link>

</nav>

</div>

)

}