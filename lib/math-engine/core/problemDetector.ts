import { ParsedQuestion } from "../types/ParsedQuestion"
import { ProblemType } from "../types/ProblemType"

import { geometryDetector } from "../detectors/geometryDetector"
import { fractionDetector } from "../detectors/fractionDetector"
import { percentDetector } from "../detectors/percentDetector"
import { ratioDetector } from "../detectors/ratioDetector"
import { sumDifferenceDetector } from "../detectors/sumDifferenceDetector"
import { motionDetector } from "../detectors/motionDetector"
import { workDetector } from "../detectors/workDetector"
import { ageDetector } from "../detectors/ageDetector"
import { arithmeticDetector } from "../detectors/arithmeticDetector"

export function detectProblemType(parsed: ParsedQuestion): ProblemType {

  if (geometryDetector(parsed)) return "geometry"

  if (fractionDetector(parsed)) return "fraction"

  if (percentDetector(parsed)) return "percent"

  if (ratioDetector(parsed)) return "ratio"

  if (sumDifferenceDetector(parsed)) return "sumDifference"

  if (motionDetector(parsed)) return "motion"

  if (workDetector(parsed)) return "work"

  if (ageDetector(parsed)) return "age"

  if (arithmeticDetector(parsed)) return "arithmetic"

  return "unknown"

}