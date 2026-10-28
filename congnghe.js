// =========================================================================
// DỮ LIỆU CÔNG NGHỆ 12 - PHÂN MÔN CÔNG NGHỆ ĐIỆN - ĐIỆN TỬ (BÀI 2 ĐẾN BÀI 7)
// BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// ĐẶC BIỆT TRỌNG TÂM: BÀI 3, BÀI 4 VÀ BÀI 6 (ĐẶC ĐIỂM MẠNG ĐIỆN SX QUY MÔ NHỎ)
// TOÀN BỘ CÔNG THỨC TOÁN HỌC ĐƯỢC ĐỊNH DẠNG PHÂN SỐ CHUẨN, TUYỆT ĐỐI KHÔNG DÙNG '/'
// =========================================================================

const CONGNGHE_CATEGORIES = [
  {
    "id": "all",
    "name": "⚡ Tất cả bài (Bài 3 - 7)",
    "icon": "⚡"
  },
  {
    "id": "bai3",
    "name": "🌀 Bài 3: Mạch 3 Pha (Xem kĩ)",
    "icon": "🌀"
  },
  {
    "id": "bai4",
    "name": "🗼 Bài 4: Hệ thống điện QG (Xem kĩ)",
    "icon": "🗼"
  },
  {
    "id": "bai6",
    "name": "🏭 Bài 6: Mạng điện SX nhỏ (Xem kĩ)",
    "icon": "🏭"
  },
  {
    "id": "bai5",
    "name": "☀️ Bài 5: Sản xuất điện năng",
    "icon": "☀️"
  },
  {
    "id": "bai7",
    "name": "🏠 Bài 7: Mạng hạ áp sinh hoạt",
    "icon": "🏠"
  },
  {
    "id": "bai2",
    "name": "👷 Bài 2: Ngành nghề kĩ thuật điện",
    "icon": "👷"
  },
  {
    "id": "gk1",
    "name": "🎯 Đề Giữa Kì 1 (40 câu chuẩn)",
    "icon": "🎯"
  }
];

