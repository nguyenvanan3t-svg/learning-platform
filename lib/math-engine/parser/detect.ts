export type MathType =
  | "square_perimeter"
  | "square_area"
  | "rectangle_perimeter"
  | "rectangle_area"
  | "sumDifference"
  | "ratio"
  | "motion"
  | "unit"
  | "arithmetic"

export function detectType(q:string):MathType{

q = q.toLowerCase()

if(q.includes("chu vi") && q.includes("vuông"))
return "square_perimeter"

if(q.includes("diện tích") && q.includes("vuông"))
return "square_area"

if(q.includes("chu vi") && q.includes("chữ nhật"))
return "rectangle_perimeter"

if(q.includes("diện tích") && q.includes("chữ nhật"))
return "rectangle_area"

if(q.includes("tổng") && q.includes("hiệu"))
return "sumDifference"

if(q.includes("gấp"))
return "ratio"

if(q.includes("vận tốc") || q.includes("quãng đường"))
return "motion"

if(q.includes("đổi"))
return "unit"

return "arithmetic"

}