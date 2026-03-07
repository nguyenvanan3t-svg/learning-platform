export function solveRatio(parsed:any){

const nums = parsed.numbers

const total = nums[0]
const a = nums[1]
const b = nums[2]

const partA = total * a/(a+b)
const partB = total - partA

return{
answer:`${partA},${partB}`,
steps:`chia theo tỉ lệ ${a}:${b}`
}

}