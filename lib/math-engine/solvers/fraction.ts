export function addFraction(a:number,b:number,c:number,d:number){

const num = a*d + b*c
const den = b*d

return `
Bước 1: Quy đồng mẫu

Bước 2:

(${a}×${d} + ${c}×${b}) / (${b}×${d})

Bước 3:

${num}/${den}

`
}