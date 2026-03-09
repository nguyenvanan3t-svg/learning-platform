import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function sumDifferenceSolver(parsed: ParsedQuestion): SolveResult {

  const nums = parsed.numbers

  if (nums.length < 2) {

    return {
      answer: "Không đủ dữ liệu",
      steps: []
    }

  }

  const sum = nums[0]
  const diff = nums[1]

  const a = (sum + diff) / 2
  const b = sum - a

  return {

    answer: `${a} và ${b}`,

    steps: [
      `Số lớn = (tổng + hiệu)/2 = (${sum} + ${diff})/2 = ${a}`,
      `Số bé = ${sum} - ${a} = ${b}`
    ]

  }

}