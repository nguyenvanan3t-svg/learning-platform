import { ParsedQuestion } from "../types"

export function solveRatio(parsed: ParsedQuestion){

const nums = parsed.numbers

if(nums.length < 3) return null

const total = nums[0]
const r1 = nums[1]
const r2 = nums[2]

const part = total / (r1 + r2)

return{
answer:`${part*r1}, ${part*r2}`,
steps:`${total}/(${r1}+${r2}) = ${part}`
}

}