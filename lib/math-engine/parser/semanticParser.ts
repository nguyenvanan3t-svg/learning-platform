import { extractNumbers } from "../utils/numberUtils"

export type ParsedQuestion = {
type:string
question:string
numbers:number[]
entities:any
}

/* -----------------------------
   keyword helpers
--------------------------------*/

function has(q:string,words:string[]){

return words.some(w=>q.includes(w))

}

/* -----------------------------
   geometry detection
--------------------------------*/

function detectGeometry(q:string,numbers:number[]){

if(has(q,["chu vi","perimeter"])){

if(has(q,["hình vuông","square"]))
return {type:"geometry_square_perimeter"}

if(has(q,["hình chữ nhật","rectangle"]))
return {type:"geometry_rectangle_perimeter"}

}

if(has(q,["diện tích","area"])){

if(has(q,["hình vuông","square"]))
return {type:"geometry_square_area"}

if(has(q,["hình chữ nhật","rectangle"]))
return {type:"geometry_rectangle_area"}

}

return null

}

/* -----------------------------
   fraction detection
--------------------------------*/

function detectFraction(q:string){

if(has(q,["phân số","1/","2/","3/"])){

if(has(q,["cộng","trừ","nhân","chia"]))
return {type:"fraction_basic"}

return {type:"fraction_word"}

}

return null

}

/* -----------------------------
   percent detection
--------------------------------*/

function detectPercent(q:string){

if(has(q,["%","phần trăm"])){

if(has(q,["tính","bao nhiêu"]))
return {type:"percent_basic"}

return {type:"percent_word"}

}

return null

}

/* -----------------------------
   ratio detection
--------------------------------*/

function detectRatio(q:string){

if(has(q,["tỉ lệ","tỷ lệ",":"])){

if(has(q,["chia"]))
return {type:"ratio_basic"}

return {type:"ratio_word"}

}

return null

}

/* -----------------------------
   sum difference detection
--------------------------------*/

function detectSumDifference(q:string){

if(has(q,["tổng","hiệu"])){

return {type:"sum_difference"}

}

return null

}

/* -----------------------------
   motion detection
--------------------------------*/

function detectMotion(q:string){

if(has(q,["km","m","vận tốc","km/h"])){

if(has(q,["ngược chiều","đuổi kịp"]))
return {type:"motion_relative"}

return {type:"motion_basic"}

}

return null

}

/* -----------------------------
   work detection
--------------------------------*/

function detectWork(q:string){

if(has(q,["cùng làm","hoàn thành","công việc"])){

return {type:"work_basic"}

}

return null

}

/* -----------------------------
   age detection
--------------------------------*/

function detectAge(q:string){

if(has(q,["tuổi"])){

return {type:"age_basic"}

}

return null

}

/* -----------------------------
   equation detection
--------------------------------*/

function detectEquation(q:string){

if(has(q,["x =","tìm x"])){

return {type:"equation_basic"}

}

return null

}

/* -----------------------------
   unit conversion
--------------------------------*/

function detectUnits(q:string){

if(has(q,["cm","mm","km","kg","g"])){

if(has(q,["đổi","bằng bao nhiêu"]))
return {type:"unit_conversion"}

}

return null

}

/* -----------------------------
   average detection
--------------------------------*/

function detectAverage(q:string){

if(has(q,["trung bình"])){

return {type:"average"}

}

return null

}

/* -----------------------------
   remainder detection
--------------------------------*/

function detectRemainder(q:string){

if(has(q,["dư","chia"])){

return {type:"remainder"}

}

return null

}

/* -----------------------------
   arithmetic detection
--------------------------------*/

function detectArithmetic(q:string){

if(has(q,["cộng","trừ","nhân","chia"])){

if(has(q,["bao nhiêu","tính"]))
return {type:"arithmetic_basic"}

return {type:"arithmetic_word"}

}

return null

}

/* -----------------------------
   multi step detection
--------------------------------*/

function detectMultiStep(q:string){

if(has(q,["sau đó","tiếp theo","cuối cùng"])){

return {type:"multi_step_word"}

}

return null

}

/* --------------------------------
   main parser
---------------------------------*/

export function parseQuestion(question:string):ParsedQuestion{

const q = question.toLowerCase()

const numbers = extractNumbers(q)

/* geometry */

const geometry = detectGeometry(q,numbers)

if(geometry)
return{
type:geometry.type,
question:q,
numbers,
entities:{}
}

/* fraction */

const fraction = detectFraction(q)

if(fraction)
return{
type:fraction.type,
question:q,
numbers,
entities:{}
}

/* percent */

const percent = detectPercent(q)

if(percent)
return{
type:percent.type,
question:q,
numbers,
entities:{}
}

/* ratio */

const ratio = detectRatio(q)

if(ratio)
return{
type:ratio.type,
question:q,
numbers,
entities:{}
}

/* sum difference */

const sumDiff = detectSumDifference(q)

if(sumDiff)
return{
type:sumDiff.type,
question:q,
numbers,
entities:{}
}

/* motion */

const motion = detectMotion(q)

if(motion)
return{
type:motion.type,
question:q,
numbers,
entities:{}
}

/* work */

const work = detectWork(q)

if(work)
return{
type:work.type,
question:q,
numbers,
entities:{}
}

/* age */

const age = detectAge(q)

if(age)
return{
type:age.type,
question:q,
numbers,
entities:{}
}

/* equation */

const equation = detectEquation(q)

if(equation)
return{
type:equation.type,
question:q,
numbers,
entities:{}
}

/* unit */

const unit = detectUnits(q)

if(unit)
return{
type:unit.type,
question:q,
numbers,
entities:{}
}

/* average */

const avg = detectAverage(q)

if(avg)
return{
type:avg.type,
question:q,
numbers,
entities:{}
}

/* remainder */

const remainder = detectRemainder(q)

if(remainder)
return{
type:remainder.type,
question:q,
numbers,
entities:{}
}

/* arithmetic */

const arithmetic = detectArithmetic(q)

if(arithmetic)
return{
type:arithmetic.type,
question:q,
numbers,
entities:{}
}

/* multi step */

const multi = detectMultiStep(q)

if(multi)
return{
type:multi.type,
question:q,
numbers,
entities:{}
}

/* fallback */

return{
type:"arithmetic_basic",
question:q,
numbers,
entities:{}
}

}