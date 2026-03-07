export function solveSquareArea(side:number){

const result = side*side

return `
Bước 1: Diện tích hình vuông = cạnh × cạnh

${side} × ${side} = ${result}

Kết quả: ${result}
`

}

export function solveSquarePerimeter(side:number){

const result = side*4

return `
Bước 1: Chu vi hình vuông = cạnh × 4

${side} × 4 = ${result}

Kết quả: ${result}
`

}