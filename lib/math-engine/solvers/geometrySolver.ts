import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function geometrySolver(parsed: ParsedQuestion): SolveResult {

  const text = parsed.normalized
  const nums = parsed.numbers

  if (text.includes("chu vi") && text.includes("hình chữ nhật")) {

    if (text.includes("gấp đôi")) {

      const p = nums[0]

      const width = p / 6
      const length = width * 2

      return {

        answer: `dài ${length}, rộng ${width}`,

        steps: [
          "Giả sử rộng = x",
          "dài = 2x",
          "chu vi = 2(2x + x) = 6x",
          `6x = ${p}`,
          `x = ${width}`
        ]

      }

    }

    if (nums.length >= 2) {

      const l = nums[0]
      const w = nums[1]

      if (text.includes("chu vi")) {

        const result = 2 * (l + w)

        return {
          answer: result,
          steps: [`P = 2(${l}+${w}) = ${result}`]
        }

      }

      if (text.includes("diện tích")) {

        const s = l * w

        return {
          answer: s,
          steps: [`S = ${l} × ${w} = ${s}`]
        }

      }

    }

  }

  return {

    answer: "Không giải được bài hình học",

    steps: []

  }

}