export function solveMotion(parsed:any){

const nums = parsed.numbers

if(nums.length<2){
return{answer:"",steps:"Thiếu dữ liệu"}
}

const v = nums[0]
const t = nums[1]

const s = v * t

return{
answer:s.toString(),
steps:`Quãng đường = vận tốc × thời gian = ${v} × ${t} = ${s}`
}

}