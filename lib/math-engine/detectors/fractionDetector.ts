import { ParsedQuestion } from "../types/ParsedQuestion"

export function fractionDetector(parsed: ParsedQuestion): boolean {

  return parsed.normalized.includes("/")

}