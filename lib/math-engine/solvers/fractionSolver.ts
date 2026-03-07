export function solveFraction(numbers:number[]){

if(numbers.length<3) return null

const total=numbers[0]
const num=numbers[1]
const den=numbers[2]

const value=total*num/den

return{

answer:String(value),

steps:`${num}/${den} của ${total} = ${value}`

}

}