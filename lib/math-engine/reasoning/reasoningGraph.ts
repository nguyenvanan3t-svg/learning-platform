export function buildReasoningGraph(numbers:number[]){

const steps=[]

let result=numbers[0]

for(let i=1;i<numbers.length;i++){

steps.push({
op:"add",
value:numbers[i]
})

result+=numbers[i]

}

return{
result,
steps
}

}