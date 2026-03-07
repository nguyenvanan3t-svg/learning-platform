export function detectType(q:string){

q = q.toLowerCase()

if(q.includes("chu vi") && q.includes("vuông"))
return "square_perimeter"

if(q.includes("diện tích") && q.includes("vuông"))
return "square_area"

if(q.includes("chu vi") && q.includes("chữ nhật"))
return "rectangle_perimeter"

if(q.includes("diện tích") && q.includes("chữ nhật"))
return "rectangle_area"

if(q.includes("phân số"))
return "fraction"

if(q.includes("tổng") && q.includes("hiệu"))
return "sumDifference"

if(q.includes("vận tốc") || q.includes("quãng đường"))
return "motion"

return "arithmetic"

}