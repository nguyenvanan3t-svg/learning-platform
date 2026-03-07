export function solveSquareArea(a:number){

const s = a*a

return `
Bước 1: Diện tích hình vuông = cạnh × cạnh

${a} × ${a} = ${s}

Đáp án: ${s}
`

}

export function solveSquarePerimeter(a:number){

const p = a*4

return `
Bước 1: Chu vi hình vuông = cạnh × 4

${a} × 4 = ${p}

Đáp án: ${p}
`

}

export function solveRectangleArea(a:number,b:number){

const s = a*b

return `
Bước 1: Diện tích hình chữ nhật = dài × rộng

${a} × ${b} = ${s}

Đáp án: ${s}
`

}

export function solveRectanglePerimeter(a:number,b:number){

const p = (a+b)*2

return `
Bước 1: Chu vi = (dài + rộng) × 2

(${a}+${b})×2 = ${p}

Đáp án: ${p}
`

}