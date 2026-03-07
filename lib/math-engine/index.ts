import {extractNumbers} from "./parser/numbers"
import {detectType} from "./parser/detect"

import {solveArithmetic} from "./solvers/arithmetic"
import {solveSquareArea,solveSquarePerimeter} from "./solvers/geometry"

export function generateMathSolution(question:string,answer:string){

const numbers = extractNumbers(question)

const type = detectType(question)

if(type === "perimeter")
return solveSquarePerimeter(numbers[0])

if(type === "area")
return solveSquareArea(numbers[0])

const result = solveArithmetic(numbers)

if(result) return result

return "Hãy xem lại cách giải bài toán này."

}