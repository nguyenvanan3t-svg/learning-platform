export function solveAge(parsed:any){

const nums = parsed.numbers

const a = nums[0]
const b = nums[1]

return{
answer:(a+b).toString(),
steps:`Tổng tuổi = ${a} + ${b}`
}

}