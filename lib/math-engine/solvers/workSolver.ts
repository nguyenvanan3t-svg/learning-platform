import { ParsedQuestion } from "../types"

export function solveWork(parsed: ParsedQuestion){

const nums = parsed.numbers

if(nums.length < 2) return null

const result = 1 / (1/nums[0] + 1/nums[1])

return{
answer: result.toString(),
steps:`1/(1/${nums[0]} + 1/${nums[1]})`
}

}