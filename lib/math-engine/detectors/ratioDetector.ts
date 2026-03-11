import { ParsedQuestion } from "../types/ParsedQuestion"

export function ratioDetector(parsed: ParsedQuestion){

const text = parsed.normalized

// bắt dạng a:b
if(/\d+\s*:\s*\d+/.test(text)){
return true
}

// bắt các từ khóa
if(text.includes("tỉ lệ")) return true
if(text.includes("tỉ số")) return true

// bắt dạng bài toán chia theo tỉ lệ
if(text.includes("tổng") && /\d+\s*:\s*\d+/.test(text)){
return true
}

return false

}