import { ParsedQuestion,SolveResult } from "../types"

export function solveGeometry(parsed:ParsedQuestion):SolveResult{

const q = parsed.question
const n = parsed.numbers

if(n.length===0)
return {answer:"",steps:"Không đủ dữ liệu"}

const a = n[0]

if(q.includes("chu vi") && q.includes("hình vuông")){

const p = a * 4

return{
answer:p.toString(),
steps:`Chu vi = cạnh × 4 = ${a} × 4 = ${p}`
}

}

if(q.includes("diện tích") && q.includes("hình vuông")){

const s = a * a

return{
answer:s.toString(),
steps:`Diện tích = cạnh × cạnh = ${a} × ${a} = ${s}`
}

}

return {answer:"",steps:"Không nhận diện hình"}

}