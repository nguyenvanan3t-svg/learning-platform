import { ParsedQuestion } from "../types/ParsedQuestion"

export function workDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("cùng làm")

}