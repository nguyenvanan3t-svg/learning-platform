import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function ratioSolver(parsed: ParsedQuestion): SolveResult {

  const text = parsed.normalized

  const ratioMatch = text.match(/(\d+)\s*:\s*(\d+)/)

  if (!ratioMatch) {

    return {
      answer: "Không tìm thấy tỉ lệ",
      steps: []
    }

  }

  const r1 = Number(ratioMatch[1])
  const r2 = Number(ratioMatch[2])

  const totalMatch = text.match(/tổng\s*(\d+)/)

  if (!totalMatch) {

    return {
      answer: "Không tìm thấy tổng",
      steps: []
    }

  }

  const total = Number(totalMatch[1])

  const sum = r1 + r2

  const a = total * r1 / sum
  const b = total * r2 / sum

  return {

    answer: `${a} và ${b}`,

    steps: [
      `tỉ lệ = ${r1}:${r2}`,
      `tổng tỉ = ${sum}`,
      `số 1 = ${a}`,
      `số 2 = ${b}`
    ]

  }

}