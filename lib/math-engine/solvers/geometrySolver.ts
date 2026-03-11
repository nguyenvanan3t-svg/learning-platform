import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function geometrySolver(parsed:ParsedQuestion):SolveResult{

const text=parsed.normalized
const nums=parsed.numbers

if(text.includes("hình chữ nhật")){

const a=nums[0]
const b=nums[1]

if(text.includes("chu vi")){

const p=2*(a+b)

return{
answer:p,
steps:[
`P = 2(a+b)`,
`= ${p}`
]
}

}

if(text.includes("diện tích")){

const s=a*b

return{
answer:s,
steps:[
`S = a*b`,
`= ${s}`
]
}

}

}

return{
answer:"",
steps:["Không giải được"]
}

}