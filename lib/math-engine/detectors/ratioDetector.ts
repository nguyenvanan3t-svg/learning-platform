import { ParsedQuestion } from "../types/ParsedQuestion"

export function ratioDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("tỉ") ||
         parsed.normalized.includes("lệ")

}