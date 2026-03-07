import { ParsedQuestion } from "../types"

type Node = {
name:string
value?:number
}

type Relation = {
type:string
from?:string
to?:string
value?:number
}

export function semanticReasoning(parsed:ParsedQuestion){

const q = parsed.question
const numbers = parsed.numbers

const nodes:Node[] = []
const relations:Relation[] = []

/* ---------------------------
extract base nodes
---------------------------- */

numbers.forEach((n,i)=>{

nodes.push({
name:`n${i}`,
value:n
})

})

/* ---------------------------
relation detection
---------------------------- */

if(q.includes("gấp")){

relations.push({
type:"multiply",
from:"n0",
to:"n1"
})

}

if(q.includes("thêm")){

relations.push({
type:"add",
from:"n0",
to:"n1"
})

}

if(q.includes("bớt")){

relations.push({
type:"subtract",
from:"n0",
to:"n1"
})

}

if(q.includes("tổng")){

relations.push({
type:"sum",
from:"n0",
to:"n1"
})

}

if(q.includes("hiệu")){

relations.push({
type:"difference",
from:"n0",
to:"n1"
})

}

/* ---------------------------
reasoning
---------------------------- */

let result:number | null = null

let steps=""

if(relations.some(r=>r.type==="sum")){

const s = numbers.reduce((a,b)=>a+b,0)

result = s

steps += `Tổng = ${numbers.join("+")} = ${s}`

}

if(relations.some(r=>r.type==="multiply")){

if(numbers.length>=2){

result = numbers[0] * numbers[1]

steps += `\n${numbers[0]} × ${numbers[1]} = ${result}`

}

}

if(relations.some(r=>r.type==="subtract")){

if(numbers.length>=2){

result = numbers[0] - numbers[1]

steps += `\n${numbers[0]} - ${numbers[1]} = ${result}`

}

}

/* ---------------------------
multi-step reasoning
---------------------------- */

if(numbers.length>=3){

let value=numbers[0]

steps += `\nBước 1: ${value}`

for(let i=1;i<numbers.length;i++){

value += numbers[i]

steps += `\nBước ${i+1}: ${value-numbers[i]} + ${numbers[i]} = ${value}`

}

result = value

}

/* ---------------------------
output
---------------------------- */

if(result!==null){

return{
answer:result.toString(),
steps
}

}

return null

}