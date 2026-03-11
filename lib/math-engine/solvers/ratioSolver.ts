import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function ratioSolver(parsed: ParsedQuestion): SolveResult {

const nums = parsed.numbers
const text = parsed.normalized

if(nums.length < 3){
return{
answer:"",
steps:["Không đủ dữ kiện"]
}
}

/*
Tìm 2 số nhỏ nhất làm tỉ lệ
số lớn nhất làm tổng / hiệu
*/

// tìm 2 số nhỏ làm tỉ lệ (không đảo thứ tự)
let ratioNums = nums.filter(n => n < Math.max(...nums))

if(ratioNums.length < 2){
return{
answer:"",
steps:["Không tìm được tỉ lệ"]
}
}

const a = ratioNums[0]
const b = ratioNums[1]

const main = Math.max(...nums)

/* ----------------
TỔNG + TỈ LỆ
---------------- */

if(text.includes("tổng")){

const ratioSum=a+b
const unit=main/ratioSum

const x=unit*a
const y=unit*b

return{
answer:`${x} và ${y}`,
steps:[
`Tổng tỉ lệ ${a}+${b}=${ratioSum}`,
`1 phần=${main}/${ratioSum}=${unit}`,
`Số thứ nhất=${x}`,
`Số thứ hai=${y}`
]
}

}

/* ----------------
HIỆU + TỈ LỆ
---------------- */

if(text.includes("hiệu")){

const ratioDiff = Math.abs(a - b)
const unit = main / ratioDiff

const big = Math.max(a,b)
const small = Math.min(a,b)

const x = unit * small
const y = unit * big

return{
answer:`${x} và ${y}`,
steps:[
`Hiệu tỉ lệ ${a}-${b}=${ratioDiff}`,
`1 phần=${main}/${ratioDiff}=${unit}`,
`Số thứ nhất=${x}`,
`Số thứ hai=${y}`
]
}

}

/* ----------------
CHIA THEO TỈ LỆ
---------------- */

if(text.includes("chia")){

const ratioSum=a+b
const unit=main/ratioSum

const x=unit*a
const y=unit*b

return{
answer:`${x} và ${y}`,
steps:[
`Tổng tỉ lệ ${a}+${b}=${ratioSum}`,
`1 phần=${main}/${ratioSum}=${unit}`,
`Phần thứ nhất=${x}`,
`Phần thứ hai=${y}`
]
}

}

return{
answer:"",
steps:["Không nhận dạng được dạng tỉ lệ"]
}

}