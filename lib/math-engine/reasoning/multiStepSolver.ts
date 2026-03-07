import { solveArithmetic } from "../solvers/arithmeticSolver"
import { solveGeometry } from "../solvers/geometrySolver"
import { solveFraction } from "../solvers/fractionSolver"
import { solvePercent } from "../solvers/percentSolver"
import { solveMotion } from "../solvers/motionSolver"
import { solveSumDifference } from "../solvers/sumDifferenceSolver"

export function multiStepSolve(parsed:any){

const q=parsed.text
const n=parsed.numbers

if(parsed.type==="geometry")
return solveGeometry(q,n)

if(parsed.type==="percent")
return solvePercent(n)

if(parsed.type==="motion")
return solveMotion(n)

if(parsed.type==="sumDifference")
return solveSumDifference(n)

if(parsed.type==="arithmetic")
return solveArithmetic(n)

return null

}