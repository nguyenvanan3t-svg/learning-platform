export function extractNumbers(text: string){

if(!text) return []

const nums = text.match(/\d+(.\d+)?/g)

if(!nums) return []

return nums.map(Number)

}

function normalizeText(text:string){

if(!text) return ""

return text
.toLowerCase()
.replace(/cm²|cm2/g,"cm2")
.replace(/m²|m2/g,"m2")
.replace(/độ/g,"")
.replace(/\s+/g," ")
.trim()

}

function compareMultiAnswer(user:string,correct:string){

const u = extractNumbers(user)
const c = extractNumbers(correct)

if(u.length === 0 || c.length === 0) return false

let matched = 0

for(const n of c){

if(u.includes(n)){
matched++
}

}

return matched === c.length

}

function compareSingleAnswer(user:string,correct:string){

const u = extractNumbers(user)[0]
const c = extractNumbers(correct)[0]

if(u === undefined || c === undefined) return false

return u === c

}

function compareText(user:string,correct:string){

const u = normalizeText(user)
const c = normalizeText(correct)

return u.includes(c)

}

export function gradeAnswer(
user:string,
correct:string,
type:string
){

if(!user || !correct) return false

/* ===== MATH ===== */

if(type === "math"){

const nums = correct.match(/\d+/g)

if(nums && nums.length > 1){
return compareMultiAnswer(user,correct)
}

return compareSingleAnswer(user,correct)

}

/* ===== TEXT ===== */

if(type === "text"){

return compareText(user,correct)

}

return false

}
