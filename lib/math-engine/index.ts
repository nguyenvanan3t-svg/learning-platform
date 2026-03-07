import { parseMathQuestion } from "./parser/semanticParser"
import { multiStepSolve } from "./reasoning/multiStepSolver"
import { aiFallback } from "./ai/aiFallback"

export async function solveMath(question:string):Promise<{
answer:string
steps:string
}>{

const parsed = parseMathQuestion(question)

const result = multiStepSolve(parsed)

if(result){
return result
}

if (typeof window === "undefined") {
  return await aiFallback(question)
}

return {
  answer: "",
  steps: "Không giải được bài toán"
}

}