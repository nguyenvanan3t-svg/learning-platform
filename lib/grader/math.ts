export function gradeMath(user:string, correct:string){

if(!user || !correct) return false

function normalize(v:string){

v = v.toLowerCase()

// đổi ký hiệu
v = v.replace(/²/g,"2")

// bỏ đơn vị
v = v.replace(/cm2|cm|m2|m|kg|g|đ/g,"")

// bỏ khoảng trắng
v = v.replace(/\s+/g,"")

return v

}

const u = normalize(user)
const c = normalize(correct)

// nếu là số
const un = parseFloat(u)
const cn = parseFloat(c)

if(!isNaN(un) && !isNaN(cn)){
return Math.abs(un - cn) < 0.0001
}

// fallback text
return u === c

}