export function gradeAnswer(user:string,correct:string,type?:string){

if(!user || !correct) return false

const normalize = (t:string)=>
t
.toLowerCase()
.replace(/cm2|cm²/g,"")
.replace(/[^\d.,-]/g,"")
.replace(",",".")
.trim()

const u = normalize(user)
const c = normalize(correct)

if(type === "math"){

const nu = parseFloat(u)
const nc = parseFloat(c)

if(isNaN(nu) || isNaN(nc)) return false

return Math.abs(nu-nc) < 0.0001
}

return u === c

}