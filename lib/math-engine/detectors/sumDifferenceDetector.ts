import { ParsedQuestion } from "../types/ParsedQuestion"

export function sumDifferenceDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("tổng") &&
         parsed.normalized.includes("hiệu")

}