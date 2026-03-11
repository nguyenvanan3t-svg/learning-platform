import { ParsedQuestion } from "../types/ParsedQuestion"

export function geometryDetector(parsed:ParsedQuestion){

const text=parsed.normalized

if(text.includes("chu vi")) return true

if(text.includes("diện tích")) return true

if(text.includes("hình chữ nhật")) return true

if(text.includes("hình vuông")) return true

return false

}