"use client"

import Link from "next/link"

export default function SubjectCard({subject,progress}:any){

const colors:any={
"Toán":"bg-blue-100",
"Tiếng Anh":"bg-green-100",
"Tiếng Việt":"bg-pink-100"
}

return(

<Link href={`/child/subject/${subject}`}>

<div className={`${colors[subject]}
p-6
rounded-xl
shadow
cursor-pointer
hover:shadow-lg
hover:scale-105
active:scale-95
transition
`}>

<p className="font-bold text-lg mb-2">
{subject}
</p>

<p className="text-sm text-gray-600 mb-3">
Tiến độ học
</p>

<div className="w-full bg-white h-3 rounded-full">

<div
className="bg-pink-500 h-3 rounded-full"
style={{width:`${progress}%`}}
></div>

</div>

</div>

</Link>

)

}