import { extractNumbers } from "./numberParser"
import { detectUnit } from "./unitParser"

export function parseMathQuestion(text:string){

const numbers = extractNumbers(text)

const unit = detectUnit(text)

const lower = text.toLowerCase()

let type="arithmetic"

if(lower.includes("hình vuông") || lower.includes("hình chữ nhật"))
type="geometry"

if(lower.includes("%"))
type="percent"

if(lower.includes("tổng") && lower.includes("hiệu"))
type="sumDifference"

if(lower.includes("vận tốc") || lower.includes("km/h"))
type="motion"

return{

text:lower,
numbers,
unit,
type

}

}