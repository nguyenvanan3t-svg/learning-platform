import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function sumDifferenceSolver(parsed:ParsedQuestion):SolveResult{

const [sum,diff]=parsed.numbers

const x=(sum+diff)/2
const y=sum-x

return{
answer:`${x} và ${y}`,
steps:[
`x = (sum + diff)/2`,
`x = ${x}`
]
}

}