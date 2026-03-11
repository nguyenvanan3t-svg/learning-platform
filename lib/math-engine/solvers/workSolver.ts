import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function workSolver(parsed:ParsedQuestion):SolveResult{

const [a,b]=parsed.numbers

const raw = 1/(1/a+1/b)

// chuẩn hóa floating
const t = Math.round(raw * 1e15) / 1e15

return{
answer:t,
steps:[
`1/t = 1/${a} + 1/${b}`,
`t = ${t}`
]
}

}