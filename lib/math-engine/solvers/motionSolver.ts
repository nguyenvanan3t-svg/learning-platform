export function solveMotion(numbers:number[]){

const speed=numbers[0]
const time=numbers[1]

const distance=speed*time

return{

answer:String(distance),

steps:`${speed} × ${time} = ${distance}`

}

}