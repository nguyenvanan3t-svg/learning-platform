import { normalize } from "./normalize"

export function gradeText(user:string,correct:string){

const u = normalize(user)
const c = normalize(correct)

if(u === c)
return true

// chấp nhận chứa keyword

if(c.length>5 && u.includes(c))
return true

return false

}