import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function workSolver(parsed: ParsedQuestion): SolveResult {

  const nums = parsed.numbers

  if (nums.length < 2) {

    return {
      answer: "Không đủ dữ liệu",
      steps: []
    }

  }

  let sum = 0

  for (const n of nums) {

    sum += 1 / n

  }

  const result = 1 / sum

  return {

    answer: result,

    steps: [`t = 1 / (${nums.map(n => `1/${n}`).join("+")})`]

  }

}