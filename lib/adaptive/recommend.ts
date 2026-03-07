type ResultItem = {
  score: number
  topic?: string
}

export function recommendTopic(results: ResultItem[]) {

  const wrong: Record<string, number> = {}

  for (const r of results) {

    if (r.score < 5 && r.topic) {

      wrong[r.topic] = (wrong[r.topic] || 0) + 1

    }

  }

  const sorted = Object.entries(wrong)
    .sort((a, b) => b[1] - a[1])

  return sorted.length ? sorted[0][0] : null
}