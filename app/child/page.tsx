"use client"

import AvatarCard from "@/components/AvatarCard"
import SubjectCard from "@/components/SubjectCard"
import Badge from "@/components/Badge"

export default function ChildDashboard(){

return(

<div className="space-y-10">

<h1 className="text-3xl font-bold text-pink-500">
Trang học của con
</h1>

<AvatarCard/>

<h2 className="text-xl font-bold">
Tiến độ môn học
</h2>

<div className="grid grid-cols-3 gap-6">

<SubjectCard subject="Toán" progress={80}/>
<SubjectCard subject="Tiếng Anh" progress={60}/>
<SubjectCard subject="Tiếng Việt" progress={90}/>

</div>

<h2 className="text-xl font-bold">
Huy hiệu
</h2>

<div className="grid grid-cols-4 gap-4">

<Badge icon="⭐" title="Giải toán giỏi"/>
<Badge icon="📘" title="Chăm học"/>
<Badge icon="🎯" title="Hoàn thành bài tập"/>
<Badge icon="🏆" title="Điểm cao"/>

</div>

</div>

)

}