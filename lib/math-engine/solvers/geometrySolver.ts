import { ParsedQuestion } from "../types"

export function solveGeometry(parsed: ParsedQuestion){

const q = parsed.question.toLowerCase()
const nums = parsed.numbers

/* ----------------------------
HÌNH CHỮ NHẬT
-----------------------------*/

if(q.includes("hình chữ nhật")){

const length = nums[0]
const width = nums[1]

const area1 = length * width

/* có thay đổi kích thước */

if(q.includes("giảm") || q.includes("tăng")){

let newLength = length
let newWidth = width

let index = 2

if(q.includes("giảm chiều dài")){

const decrease = nums[index]
newLength = length - decrease
index++

}

if(q.includes("tăng chiều rộng")){

const increase = nums[index]
newWidth = width + increase

}

const area2 = newLength * newWidth

return{
answer:`${area1}, ${area2}`,
steps:
`Diện tích ban đầu = ${length} × ${width} = ${area1}
Chiều dài mới = ${length} - ${nums[2]} = ${newLength}
Chiều rộng mới = ${width} + ${nums[3]} = ${newWidth}
Diện tích mới = ${newLength} × ${newWidth} = ${area2}`
}

}

return{
answer: area1.toString(),
steps:`${length} × ${width} = ${area1}`
}

}

/* ----------------------------
HÌNH VUÔNG
-----------------------------*/

if(q.includes("hình vuông")){

const a = nums[0]

if(q.includes("chu vi")){

const p = a * 4

return{
answer:p.toString(),
steps:`Chu vi = ${a} × 4 = ${p}`
}

}

if(q.includes("diện tích")){

const s = a * a

return{
answer:s.toString(),
steps:`Diện tích = ${a} × ${a} = ${s}`
}

}

}

return null
}