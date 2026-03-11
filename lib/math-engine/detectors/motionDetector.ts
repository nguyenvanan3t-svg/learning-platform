import { ParsedQuestion } from "../types/ParsedQuestion"

export function motionDetector(parsed:ParsedQuestion){

const text=parsed.normalized

if(text.includes("vận tốc")) return true

if(text.includes("quãng đường")) return true

if(text.includes("km/h")) return true

return false

}