import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

function evalFraction(expr:string){

const normalized = expr.replace(/(\d+\/\d+)/g,"($1)")

try{

return Function(`return ${normalized}`)()

}catch{

return null

}

}

export function fractionSolver(parsed:ParsedQuestion):SolveResult{

const expr = parsed.normalized

const result = evalFraction(expr)

if(result===null){

return{
answer:"",
steps:["Không giải được phân số"]
}

}

const value = Math.round(result * 1000000) / 1000000

return{
answer:value,
steps:[
`Tính phân số`,
`${expr} = ${result}`
]
}

}