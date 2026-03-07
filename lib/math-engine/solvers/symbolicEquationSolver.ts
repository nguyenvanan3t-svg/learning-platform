export function solveEquationSymbolic(question:string){

const q = question.replace(/\s/g,"")

/* --------------------
 ax + b = c
--------------------- */

let match = q.match(/(\d*)x\+(\d+)=(\d+)/)

if(match){

const a = match[1] ? parseFloat(match[1]) : 1
const b = parseFloat(match[2])
const c = parseFloat(match[3])

const x = (c - b) / a

return{
answer:x.toString(),
steps:`(${c} - ${b}) / ${a} = ${x}`
}

}

/* --------------------
 x + a = b
--------------------- */

match = q.match(/x\+(\d+)=(\d+)/)

if(match){

const a = parseFloat(match[1])
const b = parseFloat(match[2])

const x = b - a

return{
answer:x.toString(),
steps:`${b} - ${a} = ${x}`
}

}

/* --------------------
 a - x = b
--------------------- */

match = q.match(/(\d+)-x=(\d+)/)

if(match){

const a = parseFloat(match[1])
const b = parseFloat(match[2])

const x = a - b

return{
answer:x.toString(),
steps:`${a} - ${b} = ${x}`
}

}

/* --------------------
 x / a = b
--------------------- */

match = q.match(/x\/(\d+)=(\d+)/)

if(match){

const a = parseFloat(match[1])
const b = parseFloat(match[2])

const x = a * b

return{
answer:x.toString(),
steps:`${a} × ${b} = ${x}`
}

}

/* --------------------
 a / x = b
--------------------- */

match = q.match(/(\d+)\/x=(\d+)/)

if(match){

const a = parseFloat(match[1])
const b = parseFloat(match[2])

const x = a / b

return{
answer:x.toString(),
steps:`${a} / ${b} = ${x}`
}

}

return null

}