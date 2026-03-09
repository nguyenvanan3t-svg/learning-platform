import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function percentSolver(parsed: ParsedQuestion): SolveResult {

  const nums = parsed.numbers

  if (nums.length < 2) {

    return {
      answer: "Không đủ dữ liệu",
      steps: []
    }

  }

  const percent = nums[0]
  const value = nums[1]

  const result = value * percent / 100

  return {

    answer: result,

    steps: [
      `${percent}% của ${value}`,
      `= ${value} × ${percent} / 100`,
      `= ${result}`
    ]

  }

}