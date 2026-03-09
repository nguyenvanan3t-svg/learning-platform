export interface NumberEntity {

  value: number

  context: string

}

export function extractNumbers(text: string): number[] {

  const matches = text.match(/\d+(\.\d+)?/g)

  if (!matches) return []

  return matches.map(Number)

}

export function extractNumberEntities(text: string): NumberEntity[] {

  const entities: NumberEntity[] = []

  const regex = /([a-zA-ZÀ-ỹ\s]+?)\s*(\d+(\.\d+)?)/g

  let match

  while ((match = regex.exec(text)) !== null) {

    const context = match[1].trim()

    const value = Number(match[2])

    entities.push({ value, context })

  }

  return entities

}