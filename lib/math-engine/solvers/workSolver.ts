export function solveWork(parsed:any){

const nums = parsed.numbers

const a = nums[0]
const b = nums[1]

const rate = 1/a + 1/b

const time = 1/rate

return{
answer:time.toString(),
steps:`1/t = 1/${a} + 1/${b}`
}

}