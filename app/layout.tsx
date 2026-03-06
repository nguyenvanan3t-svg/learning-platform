import "./globals.css"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({
children
}:{
children: React.ReactNode
}){

return(

<html lang="vi">

<body className="bg-pink-50">

<div className="flex min-h-screen">

<Sidebar/>

<div className="flex-1 p-10">
{children}
</div>

</div>

</body>

</html>

)

}