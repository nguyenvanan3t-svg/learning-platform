export type ParsedQuestion = {
type:string
question:string
numbers:number[]
entities?:any
}

export type SolveResult = {
answer:string
steps:string
}