function normalize(t:any){

return String(t)
.toLowerCase()
.replace(/×/g,"*")
.replace(/÷/g,"/")
.replace(/:/g,"/")
.replace(/,/g,".")
.replace(/cm²|cm2/g,"")
.replace(/\s+/g," ")
.trim()

}

function parseFraction(t:string){

const m=t.match(/^(-?\d+)\s*\/\s*(-?\d+)$/)

if(!m) return null

const a=Number(m[1])
const b=Number(m[2])

if(b===0) return null

return a/b

}

function parsePercent(t:string){

if(!t.includes("%")) return null

const n=parseFloat(t.replace("%",""))

if(isNaN(n)) return null

return n/100

}

function parseUnit(t:string){

const n=parseFloat(t)

if(isNaN(n)) return null

if(t.includes("mm")) return n/1000
if(t.includes("cm")) return n/100
if(t.includes("dm")) return n/10
if(t.includes("m")) return n

return null

}

function evalExpr(expr:string){

try{

return Function(`"use strict";return (${expr})`)()

}catch{

return null

}

}

function parseNumber(raw:string){

const t=normalize(raw)

// percent
const p=parsePercent(t)
if(p!==null) return p

// fraction
const f=parseFraction(t)
if(f!==null) return f

// unit
const u=parseUnit(t)
if(u!==null) return u

// plain number
const n=parseFloat(t)
if(!isNaN(n)) return n

// expression
const e=evalExpr(t)
if(e!==null) return e

return null

}

function parseSet(text:string){

const t=normalize(text)

const parts=t
.split(/và|,|;|\(|\)| /)
.filter(Boolean)

const nums=parts
.map(parseNumber)
.filter(v=>v!==null)

if(nums.length===0) return null

return nums

}

function compareNumbers(a:number,b:number){

return Math.abs(a-b)<1e-4

}

function compareSets(a:number[],b:number[]){

if(a.length!==b.length) return false

a=[...a].sort((x,y)=>x-y)
b=[...b].sort((x,y)=>x-y)

for(let i=0;i<a.length;i++){

if(!compareNumbers(a[i],b[i]))
return false

}

return true

}

export function gradeAnswer(
user:string,
correct:string|number,
type?:string
){

if(user===undefined || correct===undefined)
return false

if(type==="math"){

// multiple answers
const us=parseSet(user)
const cs=parseSet(String(correct))

if(us && cs){

return compareSets(us,cs)

}

// single number
const nu=parseNumber(user)
const nc=parseNumber(String(correct))

if(nu!==null && nc!==null){

return compareNumbers(nu,nc)

}

return false

}

// text fallback
return normalize(user)===normalize(correct)

}