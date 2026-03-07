export function solveSquareArea(a:number){

const s = a*a

return `
Bước 1: Diện tích hình vuông

S = cạnh × cạnh

${a} × ${a} = ${s}

Đáp án: ${s}
`
}

export function solveSquarePerimeter(a:number){

const p = a*4

return `
Bước 1: Chu vi hình vuông

P = cạnh × 4

${a} × 4 = ${p}

Đáp án: ${p}
`
}

export function solveRectangleArea(a:number,b:number){

const s = a*b

return `
Bước 1: Diện tích hình chữ nhật

S = dài × rộng

${a} × ${b} = ${s}

Đáp án: ${s}
`
}

export function solveRectanglePerimeter(a:number,b:number){

const p = (a+b)*2

return `
Bước 1: Chu vi hình chữ nhật

P = (dài + rộng) × 2

(${a}+${b}) × 2 = ${p}

Đáp án: ${p}
`
}