import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function percentSolver(parsed:ParsedQuestion):SolveResult{

const nums=parsed.numbers

if(nums.length<2){

return{
answer:"",
steps:["Không đủ dữ kiện"]
}

}

const result=nums[0]/100*nums[1]

return{
answer:result,
steps:[
`${nums[0]}% của ${nums[1]}`,
`= ${result}`
]
}

}