import { ParsedQuestion } from "../types/ParsedQuestion"
import { SolveResult } from "../types/SolveResult"

export function geometrySolver(parsed: ParsedQuestion): SolveResult {

const text = parsed.normalized
const nums = parsed.numbers

/* =========================
HÌNH CHỮ NHẬT
========================= */

if (text.includes("hình chữ nhật")) {

const a = nums[0]
const b = nums[1]

/* diện tích */

if (text.includes("diện tích")) {

const s = a * b

return {
answer: s,
steps: [
`S = a × b`,
`${a} × ${b} = ${s}`
]
}

}

/* chu vi */

if (text.includes("chu vi")) {

const p = 2 * (a + b)

return {
answer: p,
steps: [
`P = 2(a+b)`,
`2(${a}+${b}) = ${p}`
]
}

}

}

/* =========================
HÌNH VUÔNG
========================= */

if (text.includes("hình vuông")) {

/* diện tích -> cạnh */

if (
text.includes("diện tích") &&
(
text.includes("cạnh") ||
text.includes("độ dài") ||
text.includes("tìm cạnh") ||
text.includes("tính cạnh")
)
) {

const area = nums[0]
const side = Math.sqrt(area)

return {
answer: side,
steps: [
`a² = ${area}`,
`a = √${area}`,
`= ${side}`
]
}

}

/* cạnh -> diện tích */

if (text.includes("diện tích")) {

const side = nums[0]
const area = side * side

return {
answer: area,
steps: [
`S = a²`,
`${side}² = ${area}`
]
}

}

/* chu vi */

if (text.includes("chu vi")) {

const side = nums[0]
const p = 4 * side

return {
answer: p,
steps: [
`P = 4a`,
`4 × ${side} = ${p}`
]
}

}

/* chu vi -> cạnh */

if (
text.includes("cạnh") &&
text.includes("chu vi")
) {

const p = nums[0]
const side = p / 4

return {
answer: side,
steps: [
`a = P/4`,
`${p} / 4 = ${side}`
]
}

}

/* gấp đôi cạnh */

if (
text.includes("gấp đôi") &&
text.includes("diện tích")
) {

const area = nums[0]
const newArea = area * 4

return {
answer: newArea,
steps: [
`gấp đôi cạnh → diện tích ×4`,
`${area} × 4 = ${newArea}`
]
}

}

}

/* =========================
TAM GIÁC
========================= */

if (
text.includes("tam giác") &&
text.includes("diện tích")
) {

const base = nums[0]
const height = nums[1]

const s = base * height / 2

return {
answer: s,
steps: [
`S = (a × h) / 2`,
`(${base} × ${height}) / 2 = ${s}`
]
}

}

/* =========================
CHU VI ĐA GIÁC
========================= */

if (
text.includes("chu vi") &&
nums.length >= 3
) {

let sum = 0

for (const n of nums) {
sum += n
}

return {
answer: sum,
steps: [
`Chu vi = tổng các cạnh`,
`${nums.join("+")} = ${sum}`
]
}

}

return {
answer: "",
steps: ["Không giải được"]
}

}