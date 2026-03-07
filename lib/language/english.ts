export function gradeEnglish(user:string,correct:string){

if(!user) return false

user = user.trim().toLowerCase()
correct = correct.trim().toLowerCase()

return user === correct

}