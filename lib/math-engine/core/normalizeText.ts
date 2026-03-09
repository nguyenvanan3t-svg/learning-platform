export function normalizeText(input: string): string {

  let text = input.toLowerCase()

  text = text.replace(/[.,?!]/g, " ")

  text = text.replace(/\s+/g, " ")

  return text.trim()

}