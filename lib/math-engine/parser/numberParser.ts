export function extractNumbers(text:string){

const nums = text.match(/\d+(\.\d+)?/g)

if(!nums) return []

return nums.map(Number)

}