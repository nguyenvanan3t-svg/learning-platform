import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function ageSolver(parsed:ParsedQuestion):SolveResult{

const [sum,diff]=parsed.numbers

const a=(sum+diff)/2
const b=sum-a

return{
answer:`${a} và ${b}`,
steps:[
`Tuổi thứ nhất = ${a}`,
`Tuổi thứ hai = ${b}`
]
}

}