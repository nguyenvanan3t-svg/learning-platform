import { ParsedQuestion } from "../types"

export function solveFraction(parsed: ParsedQuestion){

const nums = parsed.numbers

if(nums.length < 2) return null

const result = nums[0] / nums[1]

return{
answer: result.toString(),
steps: `${nums[0]} / ${nums[1]} = ${result}`
}

}