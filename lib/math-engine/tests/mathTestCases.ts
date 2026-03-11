export interface MathTestCase{
question:string
expected:any
}

export const mathTestCases:MathTestCase[]=[

// arithmetic

{question:"12 + 5",expected:17},
{question:"7 * 8",expected:56},
{question:"100 - 37",expected:63},
{question:"144 / 12",expected:12},
{question:"135 + 248 + 312",expected:695},
{question:"(45+35)*12",expected:960},
{question:"125/(5*5)",expected:5},

// word problems

{question:"Có 5 quả táo và 3 quả cam. Hỏi có tất cả bao nhiêu quả?",expected:8},
{question:"Có 20 viên kẹo ăn mất 5 viên. Hỏi còn lại bao nhiêu?",expected:15},
{question:"Một cửa hàng có 2456 bánh và 1342 kẹo. Hỏi tổng số là bao nhiêu?",expected:3798},

// fraction

{question:"1/2 + 3/4",expected:1.25},
{question:"2/3 * 3/5",expected:0.4},
{question:"4/5 - 1/5",expected:0.6},
{question:"3/4 / 1/2",expected:1.5},

// percent

{question:"20% của 50",expected:10},
{question:"15% của 200",expected:30},
{question:"50% của 80",expected:40},

// ratio

{question:"Hai số có tỉ lệ 3:4 tổng 84",expected:"36 và 48"},
{question:"Hai số tỉ lệ 2:5 tổng 70",expected:"20 và 50"},

// sum difference

{question:"Tổng hai số là 20 hiệu là 4",expected:"12 và 8"},
{question:"Tổng 84 hiệu 20",expected:"52 và 32"},

// motion

{question:"Quãng đường 120 km vận tốc 40 km/h hỏi thời gian",expected:3},
{question:"Quãng đường 200 km vận tốc 50 km/h hỏi thời gian",expected:4},

// work

{question:"Hai người làm riêng hết 6 giờ và 8 giờ. Cùng làm bao lâu xong",expected:3.4285714285714284},

// age

{question:"Tổng tuổi hai người là 40 hiệu 10",expected:"25 và 15"},
{question:"Tổng tuổi là 50 hiệu 14",expected:"32 và 18"},

// geometry

{question:"Hình chữ nhật dài 12 rộng 8 tính diện tích",expected:96},
{question:"Hình chữ nhật dài 10 rộng 4 tính chu vi",expected:28},

/* =========================
WORD PROBLEMS MULTI STEP
========================= */

{question:"Một cửa hàng có 120 kg gạo bán ngày đầu 35 kg ngày thứ hai 28 kg hỏi còn lại bao nhiêu",expected:57},

{question:"Một thư viện có 250 quyển sách cho mượn 75 quyển rồi nhập thêm 40 quyển hỏi hiện có bao nhiêu",expected:215},

{question:"Một lớp có 32 học sinh chia đều thành 4 nhóm mỗi nhóm bao nhiêu",expected:8},

{question:"Một lớp có 32 học sinh chia đều thành 4 nhóm mỗi nhóm 8 học sinh hỏi có đúng không",expected:8},

{question:"Một cửa hàng có 45 hộp mỗi hộp 6 bánh hỏi tổng số bánh",expected:270},

{question:"Một cửa hàng có 45 hộp mỗi hộp 6 bánh bán đi 50 bánh hỏi còn bao nhiêu",expected:220},

{question:"Một người có 50000 đồng mua 3 quyển vở mỗi quyển 8000 đồng hỏi còn bao nhiêu",expected:26000},

{question:"Một thùng có 24 chai mỗi chai 2 lít hỏi tổng số lít",expected:48},

{question:"Một thùng có 24 chai mỗi chai 2 lít bán đi 10 lít còn lại bao nhiêu",expected:38},

{question:"Một trường có 18 lớp mỗi lớp 35 học sinh hỏi tổng số học sinh",expected:630},

/* =========================
RATIO WORD PROBLEMS
========================= */

{question:"Hai số có tỉ lệ 2:3 tổng 50",expected:"20 và 30"},

{question:"Hai số có tỉ lệ 4:5 tổng 90",expected:"40 và 50"},

{question:"Hai số có tỉ lệ 7:8 tổng 150",expected:"70 và 80"},

{question:"Hai số có tỉ lệ 3:4 hiệu 10",expected:"30 và 40"},

{question:"Hai số có tỉ lệ 5:7 hiệu 20",expected:"50 và 70"},

{question:"Một số chia theo tỉ lệ 3:5 tổng 80",expected:"30 và 50"},

{question:"Chia 120 theo tỉ lệ 2:3",expected:"48 và 72"},

{question:"Chia 150 theo tỉ lệ 3:2",expected:"90 và 60"},

/* =========================
AGE PROBLEMS
========================= */

{question:"Tổng tuổi hai người là 40 hiệu 8 hỏi mỗi người bao nhiêu tuổi",expected:"24 và 16"},

{question:"Tổng tuổi hai người là 60 hiệu 20",expected:"40 và 20"},

{question:"Tổng tuổi hai người là 50 hiệu 10",expected:"30 và 20"},

{question:"Tổng tuổi hai người là 30 hiệu 6",expected:"18 và 12"},

/* =========================
MOTION PROBLEMS
========================= */

{question:"Một xe đi quãng đường 180 km với vận tốc 60 km/h hỏi thời gian",expected:3},

{question:"Một xe đi quãng đường 240 km vận tốc 80 km/h hỏi thời gian",expected:3},

{question:"Một xe đi 150 km vận tốc 50 km/h hỏi thời gian",expected:3},

{question:"Một xe đi 90 km vận tốc 45 km/h hỏi thời gian",expected:2},

/* =========================
WORK PROBLEMS
========================= */

{question:"Hai người làm riêng hết 6 giờ và 8 giờ cùng làm bao lâu xong",expected:3.4285714285714284},

{question:"Hai người làm riêng 4 giờ và 6 giờ cùng làm bao lâu",expected:2.4},

{question:"Hai người làm riêng 3 giờ và 6 giờ cùng làm bao lâu",expected:2},

{question:"Hai người làm riêng 5 giờ và 10 giờ cùng làm bao lâu",expected:3.3333333333333335},

/* =========================
FRACTION ADVANCED
========================= */

{question:"3/4 + 5/6",expected:1.5833333333333333},

{question:"7/8 - 3/5",expected:0.275},

{question:"2/3 * 5/7",expected:0.47619047619047616},

{question:"4/9 / 2/3",expected:0.6666666666666666},

{question:"5/12 + 7/18",expected:0.8055555555555556},

/* =========================
PERCENT WORD PROBLEMS
========================= */

{question:"20% của 150",expected:30},

{question:"35% của 200",expected:70},

{question:"15% của 400",expected:60},

{question:"75% của 80",expected:60},

{question:"12% của 250",expected:30},

/* =========================
GEOMETRY WORD PROBLEMS
========================= */

{question:"Hình chữ nhật dài 15 rộng 8 tính diện tích",expected:120},

{question:"Hình chữ nhật dài 20 rộng 5 tính chu vi",expected:50},

{question:"Hình chữ nhật dài 18 rộng 6 diện tích",expected:108},

{question:"Hình chữ nhật dài 25 rộng 10 chu vi",expected:70},

/* =========================
MULTI STEP OLYMPIC
========================= */

{question:"Một lớp có 30 học sinh mỗi bàn 3 học sinh hỏi cần bao nhiêu bàn",expected:10},

{question:"Một lớp có 45 học sinh mỗi bàn 5 học sinh hỏi cần bao nhiêu bàn",expected:9},

{question:"Một cửa hàng có 240 bánh chia đều vào 12 hộp mỗi hộp bao nhiêu",expected:20},

{question:"Một cửa hàng có 360 bánh chia đều vào 15 hộp mỗi hộp bao nhiêu",expected:24},

{question:"Một xe đi 3 giờ mỗi giờ 60 km hỏi quãng đường",expected:180},

{question:"Một xe đi 4 giờ mỗi giờ 70 km hỏi quãng đường",expected:280},

{question:"Một người đọc sách mỗi ngày 12 trang trong 8 ngày đọc bao nhiêu",expected:96},

{question:"Một người đọc sách mỗi ngày 15 trang trong 10 ngày đọc bao nhiêu",expected:150},

]