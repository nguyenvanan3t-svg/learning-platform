import { ProblemType } from "./ProblemType"

export interface ParsedQuestion {

  raw: string

  normalized: string

  numbers: number[]

  keywords: string[]

  units: string[]

  detectedType?: ProblemType

}