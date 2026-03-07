export function gradeMath(user:string,correct:string){

const u = user.match(/\d+(\.\d+)?/g)?.map(Number) || []
const c = correct.match(/\d+(\.\d+)?/g)?.map(Number) || []

if(u.length !== c.length) return false

return c.every(n => u.includes(n))

}