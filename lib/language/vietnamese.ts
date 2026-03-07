export function gradeVietnamese(user:string,correct:string){

if(!user) return false

user = user.toLowerCase().trim()
correct = correct.toLowerCase().trim()

return user === correct

}