export function solveSumDifference(numbers:number[]){

const sum=numbers[0]
const diff=numbers[1]

const big=(sum+diff)/2
const small=sum-big

return{

answer:`${big},${small}`,

steps:
`Số lớn = (${sum}+${diff})/2 = ${big}
Số bé = ${sum}-${big}`

}

}