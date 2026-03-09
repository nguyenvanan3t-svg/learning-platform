import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"
import { gcd } from "../utils/mathUtils"

function simplify(num: number, den: number) {

  const g = gcd(num, den)

  return {
    num: num / g,
    den: den / g
  }

}

export function fractionSolver(parsed: ParsedQuestion): SolveResult {

  const text = parsed.normalized

  const match = text.match(/(\d+)\/(\d+)\s*([\+\-\*\/])\s*(\d+)\/(\d+)/)

  if (!match) {
    return {
      answer: "Không giải được phân số",
      steps: []
    }
  }

  const a = Number(match[1])
  const b = Number(match[2])
  const op = match[3]
  const c = Number(match[4])
  const d = Number(match[5])

  let num = 0
  let den = 1

  if (op === "+") {

    num = a * d + b * c
    den = b * d

  } else if (op === "-") {

    num = a * d - b * c
    den = b * d

  } else if (op === "*") {

    num = a * c
    den = b * d

  } else if (op === "/") {

    num = a * d
    den = b * c

  }

  const s = simplify(num, den)

  return {

    answer: `${s.num}/${s.den}`,

    steps: [
      `${a}/${b} ${op} ${c}/${d}`,
      `= ${num}/${den}`,
      `= ${s.num}/${s.den}`
    ]

  }

}