import { gradeMath } from "./math"

export function gradeAnswer(user:string,correct:string,type?:string){

if(!user) return false

if(type === "math"){
return gradeMath(user,correct)
}

return user.trim().toLowerCase() === correct.trim().toLowerCase()

}