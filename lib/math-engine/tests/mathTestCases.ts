export interface MathTestCase {

  question: string

  expected: string | number

  type: string

}

export const mathTestCases: MathTestCase[] = [

/* =========================
   ARITHMETIC
========================= */

{
  question: "12 + 5",
  expected: 17,
  type: "arithmetic"
},

{
  question: "7 * 8",
  expected: 56,
  type: "arithmetic"
},

{
  question: "100 - 37",
  expected: 63,
  type: "arithmetic"
},

{
  question: "144 / 12",
  expected: 12,
  type: "arithmetic"
},

/* =========================
   FRACTION
========================= */

{
  question: "1/2 + 3/4",
  expected: "5/4",
  type: "fraction"
},

{
  question: "2/3 * 3/5",
  expected: "2/5",
  type: "fraction"
},

{
  question: "4/5 - 1/5",
  expected: "3/5",
  type: "fraction"
},

{
  question: "3/4 / 1/2",
  expected: "3/2",
  type: "fraction"
},

/* =========================
   PERCENT
========================= */

{
  question: "20% của 50",
  expected: 10,
  type: "percent"
},

{
  question: "15% của 200",
  expected: 30,
  type: "percent"
},

/* =========================
   RATIO
========================= */

{
  question: "Hai số có tỉ lệ 3:4 tổng 84",
  expected: "36 và 48",
  type: "ratio"
},

{
  question: "Hai số tỉ lệ 2:5 tổng 70",
  expected: "20 và 50",
  type: "ratio"
},

{
  question: "Tỉ lệ 4:5 tổng 90",
  expected: "40 và 50",
  type: "ratio"
},

/* =========================
   SUM DIFFERENCE
========================= */

{
  question: "Tổng hai số là 20 hiệu là 4",
  expected: "12 và 8",
  type: "sumDifference"
},

{
  question: "Tổng 84 hiệu 20",
  expected: "52 và 32",
  type: "sumDifference"
},

/* =========================
   GEOMETRY
========================= */

{
  question: "Hình chữ nhật dài 12 rộng 8 tính diện tích",
  expected: 96,
  type: "geometry"
},

{
  question: "Hình chữ nhật dài 10 rộng 4 tính chu vi",
  expected: 28,
  type: "geometry"
},

{
  question: "Chu vi hình chữ nhật 60 chiều dài gấp đôi chiều rộng",
  expected: "dài 20, rộng 10",
  type: "geometry"
},

/* =========================
   MOTION
========================= */

{
  question: "Một người đi với vận tốc 40 km/h quãng đường 120 km. Hỏi thời gian",
  expected: 3,
  type: "motion"
},

{
  question: "Vận tốc 50 km/h trong 4 giờ đi được bao nhiêu km",
  expected: 200,
  type: "motion"
},

/* =========================
   WORK
========================= */

{
  question: "Hai người làm riêng hết 6 giờ và 8 giờ. Cùng làm bao lâu xong",
  expected: 3.4285714285714284,
  type: "work"
},

{
  question: "Hai máy làm riêng 4 giờ và 6 giờ. Cùng làm bao lâu",
  expected: 2.4,
  type: "work"
},

/* =========================
   AGE
========================= */

{
  question: "Tổng tuổi hai người là 40 hiệu 10",
  expected: "25 và 15",
  type: "age"
},

{
  question: "Tổng tuổi là 50 hiệu 14",
  expected: "32 và 18",
  type: "age"
}

]