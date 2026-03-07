export function solveSumDifference(parsed:any){

const nums = parsed.numbers

if(nums.length<2){
return{answer:"",steps:"Thiếu dữ liệu"}
}

const sum = nums[0]
const diff = nums[1]

const a = (sum + diff)/2
const b = sum - a

return{
answer:`${a},${b}`,
steps:`a=(S+H)/2 = (${sum}+${diff})/2 = ${a}`
}

}