const CONGNGHE_ALL_QUESTIONS = [
  {
    "id": "cn_b3_01",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Dòng điện xoay chiều một pha có cường độ tức thời <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>. Đại lượng I<sub>m</sub> được gọi là gì?",
    "options": [
      "A. Giá trị hiệu dụng của dòng điện.",
      "B. Giá trị cực đại (biên độ) của dòng điện.",
      "C. Tần số góc của dòng điện.",
      "D. Pha ban đầu của dòng điện."
    ],
    "correct": 1,
    "explain": "Trong biểu thức <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>, đại lượng I<sub>m</sub> là cường độ dòng điện cực đại (biên độ), đơn vị là ampe (A). Mối liên hệ với giá trị hiệu dụng I: <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span></span> (SGK Công nghệ 12 trang 18)."
  },
  {
    "id": "cn_b3_02",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một dòng điện xoay chiều có biểu thức <span class=\"math-term\">i = 4√2 · sin(100πt)</span> (A). Giá trị hiệu dụng I và tần số f của dòng điện này lần lượt là",
    "options": [
      "A. I = 4 A; f = 50 Hz",
      "B. I = 4√2 A; f = 100 Hz",
      "C. I = 4 A; f = 100 Hz",
      "D. I = 2√2 A; f = 50 Hz"
    ],
    "correct": 0,
    "explain": "Cường độ cực đại <span class=\"math-term\">I<sub>m</sub> = 4√2 A</span> nên giá trị hiệu dụng <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">4√2</span><span class=\"math-frac-bottom\">√2</span></span> = 4 A</span>. Tần số góc <span class=\"math-term\">ω = 100π rad/s</span> nên tần số <span class=\"math-term\">f = <span class=\"math-frac\"><span class=\"math-frac-top\">ω</span><span class=\"math-frac-bottom\">2π</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">100π</span><span class=\"math-frac-bottom\">2π</span></span> = 50 Hz</span>."
  },
  {
    "id": "cn_b3_03",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Công thức tính cảm kháng X<sub>L</sub> của cuộn cảm thuần và dung kháng X<sub>C</sub> của tụ điện đối với dòng điện xoay chiều tần số f là:",
    "options": [
      "A. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = 2πfC</span>",
      "B. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
      "C. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfL</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
      "D. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">L</span><span class=\"math-frac-bottom\">2πf</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">C</span><span class=\"math-frac-bottom\">2πf</span></span></span>"
    ],
    "correct": 1,
    "explain": "Cảm kháng cuộn cảm thuần: <span class=\"math-term\">X<sub>L</sub> = ωL = 2πfL</span> (đơn vị Ω); Dung kháng tụ điện: <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">ωC</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span> (đơn vị Ω) (SGK Công nghệ 12 trang 18)."
  },
  {
    "id": "cn_b3_04",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Tổng trở z<sub>t</sub> của tải điện một pha gồm điện trở R mắc nối tiếp với cuộn cảm (X<sub>L</sub>) và tụ điện (X<sub>C</sub>) được tính theo công thức nào?",
    "options": [
      "A. <span class=\"math-term\">z<sub>t</sub> = R + X<sub>L</sub> - X<sub>C</sub></span>",
      "B. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>",
      "C. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> + X<sub>C</sub>)²]</span>",
      "D. <span class=\"math-term\">z<sub>t</sub> = √[R² - (X<sub>L</sub> - X<sub>C</sub>)²]</span>"
    ],
    "correct": 1,
    "explain": "Tổng trở của tải R-L-C nối tiếp đặc trưng bởi độ lớn: <span class=\"math-term\">z<sub>t</sub> = √(R² + X²)</span> với điện kháng <span class=\"math-term\">X = X<sub>L</sub> - X<sub>C</sub></span>, do đó <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>. Hệ số góc <span class=\"math-term\">tan φ = <span class=\"math-frac\"><span class=\"math-frac-top\">X</span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">X<sub>L</sub> - X<sub>C</sub></span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
  },
  {
    "id": "cn_b3_05",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Hiện tượng cộng hưởng điện trong đoạn mạch R-L-C nối tiếp xảy ra khi nào?",
    "options": [
      "A. Khi R = X<sub>L</sub>",
      "B. Khi cảm kháng bằng dung kháng (X<sub>L</sub> = X<sub>C</sub>)",
      "C. Khi tần số f = 0",
      "D. Khi tổng trở đạt giá trị lớn vô cùng"
    ],
    "correct": 1,
    "explain": "Cộng hưởng điện xảy ra khi cảm kháng bằng dung kháng <span class=\"math-term\">X<sub>L</sub> = X<sub>C</sub></span> (tức <span class=\"math-term\">2πfL = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>), khi đó điện kháng triệt tiêu X = 0, tổng trở z<sub>t</sub> đạt cực tiểu z<sub>t</sub> = R và dòng điện trong mạch đạt cực đại <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">U</span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
  },
  {
    "id": "cn_b3_06",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Hệ thống dòng điện xoay chiều ba pha đối xứng là tập hợp của ba dòng điện xoay chiều hình sin có đặc điểm gì?",
    "options": [
      "A. Cùng biên độ, cùng tần số và cùng pha với nhau.",
      "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> (120°) lần lượt giữa các pha.",
      "C. Khác tần số, cùng biên độ và lệch pha nhau 90°.",
      "D. Cùng biên độ nhưng tần số pha sau gấp đôi pha trước."
    ],
    "correct": 1,
    "explain": "Theo định nghĩa SGK trang 18: Dòng điện ba pha đối xứng gồm 3 dòng điện xoay chiều hình sin có cùng tần số, cùng biên độ và lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (tức 120°) lần lượt giữa các pha."
  },
  {
    "id": "cn_b3_07",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Cấu tạo phần tĩnh (stator) của máy phát điện xoay chiều ba pha gồm:",
    "options": [
      "A. Một nam châm điện có hai cực Bắc - Nam quay quanh trục.",
      "B. Lõi thép có các rãnh đặt ba cuộn dây giống hệt nhau về số vòng và kích thước, bố trí lệch nhau 120° trên đường tròn stator.",
      "C. Bộ góp và chổi than tiếp điện.",
      "D. Ba cặp cực nam châm vĩnh cửu quay tròn liên tục."
    ],
    "correct": 1,
    "explain": "Stator (phần tĩnh) là lõi thép hình trụ có rãnh đặt ba cuộn dây AX (pha A), BY (pha B), CZ (pha C) có số vòng và kích thước hoàn toàn giống nhau, bố trí lệch nhau góc 120° trên vòng tròn stator (SGK trang 18)."
  },
  {
    "id": "cn_b3_08",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Nếu chọn suất điện động pha A làm gốc: <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>, thì biểu thức suất điện động pha B và pha C của máy phát ba pha là:",
    "options": [
      "A. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - π)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + π)</span>",
      "B. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>",
      "C. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span>",
      "D. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · cos(ωt)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · tan(ωt)</span>"
    ],
    "correct": 1,
    "explain": "Ba suất điện động của máy phát ba pha đối xứng có cùng biên độ E<sub>m</sub>, cùng tần số góc ω và lần lượt lệch pha nhau <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (120°): <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>; <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>; <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> [có thể viết dạng góc âm: <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">4π</span><span class=\"math-frac-bottom\">3</span></span>)</span>] (SGK trang 18)."
  },
  {
    "id": "cn_b3_09",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Trong cách nối nguồn hoặc tải ba pha hình sao (Y), điểm trung tính O được tạo thành bằng cách nào?",
    "options": [
      "A. Nối ba điểm đầu A, B, C lại với nhau.",
      "B. Nối ba điểm cuối X, Y, Z của ba pha lại với nhau.",
      "C. Nối đầu pha này với cuối pha kia: A nối Z, B nối X, C nối Y.",
      "D. Nối dây pha A trực tiếp với cọc tiếp địa bằng đồng."
    ],
    "correct": 1,
    "explain": "Cách nối hình sao (Y): Ba điểm cuối X, Y, Z của các cuộn dây pha được nối chung với nhau tạo thành điểm trung tính O. Ba điểm đầu A, B, C đưa ra ba đường dây pha (SGK trang 19)."
  },
  {
    "id": "cn_b3_10",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Mạch điện ba pha bốn dây gồm các dây dẫn nào sau đây?",
    "options": [
      "A. Bốn dây pha A, B, C, D.",
      "B. Ba dây pha (A, B, C) và một dây trung tính (dây trung hòa O-O').",
      "C. Hai dây pha và hai dây tiếp địa.",
      "D. Ba dây trung tính và một dây pha mang điện."
    ],
    "correct": 1,
    "explain": "Mạch điện ba pha bốn dây gồm ba dây dẫn nối từ các đầu pha A, B, C (gọi là ba dây pha) và một dây dẫn nối từ điểm trung tính O của nguồn đến điểm trung tính O' của tải (gọi là dây trung tính hay dây trung hòa) (SGK trang 19)."
  },
  {
    "id": "cn_b3_11",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Trong cách nối tải ba pha hình tam giác (Δ), các pha được liên kết với nhau theo nguyên tắc nào?",
    "options": [
      "A. Ba đầu pha A, B, C nối chung với nhau.",
      "B. Ba cuối pha X, Y, Z nối chung với nhau.",
      "C. Điểm đầu pha này nối với điểm cuối pha kia khép kín: A nối Z, B nối X, C nối Y.",
      "D. Nối song song cả ba cuộn dây vào một nguồn một pha."
    ],
    "correct": 2,
    "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này nối với điểm cuối của pha kia theo thứ tự vòng tròn khép kín: A nối với Z, B nối với X, C nối với Y (SGK trang 19)."
  },
  {
    "id": "cn_b3_12",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Đại lượng 'Điện áp pha' (kí hiệu U<sub>p</sub>) trong mạch ba pha được định nghĩa là",
    "options": [
      "A. điện áp giữa hai dây pha bất kì trong ba dây pha A, B, C.",
      "B. điện áp đo giữa một dây pha và dây trung tính (hoặc giữa hai đầu của một pha).",
      "C. điện áp giữa dây trung tính và mặt đất.",
      "D. điện áp một chiều nạp vào ắc quy dự phòng."
    ],
    "correct": 1,
    "explain": "Điện áp pha (U<sub>p</sub>): Là điện áp giữa điểm đầu và điểm cuối của một pha nguồn hoặc tải, tương đương điện áp đo giữa một dây pha và dây trung tính (như U<sub>A</sub>, U<sub>B</sub>, U<sub>C</sub>) (SGK trang 20)."
  },
  {
    "id": "cn_b3_13",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Đại lượng 'Điện áp dây' (kí hiệu U<sub>d</sub>) trong mạch điện ba pha được định nghĩa là",
    "options": [
      "A. điện áp đo giữa dây pha và dây trung tính.",
      "B. điện áp giữa hai dây pha bất kì (U<sub>AB</sub>, U<sub>BC</sub>, U<sub>CA</sub>).",
      "C. điện áp rơi trên một bóng đèn chiếu sáng một pha.",
      "D. điện áp danh định của lưới điện siêu cao áp."
    ],
    "correct": 1,
    "explain": "Điện áp dây (U<sub>d</sub>): Là điện áp đo giữa hai dây pha bất kì với nhau, ví dụ: U<sub>AB</sub> là điện áp giữa dây A và B, U<sub>BC</sub> giữa B và C, U<sub>CA</sub> giữa C và A (SGK trang 20)."
  },
  {
    "id": "cn_b3_14",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi nguồn và tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
    "options": [
      "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
      "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>",
      "C. <span class=\"math-term\">U<sub>d</sub> = 3 · U<sub>p</sub></span>",
      "D. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>"
    ],
    "correct": 1,
    "explain": "Mạch đối xứng nối hình sao (Y): Mối liên hệ điện áp là <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>, suy ra <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>. Ví dụ mạng hạ áp có U<sub>p</sub> = 220 V thì U<sub>d</sub> = √3 × 220 ≈ 380 V (SGK trang 20)."
  },
  {
    "id": "cn_b3_15",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa cường độ dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
    "options": [
      "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
      "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub></span>",
      "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
      "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
    ],
    "correct": 0,
    "explain": "Khi tải nối hình sao (Y), dòng điện từ dây pha chạy thẳng trực tiếp vào cuộn dây pha của tải không bị phân nhánh, do đó dòng điện dây bằng dòng điện pha: I<sub>d</sub> = I<sub>p</sub> (SGK trang 20)."
  },
  {
    "id": "cn_b3_16",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
    "options": [
      "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
      "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub></span>",
      "C. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
      "D. <span class=\"math-term\">U<sub>d</sub> = 2 · U<sub>p</sub></span>"
    ],
    "correct": 0,
    "explain": "Khi tải nối hình tam giác (Δ), mỗi pha của tải được mắc trực tiếp giữa hai dây pha của nguồn điện, vì vậy điện áp pha của tải bằng chính điện áp dây của nguồn: U<sub>d</sub> = U<sub>p</sub> (SGK trang 20)."
  },
  {
    "id": "cn_b3_17",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
    "options": [
      "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
      "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>",
      "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
      "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
    ],
    "correct": 1,
    "explain": "Khi tải nối tam giác (Δ) đối xứng, dòng điện dây tại các nút rẽ nhánh thành hai dòng điện pha, cho ta: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>, suy ra <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span> (SGK trang 20)."
  },
  {
    "id": "cn_b3_18",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Ưu điểm vượt trội của mạch điện ba pha bốn dây (nối hình sao có dây trung tính) so với mạch ba dây là gì?",
    "options": [
      "A. Tạo ra được hai cấp điện áp khác nhau (điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub>), thuận tiện cấp điện đồng thời cho cả động cơ ba pha và thiết bị sinh hoạt một pha.",
      "B. Không bao giờ xảy ra sự cố chập mạch hay quá tải.",
      "C. Tiết kiệm 100% lượng dây nhôm và đồng truyền tải.",
      "D. Điện áp trên đường dây tự động tăng lên gấp mười lần."
    ],
    "correct": 0,
    "explain": "Mạch ba pha 4 dây cung cấp được hai cấp điện áp tiện lợi: điện áp dây 380 V (dùng cho động cơ ba pha công nghiệp) và điện áp pha 220 V (dùng cho các thiết bị sinh hoạt một pha gia đình) (SGK trang 20)."
  },
  {
    "id": "cn_b3_19",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi phụ tải ba pha hoàn toàn ĐỐI XỨNG, cường độ dòng điện chạy trong dây trung tính I<sub>o</sub> có giá trị bằng bao nhiêu?",
    "options": [
      "A. Bằng 3 lần dòng điện pha (I<sub>o</sub> = 3 · I<sub>p</sub>).",
      "B. Bằng không (I<sub>o</sub> = 0).",
      "C. Bằng dòng điện cực đại I<sub>m</sub>.",
      "D. Bằng dòng điện dây I<sub>d</sub>."
    ],
    "correct": 1,
    "explain": "Trong tải ba pha đối xứng, tổng vectơ của ba dòng điện pha bằng 0: i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0, do đó dòng điện hiệu dụng trong dây trung tính I<sub>o</sub> = 0 (SGK trang 20)."
  },
  {
    "id": "cn_b3_20",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Vì sao trên dây trung tính của mạng điện ba pha bốn dây TUYỆT ĐỐI KHÔNG ĐƯỢC đặt cầu chì hay công tắc đơn ngắt mạch?",
    "options": [
      "A. Vì dây trung tính không có dòng điện chạy qua nên cầu chì không thể đứt.",
      "B. Vì nếu cầu chì trên dây trung tính bị đứt khi tải không đối xứng, điện áp pha các tải sẽ bị lệch nghiêm trọng, làm thiết bị điện pha non tải chịu điện áp cao dẫn đến cháy nổ.",
      "C. Vì giá thành của cầu chì dây trung tính quá đắt đỏ.",
      "D. Vì dây trung tính được chôn dưới lòng đất nên không chạm tới được."
    ],
    "correct": 1,
    "explain": "Nếu đứt dây trung tính khi phụ tải ba pha không đối xứng, điểm trung tính O' của tải sẽ bị dịch chuyển, dẫn đến điện áp giữa các pha tải bị mất cân bằng trầm trọng: pha nào có tổng trở lớn sẽ chịu điện áp vượt quá 220 V gây cháy thiết bị (SGK trang 20)."
  },
  {
    "id": "cn_b3_21",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Công thức tính công suất tác dụng toàn phần P của mạch điện xoay chiều ba pha đối xứng là:",
    "options": [
      "A. <span class=\"math-term\">P = U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
      "B. <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ</span>",
      "C. <span class=\"math-term\">P = 3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
      "D. <span class=\"math-term\">P = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub> · I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> · cos φ</span>"
    ],
    "correct": 1,
    "explain": "Công suất tác dụng ba pha đối xứng tính theo thông số dây: P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ; hoặc tính theo thông số pha: P = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ (trong đó cos φ là hệ số công suất của mỗi pha tải) (SGK trang 20)."
  },
  {
    "id": "cn_b3_22",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một nguồn điện ba pha đối xứng có điện áp pha U<sub>p</sub> = 220 V. Giá trị điện áp dây U<sub>d</sub> chuẩn bằng bao nhiêu vôn?",
    "options": [
      "A. 127 V",
      "B. 220 V",
      "C. 380 V",
      "D. 440 V"
    ],
    "correct": 2,
    "explain": "Nguồn điện ba pha đối xứng nối hình sao: U<sub>d</sub> = √3 · U<sub>p</sub> = √3 × 220 ≈ 381 V (trong thực tế mạng điện hạ áp tiêu chuẩn Việt Nam quy ước chuẩn là 380 V)."
  },
  {
    "id": "cn_b3_23",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Cho mạch xoay chiều một pha có R = 30 Ω, cảm kháng X<sub>L</sub> = 60 Ω, dung kháng X<sub>C</sub> = 20 Ω. Độ lớn tổng trở z<sub>t</sub> của mạch là",
    "options": [
      "A. 110 Ω",
      "B. 50 Ω",
      "C. 70 Ω",
      "D. 10 Ω"
    ],
    "correct": 1,
    "explain": "Điện kháng của mạch: X = X<sub>L</sub> - X<sub>C</sub> = 60 - 20 = 40 Ω. Tổng trở của mạch: z<sub>t</sub> = √(R² + X²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω."
  },
  {
    "id": "cn_b3_24",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có R = 12 Ω, X<sub>L</sub> = 16 Ω nối hình SAO (Y) vào nguồn điện có điện áp dây U<sub>d</sub> = 380 V. Cường độ dòng điện pha I<sub>p</sub> chạy qua mỗi cuộn dây là",
    "options": [
      "A. 11 A",
      "B. 19 A",
      "C. 31,6 A",
      "D. 22 A"
    ],
    "correct": 0,
    "explain": "Tổng trở mỗi pha của tải: <span class=\"math-term\">z<sub>p</sub> = √(R² + X<sub>L</sub>²) = √(12² + 16²) = √400 = 20 Ω</span>. Do tải nối sao, điện áp pha của tải: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Cường độ dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">20</span></span> = 11 A</span>."
  },
  {
    "id": "cn_b3_25",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một động cơ điện ba pha nối hình TAM GIÁC (Δ) tiêu thụ dòng điện pha I<sub>p</sub> = 15 A. Cường độ dòng điện dây I<sub>d</sub> chạy trên đường dây cấp điện cho động cơ là",
    "options": [
      "A. 15 A",
      "B. 8,66 A",
      "C. 25,98 A",
      "D. 45 A"
    ],
    "correct": 2,
    "explain": "Tải nối hình tam giác (Δ) đối xứng: Dòng điện dây liên hệ với dòng điện pha qua công thức: I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 15 ≈ 1,732 × 15 = 25,98 A."
  },
  {
    "id": "cn_b3_26",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một nguồn điện ba pha có điện áp dây U<sub>d</sub> = 380 V cấp cho một tải đối xứng nối hình SAO (Y) có tổng trở mỗi pha z<sub>p</sub> = 38 Ω. Dòng điện dây I<sub>d</sub> chạy trên dây pha có giá trị là",
    "options": [
      "A. 10 A",
      "B. ≈ 5,8 A (chính xác 5,79 A)",
      "C. 17,3 A",
      "D. 3,34 A"
    ],
    "correct": 1,
    "explain": "Do tải nối sao: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">38</span></span> ≈ 5,79 A</span>. Do nối sao: I<sub>d</sub> = I<sub>p</sub> ≈ 5,79 A."
  },
  {
    "id": "cn_b3_27",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Tải ba pha đối xứng gồm ba điện trở thuần R = 22 Ω nối hình TAM GIÁC (Δ) vào mạng điện có U<sub>d</sub> = 220 V. Dòng điện pha I<sub>p</sub> và dòng điện dây I<sub>d</sub> lần lượt là",
    "options": [
      "A. I<sub>p</sub> = 10 A; I<sub>d</sub> = 17,32 A",
      "B. I<sub>p</sub> = 10 A; I<sub>d</sub> = 10 A",
      "C. I<sub>p</sub> = 5,77 A; I<sub>d</sub> = 10 A",
      "D. I<sub>p</sub> = 17,32 A; I<sub>d</sub> = 10 A"
    ],
    "correct": 0,
    "explain": "Do tải nối tam giác: U<sub>p</sub> = U<sub>d</sub> = 220 V. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">22</span></span> = 10 A</span>. Dòng điện dây: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 10 ≈ 17,32 A</span>."
  },
  {
    "id": "cn_b3_28",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một tải điện ba pha tiêu thụ công suất P = 10 kW với điện áp dây U<sub>d</sub> = 380 V và hệ số công suất cos φ = 0,8. Dòng điện dây I<sub>d</sub> chạy trong mạch xấp xỉ bằng",
    "options": [
      "A. 18,99 A (khoảng 19 A)",
      "B. 32,89 A",
      "C. 10,95 A",
      "D. 15,20 A"
    ],
    "correct": 0,
    "explain": "Từ công thức công suất ba pha: <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span> => <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">√3 · U<sub>d</sub> · cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">√3 × 380 × 0,8</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">526,54</span></span> ≈ 18,99 A</span>."
  },
  {
    "id": "cn_b3_29",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Máy biến áp ba pha sử dụng trong trạm điện có chức năng cơ bản là gì?",
    "options": [
      "A. Biến đổi điện áp và dòng điện của hệ thống điện ba pha nhưng giữ nguyên tần số f = 50 Hz.",
      "B. Biến đổi dòng xoay chiều thành dòng điện một chiều.",
      "C. Tăng công suất tác dụng P của nguồn điện lên gấp đôi.",
      "D. Tích trữ điện năng vào cuộn dây sơ cấp để phát điện khi mất lưới."
    ],
    "correct": 0,
    "explain": "Máy biến áp ba pha làm việc dựa trên hiện tượng cảm ứng điện từ, có chức năng biến đổi điện áp và dòng điện xoay chiều ba pha từ cấp này sang cấp khác nhưng giữ nguyên tần số dòng điện (f = 50 Hz) (SGK trang 20)."
  },
  {
    "id": "cn_b3_30",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Kí hiệu tổ đấu dây Y/Δ-11 của máy biến áp ba pha có ý nghĩa là",
    "options": [
      "A. Cuộn sơ cấp nối hình sao (Y), cuộn thứ cấp nối hình tam giác (Δ), góc lệch pha giữa điện áp sơ cấp và thứ cấp tương ứng góc 11 giờ (330°).",
      "B. Máy biến áp có 11 cuộn dây độc lập.",
      "C. Máy biến áp làm việc ở cấp điện áp 11 kV.",
      "D. Máy biến áp sử dụng 11 kg lõi thép Silic."
    ],
    "correct": 0,
    "explain": "Quy ước tổ đấu dây: Kí hiệu Y/Δ biểu thị cuộn sơ cấp nối sao, cuộn thứ cấp nối tam giác; con số 11 là chỉ số giờ lệch pha giữa vectơ điện áp dây thứ cấp so với sơ cấp (11 × 30° = 330°)."
  },
  {
    "id": "cn_b3_31",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Khi một pha của tải hình sao (Y) bị đứt (hở mạch), dòng điện trong pha bị đứt đó sẽ",
    "options": [
      "A. tăng lên gấp √3 lần.",
      "B. bằng 0, hai pha còn lại vẫn tiếp tục có dòng điện chạy qua.",
      "C. đổi chiều liên tục không xác định.",
      "D. truyền toàn bộ công suất vào cọc tiếp địa."
    ],
    "correct": 1,
    "explain": "Khi bị đứt mạch một pha, dòng điện trong nhánh pha đó bị ngắt hoàn toàn (I<sub>p</sub> = 0). Nếu mạng có dây trung tính thì hai pha còn lại vẫn hoạt động bình thường ở điện áp 220 V."
  },
  {
    "id": "cn_b3_32",
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một xưởng thực hành có nguồn ba pha 4 dây 380/220 V. Muốn lắp một bóng đèn sợi đốt 220 V - 100 W vào mạng điện này, người ta phải đấu bóng đèn vào vị trí nào?",
    "options": [
      "A. Giữa hai dây pha bất kì (ví dụ dây pha A và dây pha B).",
      "B. Giữa một dây pha bất kì và dây trung tính (ví dụ dây pha A và dây trung tính O).",
      "C. Nối tiếp cả ba dây pha A, B, C vào một đầu bóng đèn.",
      "D. Đấu trực tiếp hai cực của bóng đèn vào dây trung tính O."
    ],
    "correct": 1,
    "explain": "Bóng đèn có điện áp định mức 220 V (bằng điện áp pha U<sub>p</sub> của lưới), do đó phải đấu một đầu vào dây pha và một đầu vào dây trung tính O để nhận đúng điện áp 220 V. Nếu đấu vào giữa hai dây pha (U<sub>d</sub> = 380 V) thì đèn sẽ bị quá áp và nổ ngay lập tức."
  },
  {
    "id": "cn_b4_01",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Hệ thống điện quốc gia là một hệ thống thống nhất gồm những thành phần cơ bản nào?",
    "options": [
      "A. Các công ty kinh doanh thiết bị điện gia dụng và các cửa hàng phân phối bán lẻ.",
      "B. Nguồn điện, lưới điện và các tải tiêu thụ điện được liên kết chặt chẽ với nhau trên quy mô toàn quốc.",
      "C. Các cơ quan quản lí tài nguyên nước và các hồ chứa thủy lợi.",
      "D. Trạm phát sóng viễn thông và các vệ tinh địa tĩnh quân sự."
    ],
    "correct": 1,
    "explain": "Theo SGK Công nghệ 12 trang 22-23: Hệ thống điện quốc gia gồm các nguồn điện (nhà máy điện), lưới điện (đường dây và trạm biến áp) và các hộ tiêu thụ điện trên toàn quốc được liên kết chặt chẽ thành một hệ thống thống nhất."
  },
  {
    "id": "cn_b4_02",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Hệ thống điện quốc gia thực hiện liên tục bốn khâu then chốt nào sau đây?",
    "options": [
      "A. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng.",
      "B. Thiết kế, lắp ráp cơ khí, đóng tàu và thử nghiệm ô tô.",
      "C. Đào tạo nhân lực, in ấn sách giáo khoa, bán hàng và bảo hành.",
      "D. Chế tạo linh kiện điện tử, lập trình phần mềm và bảo dưỡng máy tính."
    ],
    "correct": 0,
    "explain": "Hệ thống điện quốc gia thực hiện quá trình: Sản xuất điện năng (tại nhà máy điện) -> Truyền tải điện năng (lưới truyền tải) -> Phân phối điện năng (lưới phân phối) -> Tiêu thụ điện năng (tại các phụ tải) (SGK trang 22)."
  },
  {
    "id": "cn_b4_03",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Thành phần 'LƯỚI ĐIỆN TRUYỀN TẢI' trong hệ thống điện quốc gia có cấp điện áp là",
    "options": [
      "A. dưới 1 kV.",
      "B. từ 1 kV đến 35 kV.",
      "C. từ 110 kV trở xuống.",
      "D. trên 110 kV (như 220 kV và 500 kV)."
    ],
    "correct": 3,
    "explain": "Theo quy chuẩn phân loại SGK trang 23: Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở Việt Nam phổ biến là 220 kV và siêu cao áp 500 kV), đảm nhận truyền tải công suất lớn từ nhà máy điện đến các trạm phân phối chính."
  },
  {
    "id": "cn_b4_04",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Thành phần 'LƯỚI ĐIỆN PHÂN PHỐI' trong hệ thống điện quốc gia có cấp điện áp là",
    "options": [
      "A. từ 110 kV trở xuống (110 kV, 35 kV, 22 kV, 10 kV, 6 kV, 0,4 kV).",
      "B. trên 110 kV đến 500 kV.",
      "C. trên 220 kV.",
      "D. chỉ duy nhất cấp điện áp sinh hoạt 220 V."
    ],
    "correct": 0,
    "explain": "Lưới điện phân phối có cấp điện áp TỪ 110 kV TRỞ XUỐNG (110 kV, 35 kV, 22 kV, 10 kV, 6 kV và hạ áp 0,4 kV/380/220V), làm nhiệm vụ đưa điện từ trạm phân phối chính đến các phụ tải tiêu thụ địa phương (SGK trang 23)."
  },
  {
    "id": "cn_b4_05",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐG GIA",
    "question": "Theo quy chuẩn kĩ thuật điện Việt Nam, bốn cấp điện áp tiêu chuẩn của hệ thống lưới điện gồm:",
    "options": [
      "A. Điện cực thấp, điện trung bình, điện mạnh và điện cực mạnh.",
      "B. Hạ áp (≤ 1 kV), Trung áp (> 1 kV đến 35 kV), Cao áp (> 35 kV đến 220 kV), Siêu cao áp (> 220 kV).",
      "C. 12 V, 24 V, 110 V và 220 V.",
      "D. Điện dân dụng, điện công nghiệp, điện nông nghiệp và điện quốc phòng."
    ],
    "correct": 1,
    "explain": "Bốn cấp điện áp tiêu chuẩn quy định rõ ràng trong SGK trang 23: 1. Hạ áp (đến 1 kV); 2. Trung áp (từ trên 1 kV đến 35 kV); 3. Cao áp (từ trên 35 kV đến 220 kV); 4. Siêu cao áp (trên 220 kV, tiêu biểu là 500 kV)."
  },
  {
    "id": "cn_b4_06",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Đường dây truyền tải điện siêu cao áp 500 kV Bắc - Nam mạch 1 được khởi công và khánh thành đóng điện vào các mốc thời gian lịch sử nào?",
    "options": [
      "A. Khởi công ngày 05/04/1992 và đóng điện ngày 27/05/1994.",
      "B. Khởi công ngày 30/04/1975 và đóng điện ngày 02/09/1985.",
      "C. Khởi công ngày 01/01/2000 và đóng điện ngày 10/10/2010.",
      "D. Khởi công ngày 19/05/1990 và đóng điện ngày 27/07/1995."
    ],
    "correct": 0,
    "explain": "Đường dây truyền tải 500 kV Bắc - Nam mạch 1 là công trình thế kỉ: khởi công ngày 05/04/1992 và hoàn thành đóng điện vận hành chính thức ngày 27/05/1994 (SGK Công nghệ 12 trang 24)."
  },
  {
    "id": "cn_b4_07",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Quy mô kĩ thuật của đường dây siêu cao áp 500 kV Bắc - Nam mạch 1 là",
    "options": [
      "A. dài 500 km, gồm 1 000 cột tháp sắt, nối từ Hà Nội vào Đà Nẵng.",
      "B. dài 1 487 km, gồm 3 437 cột tháp sắt, đi qua 14 tỉnh thành từ Trạm 500 kV Hoà Bình đến Trạm 500 kV Phú Lâm (TP. Hồ Chí Minh).",
      "C. dài 2 500 km nối từ Móng Cái đến Mũi Cà Mau.",
      "D. chạy ngầm dưới đáy biển dọc bờ biển miền Trung."
    ],
    "correct": 1,
    "explain": "Đường dây 500 kV mạch 1 dài 1 487 km, xây dựng với 3 437 cột tháp sắt, băng qua rừng núi hiểm trở của 14 tỉnh thành từ Trạm 500 kV Hoà Bình tới Trạm 500 kV Phú Lâm (TP.HCM) (SGK trang 24)."
  },
  {
    "id": "cn_b4_08",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Ý nghĩa chiến lược quan trọng nhất của việc xây dựng và đưa vào vận hành đường dây siêu cao áp 500 kV Bắc - Nam là gì?",
    "options": [
      "A. Hợp nhất hệ thống điện ba miền Bắc - Trung - Nam thành một hệ thống điện quốc gia thống nhất, giải quyết bài toán truyền tải nguồn điện dôi dư từ miền Bắc vào chi viện cho miền Nam đang thiếu điện nghiêm trọng.",
      "B. Bỏ hẳn việc xây dựng các nhà máy nhiệt điện và thủy điện ở miền Nam.",
      "C. Giúp giá điện sinh hoạt giảm về mức miễn phí cho toàn bộ người dân.",
      "D. Thay thế hoàn toàn đường dây điện thoại và internet liên tỉnh."
    ],
    "correct": 0,
    "explain": "Đường dây 500 kV Bắc - Nam đã liên kết lưới điện ba miền thành một khối thống nhất, chấm dứt tình trạng vận hành phân tán rời rạc, tối ưu hóa công suất phát điện của các nhà máy lớn như Thủy điện Hòa Bình để phục vụ phát triển kinh tế cả nước (SGK trang 24)."
  },
  {
    "id": "cn_b4_09",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Đường dây siêu cao áp 500 kV mạch 3 vừa được khánh thành thần tốc năm 2024 nối từ địa phương nào đến địa phương nào?",
    "options": [
      "A. Từ Cà Mau đến TP. Hồ Chí Minh.",
      "B. Từ Quảng Trạch (Quảng Bình) đến Phố Nối (Hưng Yên).",
      "C. Từ Sơn La về Hà Nội.",
      "D. Từ Pleiku sang Savannakhet (Lào)."
    ],
    "correct": 1,
    "explain": "Đường dây 500 kV mạch 3 (cung đoạn Quảng Trạch - Phố Nối) dài hơn 519 km nối từ Trung tâm nhiệt điện Quảng Trạch (Quảng Bình) đến Trạm 500 kV Phố Nối (Hưng Yên), góp phần đảm bảo an ninh cấp điện trọng điểm cho miền Bắc."
  },
  {
    "id": "cn_b4_10",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Vì sao tại các nhà máy điện nguồn, người ta bắt buộc phải đặt trạm biến áp TĂNG ÁP trước khi đưa điện lên đường dây truyền tải?",
    "options": [
      "A. Để tăng tần số dòng điện xoay chiều lên hàng nghìn Hz.",
      "B. Để tăng điện áp U, giảm cường độ dòng điện I, giúp giảm hao phí toả nhiệt theo công thức: <span class=\"math-term\">ΔP = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>.",
      "C. Để chuyển đổi dòng xoay chiều thành dòng điện một chiều.",
      "D. Để biến điện năng thành cơ năng dự trữ trong cột tháp."
    ],
    "correct": 1,
    "explain": "Theo định luật Jun-Len-xơ, công suất hao phí nhiệt trên đường dây là: <span class=\"math-term\">ΔP = I²R = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>. Khi tăng điện áp U lên n lần thì hao phí ΔP giảm đi n² lần, giúp tiết kiệm chi phí xây dựng đường dây và truyền tải được công suất cực lớn đi xa."
  },
  {
    "id": "cn_b4_11",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Khi truyền tải một công suất điện P xác định trên cùng một đường dây có điện trở R, nếu tăng điện áp từ U<sub>1</sub> = 110 kV lên U<sub>2</sub> = 220 kV thì công suất hao phí toả nhiệt ΔP trên đường dây sẽ",
    "options": [
      "A. tăng lên gấp 2 lần.",
      "B. giảm đi 2 lần.",
      "C. giảm đi 4 lần.",
      "D. không thay đổi."
    ],
    "correct": 2,
    "explain": "Công suất hao phí tỉ lệ nghịch với bình phương điện áp: ΔP tỉ lệ với <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">U<sup>2</sup></span></span>. Khi tăng điện áp từ 110 kV lên 220 kV (tăng gấp <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">110</span></span> = 2 lần) thì hao phí giảm: 2² = 4 lần."
  },
  {
    "id": "cn_b4_12",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Vai trò chủ yếu của các trạm biến áp HẠ ÁP bố trí gần các khu dân cư và xí nghiệp công nghiệp là gì?",
    "options": [
      "A. Tăng điện áp lên 500 kV để trả ngược về nhà máy điện.",
      "B. Giảm điện áp từ cấp truyền tải và trung áp xuống cấp điện áp hạ áp an toàn, phù hợp với các thiết bị tiêu thụ điện (380 V / 220 V).",
      "C. Làm mát không khí và phát điện dự phòng khi trời mưa bão.",
      "D. Khử từ trường xung quanh đường dây điện."
    ],
    "correct": 1,
    "explain": "Trạm biến áp hạ áp có nhiệm vụ hạ cấp điện áp từ trung áp (22 kV, 35 kV) hoặc cao áp (110 kV) xuống điện áp hạ áp 380/220 V tương thích với mức điện áp làm việc an toàn của máy móc và đồ dùng gia đình (SGK trang 23)."
  },
  {
    "id": "cn_b4_13",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Tần số danh định của dòng điện xoay chiều trong hệ thống điện quốc gia Việt Nam được chuẩn hóa là bao nhiêu?",
    "options": [
      "A. 60 Hz",
      "B. 50 Hz",
      "C. 100 Hz",
      "D. 25 Hz"
    ],
    "correct": 1,
    "explain": "Tần số công nghiệp danh định của hệ thống điện quốc gia Việt Nam là 50 Hz (SGK trang 22-23), sai số vận hành cho phép rất nghiêm ngặt (không quá ±5%)."
  },
  {
    "id": "cn_b4_14",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Cơ quan đầu não chịu trách nhiệm chỉ huy điều độ, điều hòa công suất phát của các nhà máy điện và vận hành an toàn hệ thống điện quốc gia 24/7 tại Việt Nam là",
    "options": [
      "A. Trung tâm Điều độ Hệ thống điện Quốc gia (A0 - NSMO).",
      "B. Viện Khoa học Thủy lợi Việt Nam.",
      "C. Cục Quản lí Thị trường.",
      "D. Tổng công ty Bưu chính Viễn thông."
    ],
    "correct": 0,
    "explain": "Trung tâm Điều độ Hệ thống điện Quốc gia (A0) là đơn vị chỉ huy vận hành, theo dõi giám sát cung - cầu điện theo thời gian thực để duy trì ổn định tần số 50 Hz và điện áp trên toàn bộ lưới điện quốc gia."
  },
  {
    "id": "cn_b4_15",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Cấp điện áp trung áp phổ biến nhất đang được sử dụng trong lưới điện phân phối tại các đô thị và khu dân cư ở Việt Nam hiện nay là:",
    "options": [
      "A. 0,4 kV",
      "B. 22 kV",
      "C. 110 kV",
      "D. 500 kV"
    ],
    "correct": 1,
    "explain": "Ở Việt Nam, cấp điện áp 22 kV là cấp điện áp trung áp tiêu chuẩn phổ biến nhất trong lưới phân phối hiện đại để cấp điện từ các trạm 110 kV về các trạm biến áp phân phối phụ tải (SGK trang 23)."
  },
  {
    "id": "cn_b4_16",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Các chỉ tiêu chất lượng điện năng quan trọng hàng đầu trong hệ thống điện quốc gia gồm có:",
    "options": [
      "A. Độ ổn định tần số (50 Hz), độ ổn định điện áp (độ lệch trong ngưỡng ±5%) và độ tin cậy cung cấp điện liên tục.",
      "B. Màu sắc của lớp vỏ cách điện cáp ngầm.",
      "C. Tốc độ gió thổi qua đường dây và nhiệt độ cột tháp sắt.",
      "D. Số lượng nhân viên trực ca tại các trạm biến áp."
    ],
    "correct": 0,
    "explain": "Chất lượng điện năng được đo bằng: tần số ổn định quanh mức 50 Hz, độ lệch điện áp nằm trong tiêu chuẩn cho phép (±5%), sóng hài thấp và chỉ số cấp điện liên tục (SAIDI, SAIFI)."
  },
  {
    "id": "cn_b4_17",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Thiết bị nào sau đây thường được lắp đặt tại các trạm biến áp phân phối để nâng cao hệ số công suất cos φ và giảm tổn thất điện năng trên lưới điện?",
    "options": [
      "A. Tụ bù công suất phản kháng (bộ tụ điện).",
      "B. Đèn LED chiếu sáng công suất lớn.",
      "C. Cột thu lôi chống sét.",
      "D. Máy hàn điện hồ quang."
    ],
    "correct": 0,
    "explain": "Tụ bù công suất phản kháng phát ra công suất phản kháng Q bù cho các phụ tải cảm (động cơ điện), giúp nâng cao hệ số công suất cos φ của lưới lên gần bằng 1, làm giảm dòng điện trên dây dẫn và giảm hao phí truyền tải."
  },
  {
    "id": "cn_b4_18",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "a. Lưới điện truyền tải bao gồm các đường dây và trạm biến áp có cấp điện áp từ 110 kV trở xuống.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở nước ta là 220 kV và 500 kV); còn lưới điện từ 110 kV trở xuống thuộc về lưới điện phân phối (SGK trang 23).",
    "subLabel": "1a"
  },
  {
    "id": "cn_b4_19",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "b. Đường dây 500 kV mạch 1 đóng vai trò lịch sử kết nối hệ thống điện ba miền thành một hệ thống điện quốc gia thống nhất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Đường dây 500 kV mạch 1 được đóng điện năm 1994, truyền tải nguồn điện dôi dư từ miền Bắc (nhà máy thủy điện Hòa Bình) vào miền Trung và miền Nam.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Đây là ý nghĩa lớn nhất của đường dây 500 kV Bắc - Nam mạch 1: liên kết lưới điện ba miền, xóa bỏ tình trạng chia cắt năng lượng và tạo tiền đề phát triển kinh tế toàn diện.",
    "subLabel": "1b"
  },
  {
    "id": "cn_b4_20",
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "c. Trong hệ thống điện quốc gia, điện năng có thể được lưu trữ dễ dàng với dung lượng không giới hạn vào các đường dây dẫn điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Điều độ viên hệ thống điện phải tính toán liên tục lượng điện phát ra và lượng điện tiêu thụ trong từng giây để cân bằng hệ thống.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Đặc thù của điện năng là sản xuất, truyền tải và tiêu thụ diễn ra hầu như đồng thời tại cùng một thời điểm, đường dây chỉ có chức năng dẫn điện chứ không tích trữ được năng lượng. Do đó hệ thống luôn phải đảm bảo công suất phát bằng công suất tiêu thụ cộng hao phí.",
    "subLabel": "1c"
  },
  {
    "id": "cn_b6_01",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng nằm trong khoảng nào sau đây?",
    "options": [
      "A. Dưới 1 kW.",
      "B. Từ vài chục đến vài trăm kW.",
      "C. Từ vài nghìn đến vài chục nghìn MW.",
      "D. Trên 1 000 000 kW."
    ],
    "correct": 1,
    "explain": "Theo định nghĩa chuẩn SGK Công nghệ 12 trang 31: Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới điện phân phối để cung cấp cho cơ sở sản xuất."
  },
  {
    "id": "cn_b6_02",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Ba đặc điểm quan trọng nhất của mạng điện sản xuất quy mô nhỏ bao gồm:",
    "options": [
      "A. Công suất nhỏ dưới 100 W; dùng nguồn pin năng lượng mặt trời; không có aptomat.",
      "B. Công suất tiêu thụ từ vài chục đến vài trăm kW; phụ tải phân bố tập trung; mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập.",
      "C. Dùng cấp điện áp siêu cao áp 500 kV; phụ tải rải rác trên diện tích hàng nghìn km²; mạng động lực và chiếu sáng mắc chung trên một công tắc.",
      "D. Toàn bộ thiết bị đều dùng dòng điện một chiều 24 V."
    ],
    "correct": 1,
    "explain": "Ba đặc điểm cốt lõi học sinh bắt buộc phải ghi nhớ theo SGK trang 31: 1. Công suất tiêu thụ từ vài chục đến vài trăm kW; 2. Tải tiêu thụ phân bố tập trung trong phân xưởng; 3. Mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập."
  },
  {
    "id": "cn_b6_03",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Đặc điểm 'phụ tải phân bố tập trung' trong mạng điện sản xuất quy mô nhỏ có ý nghĩa thực tế là gì?",
    "options": [
      "A. Các thiết bị tiêu thụ điện (động cơ điện, máy hàn, máy cơ khí, lò sấy...) được bố trí tập trung trong một phạm vi không gian nhà xưởng hẹp của cơ sở sản xuất.",
      "B. Các phụ tải nằm rải rác ở nhiều huyện và tỉnh thành khác nhau.",
      "C. Tất cả máy móc đều cắm chung vào một ổ điện đơn duy nhất.",
      "D. Thiết bị điện chỉ hoạt động tập trung vào đúng một giờ trong ngày."
    ],
    "correct": 0,
    "explain": "Trong cơ sở sản xuất nhỏ (như xưởng may, xưởng cơ khí, xưởng chế biến nông sản), các phụ tải là máy móc thiết bị sản xuất được bố trí tập trung trong phạm vi các phân xưởng có diện tích vừa và nhỏ (SGK trang 31)."
  },
  {
    "id": "cn_b6_04",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Vì sao trong mạng điện sản xuất quy mô nhỏ, mạng điện ĐỘNG LỰC và mạng điện CHIẾU SÁNG bắt buộc phải hoạt động ĐỘC LẬP?",
    "options": [
      "A. Để tránh việc bóng đèn chiếu sáng làm nóng hỏng động cơ điện.",
      "B. Để khi xảy ra sự cố quá tải hay ngắn mạch ở máy móc làm nhảy aptomat tủ động lực, hệ thống đèn chiếu sáng vẫn có điện bình thường, giúp công nhân không bị hoảng loạn, thuận tiện thoát hiểm và xử lí sự cố an toàn.",
      "C. Để công ty điện lực dễ ghi số điện của từng bóng đèn.",
      "D. Để tiết kiệm chi phí lắp đặt dây dẫn."
    ],
    "correct": 1,
    "explain": "Tải động lực (máy móc, động cơ) thường có dòng khởi động lớn và dễ xảy ra sự cố quá tải. Tách độc lập mạng chiếu sáng giúp hệ thống chiếu sáng không bị chập chờn hay mất điện đột ngột khi tải động lực gặp sự cố, đảm bảo an toàn lao động tối đa (SGK trang 31)."
  },
  {
    "id": "cn_b6_05",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Nguồn cấp điện cho mạng điện sản xuất quy mô nhỏ thường được lấy từ đâu?",
    "options": [
      "A. Lấy trực tiếp từ đường dây siêu cao áp 500 kV đi ngang qua cổng xưởng.",
      "B. Lấy từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) qua máy biến áp hạ áp riêng hoặc chung để hạ xuống cấp 380/220 V.",
      "C. Hoàn toàn chạy bằng máy phát điện xăng mini xách tay.",
      "D. Lấy từ mạng điện 110 V của pin quang điện đồ chơi."
    ],
    "correct": 1,
    "explain": "Nguồn điện cấp cho cơ sở sản xuất quy mô nhỏ thường lấy từ đường dây trung áp 22 kV hoặc 35 kV của lưới phân phối công cộng qua trạm biến áp hạ áp (380/220 V) (SGK trang 31)."
  },
  {
    "id": "cn_b6_06",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Sơ đồ cấu trúc phân cấp chuẩn của mạng điện sản xuất quy mô nhỏ theo đúng thứ tự là:",
    "options": [
      "A. Phụ tải -> Tủ chiếu sáng -> Tủ động lực -> Trạm biến áp -> Lưới phân phối.",
      "B. Lưới điện phân phối -> Trạm biến áp hạ áp -> Tủ điện phân phối tổng (MSB) -> Tủ điện phân phối nhánh -> Tủ điện động lực / Tủ điện chiếu sáng -> Phụ tải tiêu thụ.",
      "C. Trạm biến áp -> Tủ chiếu sáng -> Tủ tổng -> Máy sản xuất.",
      "D. Tủ tổng -> Tủ động lực -> Trạm biến áp -> Phụ tải."
    ],
    "correct": 1,
    "explain": "Cấu trúc phân cấp chuẩn SGK trang 32-33: Nguồn từ lưới phân phối -> Trạm biến áp hạ áp -> Tủ phân phối tổng (MSB) -> Tủ phân phối nhánh từng phân xưởng -> Tủ động lực & Tủ chiếu sáng -> Máy móc thiết bị."
  },
  {
    "id": "cn_b6_07",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Tủ điện phân phối TỔNG (MSB) trong mạng điện sản xuất quy mô nhỏ có vai trò chính là",
    "options": [
      "A. điều khiển tốc độ quay của từng quạt thông gió.",
      "B. nhận điện hạ áp (380/220 V) trực tiếp từ máy biến áp để phân chia và cấp nguồn cho các tủ điện phân phối nhánh, trang bị thiết bị đóng cắt bảo vệ tổng.",
      "C. nắn dòng xoay chiều thành một chiều nạp cho bình ắc quy.",
      "D. nâng điện áp lên 110 kV để bán lại cho lưới điện."
    ],
    "correct": 1,
    "explain": "Tủ phân phối tổng (MSB) đặt ngay sau máy biến áp hạ áp, chứa aptomat tổng dòng lớn (MCCB hoặc ACB) để bảo vệ toàn bộ mạng điện và cấp nguồn cho các tủ nhánh (SGK trang 33)."
  },
  {
    "id": "cn_b6_08",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Tủ điện phân phối NHÁNH có nhiệm vụ gì trong sơ đồ mạng điện cơ sở sản xuất?",
    "options": [
      "A. Nhận điện từ tủ tổng để phân phối tiếp đến các tủ điện động lực và tủ điện chiếu sáng trong từng phân xưởng riêng biệt.",
      "B. Hạ áp từ 22 kV xuống 380 V.",
      "C. Thay thế hoàn toàn động cơ của máy sản xuất.",
      "D. Thu sét bảo vệ mái nhà xưởng."
    ],
    "correct": 0,
    "explain": "Tủ phân phối nhánh được đặt tại từng phân xưởng sản xuất, nhận điện từ tủ tổng và chia thành các nhánh cấp riêng cho tủ động lực và tủ chiếu sáng của phân xưởng đó (SGK trang 33)."
  },
  {
    "id": "cn_b6_09",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Tủ điện ĐỘNG LỰC trong phân xưởng sản xuất cấp nguồn trực tiếp cho đối tượng nào?",
    "options": [
      "A. Các bóng đèn tuýp chiếu sáng hành lang và bảng hiệu quảng cáo.",
      "B. Các máy móc, thiết bị sản xuất như động cơ điện ba pha, máy gia công kim loại, máy may, máy ép, máy nén khí...",
      "C. Máy tính xách tay của nhân viên kế toán.",
      "D. Đồng hồ đeo tay của công nhân."
    ],
    "correct": 1,
    "explain": "Tủ động lực chuyên dùng cấp điện cho các máy công tác trong dây chuyền sản xuất (chủ yếu là động cơ ba pha, lò nhiệt, máy công cụ), chứa aptomat, khởi động từ và rơ le nhiệt bảo vệ (SGK trang 33)."
  },
  {
    "id": "cn_b6_10",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Quy trình an toàn bắt buộc khi thao tác ĐÓNG ĐIỆN cho một mạng điện phân xưởng sản xuất là:",
    "options": [
      "A. Đóng lần lượt TỪ NGUỒN ĐẾN TẢI: Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực / chiếu sáng -> Khởi động máy sản xuất.",
      "B. Đóng lần lượt từ tải về nguồn: Bật tất cả các máy móc trước rồi mới đóng tủ tổng.",
      "C. Đóng ngẫu nhiên bất kì aptomat nào trong xưởng trước cũng được.",
      "D. Vừa đóng aptomat tổng vừa bật máy sản xuất cùng lúc."
    ],
    "correct": 0,
    "explain": "Quy trình ĐÓNG ĐIỆN chuẩn: Đóng từ NGUỒN đến TẢI (Trạm -> Tủ tổng -> Tủ nhánh -> Tủ động lực/chiếu sáng -> Bật máy). Giúp các cấp bảo vệ sẵn sàng và kiểm soát thông số điện áp trước khi tải làm việc (SGK trang 33)."
  },
  {
    "id": "cn_b6_11",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Quy trình an toàn bắt buộc khi thao tác CẮT ĐIỆN để bảo dưỡng hoặc hết ca sản xuất là:",
    "options": [
      "A. Cắt trực tiếp cầu dao/aptomat tại tủ tổng trước tiên trong khi các máy vẫn đang chạy.",
      "B. Cắt lần lượt TỪ TẢI VỀ NGUỒN: Tắt các máy sản xuất -> Cắt tủ động lực / chiếu sáng -> Cắt tủ phân phối nhánh -> Cắt tủ phân phối tổng.",
      "C. Cắt ngẫu nhiên bất kì aptomat nào.",
      "D. Dùng kìm bấm đứt dây cáp nguồn."
    ],
    "correct": 1,
    "explain": "Quy trình CẮT ĐIỆN chuẩn: Cắt từ TẢI về NGUỒN (Tắt máy -> Cắt tủ động lực/chiếu sáng -> Cắt tủ nhánh -> Cắt tủ tổng) (SGK trang 33)."
  },
  {
    "id": "cn_b6_12",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Về mặt kĩ thuật và an toàn, VÌ SAO KHI CẮT ĐIỆN BẮT BUỘC PHẢI CẮT TỪ TẢI VỀ NGUỒN?",
    "options": [
      "A. Vì công tắc ở tải nhỏ hơn nên bấm nhẹ tay hơn.",
      "B. Vì khi các máy sản xuất đang hoạt động, dòng điện phụ tải rất lớn. Cắt tải trước để dập tắt dòng điện, tránh phát sinh HỒ QUANG ĐIỆN nguy hiểm gây nổ thiết bị, cháy tiếp điểm và gây bỏng cho người thao tác ở các tủ điện nguồn phía trên.",
      "C. Để bóng đèn chiếu sáng kịp nguội bớt.",
      "D. Vì quy định này chỉ áp dụng cho mạng điện sinh hoạt gia đình."
    ],
    "correct": 1,
    "explain": "Lí do sống còn: Khi mang tải lớn, việc mở tiếp điểm đóng cắt nguồn sẽ làm bùng phát hồ quang điện cực kì mạnh có thể làm nổ buồng dập hồ quang, cháy mặt và gây bỏng nghiêm trọng cho công nhân điện. Cắt tải trước giúp dập dòng không tải an toàn (SGK trang 33)."
  },
  {
    "id": "cn_b6_13",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Thiết bị bảo vệ quá tải và ngắn mạch được sử dụng phổ biến nhất cho động cơ ba pha trong tủ điện động lực là:",
    "options": [
      "A. Aptomat (MCB, MCCB) kết hợp với Rơ le nhiệt.",
      "B. Dây đồng quấn quanh đinh ốc.",
      "C. Công tơ điện một pha.",
      "D. Biến trở con chạy thủ công."
    ],
    "correct": 0,
    "explain": "Aptomat (MCB, MCCB) bảo vệ ngắn mạch và quá tải tức thời, còn rơ le nhiệt gắn sau khởi động từ chuyên bảo vệ quá tải lâu dài chống cháy cuộn dây động cơ (SGK trang 33)."
  },
  {
    "id": "cn_b6_14",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Một phân xưởng may công nghiệp có tổng công suất tác dụng tiêu thụ P = 160 kW, hệ số công suất cos φ = 0,8. Cần chọn máy biến áp phân phối có công suất biểu kiến định mức tối thiểu là bao nhiêu kVA?",
    "options": [
      "A. 128 kVA",
      "B. 160 kVA",
      "C. 200 kVA",
      "D. 250 kVA"
    ],
    "correct": 2,
    "explain": "Công suất biểu kiến của máy biến áp: <span class=\"math-term\">S = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">160</span><span class=\"math-frac-bottom\">0,8</span></span> = 200 kVA</span>. Do đó cần chọn máy biến áp có công suất định mức tối thiểu là 200 kVA."
  },
  {
    "id": "cn_b6_15",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Một xưởng chế biến gỗ có công suất tiêu thụ P = 80 kW, cos φ = 0,8. Nếu lắp đặt tụ bù để nâng hệ số công suất lên cos φ' = 1,0 thì công suất biểu kiến S tiêu thụ từ lưới điện giảm đi bao nhiêu kVA?",
    "options": [
      "A. Giảm 20 kVA",
      "B. Giảm 80 kVA",
      "C. Giảm 100 kVA",
      "D. Giảm 0 kVA"
    ],
    "correct": 0,
    "explain": "Ban đầu: <span class=\"math-term\">S<sub>1</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">0,8</span></span> = 100 kVA</span>. Khi nâng cos φ' = 1,0: <span class=\"math-term\">S<sub>2</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ'</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">1,0</span></span> = 80 kVA</span>. Công suất biểu kiến giảm: ΔS = 100 - 80 = 20 kVA (giúp giảm dòng điện trên dây cáp nguồn)."
  },
  {
    "id": "cn_b6_16",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "a. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ trong khoảng từ vài chục đến vài trăm kW.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ điển hình từ vài chục đến vài trăm kW (SGK trang 31).",
    "subLabel": "2a"
  },
  {
    "id": "cn_b6_17",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "b. Mạng điện động lực cấp cho các máy tiện CNC và mạng điện chiếu sáng xưởng An Phát phải được cấp nguồn từ cùng một công tắc chung để tiết kiệm tủ điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Mạng điện động lực và mạng điện chiếu sáng bắt buộc phải hoạt động độc lập để đảm bảo an toàn, khi máy móc bị sự cố nhảy aptomat thì đèn chiếu sáng vẫn sáng bình thường.",
    "subLabel": "2b"
  },
  {
    "id": "cn_b6_18",
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "c. Khi hết ca làm việc, thợ điện ngắt điện bằng cách cắt aptomat tổng ở trạm biến áp trước khi tắt các máy tiện CNC đang gia công.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Quy trình cắt điện an toàn bắt buộc phải cắt từ TẢI về NGUỒN: Tắt từng máy tiện CNC -> Cắt aptomat tủ động lực -> Cắt tủ nhánh -> Cắt tủ tổng để dập dòng phụ tải, tránh phát sinh hồ quang gây nổ và hỏng tiếp điểm ở tủ nguồn.",
    "subLabel": "2c"
  },
  {
    "id": "cn_b5_01",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nhà máy thủy điện sử dụng dạng năng lượng đầu vào nào để biến đổi thành điện năng?",
    "options": [
      "A. Nhiệt năng của than đá.",
      "B. Cơ năng (thế năng và động năng) của dòng nước chảy từ trên cao.",
      "C. Năng lượng phản ứng phân hạch hạt nhân.",
      "D. Năng lượng bức xạ mặt trời."
    ],
    "correct": 1,
    "explain": "Nhà máy thủy điện sử dụng thế năng của nước tích trữ ở hồ chứa trên cao, qua ống áp lực tạo dòng nước có động năng lớn làm quay tuabin nước, kéo máy phát điện quay để phát ra điện (SGK trang 26)."
  },
  {
    "id": "cn_b5_02",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Ưu điểm nổi bật nhất của nhà máy nhiệt điện sử dụng nhiên liệu hóa thạch (than đá, khí đốt) là gì?",
    "options": [
      "A. Hoàn toàn không phát thải khí nhà kính.",
      "B. Công suất phát điện lớn và khả năng vận hành liên tục, ổn định, không phụ thuộc vào mùa mưa hay mùa khô như thủy điện.",
      "C. Chi phí xây dựng và nhiên liệu bằng 0.",
      "D. Sử dụng nguồn tài nguyên vĩnh cửu không bao giờ cạn kiệt."
    ],
    "correct": 1,
    "explain": "Nhà máy nhiệt điện có ưu điểm lớn là công suất phát rất cao, vận hành liên tục 24/7 ổn định quanh năm, đảm bảo cấp điện nền cho hệ thống mà không bị ảnh hưởng bởi thời tiết hay hạn hán (SGK trang 27)."
  },
  {
    "id": "cn_b5_03",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nhược điểm lớn nhất về mặt môi trường của các nhà máy nhiệt điện than là:",
    "options": [
      "A. Phát thải lượng lớn khí nhà kính (CO2, SO2, NOx), bụi mịn và khối lượng tro xỉ khổng lồ gây ô nhiễm đất, nước và không khí.",
      "B. Làm khô cạn các dòng sông lớn.",
      "C. Gây ra các vụ rò rỉ phóng xạ nguy hiểm.",
      "D. Tiêu diệt chim và dơi do cánh quạt quay."
    ],
    "correct": 0,
    "explain": "Đốt than phát thải lượng khí CO2 lớn gây hiệu ứng nhà kính và biến đổi khí hậu toàn cầu, kèm theo khí SO2 gây mưa axit và bãi thải tro xỉ chiếm nhiều diện tích đất (SGK trang 27)."
  },
  {
    "id": "cn_b5_04",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Trong nhà máy điện hạt nhân, năng lượng dùng để đun sôi nước tạo hơi áp suất cao quay tuabin xuất phát từ đâu?",
    "options": [
      "A. Phản ứng phân hạch hạt nhân của nhiên liệu phóng xạ (chủ yếu là Uranium-235) trong lò phản ứng.",
      "B. Đốt cháy khí hydro hóa lỏng.",
      "C. Bức xạ nhiệt của tia vũ trụ.",
      "D. Phản ứng hóa học giữa axit và bazo."
    ],
    "correct": 0,
    "explain": "Nhà máy điện hạt nhân giải phóng nhiệt năng cực lớn từ phản ứng phân hạch dây chuyền của hạt nhân Uranium trong lò phản ứng hạt nhân để tạo hơi nước quay tuabin máy phát (SGK trang 28)."
  },
  {
    "id": "cn_b5_05",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Thiết bị biến tần (Inverter) trong hệ thống điện mặt trời nối lưới có nhiệm vụ gì?",
    "options": [
      "A. Tích trữ điện năng vào pin dự phòng.",
      "B. Chuyển đổi dòng điện một chiều (DC) do các tấm pin quang điện tạo ra thành dòng điện xoay chiều (AC) đồng bộ về tần số và điện áp để cấp cho tải và hòa vào lưới điện quốc gia.",
      "C. Làm mát các tấm pin mặt trời khi trời quá nắng.",
      "D. Tự động xoay tấm pin theo hướng gió."
    ],
    "correct": 1,
    "explain": "Pin mặt trời tạo ra dòng điện một chiều (DC). Muốn cấp điện cho thiết bị xoay chiều 220V hoặc đưa lên lưới điện 50 Hz thì bắt buộc phải qua bộ biến tần (Inverter) chuyển DC thành AC (SGK trang 29)."
  },
  {
    "id": "cn_b5_06",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Hạn chế chung lớn nhất của hai nguồn năng lượng tái tạo là điện gió và điện mặt trời là gì?",
    "options": [
      "A. Phát thải quá nhiều khí CO2 độc hại.",
      "B. Phụ thuộc hoàn toàn vào điều kiện thời tiết (nắng, gió), tính bất định cao, không phát được điện vào ban đêm (điện mặt trời) hoặc lúc lặng gió.",
      "C. Giá thành thiết bị tăng gấp 100 lần mỗi năm.",
      "D. Không thể kết nối vào hệ thống lưới điện."
    ],
    "correct": 1,
    "explain": "Năng lượng gió và mặt trời có nhược điểm lớn là tính chập chờn, bất định, phụ thuộc vào thời tiết. Khi thời tiết xấu hoặc đêm xuống, công suất phát sụt giảm mạnh đòi hỏi hệ thống điện phải có nguồn điện nền bù đắp (SGK trang 29-30)."
  },
  {
    "id": "cn_b5_07",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nhà máy thủy điện lớn nhất Việt Nam và khu vực Đông Nam Á hiện nay là",
    "options": [
      "A. Thủy điện Hòa Bình",
      "B. Thủy điện Sơn La (công suất 2 400 MW)",
      "C. Thủy điện Yaly",
      "D. Thủy điện Trị An"
    ],
    "correct": 1,
    "explain": "Thủy điện Sơn La trên sông Đà với 6 tổ máy có tổng công suất 2 400 MW là nhà máy thủy điện có quy mô lớn nhất Việt Nam và Đông Nam Á."
  },
  {
    "id": "cn_b5_08",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nguồn năng lượng sinh khối (Biomass) dùng để sản xuất điện năng bao gồm các nguồn vật liệu nào?",
    "options": [
      "A. Quặng sắt, bauxit và đất hiếm.",
      "B. Phụ phẩm nông nghiệp và lâm nghiệp như bã mía, trấu, rơm rạ, mùn cưa, dăm gỗ và chất thải hữu cơ.",
      "C. Dầu mỏ thô dưới đáy biển sâu.",
      "D. Than đá antraxit."
    ],
    "correct": 1,
    "explain": "Năng lượng sinh khối tận dụng các phế phụ phẩm nông nghiệp (bã mía ở các nhà máy đường, trấu, dăm gỗ) để đốt lò hơi phát điện, giúp giảm thiểu rác thải nông nghiệp và bảo vệ môi trường (SGK trang 30)."
  },
  {
    "id": "cn_b5_09",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Hiệu suất chuyển đổi quang năng thành điện năng của các tấm pin quang điện (Silicon tinh thể) thương mại phổ biến hiện nay đạt khoảng",
    "options": [
      "A. từ 15% đến 22%",
      "B. từ 85% đến 98%",
      "C. 100%",
      "D. dưới 2%"
    ],
    "correct": 0,
    "explain": "Các tấm pin mặt trời silicon thương dụng hiện nay có hiệu suất chuyển đổi quang điện trung bình trong khoảng 15% - 22%."
  },
  {
    "id": "cn_b5_10",
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Xu hướng chuyển dịch năng lượng hiện nay tại Việt Nam và trên thế giới hướng tới mục tiêu Net Zero là",
    "options": [
      "A. Xây dựng thêm thật nhiều nhà máy nhiệt điện đốt than.",
      "B. Giảm dần nhiệt điện than, tăng nhanh tỉ trọng năng lượng tái tạo (điện gió ngoài khơi, điện mặt trời, sinh khối) kết hợp hệ thống pin tích năng (BESS) và lưới điện thông minh.",
      "C. Ngừng hoàn toàn việc sử dụng điện năng.",
      "D. Chỉ sử dụng máy phát điện chạy xăng dầu tại từng hộ gia đình."
    ],
    "correct": 1,
    "explain": "Chuyển dịch năng lượng xanh: cắt giảm điện than ô nhiễm, phát triển năng lượng tái tạo sạch (gió, mặt trời, thủy điện tích năng) hướng tới mục tiêu phát thải ròng bằng 0 (Net Zero) vào năm 2050 theo cam kết của Việt Nam tại COP26."
  },
  {
    "id": "cn_b7_01",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc thành phần nào của hệ thống điện quốc gia?",
    "options": [
      "A. Lưới điện truyền tải siêu cao áp.",
      "B. Lưới điện phân phối.",
      "C. Nhà máy nhiệt điện nguồn.",
      "D. Hệ thống đập tràn thủy điện."
    ],
    "correct": 1,
    "explain": "Mạng điện hạ áp sinh hoạt là khâu cuối cùng của lưới điện phân phối, nhận điện từ trạm biến áp hạ áp để cấp điện trực tiếp cho các hộ gia đình (SGK trang 35)."
  },
  {
    "id": "cn_b7_02",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Các thông số kĩ thuật định mức tiêu chuẩn của mạng điện hạ áp sinh hoạt tại Việt Nam là:",
    "options": [
      "A. Điện áp dây U<sub>d</sub> = 380 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 50 Hz.",
      "B. Điện áp dây U<sub>d</sub> = 220 V; Điện áp pha U<sub>p</sub> = 110 V; Tần số f = 60 Hz.",
      "C. Điện áp dây U<sub>d</sub> = 500 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 25 Hz.",
      "D. Điện áp một chiều 12 V."
    ],
    "correct": 0,
    "explain": "Quy chuẩn Việt Nam: Mạng hạ áp sinh hoạt 3 pha 4 dây có điện áp dây U<sub>d</sub> = 380 V, điện áp pha U<sub>p</sub> = 220 V và tần số công nghiệp f = 50 Hz (SGK trang 36)."
  },
  {
    "id": "cn_b7_03",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Theo quy chuẩn kĩ thuật, mức sai số điện áp cho phép đối với mạng điện hạ áp sinh hoạt không vượt quá ngưỡng nào?",
    "options": [
      "A. ±5% so với điện áp danh định 220 V (tương ứng dải điện áp an toàn từ 209 V đến 231 V).",
      "B. ±50% (tương ứng dải từ 110 V đến 330 V).",
      "C. ±1% (chỉ dao động không quá 2 V).",
      "D. Không có quy định sai số."
    ],
    "correct": 0,
    "explain": "Mức lệch điện áp cho phép trong điều kiện vận hành bình thường là ±5% của 220 V: ΔU = 220 × 5% = 11 V, tức điện áp tại ổ cắm dao động trong ngưỡng từ 209 V đến 231 V là đạt chuẩn (SGK trang 36)."
  },
  {
    "id": "cn_b7_04",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Sơ đồ cấu trúc điển hình của mạng điện hạ áp sinh hoạt từ trạm điện đến các hộ gia đình gồm:",
    "options": [
      "A. Trạm biến áp hạ áp -> Tủ phân phối tổng -> Tủ phân phối khu vực (nhánh) -> Đường cáp trục chính ba pha -> Đường cáp rẽ nhánh một pha -> Công tơ điện hộ gia đình.",
      "B. Công tơ điện -> Trạm biến áp -> Nhà máy nhiệt điện.",
      "C. Đường dây 500 kV nối thẳng vào ổ cắm gia đình.",
      "D. Tủ tổng -> Bình ắc quy -> Bóng đèn."
    ],
    "correct": 0,
    "explain": "Cấu trúc mạng hạ áp sinh hoạt: Trạm biến áp hạ áp (380/220V) -> Tủ phân phối tổng -> Tủ phân phối nhánh cụm dân cư -> Dây trục chính 3 pha 4 dây -> Dây rẽ nhánh 1 pha 2 dây -> Công tơ điện và bảng điện trong nhà (SGK trang 35-36)."
  },
  {
    "id": "cn_b7_05",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Mục đích quan trọng nhất của việc phân chia các hộ gia đình rẽ nhánh đồng đều từ ba pha A, B, C của đường trục chính là gì?",
    "options": [
      "A. Để cân bằng phụ tải giữa các pha, tránh hiện tượng lệch pha gây quá tải một pha và sụt áp trên dây trung tính.",
      "B. Để các hộ gia đình dùng chung một công tơ điện.",
      "C. Để làm đẹp cảnh quan đường phố.",
      "D. Để dòng điện pha tăng lên gấp 10 lần."
    ],
    "correct": 0,
    "explain": "Phụ tải sinh hoạt là phụ tải một pha. Phải phân bổ đều các hộ vào pha A, pha B, pha C để phụ tải ba pha cân bằng, giảm thiểu dòng điện chạy trên dây trung tính và tránh sụt áp cục bộ (SGK trang 36)."
  },
  {
    "id": "cn_b7_06",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Thiết bị nào sau đây dùng để đo đếm điện năng tiêu thụ (tính bằng kilowatt giờ - kWh) của từng hộ gia đình để thanh toán tiền điện?",
    "options": [
      "A. Công tơ điện (đồng hồ điện).",
      "B. Vôn kế.",
      "C. Ampe kế kẹp.",
      "D. Tụ điện chống sét."
    ],
    "correct": 0,
    "explain": "Công tơ điện (điện tử hoặc cơ) là thiết bị đo đếm điện năng tiêu thụ A = P.t (đơn vị kWh hay 'số điện') của từng khách hàng dùng điện (SGK trang 36)."
  },
  {
    "id": "cn_b7_07",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Thiết bị chống giật và chống rò điện (RCBO hoặc ELCB) trong bảng điện gia đình hoạt động dựa trên nguyên lí nào?",
    "options": [
      "A. Tự động so sánh dòng điện chạy trên dây pha và dòng điện hồi về trên dây trung tính, nếu có sự chênh lệch (dòng rò ra vỏ chạm vào người) vượt ngưỡng an toàn (thường là 30 mA) thì ngắt điện tức thì trong tích tắc.",
      "B. Đo nhiệt độ nóng lên của bóng đèn.",
      "C. Đếm số lần bật tắt công tắc trong ngày.",
      "D. Ngắt điện khi có tiếng động lớn."
    ],
    "correct": 0,
    "explain": "Aptomat chống giật (RCBO/ELCB) đo dòng rò: bình thường dòng đi trên dây pha bằng dòng về trên dây trung tính (Ipha = Itrungtinh). Khi có người bị giật hoặc rò điện ra vỏ máy xuống đất, dòng bị lệch, rơ le cảm biến từ sẽ tác động cắt mạch ngay lập tức (dưới 0,03 giây) để cứu sống người."
  },
  {
    "id": "cn_b7_08",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Dây tiếp địa bảo vệ (PE - màu vàng sọc xanh lá) trong hệ thống điện gia đình có vai trò gì?",
    "options": [
      "A. Dẫn dòng điện rò từ vỏ kim loại của thiết bị (máy giặt, tủ lạnh, bình nóng lạnh) xuống cọc đất, ngăn ngừa nguy cơ điện giật cho người sử dụng.",
      "B. Làm cho tủ lạnh làm đá nhanh hơn.",
      "C. Tăng độ sáng cho bóng đèn phòng khách.",
      "D. Dẫn sóng wifi vào trong nhà."
    ],
    "correct": 0,
    "explain": "Nối đất vỏ thiết bị kim loại (dây PE) giúp triệt tiêu điện áp rò nguy hiểm trên vỏ máy: khi có chạm vỏ, dòng rò theo dây tiếp địa có điện trở rất nhỏ truyền xuống đất làm nhảy aptomat và bảo vệ người chạm vào không bị giật."
  },
  {
    "id": "cn_b7_09",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Một hộ gia đình trong 30 ngày sử dụng bình nóng lạnh công suất 2 500 W mỗi ngày bật 1,5 giờ. Lượng điện năng tiêu thụ riêng của bình nóng lạnh trong tháng đó là",
    "options": [
      "A. 112,5 kWh",
      "B. 37,5 kWh",
      "C. 75 kWh",
      "D. 150 kWh"
    ],
    "correct": 0,
    "explain": "Đổi công suất P = 2 500 W = 2,5 kW. Tổng thời gian sử dụng trong 30 ngày: t = 30 × 1,5 = 45 giờ. Điện năng tiêu thụ: A = P × t = 2,5 × 45 = 112,5 kWh (số điện)."
  },
  {
    "id": "cn_b7_10",
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Hành vi nào sau đây vi phạm nghiêm trọng quy tắc an toàn khi sử dụng mạng điện hạ áp sinh hoạt?",
    "options": [
      "A. Rút phích cắm bình siêu tốc khi tay còn đang ướt hoặc dùng dây đồng thay thế cho dây chì của cầu chì.",
      "B. Lắp đặt aptomat chống rò 30 mA cho bình nước nóng.",
      "C. Tắt bớt các bóng đèn khi rời khỏi phòng.",
      "D. Nối dây tiếp địa cho vỏ máy giặt."
    ],
    "correct": 0,
    "explain": "Nước dẫn điện tốt nên tay ướt chạm vào phích cắm dễ bị phóng điện gây giật chết người; thay dây đồng vào cầu chì làm mất tác dụng bảo vệ quá tải, khi chập mạch dây dẫn sẽ bốc cháy gây hỏa hoạn."
  },
  {
    "id": "cn_b2_01",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Nghiên cứu, tính toán lựa chọn thiết bị điện và lập hồ sơ bản vẽ thiết kế sơ đồ mạch điện thuộc nhóm nghề nào?",
    "options": [
      "A. Lắp đặt điện.",
      "B. Thiết kế điện.",
      "C. Vận hành điện.",
      "D. Bảo dưỡng và sửa chữa điện."
    ],
    "correct": 1,
    "explain": "Nhóm nghề thiết kế điện có nhiệm vụ nghiên cứu, ứng dụng kiến thức kĩ thuật điện để tính toán lựa chọn khí cụ, thiết bị điện và lập hồ sơ bản vẽ thiết kế hệ thống điện (SGK trang 9-10)."
  },
  {
    "id": "cn_b2_02",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Chế tạo các thiết bị như máy biến áp, động cơ điện, dây cáp điện và khí cụ đóng cắt trên dây chuyền công nghiệp thuộc nhóm nghề nào?",
    "options": [
      "A. Sản xuất, chế tạo thiết bị điện.",
      "B. Vận hành điện.",
      "C. Thiết kế thời trang.",
      "D. Kinh doanh bất động sản."
    ],
    "correct": 0,
    "explain": "Nhóm nghề sản xuất, chế tạo thiết bị điện làm việc tại các nhà máy, xí nghiệp cơ điện để sản xuất các thiết bị, máy móc điện và linh kiện đạt chuẩn kiểm định (SGK trang 11)."
  },
  {
    "id": "cn_b2_03",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Thi công kéo dây, lắp đặt tủ điện và kết nối các thiết bị điện tại hiện trường công trình xây dựng theo bản vẽ thiết kế thuộc nhóm nghề nào?",
    "options": [
      "A. Lắp đặt điện.",
      "B. Nghiên cứu lí thuyết vật lí.",
      "C. Thiết kế vi mạch máy tính.",
      "D. Vận hành tổng đài điện thoại."
    ],
    "correct": 0,
    "explain": "Nhóm nghề lắp đặt điện trực tiếp làm việc tại hiện trường các công trình dân dụng và công nghiệp để thi công mạng điện và lắp đặt thiết bị đúng quy chuẩn kĩ thuật (SGK trang 12)."
  },
  {
    "id": "cn_b2_04",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Theo dõi các thông số điện áp, dòng điện, tần số và thao tác đóng cắt các thiết bị điện tại phòng điều khiển trung tâm thuộc nhóm nghề nào?",
    "options": [
      "A. Vận hành điện.",
      "B. Thiết kế điện.",
      "C. Sản xuất thiết bị.",
      "D. Môi giới việc làm."
    ],
    "correct": 0,
    "explain": "Nhóm nghề vận hành điện làm việc tại phòng điều độ, trung tâm điều khiển nhà máy điện và trạm biến áp để giám sát và duy trì mạng điện hoạt động liên tục, an toàn (SGK trang 13)."
  },
  {
    "id": "cn_b2_05",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Kiểm tra định kì, tra dầu mỡ, siết chặt các điểm tiếp xúc và phục hồi các chi tiết bị hỏng hóc thuộc nhóm nghề nào?",
    "options": [
      "A. Bảo dưỡng và sửa chữa điện.",
      "B. Thiết kế điện.",
      "C. Xây dựng cầu đường.",
      "D. Khảo sát địa chất."
    ],
    "correct": 0,
    "explain": "Bảo dưỡng nhằm ngăn ngừa nguy cơ sự cố hỏng hóc; sửa chữa nhằm phục hồi hoạt động bình thường của thiết bị khi xảy ra sự cố hư hỏng (SGK trang 14)."
  },
  {
    "id": "cn_b2_06",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Yêu cầu về phẩm chất đạo đức và kĩ năng cốt lõi của người làm việc trong ngành kĩ thuật điện là:",
    "options": [
      "A. Tuân thủ nghiêm ngặt quy trình an toàn điện, cẩn thận, tỉ mỉ, có tinh thần trách nhiệm cao và khả năng làm việc nhóm.",
      "B. Làm việc tùy tiện, tự ý thay đổi quy trình khi thấy tiện.",
      "C. Không cần trang bị đồ bảo hộ lao động.",
      "D. Chỉ cần thể lực mà không cần kiến thức chuyên môn."
    ],
    "correct": 0,
    "explain": "Ngành điện tiềm ẩn nguy hiểm cao về điện giật và cháy nổ, do đó đòi hỏi tính kỉ luật an toàn tuyệt đối, sự cẩn trọng và kiến thức kĩ thuật vững vàng (SGK trang 15)."
  },
  {
    "id": "cn_b2_07",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Để trở thành một Kĩ sư thiết kế hệ thống điện, người học cần tốt nghiệp trình độ đào tạo nào?",
    "options": [
      "A. Đại học chuyên ngành Kĩ thuật điện / Hệ thống điện.",
      "B. Sơ cấp nghề 3 tháng.",
      "C. Chỉ cần tốt nghiệp Trung học cơ sở.",
      "D. Bằng lái xe hạng C."
    ],
    "correct": 0,
    "explain": "Vị trí kĩ sư thiết kế đòi hỏi nền tảng kiến thức chuyên sâu về tính toán giải tích mạch điện, tiêu chuẩn kĩ thuật và phần mềm đồ họa chuyên dụng, yêu cầu tốt nghiệp đại học chuyên ngành (SGK trang 10)."
  },
  {
    "id": "cn_b2_08",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Sự phát triển mạnh mẽ của xe điện, hệ thống điện mặt trời mái nhà và lưới điện thông minh mang lại cơ hội gì cho nhân lực ngành kĩ thuật điện?",
    "options": [
      "A. Làm giảm nhu cầu việc làm của ngành điện.",
      "B. Mở ra rất nhiều cơ hội việc làm mới, thu nhập cao và triển vọng phát triển nghề nghiệp lâu dài.",
      "C. Khiến ngành kĩ thuật điện bị xóa bỏ hoàn toàn.",
      "D. Không có tác động gì."
    ],
    "correct": 1,
    "explain": "Xu thế chuyển đổi xanh và tự động hóa công nghiệp đòi hỏi nguồn nhân lực kĩ thuật điện chất lượng cao lớn hơn bao giờ hết (SGK trang 16)."
  },
  {
    "id": "cn_b2_09",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Dụng cụ bảo hộ lao động cá nhân bắt buộc khi kiểm tra, thao tác trên lưới điện hạ áp đang mang điện gồm:",
    "options": [
      "A. Găng tay cách điện hạ áp, ủng cách điện, mũ bảo hộ, kính bảo vệ mắt và bút thử điện đạt chuẩn kiểm định.",
      "B. Đi chân đất để tiếp đất tốt hơn.",
      "C. Đeo găng tay len ướt.",
      "D. Sử dụng tuốc nơ vít kim loại không bọc cán cách điện."
    ],
    "correct": 0,
    "explain": "Quy tắc an toàn điện đòi hỏi thợ điện phải sử dụng đầy đủ đồ cách điện chuyên dụng đã qua kiểm định định kì (găng tay cách điện, ủng, bút thử điện...) để ngăn chặn dòng điện giật truyền qua cơ thể."
  },
  {
    "id": "cn_b2_10",
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Khẩu hiệu an toàn hàng đầu được áp dụng trong mọi công việc kĩ thuật điện là gì?",
    "options": [
      "A. 'An toàn là trên hết - Cắt điện, kiểm tra không còn điện và tiếp đất trước khi thao tác'.",
      "B. 'Càng nhanh càng tốt, bỏ qua kiểm tra an toàn'.",
      "C. 'Chạm tay thử xem có giật không'.",
      "D. 'Cứ đóng điện rồi tính sau'."
    ],
    "correct": 0,
    "explain": "Nguyên tắc vàng của an toàn điện: Trước khi sửa chữa phải cắt điện, khóa aptomat gắn biển cảnh báo, dùng bút thử điện kiểm tra chắc chắn hết điện rồi mới được phép thao tác."
  },
  {
    "id": "cn_gk1_ds1d",
    "topic": "HỆ THỐNG ĐIỆN QUỐC GIA (ĐÚNG/SAI)",
    "question": "d. Đường dây 500 kV mạch 3 (Quảng Trạch - Phố Nối) khánh thành năm 2024 giúp tăng cường liên kết lưới truyền tải và an ninh năng lượng cho miền Bắc.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Dự án 500 kV mạch 3 Quảng Trạch - Phố Nối dài 519 km khánh thành tháng 8/2024 giúp truyền tải công suất điện từ miền Trung ra miền Bắc, giải tỏa nguy cơ thiếu điện vào cao điểm nắng nóng.",
    "subLabel": "1d"
  },
  {
    "id": "cn_gk1_ds2d",
    "topic": "MẠNG ĐIỆN SẢN XUẤT NHỎ (ĐÚNG/SAI)",
    "question": "d. Trong phân xưởng An Phát, tủ điện phân phối tổng (MSB) nhận điện trực tiếp từ máy biến áp hạ áp để cấp điện cho các tủ nhánh.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Theo sơ đồ cấu trúc phân cấp chuẩn, tủ phân phối tổng (MSB) đặt tại trạm biến áp, lấy điện từ đầu ra hạ áp của máy biến áp để chia nguồn cho các tủ nhánh.",
    "subLabel": "2d"
  },
  {
    "id": "cn_gk1_ds3a",
    "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
    "question": "a. Trong mạch điện ba pha đối xứng nối hình sao (Y), điện áp dây luôn bằng điện áp pha (U<sub>d</sub> = U<sub>p</sub>).<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub>; chỉ khi nối tam giác (Δ) thì mới có U<sub>d</sub> = U<sub>p</sub>.",
    "subLabel": "3a"
  },
  {
    "id": "cn_gk1_ds3b",
    "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
    "question": "b. Nếu đấu ba cụm lò sấy hình sao (Y) vào lưới 380/220 V thì điện áp đặt vào mỗi cụm lò sấy là 220 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Khi tải nối sao, điện áp mỗi pha tải là điện áp pha <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>."
  },
  {
    "id": "cn_gk1_ds3c",
    "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
    "question": "c. Nếu ba cụm lò sấy hoàn toàn đối xứng thì dòng điện hiệu dụng chạy trong dây trung tính I<sub>o</sub> bằng 0.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Khi tải ba pha hoàn toàn đối xứng, tổng vectơ của 3 dòng điện pha bằng 0 (i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0), do đó dòng điện chạy trên dây trung tính I<sub>o</sub> = 0.",
    "subLabel": "3c"
  },
  {
    "id": "cn_gk1_ds3d",
    "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
    "question": "d. Kĩ sư điện có thể lắp thêm một cầu chì ngắt mạch trên dây trung tính để bảo vệ an toàn cho hệ thống lò sấy.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Tuyệt đối KHÔNG ĐƯỢC đặt cầu chì hay thiết bị đóng ngắt đơn cực trên dây trung tính, vì nếu cầu chì đứt khi phụ tải mất cân bằng sẽ làm điểm trung tính bị trôi, gây quá điện áp nghiêm trọng cháy thiết bị.",
    "subLabel": "3d"
  }
];

const CONGNGHE_TOPICS_DATABASE = [
  {
    "id": "cn_bai3",
    "title": "🌀 BÀI 3 TRỌNG TÂM: Mạch điện xoay chiều ba pha",
    "icon": "🌀",
    "description": "Nguồn 3 pha, nối Y, Δ; Công thức Ud, Up, Id, Ip, tính toán tổng trở & tải đối xứng (Xem kĩ)",
    "questions": [
      {
        "id": "cn_b3_01",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>. Đại lượng I<sub>m</sub> được gọi là gì?",
        "options": [
          "A. Giá trị hiệu dụng của dòng điện.",
          "B. Giá trị cực đại (biên độ) của dòng điện.",
          "C. Tần số góc của dòng điện.",
          "D. Pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>, đại lượng I<sub>m</sub> là cường độ dòng điện cực đại (biên độ), đơn vị là ampe (A). Mối liên hệ với giá trị hiệu dụng I: <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span></span> (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_02",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một dòng điện xoay chiều có biểu thức <span class=\"math-term\">i = 4√2 · sin(100πt)</span> (A). Giá trị hiệu dụng I và tần số f của dòng điện này lần lượt là",
        "options": [
          "A. I = 4 A; f = 50 Hz",
          "B. I = 4√2 A; f = 100 Hz",
          "C. I = 4 A; f = 100 Hz",
          "D. I = 2√2 A; f = 50 Hz"
        ],
        "correct": 0,
        "explain": "Cường độ cực đại <span class=\"math-term\">I<sub>m</sub> = 4√2 A</span> nên giá trị hiệu dụng <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">4√2</span><span class=\"math-frac-bottom\">√2</span></span> = 4 A</span>. Tần số góc <span class=\"math-term\">ω = 100π rad/s</span> nên tần số <span class=\"math-term\">f = <span class=\"math-frac\"><span class=\"math-frac-top\">ω</span><span class=\"math-frac-bottom\">2π</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">100π</span><span class=\"math-frac-bottom\">2π</span></span> = 50 Hz</span>."
      },
      {
        "id": "cn_b3_03",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Công thức tính cảm kháng X<sub>L</sub> của cuộn cảm thuần và dung kháng X<sub>C</sub> của tụ điện đối với dòng điện xoay chiều tần số f là:",
        "options": [
          "A. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = 2πfC</span>",
          "B. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "C. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfL</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "D. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">L</span><span class=\"math-frac-bottom\">2πf</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">C</span><span class=\"math-frac-bottom\">2πf</span></span></span>"
        ],
        "correct": 1,
        "explain": "Cảm kháng cuộn cảm thuần: <span class=\"math-term\">X<sub>L</sub> = ωL = 2πfL</span> (đơn vị Ω); Dung kháng tụ điện: <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">ωC</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span> (đơn vị Ω) (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_04",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z<sub>t</sub> của tải điện một pha gồm điện trở R mắc nối tiếp với cuộn cảm (X<sub>L</sub>) và tụ điện (X<sub>C</sub>) được tính theo công thức nào?",
        "options": [
          "A. <span class=\"math-term\">z<sub>t</sub> = R + X<sub>L</sub> - X<sub>C</sub></span>",
          "B. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>",
          "C. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> + X<sub>C</sub>)²]</span>",
          "D. <span class=\"math-term\">z<sub>t</sub> = √[R² - (X<sub>L</sub> - X<sub>C</sub>)²]</span>"
        ],
        "correct": 1,
        "explain": "Tổng trở của tải R-L-C nối tiếp đặc trưng bởi độ lớn: <span class=\"math-term\">z<sub>t</sub> = √(R² + X²)</span> với điện kháng <span class=\"math-term\">X = X<sub>L</sub> - X<sub>C</sub></span>, do đó <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>. Hệ số góc <span class=\"math-term\">tan φ = <span class=\"math-frac\"><span class=\"math-frac-top\">X</span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">X<sub>L</sub> - X<sub>C</sub></span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_05",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hiện tượng cộng hưởng điện trong đoạn mạch R-L-C nối tiếp xảy ra khi nào?",
        "options": [
          "A. Khi R = X<sub>L</sub>",
          "B. Khi cảm kháng bằng dung kháng (X<sub>L</sub> = X<sub>C</sub>)",
          "C. Khi tần số f = 0",
          "D. Khi tổng trở đạt giá trị lớn vô cùng"
        ],
        "correct": 1,
        "explain": "Cộng hưởng điện xảy ra khi cảm kháng bằng dung kháng <span class=\"math-term\">X<sub>L</sub> = X<sub>C</sub></span> (tức <span class=\"math-term\">2πfL = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>), khi đó điện kháng triệt tiêu X = 0, tổng trở z<sub>t</sub> đạt cực tiểu z<sub>t</sub> = R và dòng điện trong mạch đạt cực đại <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">U</span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_06",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hệ thống dòng điện xoay chiều ba pha đối xứng là tập hợp của ba dòng điện xoay chiều hình sin có đặc điểm gì?",
        "options": [
          "A. Cùng biên độ, cùng tần số và cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> (120°) lần lượt giữa các pha.",
          "C. Khác tần số, cùng biên độ và lệch pha nhau 90°.",
          "D. Cùng biên độ nhưng tần số pha sau gấp đôi pha trước."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa SGK trang 18: Dòng điện ba pha đối xứng gồm 3 dòng điện xoay chiều hình sin có cùng tần số, cùng biên độ và lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (tức 120°) lần lượt giữa các pha."
      },
      {
        "id": "cn_b3_07",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cấu tạo phần tĩnh (stator) của máy phát điện xoay chiều ba pha gồm:",
        "options": [
          "A. Một nam châm điện có hai cực Bắc - Nam quay quanh trục.",
          "B. Lõi thép có các rãnh đặt ba cuộn dây giống hệt nhau về số vòng và kích thước, bố trí lệch nhau 120° trên đường tròn stator.",
          "C. Bộ góp và chổi than tiếp điện.",
          "D. Ba cặp cực nam châm vĩnh cửu quay tròn liên tục."
        ],
        "correct": 1,
        "explain": "Stator (phần tĩnh) là lõi thép hình trụ có rãnh đặt ba cuộn dây AX (pha A), BY (pha B), CZ (pha C) có số vòng và kích thước hoàn toàn giống nhau, bố trí lệch nhau góc 120° trên vòng tròn stator (SGK trang 18)."
      },
      {
        "id": "cn_b3_08",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Nếu chọn suất điện động pha A làm gốc: <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>, thì biểu thức suất điện động pha B và pha C của máy phát ba pha là:",
        "options": [
          "A. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - π)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + π)</span>",
          "B. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>",
          "C. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span>",
          "D. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · cos(ωt)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · tan(ωt)</span>"
        ],
        "correct": 1,
        "explain": "Ba suất điện động của máy phát ba pha đối xứng có cùng biên độ E<sub>m</sub>, cùng tần số góc ω và lần lượt lệch pha nhau <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (120°): <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>; <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>; <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> [có thể viết dạng góc âm: <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">4π</span><span class=\"math-frac-bottom\">3</span></span>)</span>] (SGK trang 18)."
      },
      {
        "id": "cn_b3_09",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong cách nối nguồn hoặc tải ba pha hình sao (Y), điểm trung tính O được tạo thành bằng cách nào?",
        "options": [
          "A. Nối ba điểm đầu A, B, C lại với nhau.",
          "B. Nối ba điểm cuối X, Y, Z của ba pha lại với nhau.",
          "C. Nối đầu pha này với cuối pha kia: A nối Z, B nối X, C nối Y.",
          "D. Nối dây pha A trực tiếp với cọc tiếp địa bằng đồng."
        ],
        "correct": 1,
        "explain": "Cách nối hình sao (Y): Ba điểm cuối X, Y, Z của các cuộn dây pha được nối chung với nhau tạo thành điểm trung tính O. Ba điểm đầu A, B, C đưa ra ba đường dây pha (SGK trang 19)."
      },
      {
        "id": "cn_b3_10",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Mạch điện ba pha bốn dây gồm các dây dẫn nào sau đây?",
        "options": [
          "A. Bốn dây pha A, B, C, D.",
          "B. Ba dây pha (A, B, C) và một dây trung tính (dây trung hòa O-O').",
          "C. Hai dây pha và hai dây tiếp địa.",
          "D. Ba dây trung tính và một dây pha mang điện."
        ],
        "correct": 1,
        "explain": "Mạch điện ba pha bốn dây gồm ba dây dẫn nối từ các đầu pha A, B, C (gọi là ba dây pha) và một dây dẫn nối từ điểm trung tính O của nguồn đến điểm trung tính O' của tải (gọi là dây trung tính hay dây trung hòa) (SGK trang 19)."
      },
      {
        "id": "cn_b3_11",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong cách nối tải ba pha hình tam giác (Δ), các pha được liên kết với nhau theo nguyên tắc nào?",
        "options": [
          "A. Ba đầu pha A, B, C nối chung với nhau.",
          "B. Ba cuối pha X, Y, Z nối chung với nhau.",
          "C. Điểm đầu pha này nối với điểm cuối pha kia khép kín: A nối Z, B nối X, C nối Y.",
          "D. Nối song song cả ba cuộn dây vào một nguồn một pha."
        ],
        "correct": 2,
        "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này nối với điểm cuối của pha kia theo thứ tự vòng tròn khép kín: A nối với Z, B nối với X, C nối với Y (SGK trang 19)."
      },
      {
        "id": "cn_b3_12",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Đại lượng 'Điện áp pha' (kí hiệu U<sub>p</sub>) trong mạch ba pha được định nghĩa là",
        "options": [
          "A. điện áp giữa hai dây pha bất kì trong ba dây pha A, B, C.",
          "B. điện áp đo giữa một dây pha và dây trung tính (hoặc giữa hai đầu của một pha).",
          "C. điện áp giữa dây trung tính và mặt đất.",
          "D. điện áp một chiều nạp vào ắc quy dự phòng."
        ],
        "correct": 1,
        "explain": "Điện áp pha (U<sub>p</sub>): Là điện áp giữa điểm đầu và điểm cuối của một pha nguồn hoặc tải, tương đương điện áp đo giữa một dây pha và dây trung tính (như U<sub>A</sub>, U<sub>B</sub>, U<sub>C</sub>) (SGK trang 20)."
      },
      {
        "id": "cn_b3_13",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Đại lượng 'Điện áp dây' (kí hiệu U<sub>d</sub>) trong mạch điện ba pha được định nghĩa là",
        "options": [
          "A. điện áp đo giữa dây pha và dây trung tính.",
          "B. điện áp giữa hai dây pha bất kì (U<sub>AB</sub>, U<sub>BC</sub>, U<sub>CA</sub>).",
          "C. điện áp rơi trên một bóng đèn chiếu sáng một pha.",
          "D. điện áp danh định của lưới điện siêu cao áp."
        ],
        "correct": 1,
        "explain": "Điện áp dây (U<sub>d</sub>): Là điện áp đo giữa hai dây pha bất kì với nhau, ví dụ: U<sub>AB</sub> là điện áp giữa dây A và B, U<sub>BC</sub> giữa B và C, U<sub>CA</sub> giữa C và A (SGK trang 20)."
      },
      {
        "id": "cn_b3_14",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi nguồn và tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = 3 · U<sub>p</sub></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>"
        ],
        "correct": 1,
        "explain": "Mạch đối xứng nối hình sao (Y): Mối liên hệ điện áp là <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>, suy ra <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>. Ví dụ mạng hạ áp có U<sub>p</sub> = 220 V thì U<sub>d</sub> = √3 × 220 ≈ 380 V (SGK trang 20)."
      },
      {
        "id": "cn_b3_15",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa cường độ dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình sao (Y), dòng điện từ dây pha chạy thẳng trực tiếp vào cuộn dây pha của tải không bị phân nhánh, do đó dòng điện dây bằng dòng điện pha: I<sub>d</sub> = I<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_16",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = 2 · U<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình tam giác (Δ), mỗi pha của tải được mắc trực tiếp giữa hai dây pha của nguồn điện, vì vậy điện áp pha của tải bằng chính điện áp dây của nguồn: U<sub>d</sub> = U<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_17",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 1,
        "explain": "Khi tải nối tam giác (Δ) đối xứng, dòng điện dây tại các nút rẽ nhánh thành hai dòng điện pha, cho ta: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>, suy ra <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span> (SGK trang 20)."
      },
      {
        "id": "cn_b3_18",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Ưu điểm vượt trội của mạch điện ba pha bốn dây (nối hình sao có dây trung tính) so với mạch ba dây là gì?",
        "options": [
          "A. Tạo ra được hai cấp điện áp khác nhau (điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub>), thuận tiện cấp điện đồng thời cho cả động cơ ba pha và thiết bị sinh hoạt một pha.",
          "B. Không bao giờ xảy ra sự cố chập mạch hay quá tải.",
          "C. Tiết kiệm 100% lượng dây nhôm và đồng truyền tải.",
          "D. Điện áp trên đường dây tự động tăng lên gấp mười lần."
        ],
        "correct": 0,
        "explain": "Mạch ba pha 4 dây cung cấp được hai cấp điện áp tiện lợi: điện áp dây 380 V (dùng cho động cơ ba pha công nghiệp) và điện áp pha 220 V (dùng cho các thiết bị sinh hoạt một pha gia đình) (SGK trang 20)."
      },
      {
        "id": "cn_b3_19",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi phụ tải ba pha hoàn toàn ĐỐI XỨNG, cường độ dòng điện chạy trong dây trung tính I<sub>o</sub> có giá trị bằng bao nhiêu?",
        "options": [
          "A. Bằng 3 lần dòng điện pha (I<sub>o</sub> = 3 · I<sub>p</sub>).",
          "B. Bằng không (I<sub>o</sub> = 0).",
          "C. Bằng dòng điện cực đại I<sub>m</sub>.",
          "D. Bằng dòng điện dây I<sub>d</sub>."
        ],
        "correct": 1,
        "explain": "Trong tải ba pha đối xứng, tổng vectơ của ba dòng điện pha bằng 0: i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0, do đó dòng điện hiệu dụng trong dây trung tính I<sub>o</sub> = 0 (SGK trang 20)."
      },
      {
        "id": "cn_b3_20",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Vì sao trên dây trung tính của mạng điện ba pha bốn dây TUYỆT ĐỐI KHÔNG ĐƯỢC đặt cầu chì hay công tắc đơn ngắt mạch?",
        "options": [
          "A. Vì dây trung tính không có dòng điện chạy qua nên cầu chì không thể đứt.",
          "B. Vì nếu cầu chì trên dây trung tính bị đứt khi tải không đối xứng, điện áp pha các tải sẽ bị lệch nghiêm trọng, làm thiết bị điện pha non tải chịu điện áp cao dẫn đến cháy nổ.",
          "C. Vì giá thành của cầu chì dây trung tính quá đắt đỏ.",
          "D. Vì dây trung tính được chôn dưới lòng đất nên không chạm tới được."
        ],
        "correct": 1,
        "explain": "Nếu đứt dây trung tính khi phụ tải ba pha không đối xứng, điểm trung tính O' của tải sẽ bị dịch chuyển, dẫn đến điện áp giữa các pha tải bị mất cân bằng trầm trọng: pha nào có tổng trở lớn sẽ chịu điện áp vượt quá 220 V gây cháy thiết bị (SGK trang 20)."
      },
      {
        "id": "cn_b3_21",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Công thức tính công suất tác dụng toàn phần P của mạch điện xoay chiều ba pha đối xứng là:",
        "options": [
          "A. <span class=\"math-term\">P = U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
          "B. <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ</span>",
          "C. <span class=\"math-term\">P = 3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
          "D. <span class=\"math-term\">P = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub> · I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> · cos φ</span>"
        ],
        "correct": 1,
        "explain": "Công suất tác dụng ba pha đối xứng tính theo thông số dây: P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ; hoặc tính theo thông số pha: P = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ (trong đó cos φ là hệ số công suất của mỗi pha tải) (SGK trang 20)."
      },
      {
        "id": "cn_b3_22",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha đối xứng có điện áp pha U<sub>p</sub> = 220 V. Giá trị điện áp dây U<sub>d</sub> chuẩn bằng bao nhiêu vôn?",
        "options": [
          "A. 127 V",
          "B. 220 V",
          "C. 380 V",
          "D. 440 V"
        ],
        "correct": 2,
        "explain": "Nguồn điện ba pha đối xứng nối hình sao: U<sub>d</sub> = √3 · U<sub>p</sub> = √3 × 220 ≈ 381 V (trong thực tế mạng điện hạ áp tiêu chuẩn Việt Nam quy ước chuẩn là 380 V)."
      },
      {
        "id": "cn_b3_23",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch xoay chiều một pha có R = 30 Ω, cảm kháng X<sub>L</sub> = 60 Ω, dung kháng X<sub>C</sub> = 20 Ω. Độ lớn tổng trở z<sub>t</sub> của mạch là",
        "options": [
          "A. 110 Ω",
          "B. 50 Ω",
          "C. 70 Ω",
          "D. 10 Ω"
        ],
        "correct": 1,
        "explain": "Điện kháng của mạch: X = X<sub>L</sub> - X<sub>C</sub> = 60 - 20 = 40 Ω. Tổng trở của mạch: z<sub>t</sub> = √(R² + X²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω."
      },
      {
        "id": "cn_b3_24",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có R = 12 Ω, X<sub>L</sub> = 16 Ω nối hình SAO (Y) vào nguồn điện có điện áp dây U<sub>d</sub> = 380 V. Cường độ dòng điện pha I<sub>p</sub> chạy qua mỗi cuộn dây là",
        "options": [
          "A. 11 A",
          "B. 19 A",
          "C. 31,6 A",
          "D. 22 A"
        ],
        "correct": 0,
        "explain": "Tổng trở mỗi pha của tải: <span class=\"math-term\">z<sub>p</sub> = √(R² + X<sub>L</sub>²) = √(12² + 16²) = √400 = 20 Ω</span>. Do tải nối sao, điện áp pha của tải: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Cường độ dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">20</span></span> = 11 A</span>."
      },
      {
        "id": "cn_b3_25",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha nối hình TAM GIÁC (Δ) tiêu thụ dòng điện pha I<sub>p</sub> = 15 A. Cường độ dòng điện dây I<sub>d</sub> chạy trên đường dây cấp điện cho động cơ là",
        "options": [
          "A. 15 A",
          "B. 8,66 A",
          "C. 25,98 A",
          "D. 45 A"
        ],
        "correct": 2,
        "explain": "Tải nối hình tam giác (Δ) đối xứng: Dòng điện dây liên hệ với dòng điện pha qua công thức: I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 15 ≈ 1,732 × 15 = 25,98 A."
      },
      {
        "id": "cn_b3_26",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha có điện áp dây U<sub>d</sub> = 380 V cấp cho một tải đối xứng nối hình SAO (Y) có tổng trở mỗi pha z<sub>p</sub> = 38 Ω. Dòng điện dây I<sub>d</sub> chạy trên dây pha có giá trị là",
        "options": [
          "A. 10 A",
          "B. ≈ 5,8 A (chính xác 5,79 A)",
          "C. 17,3 A",
          "D. 3,34 A"
        ],
        "correct": 1,
        "explain": "Do tải nối sao: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">38</span></span> ≈ 5,79 A</span>. Do nối sao: I<sub>d</sub> = I<sub>p</sub> ≈ 5,79 A."
      },
      {
        "id": "cn_b3_27",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tải ba pha đối xứng gồm ba điện trở thuần R = 22 Ω nối hình TAM GIÁC (Δ) vào mạng điện có U<sub>d</sub> = 220 V. Dòng điện pha I<sub>p</sub> và dòng điện dây I<sub>d</sub> lần lượt là",
        "options": [
          "A. I<sub>p</sub> = 10 A; I<sub>d</sub> = 17,32 A",
          "B. I<sub>p</sub> = 10 A; I<sub>d</sub> = 10 A",
          "C. I<sub>p</sub> = 5,77 A; I<sub>d</sub> = 10 A",
          "D. I<sub>p</sub> = 17,32 A; I<sub>d</sub> = 10 A"
        ],
        "correct": 0,
        "explain": "Do tải nối tam giác: U<sub>p</sub> = U<sub>d</sub> = 220 V. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">22</span></span> = 10 A</span>. Dòng điện dây: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 10 ≈ 17,32 A</span>."
      },
      {
        "id": "cn_b3_28",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải điện ba pha tiêu thụ công suất P = 10 kW với điện áp dây U<sub>d</sub> = 380 V và hệ số công suất cos φ = 0,8. Dòng điện dây I<sub>d</sub> chạy trong mạch xấp xỉ bằng",
        "options": [
          "A. 18,99 A (khoảng 19 A)",
          "B. 32,89 A",
          "C. 10,95 A",
          "D. 15,20 A"
        ],
        "correct": 0,
        "explain": "Từ công thức công suất ba pha: <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span> => <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">√3 · U<sub>d</sub> · cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">√3 × 380 × 0,8</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">526,54</span></span> ≈ 18,99 A</span>."
      },
      {
        "id": "cn_b3_29",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Máy biến áp ba pha sử dụng trong trạm điện có chức năng cơ bản là gì?",
        "options": [
          "A. Biến đổi điện áp và dòng điện của hệ thống điện ba pha nhưng giữ nguyên tần số f = 50 Hz.",
          "B. Biến đổi dòng xoay chiều thành dòng điện một chiều.",
          "C. Tăng công suất tác dụng P của nguồn điện lên gấp đôi.",
          "D. Tích trữ điện năng vào cuộn dây sơ cấp để phát điện khi mất lưới."
        ],
        "correct": 0,
        "explain": "Máy biến áp ba pha làm việc dựa trên hiện tượng cảm ứng điện từ, có chức năng biến đổi điện áp và dòng điện xoay chiều ba pha từ cấp này sang cấp khác nhưng giữ nguyên tần số dòng điện (f = 50 Hz) (SGK trang 20)."
      },
      {
        "id": "cn_b3_30",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Kí hiệu tổ đấu dây Y/Δ-11 của máy biến áp ba pha có ý nghĩa là",
        "options": [
          "A. Cuộn sơ cấp nối hình sao (Y), cuộn thứ cấp nối hình tam giác (Δ), góc lệch pha giữa điện áp sơ cấp và thứ cấp tương ứng góc 11 giờ (330°).",
          "B. Máy biến áp có 11 cuộn dây độc lập.",
          "C. Máy biến áp làm việc ở cấp điện áp 11 kV.",
          "D. Máy biến áp sử dụng 11 kg lõi thép Silic."
        ],
        "correct": 0,
        "explain": "Quy ước tổ đấu dây: Kí hiệu Y/Δ biểu thị cuộn sơ cấp nối sao, cuộn thứ cấp nối tam giác; con số 11 là chỉ số giờ lệch pha giữa vectơ điện áp dây thứ cấp so với sơ cấp (11 × 30° = 330°)."
      },
      {
        "id": "cn_b3_31",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi một pha của tải hình sao (Y) bị đứt (hở mạch), dòng điện trong pha bị đứt đó sẽ",
        "options": [
          "A. tăng lên gấp √3 lần.",
          "B. bằng 0, hai pha còn lại vẫn tiếp tục có dòng điện chạy qua.",
          "C. đổi chiều liên tục không xác định.",
          "D. truyền toàn bộ công suất vào cọc tiếp địa."
        ],
        "correct": 1,
        "explain": "Khi bị đứt mạch một pha, dòng điện trong nhánh pha đó bị ngắt hoàn toàn (I<sub>p</sub> = 0). Nếu mạng có dây trung tính thì hai pha còn lại vẫn hoạt động bình thường ở điện áp 220 V."
      },
      {
        "id": "cn_b3_32",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một xưởng thực hành có nguồn ba pha 4 dây 380/220 V. Muốn lắp một bóng đèn sợi đốt 220 V - 100 W vào mạng điện này, người ta phải đấu bóng đèn vào vị trí nào?",
        "options": [
          "A. Giữa hai dây pha bất kì (ví dụ dây pha A và dây pha B).",
          "B. Giữa một dây pha bất kì và dây trung tính (ví dụ dây pha A và dây trung tính O).",
          "C. Nối tiếp cả ba dây pha A, B, C vào một đầu bóng đèn.",
          "D. Đấu trực tiếp hai cực của bóng đèn vào dây trung tính O."
        ],
        "correct": 1,
        "explain": "Bóng đèn có điện áp định mức 220 V (bằng điện áp pha U<sub>p</sub> của lưới), do đó phải đấu một đầu vào dây pha và một đầu vào dây trung tính O để nhận đúng điện áp 220 V. Nếu đấu vào giữa hai dây pha (U<sub>d</sub> = 380 V) thì đèn sẽ bị quá áp và nổ ngay lập tức."
      }
    ]
  },
  {
    "id": "cn_bai4",
    "title": "🗼 BÀI 4: Hệ thống điện quốc gia (Xem kĩ)",
    "icon": "🗼",
    "description": "Nguồn điện, Lưới truyền tải (>110kV), Lưới phân phối (<=110kV), Đường dây 500kV Bắc - Nam (Xem kĩ)",
    "questions": [
      {
        "id": "cn_b4_01",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia là một hệ thống thống nhất gồm những thành phần cơ bản nào?",
        "options": [
          "A. Các công ty kinh doanh thiết bị điện gia dụng và các cửa hàng phân phối bán lẻ.",
          "B. Nguồn điện, lưới điện và các tải tiêu thụ điện được liên kết chặt chẽ với nhau trên quy mô toàn quốc.",
          "C. Các cơ quan quản lí tài nguyên nước và các hồ chứa thủy lợi.",
          "D. Trạm phát sóng viễn thông và các vệ tinh địa tĩnh quân sự."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 22-23: Hệ thống điện quốc gia gồm các nguồn điện (nhà máy điện), lưới điện (đường dây và trạm biến áp) và các hộ tiêu thụ điện trên toàn quốc được liên kết chặt chẽ thành một hệ thống thống nhất."
      },
      {
        "id": "cn_b4_02",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện liên tục bốn khâu then chốt nào sau đây?",
        "options": [
          "A. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng.",
          "B. Thiết kế, lắp ráp cơ khí, đóng tàu và thử nghiệm ô tô.",
          "C. Đào tạo nhân lực, in ấn sách giáo khoa, bán hàng và bảo hành.",
          "D. Chế tạo linh kiện điện tử, lập trình phần mềm và bảo dưỡng máy tính."
        ],
        "correct": 0,
        "explain": "Hệ thống điện quốc gia thực hiện quá trình: Sản xuất điện năng (tại nhà máy điện) -> Truyền tải điện năng (lưới truyền tải) -> Phân phối điện năng (lưới phân phối) -> Tiêu thụ điện năng (tại các phụ tải) (SGK trang 22)."
      },
      {
        "id": "cn_b4_03",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN TRUYỀN TẢI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV (như 220 kV và 500 kV)."
        ],
        "correct": 3,
        "explain": "Theo quy chuẩn phân loại SGK trang 23: Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở Việt Nam phổ biến là 220 kV và siêu cao áp 500 kV), đảm nhận truyền tải công suất lớn từ nhà máy điện đến các trạm phân phối chính."
      },
      {
        "id": "cn_b4_04",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN PHÂN PHỐI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống (110 kV, 35 kV, 22 kV, 10 kV, 6 kV, 0,4 kV).",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp điện áp sinh hoạt 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có cấp điện áp TỪ 110 kV TRỞ XUỐNG (110 kV, 35 kV, 22 kV, 10 kV, 6 kV và hạ áp 0,4 kV/380/220V), làm nhiệm vụ đưa điện từ trạm phân phối chính đến các phụ tải tiêu thụ địa phương (SGK trang 23)."
      },
      {
        "id": "cn_b4_05",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐG GIA",
        "question": "Theo quy chuẩn kĩ thuật điện Việt Nam, bốn cấp điện áp tiêu chuẩn của hệ thống lưới điện gồm:",
        "options": [
          "A. Điện cực thấp, điện trung bình, điện mạnh và điện cực mạnh.",
          "B. Hạ áp (≤ 1 kV), Trung áp (> 1 kV đến 35 kV), Cao áp (> 35 kV đến 220 kV), Siêu cao áp (> 220 kV).",
          "C. 12 V, 24 V, 110 V và 220 V.",
          "D. Điện dân dụng, điện công nghiệp, điện nông nghiệp và điện quốc phòng."
        ],
        "correct": 1,
        "explain": "Bốn cấp điện áp tiêu chuẩn quy định rõ ràng trong SGK trang 23: 1. Hạ áp (đến 1 kV); 2. Trung áp (từ trên 1 kV đến 35 kV); 3. Cao áp (từ trên 35 kV đến 220 kV); 4. Siêu cao áp (trên 220 kV, tiêu biểu là 500 kV)."
      },
      {
        "id": "cn_b4_06",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện siêu cao áp 500 kV Bắc - Nam mạch 1 được khởi công và khánh thành đóng điện vào các mốc thời gian lịch sử nào?",
        "options": [
          "A. Khởi công ngày 05/04/1992 và đóng điện ngày 27/05/1994.",
          "B. Khởi công ngày 30/04/1975 và đóng điện ngày 02/09/1985.",
          "C. Khởi công ngày 01/01/2000 và đóng điện ngày 10/10/2010.",
          "D. Khởi công ngày 19/05/1990 và đóng điện ngày 27/07/1995."
        ],
        "correct": 0,
        "explain": "Đường dây truyền tải 500 kV Bắc - Nam mạch 1 là công trình thế kỉ: khởi công ngày 05/04/1992 và hoàn thành đóng điện vận hành chính thức ngày 27/05/1994 (SGK Công nghệ 12 trang 24)."
      },
      {
        "id": "cn_b4_07",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Quy mô kĩ thuật của đường dây siêu cao áp 500 kV Bắc - Nam mạch 1 là",
        "options": [
          "A. dài 500 km, gồm 1 000 cột tháp sắt, nối từ Hà Nội vào Đà Nẵng.",
          "B. dài 1 487 km, gồm 3 437 cột tháp sắt, đi qua 14 tỉnh thành từ Trạm 500 kV Hoà Bình đến Trạm 500 kV Phú Lâm (TP. Hồ Chí Minh).",
          "C. dài 2 500 km nối từ Móng Cái đến Mũi Cà Mau.",
          "D. chạy ngầm dưới đáy biển dọc bờ biển miền Trung."
        ],
        "correct": 1,
        "explain": "Đường dây 500 kV mạch 1 dài 1 487 km, xây dựng với 3 437 cột tháp sắt, băng qua rừng núi hiểm trở của 14 tỉnh thành từ Trạm 500 kV Hoà Bình tới Trạm 500 kV Phú Lâm (TP.HCM) (SGK trang 24)."
      },
      {
        "id": "cn_b4_08",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Ý nghĩa chiến lược quan trọng nhất của việc xây dựng và đưa vào vận hành đường dây siêu cao áp 500 kV Bắc - Nam là gì?",
        "options": [
          "A. Hợp nhất hệ thống điện ba miền Bắc - Trung - Nam thành một hệ thống điện quốc gia thống nhất, giải quyết bài toán truyền tải nguồn điện dôi dư từ miền Bắc vào chi viện cho miền Nam đang thiếu điện nghiêm trọng.",
          "B. Bỏ hẳn việc xây dựng các nhà máy nhiệt điện và thủy điện ở miền Nam.",
          "C. Giúp giá điện sinh hoạt giảm về mức miễn phí cho toàn bộ người dân.",
          "D. Thay thế hoàn toàn đường dây điện thoại và internet liên tỉnh."
        ],
        "correct": 0,
        "explain": "Đường dây 500 kV Bắc - Nam đã liên kết lưới điện ba miền thành một khối thống nhất, chấm dứt tình trạng vận hành phân tán rời rạc, tối ưu hóa công suất phát điện của các nhà máy lớn như Thủy điện Hòa Bình để phục vụ phát triển kinh tế cả nước (SGK trang 24)."
      },
      {
        "id": "cn_b4_09",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây siêu cao áp 500 kV mạch 3 vừa được khánh thành thần tốc năm 2024 nối từ địa phương nào đến địa phương nào?",
        "options": [
          "A. Từ Cà Mau đến TP. Hồ Chí Minh.",
          "B. Từ Quảng Trạch (Quảng Bình) đến Phố Nối (Hưng Yên).",
          "C. Từ Sơn La về Hà Nội.",
          "D. Từ Pleiku sang Savannakhet (Lào)."
        ],
        "correct": 1,
        "explain": "Đường dây 500 kV mạch 3 (cung đoạn Quảng Trạch - Phố Nối) dài hơn 519 km nối từ Trung tâm nhiệt điện Quảng Trạch (Quảng Bình) đến Trạm 500 kV Phố Nối (Hưng Yên), góp phần đảm bảo an ninh cấp điện trọng điểm cho miền Bắc."
      },
      {
        "id": "cn_b4_10",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện nguồn, người ta bắt buộc phải đặt trạm biến áp TĂNG ÁP trước khi đưa điện lên đường dây truyền tải?",
        "options": [
          "A. Để tăng tần số dòng điện xoay chiều lên hàng nghìn Hz.",
          "B. Để tăng điện áp U, giảm cường độ dòng điện I, giúp giảm hao phí toả nhiệt theo công thức: <span class=\"math-term\">ΔP = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>.",
          "C. Để chuyển đổi dòng xoay chiều thành dòng điện một chiều.",
          "D. Để biến điện năng thành cơ năng dự trữ trong cột tháp."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí nhiệt trên đường dây là: <span class=\"math-term\">ΔP = I²R = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>. Khi tăng điện áp U lên n lần thì hao phí ΔP giảm đi n² lần, giúp tiết kiệm chi phí xây dựng đường dây và truyền tải được công suất cực lớn đi xa."
      },
      {
        "id": "cn_b4_11",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Khi truyền tải một công suất điện P xác định trên cùng một đường dây có điện trở R, nếu tăng điện áp từ U<sub>1</sub> = 110 kV lên U<sub>2</sub> = 220 kV thì công suất hao phí toả nhiệt ΔP trên đường dây sẽ",
        "options": [
          "A. tăng lên gấp 2 lần.",
          "B. giảm đi 2 lần.",
          "C. giảm đi 4 lần.",
          "D. không thay đổi."
        ],
        "correct": 2,
        "explain": "Công suất hao phí tỉ lệ nghịch với bình phương điện áp: ΔP tỉ lệ với <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">U<sup>2</sup></span></span>. Khi tăng điện áp từ 110 kV lên 220 kV (tăng gấp <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">110</span></span> = 2 lần) thì hao phí giảm: 2² = 4 lần."
      },
      {
        "id": "cn_b4_12",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vai trò chủ yếu của các trạm biến áp HẠ ÁP bố trí gần các khu dân cư và xí nghiệp công nghiệp là gì?",
        "options": [
          "A. Tăng điện áp lên 500 kV để trả ngược về nhà máy điện.",
          "B. Giảm điện áp từ cấp truyền tải và trung áp xuống cấp điện áp hạ áp an toàn, phù hợp với các thiết bị tiêu thụ điện (380 V / 220 V).",
          "C. Làm mát không khí và phát điện dự phòng khi trời mưa bão.",
          "D. Khử từ trường xung quanh đường dây điện."
        ],
        "correct": 1,
        "explain": "Trạm biến áp hạ áp có nhiệm vụ hạ cấp điện áp từ trung áp (22 kV, 35 kV) hoặc cao áp (110 kV) xuống điện áp hạ áp 380/220 V tương thích với mức điện áp làm việc an toàn của máy móc và đồ dùng gia đình (SGK trang 23)."
      },
      {
        "id": "cn_b4_13",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Tần số danh định của dòng điện xoay chiều trong hệ thống điện quốc gia Việt Nam được chuẩn hóa là bao nhiêu?",
        "options": [
          "A. 60 Hz",
          "B. 50 Hz",
          "C. 100 Hz",
          "D. 25 Hz"
        ],
        "correct": 1,
        "explain": "Tần số công nghiệp danh định của hệ thống điện quốc gia Việt Nam là 50 Hz (SGK trang 22-23), sai số vận hành cho phép rất nghiêm ngặt (không quá ±5%)."
      },
      {
        "id": "cn_b4_14",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cơ quan đầu não chịu trách nhiệm chỉ huy điều độ, điều hòa công suất phát của các nhà máy điện và vận hành an toàn hệ thống điện quốc gia 24/7 tại Việt Nam là",
        "options": [
          "A. Trung tâm Điều độ Hệ thống điện Quốc gia (A0 - NSMO).",
          "B. Viện Khoa học Thủy lợi Việt Nam.",
          "C. Cục Quản lí Thị trường.",
          "D. Tổng công ty Bưu chính Viễn thông."
        ],
        "correct": 0,
        "explain": "Trung tâm Điều độ Hệ thống điện Quốc gia (A0) là đơn vị chỉ huy vận hành, theo dõi giám sát cung - cầu điện theo thời gian thực để duy trì ổn định tần số 50 Hz và điện áp trên toàn bộ lưới điện quốc gia."
      },
      {
        "id": "cn_b4_15",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấp điện áp trung áp phổ biến nhất đang được sử dụng trong lưới điện phân phối tại các đô thị và khu dân cư ở Việt Nam hiện nay là:",
        "options": [
          "A. 0,4 kV",
          "B. 22 kV",
          "C. 110 kV",
          "D. 500 kV"
        ],
        "correct": 1,
        "explain": "Ở Việt Nam, cấp điện áp 22 kV là cấp điện áp trung áp tiêu chuẩn phổ biến nhất trong lưới phân phối hiện đại để cấp điện từ các trạm 110 kV về các trạm biến áp phân phối phụ tải (SGK trang 23)."
      },
      {
        "id": "cn_b4_16",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Các chỉ tiêu chất lượng điện năng quan trọng hàng đầu trong hệ thống điện quốc gia gồm có:",
        "options": [
          "A. Độ ổn định tần số (50 Hz), độ ổn định điện áp (độ lệch trong ngưỡng ±5%) và độ tin cậy cung cấp điện liên tục.",
          "B. Màu sắc của lớp vỏ cách điện cáp ngầm.",
          "C. Tốc độ gió thổi qua đường dây và nhiệt độ cột tháp sắt.",
          "D. Số lượng nhân viên trực ca tại các trạm biến áp."
        ],
        "correct": 0,
        "explain": "Chất lượng điện năng được đo bằng: tần số ổn định quanh mức 50 Hz, độ lệch điện áp nằm trong tiêu chuẩn cho phép (±5%), sóng hài thấp và chỉ số cấp điện liên tục (SAIDI, SAIFI)."
      },
      {
        "id": "cn_b4_17",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thiết bị nào sau đây thường được lắp đặt tại các trạm biến áp phân phối để nâng cao hệ số công suất cos φ và giảm tổn thất điện năng trên lưới điện?",
        "options": [
          "A. Tụ bù công suất phản kháng (bộ tụ điện).",
          "B. Đèn LED chiếu sáng công suất lớn.",
          "C. Cột thu lôi chống sét.",
          "D. Máy hàn điện hồ quang."
        ],
        "correct": 0,
        "explain": "Tụ bù công suất phản kháng phát ra công suất phản kháng Q bù cho các phụ tải cảm (động cơ điện), giúp nâng cao hệ số công suất cos φ của lưới lên gần bằng 1, làm giảm dòng điện trên dây dẫn và giảm hao phí truyền tải."
      },
      {
        "id": "cn_b4_18",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "a. Lưới điện truyền tải bao gồm các đường dây và trạm biến áp có cấp điện áp từ 110 kV trở xuống.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở nước ta là 220 kV và 500 kV); còn lưới điện từ 110 kV trở xuống thuộc về lưới điện phân phối (SGK trang 23).",
        "subLabel": "1a"
      },
      {
        "id": "cn_b4_19",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "b. Đường dây 500 kV mạch 1 đóng vai trò lịch sử kết nối hệ thống điện ba miền thành một hệ thống điện quốc gia thống nhất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Đường dây 500 kV mạch 1 được đóng điện năm 1994, truyền tải nguồn điện dôi dư từ miền Bắc (nhà máy thủy điện Hòa Bình) vào miền Trung và miền Nam.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Đây là ý nghĩa lớn nhất của đường dây 500 kV Bắc - Nam mạch 1: liên kết lưới điện ba miền, xóa bỏ tình trạng chia cắt năng lượng và tạo tiền đề phát triển kinh tế toàn diện.",
        "subLabel": "1b"
      },
      {
        "id": "cn_b4_20",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "c. Trong hệ thống điện quốc gia, điện năng có thể được lưu trữ dễ dàng với dung lượng không giới hạn vào các đường dây dẫn điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Điều độ viên hệ thống điện phải tính toán liên tục lượng điện phát ra và lượng điện tiêu thụ trong từng giây để cân bằng hệ thống.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Đặc thù của điện năng là sản xuất, truyền tải và tiêu thụ diễn ra hầu như đồng thời tại cùng một thời điểm, đường dây chỉ có chức năng dẫn điện chứ không tích trữ được năng lượng. Do đó hệ thống luôn phải đảm bảo công suất phát bằng công suất tiêu thụ cộng hao phí.",
        "subLabel": "1c"
      }
    ]
  },
  {
    "id": "cn_bai6",
    "title": "🏭 BÀI 6: Mạng điện sản xuất quy mô nhỏ (Xem kĩ)",
    "icon": "🏭",
    "description": "Đặc điểm mạng SX nhỏ, Trạm biến áp, Tủ tổng MSB, Tủ nhánh, Tủ động lực; Quy tắc đóng/cắt an toàn (Xem kĩ)",
    "questions": [
      {
        "id": "cn_b6_01",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng nằm trong khoảng nào sau đây?",
        "options": [
          "A. Dưới 1 kW.",
          "B. Từ vài chục đến vài trăm kW.",
          "C. Từ vài nghìn đến vài chục nghìn MW.",
          "D. Trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa chuẩn SGK Công nghệ 12 trang 31: Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới điện phân phối để cung cấp cho cơ sở sản xuất."
      },
      {
        "id": "cn_b6_02",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Ba đặc điểm quan trọng nhất của mạng điện sản xuất quy mô nhỏ bao gồm:",
        "options": [
          "A. Công suất nhỏ dưới 100 W; dùng nguồn pin năng lượng mặt trời; không có aptomat.",
          "B. Công suất tiêu thụ từ vài chục đến vài trăm kW; phụ tải phân bố tập trung; mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Dùng cấp điện áp siêu cao áp 500 kV; phụ tải rải rác trên diện tích hàng nghìn km²; mạng động lực và chiếu sáng mắc chung trên một công tắc.",
          "D. Toàn bộ thiết bị đều dùng dòng điện một chiều 24 V."
        ],
        "correct": 1,
        "explain": "Ba đặc điểm cốt lõi học sinh bắt buộc phải ghi nhớ theo SGK trang 31: 1. Công suất tiêu thụ từ vài chục đến vài trăm kW; 2. Tải tiêu thụ phân bố tập trung trong phân xưởng; 3. Mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập."
      },
      {
        "id": "cn_b6_03",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Đặc điểm 'phụ tải phân bố tập trung' trong mạng điện sản xuất quy mô nhỏ có ý nghĩa thực tế là gì?",
        "options": [
          "A. Các thiết bị tiêu thụ điện (động cơ điện, máy hàn, máy cơ khí, lò sấy...) được bố trí tập trung trong một phạm vi không gian nhà xưởng hẹp của cơ sở sản xuất.",
          "B. Các phụ tải nằm rải rác ở nhiều huyện và tỉnh thành khác nhau.",
          "C. Tất cả máy móc đều cắm chung vào một ổ điện đơn duy nhất.",
          "D. Thiết bị điện chỉ hoạt động tập trung vào đúng một giờ trong ngày."
        ],
        "correct": 0,
        "explain": "Trong cơ sở sản xuất nhỏ (như xưởng may, xưởng cơ khí, xưởng chế biến nông sản), các phụ tải là máy móc thiết bị sản xuất được bố trí tập trung trong phạm vi các phân xưởng có diện tích vừa và nhỏ (SGK trang 31)."
      },
      {
        "id": "cn_b6_04",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Vì sao trong mạng điện sản xuất quy mô nhỏ, mạng điện ĐỘNG LỰC và mạng điện CHIẾU SÁNG bắt buộc phải hoạt động ĐỘC LẬP?",
        "options": [
          "A. Để tránh việc bóng đèn chiếu sáng làm nóng hỏng động cơ điện.",
          "B. Để khi xảy ra sự cố quá tải hay ngắn mạch ở máy móc làm nhảy aptomat tủ động lực, hệ thống đèn chiếu sáng vẫn có điện bình thường, giúp công nhân không bị hoảng loạn, thuận tiện thoát hiểm và xử lí sự cố an toàn.",
          "C. Để công ty điện lực dễ ghi số điện của từng bóng đèn.",
          "D. Để tiết kiệm chi phí lắp đặt dây dẫn."
        ],
        "correct": 1,
        "explain": "Tải động lực (máy móc, động cơ) thường có dòng khởi động lớn và dễ xảy ra sự cố quá tải. Tách độc lập mạng chiếu sáng giúp hệ thống chiếu sáng không bị chập chờn hay mất điện đột ngột khi tải động lực gặp sự cố, đảm bảo an toàn lao động tối đa (SGK trang 31)."
      },
      {
        "id": "cn_b6_05",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Nguồn cấp điện cho mạng điện sản xuất quy mô nhỏ thường được lấy từ đâu?",
        "options": [
          "A. Lấy trực tiếp từ đường dây siêu cao áp 500 kV đi ngang qua cổng xưởng.",
          "B. Lấy từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) qua máy biến áp hạ áp riêng hoặc chung để hạ xuống cấp 380/220 V.",
          "C. Hoàn toàn chạy bằng máy phát điện xăng mini xách tay.",
          "D. Lấy từ mạng điện 110 V của pin quang điện đồ chơi."
        ],
        "correct": 1,
        "explain": "Nguồn điện cấp cho cơ sở sản xuất quy mô nhỏ thường lấy từ đường dây trung áp 22 kV hoặc 35 kV của lưới phân phối công cộng qua trạm biến áp hạ áp (380/220 V) (SGK trang 31)."
      },
      {
        "id": "cn_b6_06",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Sơ đồ cấu trúc phân cấp chuẩn của mạng điện sản xuất quy mô nhỏ theo đúng thứ tự là:",
        "options": [
          "A. Phụ tải -> Tủ chiếu sáng -> Tủ động lực -> Trạm biến áp -> Lưới phân phối.",
          "B. Lưới điện phân phối -> Trạm biến áp hạ áp -> Tủ điện phân phối tổng (MSB) -> Tủ điện phân phối nhánh -> Tủ điện động lực / Tủ điện chiếu sáng -> Phụ tải tiêu thụ.",
          "C. Trạm biến áp -> Tủ chiếu sáng -> Tủ tổng -> Máy sản xuất.",
          "D. Tủ tổng -> Tủ động lực -> Trạm biến áp -> Phụ tải."
        ],
        "correct": 1,
        "explain": "Cấu trúc phân cấp chuẩn SGK trang 32-33: Nguồn từ lưới phân phối -> Trạm biến áp hạ áp -> Tủ phân phối tổng (MSB) -> Tủ phân phối nhánh từng phân xưởng -> Tủ động lực & Tủ chiếu sáng -> Máy móc thiết bị."
      },
      {
        "id": "cn_b6_07",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện phân phối TỔNG (MSB) trong mạng điện sản xuất quy mô nhỏ có vai trò chính là",
        "options": [
          "A. điều khiển tốc độ quay của từng quạt thông gió.",
          "B. nhận điện hạ áp (380/220 V) trực tiếp từ máy biến áp để phân chia và cấp nguồn cho các tủ điện phân phối nhánh, trang bị thiết bị đóng cắt bảo vệ tổng.",
          "C. nắn dòng xoay chiều thành một chiều nạp cho bình ắc quy.",
          "D. nâng điện áp lên 110 kV để bán lại cho lưới điện."
        ],
        "correct": 1,
        "explain": "Tủ phân phối tổng (MSB) đặt ngay sau máy biến áp hạ áp, chứa aptomat tổng dòng lớn (MCCB hoặc ACB) để bảo vệ toàn bộ mạng điện và cấp nguồn cho các tủ nhánh (SGK trang 33)."
      },
      {
        "id": "cn_b6_08",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện phân phối NHÁNH có nhiệm vụ gì trong sơ đồ mạng điện cơ sở sản xuất?",
        "options": [
          "A. Nhận điện từ tủ tổng để phân phối tiếp đến các tủ điện động lực và tủ điện chiếu sáng trong từng phân xưởng riêng biệt.",
          "B. Hạ áp từ 22 kV xuống 380 V.",
          "C. Thay thế hoàn toàn động cơ của máy sản xuất.",
          "D. Thu sét bảo vệ mái nhà xưởng."
        ],
        "correct": 0,
        "explain": "Tủ phân phối nhánh được đặt tại từng phân xưởng sản xuất, nhận điện từ tủ tổng và chia thành các nhánh cấp riêng cho tủ động lực và tủ chiếu sáng của phân xưởng đó (SGK trang 33)."
      },
      {
        "id": "cn_b6_09",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện ĐỘNG LỰC trong phân xưởng sản xuất cấp nguồn trực tiếp cho đối tượng nào?",
        "options": [
          "A. Các bóng đèn tuýp chiếu sáng hành lang và bảng hiệu quảng cáo.",
          "B. Các máy móc, thiết bị sản xuất như động cơ điện ba pha, máy gia công kim loại, máy may, máy ép, máy nén khí...",
          "C. Máy tính xách tay của nhân viên kế toán.",
          "D. Đồng hồ đeo tay của công nhân."
        ],
        "correct": 1,
        "explain": "Tủ động lực chuyên dùng cấp điện cho các máy công tác trong dây chuyền sản xuất (chủ yếu là động cơ ba pha, lò nhiệt, máy công cụ), chứa aptomat, khởi động từ và rơ le nhiệt bảo vệ (SGK trang 33)."
      },
      {
        "id": "cn_b6_10",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Quy trình an toàn bắt buộc khi thao tác ĐÓNG ĐIỆN cho một mạng điện phân xưởng sản xuất là:",
        "options": [
          "A. Đóng lần lượt TỪ NGUỒN ĐẾN TẢI: Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực / chiếu sáng -> Khởi động máy sản xuất.",
          "B. Đóng lần lượt từ tải về nguồn: Bật tất cả các máy móc trước rồi mới đóng tủ tổng.",
          "C. Đóng ngẫu nhiên bất kì aptomat nào trong xưởng trước cũng được.",
          "D. Vừa đóng aptomat tổng vừa bật máy sản xuất cùng lúc."
        ],
        "correct": 0,
        "explain": "Quy trình ĐÓNG ĐIỆN chuẩn: Đóng từ NGUỒN đến TẢI (Trạm -> Tủ tổng -> Tủ nhánh -> Tủ động lực/chiếu sáng -> Bật máy). Giúp các cấp bảo vệ sẵn sàng và kiểm soát thông số điện áp trước khi tải làm việc (SGK trang 33)."
      },
      {
        "id": "cn_b6_11",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Quy trình an toàn bắt buộc khi thao tác CẮT ĐIỆN để bảo dưỡng hoặc hết ca sản xuất là:",
        "options": [
          "A. Cắt trực tiếp cầu dao/aptomat tại tủ tổng trước tiên trong khi các máy vẫn đang chạy.",
          "B. Cắt lần lượt TỪ TẢI VỀ NGUỒN: Tắt các máy sản xuất -> Cắt tủ động lực / chiếu sáng -> Cắt tủ phân phối nhánh -> Cắt tủ phân phối tổng.",
          "C. Cắt ngẫu nhiên bất kì aptomat nào.",
          "D. Dùng kìm bấm đứt dây cáp nguồn."
        ],
        "correct": 1,
        "explain": "Quy trình CẮT ĐIỆN chuẩn: Cắt từ TẢI về NGUỒN (Tắt máy -> Cắt tủ động lực/chiếu sáng -> Cắt tủ nhánh -> Cắt tủ tổng) (SGK trang 33)."
      },
      {
        "id": "cn_b6_12",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Về mặt kĩ thuật và an toàn, VÌ SAO KHI CẮT ĐIỆN BẮT BUỘC PHẢI CẮT TỪ TẢI VỀ NGUỒN?",
        "options": [
          "A. Vì công tắc ở tải nhỏ hơn nên bấm nhẹ tay hơn.",
          "B. Vì khi các máy sản xuất đang hoạt động, dòng điện phụ tải rất lớn. Cắt tải trước để dập tắt dòng điện, tránh phát sinh HỒ QUANG ĐIỆN nguy hiểm gây nổ thiết bị, cháy tiếp điểm và gây bỏng cho người thao tác ở các tủ điện nguồn phía trên.",
          "C. Để bóng đèn chiếu sáng kịp nguội bớt.",
          "D. Vì quy định này chỉ áp dụng cho mạng điện sinh hoạt gia đình."
        ],
        "correct": 1,
        "explain": "Lí do sống còn: Khi mang tải lớn, việc mở tiếp điểm đóng cắt nguồn sẽ làm bùng phát hồ quang điện cực kì mạnh có thể làm nổ buồng dập hồ quang, cháy mặt và gây bỏng nghiêm trọng cho công nhân điện. Cắt tải trước giúp dập dòng không tải an toàn (SGK trang 33)."
      },
      {
        "id": "cn_b6_13",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Thiết bị bảo vệ quá tải và ngắn mạch được sử dụng phổ biến nhất cho động cơ ba pha trong tủ điện động lực là:",
        "options": [
          "A. Aptomat (MCB, MCCB) kết hợp với Rơ le nhiệt.",
          "B. Dây đồng quấn quanh đinh ốc.",
          "C. Công tơ điện một pha.",
          "D. Biến trở con chạy thủ công."
        ],
        "correct": 0,
        "explain": "Aptomat (MCB, MCCB) bảo vệ ngắn mạch và quá tải tức thời, còn rơ le nhiệt gắn sau khởi động từ chuyên bảo vệ quá tải lâu dài chống cháy cuộn dây động cơ (SGK trang 33)."
      },
      {
        "id": "cn_b6_14",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Một phân xưởng may công nghiệp có tổng công suất tác dụng tiêu thụ P = 160 kW, hệ số công suất cos φ = 0,8. Cần chọn máy biến áp phân phối có công suất biểu kiến định mức tối thiểu là bao nhiêu kVA?",
        "options": [
          "A. 128 kVA",
          "B. 160 kVA",
          "C. 200 kVA",
          "D. 250 kVA"
        ],
        "correct": 2,
        "explain": "Công suất biểu kiến của máy biến áp: <span class=\"math-term\">S = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">160</span><span class=\"math-frac-bottom\">0,8</span></span> = 200 kVA</span>. Do đó cần chọn máy biến áp có công suất định mức tối thiểu là 200 kVA."
      },
      {
        "id": "cn_b6_15",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Một xưởng chế biến gỗ có công suất tiêu thụ P = 80 kW, cos φ = 0,8. Nếu lắp đặt tụ bù để nâng hệ số công suất lên cos φ' = 1,0 thì công suất biểu kiến S tiêu thụ từ lưới điện giảm đi bao nhiêu kVA?",
        "options": [
          "A. Giảm 20 kVA",
          "B. Giảm 80 kVA",
          "C. Giảm 100 kVA",
          "D. Giảm 0 kVA"
        ],
        "correct": 0,
        "explain": "Ban đầu: <span class=\"math-term\">S<sub>1</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">0,8</span></span> = 100 kVA</span>. Khi nâng cos φ' = 1,0: <span class=\"math-term\">S<sub>2</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ'</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">1,0</span></span> = 80 kVA</span>. Công suất biểu kiến giảm: ΔS = 100 - 80 = 20 kVA (giúp giảm dòng điện trên dây cáp nguồn)."
      },
      {
        "id": "cn_b6_16",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "a. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ trong khoảng từ vài chục đến vài trăm kW.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ điển hình từ vài chục đến vài trăm kW (SGK trang 31).",
        "subLabel": "2a"
      },
      {
        "id": "cn_b6_17",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "b. Mạng điện động lực cấp cho các máy tiện CNC và mạng điện chiếu sáng xưởng An Phát phải được cấp nguồn từ cùng một công tắc chung để tiết kiệm tủ điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Mạng điện động lực và mạng điện chiếu sáng bắt buộc phải hoạt động độc lập để đảm bảo an toàn, khi máy móc bị sự cố nhảy aptomat thì đèn chiếu sáng vẫn sáng bình thường.",
        "subLabel": "2b"
      },
      {
        "id": "cn_b6_18",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "c. Khi hết ca làm việc, thợ điện ngắt điện bằng cách cắt aptomat tổng ở trạm biến áp trước khi tắt các máy tiện CNC đang gia công.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Quy trình cắt điện an toàn bắt buộc phải cắt từ TẢI về NGUỒN: Tắt từng máy tiện CNC -> Cắt aptomat tủ động lực -> Cắt tủ nhánh -> Cắt tủ tổng để dập dòng phụ tải, tránh phát sinh hồ quang gây nổ và hỏng tiếp điểm ở tủ nguồn.",
        "subLabel": "2c"
      }
    ]
  },
  {
    "id": "cn_bai5",
    "title": "☀️ Bài 5: Sản xuất điện năng",
    "icon": "☀️",
    "description": "Thủy điện, Nhiệt điện, Điện hạt nhân, Điện gió, Điện mặt trời, Sinh khối & Chuyển dịch năng lượng",
    "questions": [
      {
        "id": "cn_b5_01",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy thủy điện sử dụng dạng năng lượng đầu vào nào để biến đổi thành điện năng?",
        "options": [
          "A. Nhiệt năng của than đá.",
          "B. Cơ năng (thế năng và động năng) của dòng nước chảy từ trên cao.",
          "C. Năng lượng phản ứng phân hạch hạt nhân.",
          "D. Năng lượng bức xạ mặt trời."
        ],
        "correct": 1,
        "explain": "Nhà máy thủy điện sử dụng thế năng của nước tích trữ ở hồ chứa trên cao, qua ống áp lực tạo dòng nước có động năng lớn làm quay tuabin nước, kéo máy phát điện quay để phát ra điện (SGK trang 26)."
      },
      {
        "id": "cn_b5_02",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Ưu điểm nổi bật nhất của nhà máy nhiệt điện sử dụng nhiên liệu hóa thạch (than đá, khí đốt) là gì?",
        "options": [
          "A. Hoàn toàn không phát thải khí nhà kính.",
          "B. Công suất phát điện lớn và khả năng vận hành liên tục, ổn định, không phụ thuộc vào mùa mưa hay mùa khô như thủy điện.",
          "C. Chi phí xây dựng và nhiên liệu bằng 0.",
          "D. Sử dụng nguồn tài nguyên vĩnh cửu không bao giờ cạn kiệt."
        ],
        "correct": 1,
        "explain": "Nhà máy nhiệt điện có ưu điểm lớn là công suất phát rất cao, vận hành liên tục 24/7 ổn định quanh năm, đảm bảo cấp điện nền cho hệ thống mà không bị ảnh hưởng bởi thời tiết hay hạn hán (SGK trang 27)."
      },
      {
        "id": "cn_b5_03",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhược điểm lớn nhất về mặt môi trường của các nhà máy nhiệt điện than là:",
        "options": [
          "A. Phát thải lượng lớn khí nhà kính (CO2, SO2, NOx), bụi mịn và khối lượng tro xỉ khổng lồ gây ô nhiễm đất, nước và không khí.",
          "B. Làm khô cạn các dòng sông lớn.",
          "C. Gây ra các vụ rò rỉ phóng xạ nguy hiểm.",
          "D. Tiêu diệt chim và dơi do cánh quạt quay."
        ],
        "correct": 0,
        "explain": "Đốt than phát thải lượng khí CO2 lớn gây hiệu ứng nhà kính và biến đổi khí hậu toàn cầu, kèm theo khí SO2 gây mưa axit và bãi thải tro xỉ chiếm nhiều diện tích đất (SGK trang 27)."
      },
      {
        "id": "cn_b5_04",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Trong nhà máy điện hạt nhân, năng lượng dùng để đun sôi nước tạo hơi áp suất cao quay tuabin xuất phát từ đâu?",
        "options": [
          "A. Phản ứng phân hạch hạt nhân của nhiên liệu phóng xạ (chủ yếu là Uranium-235) trong lò phản ứng.",
          "B. Đốt cháy khí hydro hóa lỏng.",
          "C. Bức xạ nhiệt của tia vũ trụ.",
          "D. Phản ứng hóa học giữa axit và bazo."
        ],
        "correct": 0,
        "explain": "Nhà máy điện hạt nhân giải phóng nhiệt năng cực lớn từ phản ứng phân hạch dây chuyền của hạt nhân Uranium trong lò phản ứng hạt nhân để tạo hơi nước quay tuabin máy phát (SGK trang 28)."
      },
      {
        "id": "cn_b5_05",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Thiết bị biến tần (Inverter) trong hệ thống điện mặt trời nối lưới có nhiệm vụ gì?",
        "options": [
          "A. Tích trữ điện năng vào pin dự phòng.",
          "B. Chuyển đổi dòng điện một chiều (DC) do các tấm pin quang điện tạo ra thành dòng điện xoay chiều (AC) đồng bộ về tần số và điện áp để cấp cho tải và hòa vào lưới điện quốc gia.",
          "C. Làm mát các tấm pin mặt trời khi trời quá nắng.",
          "D. Tự động xoay tấm pin theo hướng gió."
        ],
        "correct": 1,
        "explain": "Pin mặt trời tạo ra dòng điện một chiều (DC). Muốn cấp điện cho thiết bị xoay chiều 220V hoặc đưa lên lưới điện 50 Hz thì bắt buộc phải qua bộ biến tần (Inverter) chuyển DC thành AC (SGK trang 29)."
      },
      {
        "id": "cn_b5_06",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Hạn chế chung lớn nhất của hai nguồn năng lượng tái tạo là điện gió và điện mặt trời là gì?",
        "options": [
          "A. Phát thải quá nhiều khí CO2 độc hại.",
          "B. Phụ thuộc hoàn toàn vào điều kiện thời tiết (nắng, gió), tính bất định cao, không phát được điện vào ban đêm (điện mặt trời) hoặc lúc lặng gió.",
          "C. Giá thành thiết bị tăng gấp 100 lần mỗi năm.",
          "D. Không thể kết nối vào hệ thống lưới điện."
        ],
        "correct": 1,
        "explain": "Năng lượng gió và mặt trời có nhược điểm lớn là tính chập chờn, bất định, phụ thuộc vào thời tiết. Khi thời tiết xấu hoặc đêm xuống, công suất phát sụt giảm mạnh đòi hỏi hệ thống điện phải có nguồn điện nền bù đắp (SGK trang 29-30)."
      },
      {
        "id": "cn_b5_07",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy thủy điện lớn nhất Việt Nam và khu vực Đông Nam Á hiện nay là",
        "options": [
          "A. Thủy điện Hòa Bình",
          "B. Thủy điện Sơn La (công suất 2 400 MW)",
          "C. Thủy điện Yaly",
          "D. Thủy điện Trị An"
        ],
        "correct": 1,
        "explain": "Thủy điện Sơn La trên sông Đà với 6 tổ máy có tổng công suất 2 400 MW là nhà máy thủy điện có quy mô lớn nhất Việt Nam và Đông Nam Á."
      },
      {
        "id": "cn_b5_08",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguồn năng lượng sinh khối (Biomass) dùng để sản xuất điện năng bao gồm các nguồn vật liệu nào?",
        "options": [
          "A. Quặng sắt, bauxit và đất hiếm.",
          "B. Phụ phẩm nông nghiệp và lâm nghiệp như bã mía, trấu, rơm rạ, mùn cưa, dăm gỗ và chất thải hữu cơ.",
          "C. Dầu mỏ thô dưới đáy biển sâu.",
          "D. Than đá antraxit."
        ],
        "correct": 1,
        "explain": "Năng lượng sinh khối tận dụng các phế phụ phẩm nông nghiệp (bã mía ở các nhà máy đường, trấu, dăm gỗ) để đốt lò hơi phát điện, giúp giảm thiểu rác thải nông nghiệp và bảo vệ môi trường (SGK trang 30)."
      },
      {
        "id": "cn_b5_09",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Hiệu suất chuyển đổi quang năng thành điện năng của các tấm pin quang điện (Silicon tinh thể) thương mại phổ biến hiện nay đạt khoảng",
        "options": [
          "A. từ 15% đến 22%",
          "B. từ 85% đến 98%",
          "C. 100%",
          "D. dưới 2%"
        ],
        "correct": 0,
        "explain": "Các tấm pin mặt trời silicon thương dụng hiện nay có hiệu suất chuyển đổi quang điện trung bình trong khoảng 15% - 22%."
      },
      {
        "id": "cn_b5_10",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Xu hướng chuyển dịch năng lượng hiện nay tại Việt Nam và trên thế giới hướng tới mục tiêu Net Zero là",
        "options": [
          "A. Xây dựng thêm thật nhiều nhà máy nhiệt điện đốt than.",
          "B. Giảm dần nhiệt điện than, tăng nhanh tỉ trọng năng lượng tái tạo (điện gió ngoài khơi, điện mặt trời, sinh khối) kết hợp hệ thống pin tích năng (BESS) và lưới điện thông minh.",
          "C. Ngừng hoàn toàn việc sử dụng điện năng.",
          "D. Chỉ sử dụng máy phát điện chạy xăng dầu tại từng hộ gia đình."
        ],
        "correct": 1,
        "explain": "Chuyển dịch năng lượng xanh: cắt giảm điện than ô nhiễm, phát triển năng lượng tái tạo sạch (gió, mặt trời, thủy điện tích năng) hướng tới mục tiêu phát thải ròng bằng 0 (Net Zero) vào năm 2050 theo cam kết của Việt Nam tại COP26."
      }
    ]
  },
  {
    "id": "cn_bai7",
    "title": "🏠 Bài 7: Mạng điện hạ áp dùng trong sinh hoạt",
    "icon": "🏠",
    "description": "Mạng hạ áp sinh hoạt 220V/380V, tần số 50Hz, sai số ±5%, thiết bị đóng cắt MCB/MCCB, công tơ điện",
    "questions": [
      {
        "id": "cn_b7_01",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc thành phần nào của hệ thống điện quốc gia?",
        "options": [
          "A. Lưới điện truyền tải siêu cao áp.",
          "B. Lưới điện phân phối.",
          "C. Nhà máy nhiệt điện nguồn.",
          "D. Hệ thống đập tràn thủy điện."
        ],
        "correct": 1,
        "explain": "Mạng điện hạ áp sinh hoạt là khâu cuối cùng của lưới điện phân phối, nhận điện từ trạm biến áp hạ áp để cấp điện trực tiếp cho các hộ gia đình (SGK trang 35)."
      },
      {
        "id": "cn_b7_02",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Các thông số kĩ thuật định mức tiêu chuẩn của mạng điện hạ áp sinh hoạt tại Việt Nam là:",
        "options": [
          "A. Điện áp dây U<sub>d</sub> = 380 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 50 Hz.",
          "B. Điện áp dây U<sub>d</sub> = 220 V; Điện áp pha U<sub>p</sub> = 110 V; Tần số f = 60 Hz.",
          "C. Điện áp dây U<sub>d</sub> = 500 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 25 Hz.",
          "D. Điện áp một chiều 12 V."
        ],
        "correct": 0,
        "explain": "Quy chuẩn Việt Nam: Mạng hạ áp sinh hoạt 3 pha 4 dây có điện áp dây U<sub>d</sub> = 380 V, điện áp pha U<sub>p</sub> = 220 V và tần số công nghiệp f = 50 Hz (SGK trang 36)."
      },
      {
        "id": "cn_b7_03",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Theo quy chuẩn kĩ thuật, mức sai số điện áp cho phép đối với mạng điện hạ áp sinh hoạt không vượt quá ngưỡng nào?",
        "options": [
          "A. ±5% so với điện áp danh định 220 V (tương ứng dải điện áp an toàn từ 209 V đến 231 V).",
          "B. ±50% (tương ứng dải từ 110 V đến 330 V).",
          "C. ±1% (chỉ dao động không quá 2 V).",
          "D. Không có quy định sai số."
        ],
        "correct": 0,
        "explain": "Mức lệch điện áp cho phép trong điều kiện vận hành bình thường là ±5% của 220 V: ΔU = 220 × 5% = 11 V, tức điện áp tại ổ cắm dao động trong ngưỡng từ 209 V đến 231 V là đạt chuẩn (SGK trang 36)."
      },
      {
        "id": "cn_b7_04",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Sơ đồ cấu trúc điển hình của mạng điện hạ áp sinh hoạt từ trạm điện đến các hộ gia đình gồm:",
        "options": [
          "A. Trạm biến áp hạ áp -> Tủ phân phối tổng -> Tủ phân phối khu vực (nhánh) -> Đường cáp trục chính ba pha -> Đường cáp rẽ nhánh một pha -> Công tơ điện hộ gia đình.",
          "B. Công tơ điện -> Trạm biến áp -> Nhà máy nhiệt điện.",
          "C. Đường dây 500 kV nối thẳng vào ổ cắm gia đình.",
          "D. Tủ tổng -> Bình ắc quy -> Bóng đèn."
        ],
        "correct": 0,
        "explain": "Cấu trúc mạng hạ áp sinh hoạt: Trạm biến áp hạ áp (380/220V) -> Tủ phân phối tổng -> Tủ phân phối nhánh cụm dân cư -> Dây trục chính 3 pha 4 dây -> Dây rẽ nhánh 1 pha 2 dây -> Công tơ điện và bảng điện trong nhà (SGK trang 35-36)."
      },
      {
        "id": "cn_b7_05",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mục đích quan trọng nhất của việc phân chia các hộ gia đình rẽ nhánh đồng đều từ ba pha A, B, C của đường trục chính là gì?",
        "options": [
          "A. Để cân bằng phụ tải giữa các pha, tránh hiện tượng lệch pha gây quá tải một pha và sụt áp trên dây trung tính.",
          "B. Để các hộ gia đình dùng chung một công tơ điện.",
          "C. Để làm đẹp cảnh quan đường phố.",
          "D. Để dòng điện pha tăng lên gấp 10 lần."
        ],
        "correct": 0,
        "explain": "Phụ tải sinh hoạt là phụ tải một pha. Phải phân bổ đều các hộ vào pha A, pha B, pha C để phụ tải ba pha cân bằng, giảm thiểu dòng điện chạy trên dây trung tính và tránh sụt áp cục bộ (SGK trang 36)."
      },
      {
        "id": "cn_b7_06",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thiết bị nào sau đây dùng để đo đếm điện năng tiêu thụ (tính bằng kilowatt giờ - kWh) của từng hộ gia đình để thanh toán tiền điện?",
        "options": [
          "A. Công tơ điện (đồng hồ điện).",
          "B. Vôn kế.",
          "C. Ampe kế kẹp.",
          "D. Tụ điện chống sét."
        ],
        "correct": 0,
        "explain": "Công tơ điện (điện tử hoặc cơ) là thiết bị đo đếm điện năng tiêu thụ A = P.t (đơn vị kWh hay 'số điện') của từng khách hàng dùng điện (SGK trang 36)."
      },
      {
        "id": "cn_b7_07",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thiết bị chống giật và chống rò điện (RCBO hoặc ELCB) trong bảng điện gia đình hoạt động dựa trên nguyên lí nào?",
        "options": [
          "A. Tự động so sánh dòng điện chạy trên dây pha và dòng điện hồi về trên dây trung tính, nếu có sự chênh lệch (dòng rò ra vỏ chạm vào người) vượt ngưỡng an toàn (thường là 30 mA) thì ngắt điện tức thì trong tích tắc.",
          "B. Đo nhiệt độ nóng lên của bóng đèn.",
          "C. Đếm số lần bật tắt công tắc trong ngày.",
          "D. Ngắt điện khi có tiếng động lớn."
        ],
        "correct": 0,
        "explain": "Aptomat chống giật (RCBO/ELCB) đo dòng rò: bình thường dòng đi trên dây pha bằng dòng về trên dây trung tính (Ipha = Itrungtinh). Khi có người bị giật hoặc rò điện ra vỏ máy xuống đất, dòng bị lệch, rơ le cảm biến từ sẽ tác động cắt mạch ngay lập tức (dưới 0,03 giây) để cứu sống người."
      },
      {
        "id": "cn_b7_08",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Dây tiếp địa bảo vệ (PE - màu vàng sọc xanh lá) trong hệ thống điện gia đình có vai trò gì?",
        "options": [
          "A. Dẫn dòng điện rò từ vỏ kim loại của thiết bị (máy giặt, tủ lạnh, bình nóng lạnh) xuống cọc đất, ngăn ngừa nguy cơ điện giật cho người sử dụng.",
          "B. Làm cho tủ lạnh làm đá nhanh hơn.",
          "C. Tăng độ sáng cho bóng đèn phòng khách.",
          "D. Dẫn sóng wifi vào trong nhà."
        ],
        "correct": 0,
        "explain": "Nối đất vỏ thiết bị kim loại (dây PE) giúp triệt tiêu điện áp rò nguy hiểm trên vỏ máy: khi có chạm vỏ, dòng rò theo dây tiếp địa có điện trở rất nhỏ truyền xuống đất làm nhảy aptomat và bảo vệ người chạm vào không bị giật."
      },
      {
        "id": "cn_b7_09",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Một hộ gia đình trong 30 ngày sử dụng bình nóng lạnh công suất 2 500 W mỗi ngày bật 1,5 giờ. Lượng điện năng tiêu thụ riêng của bình nóng lạnh trong tháng đó là",
        "options": [
          "A. 112,5 kWh",
          "B. 37,5 kWh",
          "C. 75 kWh",
          "D. 150 kWh"
        ],
        "correct": 0,
        "explain": "Đổi công suất P = 2 500 W = 2,5 kW. Tổng thời gian sử dụng trong 30 ngày: t = 30 × 1,5 = 45 giờ. Điện năng tiêu thụ: A = P × t = 2,5 × 45 = 112,5 kWh (số điện)."
      },
      {
        "id": "cn_b7_10",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Hành vi nào sau đây vi phạm nghiêm trọng quy tắc an toàn khi sử dụng mạng điện hạ áp sinh hoạt?",
        "options": [
          "A. Rút phích cắm bình siêu tốc khi tay còn đang ướt hoặc dùng dây đồng thay thế cho dây chì của cầu chì.",
          "B. Lắp đặt aptomat chống rò 30 mA cho bình nước nóng.",
          "C. Tắt bớt các bóng đèn khi rời khỏi phòng.",
          "D. Nối dây tiếp địa cho vỏ máy giặt."
        ],
        "correct": 0,
        "explain": "Nước dẫn điện tốt nên tay ướt chạm vào phích cắm dễ bị phóng điện gây giật chết người; thay dây đồng vào cầu chì làm mất tác dụng bảo vệ quá tải, khi chập mạch dây dẫn sẽ bốc cháy gây hỏa hoạn."
      }
    ]
  },
  {
    "id": "cn_bai2",
    "title": "👷 Bài 2: Ngành nghề trong lĩnh vực kĩ thuật điện",
    "icon": "👷",
    "description": "5 nhóm nghề cốt lõi: Thiết kế, Sản xuất chế tạo, Lắp đặt, Vận hành, Bảo dưỡng & Sửa chữa điện",
    "questions": [
      {
        "id": "cn_b2_01",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Nghiên cứu, tính toán lựa chọn thiết bị điện và lập hồ sơ bản vẽ thiết kế sơ đồ mạch điện thuộc nhóm nghề nào?",
        "options": [
          "A. Lắp đặt điện.",
          "B. Thiết kế điện.",
          "C. Vận hành điện.",
          "D. Bảo dưỡng và sửa chữa điện."
        ],
        "correct": 1,
        "explain": "Nhóm nghề thiết kế điện có nhiệm vụ nghiên cứu, ứng dụng kiến thức kĩ thuật điện để tính toán lựa chọn khí cụ, thiết bị điện và lập hồ sơ bản vẽ thiết kế hệ thống điện (SGK trang 9-10)."
      },
      {
        "id": "cn_b2_02",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Chế tạo các thiết bị như máy biến áp, động cơ điện, dây cáp điện và khí cụ đóng cắt trên dây chuyền công nghiệp thuộc nhóm nghề nào?",
        "options": [
          "A. Sản xuất, chế tạo thiết bị điện.",
          "B. Vận hành điện.",
          "C. Thiết kế thời trang.",
          "D. Kinh doanh bất động sản."
        ],
        "correct": 0,
        "explain": "Nhóm nghề sản xuất, chế tạo thiết bị điện làm việc tại các nhà máy, xí nghiệp cơ điện để sản xuất các thiết bị, máy móc điện và linh kiện đạt chuẩn kiểm định (SGK trang 11)."
      },
      {
        "id": "cn_b2_03",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Thi công kéo dây, lắp đặt tủ điện và kết nối các thiết bị điện tại hiện trường công trình xây dựng theo bản vẽ thiết kế thuộc nhóm nghề nào?",
        "options": [
          "A. Lắp đặt điện.",
          "B. Nghiên cứu lí thuyết vật lí.",
          "C. Thiết kế vi mạch máy tính.",
          "D. Vận hành tổng đài điện thoại."
        ],
        "correct": 0,
        "explain": "Nhóm nghề lắp đặt điện trực tiếp làm việc tại hiện trường các công trình dân dụng và công nghiệp để thi công mạng điện và lắp đặt thiết bị đúng quy chuẩn kĩ thuật (SGK trang 12)."
      },
      {
        "id": "cn_b2_04",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Theo dõi các thông số điện áp, dòng điện, tần số và thao tác đóng cắt các thiết bị điện tại phòng điều khiển trung tâm thuộc nhóm nghề nào?",
        "options": [
          "A. Vận hành điện.",
          "B. Thiết kế điện.",
          "C. Sản xuất thiết bị.",
          "D. Môi giới việc làm."
        ],
        "correct": 0,
        "explain": "Nhóm nghề vận hành điện làm việc tại phòng điều độ, trung tâm điều khiển nhà máy điện và trạm biến áp để giám sát và duy trì mạng điện hoạt động liên tục, an toàn (SGK trang 13)."
      },
      {
        "id": "cn_b2_05",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Kiểm tra định kì, tra dầu mỡ, siết chặt các điểm tiếp xúc và phục hồi các chi tiết bị hỏng hóc thuộc nhóm nghề nào?",
        "options": [
          "A. Bảo dưỡng và sửa chữa điện.",
          "B. Thiết kế điện.",
          "C. Xây dựng cầu đường.",
          "D. Khảo sát địa chất."
        ],
        "correct": 0,
        "explain": "Bảo dưỡng nhằm ngăn ngừa nguy cơ sự cố hỏng hóc; sửa chữa nhằm phục hồi hoạt động bình thường của thiết bị khi xảy ra sự cố hư hỏng (SGK trang 14)."
      },
      {
        "id": "cn_b2_06",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Yêu cầu về phẩm chất đạo đức và kĩ năng cốt lõi của người làm việc trong ngành kĩ thuật điện là:",
        "options": [
          "A. Tuân thủ nghiêm ngặt quy trình an toàn điện, cẩn thận, tỉ mỉ, có tinh thần trách nhiệm cao và khả năng làm việc nhóm.",
          "B. Làm việc tùy tiện, tự ý thay đổi quy trình khi thấy tiện.",
          "C. Không cần trang bị đồ bảo hộ lao động.",
          "D. Chỉ cần thể lực mà không cần kiến thức chuyên môn."
        ],
        "correct": 0,
        "explain": "Ngành điện tiềm ẩn nguy hiểm cao về điện giật và cháy nổ, do đó đòi hỏi tính kỉ luật an toàn tuyệt đối, sự cẩn trọng và kiến thức kĩ thuật vững vàng (SGK trang 15)."
      },
      {
        "id": "cn_b2_07",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Để trở thành một Kĩ sư thiết kế hệ thống điện, người học cần tốt nghiệp trình độ đào tạo nào?",
        "options": [
          "A. Đại học chuyên ngành Kĩ thuật điện / Hệ thống điện.",
          "B. Sơ cấp nghề 3 tháng.",
          "C. Chỉ cần tốt nghiệp Trung học cơ sở.",
          "D. Bằng lái xe hạng C."
        ],
        "correct": 0,
        "explain": "Vị trí kĩ sư thiết kế đòi hỏi nền tảng kiến thức chuyên sâu về tính toán giải tích mạch điện, tiêu chuẩn kĩ thuật và phần mềm đồ họa chuyên dụng, yêu cầu tốt nghiệp đại học chuyên ngành (SGK trang 10)."
      },
      {
        "id": "cn_b2_08",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Sự phát triển mạnh mẽ của xe điện, hệ thống điện mặt trời mái nhà và lưới điện thông minh mang lại cơ hội gì cho nhân lực ngành kĩ thuật điện?",
        "options": [
          "A. Làm giảm nhu cầu việc làm của ngành điện.",
          "B. Mở ra rất nhiều cơ hội việc làm mới, thu nhập cao và triển vọng phát triển nghề nghiệp lâu dài.",
          "C. Khiến ngành kĩ thuật điện bị xóa bỏ hoàn toàn.",
          "D. Không có tác động gì."
        ],
        "correct": 1,
        "explain": "Xu thế chuyển đổi xanh và tự động hóa công nghiệp đòi hỏi nguồn nhân lực kĩ thuật điện chất lượng cao lớn hơn bao giờ hết (SGK trang 16)."
      },
      {
        "id": "cn_b2_09",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Dụng cụ bảo hộ lao động cá nhân bắt buộc khi kiểm tra, thao tác trên lưới điện hạ áp đang mang điện gồm:",
        "options": [
          "A. Găng tay cách điện hạ áp, ủng cách điện, mũ bảo hộ, kính bảo vệ mắt và bút thử điện đạt chuẩn kiểm định.",
          "B. Đi chân đất để tiếp đất tốt hơn.",
          "C. Đeo găng tay len ướt.",
          "D. Sử dụng tuốc nơ vít kim loại không bọc cán cách điện."
        ],
        "correct": 0,
        "explain": "Quy tắc an toàn điện đòi hỏi thợ điện phải sử dụng đầy đủ đồ cách điện chuyên dụng đã qua kiểm định định kì (găng tay cách điện, ủng, bút thử điện...) để ngăn chặn dòng điện giật truyền qua cơ thể."
      },
      {
        "id": "cn_b2_10",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Khẩu hiệu an toàn hàng đầu được áp dụng trong mọi công việc kĩ thuật điện là gì?",
        "options": [
          "A. 'An toàn là trên hết - Cắt điện, kiểm tra không còn điện và tiếp đất trước khi thao tác'.",
          "B. 'Càng nhanh càng tốt, bỏ qua kiểm tra an toàn'.",
          "C. 'Chạm tay thử xem có giật không'.",
          "D. 'Cứ đóng điện rồi tính sau'."
        ],
        "correct": 0,
        "explain": "Nguyên tắc vàng của an toàn điện: Trước khi sửa chữa phải cắt điện, khóa aptomat gắn biển cảnh báo, dùng bút thử điện kiểm tra chắc chắn hết điện rồi mới được phép thao tác."
      }
    ]
  },
  {
    "id": "cn_gk1",
    "title": "🎯 Đề Thi Thử Giữa Kì 1 Công Nghệ 12 (Chuẩn Ma Trận 2025)",
    "icon": "🎯",
    "description": "Đề thi chuẩn cấu trúc 40 câu: Trắc nghiệm 4 lựa chọn + Đúng/Sai có ngữ liệu thực tế + Bài tập tính toán",
    "questions": [
      {
        "id": "cn_b3_01",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>. Đại lượng I<sub>m</sub> được gọi là gì?",
        "options": [
          "A. Giá trị hiệu dụng của dòng điện.",
          "B. Giá trị cực đại (biên độ) của dòng điện.",
          "C. Tần số góc của dòng điện.",
          "D. Pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>, đại lượng I<sub>m</sub> là cường độ dòng điện cực đại (biên độ), đơn vị là ampe (A). Mối liên hệ với giá trị hiệu dụng I: <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span></span> (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_02",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một dòng điện xoay chiều có biểu thức <span class=\"math-term\">i = 4√2 · sin(100πt)</span> (A). Giá trị hiệu dụng I và tần số f của dòng điện này lần lượt là",
        "options": [
          "A. I = 4 A; f = 50 Hz",
          "B. I = 4√2 A; f = 100 Hz",
          "C. I = 4 A; f = 100 Hz",
          "D. I = 2√2 A; f = 50 Hz"
        ],
        "correct": 0,
        "explain": "Cường độ cực đại <span class=\"math-term\">I<sub>m</sub> = 4√2 A</span> nên giá trị hiệu dụng <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">4√2</span><span class=\"math-frac-bottom\">√2</span></span> = 4 A</span>. Tần số góc <span class=\"math-term\">ω = 100π rad/s</span> nên tần số <span class=\"math-term\">f = <span class=\"math-frac\"><span class=\"math-frac-top\">ω</span><span class=\"math-frac-bottom\">2π</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">100π</span><span class=\"math-frac-bottom\">2π</span></span> = 50 Hz</span>."
      },
      {
        "id": "cn_b3_03",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Công thức tính cảm kháng X<sub>L</sub> của cuộn cảm thuần và dung kháng X<sub>C</sub> của tụ điện đối với dòng điện xoay chiều tần số f là:",
        "options": [
          "A. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = 2πfC</span>",
          "B. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "C. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfL</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "D. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">L</span><span class=\"math-frac-bottom\">2πf</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">C</span><span class=\"math-frac-bottom\">2πf</span></span></span>"
        ],
        "correct": 1,
        "explain": "Cảm kháng cuộn cảm thuần: <span class=\"math-term\">X<sub>L</sub> = ωL = 2πfL</span> (đơn vị Ω); Dung kháng tụ điện: <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">ωC</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span> (đơn vị Ω) (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_04",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z<sub>t</sub> của tải điện một pha gồm điện trở R mắc nối tiếp với cuộn cảm (X<sub>L</sub>) và tụ điện (X<sub>C</sub>) được tính theo công thức nào?",
        "options": [
          "A. <span class=\"math-term\">z<sub>t</sub> = R + X<sub>L</sub> - X<sub>C</sub></span>",
          "B. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>",
          "C. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> + X<sub>C</sub>)²]</span>",
          "D. <span class=\"math-term\">z<sub>t</sub> = √[R² - (X<sub>L</sub> - X<sub>C</sub>)²]</span>"
        ],
        "correct": 1,
        "explain": "Tổng trở của tải R-L-C nối tiếp đặc trưng bởi độ lớn: <span class=\"math-term\">z<sub>t</sub> = √(R² + X²)</span> với điện kháng <span class=\"math-term\">X = X<sub>L</sub> - X<sub>C</sub></span>, do đó <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>. Hệ số góc <span class=\"math-term\">tan φ = <span class=\"math-frac\"><span class=\"math-frac-top\">X</span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">X<sub>L</sub> - X<sub>C</sub></span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_05",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hiện tượng cộng hưởng điện trong đoạn mạch R-L-C nối tiếp xảy ra khi nào?",
        "options": [
          "A. Khi R = X<sub>L</sub>",
          "B. Khi cảm kháng bằng dung kháng (X<sub>L</sub> = X<sub>C</sub>)",
          "C. Khi tần số f = 0",
          "D. Khi tổng trở đạt giá trị lớn vô cùng"
        ],
        "correct": 1,
        "explain": "Cộng hưởng điện xảy ra khi cảm kháng bằng dung kháng <span class=\"math-term\">X<sub>L</sub> = X<sub>C</sub></span> (tức <span class=\"math-term\">2πfL = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>), khi đó điện kháng triệt tiêu X = 0, tổng trở z<sub>t</sub> đạt cực tiểu z<sub>t</sub> = R và dòng điện trong mạch đạt cực đại <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">U</span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_06",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hệ thống dòng điện xoay chiều ba pha đối xứng là tập hợp của ba dòng điện xoay chiều hình sin có đặc điểm gì?",
        "options": [
          "A. Cùng biên độ, cùng tần số và cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> (120°) lần lượt giữa các pha.",
          "C. Khác tần số, cùng biên độ và lệch pha nhau 90°.",
          "D. Cùng biên độ nhưng tần số pha sau gấp đôi pha trước."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa SGK trang 18: Dòng điện ba pha đối xứng gồm 3 dòng điện xoay chiều hình sin có cùng tần số, cùng biên độ và lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (tức 120°) lần lượt giữa các pha."
      },
      {
        "id": "cn_b3_14",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi nguồn và tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = 3 · U<sub>p</sub></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>"
        ],
        "correct": 1,
        "explain": "Mạch đối xứng nối hình sao (Y): Mối liên hệ điện áp là <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>, suy ra <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>. Ví dụ mạng hạ áp có U<sub>p</sub> = 220 V thì U<sub>d</sub> = √3 × 220 ≈ 380 V (SGK trang 20)."
      },
      {
        "id": "cn_b3_15",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa cường độ dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình sao (Y), dòng điện từ dây pha chạy thẳng trực tiếp vào cuộn dây pha của tải không bị phân nhánh, do đó dòng điện dây bằng dòng điện pha: I<sub>d</sub> = I<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_16",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = 2 · U<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình tam giác (Δ), mỗi pha của tải được mắc trực tiếp giữa hai dây pha của nguồn điện, vì vậy điện áp pha của tải bằng chính điện áp dây của nguồn: U<sub>d</sub> = U<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_17",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 1,
        "explain": "Khi tải nối tam giác (Δ) đối xứng, dòng điện dây tại các nút rẽ nhánh thành hai dòng điện pha, cho ta: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>, suy ra <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span> (SGK trang 20)."
      },
      {
        "id": "cn_b4_01",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia là một hệ thống thống nhất gồm những thành phần cơ bản nào?",
        "options": [
          "A. Các công ty kinh doanh thiết bị điện gia dụng và các cửa hàng phân phối bán lẻ.",
          "B. Nguồn điện, lưới điện và các tải tiêu thụ điện được liên kết chặt chẽ với nhau trên quy mô toàn quốc.",
          "C. Các cơ quan quản lí tài nguyên nước và các hồ chứa thủy lợi.",
          "D. Trạm phát sóng viễn thông và các vệ tinh địa tĩnh quân sự."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 22-23: Hệ thống điện quốc gia gồm các nguồn điện (nhà máy điện), lưới điện (đường dây và trạm biến áp) và các hộ tiêu thụ điện trên toàn quốc được liên kết chặt chẽ thành một hệ thống thống nhất."
      },
      {
        "id": "cn_b4_02",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện liên tục bốn khâu then chốt nào sau đây?",
        "options": [
          "A. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng.",
          "B. Thiết kế, lắp ráp cơ khí, đóng tàu và thử nghiệm ô tô.",
          "C. Đào tạo nhân lực, in ấn sách giáo khoa, bán hàng và bảo hành.",
          "D. Chế tạo linh kiện điện tử, lập trình phần mềm và bảo dưỡng máy tính."
        ],
        "correct": 0,
        "explain": "Hệ thống điện quốc gia thực hiện quá trình: Sản xuất điện năng (tại nhà máy điện) -> Truyền tải điện năng (lưới truyền tải) -> Phân phối điện năng (lưới phân phối) -> Tiêu thụ điện năng (tại các phụ tải) (SGK trang 22)."
      },
      {
        "id": "cn_b4_03",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN TRUYỀN TẢI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV (như 220 kV và 500 kV)."
        ],
        "correct": 3,
        "explain": "Theo quy chuẩn phân loại SGK trang 23: Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở Việt Nam phổ biến là 220 kV và siêu cao áp 500 kV), đảm nhận truyền tải công suất lớn từ nhà máy điện đến các trạm phân phối chính."
      },
      {
        "id": "cn_b4_04",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN PHÂN PHỐI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống (110 kV, 35 kV, 22 kV, 10 kV, 6 kV, 0,4 kV).",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp điện áp sinh hoạt 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có cấp điện áp TỪ 110 kV TRỞ XUỐNG (110 kV, 35 kV, 22 kV, 10 kV, 6 kV và hạ áp 0,4 kV/380/220V), làm nhiệm vụ đưa điện từ trạm phân phối chính đến các phụ tải tiêu thụ địa phương (SGK trang 23)."
      },
      {
        "id": "cn_b4_05",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐG GIA",
        "question": "Theo quy chuẩn kĩ thuật điện Việt Nam, bốn cấp điện áp tiêu chuẩn của hệ thống lưới điện gồm:",
        "options": [
          "A. Điện cực thấp, điện trung bình, điện mạnh và điện cực mạnh.",
          "B. Hạ áp (≤ 1 kV), Trung áp (> 1 kV đến 35 kV), Cao áp (> 35 kV đến 220 kV), Siêu cao áp (> 220 kV).",
          "C. 12 V, 24 V, 110 V và 220 V.",
          "D. Điện dân dụng, điện công nghiệp, điện nông nghiệp và điện quốc phòng."
        ],
        "correct": 1,
        "explain": "Bốn cấp điện áp tiêu chuẩn quy định rõ ràng trong SGK trang 23: 1. Hạ áp (đến 1 kV); 2. Trung áp (từ trên 1 kV đến 35 kV); 3. Cao áp (từ trên 35 kV đến 220 kV); 4. Siêu cao áp (trên 220 kV, tiêu biểu là 500 kV)."
      },
      {
        "id": "cn_b4_06",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện siêu cao áp 500 kV Bắc - Nam mạch 1 được khởi công và khánh thành đóng điện vào các mốc thời gian lịch sử nào?",
        "options": [
          "A. Khởi công ngày 05/04/1992 và đóng điện ngày 27/05/1994.",
          "B. Khởi công ngày 30/04/1975 và đóng điện ngày 02/09/1985.",
          "C. Khởi công ngày 01/01/2000 và đóng điện ngày 10/10/2010.",
          "D. Khởi công ngày 19/05/1990 và đóng điện ngày 27/07/1995."
        ],
        "correct": 0,
        "explain": "Đường dây truyền tải 500 kV Bắc - Nam mạch 1 là công trình thế kỉ: khởi công ngày 05/04/1992 và hoàn thành đóng điện vận hành chính thức ngày 27/05/1994 (SGK Công nghệ 12 trang 24)."
      },
      {
        "id": "cn_b4_10",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện nguồn, người ta bắt buộc phải đặt trạm biến áp TĂNG ÁP trước khi đưa điện lên đường dây truyền tải?",
        "options": [
          "A. Để tăng tần số dòng điện xoay chiều lên hàng nghìn Hz.",
          "B. Để tăng điện áp U, giảm cường độ dòng điện I, giúp giảm hao phí toả nhiệt theo công thức: <span class=\"math-term\">ΔP = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>.",
          "C. Để chuyển đổi dòng xoay chiều thành dòng điện một chiều.",
          "D. Để biến điện năng thành cơ năng dự trữ trong cột tháp."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí nhiệt trên đường dây là: <span class=\"math-term\">ΔP = I²R = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>. Khi tăng điện áp U lên n lần thì hao phí ΔP giảm đi n² lần, giúp tiết kiệm chi phí xây dựng đường dây và truyền tải được công suất cực lớn đi xa."
      },
      {
        "id": "cn_b6_01",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng nằm trong khoảng nào sau đây?",
        "options": [
          "A. Dưới 1 kW.",
          "B. Từ vài chục đến vài trăm kW.",
          "C. Từ vài nghìn đến vài chục nghìn MW.",
          "D. Trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa chuẩn SGK Công nghệ 12 trang 31: Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới điện phân phối để cung cấp cho cơ sở sản xuất."
      },
      {
        "id": "cn_b6_02",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Ba đặc điểm quan trọng nhất của mạng điện sản xuất quy mô nhỏ bao gồm:",
        "options": [
          "A. Công suất nhỏ dưới 100 W; dùng nguồn pin năng lượng mặt trời; không có aptomat.",
          "B. Công suất tiêu thụ từ vài chục đến vài trăm kW; phụ tải phân bố tập trung; mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Dùng cấp điện áp siêu cao áp 500 kV; phụ tải rải rác trên diện tích hàng nghìn km²; mạng động lực và chiếu sáng mắc chung trên một công tắc.",
          "D. Toàn bộ thiết bị đều dùng dòng điện một chiều 24 V."
        ],
        "correct": 1,
        "explain": "Ba đặc điểm cốt lõi học sinh bắt buộc phải ghi nhớ theo SGK trang 31: 1. Công suất tiêu thụ từ vài chục đến vài trăm kW; 2. Tải tiêu thụ phân bố tập trung trong phân xưởng; 3. Mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập."
      },
      {
        "id": "cn_b6_04",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Vì sao trong mạng điện sản xuất quy mô nhỏ, mạng điện ĐỘNG LỰC và mạng điện CHIẾU SÁNG bắt buộc phải hoạt động ĐỘC LẬP?",
        "options": [
          "A. Để tránh việc bóng đèn chiếu sáng làm nóng hỏng động cơ điện.",
          "B. Để khi xảy ra sự cố quá tải hay ngắn mạch ở máy móc làm nhảy aptomat tủ động lực, hệ thống đèn chiếu sáng vẫn có điện bình thường, giúp công nhân không bị hoảng loạn, thuận tiện thoát hiểm và xử lí sự cố an toàn.",
          "C. Để công ty điện lực dễ ghi số điện của từng bóng đèn.",
          "D. Để tiết kiệm chi phí lắp đặt dây dẫn."
        ],
        "correct": 1,
        "explain": "Tải động lực (máy móc, động cơ) thường có dòng khởi động lớn và dễ xảy ra sự cố quá tải. Tách độc lập mạng chiếu sáng giúp hệ thống chiếu sáng không bị chập chờn hay mất điện đột ngột khi tải động lực gặp sự cố, đảm bảo an toàn lao động tối đa (SGK trang 31)."
      },
      {
        "id": "cn_b4_18",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "a. Lưới điện truyền tải bao gồm các đường dây và trạm biến áp có cấp điện áp từ 110 kV trở xuống.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở nước ta là 220 kV và 500 kV); còn lưới điện từ 110 kV trở xuống thuộc về lưới điện phân phối (SGK trang 23).",
        "subLabel": "1a"
      },
      {
        "id": "cn_b4_19",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "b. Đường dây 500 kV mạch 1 đóng vai trò lịch sử kết nối hệ thống điện ba miền thành một hệ thống điện quốc gia thống nhất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Đường dây 500 kV mạch 1 được đóng điện năm 1994, truyền tải nguồn điện dôi dư từ miền Bắc (nhà máy thủy điện Hòa Bình) vào miền Trung và miền Nam.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Đây là ý nghĩa lớn nhất của đường dây 500 kV Bắc - Nam mạch 1: liên kết lưới điện ba miền, xóa bỏ tình trạng chia cắt năng lượng và tạo tiền đề phát triển kinh tế toàn diện.",
        "subLabel": "1b"
      },
      {
        "id": "cn_b4_20",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "c. Trong hệ thống điện quốc gia, điện năng có thể được lưu trữ dễ dàng với dung lượng không giới hạn vào các đường dây dẫn điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Điều độ viên hệ thống điện phải tính toán liên tục lượng điện phát ra và lượng điện tiêu thụ trong từng giây để cân bằng hệ thống.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Đặc thù của điện năng là sản xuất, truyền tải và tiêu thụ diễn ra hầu như đồng thời tại cùng một thời điểm, đường dây chỉ có chức năng dẫn điện chứ không tích trữ được năng lượng. Do đó hệ thống luôn phải đảm bảo công suất phát bằng công suất tiêu thụ cộng hao phí.",
        "subLabel": "1c"
      },
      {
        "id": "cn_gk1_ds1d",
        "topic": "HỆ THỐNG ĐIỆN QUỐC GIA (ĐÚNG/SAI)",
        "question": "d. Đường dây 500 kV mạch 3 (Quảng Trạch - Phố Nối) khánh thành năm 2024 giúp tăng cường liên kết lưới truyền tải và an ninh năng lượng cho miền Bắc.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Dự án 500 kV mạch 3 Quảng Trạch - Phố Nối dài 519 km khánh thành tháng 8/2024 giúp truyền tải công suất điện từ miền Trung ra miền Bắc, giải tỏa nguy cơ thiếu điện vào cao điểm nắng nóng.",
        "subLabel": "1d"
      },
      {
        "id": "cn_b6_16",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "a. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ trong khoảng từ vài chục đến vài trăm kW.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ điển hình từ vài chục đến vài trăm kW (SGK trang 31).",
        "subLabel": "2a"
      },
      {
        "id": "cn_b6_17",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "b. Mạng điện động lực cấp cho các máy tiện CNC và mạng điện chiếu sáng xưởng An Phát phải được cấp nguồn từ cùng một công tắc chung để tiết kiệm tủ điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Mạng điện động lực và mạng điện chiếu sáng bắt buộc phải hoạt động độc lập để đảm bảo an toàn, khi máy móc bị sự cố nhảy aptomat thì đèn chiếu sáng vẫn sáng bình thường.",
        "subLabel": "2b"
      },
      {
        "id": "cn_b6_18",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "c. Khi hết ca làm việc, thợ điện ngắt điện bằng cách cắt aptomat tổng ở trạm biến áp trước khi tắt các máy tiện CNC đang gia công.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Quy trình cắt điện an toàn bắt buộc phải cắt từ TẢI về NGUỒN: Tắt từng máy tiện CNC -> Cắt aptomat tủ động lực -> Cắt tủ nhánh -> Cắt tủ tổng để dập dòng phụ tải, tránh phát sinh hồ quang gây nổ và hỏng tiếp điểm ở tủ nguồn.",
        "subLabel": "2c"
      },
      {
        "id": "cn_gk1_ds2d",
        "topic": "MẠNG ĐIỆN SẢN XUẤT NHỎ (ĐÚNG/SAI)",
        "question": "d. Trong phân xưởng An Phát, tủ điện phân phối tổng (MSB) nhận điện trực tiếp từ máy biến áp hạ áp để cấp điện cho các tủ nhánh.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Theo sơ đồ cấu trúc phân cấp chuẩn, tủ phân phối tổng (MSB) đặt tại trạm biến áp, lấy điện từ đầu ra hạ áp của máy biến áp để chia nguồn cho các tủ nhánh.",
        "subLabel": "2d"
      },
      {
        "id": "cn_gk1_ds3a",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "a. Trong mạch điện ba pha đối xứng nối hình sao (Y), điện áp dây luôn bằng điện áp pha (U<sub>d</sub> = U<sub>p</sub>).<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub>; chỉ khi nối tam giác (Δ) thì mới có U<sub>d</sub> = U<sub>p</sub>.",
        "subLabel": "3a"
      },
      {
        "id": "cn_gk1_ds3b",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "b. Nếu đấu ba cụm lò sấy hình sao (Y) vào lưới 380/220 V thì điện áp đặt vào mỗi cụm lò sấy là 220 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Khi tải nối sao, điện áp mỗi pha tải là điện áp pha <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>."
      },
      {
        "id": "cn_gk1_ds3c",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "c. Nếu ba cụm lò sấy hoàn toàn đối xứng thì dòng điện hiệu dụng chạy trong dây trung tính I<sub>o</sub> bằng 0.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Khi tải ba pha hoàn toàn đối xứng, tổng vectơ của 3 dòng điện pha bằng 0 (i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0), do đó dòng điện chạy trên dây trung tính I<sub>o</sub> = 0.",
        "subLabel": "3c"
      },
      {
        "id": "cn_gk1_ds3d",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "d. Kĩ sư điện có thể lắp thêm một cầu chì ngắt mạch trên dây trung tính để bảo vệ an toàn cho hệ thống lò sấy.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Tuyệt đối KHÔNG ĐƯỢC đặt cầu chì hay thiết bị đóng ngắt đơn cực trên dây trung tính, vì nếu cầu chì đứt khi phụ tải mất cân bằng sẽ làm điểm trung tính bị trôi, gây quá điện áp nghiêm trọng cháy thiết bị.",
        "subLabel": "3d"
      },
      {
        "id": "cn_b3_22",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha đối xứng có điện áp pha U<sub>p</sub> = 220 V. Giá trị điện áp dây U<sub>d</sub> chuẩn bằng bao nhiêu vôn?",
        "options": [
          "A. 127 V",
          "B. 220 V",
          "C. 380 V",
          "D. 440 V"
        ],
        "correct": 2,
        "explain": "Nguồn điện ba pha đối xứng nối hình sao: U<sub>d</sub> = √3 · U<sub>p</sub> = √3 × 220 ≈ 381 V (trong thực tế mạng điện hạ áp tiêu chuẩn Việt Nam quy ước chuẩn là 380 V)."
      },
      {
        "id": "cn_b3_23",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch xoay chiều một pha có R = 30 Ω, cảm kháng X<sub>L</sub> = 60 Ω, dung kháng X<sub>C</sub> = 20 Ω. Độ lớn tổng trở z<sub>t</sub> của mạch là",
        "options": [
          "A. 110 Ω",
          "B. 50 Ω",
          "C. 70 Ω",
          "D. 10 Ω"
        ],
        "correct": 1,
        "explain": "Điện kháng của mạch: X = X<sub>L</sub> - X<sub>C</sub> = 60 - 20 = 40 Ω. Tổng trở của mạch: z<sub>t</sub> = √(R² + X²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω."
      },
      {
        "id": "cn_b3_24",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có R = 12 Ω, X<sub>L</sub> = 16 Ω nối hình SAO (Y) vào nguồn điện có điện áp dây U<sub>d</sub> = 380 V. Cường độ dòng điện pha I<sub>p</sub> chạy qua mỗi cuộn dây là",
        "options": [
          "A. 11 A",
          "B. 19 A",
          "C. 31,6 A",
          "D. 22 A"
        ],
        "correct": 0,
        "explain": "Tổng trở mỗi pha của tải: <span class=\"math-term\">z<sub>p</sub> = √(R² + X<sub>L</sub>²) = √(12² + 16²) = √400 = 20 Ω</span>. Do tải nối sao, điện áp pha của tải: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Cường độ dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">20</span></span> = 11 A</span>."
      },
      {
        "id": "cn_b3_25",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha nối hình TAM GIÁC (Δ) tiêu thụ dòng điện pha I<sub>p</sub> = 15 A. Cường độ dòng điện dây I<sub>d</sub> chạy trên đường dây cấp điện cho động cơ là",
        "options": [
          "A. 15 A",
          "B. 8,66 A",
          "C. 25,98 A",
          "D. 45 A"
        ],
        "correct": 2,
        "explain": "Tải nối hình tam giác (Δ) đối xứng: Dòng điện dây liên hệ với dòng điện pha qua công thức: I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 15 ≈ 1,732 × 15 = 25,98 A."
      },
      {
        "id": "cn_b3_26",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha có điện áp dây U<sub>d</sub> = 380 V cấp cho một tải đối xứng nối hình SAO (Y) có tổng trở mỗi pha z<sub>p</sub> = 38 Ω. Dòng điện dây I<sub>d</sub> chạy trên dây pha có giá trị là",
        "options": [
          "A. 10 A",
          "B. ≈ 5,8 A (chính xác 5,79 A)",
          "C. 17,3 A",
          "D. 3,34 A"
        ],
        "correct": 1,
        "explain": "Do tải nối sao: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">38</span></span> ≈ 5,79 A</span>. Do nối sao: I<sub>d</sub> = I<sub>p</sub> ≈ 5,79 A."
      },
      {
        "id": "cn_b3_27",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tải ba pha đối xứng gồm ba điện trở thuần R = 22 Ω nối hình TAM GIÁC (Δ) vào mạng điện có U<sub>d</sub> = 220 V. Dòng điện pha I<sub>p</sub> và dòng điện dây I<sub>d</sub> lần lượt là",
        "options": [
          "A. I<sub>p</sub> = 10 A; I<sub>d</sub> = 17,32 A",
          "B. I<sub>p</sub> = 10 A; I<sub>d</sub> = 10 A",
          "C. I<sub>p</sub> = 5,77 A; I<sub>d</sub> = 10 A",
          "D. I<sub>p</sub> = 17,32 A; I<sub>d</sub> = 10 A"
        ],
        "correct": 0,
        "explain": "Do tải nối tam giác: U<sub>p</sub> = U<sub>d</sub> = 220 V. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">22</span></span> = 10 A</span>. Dòng điện dây: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 10 ≈ 17,32 A</span>."
      },
      {
        "id": "cn_b6_14",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Một phân xưởng may công nghiệp có tổng công suất tác dụng tiêu thụ P = 160 kW, hệ số công suất cos φ = 0,8. Cần chọn máy biến áp phân phối có công suất biểu kiến định mức tối thiểu là bao nhiêu kVA?",
        "options": [
          "A. 128 kVA",
          "B. 160 kVA",
          "C. 200 kVA",
          "D. 250 kVA"
        ],
        "correct": 2,
        "explain": "Công suất biểu kiến của máy biến áp: <span class=\"math-term\">S = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">160</span><span class=\"math-frac-bottom\">0,8</span></span> = 200 kVA</span>. Do đó cần chọn máy biến áp có công suất định mức tối thiểu là 200 kVA."
      },
      {
        "id": "cn_b4_11",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Khi truyền tải một công suất điện P xác định trên cùng một đường dây có điện trở R, nếu tăng điện áp từ U<sub>1</sub> = 110 kV lên U<sub>2</sub> = 220 kV thì công suất hao phí toả nhiệt ΔP trên đường dây sẽ",
        "options": [
          "A. tăng lên gấp 2 lần.",
          "B. giảm đi 2 lần.",
          "C. giảm đi 4 lần.",
          "D. không thay đổi."
        ],
        "correct": 2,
        "explain": "Công suất hao phí tỉ lệ nghịch với bình phương điện áp: ΔP tỉ lệ với <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">U<sup>2</sup></span></span>. Khi tăng điện áp từ 110 kV lên 220 kV (tăng gấp <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">110</span></span> = 2 lần) thì hao phí giảm: 2² = 4 lần."
      }
    ]
  },
  {
    "id": "cn_all",
    "title": "⚡ Marathon Toàn Bộ Công Nghệ 12 (Bài 2 - 7) (106 câu)",
    "icon": "🏆",
    "description": "Trọn bộ 106 câu hỏi ôn tập bám sát 100% sách giáo khoa Kết nối tri thức",
    "questions": [
      {
        "id": "cn_b3_01",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>. Đại lượng I<sub>m</sub> được gọi là gì?",
        "options": [
          "A. Giá trị hiệu dụng của dòng điện.",
          "B. Giá trị cực đại (biên độ) của dòng điện.",
          "C. Tần số góc của dòng điện.",
          "D. Pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức <span class=\"math-term\">i = I<sub>m</sub> · sin(ωt + ψ)</span>, đại lượng I<sub>m</sub> là cường độ dòng điện cực đại (biên độ), đơn vị là ampe (A). Mối liên hệ với giá trị hiệu dụng I: <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span></span> (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_02",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một dòng điện xoay chiều có biểu thức <span class=\"math-term\">i = 4√2 · sin(100πt)</span> (A). Giá trị hiệu dụng I và tần số f của dòng điện này lần lượt là",
        "options": [
          "A. I = 4 A; f = 50 Hz",
          "B. I = 4√2 A; f = 100 Hz",
          "C. I = 4 A; f = 100 Hz",
          "D. I = 2√2 A; f = 50 Hz"
        ],
        "correct": 0,
        "explain": "Cường độ cực đại <span class=\"math-term\">I<sub>m</sub> = 4√2 A</span> nên giá trị hiệu dụng <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>m</sub></span><span class=\"math-frac-bottom\">√2</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">4√2</span><span class=\"math-frac-bottom\">√2</span></span> = 4 A</span>. Tần số góc <span class=\"math-term\">ω = 100π rad/s</span> nên tần số <span class=\"math-term\">f = <span class=\"math-frac\"><span class=\"math-frac-top\">ω</span><span class=\"math-frac-bottom\">2π</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">100π</span><span class=\"math-frac-bottom\">2π</span></span> = 50 Hz</span>."
      },
      {
        "id": "cn_b3_03",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Công thức tính cảm kháng X<sub>L</sub> của cuộn cảm thuần và dung kháng X<sub>C</sub> của tụ điện đối với dòng điện xoay chiều tần số f là:",
        "options": [
          "A. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = 2πfC</span>",
          "B. <span class=\"math-term\">X<sub>L</sub> = 2πfL</span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "C. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfL</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>",
          "D. <span class=\"math-term\">X<sub>L</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">L</span><span class=\"math-frac-bottom\">2πf</span></span></span> và <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">C</span><span class=\"math-frac-bottom\">2πf</span></span></span>"
        ],
        "correct": 1,
        "explain": "Cảm kháng cuộn cảm thuần: <span class=\"math-term\">X<sub>L</sub> = ωL = 2πfL</span> (đơn vị Ω); Dung kháng tụ điện: <span class=\"math-term\">X<sub>C</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">ωC</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span> (đơn vị Ω) (SGK Công nghệ 12 trang 18)."
      },
      {
        "id": "cn_b3_04",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z<sub>t</sub> của tải điện một pha gồm điện trở R mắc nối tiếp với cuộn cảm (X<sub>L</sub>) và tụ điện (X<sub>C</sub>) được tính theo công thức nào?",
        "options": [
          "A. <span class=\"math-term\">z<sub>t</sub> = R + X<sub>L</sub> - X<sub>C</sub></span>",
          "B. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>",
          "C. <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> + X<sub>C</sub>)²]</span>",
          "D. <span class=\"math-term\">z<sub>t</sub> = √[R² - (X<sub>L</sub> - X<sub>C</sub>)²]</span>"
        ],
        "correct": 1,
        "explain": "Tổng trở của tải R-L-C nối tiếp đặc trưng bởi độ lớn: <span class=\"math-term\">z<sub>t</sub> = √(R² + X²)</span> với điện kháng <span class=\"math-term\">X = X<sub>L</sub> - X<sub>C</sub></span>, do đó <span class=\"math-term\">z<sub>t</sub> = √[R² + (X<sub>L</sub> - X<sub>C</sub>)²]</span>. Hệ số góc <span class=\"math-term\">tan φ = <span class=\"math-frac\"><span class=\"math-frac-top\">X</span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">X<sub>L</sub> - X<sub>C</sub></span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_05",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hiện tượng cộng hưởng điện trong đoạn mạch R-L-C nối tiếp xảy ra khi nào?",
        "options": [
          "A. Khi R = X<sub>L</sub>",
          "B. Khi cảm kháng bằng dung kháng (X<sub>L</sub> = X<sub>C</sub>)",
          "C. Khi tần số f = 0",
          "D. Khi tổng trở đạt giá trị lớn vô cùng"
        ],
        "correct": 1,
        "explain": "Cộng hưởng điện xảy ra khi cảm kháng bằng dung kháng <span class=\"math-term\">X<sub>L</sub> = X<sub>C</sub></span> (tức <span class=\"math-term\">2πfL = <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">2πfC</span></span></span>), khi đó điện kháng triệt tiêu X = 0, tổng trở z<sub>t</sub> đạt cực tiểu z<sub>t</sub> = R và dòng điện trong mạch đạt cực đại <span class=\"math-term\">I = <span class=\"math-frac\"><span class=\"math-frac-top\">U</span><span class=\"math-frac-bottom\">R</span></span></span> (SGK trang 18)."
      },
      {
        "id": "cn_b3_06",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Hệ thống dòng điện xoay chiều ba pha đối xứng là tập hợp của ba dòng điện xoay chiều hình sin có đặc điểm gì?",
        "options": [
          "A. Cùng biên độ, cùng tần số và cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> (120°) lần lượt giữa các pha.",
          "C. Khác tần số, cùng biên độ và lệch pha nhau 90°.",
          "D. Cùng biên độ nhưng tần số pha sau gấp đôi pha trước."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa SGK trang 18: Dòng điện ba pha đối xứng gồm 3 dòng điện xoay chiều hình sin có cùng tần số, cùng biên độ và lệch pha nhau góc <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (tức 120°) lần lượt giữa các pha."
      },
      {
        "id": "cn_b3_07",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cấu tạo phần tĩnh (stator) của máy phát điện xoay chiều ba pha gồm:",
        "options": [
          "A. Một nam châm điện có hai cực Bắc - Nam quay quanh trục.",
          "B. Lõi thép có các rãnh đặt ba cuộn dây giống hệt nhau về số vòng và kích thước, bố trí lệch nhau 120° trên đường tròn stator.",
          "C. Bộ góp và chổi than tiếp điện.",
          "D. Ba cặp cực nam châm vĩnh cửu quay tròn liên tục."
        ],
        "correct": 1,
        "explain": "Stator (phần tĩnh) là lõi thép hình trụ có rãnh đặt ba cuộn dây AX (pha A), BY (pha B), CZ (pha C) có số vòng và kích thước hoàn toàn giống nhau, bố trí lệch nhau góc 120° trên vòng tròn stator (SGK trang 18)."
      },
      {
        "id": "cn_b3_08",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Nếu chọn suất điện động pha A làm gốc: <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>, thì biểu thức suất điện động pha B và pha C của máy phát ba pha là:",
        "options": [
          "A. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - π)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + π)</span>",
          "B. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>",
          "C. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">π</span><span class=\"math-frac-bottom\">2</span></span>)</span>",
          "D. <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · cos(ωt)</span> và <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · tan(ωt)</span>"
        ],
        "correct": 1,
        "explain": "Ba suất điện động của máy phát ba pha đối xứng có cùng biên độ E<sub>m</sub>, cùng tần số góc ω và lần lượt lệch pha nhau <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span> rad (120°): <span class=\"math-term\">e<sub>A</sub> = E<sub>m</sub> · sin(ωt)</span>; <span class=\"math-term\">e<sub>B</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span>; <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt + <span class=\"math-frac\"><span class=\"math-frac-top\">2π</span><span class=\"math-frac-bottom\">3</span></span>)</span> [có thể viết dạng góc âm: <span class=\"math-term\">e<sub>C</sub> = E<sub>m</sub> · sin(ωt - <span class=\"math-frac\"><span class=\"math-frac-top\">4π</span><span class=\"math-frac-bottom\">3</span></span>)</span>] (SGK trang 18)."
      },
      {
        "id": "cn_b3_09",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong cách nối nguồn hoặc tải ba pha hình sao (Y), điểm trung tính O được tạo thành bằng cách nào?",
        "options": [
          "A. Nối ba điểm đầu A, B, C lại với nhau.",
          "B. Nối ba điểm cuối X, Y, Z của ba pha lại với nhau.",
          "C. Nối đầu pha này với cuối pha kia: A nối Z, B nối X, C nối Y.",
          "D. Nối dây pha A trực tiếp với cọc tiếp địa bằng đồng."
        ],
        "correct": 1,
        "explain": "Cách nối hình sao (Y): Ba điểm cuối X, Y, Z của các cuộn dây pha được nối chung với nhau tạo thành điểm trung tính O. Ba điểm đầu A, B, C đưa ra ba đường dây pha (SGK trang 19)."
      },
      {
        "id": "cn_b3_10",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Mạch điện ba pha bốn dây gồm các dây dẫn nào sau đây?",
        "options": [
          "A. Bốn dây pha A, B, C, D.",
          "B. Ba dây pha (A, B, C) và một dây trung tính (dây trung hòa O-O').",
          "C. Hai dây pha và hai dây tiếp địa.",
          "D. Ba dây trung tính và một dây pha mang điện."
        ],
        "correct": 1,
        "explain": "Mạch điện ba pha bốn dây gồm ba dây dẫn nối từ các đầu pha A, B, C (gọi là ba dây pha) và một dây dẫn nối từ điểm trung tính O của nguồn đến điểm trung tính O' của tải (gọi là dây trung tính hay dây trung hòa) (SGK trang 19)."
      },
      {
        "id": "cn_b3_11",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong cách nối tải ba pha hình tam giác (Δ), các pha được liên kết với nhau theo nguyên tắc nào?",
        "options": [
          "A. Ba đầu pha A, B, C nối chung với nhau.",
          "B. Ba cuối pha X, Y, Z nối chung với nhau.",
          "C. Điểm đầu pha này nối với điểm cuối pha kia khép kín: A nối Z, B nối X, C nối Y.",
          "D. Nối song song cả ba cuộn dây vào một nguồn một pha."
        ],
        "correct": 2,
        "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này nối với điểm cuối của pha kia theo thứ tự vòng tròn khép kín: A nối với Z, B nối với X, C nối với Y (SGK trang 19)."
      },
      {
        "id": "cn_b3_12",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Đại lượng 'Điện áp pha' (kí hiệu U<sub>p</sub>) trong mạch ba pha được định nghĩa là",
        "options": [
          "A. điện áp giữa hai dây pha bất kì trong ba dây pha A, B, C.",
          "B. điện áp đo giữa một dây pha và dây trung tính (hoặc giữa hai đầu của một pha).",
          "C. điện áp giữa dây trung tính và mặt đất.",
          "D. điện áp một chiều nạp vào ắc quy dự phòng."
        ],
        "correct": 1,
        "explain": "Điện áp pha (U<sub>p</sub>): Là điện áp giữa điểm đầu và điểm cuối của một pha nguồn hoặc tải, tương đương điện áp đo giữa một dây pha và dây trung tính (như U<sub>A</sub>, U<sub>B</sub>, U<sub>C</sub>) (SGK trang 20)."
      },
      {
        "id": "cn_b3_13",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Đại lượng 'Điện áp dây' (kí hiệu U<sub>d</sub>) trong mạch điện ba pha được định nghĩa là",
        "options": [
          "A. điện áp đo giữa dây pha và dây trung tính.",
          "B. điện áp giữa hai dây pha bất kì (U<sub>AB</sub>, U<sub>BC</sub>, U<sub>CA</sub>).",
          "C. điện áp rơi trên một bóng đèn chiếu sáng một pha.",
          "D. điện áp danh định của lưới điện siêu cao áp."
        ],
        "correct": 1,
        "explain": "Điện áp dây (U<sub>d</sub>): Là điện áp đo giữa hai dây pha bất kì với nhau, ví dụ: U<sub>AB</sub> là điện áp giữa dây A và B, U<sub>BC</sub> giữa B và C, U<sub>CA</sub> giữa C và A (SGK trang 20)."
      },
      {
        "id": "cn_b3_14",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi nguồn và tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = 3 · U<sub>p</sub></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>"
        ],
        "correct": 1,
        "explain": "Mạch đối xứng nối hình sao (Y): Mối liên hệ điện áp là <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub></span>, suy ra <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>. Ví dụ mạng hạ áp có U<sub>p</sub> = 220 V thì U<sub>d</sub> = √3 × 220 ≈ 380 V (SGK trang 20)."
      },
      {
        "id": "cn_b3_15",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình SAO (Y), mối quan hệ giữa cường độ dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình sao (Y), dòng điện từ dây pha chạy thẳng trực tiếp vào cuộn dây pha của tải không bị phân nhánh, do đó dòng điện dây bằng dòng điện pha: I<sub>d</sub> = I<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_16",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">U<sub>d</sub> = U<sub>p</sub></span>",
          "B. <span class=\"math-term\">U<sub>d</sub> = √3 · U<sub>p</sub></span>",
          "C. <span class=\"math-term\">U<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">U<sub>d</sub> = 2 · U<sub>p</sub></span>"
        ],
        "correct": 0,
        "explain": "Khi tải nối hình tam giác (Δ), mỗi pha của tải được mắc trực tiếp giữa hai dây pha của nguồn điện, vì vậy điện áp pha của tải bằng chính điện áp dây của nguồn: U<sub>d</sub> = U<sub>p</sub> (SGK trang 20)."
      },
      {
        "id": "cn_b3_17",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi tải ba pha ĐỐI XỨNG nối hình TAM GIÁC (Δ), mối quan hệ giữa dòng điện dây I<sub>d</sub> và dòng điện pha I<sub>p</sub> là:",
        "options": [
          "A. <span class=\"math-term\">I<sub>d</sub> = I<sub>p</sub></span>",
          "B. <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>",
          "C. <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>p</sub></span><span class=\"math-frac-bottom\">√3</span></span></span>",
          "D. <span class=\"math-term\">I<sub>d</sub> = 3 · I<sub>p</sub></span>"
        ],
        "correct": 1,
        "explain": "Khi tải nối tam giác (Δ) đối xứng, dòng điện dây tại các nút rẽ nhánh thành hai dòng điện pha, cho ta: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> ≈ 1,732 · I<sub>p</sub></span>, suy ra <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span></span> (SGK trang 20)."
      },
      {
        "id": "cn_b3_18",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Ưu điểm vượt trội của mạch điện ba pha bốn dây (nối hình sao có dây trung tính) so với mạch ba dây là gì?",
        "options": [
          "A. Tạo ra được hai cấp điện áp khác nhau (điện áp dây U<sub>d</sub> và điện áp pha U<sub>p</sub>), thuận tiện cấp điện đồng thời cho cả động cơ ba pha và thiết bị sinh hoạt một pha.",
          "B. Không bao giờ xảy ra sự cố chập mạch hay quá tải.",
          "C. Tiết kiệm 100% lượng dây nhôm và đồng truyền tải.",
          "D. Điện áp trên đường dây tự động tăng lên gấp mười lần."
        ],
        "correct": 0,
        "explain": "Mạch ba pha 4 dây cung cấp được hai cấp điện áp tiện lợi: điện áp dây 380 V (dùng cho động cơ ba pha công nghiệp) và điện áp pha 220 V (dùng cho các thiết bị sinh hoạt một pha gia đình) (SGK trang 20)."
      },
      {
        "id": "cn_b3_19",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi phụ tải ba pha hoàn toàn ĐỐI XỨNG, cường độ dòng điện chạy trong dây trung tính I<sub>o</sub> có giá trị bằng bao nhiêu?",
        "options": [
          "A. Bằng 3 lần dòng điện pha (I<sub>o</sub> = 3 · I<sub>p</sub>).",
          "B. Bằng không (I<sub>o</sub> = 0).",
          "C. Bằng dòng điện cực đại I<sub>m</sub>.",
          "D. Bằng dòng điện dây I<sub>d</sub>."
        ],
        "correct": 1,
        "explain": "Trong tải ba pha đối xứng, tổng vectơ của ba dòng điện pha bằng 0: i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0, do đó dòng điện hiệu dụng trong dây trung tính I<sub>o</sub> = 0 (SGK trang 20)."
      },
      {
        "id": "cn_b3_20",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Vì sao trên dây trung tính của mạng điện ba pha bốn dây TUYỆT ĐỐI KHÔNG ĐƯỢC đặt cầu chì hay công tắc đơn ngắt mạch?",
        "options": [
          "A. Vì dây trung tính không có dòng điện chạy qua nên cầu chì không thể đứt.",
          "B. Vì nếu cầu chì trên dây trung tính bị đứt khi tải không đối xứng, điện áp pha các tải sẽ bị lệch nghiêm trọng, làm thiết bị điện pha non tải chịu điện áp cao dẫn đến cháy nổ.",
          "C. Vì giá thành của cầu chì dây trung tính quá đắt đỏ.",
          "D. Vì dây trung tính được chôn dưới lòng đất nên không chạm tới được."
        ],
        "correct": 1,
        "explain": "Nếu đứt dây trung tính khi phụ tải ba pha không đối xứng, điểm trung tính O' của tải sẽ bị dịch chuyển, dẫn đến điện áp giữa các pha tải bị mất cân bằng trầm trọng: pha nào có tổng trở lớn sẽ chịu điện áp vượt quá 220 V gây cháy thiết bị (SGK trang 20)."
      },
      {
        "id": "cn_b3_21",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Công thức tính công suất tác dụng toàn phần P của mạch điện xoay chiều ba pha đối xứng là:",
        "options": [
          "A. <span class=\"math-term\">P = U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
          "B. <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ</span>",
          "C. <span class=\"math-term\">P = 3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span>",
          "D. <span class=\"math-term\">P = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub> · I<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> · cos φ</span>"
        ],
        "correct": 1,
        "explain": "Công suất tác dụng ba pha đối xứng tính theo thông số dây: P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ; hoặc tính theo thông số pha: P = 3 · U<sub>p</sub> · I<sub>p</sub> · cos φ (trong đó cos φ là hệ số công suất của mỗi pha tải) (SGK trang 20)."
      },
      {
        "id": "cn_b3_22",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha đối xứng có điện áp pha U<sub>p</sub> = 220 V. Giá trị điện áp dây U<sub>d</sub> chuẩn bằng bao nhiêu vôn?",
        "options": [
          "A. 127 V",
          "B. 220 V",
          "C. 380 V",
          "D. 440 V"
        ],
        "correct": 2,
        "explain": "Nguồn điện ba pha đối xứng nối hình sao: U<sub>d</sub> = √3 · U<sub>p</sub> = √3 × 220 ≈ 381 V (trong thực tế mạng điện hạ áp tiêu chuẩn Việt Nam quy ước chuẩn là 380 V)."
      },
      {
        "id": "cn_b3_23",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch xoay chiều một pha có R = 30 Ω, cảm kháng X<sub>L</sub> = 60 Ω, dung kháng X<sub>C</sub> = 20 Ω. Độ lớn tổng trở z<sub>t</sub> của mạch là",
        "options": [
          "A. 110 Ω",
          "B. 50 Ω",
          "C. 70 Ω",
          "D. 10 Ω"
        ],
        "correct": 1,
        "explain": "Điện kháng của mạch: X = X<sub>L</sub> - X<sub>C</sub> = 60 - 20 = 40 Ω. Tổng trở của mạch: z<sub>t</sub> = √(R² + X²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω."
      },
      {
        "id": "cn_b3_24",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có R = 12 Ω, X<sub>L</sub> = 16 Ω nối hình SAO (Y) vào nguồn điện có điện áp dây U<sub>d</sub> = 380 V. Cường độ dòng điện pha I<sub>p</sub> chạy qua mỗi cuộn dây là",
        "options": [
          "A. 11 A",
          "B. 19 A",
          "C. 31,6 A",
          "D. 22 A"
        ],
        "correct": 0,
        "explain": "Tổng trở mỗi pha của tải: <span class=\"math-term\">z<sub>p</sub> = √(R² + X<sub>L</sub>²) = √(12² + 16²) = √400 = 20 Ω</span>. Do tải nối sao, điện áp pha của tải: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Cường độ dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">20</span></span> = 11 A</span>."
      },
      {
        "id": "cn_b3_25",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha nối hình TAM GIÁC (Δ) tiêu thụ dòng điện pha I<sub>p</sub> = 15 A. Cường độ dòng điện dây I<sub>d</sub> chạy trên đường dây cấp điện cho động cơ là",
        "options": [
          "A. 15 A",
          "B. 8,66 A",
          "C. 25,98 A",
          "D. 45 A"
        ],
        "correct": 2,
        "explain": "Tải nối hình tam giác (Δ) đối xứng: Dòng điện dây liên hệ với dòng điện pha qua công thức: I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 15 ≈ 1,732 × 15 = 25,98 A."
      },
      {
        "id": "cn_b3_26",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một nguồn điện ba pha có điện áp dây U<sub>d</sub> = 380 V cấp cho một tải đối xứng nối hình SAO (Y) có tổng trở mỗi pha z<sub>p</sub> = 38 Ω. Dòng điện dây I<sub>d</sub> chạy trên dây pha có giá trị là",
        "options": [
          "A. 10 A",
          "B. ≈ 5,8 A (chính xác 5,79 A)",
          "C. 17,3 A",
          "D. 3,34 A"
        ],
        "correct": 1,
        "explain": "Do tải nối sao: <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">z<sub>p</sub></span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">38</span></span> ≈ 5,79 A</span>. Do nối sao: I<sub>d</sub> = I<sub>p</sub> ≈ 5,79 A."
      },
      {
        "id": "cn_b3_27",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tải ba pha đối xứng gồm ba điện trở thuần R = 22 Ω nối hình TAM GIÁC (Δ) vào mạng điện có U<sub>d</sub> = 220 V. Dòng điện pha I<sub>p</sub> và dòng điện dây I<sub>d</sub> lần lượt là",
        "options": [
          "A. I<sub>p</sub> = 10 A; I<sub>d</sub> = 17,32 A",
          "B. I<sub>p</sub> = 10 A; I<sub>d</sub> = 10 A",
          "C. I<sub>p</sub> = 5,77 A; I<sub>d</sub> = 10 A",
          "D. I<sub>p</sub> = 17,32 A; I<sub>d</sub> = 10 A"
        ],
        "correct": 0,
        "explain": "Do tải nối tam giác: U<sub>p</sub> = U<sub>d</sub> = 220 V. Dòng điện pha: <span class=\"math-term\">I<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>p</sub></span><span class=\"math-frac-bottom\">R</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">22</span></span> = 10 A</span>. Dòng điện dây: <span class=\"math-term\">I<sub>d</sub> = √3 · I<sub>p</sub> = √3 × 10 ≈ 17,32 A</span>."
      },
      {
        "id": "cn_b3_28",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải điện ba pha tiêu thụ công suất P = 10 kW với điện áp dây U<sub>d</sub> = 380 V và hệ số công suất cos φ = 0,8. Dòng điện dây I<sub>d</sub> chạy trong mạch xấp xỉ bằng",
        "options": [
          "A. 18,99 A (khoảng 19 A)",
          "B. 32,89 A",
          "C. 10,95 A",
          "D. 15,20 A"
        ],
        "correct": 0,
        "explain": "Từ công thức công suất ba pha: <span class=\"math-term\">P = √3 · U<sub>d</sub> · I<sub>d</sub> · cos φ</span> => <span class=\"math-term\">I<sub>d</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">√3 · U<sub>d</sub> · cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">√3 × 380 × 0,8</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">10000</span><span class=\"math-frac-bottom\">526,54</span></span> ≈ 18,99 A</span>."
      },
      {
        "id": "cn_b3_29",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Máy biến áp ba pha sử dụng trong trạm điện có chức năng cơ bản là gì?",
        "options": [
          "A. Biến đổi điện áp và dòng điện của hệ thống điện ba pha nhưng giữ nguyên tần số f = 50 Hz.",
          "B. Biến đổi dòng xoay chiều thành dòng điện một chiều.",
          "C. Tăng công suất tác dụng P của nguồn điện lên gấp đôi.",
          "D. Tích trữ điện năng vào cuộn dây sơ cấp để phát điện khi mất lưới."
        ],
        "correct": 0,
        "explain": "Máy biến áp ba pha làm việc dựa trên hiện tượng cảm ứng điện từ, có chức năng biến đổi điện áp và dòng điện xoay chiều ba pha từ cấp này sang cấp khác nhưng giữ nguyên tần số dòng điện (f = 50 Hz) (SGK trang 20)."
      },
      {
        "id": "cn_b3_30",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Kí hiệu tổ đấu dây Y/Δ-11 của máy biến áp ba pha có ý nghĩa là",
        "options": [
          "A. Cuộn sơ cấp nối hình sao (Y), cuộn thứ cấp nối hình tam giác (Δ), góc lệch pha giữa điện áp sơ cấp và thứ cấp tương ứng góc 11 giờ (330°).",
          "B. Máy biến áp có 11 cuộn dây độc lập.",
          "C. Máy biến áp làm việc ở cấp điện áp 11 kV.",
          "D. Máy biến áp sử dụng 11 kg lõi thép Silic."
        ],
        "correct": 0,
        "explain": "Quy ước tổ đấu dây: Kí hiệu Y/Δ biểu thị cuộn sơ cấp nối sao, cuộn thứ cấp nối tam giác; con số 11 là chỉ số giờ lệch pha giữa vectơ điện áp dây thứ cấp so với sơ cấp (11 × 30° = 330°)."
      },
      {
        "id": "cn_b3_31",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Khi một pha của tải hình sao (Y) bị đứt (hở mạch), dòng điện trong pha bị đứt đó sẽ",
        "options": [
          "A. tăng lên gấp √3 lần.",
          "B. bằng 0, hai pha còn lại vẫn tiếp tục có dòng điện chạy qua.",
          "C. đổi chiều liên tục không xác định.",
          "D. truyền toàn bộ công suất vào cọc tiếp địa."
        ],
        "correct": 1,
        "explain": "Khi bị đứt mạch một pha, dòng điện trong nhánh pha đó bị ngắt hoàn toàn (I<sub>p</sub> = 0). Nếu mạng có dây trung tính thì hai pha còn lại vẫn hoạt động bình thường ở điện áp 220 V."
      },
      {
        "id": "cn_b3_32",
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một xưởng thực hành có nguồn ba pha 4 dây 380/220 V. Muốn lắp một bóng đèn sợi đốt 220 V - 100 W vào mạng điện này, người ta phải đấu bóng đèn vào vị trí nào?",
        "options": [
          "A. Giữa hai dây pha bất kì (ví dụ dây pha A và dây pha B).",
          "B. Giữa một dây pha bất kì và dây trung tính (ví dụ dây pha A và dây trung tính O).",
          "C. Nối tiếp cả ba dây pha A, B, C vào một đầu bóng đèn.",
          "D. Đấu trực tiếp hai cực của bóng đèn vào dây trung tính O."
        ],
        "correct": 1,
        "explain": "Bóng đèn có điện áp định mức 220 V (bằng điện áp pha U<sub>p</sub> của lưới), do đó phải đấu một đầu vào dây pha và một đầu vào dây trung tính O để nhận đúng điện áp 220 V. Nếu đấu vào giữa hai dây pha (U<sub>d</sub> = 380 V) thì đèn sẽ bị quá áp và nổ ngay lập tức."
      },
      {
        "id": "cn_b4_01",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia là một hệ thống thống nhất gồm những thành phần cơ bản nào?",
        "options": [
          "A. Các công ty kinh doanh thiết bị điện gia dụng và các cửa hàng phân phối bán lẻ.",
          "B. Nguồn điện, lưới điện và các tải tiêu thụ điện được liên kết chặt chẽ với nhau trên quy mô toàn quốc.",
          "C. Các cơ quan quản lí tài nguyên nước và các hồ chứa thủy lợi.",
          "D. Trạm phát sóng viễn thông và các vệ tinh địa tĩnh quân sự."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 22-23: Hệ thống điện quốc gia gồm các nguồn điện (nhà máy điện), lưới điện (đường dây và trạm biến áp) và các hộ tiêu thụ điện trên toàn quốc được liên kết chặt chẽ thành một hệ thống thống nhất."
      },
      {
        "id": "cn_b4_02",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện liên tục bốn khâu then chốt nào sau đây?",
        "options": [
          "A. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng.",
          "B. Thiết kế, lắp ráp cơ khí, đóng tàu và thử nghiệm ô tô.",
          "C. Đào tạo nhân lực, in ấn sách giáo khoa, bán hàng và bảo hành.",
          "D. Chế tạo linh kiện điện tử, lập trình phần mềm và bảo dưỡng máy tính."
        ],
        "correct": 0,
        "explain": "Hệ thống điện quốc gia thực hiện quá trình: Sản xuất điện năng (tại nhà máy điện) -> Truyền tải điện năng (lưới truyền tải) -> Phân phối điện năng (lưới phân phối) -> Tiêu thụ điện năng (tại các phụ tải) (SGK trang 22)."
      },
      {
        "id": "cn_b4_03",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN TRUYỀN TẢI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV (như 220 kV và 500 kV)."
        ],
        "correct": 3,
        "explain": "Theo quy chuẩn phân loại SGK trang 23: Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở Việt Nam phổ biến là 220 kV và siêu cao áp 500 kV), đảm nhận truyền tải công suất lớn từ nhà máy điện đến các trạm phân phối chính."
      },
      {
        "id": "cn_b4_04",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thành phần 'LƯỚI ĐIỆN PHÂN PHỐI' trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống (110 kV, 35 kV, 22 kV, 10 kV, 6 kV, 0,4 kV).",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp điện áp sinh hoạt 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có cấp điện áp TỪ 110 kV TRỞ XUỐNG (110 kV, 35 kV, 22 kV, 10 kV, 6 kV và hạ áp 0,4 kV/380/220V), làm nhiệm vụ đưa điện từ trạm phân phối chính đến các phụ tải tiêu thụ địa phương (SGK trang 23)."
      },
      {
        "id": "cn_b4_05",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐG GIA",
        "question": "Theo quy chuẩn kĩ thuật điện Việt Nam, bốn cấp điện áp tiêu chuẩn của hệ thống lưới điện gồm:",
        "options": [
          "A. Điện cực thấp, điện trung bình, điện mạnh và điện cực mạnh.",
          "B. Hạ áp (≤ 1 kV), Trung áp (> 1 kV đến 35 kV), Cao áp (> 35 kV đến 220 kV), Siêu cao áp (> 220 kV).",
          "C. 12 V, 24 V, 110 V và 220 V.",
          "D. Điện dân dụng, điện công nghiệp, điện nông nghiệp và điện quốc phòng."
        ],
        "correct": 1,
        "explain": "Bốn cấp điện áp tiêu chuẩn quy định rõ ràng trong SGK trang 23: 1. Hạ áp (đến 1 kV); 2. Trung áp (từ trên 1 kV đến 35 kV); 3. Cao áp (từ trên 35 kV đến 220 kV); 4. Siêu cao áp (trên 220 kV, tiêu biểu là 500 kV)."
      },
      {
        "id": "cn_b4_06",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện siêu cao áp 500 kV Bắc - Nam mạch 1 được khởi công và khánh thành đóng điện vào các mốc thời gian lịch sử nào?",
        "options": [
          "A. Khởi công ngày 05/04/1992 và đóng điện ngày 27/05/1994.",
          "B. Khởi công ngày 30/04/1975 và đóng điện ngày 02/09/1985.",
          "C. Khởi công ngày 01/01/2000 và đóng điện ngày 10/10/2010.",
          "D. Khởi công ngày 19/05/1990 và đóng điện ngày 27/07/1995."
        ],
        "correct": 0,
        "explain": "Đường dây truyền tải 500 kV Bắc - Nam mạch 1 là công trình thế kỉ: khởi công ngày 05/04/1992 và hoàn thành đóng điện vận hành chính thức ngày 27/05/1994 (SGK Công nghệ 12 trang 24)."
      },
      {
        "id": "cn_b4_07",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Quy mô kĩ thuật của đường dây siêu cao áp 500 kV Bắc - Nam mạch 1 là",
        "options": [
          "A. dài 500 km, gồm 1 000 cột tháp sắt, nối từ Hà Nội vào Đà Nẵng.",
          "B. dài 1 487 km, gồm 3 437 cột tháp sắt, đi qua 14 tỉnh thành từ Trạm 500 kV Hoà Bình đến Trạm 500 kV Phú Lâm (TP. Hồ Chí Minh).",
          "C. dài 2 500 km nối từ Móng Cái đến Mũi Cà Mau.",
          "D. chạy ngầm dưới đáy biển dọc bờ biển miền Trung."
        ],
        "correct": 1,
        "explain": "Đường dây 500 kV mạch 1 dài 1 487 km, xây dựng với 3 437 cột tháp sắt, băng qua rừng núi hiểm trở của 14 tỉnh thành từ Trạm 500 kV Hoà Bình tới Trạm 500 kV Phú Lâm (TP.HCM) (SGK trang 24)."
      },
      {
        "id": "cn_b4_08",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Ý nghĩa chiến lược quan trọng nhất của việc xây dựng và đưa vào vận hành đường dây siêu cao áp 500 kV Bắc - Nam là gì?",
        "options": [
          "A. Hợp nhất hệ thống điện ba miền Bắc - Trung - Nam thành một hệ thống điện quốc gia thống nhất, giải quyết bài toán truyền tải nguồn điện dôi dư từ miền Bắc vào chi viện cho miền Nam đang thiếu điện nghiêm trọng.",
          "B. Bỏ hẳn việc xây dựng các nhà máy nhiệt điện và thủy điện ở miền Nam.",
          "C. Giúp giá điện sinh hoạt giảm về mức miễn phí cho toàn bộ người dân.",
          "D. Thay thế hoàn toàn đường dây điện thoại và internet liên tỉnh."
        ],
        "correct": 0,
        "explain": "Đường dây 500 kV Bắc - Nam đã liên kết lưới điện ba miền thành một khối thống nhất, chấm dứt tình trạng vận hành phân tán rời rạc, tối ưu hóa công suất phát điện của các nhà máy lớn như Thủy điện Hòa Bình để phục vụ phát triển kinh tế cả nước (SGK trang 24)."
      },
      {
        "id": "cn_b4_09",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây siêu cao áp 500 kV mạch 3 vừa được khánh thành thần tốc năm 2024 nối từ địa phương nào đến địa phương nào?",
        "options": [
          "A. Từ Cà Mau đến TP. Hồ Chí Minh.",
          "B. Từ Quảng Trạch (Quảng Bình) đến Phố Nối (Hưng Yên).",
          "C. Từ Sơn La về Hà Nội.",
          "D. Từ Pleiku sang Savannakhet (Lào)."
        ],
        "correct": 1,
        "explain": "Đường dây 500 kV mạch 3 (cung đoạn Quảng Trạch - Phố Nối) dài hơn 519 km nối từ Trung tâm nhiệt điện Quảng Trạch (Quảng Bình) đến Trạm 500 kV Phố Nối (Hưng Yên), góp phần đảm bảo an ninh cấp điện trọng điểm cho miền Bắc."
      },
      {
        "id": "cn_b4_10",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện nguồn, người ta bắt buộc phải đặt trạm biến áp TĂNG ÁP trước khi đưa điện lên đường dây truyền tải?",
        "options": [
          "A. Để tăng tần số dòng điện xoay chiều lên hàng nghìn Hz.",
          "B. Để tăng điện áp U, giảm cường độ dòng điện I, giúp giảm hao phí toả nhiệt theo công thức: <span class=\"math-term\">ΔP = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>.",
          "C. Để chuyển đổi dòng xoay chiều thành dòng điện một chiều.",
          "D. Để biến điện năng thành cơ năng dự trữ trong cột tháp."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí nhiệt trên đường dây là: <span class=\"math-term\">ΔP = I²R = <span class=\"math-frac\"><span class=\"math-frac-top\">P<sup>2</sup> · R</span><span class=\"math-frac-bottom\">U<sup>2</sup> · cos<sup>2</sup>φ</span></span></span>. Khi tăng điện áp U lên n lần thì hao phí ΔP giảm đi n² lần, giúp tiết kiệm chi phí xây dựng đường dây và truyền tải được công suất cực lớn đi xa."
      },
      {
        "id": "cn_b4_11",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Khi truyền tải một công suất điện P xác định trên cùng một đường dây có điện trở R, nếu tăng điện áp từ U<sub>1</sub> = 110 kV lên U<sub>2</sub> = 220 kV thì công suất hao phí toả nhiệt ΔP trên đường dây sẽ",
        "options": [
          "A. tăng lên gấp 2 lần.",
          "B. giảm đi 2 lần.",
          "C. giảm đi 4 lần.",
          "D. không thay đổi."
        ],
        "correct": 2,
        "explain": "Công suất hao phí tỉ lệ nghịch với bình phương điện áp: ΔP tỉ lệ với <span class=\"math-frac\"><span class=\"math-frac-top\">1</span><span class=\"math-frac-bottom\">U<sup>2</sup></span></span>. Khi tăng điện áp từ 110 kV lên 220 kV (tăng gấp <span class=\"math-frac\"><span class=\"math-frac-top\">220</span><span class=\"math-frac-bottom\">110</span></span> = 2 lần) thì hao phí giảm: 2² = 4 lần."
      },
      {
        "id": "cn_b4_12",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vai trò chủ yếu của các trạm biến áp HẠ ÁP bố trí gần các khu dân cư và xí nghiệp công nghiệp là gì?",
        "options": [
          "A. Tăng điện áp lên 500 kV để trả ngược về nhà máy điện.",
          "B. Giảm điện áp từ cấp truyền tải và trung áp xuống cấp điện áp hạ áp an toàn, phù hợp với các thiết bị tiêu thụ điện (380 V / 220 V).",
          "C. Làm mát không khí và phát điện dự phòng khi trời mưa bão.",
          "D. Khử từ trường xung quanh đường dây điện."
        ],
        "correct": 1,
        "explain": "Trạm biến áp hạ áp có nhiệm vụ hạ cấp điện áp từ trung áp (22 kV, 35 kV) hoặc cao áp (110 kV) xuống điện áp hạ áp 380/220 V tương thích với mức điện áp làm việc an toàn của máy móc và đồ dùng gia đình (SGK trang 23)."
      },
      {
        "id": "cn_b4_13",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Tần số danh định của dòng điện xoay chiều trong hệ thống điện quốc gia Việt Nam được chuẩn hóa là bao nhiêu?",
        "options": [
          "A. 60 Hz",
          "B. 50 Hz",
          "C. 100 Hz",
          "D. 25 Hz"
        ],
        "correct": 1,
        "explain": "Tần số công nghiệp danh định của hệ thống điện quốc gia Việt Nam là 50 Hz (SGK trang 22-23), sai số vận hành cho phép rất nghiêm ngặt (không quá ±5%)."
      },
      {
        "id": "cn_b4_14",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cơ quan đầu não chịu trách nhiệm chỉ huy điều độ, điều hòa công suất phát của các nhà máy điện và vận hành an toàn hệ thống điện quốc gia 24/7 tại Việt Nam là",
        "options": [
          "A. Trung tâm Điều độ Hệ thống điện Quốc gia (A0 - NSMO).",
          "B. Viện Khoa học Thủy lợi Việt Nam.",
          "C. Cục Quản lí Thị trường.",
          "D. Tổng công ty Bưu chính Viễn thông."
        ],
        "correct": 0,
        "explain": "Trung tâm Điều độ Hệ thống điện Quốc gia (A0) là đơn vị chỉ huy vận hành, theo dõi giám sát cung - cầu điện theo thời gian thực để duy trì ổn định tần số 50 Hz và điện áp trên toàn bộ lưới điện quốc gia."
      },
      {
        "id": "cn_b4_15",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấp điện áp trung áp phổ biến nhất đang được sử dụng trong lưới điện phân phối tại các đô thị và khu dân cư ở Việt Nam hiện nay là:",
        "options": [
          "A. 0,4 kV",
          "B. 22 kV",
          "C. 110 kV",
          "D. 500 kV"
        ],
        "correct": 1,
        "explain": "Ở Việt Nam, cấp điện áp 22 kV là cấp điện áp trung áp tiêu chuẩn phổ biến nhất trong lưới phân phối hiện đại để cấp điện từ các trạm 110 kV về các trạm biến áp phân phối phụ tải (SGK trang 23)."
      },
      {
        "id": "cn_b4_16",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Các chỉ tiêu chất lượng điện năng quan trọng hàng đầu trong hệ thống điện quốc gia gồm có:",
        "options": [
          "A. Độ ổn định tần số (50 Hz), độ ổn định điện áp (độ lệch trong ngưỡng ±5%) và độ tin cậy cung cấp điện liên tục.",
          "B. Màu sắc của lớp vỏ cách điện cáp ngầm.",
          "C. Tốc độ gió thổi qua đường dây và nhiệt độ cột tháp sắt.",
          "D. Số lượng nhân viên trực ca tại các trạm biến áp."
        ],
        "correct": 0,
        "explain": "Chất lượng điện năng được đo bằng: tần số ổn định quanh mức 50 Hz, độ lệch điện áp nằm trong tiêu chuẩn cho phép (±5%), sóng hài thấp và chỉ số cấp điện liên tục (SAIDI, SAIFI)."
      },
      {
        "id": "cn_b4_17",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thiết bị nào sau đây thường được lắp đặt tại các trạm biến áp phân phối để nâng cao hệ số công suất cos φ và giảm tổn thất điện năng trên lưới điện?",
        "options": [
          "A. Tụ bù công suất phản kháng (bộ tụ điện).",
          "B. Đèn LED chiếu sáng công suất lớn.",
          "C. Cột thu lôi chống sét.",
          "D. Máy hàn điện hồ quang."
        ],
        "correct": 0,
        "explain": "Tụ bù công suất phản kháng phát ra công suất phản kháng Q bù cho các phụ tải cảm (động cơ điện), giúp nâng cao hệ số công suất cos φ của lưới lên gần bằng 1, làm giảm dòng điện trên dây dẫn và giảm hao phí truyền tải."
      },
      {
        "id": "cn_b4_18",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "a. Lưới điện truyền tải bao gồm các đường dây và trạm biến áp có cấp điện áp từ 110 kV trở xuống.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Lưới điện truyền tải có cấp điện áp TRÊN 110 kV (ở nước ta là 220 kV và 500 kV); còn lưới điện từ 110 kV trở xuống thuộc về lưới điện phân phối (SGK trang 23).",
        "subLabel": "1a"
      },
      {
        "id": "cn_b4_19",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "b. Đường dây 500 kV mạch 1 đóng vai trò lịch sử kết nối hệ thống điện ba miền thành một hệ thống điện quốc gia thống nhất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Đường dây 500 kV mạch 1 được đóng điện năm 1994, truyền tải nguồn điện dôi dư từ miền Bắc (nhà máy thủy điện Hòa Bình) vào miền Trung và miền Nam.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Đây là ý nghĩa lớn nhất của đường dây 500 kV Bắc - Nam mạch 1: liên kết lưới điện ba miền, xóa bỏ tình trạng chia cắt năng lượng và tạo tiền đề phát triển kinh tế toàn diện.",
        "subLabel": "1b"
      },
      {
        "id": "cn_b4_20",
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "c. Trong hệ thống điện quốc gia, điện năng có thể được lưu trữ dễ dàng với dung lượng không giới hạn vào các đường dây dẫn điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Điều độ viên hệ thống điện phải tính toán liên tục lượng điện phát ra và lượng điện tiêu thụ trong từng giây để cân bằng hệ thống.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Đặc thù của điện năng là sản xuất, truyền tải và tiêu thụ diễn ra hầu như đồng thời tại cùng một thời điểm, đường dây chỉ có chức năng dẫn điện chứ không tích trữ được năng lượng. Do đó hệ thống luôn phải đảm bảo công suất phát bằng công suất tiêu thụ cộng hao phí.",
        "subLabel": "1c"
      },
      {
        "id": "cn_b6_01",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng nằm trong khoảng nào sau đây?",
        "options": [
          "A. Dưới 1 kW.",
          "B. Từ vài chục đến vài trăm kW.",
          "C. Từ vài nghìn đến vài chục nghìn MW.",
          "D. Trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Theo định nghĩa chuẩn SGK Công nghệ 12 trang 31: Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới điện phân phối để cung cấp cho cơ sở sản xuất."
      },
      {
        "id": "cn_b6_02",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Ba đặc điểm quan trọng nhất của mạng điện sản xuất quy mô nhỏ bao gồm:",
        "options": [
          "A. Công suất nhỏ dưới 100 W; dùng nguồn pin năng lượng mặt trời; không có aptomat.",
          "B. Công suất tiêu thụ từ vài chục đến vài trăm kW; phụ tải phân bố tập trung; mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Dùng cấp điện áp siêu cao áp 500 kV; phụ tải rải rác trên diện tích hàng nghìn km²; mạng động lực và chiếu sáng mắc chung trên một công tắc.",
          "D. Toàn bộ thiết bị đều dùng dòng điện một chiều 24 V."
        ],
        "correct": 1,
        "explain": "Ba đặc điểm cốt lõi học sinh bắt buộc phải ghi nhớ theo SGK trang 31: 1. Công suất tiêu thụ từ vài chục đến vài trăm kW; 2. Tải tiêu thụ phân bố tập trung trong phân xưởng; 3. Mạng điện động lực và mạng điện chiếu sáng hoạt động độc lập."
      },
      {
        "id": "cn_b6_03",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Đặc điểm 'phụ tải phân bố tập trung' trong mạng điện sản xuất quy mô nhỏ có ý nghĩa thực tế là gì?",
        "options": [
          "A. Các thiết bị tiêu thụ điện (động cơ điện, máy hàn, máy cơ khí, lò sấy...) được bố trí tập trung trong một phạm vi không gian nhà xưởng hẹp của cơ sở sản xuất.",
          "B. Các phụ tải nằm rải rác ở nhiều huyện và tỉnh thành khác nhau.",
          "C. Tất cả máy móc đều cắm chung vào một ổ điện đơn duy nhất.",
          "D. Thiết bị điện chỉ hoạt động tập trung vào đúng một giờ trong ngày."
        ],
        "correct": 0,
        "explain": "Trong cơ sở sản xuất nhỏ (như xưởng may, xưởng cơ khí, xưởng chế biến nông sản), các phụ tải là máy móc thiết bị sản xuất được bố trí tập trung trong phạm vi các phân xưởng có diện tích vừa và nhỏ (SGK trang 31)."
      },
      {
        "id": "cn_b6_04",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Vì sao trong mạng điện sản xuất quy mô nhỏ, mạng điện ĐỘNG LỰC và mạng điện CHIẾU SÁNG bắt buộc phải hoạt động ĐỘC LẬP?",
        "options": [
          "A. Để tránh việc bóng đèn chiếu sáng làm nóng hỏng động cơ điện.",
          "B. Để khi xảy ra sự cố quá tải hay ngắn mạch ở máy móc làm nhảy aptomat tủ động lực, hệ thống đèn chiếu sáng vẫn có điện bình thường, giúp công nhân không bị hoảng loạn, thuận tiện thoát hiểm và xử lí sự cố an toàn.",
          "C. Để công ty điện lực dễ ghi số điện của từng bóng đèn.",
          "D. Để tiết kiệm chi phí lắp đặt dây dẫn."
        ],
        "correct": 1,
        "explain": "Tải động lực (máy móc, động cơ) thường có dòng khởi động lớn và dễ xảy ra sự cố quá tải. Tách độc lập mạng chiếu sáng giúp hệ thống chiếu sáng không bị chập chờn hay mất điện đột ngột khi tải động lực gặp sự cố, đảm bảo an toàn lao động tối đa (SGK trang 31)."
      },
      {
        "id": "cn_b6_05",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Nguồn cấp điện cho mạng điện sản xuất quy mô nhỏ thường được lấy từ đâu?",
        "options": [
          "A. Lấy trực tiếp từ đường dây siêu cao áp 500 kV đi ngang qua cổng xưởng.",
          "B. Lấy từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) qua máy biến áp hạ áp riêng hoặc chung để hạ xuống cấp 380/220 V.",
          "C. Hoàn toàn chạy bằng máy phát điện xăng mini xách tay.",
          "D. Lấy từ mạng điện 110 V của pin quang điện đồ chơi."
        ],
        "correct": 1,
        "explain": "Nguồn điện cấp cho cơ sở sản xuất quy mô nhỏ thường lấy từ đường dây trung áp 22 kV hoặc 35 kV của lưới phân phối công cộng qua trạm biến áp hạ áp (380/220 V) (SGK trang 31)."
      },
      {
        "id": "cn_b6_06",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Sơ đồ cấu trúc phân cấp chuẩn của mạng điện sản xuất quy mô nhỏ theo đúng thứ tự là:",
        "options": [
          "A. Phụ tải -> Tủ chiếu sáng -> Tủ động lực -> Trạm biến áp -> Lưới phân phối.",
          "B. Lưới điện phân phối -> Trạm biến áp hạ áp -> Tủ điện phân phối tổng (MSB) -> Tủ điện phân phối nhánh -> Tủ điện động lực / Tủ điện chiếu sáng -> Phụ tải tiêu thụ.",
          "C. Trạm biến áp -> Tủ chiếu sáng -> Tủ tổng -> Máy sản xuất.",
          "D. Tủ tổng -> Tủ động lực -> Trạm biến áp -> Phụ tải."
        ],
        "correct": 1,
        "explain": "Cấu trúc phân cấp chuẩn SGK trang 32-33: Nguồn từ lưới phân phối -> Trạm biến áp hạ áp -> Tủ phân phối tổng (MSB) -> Tủ phân phối nhánh từng phân xưởng -> Tủ động lực & Tủ chiếu sáng -> Máy móc thiết bị."
      },
      {
        "id": "cn_b6_07",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện phân phối TỔNG (MSB) trong mạng điện sản xuất quy mô nhỏ có vai trò chính là",
        "options": [
          "A. điều khiển tốc độ quay của từng quạt thông gió.",
          "B. nhận điện hạ áp (380/220 V) trực tiếp từ máy biến áp để phân chia và cấp nguồn cho các tủ điện phân phối nhánh, trang bị thiết bị đóng cắt bảo vệ tổng.",
          "C. nắn dòng xoay chiều thành một chiều nạp cho bình ắc quy.",
          "D. nâng điện áp lên 110 kV để bán lại cho lưới điện."
        ],
        "correct": 1,
        "explain": "Tủ phân phối tổng (MSB) đặt ngay sau máy biến áp hạ áp, chứa aptomat tổng dòng lớn (MCCB hoặc ACB) để bảo vệ toàn bộ mạng điện và cấp nguồn cho các tủ nhánh (SGK trang 33)."
      },
      {
        "id": "cn_b6_08",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện phân phối NHÁNH có nhiệm vụ gì trong sơ đồ mạng điện cơ sở sản xuất?",
        "options": [
          "A. Nhận điện từ tủ tổng để phân phối tiếp đến các tủ điện động lực và tủ điện chiếu sáng trong từng phân xưởng riêng biệt.",
          "B. Hạ áp từ 22 kV xuống 380 V.",
          "C. Thay thế hoàn toàn động cơ của máy sản xuất.",
          "D. Thu sét bảo vệ mái nhà xưởng."
        ],
        "correct": 0,
        "explain": "Tủ phân phối nhánh được đặt tại từng phân xưởng sản xuất, nhận điện từ tủ tổng và chia thành các nhánh cấp riêng cho tủ động lực và tủ chiếu sáng của phân xưởng đó (SGK trang 33)."
      },
      {
        "id": "cn_b6_09",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện ĐỘNG LỰC trong phân xưởng sản xuất cấp nguồn trực tiếp cho đối tượng nào?",
        "options": [
          "A. Các bóng đèn tuýp chiếu sáng hành lang và bảng hiệu quảng cáo.",
          "B. Các máy móc, thiết bị sản xuất như động cơ điện ba pha, máy gia công kim loại, máy may, máy ép, máy nén khí...",
          "C. Máy tính xách tay của nhân viên kế toán.",
          "D. Đồng hồ đeo tay của công nhân."
        ],
        "correct": 1,
        "explain": "Tủ động lực chuyên dùng cấp điện cho các máy công tác trong dây chuyền sản xuất (chủ yếu là động cơ ba pha, lò nhiệt, máy công cụ), chứa aptomat, khởi động từ và rơ le nhiệt bảo vệ (SGK trang 33)."
      },
      {
        "id": "cn_b6_10",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Quy trình an toàn bắt buộc khi thao tác ĐÓNG ĐIỆN cho một mạng điện phân xưởng sản xuất là:",
        "options": [
          "A. Đóng lần lượt TỪ NGUỒN ĐẾN TẢI: Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực / chiếu sáng -> Khởi động máy sản xuất.",
          "B. Đóng lần lượt từ tải về nguồn: Bật tất cả các máy móc trước rồi mới đóng tủ tổng.",
          "C. Đóng ngẫu nhiên bất kì aptomat nào trong xưởng trước cũng được.",
          "D. Vừa đóng aptomat tổng vừa bật máy sản xuất cùng lúc."
        ],
        "correct": 0,
        "explain": "Quy trình ĐÓNG ĐIỆN chuẩn: Đóng từ NGUỒN đến TẢI (Trạm -> Tủ tổng -> Tủ nhánh -> Tủ động lực/chiếu sáng -> Bật máy). Giúp các cấp bảo vệ sẵn sàng và kiểm soát thông số điện áp trước khi tải làm việc (SGK trang 33)."
      },
      {
        "id": "cn_b6_11",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Quy trình an toàn bắt buộc khi thao tác CẮT ĐIỆN để bảo dưỡng hoặc hết ca sản xuất là:",
        "options": [
          "A. Cắt trực tiếp cầu dao/aptomat tại tủ tổng trước tiên trong khi các máy vẫn đang chạy.",
          "B. Cắt lần lượt TỪ TẢI VỀ NGUỒN: Tắt các máy sản xuất -> Cắt tủ động lực / chiếu sáng -> Cắt tủ phân phối nhánh -> Cắt tủ phân phối tổng.",
          "C. Cắt ngẫu nhiên bất kì aptomat nào.",
          "D. Dùng kìm bấm đứt dây cáp nguồn."
        ],
        "correct": 1,
        "explain": "Quy trình CẮT ĐIỆN chuẩn: Cắt từ TẢI về NGUỒN (Tắt máy -> Cắt tủ động lực/chiếu sáng -> Cắt tủ nhánh -> Cắt tủ tổng) (SGK trang 33)."
      },
      {
        "id": "cn_b6_12",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Về mặt kĩ thuật và an toàn, VÌ SAO KHI CẮT ĐIỆN BẮT BUỘC PHẢI CẮT TỪ TẢI VỀ NGUỒN?",
        "options": [
          "A. Vì công tắc ở tải nhỏ hơn nên bấm nhẹ tay hơn.",
          "B. Vì khi các máy sản xuất đang hoạt động, dòng điện phụ tải rất lớn. Cắt tải trước để dập tắt dòng điện, tránh phát sinh HỒ QUANG ĐIỆN nguy hiểm gây nổ thiết bị, cháy tiếp điểm và gây bỏng cho người thao tác ở các tủ điện nguồn phía trên.",
          "C. Để bóng đèn chiếu sáng kịp nguội bớt.",
          "D. Vì quy định này chỉ áp dụng cho mạng điện sinh hoạt gia đình."
        ],
        "correct": 1,
        "explain": "Lí do sống còn: Khi mang tải lớn, việc mở tiếp điểm đóng cắt nguồn sẽ làm bùng phát hồ quang điện cực kì mạnh có thể làm nổ buồng dập hồ quang, cháy mặt và gây bỏng nghiêm trọng cho công nhân điện. Cắt tải trước giúp dập dòng không tải an toàn (SGK trang 33)."
      },
      {
        "id": "cn_b6_13",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Thiết bị bảo vệ quá tải và ngắn mạch được sử dụng phổ biến nhất cho động cơ ba pha trong tủ điện động lực là:",
        "options": [
          "A. Aptomat (MCB, MCCB) kết hợp với Rơ le nhiệt.",
          "B. Dây đồng quấn quanh đinh ốc.",
          "C. Công tơ điện một pha.",
          "D. Biến trở con chạy thủ công."
        ],
        "correct": 0,
        "explain": "Aptomat (MCB, MCCB) bảo vệ ngắn mạch và quá tải tức thời, còn rơ le nhiệt gắn sau khởi động từ chuyên bảo vệ quá tải lâu dài chống cháy cuộn dây động cơ (SGK trang 33)."
      },
      {
        "id": "cn_b6_14",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Một phân xưởng may công nghiệp có tổng công suất tác dụng tiêu thụ P = 160 kW, hệ số công suất cos φ = 0,8. Cần chọn máy biến áp phân phối có công suất biểu kiến định mức tối thiểu là bao nhiêu kVA?",
        "options": [
          "A. 128 kVA",
          "B. 160 kVA",
          "C. 200 kVA",
          "D. 250 kVA"
        ],
        "correct": 2,
        "explain": "Công suất biểu kiến của máy biến áp: <span class=\"math-term\">S = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">160</span><span class=\"math-frac-bottom\">0,8</span></span> = 200 kVA</span>. Do đó cần chọn máy biến áp có công suất định mức tối thiểu là 200 kVA."
      },
      {
        "id": "cn_b6_15",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Một xưởng chế biến gỗ có công suất tiêu thụ P = 80 kW, cos φ = 0,8. Nếu lắp đặt tụ bù để nâng hệ số công suất lên cos φ' = 1,0 thì công suất biểu kiến S tiêu thụ từ lưới điện giảm đi bao nhiêu kVA?",
        "options": [
          "A. Giảm 20 kVA",
          "B. Giảm 80 kVA",
          "C. Giảm 100 kVA",
          "D. Giảm 0 kVA"
        ],
        "correct": 0,
        "explain": "Ban đầu: <span class=\"math-term\">S<sub>1</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">0,8</span></span> = 100 kVA</span>. Khi nâng cos φ' = 1,0: <span class=\"math-term\">S<sub>2</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">P</span><span class=\"math-frac-bottom\">cos φ'</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">80</span><span class=\"math-frac-bottom\">1,0</span></span> = 80 kVA</span>. Công suất biểu kiến giảm: ΔS = 100 - 80 = 20 kVA (giúp giảm dòng điện trên dây cáp nguồn)."
      },
      {
        "id": "cn_b6_16",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "a. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ trong khoảng từ vài chục đến vài trăm kW.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Mạng điện sản xuất quy mô nhỏ có công suất tiêu thụ điển hình từ vài chục đến vài trăm kW (SGK trang 31).",
        "subLabel": "2a"
      },
      {
        "id": "cn_b6_17",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "b. Mạng điện động lực cấp cho các máy tiện CNC và mạng điện chiếu sáng xưởng An Phát phải được cấp nguồn từ cùng một công tắc chung để tiết kiệm tủ điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Mạng điện động lực và mạng điện chiếu sáng bắt buộc phải hoạt động độc lập để đảm bảo an toàn, khi máy móc bị sự cố nhảy aptomat thì đèn chiếu sáng vẫn sáng bình thường.",
        "subLabel": "2b"
      },
      {
        "id": "cn_b6_18",
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "c. Khi hết ca làm việc, thợ điện ngắt điện bằng cách cắt aptomat tổng ở trạm biến áp trước khi tắt các máy tiện CNC đang gia công.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Quy trình cắt điện an toàn bắt buộc phải cắt từ TẢI về NGUỒN: Tắt từng máy tiện CNC -> Cắt aptomat tủ động lực -> Cắt tủ nhánh -> Cắt tủ tổng để dập dòng phụ tải, tránh phát sinh hồ quang gây nổ và hỏng tiếp điểm ở tủ nguồn.",
        "subLabel": "2c"
      },
      {
        "id": "cn_b5_01",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy thủy điện sử dụng dạng năng lượng đầu vào nào để biến đổi thành điện năng?",
        "options": [
          "A. Nhiệt năng của than đá.",
          "B. Cơ năng (thế năng và động năng) của dòng nước chảy từ trên cao.",
          "C. Năng lượng phản ứng phân hạch hạt nhân.",
          "D. Năng lượng bức xạ mặt trời."
        ],
        "correct": 1,
        "explain": "Nhà máy thủy điện sử dụng thế năng của nước tích trữ ở hồ chứa trên cao, qua ống áp lực tạo dòng nước có động năng lớn làm quay tuabin nước, kéo máy phát điện quay để phát ra điện (SGK trang 26)."
      },
      {
        "id": "cn_b5_02",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Ưu điểm nổi bật nhất của nhà máy nhiệt điện sử dụng nhiên liệu hóa thạch (than đá, khí đốt) là gì?",
        "options": [
          "A. Hoàn toàn không phát thải khí nhà kính.",
          "B. Công suất phát điện lớn và khả năng vận hành liên tục, ổn định, không phụ thuộc vào mùa mưa hay mùa khô như thủy điện.",
          "C. Chi phí xây dựng và nhiên liệu bằng 0.",
          "D. Sử dụng nguồn tài nguyên vĩnh cửu không bao giờ cạn kiệt."
        ],
        "correct": 1,
        "explain": "Nhà máy nhiệt điện có ưu điểm lớn là công suất phát rất cao, vận hành liên tục 24/7 ổn định quanh năm, đảm bảo cấp điện nền cho hệ thống mà không bị ảnh hưởng bởi thời tiết hay hạn hán (SGK trang 27)."
      },
      {
        "id": "cn_b5_03",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhược điểm lớn nhất về mặt môi trường của các nhà máy nhiệt điện than là:",
        "options": [
          "A. Phát thải lượng lớn khí nhà kính (CO2, SO2, NOx), bụi mịn và khối lượng tro xỉ khổng lồ gây ô nhiễm đất, nước và không khí.",
          "B. Làm khô cạn các dòng sông lớn.",
          "C. Gây ra các vụ rò rỉ phóng xạ nguy hiểm.",
          "D. Tiêu diệt chim và dơi do cánh quạt quay."
        ],
        "correct": 0,
        "explain": "Đốt than phát thải lượng khí CO2 lớn gây hiệu ứng nhà kính và biến đổi khí hậu toàn cầu, kèm theo khí SO2 gây mưa axit và bãi thải tro xỉ chiếm nhiều diện tích đất (SGK trang 27)."
      },
      {
        "id": "cn_b5_04",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Trong nhà máy điện hạt nhân, năng lượng dùng để đun sôi nước tạo hơi áp suất cao quay tuabin xuất phát từ đâu?",
        "options": [
          "A. Phản ứng phân hạch hạt nhân của nhiên liệu phóng xạ (chủ yếu là Uranium-235) trong lò phản ứng.",
          "B. Đốt cháy khí hydro hóa lỏng.",
          "C. Bức xạ nhiệt của tia vũ trụ.",
          "D. Phản ứng hóa học giữa axit và bazo."
        ],
        "correct": 0,
        "explain": "Nhà máy điện hạt nhân giải phóng nhiệt năng cực lớn từ phản ứng phân hạch dây chuyền của hạt nhân Uranium trong lò phản ứng hạt nhân để tạo hơi nước quay tuabin máy phát (SGK trang 28)."
      },
      {
        "id": "cn_b5_05",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Thiết bị biến tần (Inverter) trong hệ thống điện mặt trời nối lưới có nhiệm vụ gì?",
        "options": [
          "A. Tích trữ điện năng vào pin dự phòng.",
          "B. Chuyển đổi dòng điện một chiều (DC) do các tấm pin quang điện tạo ra thành dòng điện xoay chiều (AC) đồng bộ về tần số và điện áp để cấp cho tải và hòa vào lưới điện quốc gia.",
          "C. Làm mát các tấm pin mặt trời khi trời quá nắng.",
          "D. Tự động xoay tấm pin theo hướng gió."
        ],
        "correct": 1,
        "explain": "Pin mặt trời tạo ra dòng điện một chiều (DC). Muốn cấp điện cho thiết bị xoay chiều 220V hoặc đưa lên lưới điện 50 Hz thì bắt buộc phải qua bộ biến tần (Inverter) chuyển DC thành AC (SGK trang 29)."
      },
      {
        "id": "cn_b5_06",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Hạn chế chung lớn nhất của hai nguồn năng lượng tái tạo là điện gió và điện mặt trời là gì?",
        "options": [
          "A. Phát thải quá nhiều khí CO2 độc hại.",
          "B. Phụ thuộc hoàn toàn vào điều kiện thời tiết (nắng, gió), tính bất định cao, không phát được điện vào ban đêm (điện mặt trời) hoặc lúc lặng gió.",
          "C. Giá thành thiết bị tăng gấp 100 lần mỗi năm.",
          "D. Không thể kết nối vào hệ thống lưới điện."
        ],
        "correct": 1,
        "explain": "Năng lượng gió và mặt trời có nhược điểm lớn là tính chập chờn, bất định, phụ thuộc vào thời tiết. Khi thời tiết xấu hoặc đêm xuống, công suất phát sụt giảm mạnh đòi hỏi hệ thống điện phải có nguồn điện nền bù đắp (SGK trang 29-30)."
      },
      {
        "id": "cn_b5_07",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy thủy điện lớn nhất Việt Nam và khu vực Đông Nam Á hiện nay là",
        "options": [
          "A. Thủy điện Hòa Bình",
          "B. Thủy điện Sơn La (công suất 2 400 MW)",
          "C. Thủy điện Yaly",
          "D. Thủy điện Trị An"
        ],
        "correct": 1,
        "explain": "Thủy điện Sơn La trên sông Đà với 6 tổ máy có tổng công suất 2 400 MW là nhà máy thủy điện có quy mô lớn nhất Việt Nam và Đông Nam Á."
      },
      {
        "id": "cn_b5_08",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguồn năng lượng sinh khối (Biomass) dùng để sản xuất điện năng bao gồm các nguồn vật liệu nào?",
        "options": [
          "A. Quặng sắt, bauxit và đất hiếm.",
          "B. Phụ phẩm nông nghiệp và lâm nghiệp như bã mía, trấu, rơm rạ, mùn cưa, dăm gỗ và chất thải hữu cơ.",
          "C. Dầu mỏ thô dưới đáy biển sâu.",
          "D. Than đá antraxit."
        ],
        "correct": 1,
        "explain": "Năng lượng sinh khối tận dụng các phế phụ phẩm nông nghiệp (bã mía ở các nhà máy đường, trấu, dăm gỗ) để đốt lò hơi phát điện, giúp giảm thiểu rác thải nông nghiệp và bảo vệ môi trường (SGK trang 30)."
      },
      {
        "id": "cn_b5_09",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Hiệu suất chuyển đổi quang năng thành điện năng của các tấm pin quang điện (Silicon tinh thể) thương mại phổ biến hiện nay đạt khoảng",
        "options": [
          "A. từ 15% đến 22%",
          "B. từ 85% đến 98%",
          "C. 100%",
          "D. dưới 2%"
        ],
        "correct": 0,
        "explain": "Các tấm pin mặt trời silicon thương dụng hiện nay có hiệu suất chuyển đổi quang điện trung bình trong khoảng 15% - 22%."
      },
      {
        "id": "cn_b5_10",
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Xu hướng chuyển dịch năng lượng hiện nay tại Việt Nam và trên thế giới hướng tới mục tiêu Net Zero là",
        "options": [
          "A. Xây dựng thêm thật nhiều nhà máy nhiệt điện đốt than.",
          "B. Giảm dần nhiệt điện than, tăng nhanh tỉ trọng năng lượng tái tạo (điện gió ngoài khơi, điện mặt trời, sinh khối) kết hợp hệ thống pin tích năng (BESS) và lưới điện thông minh.",
          "C. Ngừng hoàn toàn việc sử dụng điện năng.",
          "D. Chỉ sử dụng máy phát điện chạy xăng dầu tại từng hộ gia đình."
        ],
        "correct": 1,
        "explain": "Chuyển dịch năng lượng xanh: cắt giảm điện than ô nhiễm, phát triển năng lượng tái tạo sạch (gió, mặt trời, thủy điện tích năng) hướng tới mục tiêu phát thải ròng bằng 0 (Net Zero) vào năm 2050 theo cam kết của Việt Nam tại COP26."
      },
      {
        "id": "cn_b7_01",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc thành phần nào của hệ thống điện quốc gia?",
        "options": [
          "A. Lưới điện truyền tải siêu cao áp.",
          "B. Lưới điện phân phối.",
          "C. Nhà máy nhiệt điện nguồn.",
          "D. Hệ thống đập tràn thủy điện."
        ],
        "correct": 1,
        "explain": "Mạng điện hạ áp sinh hoạt là khâu cuối cùng của lưới điện phân phối, nhận điện từ trạm biến áp hạ áp để cấp điện trực tiếp cho các hộ gia đình (SGK trang 35)."
      },
      {
        "id": "cn_b7_02",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Các thông số kĩ thuật định mức tiêu chuẩn của mạng điện hạ áp sinh hoạt tại Việt Nam là:",
        "options": [
          "A. Điện áp dây U<sub>d</sub> = 380 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 50 Hz.",
          "B. Điện áp dây U<sub>d</sub> = 220 V; Điện áp pha U<sub>p</sub> = 110 V; Tần số f = 60 Hz.",
          "C. Điện áp dây U<sub>d</sub> = 500 V; Điện áp pha U<sub>p</sub> = 220 V; Tần số f = 25 Hz.",
          "D. Điện áp một chiều 12 V."
        ],
        "correct": 0,
        "explain": "Quy chuẩn Việt Nam: Mạng hạ áp sinh hoạt 3 pha 4 dây có điện áp dây U<sub>d</sub> = 380 V, điện áp pha U<sub>p</sub> = 220 V và tần số công nghiệp f = 50 Hz (SGK trang 36)."
      },
      {
        "id": "cn_b7_03",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Theo quy chuẩn kĩ thuật, mức sai số điện áp cho phép đối với mạng điện hạ áp sinh hoạt không vượt quá ngưỡng nào?",
        "options": [
          "A. ±5% so với điện áp danh định 220 V (tương ứng dải điện áp an toàn từ 209 V đến 231 V).",
          "B. ±50% (tương ứng dải từ 110 V đến 330 V).",
          "C. ±1% (chỉ dao động không quá 2 V).",
          "D. Không có quy định sai số."
        ],
        "correct": 0,
        "explain": "Mức lệch điện áp cho phép trong điều kiện vận hành bình thường là ±5% của 220 V: ΔU = 220 × 5% = 11 V, tức điện áp tại ổ cắm dao động trong ngưỡng từ 209 V đến 231 V là đạt chuẩn (SGK trang 36)."
      },
      {
        "id": "cn_b7_04",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Sơ đồ cấu trúc điển hình của mạng điện hạ áp sinh hoạt từ trạm điện đến các hộ gia đình gồm:",
        "options": [
          "A. Trạm biến áp hạ áp -> Tủ phân phối tổng -> Tủ phân phối khu vực (nhánh) -> Đường cáp trục chính ba pha -> Đường cáp rẽ nhánh một pha -> Công tơ điện hộ gia đình.",
          "B. Công tơ điện -> Trạm biến áp -> Nhà máy nhiệt điện.",
          "C. Đường dây 500 kV nối thẳng vào ổ cắm gia đình.",
          "D. Tủ tổng -> Bình ắc quy -> Bóng đèn."
        ],
        "correct": 0,
        "explain": "Cấu trúc mạng hạ áp sinh hoạt: Trạm biến áp hạ áp (380/220V) -> Tủ phân phối tổng -> Tủ phân phối nhánh cụm dân cư -> Dây trục chính 3 pha 4 dây -> Dây rẽ nhánh 1 pha 2 dây -> Công tơ điện và bảng điện trong nhà (SGK trang 35-36)."
      },
      {
        "id": "cn_b7_05",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mục đích quan trọng nhất của việc phân chia các hộ gia đình rẽ nhánh đồng đều từ ba pha A, B, C của đường trục chính là gì?",
        "options": [
          "A. Để cân bằng phụ tải giữa các pha, tránh hiện tượng lệch pha gây quá tải một pha và sụt áp trên dây trung tính.",
          "B. Để các hộ gia đình dùng chung một công tơ điện.",
          "C. Để làm đẹp cảnh quan đường phố.",
          "D. Để dòng điện pha tăng lên gấp 10 lần."
        ],
        "correct": 0,
        "explain": "Phụ tải sinh hoạt là phụ tải một pha. Phải phân bổ đều các hộ vào pha A, pha B, pha C để phụ tải ba pha cân bằng, giảm thiểu dòng điện chạy trên dây trung tính và tránh sụt áp cục bộ (SGK trang 36)."
      },
      {
        "id": "cn_b7_06",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thiết bị nào sau đây dùng để đo đếm điện năng tiêu thụ (tính bằng kilowatt giờ - kWh) của từng hộ gia đình để thanh toán tiền điện?",
        "options": [
          "A. Công tơ điện (đồng hồ điện).",
          "B. Vôn kế.",
          "C. Ampe kế kẹp.",
          "D. Tụ điện chống sét."
        ],
        "correct": 0,
        "explain": "Công tơ điện (điện tử hoặc cơ) là thiết bị đo đếm điện năng tiêu thụ A = P.t (đơn vị kWh hay 'số điện') của từng khách hàng dùng điện (SGK trang 36)."
      },
      {
        "id": "cn_b7_07",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thiết bị chống giật và chống rò điện (RCBO hoặc ELCB) trong bảng điện gia đình hoạt động dựa trên nguyên lí nào?",
        "options": [
          "A. Tự động so sánh dòng điện chạy trên dây pha và dòng điện hồi về trên dây trung tính, nếu có sự chênh lệch (dòng rò ra vỏ chạm vào người) vượt ngưỡng an toàn (thường là 30 mA) thì ngắt điện tức thì trong tích tắc.",
          "B. Đo nhiệt độ nóng lên của bóng đèn.",
          "C. Đếm số lần bật tắt công tắc trong ngày.",
          "D. Ngắt điện khi có tiếng động lớn."
        ],
        "correct": 0,
        "explain": "Aptomat chống giật (RCBO/ELCB) đo dòng rò: bình thường dòng đi trên dây pha bằng dòng về trên dây trung tính (Ipha = Itrungtinh). Khi có người bị giật hoặc rò điện ra vỏ máy xuống đất, dòng bị lệch, rơ le cảm biến từ sẽ tác động cắt mạch ngay lập tức (dưới 0,03 giây) để cứu sống người."
      },
      {
        "id": "cn_b7_08",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Dây tiếp địa bảo vệ (PE - màu vàng sọc xanh lá) trong hệ thống điện gia đình có vai trò gì?",
        "options": [
          "A. Dẫn dòng điện rò từ vỏ kim loại của thiết bị (máy giặt, tủ lạnh, bình nóng lạnh) xuống cọc đất, ngăn ngừa nguy cơ điện giật cho người sử dụng.",
          "B. Làm cho tủ lạnh làm đá nhanh hơn.",
          "C. Tăng độ sáng cho bóng đèn phòng khách.",
          "D. Dẫn sóng wifi vào trong nhà."
        ],
        "correct": 0,
        "explain": "Nối đất vỏ thiết bị kim loại (dây PE) giúp triệt tiêu điện áp rò nguy hiểm trên vỏ máy: khi có chạm vỏ, dòng rò theo dây tiếp địa có điện trở rất nhỏ truyền xuống đất làm nhảy aptomat và bảo vệ người chạm vào không bị giật."
      },
      {
        "id": "cn_b7_09",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Một hộ gia đình trong 30 ngày sử dụng bình nóng lạnh công suất 2 500 W mỗi ngày bật 1,5 giờ. Lượng điện năng tiêu thụ riêng của bình nóng lạnh trong tháng đó là",
        "options": [
          "A. 112,5 kWh",
          "B. 37,5 kWh",
          "C. 75 kWh",
          "D. 150 kWh"
        ],
        "correct": 0,
        "explain": "Đổi công suất P = 2 500 W = 2,5 kW. Tổng thời gian sử dụng trong 30 ngày: t = 30 × 1,5 = 45 giờ. Điện năng tiêu thụ: A = P × t = 2,5 × 45 = 112,5 kWh (số điện)."
      },
      {
        "id": "cn_b7_10",
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Hành vi nào sau đây vi phạm nghiêm trọng quy tắc an toàn khi sử dụng mạng điện hạ áp sinh hoạt?",
        "options": [
          "A. Rút phích cắm bình siêu tốc khi tay còn đang ướt hoặc dùng dây đồng thay thế cho dây chì của cầu chì.",
          "B. Lắp đặt aptomat chống rò 30 mA cho bình nước nóng.",
          "C. Tắt bớt các bóng đèn khi rời khỏi phòng.",
          "D. Nối dây tiếp địa cho vỏ máy giặt."
        ],
        "correct": 0,
        "explain": "Nước dẫn điện tốt nên tay ướt chạm vào phích cắm dễ bị phóng điện gây giật chết người; thay dây đồng vào cầu chì làm mất tác dụng bảo vệ quá tải, khi chập mạch dây dẫn sẽ bốc cháy gây hỏa hoạn."
      },
      {
        "id": "cn_b2_01",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Nghiên cứu, tính toán lựa chọn thiết bị điện và lập hồ sơ bản vẽ thiết kế sơ đồ mạch điện thuộc nhóm nghề nào?",
        "options": [
          "A. Lắp đặt điện.",
          "B. Thiết kế điện.",
          "C. Vận hành điện.",
          "D. Bảo dưỡng và sửa chữa điện."
        ],
        "correct": 1,
        "explain": "Nhóm nghề thiết kế điện có nhiệm vụ nghiên cứu, ứng dụng kiến thức kĩ thuật điện để tính toán lựa chọn khí cụ, thiết bị điện và lập hồ sơ bản vẽ thiết kế hệ thống điện (SGK trang 9-10)."
      },
      {
        "id": "cn_b2_02",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Chế tạo các thiết bị như máy biến áp, động cơ điện, dây cáp điện và khí cụ đóng cắt trên dây chuyền công nghiệp thuộc nhóm nghề nào?",
        "options": [
          "A. Sản xuất, chế tạo thiết bị điện.",
          "B. Vận hành điện.",
          "C. Thiết kế thời trang.",
          "D. Kinh doanh bất động sản."
        ],
        "correct": 0,
        "explain": "Nhóm nghề sản xuất, chế tạo thiết bị điện làm việc tại các nhà máy, xí nghiệp cơ điện để sản xuất các thiết bị, máy móc điện và linh kiện đạt chuẩn kiểm định (SGK trang 11)."
      },
      {
        "id": "cn_b2_03",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Thi công kéo dây, lắp đặt tủ điện và kết nối các thiết bị điện tại hiện trường công trình xây dựng theo bản vẽ thiết kế thuộc nhóm nghề nào?",
        "options": [
          "A. Lắp đặt điện.",
          "B. Nghiên cứu lí thuyết vật lí.",
          "C. Thiết kế vi mạch máy tính.",
          "D. Vận hành tổng đài điện thoại."
        ],
        "correct": 0,
        "explain": "Nhóm nghề lắp đặt điện trực tiếp làm việc tại hiện trường các công trình dân dụng và công nghiệp để thi công mạng điện và lắp đặt thiết bị đúng quy chuẩn kĩ thuật (SGK trang 12)."
      },
      {
        "id": "cn_b2_04",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Theo dõi các thông số điện áp, dòng điện, tần số và thao tác đóng cắt các thiết bị điện tại phòng điều khiển trung tâm thuộc nhóm nghề nào?",
        "options": [
          "A. Vận hành điện.",
          "B. Thiết kế điện.",
          "C. Sản xuất thiết bị.",
          "D. Môi giới việc làm."
        ],
        "correct": 0,
        "explain": "Nhóm nghề vận hành điện làm việc tại phòng điều độ, trung tâm điều khiển nhà máy điện và trạm biến áp để giám sát và duy trì mạng điện hoạt động liên tục, an toàn (SGK trang 13)."
      },
      {
        "id": "cn_b2_05",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Kiểm tra định kì, tra dầu mỡ, siết chặt các điểm tiếp xúc và phục hồi các chi tiết bị hỏng hóc thuộc nhóm nghề nào?",
        "options": [
          "A. Bảo dưỡng và sửa chữa điện.",
          "B. Thiết kế điện.",
          "C. Xây dựng cầu đường.",
          "D. Khảo sát địa chất."
        ],
        "correct": 0,
        "explain": "Bảo dưỡng nhằm ngăn ngừa nguy cơ sự cố hỏng hóc; sửa chữa nhằm phục hồi hoạt động bình thường của thiết bị khi xảy ra sự cố hư hỏng (SGK trang 14)."
      },
      {
        "id": "cn_b2_06",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Yêu cầu về phẩm chất đạo đức và kĩ năng cốt lõi của người làm việc trong ngành kĩ thuật điện là:",
        "options": [
          "A. Tuân thủ nghiêm ngặt quy trình an toàn điện, cẩn thận, tỉ mỉ, có tinh thần trách nhiệm cao và khả năng làm việc nhóm.",
          "B. Làm việc tùy tiện, tự ý thay đổi quy trình khi thấy tiện.",
          "C. Không cần trang bị đồ bảo hộ lao động.",
          "D. Chỉ cần thể lực mà không cần kiến thức chuyên môn."
        ],
        "correct": 0,
        "explain": "Ngành điện tiềm ẩn nguy hiểm cao về điện giật và cháy nổ, do đó đòi hỏi tính kỉ luật an toàn tuyệt đối, sự cẩn trọng và kiến thức kĩ thuật vững vàng (SGK trang 15)."
      },
      {
        "id": "cn_b2_07",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Để trở thành một Kĩ sư thiết kế hệ thống điện, người học cần tốt nghiệp trình độ đào tạo nào?",
        "options": [
          "A. Đại học chuyên ngành Kĩ thuật điện / Hệ thống điện.",
          "B. Sơ cấp nghề 3 tháng.",
          "C. Chỉ cần tốt nghiệp Trung học cơ sở.",
          "D. Bằng lái xe hạng C."
        ],
        "correct": 0,
        "explain": "Vị trí kĩ sư thiết kế đòi hỏi nền tảng kiến thức chuyên sâu về tính toán giải tích mạch điện, tiêu chuẩn kĩ thuật và phần mềm đồ họa chuyên dụng, yêu cầu tốt nghiệp đại học chuyên ngành (SGK trang 10)."
      },
      {
        "id": "cn_b2_08",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Sự phát triển mạnh mẽ của xe điện, hệ thống điện mặt trời mái nhà và lưới điện thông minh mang lại cơ hội gì cho nhân lực ngành kĩ thuật điện?",
        "options": [
          "A. Làm giảm nhu cầu việc làm của ngành điện.",
          "B. Mở ra rất nhiều cơ hội việc làm mới, thu nhập cao và triển vọng phát triển nghề nghiệp lâu dài.",
          "C. Khiến ngành kĩ thuật điện bị xóa bỏ hoàn toàn.",
          "D. Không có tác động gì."
        ],
        "correct": 1,
        "explain": "Xu thế chuyển đổi xanh và tự động hóa công nghiệp đòi hỏi nguồn nhân lực kĩ thuật điện chất lượng cao lớn hơn bao giờ hết (SGK trang 16)."
      },
      {
        "id": "cn_b2_09",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Dụng cụ bảo hộ lao động cá nhân bắt buộc khi kiểm tra, thao tác trên lưới điện hạ áp đang mang điện gồm:",
        "options": [
          "A. Găng tay cách điện hạ áp, ủng cách điện, mũ bảo hộ, kính bảo vệ mắt và bút thử điện đạt chuẩn kiểm định.",
          "B. Đi chân đất để tiếp đất tốt hơn.",
          "C. Đeo găng tay len ướt.",
          "D. Sử dụng tuốc nơ vít kim loại không bọc cán cách điện."
        ],
        "correct": 0,
        "explain": "Quy tắc an toàn điện đòi hỏi thợ điện phải sử dụng đầy đủ đồ cách điện chuyên dụng đã qua kiểm định định kì (găng tay cách điện, ủng, bút thử điện...) để ngăn chặn dòng điện giật truyền qua cơ thể."
      },
      {
        "id": "cn_b2_10",
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Khẩu hiệu an toàn hàng đầu được áp dụng trong mọi công việc kĩ thuật điện là gì?",
        "options": [
          "A. 'An toàn là trên hết - Cắt điện, kiểm tra không còn điện và tiếp đất trước khi thao tác'.",
          "B. 'Càng nhanh càng tốt, bỏ qua kiểm tra an toàn'.",
          "C. 'Chạm tay thử xem có giật không'.",
          "D. 'Cứ đóng điện rồi tính sau'."
        ],
        "correct": 0,
        "explain": "Nguyên tắc vàng của an toàn điện: Trước khi sửa chữa phải cắt điện, khóa aptomat gắn biển cảnh báo, dùng bút thử điện kiểm tra chắc chắn hết điện rồi mới được phép thao tác."
      },
      {
        "id": "cn_gk1_ds1d",
        "topic": "HỆ THỐNG ĐIỆN QUỐC GIA (ĐÚNG/SAI)",
        "question": "d. Đường dây 500 kV mạch 3 (Quảng Trạch - Phố Nối) khánh thành năm 2024 giúp tăng cường liên kết lưới truyền tải và an ninh năng lượng cho miền Bắc.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH VẬN HÀNH: Hệ thống truyền tải điện Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Tổng công ty Truyền tải điện Quốc gia (EVNNPT) quản lí vận hành hệ thống lưới điện truyền tải điện áp 220 kV và 500 kV liên kết các nhà máy điện nguồn với các trung tâm phụ tải lớn trên phạm vi cả nước.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Dự án 500 kV mạch 3 Quảng Trạch - Phố Nối dài 519 km khánh thành tháng 8/2024 giúp truyền tải công suất điện từ miền Trung ra miền Bắc, giải tỏa nguy cơ thiếu điện vào cao điểm nắng nóng.",
        "subLabel": "1d"
      },
      {
        "id": "cn_gk1_ds2d",
        "topic": "MẠNG ĐIỆN SẢN XUẤT NHỎ (ĐÚNG/SAI)",
        "question": "d. Trong phân xưởng An Phát, tủ điện phân phối tổng (MSB) nhận điện trực tiếp từ máy biến áp hạ áp để cấp điện cho các tủ nhánh.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH THỰC TẾ: Phân xưởng cơ khí chính xác An Phát</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Xưởng cơ khí An Phát có diện tích 800 m², trang bị 10 máy tiện CNC, 5 máy phay cơ và hệ thống đèn chiếu sáng LED phân xưởng. Nguồn điện lấy từ trạm biến áp hạ áp 22/0,4 kV riêng của công ty.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Theo sơ đồ cấu trúc phân cấp chuẩn, tủ phân phối tổng (MSB) đặt tại trạm biến áp, lấy điện từ đầu ra hạ áp của máy biến áp để chia nguồn cho các tủ nhánh.",
        "subLabel": "2d"
      },
      {
        "id": "cn_gk1_ds3a",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "a. Trong mạch điện ba pha đối xứng nối hình sao (Y), điện áp dây luôn bằng điện áp pha (U<sub>d</sub> = U<sub>p</sub>).<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: U<sub>d</sub> = √3 · U<sub>p</sub> ≈ 1,732 · U<sub>p</sub>; chỉ khi nối tam giác (Δ) thì mới có U<sub>d</sub> = U<sub>p</sub>.",
        "subLabel": "3a"
      },
      {
        "id": "cn_gk1_ds3b",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "b. Nếu đấu ba cụm lò sấy hình sao (Y) vào lưới 380/220 V thì điện áp đặt vào mỗi cụm lò sấy là 220 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Khi tải nối sao, điện áp mỗi pha tải là điện áp pha <span class=\"math-term\">U<sub>p</sub> = <span class=\"math-frac\"><span class=\"math-frac-top\">U<sub>d</sub></span><span class=\"math-frac-bottom\">√3</span></span> = <span class=\"math-frac\"><span class=\"math-frac-top\">380</span><span class=\"math-frac-bottom\">√3</span></span> ≈ 220 V</span>."
      },
      {
        "id": "cn_gk1_ds3c",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "c. Nếu ba cụm lò sấy hoàn toàn đối xứng thì dòng điện hiệu dụng chạy trong dây trung tính I<sub>o</sub> bằng 0.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Khi tải ba pha hoàn toàn đối xứng, tổng vectơ của 3 dòng điện pha bằng 0 (i<sub>A</sub> + i<sub>B</sub> + i<sub>C</sub> = 0), do đó dòng điện chạy trên dây trung tính I<sub>o</sub> = 0.",
        "subLabel": "3c"
      },
      {
        "id": "cn_gk1_ds3d",
        "topic": "MẠCH ĐIỆN 3 PHA (ĐÚNG/SAI)",
        "question": "d. Kĩ sư điện có thể lắp thêm một cầu chì ngắt mạch trên dây trung tính để bảo vệ an toàn cho hệ thống lò sấy.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH KĨ THUẬT: Đấu nối phụ tải ba pha</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một kĩ sư điện đang thực hiện đấu nối nguồn ba pha bốn dây 380/220 V cho ba cụm lò sấy điện trở đối xứng của nhà máy chế biến thực phẩm.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Tuyệt đối KHÔNG ĐƯỢC đặt cầu chì hay thiết bị đóng ngắt đơn cực trên dây trung tính, vì nếu cầu chì đứt khi phụ tải mất cân bằng sẽ làm điểm trung tính bị trôi, gây quá điện áp nghiêm trọng cháy thiết bị.",
        "subLabel": "3d"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CONGNGHE_CATEGORIES = CONGNGHE_CATEGORIES;
  window.CONGNGHE_ALL_QUESTIONS = CONGNGHE_ALL_QUESTIONS;
  window.CONGNGHE_TOPICS_DATABASE = CONGNGHE_TOPICS_DATABASE;
}
