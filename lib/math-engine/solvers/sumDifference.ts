export function solveSumDifference(sum:number,diff:number){

const big = (sum+diff)/2
const small = sum-big

return `
Bước 1:

Số lớn = (tổng + hiệu)/2

(${sum}+${diff})/2 = ${big}

Bước 2:

Số bé = ${sum} - ${big} = ${small}
`
}