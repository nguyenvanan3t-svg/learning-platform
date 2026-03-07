export function solveEquationSymbolic(q:string){

const text=q.replace(/\s/g,"")

let m=text.match(/(\d*)x\+(\d+)=(\d+)/)

if(m){

const a=m[1]?parseFloat(m[1]):1

const b=parseFloat(m[2])

const c=parseFloat(m[3])

const x=(c-b)/a

return{
answer:x.toString(),
steps:`(${c}-${b})/${a}=${x}`
}

}

m=text.match(/x\+(\d+)=(\d+)/)

if(m){

const a=parseFloat(m[1])

const b=parseFloat(m[2])

const x=b-a

return{
answer:x.toString(),
steps:`${b}-${a}=${x}`
}

}

return null

}