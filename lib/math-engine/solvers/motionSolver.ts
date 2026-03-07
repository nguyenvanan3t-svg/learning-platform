import { ParsedQuestion } from "../types"

export function solveMotion(parsed: ParsedQuestion){

const nums = parsed.numbers

if(nums.length < 2) return null

const distance = nums[0] * nums[1]

return{
answer: distance.toString(),
steps:`${nums[0]} × ${nums[1]} = ${distance}`
}

}