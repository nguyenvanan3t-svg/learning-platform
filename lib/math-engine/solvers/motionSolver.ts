export function motionSolver(parsed:any){

const text=parsed.normalized
const nums=parsed.numbers

/* time = distance / speed */

if(text.includes("vận tốc")){

const s=nums[0]
const v=nums[1]

return{
answer:s/v,
steps:[`${s}/${v}=${s/v}`]
}

}

/* distance = speed × time */

if(text.includes("mỗi giờ")){

const t=nums[0]
const v=nums[1]

return{
answer:t*v,
steps:[`${t}×${v}=${t*v}`]
}

}

return{
answer:"",
steps:["Không nhận dạng"]
}

}