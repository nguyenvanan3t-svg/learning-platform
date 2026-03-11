import { normalizeText } from "./core/normalizeText"
import { numberExtractor } from "./core/numberExtractor"
import { detectProblemType } from "./core/problemDetector"

import { arithmeticSolver } from "./solvers/arithmeticSolver"
import { fractionSolver } from "./solvers/fractionSolver"
import { percentSolver } from "./solvers/percentSolver"
import { ratioSolver } from "./solvers/ratioSolver"
import { sumDifferenceSolver } from "./solvers/sumDifferenceSolver"
import { motionSolver } from "./solvers/motionSolver"
import { workSolver } from "./solvers/workSolver"
import { ageSolver } from "./solvers/ageSolver"
import { geometrySolver } from "./solvers/geometrySolver"

export function solveMath(question:string){

const normalized=normalizeText(question)

const numbers=numberExtractor(normalized)

const parsed={
raw:question,
normalized,
numbers
}

const type=detectProblemType(parsed)

switch(type){

case "fraction":
return fractionSolver(parsed)

case "percent":
return percentSolver(parsed)

case "ratio":
return ratioSolver(parsed)

case "sumDifference":
return sumDifferenceSolver(parsed)

case "motion":
return motionSolver(parsed)

case "work":
return workSolver(parsed)

case "age":
return ageSolver(parsed)

case "geometry":
return geometrySolver(parsed)

default:
return arithmeticSolver(parsed)

}

}