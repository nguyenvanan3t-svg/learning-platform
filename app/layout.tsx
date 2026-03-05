import "./globals.css"

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="vi">
<body className="bg-gray-100">

<div className="flex min-h-screen">

{/* Sidebar */}

<div className="w-60 bg-white border-r p-6">

<h1 className="text-xl font-bold mb-8">
AI Learning
</h1>

<nav className="space-y-4">

<a href="/parent" className="block hover:text-blue-600">
Dashboard bố
</a>

<a href="/child" className="block hover:text-blue-600">
Trang con
</a>

</nav>

</div>

{/* Content */}

<div className="flex-1 p-10">
{children}
</div>

</div>

</body>
</html>
)
}