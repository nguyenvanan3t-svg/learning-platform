import { solveMath } from "../index"
import { mathTestCases } from "./mathTestCases"

let pass = 0
let fail = 0

for (const test of mathTestCases) {

  const result = solveMath(test.question)

  if (String(result.answer) === String(test.expected)) {

    console.log("PASS:", test.question)

    pass++

  } else {

    console.log("FAIL:", test.question)

    console.log("Expected:", test.expected)

    console.log("Got:", result.answer)

    fail++

  }

}

console.log("------------")

console.log("PASS:", pass)

console.log("FAIL:", fail)

console.log("TOTAL:", mathTestCases.length)