import { ParsedQuestion } from "../types/ParsedQuestion"

export function percentDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("%")

}