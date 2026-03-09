import { ParsedQuestion } from "../types/ParsedQuestion"

export function ageDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("tuổi")

}