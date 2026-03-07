export function solveRatio(question:string,numbers:number[]){

const q = question.toLowerCase()

// tổng tỉ

if(q.includes("tổng") && q.includes("tỉ")){

const sum = numbers[0]
const r1 = numbers[1]
const r2 = numbers[2]

const totalRatio = r1 + r2

const a = sum * r1 / totalRatio
const b = sum * r2 / totalRatio

return{
answer:`${a},${b}`,
steps:
`Tổng tỉ = ${r1}+${r2} = ${totalRatio}
Số 1 = ${sum} × ${r1}/${totalRatio} = ${a}
Số 2 = ${sum} × ${r2}/${totalRatio} = ${b}`
}

}

// hiệu tỉ

if(q.includes("hiệu") && q.includes("tỉ")){

const diff = numbers[0]
const r1 = numbers[1]
const r2 = numbers[2]

const ratioDiff = r1 - r2

const a = diff * r1 / ratioDiff
const b = a - diff

return{
answer:`${a},${b}`,
steps:
`Hiệu tỉ = ${r1}-${r2} = ${ratioDiff}
Số lớn = ${diff} × ${r1}/${ratioDiff} = ${a}
Số bé = ${b}`
}

}

// gấp k lần

if(q.includes("gấp")){

const a = numbers[0]
const k = numbers[1]

const result = a * k

return{
answer:String(result),
steps:`${a} × ${k} = ${result}`
}

}

return null

}