import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function arithmeticSolver(parsed: ParsedQuestion): SolveResult {

  const expression = parsed.normalized

  const result = eval(expression)

  return {

    answer: result,

    steps: [expression + " = " + result]

  }

}