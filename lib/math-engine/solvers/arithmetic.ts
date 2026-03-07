export function solveArithmetic(numbers:number[],question:string){

if(numbers.length < 2)
return "Không đủ dữ kiện"

const [a,b] = numbers

const q = question.toLowerCase()

if(q.includes("nhân") || q.includes("×") || q.includes("*")){

const r = a*b

return `
Bước 1: Thực hiện phép nhân

${a} × ${b}

Bước 2:

${a} × ${b} = ${r}

Đáp án: ${r}
`
}

if(q.includes("chia") || q.includes("÷") || q.includes("/")){

const r = a/b

return `
Bước 1: Thực hiện phép chia

${a} ÷ ${b}

${a} ÷ ${b} = ${r}

Đáp án: ${r}
`
}

if(q.includes("trừ") || q.includes("-")){

const r = a-b

return `
Bước 1:

${a} - ${b}

${a} - ${b} = ${r}

Đáp án: ${r}
`
}

const r = a+b

return `
Bước 1:

${a} + ${b}

${a} + ${b} = ${r}

Đáp án: ${r}
`
}