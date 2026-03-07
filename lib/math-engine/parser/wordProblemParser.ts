import { ParsedQuestion } from "../types"

export type WordProblem = {
entities:any[]
operations:any[]
}

/* -----------------------
extract nouns + numbers
----------------------- */

function extractEntities(q:string,numbers:number[]){

const entities:any[] = []

const words = q.split(" ")

numbers.forEach((n,i)=>{

entities.push({
value:n,
index:i
})

})

return entities

}

/* -----------------------
detect operations
----------------------- */

function detectOperations(q:string){

const ops:any[] = []

if(q.includes("tổng"))
ops.push({type:"sum"})

if(q.includes("hiệu"))
ops.push({type:"difference"})

if(q.includes("gấp"))
ops.push({type:"multiply"})

if(q.includes("chia"))
ops.push({type:"divide"})

if(q.includes("thêm"))
ops.push({type:"add"})

if(q.includes("bớt"))
ops.push({type:"subtract"})

if(q.includes("còn lại"))
ops.push({type:"remaining"})

if(q.includes("tất cả"))
ops.push({type:"total"})

return ops

}

/* -----------------------
main parser
----------------------- */

export function parseWordProblem(parsed:ParsedQuestion):WordProblem{

const q = parsed.question
const numbers = parsed.numbers

const entities = extractEntities(q,numbers)

const operations = detectOperations(q)

return{
entities,
operations
}

}