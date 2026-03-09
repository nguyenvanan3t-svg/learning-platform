import { ParsedQuestion } from "../types/ParsedQuestion"

export function geometryDetector(parsed: ParsedQuestion): boolean {

  const words = parsed.keywords

  return words.includes("hình") ||
         words.includes("chu") ||
         words.includes("diện")

}