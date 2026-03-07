import { extractNumbers } from "./parser/numbers"
import { detectType } from "./parser/detect"

import {
solveSquareArea,
solveSquarePerimeter,
solveRectangleArea,
solveRectanglePerimeter
} from "./solvers/geometry"

import { solveSumDifference } from "./solvers/sumDifference"
import { solveRatio } from "./solvers/ratio"
import { solveMotion } from "./solvers/motion"
import { solveArithmetic } from "./solvers/arithmetic"

export function generateMathSolution(question: string){

const numbers = extractNumbers(question)
const type = detectType(question)

switch(type){

case "square_perimeter":
return solveSquarePerimeter(numbers[0])

case "square_area":
return solveSquareArea(numbers[0])

case "rectangle_perimeter":
return solveRectanglePerimeter(numbers[0],numbers[1])

case "rectangle_area":
return solveRectangleArea(numbers[0],numbers[1])

case "sumDifference":
return solveSumDifference(numbers[0],numbers[1])

case "ratio":
return solveRatio(numbers[0],numbers[1])

case "motion":
return solveMotion(numbers[0],numbers[1])

default:
return solveArithmetic(numbers)

}

}