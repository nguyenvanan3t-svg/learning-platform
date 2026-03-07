export function extractNumbers(text:string){

const matches = text.match(/\d+(\.\d+)?/g)

if(!matches) return []

return matches.map(Number)

}