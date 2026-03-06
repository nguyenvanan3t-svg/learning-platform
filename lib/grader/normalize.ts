export function normalize(text:string){

if(!text) return ""

return text
.toLowerCase()
.trim()
.replace(/,/g,".")
.replace(/\s+/g," ")
.replace(/cm²|cm2/g,"cm2")
.replace(/m²|m2/g,"m2")
.replace(/đáp án là/g,"")
.replace(/kết quả là/g,"")

}