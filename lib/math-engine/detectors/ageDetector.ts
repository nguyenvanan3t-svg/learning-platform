import { ParsedQuestion } from "../types/ParsedQuestion"

export function ageDetector(parsed:ParsedQuestion){

return parsed.normalized.includes("tuổi")

}