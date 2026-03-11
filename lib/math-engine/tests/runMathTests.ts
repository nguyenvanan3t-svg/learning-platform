import { solveMath } from "../index"
import { mathTestCases } from "./mathTestCases"
import { mathAdvancedTestCases } from "./mathAdvancedTestCases"
import { mathWordProblemCases } from "./mathWordProblemCases"
import { mathFullTestCases } from "./mathFullTestCases"
import { generateArithmeticTests } from "./generateTests"

let pass = 0
let fail = 0

const allTests=[
...mathTestCases,
...mathAdvancedTestCases,
...mathWordProblemCases,
...mathFullTestCases,
...generateArithmeticTests()
]

for(const test of allTests){

const result = solveMath(test.question)

const answer = String(result?.answer)
const expected = String(test.expected)

const nu = Number(answer)
const ne = Number(expected)

if(!isNaN(nu) && !isNaN(ne)){

if(Math.abs(nu-ne) < 1e-6){

console.log("PASS:",test.question)
pass++
continue

}

}

if(answer===expected){

console.log("PASS:", test.question)
pass++

} else {

console.log("FAIL:", test.question)
console.log("Expected:", expected)
console.log("Got:", answer)
fail++

}

}

console.log("------------")
console.log("PASS:", pass)
console.log("FAIL:", fail)
console.log("TOTAL:",allTests.length)