export function solveGeometry(q:string,n:number[]){

if(q.includes("hình vuông")){

const a=n[0]

return{
answer:String(a*a),
steps:`Diện tích = ${a} × ${a}`
}

}

if(q.includes("hình chữ nhật")){

const area=n[0]*n[1]

return{
answer:String(area),
steps:`Diện tích = ${n[0]} × ${n[1]}`
}

}

return null

}