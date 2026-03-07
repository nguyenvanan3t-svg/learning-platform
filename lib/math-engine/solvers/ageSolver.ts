export function solveAge(numbers:number[]){

// tổng tuổi

if(numbers.length === 2){

const sum = numbers[0]
const diff = numbers[1]

const older = (sum + diff) / 2
const younger = sum - older

return{

answer:`${older},${younger}`,

steps:
`Tuổi lớn = (${sum}+${diff})/2 = ${older}
Tuổi nhỏ = ${sum}-${older} = ${younger}`

}

}

return null

}