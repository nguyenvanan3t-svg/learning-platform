import { gradeMath } from "./math"
import { gradeText } from "./text"

export function gradeAnswer(
  user: string,
  correct: string,
  type?: string
){

if(type === "math"){
return gradeMath(user, correct)
}

if(type === "text"){
return gradeText(user, correct)
}

// auto detect

if(/[0-9]/.test(correct)){
return gradeMath(user, correct)
}

return gradeText(user, correct)

}