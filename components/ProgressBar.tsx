"use client"

export default function ProgressBar({value}:{value:number}){

return(

<div className="w-full bg-gray-200 rounded-full h-4">

<div
className="bg-pink-500 h-4 rounded-full"
style={{width:`${value}%`}}
></div>

</div>

)

}