import { ParsedQuestion } from "../types/ParsedQuestion"

export function percentDetector(parsed:ParsedQuestion){

return parsed.normalized.includes("%")

}