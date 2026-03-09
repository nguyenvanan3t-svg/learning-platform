import { ParsedQuestion } from "../types/ParsedQuestion"

export function arithmeticDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("+") ||
         parsed.normalized.includes("-") ||
         parsed.normalized.includes("*") ||
         parsed.normalized.includes("/")

}