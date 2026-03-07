import { ParsedQuestion, SolveResult } from "../types"

export function solveArithmetic(parsed:ParsedQuestion):SolveResult{

const nums = parsed.numbers

if(nums.length < 2){
return {answer:"",steps:"Không đủ dữ liệu"}
}

const a = nums[0]
const b = nums[1]
const q = parsed.question

if(q.includes("cộng")){
const r = a + b
return {answer:r.toString(),steps:`${a} + ${b} = ${r}`}
}

if(q.includes("trừ")){
const r = a - b
return {answer:r.toString(),steps:`${a} - ${b} = ${r}`}
}

if(q.includes("nhân")){
const r = a * b
return {answer:r.toString(),steps:`${a} × ${b} = ${r}`}
}

if(q.includes("chia")){
const r = a / b
return {answer:r.toString(),steps:`${a} ÷ ${b} = ${r}`}
}

return {answer:"",steps:"Không xác định phép toán"}

}