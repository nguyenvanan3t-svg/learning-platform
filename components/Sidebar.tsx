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
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50"
>
📊 Dashboard
</Link>

<Link
href="/parent"
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50"
>
📝 Tạo bài tập
</Link>

<Link
href="/child"
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50"
>
🎓 Trang học
</Link>

<Link
href="/results"
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50"
>
🏆 Kết quả
</Link>

<Link
href="/stats"
className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50"
>
📈 Thống kê
</Link>

</nav>

</div>

)

}