import { ParsedQuestion } from "../types/ParsedQuestion"

export function motionDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("km") ||
         parsed.normalized.includes("vận tốc")

}