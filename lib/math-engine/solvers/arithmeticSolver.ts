import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

function normalizeExpression(text:string){

let expr = text

// bỏ dấu =
expr = expr.replace(/=/g,"")

// chuẩn hóa phép toán
expr = expr
.replace(/×/g,"*")
.replace(/x/g,"*")
.replace(/:/g,"/")
.replace(/÷/g,"/")

// bỏ chữ
expr = expr.replace(/[^\d+\-*/().]/g," ")

expr = expr.trim()

return expr

}

function safeEval(expression:string){

try{

return Function(`"use strict"; return (${expression})`)()

}catch{

return null

}

}

export function arithmeticSolver(parsed:ParsedQuestion):SolveResult{

let expression = normalizeExpression(parsed.normalized)

if(!expression){

return{
answer:"",
steps:["Không tìm thấy biểu thức"]
}

}

// xử lý phân số dạng a/b
expression = expression.replace(
/(\d+)\s*\/\s*(\d+)/g,
(_,a,b)=>`(${a}/${b})`
)

const result = safeEval(expression)

if(result === null){

return{
answer:"",
steps:["Không tính được biểu thức"]
}

}

return{

answer:result,

steps:[
`Biểu thức: ${expression}`,
`Kết quả: ${result}`
]

}

}