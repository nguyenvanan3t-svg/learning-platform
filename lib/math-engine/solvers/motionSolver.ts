import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function motionSolver(parsed: ParsedQuestion): SolveResult {

  const text = parsed.normalized

  const nums = parsed.numbers

  if (text.includes("vận tốc") && text.includes("quãng đường")) {

    const v = nums[0]
    const s = nums[1]

    const t = s / v

    return {

      answer: t,

      steps: [`t = s / v = ${s} / ${v} = ${t}`]

    }

  }

  if (text.includes("thời gian") && text.includes("vận tốc")) {

    const t = nums[0]
    const v = nums[1]

    const s = v * t

    return {

      answer: s,

      steps: [`s = v × t = ${v} × ${t} = ${s}`]

    }

  }

  return {

    answer: "Không xác định được bài chuyển động",

    steps: []

  }

}