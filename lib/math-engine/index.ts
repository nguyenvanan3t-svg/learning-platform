import { parseQuestion } from "./parser/semanticParser"
import { parseWordProblem } from "./parser/wordProblemParser"
import { multiStepSolve } from "./reasoning/multiStepSolver"
import { solveEquationSymbolic } from "./symbolic/symbolicEquationSolver"
import { convertUnits } from "./units/unitConversion"
import { solveArithmetic } from "./solvers/arithmeticSolver"
import { solveGeometry } from "./solvers/geometrySolver"
import { semanticReasoning } from "./reasoning/semanticReasoningEngine"

export async function solveMath(question:string){

const parsed=parseQuestion(question)

/* unit conversion */

const unit=convertUnits(question)

if(unit) return unit

/* symbolic equation */

const eq=solveEquationSymbolic(question)

if(eq) return eq

/* word problem */

parseWordProblem(parsed)

/* geometry */

if(parsed.type==="geometry")
return solveGeometry(parsed)

/* arithmetic */

if(parsed.type==="arithmetic")
return solveArithmetic(parsed)

/* multi step */

const multi=multiStepSolve(parsed)

if(multi)
return multi
const reasoning = semanticReasoning(parsed)

if(reasoning)
return reasoning

return{
answer:"",
steps:"Không giải được"
}

}