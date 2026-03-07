import { ParsedQuestion } from "../types"

export function multiStepSolve(parsed:ParsedQuestion){

const q = parsed.question
const nums = parsed.numbers

/* -----------------------------
   tổng hiệu
--------------------------------*/

if(q.includes("tổng") && q.includes("hiệu")){

if(nums.length >= 2){

const sum = nums[0]
const diff = nums[1]

const a = (sum + diff) / 2
const b = sum - a

return{
answer:`${a},${b}`,
steps:
`Bước 1: a = (tổng + hiệu) / 2 = (${sum} + ${diff}) / 2 = ${a}
Bước 2: b = tổng - a = ${sum} - ${a} = ${b}`
}

}

}

/* -----------------------------
   chia theo tỉ lệ
--------------------------------*/

if(q.includes("tỉ lệ") || q.includes("tỷ lệ")){

if(nums.length >= 3){

const total = nums[0]
const r1 = nums[1]
const r2 = nums[2]

const sum = r1 + r2

const a = total * r1 / sum
const b = total - a

return{
answer:`${a},${b}`,
steps:
`Bước 1: Tổng tỉ lệ = ${r1} + ${r2} = ${sum}
Bước 2: Phần thứ nhất = ${total} × ${r1}/${sum} = ${a}
Bước 3: Phần thứ hai = ${total} - ${a} = ${b}`
}

}

}

/* -----------------------------
   chuyển động
--------------------------------*/

if(q.includes("km") && q.includes("giờ")){

if(nums.length >= 2){

const v = nums[0]
const t = nums[1]

const s = v * t

return{
answer:s.toString(),
steps:
`Bước 1: Quãng đường = vận tốc × thời gian
Bước 2: s = ${v} × ${t} = ${s}`
}

}

}

/* -----------------------------
   công việc
--------------------------------*/

if(q.includes("cùng làm") || q.includes("hoàn thành")){

if(nums.length >= 2){

const a = nums[0]
const b = nums[1]

const rate = 1/a + 1/b

const time = 1/rate

return{
answer:time.toFixed(2),
steps:
`Bước 1: Năng suất A = 1/${a}
Bước 2: Năng suất B = 1/${b}
Bước 3: Tổng năng suất = ${rate}
Bước 4: Thời gian = 1 / ${rate} = ${time}`
}

}

}

/* -----------------------------
   trung bình cộng
--------------------------------*/

if(q.includes("trung bình")){

if(nums.length >= 2){

const sum = nums.reduce((a,b)=>a+b,0)

const avg = sum / nums.length

return{
answer:avg.toString(),
steps:
`Bước 1: Tổng = ${nums.join("+")} = ${sum}
Bước 2: Trung bình = ${sum} / ${nums.length} = ${avg}`
}

}

}

/* -----------------------------
   bài toán nhiều bước
--------------------------------*/

if(nums.length >= 3){

let result = nums[0]

let steps = `Bước 1: Giá trị ban đầu = ${result}`

for(let i=1;i<nums.length;i++){

result += nums[i]

steps += `
Bước ${i+1}: ${result - nums[i]} + ${nums[i]} = ${result}`

}

return{
answer:result.toString(),
steps
}

}

/* -----------------------------
   fallback
--------------------------------*/

return null

}