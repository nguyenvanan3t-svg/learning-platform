import { ParsedQuestion } from "../types/ParsedQuestion"

import { arithmeticDetector } from "../detectors/arithmeticDetector"
import { fractionDetector } from "../detectors/fractionDetector"
import { percentDetector } from "../detectors/percentDetector"
import { ratioDetector } from "../detectors/ratioDetector"
import { sumDifferenceDetector } from "../detectors/sumDifferenceDetector"
import { motionDetector } from "../detectors/motionDetector"
import { workDetector } from "../detectors/workDetector"
import { ageDetector } from "../detectors/ageDetector"
import { geometryDetector } from "../detectors/geometryDetector"

export function detectProblemType(parsed:ParsedQuestion){

const text = parsed.normalized

// bắt ratio trước tiên
if(/\d+\s*:\s*\d+/.test(text)) return "ratio"

if(ratioDetector(parsed)) return "ratio"

// Ưu tiên: nếu có dạng a:b thì chắc chắn là bài tỉ lệ
if(/\d+\s*:\s*\d+/.test(text)){
  return "ratio"
}

if(fractionDetector(parsed)) return "fraction"

if(percentDetector(parsed)) return "percent"

if(sumDifferenceDetector(parsed)) return "sumDifference"

if(motionDetector(parsed)) return "motion"

if(workDetector(parsed)) return "work"

if(ageDetector(parsed)) return "age"

if(geometryDetector(parsed)) return "geometry"

if(arithmeticDetector(parsed)) return "arithmetic"

return "arithmetic"

}