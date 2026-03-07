export function tokenize(text:string){

return text
.toLowerCase()
.replace(/[.,?]/g,"")
.split(" ")

}