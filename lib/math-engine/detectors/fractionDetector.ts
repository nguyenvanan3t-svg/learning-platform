import { ParsedQuestion } from "../types/ParsedQuestion"

export function fractionDetector(parsed: ParsedQuestion) {

const text = parsed.normalized

// chỉ nhận dạng phân số dạng a/b
// nhưng KHÔNG phải biểu thức như 144/12 hoặc 125/(5*5)

const fractionPattern = /\b\d+\/\d+\b/

if (fractionPattern.test(text) && !/[()*]/.test(text)) {
return true
}

return false

}