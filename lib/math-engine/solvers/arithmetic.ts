export function solveArithmetic(numbers:number[]){

if(numbers.length < 2) return "Không đủ dữ kiện"

const [a,b] = numbers

return `
Bước 1:

${a} + ${b}

Bước 2:

${a+b}

Đáp án: ${a+b}
`

}