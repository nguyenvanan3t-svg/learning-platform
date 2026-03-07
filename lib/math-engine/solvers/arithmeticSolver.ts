export function solveArithmetic(numbers:number[]){

if(numbers.length<2) return null

const a=numbers[0]
const b=numbers[1]

return{
answer:String(a*b),
steps:`${a} × ${b} = ${a*b}`
}

}