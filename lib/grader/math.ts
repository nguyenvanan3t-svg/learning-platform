import { normalize } from "./normalize"

function parseNumber(val:string){

const n = Number(val)

if(!isNaN(n)) return n

return null

}

function parseFraction(val:string){

if(val.includes("/")){

const [a,b] = val.split("/")

const na = Number(a)
const nb = Number(b)

if(!isNaN(na) && !isNaN(nb) && nb!==0){
return na/nb
}

}

return null

}

export function gradeMath(user:string,correct:string){

const u = normalize(user)
const c = normalize(correct)

if(u === c) return true


// số

const nu = parseNumber(u)
const nc = parseNumber(c)

if(nu!==null && nc!==null){

if(Math.abs(nu-nc) < 0.0001)
return true

}


// phân số

const fu = parseFraction(u)
const fc = parseFraction(c)

if(fu!==null && fc!==null){

if(Math.abs(fu-fc) < 0.0001)
return true

}


// số + đơn vị

const regex = /^([0-9.]+)\s*([a-z0-9²]+)/

const mu = u.match(regex)
const mc = c.match(regex)

if(mu && mc){

const nu2 = Number(mu[1])
const nc2 = Number(mc[1])

const uu = mu[2]
const uc = mc[2]

if(Math.abs(nu2-nc2)<0.0001 && uu===uc)
return true

}

return false

}