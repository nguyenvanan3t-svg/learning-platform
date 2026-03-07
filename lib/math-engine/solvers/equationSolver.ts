export function solveEquation(a:number,b:number,c:number){

const x = (c - b) / a

return{
answer:String(x),
steps:`
${a}x + ${b} = ${c}

${a}x = ${c}-${b}
${a}x = ${c-b}

x = ${x}
`
}

}