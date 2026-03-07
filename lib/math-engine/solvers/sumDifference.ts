export function solveSumDifference(sum:number,diff:number){

const a = (sum + diff)/2
const b = sum - a

return `
Bước 1:

Số lớn = (tổng + hiệu) / 2

(${sum}+${diff})/2 = ${a}

Bước 2:

Số bé = ${sum} - ${a} = ${b}

`
}