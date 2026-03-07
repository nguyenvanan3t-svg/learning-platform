export const unitMap: Record<string, number> = {

mm: 0.1,
cm: 1,
dm: 10,
m: 100,
km: 100000

}

export function detectUnit(text:string){

const keys = Object.keys(unitMap)

for(const k of keys){

if(text.includes(k)) return k

}

return null

}