export function solvePercent(numbers:number[]){

const total=numbers[0]
const percent=numbers[1]

const value=total*percent/100

return{

answer:String(value),

steps:`${percent}% của ${total} = ${value}`

}

}