export function solvePercent(parsed:any){

const nums = parsed.numbers

const value = nums[0]
const percent = nums[1]

const result = value * percent / 100

return{
answer:result.toString(),
steps:`${percent}% của ${value} = ${result}`
}

}