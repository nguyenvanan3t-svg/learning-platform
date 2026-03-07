export function solveArithmetic(numbers:number[]){

if(numbers.length < 2)
return null

const [a,b] = numbers

return `
Bước 1: Thực hiện phép tính

${a} + ${b}

Bước 2:

${a} + ${b} = ${a+b}

Kết quả: ${a+b}
`

}