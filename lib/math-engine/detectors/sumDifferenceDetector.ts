import { ParsedQuestion } from "../types/ParsedQuestion"

export function sumDifferenceDetector(parsed:ParsedQuestion){

const text=parsed.normalized

if(text.includes("tổng") && text.includes("hiệu"))
return true

return false

}