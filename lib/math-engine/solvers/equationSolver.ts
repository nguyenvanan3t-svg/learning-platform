import { ParsedQuestion, SolveResult } from "../types"

export function solveEquation(parsed:ParsedQuestion):SolveResult{

const nums = parsed.numbers

if(nums.length < 2){
return {answer:"",steps:"Không đủ dữ liệu"}
}

const a = nums[0]
const b = nums[1]

const x = b / a

return {
answer:x.toString(),
steps:`x = ${b} / ${a}`
}

}