export function extractNumbers(text:string){

const m=text.match(/\d+(\.\d+)?/g)

if(!m) return[]

return m.map(Number)

}