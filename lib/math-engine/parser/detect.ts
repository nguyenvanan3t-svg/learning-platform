export function detectType(question:string){

const q = question.toLowerCase()

if(q.includes("hình vuông") && q.includes("chu vi"))
return "square_perimeter"

if(q.includes("hình vuông") && q.includes("diện tích"))
return "square_area"

if(q.includes("hình chữ nhật") && q.includes("chu vi"))
return "rectangle_perimeter"

if(q.includes("hình chữ nhật") && q.includes("diện tích"))
return "rectangle_area"

if(q.includes("phân số"))
return "fraction"

if(q.includes("gấp"))
return "multiply"

if(q.includes("kém"))
return "minus"

if(q.includes("hơn"))
return "plus"

return "arithmetic"

}