export function generateArithmeticTests(){

const tests=[]

for(let i=0;i<50;i++){

const a=Math.floor(Math.random()*100)
const b=Math.floor(Math.random()*100)

tests.push({
question:`${a}+${b}`,
expected:String(a+b)
})

tests.push({
question:`${a}-${b}`,
expected:String(a-b)
})

tests.push({
question:`${a}*${b}`,
expected:String(a*b)
})

if(b!==0){
tests.push({
question:`${a}/${b}`,
expected:String(a/b)
})
}

}

return tests

}