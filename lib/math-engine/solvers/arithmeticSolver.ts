function tryEvalExpression(text:string){

const expr = text.replace(/[^0-9+\-*/().]/g,"")

if(!/[+\-*/]/.test(expr)) return null

try{
return Function(`return (${expr})`)()
}catch{
return null
}

}

export function arithmeticSolver(parsed:any){

const text:string = parsed.normalized
const nums:number[] = parsed.numbers

/* =========================
EXPRESSION
========================= */

const exprResult = tryEvalExpression(text)

if(exprResult!==null){
return{
answer:exprResult,
steps:[`${text} = ${exprResult}`]
}
}

if(nums.length===0){
return{
answer:"",
steps:["Không có dữ kiện"]
}
}

/* =========================
SUBTRACT THEN ADD
250 - 75 + 40
========================= */

if(
text.includes("cho mượn") &&
text.includes("thêm") &&
nums.length>=3
){

const result = nums[0] - nums[1] + nums[2]

return{
answer:result,
steps:[
`${nums[0]}-${nums[1]}=${nums[0]-nums[1]}`,
`${nums[0]-nums[1]}+${nums[2]}=${result}`
]
}

}

/* =========================
MONEY PURCHASE
========================= */

if(
text.includes("mua") &&
text.includes("mỗi") &&
nums.length>=3
){

const cost = nums[1]*nums[2]
const result = nums[0]-cost

return{
answer:result,
steps:[
`${nums[1]}×${nums[2]}=${cost}`,
`${nums[0]}-${cost}=${result}`
]
}

}

/* =========================
MULTIPLY + ADD
========================= */

if(
text.includes("mỗi") &&
text.includes("thêm") &&
nums.length>=3
){

const base = nums[0]*nums[1]
const result = base + nums[2]

return{
answer:result,
steps:[
`${nums[0]}×${nums[1]}=${base}`,
`${base}+${nums[2]}=${result}`
]
}

}

/* =========================
MULTIPLY THEN SUBTRACT
========================= */

if(
text.includes("mỗi") &&
(text.includes("bán")||text.includes("còn")) &&
nums.length>=3
){

const base = nums[0]*nums[1]
const result = base - nums[2]

return{
answer:result,
steps:[
`${nums[0]}×${nums[1]}=${base}`,
`${base}-${nums[2]}=${result}`
]
}

}

/* =========================
DIVISION WORD
========================= */

if(
text.includes("chia") ||
text.includes("chia đều") ||
text.includes("mỗi bạn được") ||
text.includes("mỗi lớp được")
){

const result = nums[0]/nums[1]

return{
answer:result,
steps:[`${nums[0]}/${nums[1]}=${result}`]
}

}

/* =========================
GROUP DIVISION
32 học sinh mỗi nhóm 4
========================= */

if(
(text.includes("mỗi bàn") ||
text.includes("mỗi nhóm") ||
text.includes("mỗi hộp")) &&
(text.includes("bao nhiêu") || text.includes("cần bao nhiêu"))
){

const result = nums[0]/nums[1]

return{
answer:result,
steps:[`${nums[0]}/${nums[1]}=${result}`]
}

}

/* =========================
MULTIPLY TIME
12 mỗi ngày 5 ngày
========================= */

if(
text.includes("mỗi") &&
(
text.includes("ngày") ||
text.includes("tuần") ||
text.includes("tháng")
) &&
nums.length>=2
){

const a = nums[0]
const b = nums[1]

const result = a * b

return{
answer:result,
steps:[`${a}×${b}=${result}`]
}

}

/* =========================
WORD MULTIPLICATION
mỗi hộp 6 bánh có 8 hộp
========================= */

if(
text.includes("mỗi") &&
text.includes("có") &&
nums.length>=2
){

const result = nums[0]*nums[1]

return{
answer:result,
steps:[`${nums[0]}×${nums[1]}=${result}`]
}

}

/* =========================
SUBTRACTION
========================= */

if(
text.includes("còn")||
text.includes("mất")||
text.includes("bớt")||
text.includes("chuyển đi")||
text.includes("ăn mất")
){

let result = nums[0]

for(let i=1;i<nums.length;i++){
result -= nums[i]
}

return{
answer:result,
steps:["Thực hiện phép trừ"]
}

}

/* =========================
SUM
========================= */

if(text.includes("tổng") || text.includes("cả")){

const sum = nums.reduce((a,b)=>a+b,0)

return{
answer:sum,
steps:[`${nums.join("+")}=${sum}`]
}

}

/* =========================
DEFAULT
========================= */

const sum = nums.reduce((a,b)=>a+b,0)

return{
answer:sum,
steps:[`${nums.join("+")}=${sum}`]
}

}