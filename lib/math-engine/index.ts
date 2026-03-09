import { normalizeText } from "./core/normalizeText"
import { extractNumbers } from "./core/numberExtractor"
import { extractKeywords } from "./core/keywordExtractor"
import { detectProblemType } from "./core/problemDetector"

import { ParsedQuestion } from "./types/ParsedQuestion"
import { SolveResult } from "./types/SolveResult"

import { arithmeticSolver } from "./solvers/arithmeticSolver"
import { geometrySolver } from "./solvers/geometrySolver"
import { fractionSolver } from "./solvers/fractionSolver"
import { percentSolver } from "./solvers/percentSolver"
import { ratioSolver } from "./solvers/ratioSolver"
import { sumDifferenceSolver } from "./solvers/sumDifferenceSolver"
import { motionSolver } from "./solvers/motionSolver"
import { workSolver } from "./solvers/workSolver"
import { ageSolver } from "./solvers/ageSolver"

export function solveMath(question: string): SolveResult {

  const normalized = normalizeText(question)

  const numbers = extractNumbers(normalized)

  const keywords = extractKeywords(normalized)

  const parsed: ParsedQuestion = {

    raw: question,

    normalized,

    numbers,

    keywords,

    units: []

  }

  const type = detectProblemType(parsed)

  parsed.detectedType = type

  switch (type) {

    case "geometry":
      return geometrySolver(parsed)

    case "arithmetic":
      return arithmeticSolver(parsed)

    default:
      return {

        answer: "Không nhận dạng được bài toán",

        steps: []

      }

  }

}