"use client"

export default function AssignmentCard({assignment}:any){

return(

<div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">

<p className="text-lg font-bold text-pink-500">
{assignment.subject}
</p>

<p className="text-gray-600">
{assignment.topic}
</p>

<p className="text-sm text-gray-400 mt-2">
Lớp {assignment.grade}
</p>

</div>

)

}