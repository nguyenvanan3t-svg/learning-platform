import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function ageSolver(parsed: ParsedQuestion): SolveResult {

  const text = parsed.normalized
  const nums = parsed.numbers

  if (text.includes("tổng") && text.includes("hiệu")) {

    const sum = nums[0]
    const diff = nums[1]

    const a = (sum + diff) / 2
    const b = sum - a

    return {

      answer: `${a} và ${b}`,

      steps: [
        `a = (${sum}+${diff})/2`,
        `b = ${sum}-${a}`
      ]

    }

  }

  return {

    answer: "Không giải được bài tuổi",

    steps: []

  }

}