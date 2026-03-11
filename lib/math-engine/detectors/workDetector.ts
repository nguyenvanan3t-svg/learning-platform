import { ParsedQuestion } from "../types/ParsedQuestion"

export function workDetector(parsed:ParsedQuestion){

const text=parsed.normalized

if(text.includes("cùng làm")) return true

if(text.includes("bao lâu xong")) return true

return false

}