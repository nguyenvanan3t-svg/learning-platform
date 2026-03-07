export function convertUnits(question:string){

const q=question.toLowerCase()

if(q.includes("cm")&&q.includes("mm")){

const n=parseFloat(q.match(/\d+/)?.[0]||"0")

return{
answer:(n*10).toString(),
steps:`1cm=10mm → ${n}×10`
}

}

if(q.includes("km")&&q.includes("m")){

const n=parseFloat(q.match(/\d+/)?.[0]||"0")

return{
answer:(n*1000).toString(),
steps:`1km=1000m → ${n}×1000`
}

}

return null

}