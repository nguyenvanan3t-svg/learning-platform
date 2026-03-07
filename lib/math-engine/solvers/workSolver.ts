export function solveWork(numbers:number[]){

// dạng: A làm x giờ, B làm y giờ

if(numbers.length < 2) return null

const t1 = numbers[0]
const t2 = numbers[1]

// năng suất

const r1 = 1/t1
const r2 = 1/t2

const r = r1 + r2

const totalTime = 1/r

return{

answer:String(totalTime),

steps:
`Năng suất A = 1/${t1}
Năng suất B = 1/${t2}

Năng suất chung = ${r1}+${r2} = ${r}

Thời gian hoàn thành = 1/${r} = ${totalTime}`

}

}