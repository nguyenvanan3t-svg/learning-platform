export function numberExtractor(text:string){

const matches=text.match(/\d+(\.\d+)?/g)

if(!matches) return []

return matches.map(n=>Number(n))

}