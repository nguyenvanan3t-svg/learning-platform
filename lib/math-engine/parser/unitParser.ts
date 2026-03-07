export function detectUnit(text:string){

if(text.includes("cm")) return "cm"
if(text.includes("m")) return "m"
if(text.includes("km")) return "km"
if(text.includes("kg")) return "kg"

return null

}