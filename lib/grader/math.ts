export function gradeMath(user:string, correct:string){

if(!user || !correct) return false

// chuẩn hoá
user = user.toLowerCase()
correct = correct.toLowerCase()

// bỏ đơn vị
user = user.replace(/cm2|cm²|cm|m2|m²|m|đ|kg|g/g,"")
correct = correct.replace(/cm2|cm²|cm|m2|m²|m|đ|kg|g/g,"")

// lấy số
const userNum = parseFloat(user)
const correctNum = parseFloat(correct)

if(!isNaN(userNum) && !isNaN(correctNum)){

return Math.abs(userNum - correctNum) < 0.0001

}

// fallback text
return user.trim() === correct.trim()

}