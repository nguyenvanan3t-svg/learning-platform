export function solveMotion(distance:number,time:number){

const speed = distance/time

return `
Bước 1: Vận tốc = quãng đường / thời gian

${distance} / ${time} = ${speed}

Kết quả: ${speed}
`

}