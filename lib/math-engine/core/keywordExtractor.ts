const phrases = [

  "chu vi",
  "diện tích",
  "hình chữ nhật",
  "hình vuông",
  "vận tốc",
  "quãng đường",
  "thời gian",
  "tỉ lệ",
  "tổng",
  "hiệu",
  "cùng làm",
  "sau",
  "trước"

]

export function extractKeywords(text: string): string[] {

  const keywords: string[] = []

  for (const phrase of phrases) {

    if (text.includes(phrase)) {

      keywords.push(phrase)

    }

  }

  const words = text.split(" ")

  for (const w of words) {

    if (!keywords.includes(w)) {

      keywords.push(w)

    }

  }

  return keywords

}