export function gradeAnswer(
user:string,
correct:string,
type:string
){

if(!user) return false

const u=user.replace(/\s/g,"")

const answers=correct.split(",")

return answers.includes(u)

}