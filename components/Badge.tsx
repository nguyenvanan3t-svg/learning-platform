"use client"

export default function Badge({icon,title}:any){

return(

<div className="bg-white p-4 rounded-xl shadow text-center">

<div className="text-3xl mb-2">
{icon}
</div>

<p className="text-sm font-semibold">
{title}
</p>

</div>

)

}