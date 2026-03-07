export function solveMotion(distance:number,time:number){

const v = distance/time

return `
Bước 1:

Vận tốc = quãng đường / thời gian

${distance}/${time} = ${v}

Đáp án: ${v}
`

}