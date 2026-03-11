import { ParsedQuestion } from "../types/ParsedQuestion"

export function arithmeticDetector(parsed:ParsedQuestion){

const text=parsed.normalized

if(/[+\-*/()]/.test(text))
return true

if(parsed.numbers.length>=2)
return true

return false

}