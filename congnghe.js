// =========================================================================
// DỮ LIỆU CÔNG NGHỆ 12 - PHÂN MÔN CÔNG NGHỆ ĐIỆN - ĐIỆN TỬ (BÀI 2 ĐẾN BÀI 7)
// Bộ sách Kết nối tri thức với cuộc sống (NXB Giáo Dục Việt Nam)
// Chuẩn cấu trúc đề thi Giữa Kì 1 (GK1) theo định dạng mới Bộ GD&ĐT 2025
// =========================================================================

const CONGNGHE_CATEGORIES = [
  {
    "id": "all",
    "name": "Tất cả bài học (Bài 2 - 7)",
    "icon": "⚡"
  },
  {
    "id": "bai2",
    "name": "Bài 2: Ngành nghề kĩ thuật điện",
    "icon": "👷"
  },
  {
    "id": "bai3",
    "name": "Bài 3: Mạch xoay chiều ba pha",
    "icon": "🌀"
  },
  {
    "id": "bai4",
    "name": "Bài 4: Hệ thống điện quốc gia",
    "icon": "🗼"
  },
  {
    "id": "bai5",
    "name": "Bài 5: Sản xuất điện năng",
    "icon": "☀️"
  },
  {
    "id": "bai6",
    "name": "Bài 6: Mạng điện sản xuất nhỏ",
    "icon": "🏭"
  },
  {
    "id": "bai7",
    "name": "Bài 7: Mạng điện hạ áp sinh hoạt",
    "icon": "🏠"
  },
  {
    "id": "gk1",
    "name": "Đề thi Giữa Kì 1 (Chuẩn ma trận)",
    "icon": "🎯"
  }
];

const CONGNGHE_ALL_QUESTIONS = [
  {
    "id": 1,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Công việc nào sau đây thuộc nhóm công việc thiết kế điện?",
    "options": [
      "A. Lắp đặt đường dây và trạm biến áp ngoài hiện trường.",
      "B. Nghiên cứu, ứng dụng kiến thức kĩ thuật điện để phân tích, lựa chọn vật liệu và thiết bị điện, lập bản vẽ sơ đồ mạch điện.",
      "C. Đóng cắt và giám sát các chỉ số hoạt động của lưới điện tại phòng điều độ.",
      "D. Thay thế dầu bôi trơn và bảo dưỡng định kì máy biến áp."
    ],
    "correct": 1,
    "explain": "Thiết kế điện là việc nghiên cứu, ứng dụng các kiến thức về kĩ thuật điện và phương pháp tính toán để phân tích, thiết kế, lựa chọn vật liệu, thiết bị điện cho các hệ thống và thiết bị điện; tạo ra sản phẩm là bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật."
  },
  {
    "id": 2,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Sản phẩm chính của công việc thiết kế điện là gì?",
    "options": [
      "A. Các linh kiện điện tử và bóng đèn LED.",
      "B. Bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật mô tả hệ thống điện.",
      "C. Hệ thống cột điện và đường dây truyền tải điện.",
      "D. Điện năng cung cấp cho các hộ gia đình."
    ],
    "correct": 1,
    "explain": "Theo SGK Công nghệ 12 (KNTT trang 11), sản phẩm của công việc thiết kế điện là các bản vẽ sơ đồ mạch điện và các tài liệu kĩ thuật mô tả hệ thống điện."
  },
  {
    "id": 3,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Vị trí kĩ sư thiết kế điện đòi hỏi người lao động phải có trình độ đào tạo tối thiểu là",
    "options": [
      "A. sơ cấp nghề điện.",
      "B. trung cấp nghề kĩ thuật điện.",
      "C. cao đẳng nghề kĩ thuật điện.",
      "D. đại học ngành kĩ thuật điện."
    ],
    "correct": 3,
    "explain": "Người làm nghề thiết kế điện đối với vị trí kĩ sư phải có trình độ đại học ngành kĩ thuật điện (hoặc các chuyên ngành gần tương đương)."
  },
  {
    "id": 4,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Trong ngành sản xuất, chế tạo thiết bị điện, công việc nào sau đây do thợ sản xuất, chế tạo thực hiện?",
    "options": [
      "A. Quản lí chất lượng và kiểm soát quy trình kiểm định xuất xưởng.",
      "B. Tổ chức vận hành và tối ưu hóa dây chuyền công nghệ sản xuất.",
      "C. Thao tác các công việc cụ thể như kiểm tra linh kiện đầu vào, lắp ráp, hàn linh kiện, đóng gói bao bì sản phẩm.",
      "D. Nghiên cứu công nghệ vật liệu mới cho thiết bị điện."
    ],
    "correct": 2,
    "explain": "Thợ sản xuất, chế tạo chịu trách nhiệm thao tác các công việc cụ thể trong dây chuyền như: kiểm tra linh kiện đầu vào, lắp ráp và hàn linh kiện, đóng gói bao bì sản phẩm đạt chất lượng (SGK trang 11)."
  },
  {
    "id": 5,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Mô tả nào sau đây thể hiện đúng nhất công việc của người làm nghề lắp đặt điện?",
    "options": [
      "A. Theo dõi các thông số đồng hồ đo tại phòng điều khiển trung tâm nhà máy điện.",
      "B. Thi công, lắp đặt, kết nối đường dây điện và thiết bị điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện.",
      "C. Tính toán mô phỏng mạch điện tử bằng phần mềm chuyên dụng trên máy tính tính toán.",
      "D. Kiểm tra định kì và vệ sinh, thay dầu máy biến thế đang vận hành."
    ],
    "correct": 1,
    "explain": "Lắp đặt điện là việc thi công, lắp đặt, kết nối đường dây điện và thiết bị điện cho các hệ thống điện, công trình điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện (SGK trang 12)."
  },
  {
    "id": 6,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Mục đích chính của công việc vận hành điện là gì?",
    "options": [
      "A. Xây dựng mới hoàn toàn các cột tháp truyền tải điện 500 kV.",
      "B. Duy trì chế độ làm việc bình thường của hệ thống điện, đáp ứng các yêu cầu chất lượng, độ tin cậy và tính kinh tế.",
      "C. Thay thế toàn bộ dây dẫn điện trong khu dân cư sau mỗi tháng.",
      "D. Thiết kế các linh kiện vi mạch điện tử siêu nhỏ."
    ],
    "correct": 1,
    "explain": "Vận hành thiết bị điện là các hoạt động nhằm duy trì chế độ làm việc bình thường của hệ thống điện đáp ứng các yêu cầu chất lượng, độ tin cậy và kinh tế (SGK trang 12)."
  },
  {
    "id": 7,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Phát biểu nào sau đây phân biệt chính xác giữa hoạt động 'bảo dưỡng điện' và 'sửa chữa điện'?",
    "options": [
      "A. Bảo dưỡng tiến hành khi có sự cố hư hỏng, còn sửa chữa tiến hành định kì thường xuyên.",
      "B. Bảo dưỡng là hoạt động thường kì nhằm duy trì hệ thống hoạt động bình thường và phòng ngừa hư hỏng; sửa chữa là hoạt động phục hồi khi xảy ra sự cố.",
      "C. Bảo dưỡng do thợ điện làm, sửa chữa chỉ do kĩ sư điện làm.",
      "D. Bảo dưỡng chỉ áp dụng cho đồ gia dụng, sửa chữa áp dụng cho lưới điện quốc gia."
    ],
    "correct": 1,
    "explain": "Bảo dưỡng điện là hoạt động thường kì nhằm duy trì hệ thống điện, thiết bị điện hoạt động bình thường, tránh hỏng hóc. Sửa chữa điện là hoạt động thực hiện khi có sự cố nhằm phục hồi hệ thống trở lại trạng thái hoạt động bình thường (SGK trang 13)."
  },
  {
    "id": 8,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Vị trí việc làm kĩ sư thi công điện trong nhóm công việc lắp đặt điện có nhiệm vụ chính là",
    "options": [
      "A. trực tiếp leo trèo lắp dây dẫn trên cột điện cao áp.",
      "B. chỉ huy và giám sát thi công lắp đặt điện theo hồ sơ thiết kế.",
      "C. sản xuất vỏ tủ điện tại phân xưởng gia công cơ khí.",
      "D. sửa chữa các thiết bị gia dụng trong hộ gia đình."
    ],
    "correct": 1,
    "explain": "Trong nhóm công việc lắp đặt điện: kĩ sư thi công điện có nhiệm vụ chỉ huy và giám sát thi công lắp đặt điện; kĩ thuật viên hỗ trợ thi công và lắp đặt; thợ điện trực tiếp thực hiện lắp đặt (SGK trang 12)."
  },
  {
    "id": 9,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Nơi làm việc nào sau đây là môi trường làm việc đặc trưng của nghề vận hành điện?",
    "options": [
      "A. Phòng thiết kế đồ họa của công ty quảng cáo truyền thông.",
      "B. Phòng điều hành, quản lí điện của công ty điện lực, trạm biến áp, nhà máy điện.",
      "C. Xưởng dệt may xuất khẩu.",
      "D. Cửa hàng kinh doanh thiết bị văn phòng."
    ],
    "correct": 1,
    "explain": "Người làm nghề vận hành điện thường làm việc tại phòng điều hành, quản lí điện của các công ty điện lực, công ty chiếu sáng đô thị, bộ phận quản lí hệ thống điện trong tòa nhà, nhà máy, cơ quan (SGK trang 12)."
  },
  {
    "id": 10,
    "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
    "question": "Năng lực nào dưới đây đặc biệt quan trọng đối với người làm nghề bảo dưỡng và sửa chữa điện?",
    "options": [
      "A. Năng khiếu hội họa và sáng tác văn học.",
      "B. Khả năng tư duy logic, chẩn đoán, phát hiện lỗi hư hỏng và sử dụng thành thạo dụng cụ đo kiểm tra điện an toàn.",
      "C. Kĩ năng tiếp thị và bán hàng đa kênh.",
      "D. Kĩ năng đàm phán hợp đồng kinh tế quốc tế."
    ],
    "correct": 1,
    "explain": "Người làm nghề bảo dưỡng và sửa chữa điện cần có tư duy logic, khả năng suy luận, chẩn đoán lỗi; kĩ năng thành thạo trong sử dụng các thiết bị đo, thiết bị chẩn đoán lỗi và tuân thủ tuyệt đối quy chuẩn kĩ thuật, an toàn điện (SGK trang 13)."
  },
  {
    "id": 11,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Dòng điện xoay chiều một pha có cường độ tức thời i = Im.sin(ωt + ψ). Đại lượng Im được gọi là",
    "options": [
      "A. giá trị hiệu dụng của dòng điện.",
      "B. giá trị cực đại (biên độ) của dòng điện.",
      "C. tần số góc của dòng điện.",
      "D. pha ban đầu của dòng điện."
    ],
    "correct": 1,
    "explain": "Trong biểu thức i = Im.sin(ωt + ψ), Im là giá trị dòng điện cực đại (biên độ), đơn vị ampe (A). Giá trị hiệu dụng là I = Im / √2 (SGK trang 18)."
  },
  {
    "id": 12,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Tổng trở z_t của tải điện một pha gồm điện trở R nối tiếp với điện kháng X được tính theo công thức nào?",
    "options": [
      "A. z_t = R + X",
      "B. z_t = √(R² + X²)",
      "C. z_t = √(R² - X²)",
      "D. z_t = R² + X²"
    ],
    "correct": 1,
    "explain": "Theo SGK Công nghệ 12 trang 18: Tổng trở z_t đặc trưng bởi độ lớn z_t = √(R² + X²) và góc pha φ với tan φ = X/R."
  },
  {
    "id": 13,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có đặc điểm nào sau đây?",
    "options": [
      "A. Khác tần số, cùng biên độ, cùng pha với nhau.",
      "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc 2π/3 (120°) giữa các pha.",
      "C. Cùng tần số, biên độ khác nhau, lệch pha nhau góc 90°.",
      "D. Cùng biên độ nhưng tần số gấp ba lần nhau."
    ],
    "correct": 1,
    "explain": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có cùng tần số, cùng biên độ và có góc pha lệch nhau 120° (2π/3 rad) lần lượt giữa các pha (SGK trang 18)."
  },
  {
    "id": 14,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Phần tĩnh (Stator) của máy phát điện xoay chiều ba pha gồm",
    "options": [
      "A. một nam châm điện quay tròn quanh trục.",
      "B. ba cuộn dây giống hệt nhau đặt lệch nhau một góc 120° trên lõi thép có rãnh.",
      "C. bốn cuộn dây đặt vuông góc nhau.",
      "D. cổ góp điện và chổi than."
    ],
    "correct": 1,
    "explain": "Phần tĩnh (stator) là lõi thép có rãnh, đặt 3 cuộn dây AX, BY, CZ có cùng số vòng và kích thước dây, đặt lệch nhau góc 120° trên đường tròn không gian (SGK trang 19)."
  },
  {
    "id": 15,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Cách nối nguồn điện hoặc tải ba pha hình sao (Y) có đặc điểm là",
    "options": [
      "A. đầu pha này nối với cuối pha kia tạo thành mạch vòng kín.",
      "B. ba điểm cuối X, Y, Z của ba pha nối chung với nhau tạo thành điểm trung tính O.",
      "C. ba điểm đầu A, B, C nối chung với nhau, ba điểm cuối để tự do.",
      "D. chỉ có 2 dây pha đi ra tải tiêu thụ."
    ],
    "correct": 1,
    "explain": "Nối hình sao (Y): Ba điểm cuối X, Y, Z của các pha được nối với nhau tạo thành điểm trung tính O (SGK trang 19)."
  },
  {
    "id": 16,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Cách nối nguồn hoặc tải ba pha hình tam giác (Δ) được thực hiện như thế nào?",
    "options": [
      "A. Điểm đầu của pha này nối với điểm cuối của pha kia (A nối Z, B nối X, C nối Y) tạo thành hình tam giác khép kín.",
      "B. Ba điểm cuối nối với nhau tạo điểm trung tính O.",
      "C. Cả ba điểm đầu và ba điểm cuối đều nối chập lại.",
      "D. Nối từng pha độc lập với 6 dây dẫn riêng biệt."
    ],
    "correct": 0,
    "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này được nối với điểm cuối của pha kia tạo thành hình tam giác khép kín (SGK trang 19)."
  },
  {
    "id": 17,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Điện áp giữa hai dây pha trong mạch điện xoay chiều ba pha được gọi là",
    "options": [
      "A. điện áp pha (Up).",
      "B. điện áp dây (Ud).",
      "C. điện áp cực đại (Um).",
      "D. điện áp định mức của tải."
    ],
    "correct": 1,
    "explain": "Điện áp giữa hai dây pha gọi là điện áp dây, kí hiệu là Ud. Điện áp giữa dây pha và dây trung tính (hoặc giữa điểm đầu và cuối của một pha) gọi là điện áp pha, kí hiệu là Up (SGK trang 20)."
  },
  {
    "id": 18,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Trong mạch điện ba pha đối xứng khi tải nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up, dòng điện dây Id và dòng điện pha Ip là:",
    "options": [
      "A. Ud = Up và Id = √3.Ip",
      "B. Ud = √3.Up và Id = Ip",
      "C. Ud = √3.Up và Id = √3.Ip",
      "D. Ud = Up/√3 và Id = Ip"
    ],
    "correct": 1,
    "explain": "Khi tải nối hình sao (Y) trong mạch ba pha đối xứng: Id = Ip và Ud = √3.Up (SGK trang 20)."
  },
  {
    "id": 19,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Trong mạch điện ba pha đối xứng khi tải nối hình tam giác (Δ), mối quan hệ giữa các đại lượng dây và pha là:",
    "options": [
      "A. Ud = Up và Id = Ip",
      "B. Ud = √3.Up và Id = Ip",
      "C. Ud = Up và Id = √3.Ip",
      "D. Ud = Up/√3 và Id = √3.Ip"
    ],
    "correct": 2,
    "explain": "Khi tải nối hình tam giác (Δ) trong mạch ba pha đối xứng: Ud = Up và Id = √3.Ip (SGK trang 21)."
  },
  {
    "id": 20,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một tải ba pha đối xứng gồm 3 điện trở R = 50 Ω nối hình tam giác (Δ) vào nguồn ba pha có điện áp dây Ud = 380 V. Dòng điện pha Ip và dòng điện dây Id của mạch có giá trị lần lượt là",
    "options": [
      "A. Ip = 4,4 A; Id = 4,4 A",
      "B. Ip = 7,6 A; Id = 13,16 A",
      "C. Ip = 13,16 A; Id = 7,6 A",
      "D. Ip = 7,6 A; Id = 7,6 A"
    ],
    "correct": 1,
    "explain": "Tải nối tam giác nên Up = Ud = 380 V. Dòng điện pha: Ip = Up / R = 380 / 50 = 7,6 A. Dòng điện dây: Id = √3.Ip = √3 × 7,6 ≈ 13,16 A (Ví dụ SGK trang 21)."
  },
  {
    "id": 21,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Cho mạch ba pha tải đối xứng nối hình sao (Y) có điện áp pha Up = 220 V, tải gồm 3 điện trở R = 50 Ω. Dòng điện pha Ip, dòng điện dây Id và điện áp dây Ud lần lượt là",
    "options": [
      "A. Ip = 4,4 A; Id = 4,4 A; Ud ≈ 381 V",
      "B. Ip = 7,6 A; Id = 4,4 A; Ud = 220 V",
      "C. Ip = 4,4 A; Id = 7,6 A; Ud = 380 V",
      "D. Ip = 2,2 A; Id = 2,2 A; Ud = 127 V"
    ],
    "correct": 0,
    "explain": "Tải nối hình sao nên: Ip = Up / R = 220 / 50 = 4,4 A. Dòng điện dây Id = Ip = 4,4 A. Điện áp dây Ud = √3.Up = √3 × 220 ≈ 381 V (Bài tập 2 SGK trang 21)."
  },
  {
    "id": 22,
    "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
    "question": "Một động cơ điện ba pha có ghi 220V/380V - Δ/Y. Nếu lưới điện có điện áp dây Ud = 380 V thì phải đấu dây động cơ theo kiểu nào để hoạt động bình thường?",
    "options": [
      "A. Đấu hình tam giác (Δ).",
      "B. Đấu hình sao (Y).",
      "C. Đấu hình sao có nối đất.",
      "D. Đấu kiểu nào cũng được."
    ],
    "correct": 1,
    "explain": "Thông số ghi 220V/380V tương ứng với cách nối Δ/Y nghĩa là: điện áp đặt vào mỗi cuộn dây của động cơ chịu tối đa 220 V. Khi lưới có Ud = 380 V, nếu nối sao (Y) thì Up = Ud/√3 = 380/√3 = 220 V (vừa đúng định mức của cuộn dây)."
  },
  {
    "id": 23,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Hệ thống điện quốc gia thực hiện quá trình nào sau đây?",
    "options": [
      "A. Khai thác than, dầu mỏ và lọc dầu thành phẩm.",
      "B. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng trên quy mô toàn quốc.",
      "C. Sản xuất và lắp ráp các loại ô tô điện và xe máy điện.",
      "D. Quản lí dự báo thời tiết và thủy văn toàn quốc."
    ],
    "correct": 1,
    "explain": "Hệ thống điện quốc gia gồm nguồn điện, lưới điện và tải tiêu thụ liên kết thành hệ thống thống nhất để thực hiện quá trình sản xuất, truyền tải, phân phối và tiêu thụ điện năng (SGK trang 23)."
  },
  {
    "id": 24,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Cấu trúc chung của hệ thống điện quốc gia gồm ba thành phần chính là",
    "options": [
      "A. Trạm biến áp, công tơ điện và dây dẫn.",
      "B. Nguồn điện, lưới điện và tải tiêu thụ.",
      "C. Nhà máy nhiệt điện, nhà máy thủy điện và điện mặt trời.",
      "D. Tủ tổng, tủ nhánh và tủ động lực."
    ],
    "correct": 1,
    "explain": "Ba thành phần chính của hệ thống điện quốc gia là: Nguồn điện, Lưới điện và Tải tiêu thụ (Hình 4.2 và 4.3 SGK trang 22-23)."
  },
  {
    "id": 25,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Lưới điện truyền tải trong hệ thống điện quốc gia có cấp điện áp là",
    "options": [
      "A. dưới 1 kV.",
      "B. từ 1 kV đến 35 kV.",
      "C. từ 110 kV trở xuống.",
      "D. trên 110 kV."
    ],
    "correct": 3,
    "explain": "Lưới điện truyền tải có điện áp trên 110 kV, làm nhiệm vụ truyền tải điện năng số lượng lớn từ các nhà máy điện/trạm nguồn đến các trạm phân phối chính (SGK trang 23)."
  },
  {
    "id": 26,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Lưới điện phân phối trong hệ thống điện quốc gia có cấp điện áp là",
    "options": [
      "A. từ 110 kV trở xuống.",
      "B. trên 110 kV đến 500 kV.",
      "C. trên 220 kV.",
      "D. chỉ duy nhất cấp 220 V."
    ],
    "correct": 0,
    "explain": "Lưới điện phân phối có điện áp từ 110 kV trở xuống, có nhiệm vụ truyền tải điện năng từ trạm điện phân phối chính đến các tải tiêu thụ (SGK trang 23)."
  },
  {
    "id": 27,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Cấp điện áp siêu cao áp trong hệ thống lưới điện Việt Nam là",
    "options": [
      "A. điện áp đến 1 kV.",
      "B. điện áp trên 1 kV đến 35 kV.",
      "C. điện áp từ trên 35 kV đến 220 kV.",
      "D. điện áp trên 220 kV."
    ],
    "correct": 3,
    "explain": "Phân cấp điện áp: Hạ áp (đến 1 kV); Trung áp (trên 1 kV đến 35 kV); Cao áp (từ trên 35 kV đến 220 kV); Siêu cao áp (trên 220 kV, ví dụ đường dây 500 kV) (SGK trang 23)."
  },
  {
    "id": 28,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Đường dây truyền tải điện 500 kV Bắc - Nam mạch 1 được khánh thành và đóng điện vào thời gian nào?",
    "options": [
      "A. Ngày 5/4/1992",
      "B. Ngày 27/5/1994",
      "C. Ngày 30/4/1975",
      "D. Ngày 1/1/2000"
    ],
    "correct": 1,
    "explain": "Đường dây truyền tải điện 500 kV Bắc Nam được khởi công ngày 5/4/1992 và hoàn thành ngày 27/5/1994, dài 1487 km từ Hòa Bình đến TP. Hồ Chí Minh (SGK trang 24)."
  },
  {
    "id": 29,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Vì sao tại các nhà máy điện người ta phải sử dụng máy biến áp tăng áp trước khi đưa điện lên đường dây truyền tải đi xa?",
    "options": [
      "A. Để tăng tần số dòng điện lên cao.",
      "B. Để tăng điện áp, từ đó giảm dòng điện chạy trên dây, giúp giảm hao phí công suất toả nhiệt trên đường dây.",
      "C. Để chuyển điện xoay chiều thành một chiều.",
      "D. Để bảo vệ máy phát điện không bị sét đánh."
    ],
    "correct": 1,
    "explain": "Theo định luật Jun-Len-xơ, công suất hao phí toả nhiệt ΔP = I²R = (P²/U²cos²φ)R. Tăng điện áp U lên n lần thì hao phí giảm n² lần, giúp truyền tải công suất lớn đi xa hiệu quả và tiết kiệm tiết diện dây dẫn."
  },
  {
    "id": 30,
    "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
    "question": "Thiết bị nào trong lưới điện có chức năng chuyển đổi cấp điện áp từ thấp lên cao hoặc từ cao xuống thấp?",
    "options": [
      "A. Máy phát điện xoay chiều.",
      "B. Máy biến áp.",
      "C. Động cơ không đồng bộ ba pha.",
      "D. Aptomat khối MCCB."
    ],
    "correct": 1,
    "explain": "Trạm biến áp thực hiện chức năng chuyển đổi cấp điện áp từ điện áp thấp lên điện áp cao hoặc ngược lại thông qua các máy biến áp (SGK trang 24)."
  },
  {
    "id": 31,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Quá trình sản xuất điện năng là quá trình",
    "options": [
      "A. biến đổi điện năng thành nhiệt năng và cơ năng.",
      "B. chuyển đổi các dạng năng lượng khác trong tự nhiên thành năng lượng điện.",
      "C. truyền tải điện năng từ nhà máy đến hộ gia đình.",
      "D. lưu trữ điện năng trong tụ điện phẳng."
    ],
    "correct": 1,
    "explain": "Sản xuất điện năng là quá trình chuyển đổi các dạng năng lượng khác nhau thành năng lượng điện (SGK trang 27)."
  },
  {
    "id": 32,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
    "options": [
      "A. Than đá",
      "B. Dầu mỏ",
      "C. Năng lượng dòng nước (thủy điện)",
      "D. Khí thiên nhiên"
    ],
    "correct": 2,
    "explain": "Năng lượng dòng nước, năng lượng gió, năng lượng mặt trời, sinh khối là các nguồn năng lượng tái tạo. Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hóa thạch không tái tạo (Hình 5.2 SGK trang 26)."
  },
  {
    "id": 33,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nguyên lí hoạt động của nhà máy thủy điện là",
    "options": [
      "A. sử dụng thế năng của nước trong hồ chứa chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện.",
      "B. đốt than để đun sôi nước tạo hơi nước đẩy cánh quạt.",
      "C. sử dụng phản ứng nhiệt hạch giải phóng nhiệt lượng lớn.",
      "D. dùng ánh sáng mặt trời chiếu vào tấm silic tạo dòng electron."
    ],
    "correct": 0,
    "explain": "Nhà máy thủy điện sử dụng thế năng của nước trong hồ chứa để chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện (SGK trang 27)."
  },
  {
    "id": 34,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Một trong những nhược điểm lớn của nhà máy thủy điện là",
    "options": [
      "A. phát thải lượng lớn khí nhà kính CO2 trong quá trình vận hành.",
      "B. công suất phát điện phụ thuộc nhiều vào lượng nước tích trữ trong hồ chứa (theo mùa) và tác động làm thay đổi chế độ thủy văn, hệ sinh thái.",
      "C. chi phí vận hành hàng ngày rất cao.",
      "D. tuổi thọ công trình rất ngắn dưới 5 năm."
    ],
    "correct": 1,
    "explain": "Nhược điểm của thủy điện: Công suất phát phụ thuộc vào lưu lượng nước trong hồ chứa (hạn hán thì giảm mạnh), chi phí đầu tư ban đầu lớn, làm thay đổi cơ chế thủy văn và đa dạng sinh học (SGK trang 27)."
  },
  {
    "id": 35,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Ưu điểm nổi bật của nhà máy nhiệt điện so với nhà máy thủy điện là",
    "options": [
      "A. hoàn toàn không gây ô nhiễm môi trường.",
      "B. có thể vận hành liên tục, ổn định quanh năm mà không phụ thuộc vào điều kiện thời tiết hay mùa vụ.",
      "C. sử dụng nguồn năng lượng tái tạo vô tận.",
      "D. không tốn chi phí mua nhiên liệu vận hành."
    ],
    "correct": 1,
    "explain": "Ưu điểm của nhiệt điện là công suất phát điện lớn, chi phí đầu tư ban đầu không quá cao, xây dựng nhanh và có thể vận hành liên tục, không phụ thuộc vào thời tiết (SGK trang 28)."
  },
  {
    "id": 36,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Nhà máy điện hạt nhân chuyển hóa năng lượng từ đâu để sản xuất điện?",
    "options": [
      "A. Đốt cháy khí hidro trong bầu khí quyển.",
      "B. Năng lượng nhiệt sinh ra từ các phản ứng phân hạch hạt nhân để đun nóng nước tạo hơi nước áp suất cao quay turbine.",
      "C. Thế năng của các hạt nhân phóng xạ nặng.",
      "D. Điện trường tĩnh điện xung quanh lò phản ứng."
    ],
    "correct": 1,
    "explain": "Nhà máy điện hạt nhân sử dụng năng lượng từ phản ứng phân hạch (thường là Uranium) để đun nóng nước tạo ra hơi nước có áp suất cao làm quay turbine của máy phát điện tạo ra điện (SGK trang 28-29)."
  },
  {
    "id": 37,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Bộ phận nào trong hệ thống điện mặt trời có chức năng chuyển đổi dòng điện một chiều (DC) từ các tấm pin mặt trời thành dòng xoay chiều (AC) để cấp cho tải và hòa vào lưới điện?",
    "options": [
      "A. Tấm pin mặt trời (PV)",
      "B. Bộ biến tần (Inverter)",
      "C. Pin lưu trữ (Battery)",
      "D. Máy biến áp phân phối"
    ],
    "correct": 1,
    "explain": "Nguồn điện do tấm pin mặt trời tạo ra là dòng điện một chiều (DC), cần qua bộ điều khiển sạc và biến tần (Inverter - biến đổi DC thành AC) trước khi hòa vào lưới điện hoặc cung cấp cho các thiết bị xoay chiều (Hình 5.7 SGK trang 30)."
  },
  {
    "id": 38,
    "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
    "question": "Tại sao các hệ thống điện mặt trời và điện gió thường cần có hệ thống lưu trữ năng lượng (pin tích năng / ắc quy)?",
    "options": [
      "A. Vì công suất của chúng rất lớn, lưới điện quốc gia không thể tiếp nhận hết.",
      "B. Vì gió và ánh sáng mặt trời có tính gián đoạn, phụ thuộc vào thời tiết, ngày đêm nên cần tích trữ để cấp điện khi không đủ gió hoặc nắng.",
      "C. Để làm mát cánh quạt turbine gió và các tấm pin.",
      "D. Để tự động chuyển đổi điện áp từ cao xuống thấp."
    ],
    "correct": 1,
    "explain": "Ánh sáng mặt trời không có vào ban đêm và suy giảm vào ngày mưa, gió cũng thay đổi thất thường theo thời gian. Do đó cần hệ thống pin tích năng để lưu trữ khi phát dư thừa và xả ra cung cấp khi thiếu hụt (SGK trang 29-30)."
  },
  {
    "id": 39,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Mạng điện sản xuất quy mô nhỏ thường có công suất tiêu thụ điện năng trong khoảng",
    "options": [
      "A. dưới 1 kW.",
      "B. từ vài chục đến vài trăm kW.",
      "C. từ vài nghìn đến vài chục nghìn MW.",
      "D. trên 1 000 000 kW."
    ],
    "correct": 1,
    "explain": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới phân phối cấp cho tải (SGK trang 31)."
  },
  {
    "id": 40,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Đặc điểm nào sau đây là đặc điểm của mạng điện sản xuất quy mô nhỏ?",
    "options": [
      "A. Tải phân bố rải rác trên phạm vi hàng trăm km vuông.",
      "B. Tải phân bố tập trung, mạng điện dùng cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập.",
      "C. Toàn bộ thiết bị đều dùng điện áp 110 kV.",
      "D. Không cần thiết bị đóng cắt và bảo vệ quá tải."
    ],
    "correct": 1,
    "explain": "Mạng điện sản xuất quy mô nhỏ có các đặc điểm: tải phân bố tập trung; dùng máy biến áp riêng hoặc lấy điện từ đường hạ áp 380/220 V; mạng điện cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập (SGK trang 31)."
  },
  {
    "id": 41,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Trạm biến áp hạ áp trong mạng điện sản xuất quy mô nhỏ có nhiệm vụ gì?",
    "options": [
      "A. Tăng điện áp từ 380 V lên 500 kV để truyền tải đi xa.",
      "B. Hạ áp từ lưới điện phân phối (thường là đường trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp 380/220 V.",
      "C. Đo đếm trực tiếp công suất của từng bóng đèn trong xưởng.",
      "D. Biến đổi dòng xoay chiều thành dòng một chiều cho toàn bộ nhà máy."
    ],
    "correct": 1,
    "explain": "Trạm biến áp có vai trò hạ áp từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp (380/220 V) cấp cho cơ sở sản xuất (SGK trang 33)."
  },
  {
    "id": 42,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Tủ điện nào sau đây nhận điện trực tiếp từ máy biến áp hạ áp để phân phối cho các tủ điện nhánh của các phân xưởng?",
    "options": [
      "A. Tủ điện chiếu sáng",
      "B. Tủ điện động lực",
      "C. Tủ điện phân phối tổng",
      "D. Tủ điều khiển máy CNC"
    ],
    "correct": 2,
    "explain": "Tủ điện phân phối tổng được đặt ở trạm biến áp, lấy điện từ đường hạ áp 380/220 V của máy biến áp để phân phối cho các tủ điện phân phối nhánh ở các phân xưởng sản xuất (SGK trang 33)."
  },
  {
    "id": 43,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Tủ điện động lực trong phân xưởng sản xuất có vai trò chính là",
    "options": [
      "A. cấp nguồn cho hệ thống chiếu sáng bảo vệ hành lang.",
      "B. lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng (động cơ điện, máy hàn, máy công cụ...).",
      "C. tăng điện áp từ 220 V lên 22 kV.",
      "D. lọc sóng hài và tích trữ điện năng."
    ],
    "correct": 1,
    "explain": "Tủ điện động lực được đặt ở phân xưởng sản xuất, lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng, chứa thiết bị đóng cắt và bảo vệ quá tải, ngắn mạch (SGK trang 33)."
  },
  {
    "id": 44,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Khi thực hiện thao tác ĐÓNG ĐIỆN cho một xưởng sản xuất, quy trình an toàn chuẩn là gì?",
    "options": [
      "A. Đóng từ thiết bị tiêu thụ trước, sau đó mới đóng ngược về tủ tổng và nguồn.",
      "B. Đóng lần lượt từ nguồn đến tải (Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực/chiếu sáng -> Bật thiết bị máy móc).",
      "C. Bật tất cả các máy móc cùng lúc rồi mới đóng cầu dao nguồn.",
      "D. Đóng ngẫu nhiên bất kì công tắc nào trước cũng được."
    ],
    "correct": 1,
    "explain": "Quy trình đóng điện an toàn: Đóng lần lượt từ nguồn đến tải (Nguồn -> Tủ tổng -> Tủ nhánh -> Tủ động lực / chiếu sáng -> Tải máy móc). Mục đích là để các cấp bảo vệ sẵn sàng và tránh quá tải đột ngột (SGK trang 33)."
  },
  {
    "id": 45,
    "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
    "question": "Vì sao khi CẮT ĐIỆN xưởng sản xuất, người ta phải thực hiện theo chiều ngược lại (cắt từ phía tải trước, sau đó mới cắt dần về tủ nhánh và tủ tổng)?",
    "options": [
      "A. Để tránh tiêu tốn nhiều điện năng không cần thiết.",
      "B. Để ngắt dòng điện tải đang chạy lớn trước, tránh sinh ra hồ quang điện nguy hiểm gây cháy nổ, hư hỏng tiếp điểm tại cầu dao/aptomat phía nguồn.",
      "C. Để làm nguội dây dẫn từ từ.",
      "D. Vì tủ phân phối tổng không có khả năng ngắt dòng điện."
    ],
    "correct": 1,
    "explain": "Cắt điện từ tải về nguồn nhằm giảm dòng điện trước khi ngắt các thiết bị phía nguồn. Nếu ngắt tủ tổng khi tải đang ăn dòng cực lớn sẽ phát sinh hồ quang điện rất mạnh, có thể gây nổ tiếp điểm, phóng điện nguy hiểm cho người vận hành (SGK trang 33)."
  },
  {
    "id": 46,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc loại lưới điện nào?",
    "options": [
      "A. Lưới điện siêu cao áp.",
      "B. Lưới điện truyền tải.",
      "C. Lưới điện phân phối.",
      "D. Lưới điện cao áp trên 110 kV."
    ],
    "correct": 2,
    "explain": "Mạng điện hạ áp dùng trong sinh hoạt thuộc lưới điện phân phối, có nhiệm vụ truyền tải năng lượng điện từ trạm biến áp phân phối đến công tơ điện của các hộ gia đình (SGK trang 34)."
  },
  {
    "id": 47,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Thông số kĩ thuật điện áp định mức và tần số của mạng điện hạ áp sinh hoạt tại Việt Nam là",
    "options": [
      "A. 110 V / 60 Hz",
      "B. 380/220 V / 50 Hz",
      "C. 220 V / 60 Hz",
      "D. 500 kV / 50 Hz"
    ],
    "correct": 1,
    "explain": "Thông số kĩ thuật định mức của mạng điện hạ áp dùng trong sinh hoạt ở nước ta là: Điện áp dây/pha: 380/220 V; Tần số điện lưới: 50 Hz (SGK trang 34 & 36)."
  },
  {
    "id": 48,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Sai số điện áp cho phép đối với mạng điện hạ áp dùng trong sinh hoạt là không quá",
    "options": [
      "A. ± 1%",
      "B. ± 5%",
      "C. ± 15%",
      "D. ± 20%"
    ],
    "correct": 1,
    "explain": "Theo SGK Công nghệ 12 trang 36: Mức sai số cho phép đối với điện áp là không quá ± 5%, tần số cũng không quá ± 5% so với giá trị định mức."
  },
  {
    "id": 49,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Công suất của lưới điện hạ áp sinh hoạt thường dao động trong khoảng nào tùy thuộc quy mô khu dân cư?",
    "options": [
      "A. Từ 1 kW đến 10 kW",
      "B. Từ 50 kW đến 2 500 kW",
      "C. Từ 10 000 kW đến 50 000 kW",
      "D. Trên 100 000 kW"
    ],
    "correct": 1,
    "explain": "Công suất của lưới điện hạ áp sinh hoạt từ 50 kW đến 2 500 kW, tuỳ thuộc vào công suất của máy biến áp cấp điện cho khu dân cư đó (SGK trang 36)."
  },
  {
    "id": 50,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối khu vực (nhánh) thường là đường dây",
    "options": [
      "A. một pha hai dây.",
      "B. ba pha ba dây không có dây trung tính.",
      "C. ba pha bốn dây.",
      "D. một pha một dây."
    ],
    "correct": 2,
    "explain": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối nhánh là ba pha bốn dây (gồm 3 dây pha và 1 dây trung tính) (SGK trang 36)."
  },
  {
    "id": 51,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Đường dây nhánh nối từ tủ điện phân phối khu vực vào công tơ điện của các hộ gia đình chủ yếu là",
    "options": [
      "A. đường dây một pha hai dây (dây pha và dây trung tính).",
      "B. đường dây cáp quang.",
      "C. đường dây cao áp 22 kV.",
      "D. đường dây siêu dẫn nhiệt độ thấp."
    ],
    "correct": 0,
    "explain": "Đường dây nhánh nối từ tủ điện khu vực đến các hộ gia đình chủ yếu là các đường một pha hai dây, một số ít trường hợp có nhu cầu lớn là ba pha bốn dây (SGK trang 36)."
  },
  {
    "id": 52,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Loại aptomat nào sau đây thường được sử dụng trong tủ điện phân phối tổng tại trạm biến áp hạ áp do có khả năng đóng cắt dòng điện rất lớn?",
    "options": [
      "A. MCB (Miniature Circuit Breaker - aptomat tép)",
      "B. Cầu chì ống sứ nhỏ",
      "C. ACB (Air Circuit Breaker - máy cắt không khí)",
      "D. Công tắc xoay một cực"
    ],
    "correct": 2,
    "explain": "Trong các tủ điện phân phối: ACB (máy cắt không khí) và MCCB (aptomat khối) thường dùng cho tủ tổng do dòng định mức lớn; còn MCB (aptomat tép) thường dùng cho tủ khu vực và hộ gia đình (Hình 7.3 SGK trang 35-36)."
  },
  {
    "id": 53,
    "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
    "question": "Để đảm bảo mạng điện ba pha không bị lệch pha nghiêm trọng khi cấp điện cho các hộ gia đình, các kĩ sư thiết kế mạng điện cần phải",
    "options": [
      "A. nối tất cả các hộ gia đình vào cùng một pha duy nhất.",
      "B. phân chia các đường nhánh cấp điện cho các hộ gia đình rải đều để đảm bảo cân bằng tải giữa ba pha của nguồn.",
      "C. bắt buộc mọi gia đình phải dùng động cơ ba pha.",
      "D. không nối dây trung tính về nguồn."
    ],
    "correct": 1,
    "explain": "Các đường rẽ nhánh một pha được thiết kế chia đều cho các pha nhằm đảm bảo cân bằng tải giữa các pha của nguồn điện, giảm dòng điện chạy trong dây trung tính và ổn định điện áp (SGK trang 36)."
  },
  {
    "id": 54,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "a. Khi lò sấy nối hình tam giác, điện áp đặt trên mỗi điện trở R bằng 380 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Khi tải nối hình tam giác (Δ), điện áp pha trên tải bằng điện áp dây của nguồn: Up(tải) = Ud = 380 V.",
    "subLabel": "1a"
  },
  {
    "id": 55,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "b. Cường độ dòng điện chạy qua mỗi điện trở của lò sấy là Ip = 10 A.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Dòng điện pha của lò sấy: Ip = Up / R = 380 / 38 = 10 A.",
    "subLabel": "1b"
  },
  {
    "id": 56,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "c. Dòng điện dây cấp cho lò sấy nối hình tam giác có độ lớn bằng dòng điện pha Ip = 10 A.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Đối với tải nối hình tam giác (Δ), dòng điện dây Id = √3.Ip = √3 × 10 ≈ 17,32 A, không bằng Ip.",
    "subLabel": "1c"
  },
  {
    "id": 57,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "d. Để các bóng đèn 220V sáng bình thường, bắt buộc phải nối hệ thống đèn theo hình sao có dây trung tính vào nguồn 380/220V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Nguồn có điện áp pha Up = 220 V phù hợp với điện áp định mức của bóng đèn (220 V). Nối hình sao có dây trung tính giữ cho điện áp mỗi pha luôn ổn định ở mức 220 V ngay cả khi tải các pha không hoàn toàn bằng nhau.",
    "subLabel": "1d"
  },
  {
    "id": 58,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "a. Đường dây 500 kV Bắc - Nam thuộc lưới điện truyền tải của hệ thống điện quốc gia.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Lưới truyền tải có điện áp trên 110 kV, đường dây 500 kV thuộc cấp siêu cao áp và là trục truyền tải điện năng chính kết nối hai miền Nam - Bắc.",
    "subLabel": "2a"
  },
  {
    "id": 59,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "b. Các nhà máy nhiệt điện than như Phả Lại, Vĩnh Tân có ưu điểm là không thải khí CO2 ra môi trường.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Nhiệt điện than đốt nhiên liệu hóa thạch nên thải ra lượng khí nhà kính CO2, tro xỉ và khí SO2, NOx rất lớn gây ô nhiễm môi trường.",
    "subLabel": "2b"
  },
  {
    "id": 60,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "c. Điện mặt trời và điện gió là các nguồn năng lượng tái tạo sạch nhưng công suất phụ thuộc vào điều kiện tự nhiên.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Năng lượng mặt trời và gió là nguồn năng lượng tái tạo, vô tận và sạch; tuy nhiên nhược điểm là công suất thấp hơn nhà máy lớn và thiếu ổn định (phụ thuộc cường độ nắng và sức gió).",
    "subLabel": "2c"
  },
  {
    "id": 61,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "d. Các trạm biến áp trung gian 220/110 kV và 110/22 kV làm nhiệm vụ tăng điện áp để đưa vào các hộ sinh hoạt.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Trạm 220/110 kV và 110/22 kV là các trạm biến áp hạ áp (hạ từ 220 kV xuống 110 kV, rồi hạ tiếp xuống 22 kV trung áp). Điện sinh hoạt dùng điện áp hạ áp 220 V nên phải qua tiếp trạm hạ áp 22/0,4 kV.",
    "subLabel": "2d"
  },
  {
    "id": 62,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "a. Cơ sở chế biến này cần xây dựng một trạm biến áp hạ áp riêng để biến đổi điện áp từ 22 kV xuống 380/220 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Với công suất 150 kW và lấy nguồn trung áp 22 kV, xưởng sản xuất quy mô nhỏ cần lắp đặt một trạm biến áp hạ áp 22/0,4 kV riêng để cấp điện cho hệ thống thiết bị.",
    "subLabel": "3a"
  },
  {
    "id": 63,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "b. Tủ điện phân phối tổng của cơ sở nên được đặt trực tiếp cạnh các máy trộn thực phẩm ẩm ướt trong phân xưởng.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Tủ điện phân phối tổng thường được đặt ngay tại phòng điện của trạm biến áp, ở nơi khô ráo, an toàn, có khóa bảo vệ; không được đặt cạnh khu vực ẩm ướt dễ gây chập cháy nguy hiểm.",
    "subLabel": "3b"
  },
  {
    "id": 64,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "c. Mạng điện động lực và mạng điện chiếu sáng của phân xưởng phải được bố trí cấp nguồn độc lập từ tủ phân phối nhánh.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Theo đặc điểm của mạng điện sản xuất quy mô nhỏ (SGK trang 31): Mạng điện dùng cho các thiết bị sản xuất (động lực) và mạng điện chiếu sáng hoạt động độc lập nhằm tránh nhấp nháy đèn khi máy móc khởi động và đảm bảo ánh sáng khi sửa chữa máy.",
    "subLabel": "3c"
  },
  {
    "id": 65,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "d. Để tiết kiệm thời gian, cuối ca làm việc công nhân chỉ cần ngắt aptomat tổng ở trạm biến áp mà không cần tắt các máy sản xuất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Quy tắc an toàn nghiêm ngặt khi cắt điện là phải cắt từ tải trước (tắt máy móc -> ngắt tủ động lực/chiếu sáng -> ngắt tủ nhánh -> ngắt tủ tổng) để tránh hồ quang điện nguy hiểm và bảo vệ thiết bị.",
    "subLabel": "3d"
  },
  {
    "id": 66,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "a. Vị trí kĩ sư thiết kế điện của công ty yêu cầu người ứng tuyển phải có trình độ từ đại học trở lên chuyên ngành kĩ thuật điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Theo yêu cầu chuẩn trình độ nghề nghiệp trong SGK trang 11, vị trí kĩ sư yêu cầu trình độ đại học chuyên ngành kĩ thuật điện.",
    "subLabel": "4a"
  },
  {
    "id": 67,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "b. Thợ điện lắp đặt chỉ cần hiểu biết về an toàn điện mà không cần biết đọc hiểu sơ đồ bản vẽ kĩ thuật.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Người làm nghề lắp đặt điện bắt buộc phải có kĩ năng đọc hiểu sơ đồ thiết kế điện để lắp đặt đúng vị trí, đúng sơ đồ và đảm bảo kĩ thuật (SGK trang 12).",
    "subLabel": "4b"
  },
  {
    "id": 68,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "c. Kĩ thuật viên vận hành điện thường xuyên làm việc ngoài trời để trực tiếp đào hào chôn cáp ngầm.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "SAI. Nhóm công việc vận hành điện thường làm việc tại các phòng điều hành, trạm biến áp để theo dõi, điều khiển thông số; còn việc đào rãnh chôn cáp thuộc nhóm công việc lắp đặt điện.",
    "subLabel": "4c"
  },
  {
    "id": 69,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "d. Sự phát triển mạnh mẽ của năng lượng tái tạo và lưới điện thông minh mở ra nhiều cơ hội việc làm mới cho ngành kĩ thuật điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "ĐÚNG. Nhu cầu chuyển đổi xanh, phát triển điện gió, điện mặt trời, xe điện và lưới điện thông minh tạo ra nhu cầu nhân lực rất lớn cho ngành kĩ thuật điện trong tương lai.",
    "subLabel": "4d"
  },
  {
    "id": 70,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Một nguồn điện ba pha đối xứng có điện áp pha Up = 220 V. Giá trị của điện áp dây Ud xấp xỉ bằng bao nhiêu vôn?",
    "options": [
      "A. 127 V",
      "B. 220 V",
      "C. 380 V (hoặc 381 V)",
      "D. 440 V"
    ],
    "correct": 2,
    "explain": "Ta có công thức liên hệ giữa điện áp dây và điện áp pha của nguồn đối xứng: Ud = √3.Up = √3 × 220 ≈ 381 V (trong thực tế mạng điện quy ước là 380 V)."
  },
  {
    "id": 71,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Cho mạch điện xoay chiều một pha có R = 30 Ω, cảm kháng XL = 60 Ω, dung kháng XC = 20 Ω. Độ lớn tổng trở z_t của mạch điện là",
    "options": [
      "A. 110 Ω",
      "B. 50 Ω",
      "C. 70 Ω",
      "D. 10 Ω"
    ],
    "correct": 1,
    "explain": "Điện kháng của mạch: X = XL - XC = 60 - 20 = 40 Ω. Tổng trở: z_t = √(R² + X²) = √(30² + 40²) = 50 Ω."
  },
  {
    "id": 72,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có điện trở R = 12 Ω và cảm kháng XL = 16 Ω mỗi pha nối hình sao (Y) vào nguồn có điện áp dây Ud = 380 V. Cường độ dòng điện pha Ip chạy qua mỗi cuộn dây là",
    "options": [
      "A. 11 A",
      "B. 19 A",
      "C. 31,6 A",
      "D. 22 A"
    ],
    "correct": 0,
    "explain": "Tổng trở mỗi pha của tải: z_p = √(R² + XL²) = √(12² + 16²) = 20 Ω. Do tải nối sao: Up = Ud / √3 = 380 / √3 ≈ 220 V. Cường độ dòng điện pha: Ip = Up / z_p = 220 / 20 = 11 A."
  },
  {
    "id": 73,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Một động cơ điện ba pha nối hình tam giác (Δ) tiêu thụ dòng điện pha Ip = 15 A. Cường độ dòng điện dây Id chạy trên đường dây cấp điện cho động cơ là",
    "options": [
      "A. 15 A",
      "B. 8,66 A",
      "C. 25,98 A",
      "D. 45 A"
    ],
    "correct": 2,
    "explain": "Tải nối tam giác (Δ) đối xứng thì: Id = √3.Ip = √3 × 15 ≈ 25,98 A."
  },
  {
    "id": 74,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Một khu tập thể gồm 150 hộ gia đình, mỗi hộ tiêu thụ công suất trung bình vào giờ cao điểm là 4 kW. Cần chọn máy biến áp phân phối có công suất định mức tối thiểu là bao nhiêu kVA (giả sử hệ số công suất cosφ = 0,8)?",
    "options": [
      "A. 150 kVA",
      "B. 480 kVA",
      "C. 750 kVA",
      "D. 600 kVA"
    ],
    "correct": 2,
    "explain": "Tổng công suất tác dụng: P = 150 × 4 = 600 kW. Công suất biểu kiến của máy biến áp: S = P / cosφ = 600 / 0,8 = 750 kVA."
  },
  {
    "id": 75,
    "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
    "question": "Điện áp danh định mạng điện hạ áp sinh hoạt là 220 V. Theo quy chuẩn sai số cho phép không quá ±5%, dải điện áp thực tế tại ổ cắm trong nhà chấp nhận được là",
    "options": [
      "A. từ 200 V đến 240 V",
      "B. từ 209 V đến 231 V",
      "C. từ 215 V đến 225 V",
      "D. từ 180 V đến 260 V"
    ],
    "correct": 1,
    "explain": "Độ lệch điện áp 5%: ΔU = 220 × 5% = 11 V. Dải điện áp cho phép: U_min = 220 - 11 = 209 V; U_max = 220 + 11 = 231 V."
  }
];

const CONGNGHE_TOPICS_DATABASE = [
  {
    "id": "cn_bai2",
    "title": "Bài 2: Ngành nghề trong lĩnh vực kĩ thuật điện",
    "icon": "👷",
    "description": "5 nhóm nghề cốt lõi: Thiết kế, chế tạo, lắp đặt, vận hành, bảo dưỡng & sửa chữa",
    "questions": [
      {
        "id": 1,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Công việc nào sau đây thuộc nhóm công việc thiết kế điện?",
        "options": [
          "A. Lắp đặt đường dây và trạm biến áp ngoài hiện trường.",
          "B. Nghiên cứu, ứng dụng kiến thức kĩ thuật điện để phân tích, lựa chọn vật liệu và thiết bị điện, lập bản vẽ sơ đồ mạch điện.",
          "C. Đóng cắt và giám sát các chỉ số hoạt động của lưới điện tại phòng điều độ.",
          "D. Thay thế dầu bôi trơn và bảo dưỡng định kì máy biến áp."
        ],
        "correct": 1,
        "explain": "Thiết kế điện là việc nghiên cứu, ứng dụng các kiến thức về kĩ thuật điện và phương pháp tính toán để phân tích, thiết kế, lựa chọn vật liệu, thiết bị điện cho các hệ thống và thiết bị điện; tạo ra sản phẩm là bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật."
      },
      {
        "id": 2,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Sản phẩm chính của công việc thiết kế điện là gì?",
        "options": [
          "A. Các linh kiện điện tử và bóng đèn LED.",
          "B. Bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật mô tả hệ thống điện.",
          "C. Hệ thống cột điện và đường dây truyền tải điện.",
          "D. Điện năng cung cấp cho các hộ gia đình."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 (KNTT trang 11), sản phẩm của công việc thiết kế điện là các bản vẽ sơ đồ mạch điện và các tài liệu kĩ thuật mô tả hệ thống điện."
      },
      {
        "id": 3,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí kĩ sư thiết kế điện đòi hỏi người lao động phải có trình độ đào tạo tối thiểu là",
        "options": [
          "A. sơ cấp nghề điện.",
          "B. trung cấp nghề kĩ thuật điện.",
          "C. cao đẳng nghề kĩ thuật điện.",
          "D. đại học ngành kĩ thuật điện."
        ],
        "correct": 3,
        "explain": "Người làm nghề thiết kế điện đối với vị trí kĩ sư phải có trình độ đại học ngành kĩ thuật điện (hoặc các chuyên ngành gần tương đương)."
      },
      {
        "id": 4,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Trong ngành sản xuất, chế tạo thiết bị điện, công việc nào sau đây do thợ sản xuất, chế tạo thực hiện?",
        "options": [
          "A. Quản lí chất lượng và kiểm soát quy trình kiểm định xuất xưởng.",
          "B. Tổ chức vận hành và tối ưu hóa dây chuyền công nghệ sản xuất.",
          "C. Thao tác các công việc cụ thể như kiểm tra linh kiện đầu vào, lắp ráp, hàn linh kiện, đóng gói bao bì sản phẩm.",
          "D. Nghiên cứu công nghệ vật liệu mới cho thiết bị điện."
        ],
        "correct": 2,
        "explain": "Thợ sản xuất, chế tạo chịu trách nhiệm thao tác các công việc cụ thể trong dây chuyền như: kiểm tra linh kiện đầu vào, lắp ráp và hàn linh kiện, đóng gói bao bì sản phẩm đạt chất lượng (SGK trang 11)."
      },
      {
        "id": 5,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mô tả nào sau đây thể hiện đúng nhất công việc của người làm nghề lắp đặt điện?",
        "options": [
          "A. Theo dõi các thông số đồng hồ đo tại phòng điều khiển trung tâm nhà máy điện.",
          "B. Thi công, lắp đặt, kết nối đường dây điện và thiết bị điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện.",
          "C. Tính toán mô phỏng mạch điện tử bằng phần mềm chuyên dụng trên máy tính tính toán.",
          "D. Kiểm tra định kì và vệ sinh, thay dầu máy biến thế đang vận hành."
        ],
        "correct": 1,
        "explain": "Lắp đặt điện là việc thi công, lắp đặt, kết nối đường dây điện và thiết bị điện cho các hệ thống điện, công trình điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện (SGK trang 12)."
      },
      {
        "id": 6,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mục đích chính của công việc vận hành điện là gì?",
        "options": [
          "A. Xây dựng mới hoàn toàn các cột tháp truyền tải điện 500 kV.",
          "B. Duy trì chế độ làm việc bình thường của hệ thống điện, đáp ứng các yêu cầu chất lượng, độ tin cậy và tính kinh tế.",
          "C. Thay thế toàn bộ dây dẫn điện trong khu dân cư sau mỗi tháng.",
          "D. Thiết kế các linh kiện vi mạch điện tử siêu nhỏ."
        ],
        "correct": 1,
        "explain": "Vận hành thiết bị điện là các hoạt động nhằm duy trì chế độ làm việc bình thường của hệ thống điện đáp ứng các yêu cầu chất lượng, độ tin cậy và kinh tế (SGK trang 12)."
      },
      {
        "id": 7,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Phát biểu nào sau đây phân biệt chính xác giữa hoạt động 'bảo dưỡng điện' và 'sửa chữa điện'?",
        "options": [
          "A. Bảo dưỡng tiến hành khi có sự cố hư hỏng, còn sửa chữa tiến hành định kì thường xuyên.",
          "B. Bảo dưỡng là hoạt động thường kì nhằm duy trì hệ thống hoạt động bình thường và phòng ngừa hư hỏng; sửa chữa là hoạt động phục hồi khi xảy ra sự cố.",
          "C. Bảo dưỡng do thợ điện làm, sửa chữa chỉ do kĩ sư điện làm.",
          "D. Bảo dưỡng chỉ áp dụng cho đồ gia dụng, sửa chữa áp dụng cho lưới điện quốc gia."
        ],
        "correct": 1,
        "explain": "Bảo dưỡng điện là hoạt động thường kì nhằm duy trì hệ thống điện, thiết bị điện hoạt động bình thường, tránh hỏng hóc. Sửa chữa điện là hoạt động thực hiện khi có sự cố nhằm phục hồi hệ thống trở lại trạng thái hoạt động bình thường (SGK trang 13)."
      },
      {
        "id": 8,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí việc làm kĩ sư thi công điện trong nhóm công việc lắp đặt điện có nhiệm vụ chính là",
        "options": [
          "A. trực tiếp leo trèo lắp dây dẫn trên cột điện cao áp.",
          "B. chỉ huy và giám sát thi công lắp đặt điện theo hồ sơ thiết kế.",
          "C. sản xuất vỏ tủ điện tại phân xưởng gia công cơ khí.",
          "D. sửa chữa các thiết bị gia dụng trong hộ gia đình."
        ],
        "correct": 1,
        "explain": "Trong nhóm công việc lắp đặt điện: kĩ sư thi công điện có nhiệm vụ chỉ huy và giám sát thi công lắp đặt điện; kĩ thuật viên hỗ trợ thi công và lắp đặt; thợ điện trực tiếp thực hiện lắp đặt (SGK trang 12)."
      },
      {
        "id": 9,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Nơi làm việc nào sau đây là môi trường làm việc đặc trưng của nghề vận hành điện?",
        "options": [
          "A. Phòng thiết kế đồ họa của công ty quảng cáo truyền thông.",
          "B. Phòng điều hành, quản lí điện của công ty điện lực, trạm biến áp, nhà máy điện.",
          "C. Xưởng dệt may xuất khẩu.",
          "D. Cửa hàng kinh doanh thiết bị văn phòng."
        ],
        "correct": 1,
        "explain": "Người làm nghề vận hành điện thường làm việc tại phòng điều hành, quản lí điện của các công ty điện lực, công ty chiếu sáng đô thị, bộ phận quản lí hệ thống điện trong tòa nhà, nhà máy, cơ quan (SGK trang 12)."
      },
      {
        "id": 10,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Năng lực nào dưới đây đặc biệt quan trọng đối với người làm nghề bảo dưỡng và sửa chữa điện?",
        "options": [
          "A. Năng khiếu hội họa và sáng tác văn học.",
          "B. Khả năng tư duy logic, chẩn đoán, phát hiện lỗi hư hỏng và sử dụng thành thạo dụng cụ đo kiểm tra điện an toàn.",
          "C. Kĩ năng tiếp thị và bán hàng đa kênh.",
          "D. Kĩ năng đàm phán hợp đồng kinh tế quốc tế."
        ],
        "correct": 1,
        "explain": "Người làm nghề bảo dưỡng và sửa chữa điện cần có tư duy logic, khả năng suy luận, chẩn đoán lỗi; kĩ năng thành thạo trong sử dụng các thiết bị đo, thiết bị chẩn đoán lỗi và tuân thủ tuyệt đối quy chuẩn kĩ thuật, an toàn điện (SGK trang 13)."
      }
    ]
  },
  {
    "id": "cn_bai3",
    "title": "Bài 3: Mạch điện xoay chiều ba pha",
    "icon": "🌀",
    "description": "Cấu tạo máy phát 3 pha, nối sao (Y), tam giác (Δ), công thức tính Ud, Up, Id, Ip, z_t",
    "questions": [
      {
        "id": 11,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời i = Im.sin(ωt + ψ). Đại lượng Im được gọi là",
        "options": [
          "A. giá trị hiệu dụng của dòng điện.",
          "B. giá trị cực đại (biên độ) của dòng điện.",
          "C. tần số góc của dòng điện.",
          "D. pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức i = Im.sin(ωt + ψ), Im là giá trị dòng điện cực đại (biên độ), đơn vị ampe (A). Giá trị hiệu dụng là I = Im / √2 (SGK trang 18)."
      },
      {
        "id": 12,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z_t của tải điện một pha gồm điện trở R nối tiếp với điện kháng X được tính theo công thức nào?",
        "options": [
          "A. z_t = R + X",
          "B. z_t = √(R² + X²)",
          "C. z_t = √(R² - X²)",
          "D. z_t = R² + X²"
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 18: Tổng trở z_t đặc trưng bởi độ lớn z_t = √(R² + X²) và góc pha φ với tan φ = X/R."
      },
      {
        "id": 13,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có đặc điểm nào sau đây?",
        "options": [
          "A. Khác tần số, cùng biên độ, cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc 2π/3 (120°) giữa các pha.",
          "C. Cùng tần số, biên độ khác nhau, lệch pha nhau góc 90°.",
          "D. Cùng biên độ nhưng tần số gấp ba lần nhau."
        ],
        "correct": 1,
        "explain": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có cùng tần số, cùng biên độ và có góc pha lệch nhau 120° (2π/3 rad) lần lượt giữa các pha (SGK trang 18)."
      },
      {
        "id": 14,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Phần tĩnh (Stator) của máy phát điện xoay chiều ba pha gồm",
        "options": [
          "A. một nam châm điện quay tròn quanh trục.",
          "B. ba cuộn dây giống hệt nhau đặt lệch nhau một góc 120° trên lõi thép có rãnh.",
          "C. bốn cuộn dây đặt vuông góc nhau.",
          "D. cổ góp điện và chổi than."
        ],
        "correct": 1,
        "explain": "Phần tĩnh (stator) là lõi thép có rãnh, đặt 3 cuộn dây AX, BY, CZ có cùng số vòng và kích thước dây, đặt lệch nhau góc 120° trên đường tròn không gian (SGK trang 19)."
      },
      {
        "id": 15,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn điện hoặc tải ba pha hình sao (Y) có đặc điểm là",
        "options": [
          "A. đầu pha này nối với cuối pha kia tạo thành mạch vòng kín.",
          "B. ba điểm cuối X, Y, Z của ba pha nối chung với nhau tạo thành điểm trung tính O.",
          "C. ba điểm đầu A, B, C nối chung với nhau, ba điểm cuối để tự do.",
          "D. chỉ có 2 dây pha đi ra tải tiêu thụ."
        ],
        "correct": 1,
        "explain": "Nối hình sao (Y): Ba điểm cuối X, Y, Z của các pha được nối với nhau tạo thành điểm trung tính O (SGK trang 19)."
      },
      {
        "id": 16,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn hoặc tải ba pha hình tam giác (Δ) được thực hiện như thế nào?",
        "options": [
          "A. Điểm đầu của pha này nối với điểm cuối của pha kia (A nối Z, B nối X, C nối Y) tạo thành hình tam giác khép kín.",
          "B. Ba điểm cuối nối với nhau tạo điểm trung tính O.",
          "C. Cả ba điểm đầu và ba điểm cuối đều nối chập lại.",
          "D. Nối từng pha độc lập với 6 dây dẫn riêng biệt."
        ],
        "correct": 0,
        "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này được nối với điểm cuối của pha kia tạo thành hình tam giác khép kín (SGK trang 19)."
      },
      {
        "id": 17,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Điện áp giữa hai dây pha trong mạch điện xoay chiều ba pha được gọi là",
        "options": [
          "A. điện áp pha (Up).",
          "B. điện áp dây (Ud).",
          "C. điện áp cực đại (Um).",
          "D. điện áp định mức của tải."
        ],
        "correct": 1,
        "explain": "Điện áp giữa hai dây pha gọi là điện áp dây, kí hiệu là Ud. Điện áp giữa dây pha và dây trung tính (hoặc giữa điểm đầu và cuối của một pha) gọi là điện áp pha, kí hiệu là Up (SGK trang 20)."
      },
      {
        "id": 18,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up, dòng điện dây Id và dòng điện pha Ip là:",
        "options": [
          "A. Ud = Up và Id = √3.Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = √3.Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = Ip"
        ],
        "correct": 1,
        "explain": "Khi tải nối hình sao (Y) trong mạch ba pha đối xứng: Id = Ip và Ud = √3.Up (SGK trang 20)."
      },
      {
        "id": 19,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình tam giác (Δ), mối quan hệ giữa các đại lượng dây và pha là:",
        "options": [
          "A. Ud = Up và Id = Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = √3.Ip"
        ],
        "correct": 2,
        "explain": "Khi tải nối hình tam giác (Δ) trong mạch ba pha đối xứng: Ud = Up và Id = √3.Ip (SGK trang 21)."
      },
      {
        "id": 20,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha đối xứng gồm 3 điện trở R = 50 Ω nối hình tam giác (Δ) vào nguồn ba pha có điện áp dây Ud = 380 V. Dòng điện pha Ip và dòng điện dây Id của mạch có giá trị lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A",
          "B. Ip = 7,6 A; Id = 13,16 A",
          "C. Ip = 13,16 A; Id = 7,6 A",
          "D. Ip = 7,6 A; Id = 7,6 A"
        ],
        "correct": 1,
        "explain": "Tải nối tam giác nên Up = Ud = 380 V. Dòng điện pha: Ip = Up / R = 380 / 50 = 7,6 A. Dòng điện dây: Id = √3.Ip = √3 × 7,6 ≈ 13,16 A (Ví dụ SGK trang 21)."
      },
      {
        "id": 21,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch ba pha tải đối xứng nối hình sao (Y) có điện áp pha Up = 220 V, tải gồm 3 điện trở R = 50 Ω. Dòng điện pha Ip, dòng điện dây Id và điện áp dây Ud lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A; Ud ≈ 381 V",
          "B. Ip = 7,6 A; Id = 4,4 A; Ud = 220 V",
          "C. Ip = 4,4 A; Id = 7,6 A; Ud = 380 V",
          "D. Ip = 2,2 A; Id = 2,2 A; Ud = 127 V"
        ],
        "correct": 0,
        "explain": "Tải nối hình sao nên: Ip = Up / R = 220 / 50 = 4,4 A. Dòng điện dây Id = Ip = 4,4 A. Điện áp dây Ud = √3.Up = √3 × 220 ≈ 381 V (Bài tập 2 SGK trang 21)."
      },
      {
        "id": 22,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha có ghi 220V/380V - Δ/Y. Nếu lưới điện có điện áp dây Ud = 380 V thì phải đấu dây động cơ theo kiểu nào để hoạt động bình thường?",
        "options": [
          "A. Đấu hình tam giác (Δ).",
          "B. Đấu hình sao (Y).",
          "C. Đấu hình sao có nối đất.",
          "D. Đấu kiểu nào cũng được."
        ],
        "correct": 1,
        "explain": "Thông số ghi 220V/380V tương ứng với cách nối Δ/Y nghĩa là: điện áp đặt vào mỗi cuộn dây của động cơ chịu tối đa 220 V. Khi lưới có Ud = 380 V, nếu nối sao (Y) thì Up = Ud/√3 = 380/√3 = 220 V (vừa đúng định mức của cuộn dây)."
      },
      {
        "id": 70,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một nguồn điện ba pha đối xứng có điện áp pha Up = 220 V. Giá trị của điện áp dây Ud xấp xỉ bằng bao nhiêu vôn?",
        "options": [
          "A. 127 V",
          "B. 220 V",
          "C. 380 V (hoặc 381 V)",
          "D. 440 V"
        ],
        "correct": 2,
        "explain": "Ta có công thức liên hệ giữa điện áp dây và điện áp pha của nguồn đối xứng: Ud = √3.Up = √3 × 220 ≈ 381 V (trong thực tế mạng điện quy ước là 380 V)."
      },
      {
        "id": 71,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Cho mạch điện xoay chiều một pha có R = 30 Ω, cảm kháng XL = 60 Ω, dung kháng XC = 20 Ω. Độ lớn tổng trở z_t của mạch điện là",
        "options": [
          "A. 110 Ω",
          "B. 50 Ω",
          "C. 70 Ω",
          "D. 10 Ω"
        ],
        "correct": 1,
        "explain": "Điện kháng của mạch: X = XL - XC = 60 - 20 = 40 Ω. Tổng trở: z_t = √(R² + X²) = √(30² + 40²) = 50 Ω."
      },
      {
        "id": 72,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có điện trở R = 12 Ω và cảm kháng XL = 16 Ω mỗi pha nối hình sao (Y) vào nguồn có điện áp dây Ud = 380 V. Cường độ dòng điện pha Ip chạy qua mỗi cuộn dây là",
        "options": [
          "A. 11 A",
          "B. 19 A",
          "C. 31,6 A",
          "D. 22 A"
        ],
        "correct": 0,
        "explain": "Tổng trở mỗi pha của tải: z_p = √(R² + XL²) = √(12² + 16²) = 20 Ω. Do tải nối sao: Up = Ud / √3 = 380 / √3 ≈ 220 V. Cường độ dòng điện pha: Ip = Up / z_p = 220 / 20 = 11 A."
      },
      {
        "id": 73,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một động cơ điện ba pha nối hình tam giác (Δ) tiêu thụ dòng điện pha Ip = 15 A. Cường độ dòng điện dây Id chạy trên đường dây cấp điện cho động cơ là",
        "options": [
          "A. 15 A",
          "B. 8,66 A",
          "C. 25,98 A",
          "D. 45 A"
        ],
        "correct": 2,
        "explain": "Tải nối tam giác (Δ) đối xứng thì: Id = √3.Ip = √3 × 15 ≈ 25,98 A."
      },
      {
        "id": 74,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một khu tập thể gồm 150 hộ gia đình, mỗi hộ tiêu thụ công suất trung bình vào giờ cao điểm là 4 kW. Cần chọn máy biến áp phân phối có công suất định mức tối thiểu là bao nhiêu kVA (giả sử hệ số công suất cosφ = 0,8)?",
        "options": [
          "A. 150 kVA",
          "B. 480 kVA",
          "C. 750 kVA",
          "D. 600 kVA"
        ],
        "correct": 2,
        "explain": "Tổng công suất tác dụng: P = 150 × 4 = 600 kW. Công suất biểu kiến của máy biến áp: S = P / cosφ = 600 / 0,8 = 750 kVA."
      },
      {
        "id": 75,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Điện áp danh định mạng điện hạ áp sinh hoạt là 220 V. Theo quy chuẩn sai số cho phép không quá ±5%, dải điện áp thực tế tại ổ cắm trong nhà chấp nhận được là",
        "options": [
          "A. từ 200 V đến 240 V",
          "B. từ 209 V đến 231 V",
          "C. từ 215 V đến 225 V",
          "D. từ 180 V đến 260 V"
        ],
        "correct": 1,
        "explain": "Độ lệch điện áp 5%: ΔU = 220 × 5% = 11 V. Dải điện áp cho phép: U_min = 220 - 11 = 209 V; U_max = 220 + 11 = 231 V."
      }
    ]
  },
  {
    "id": "cn_bai4",
    "title": "Bài 4: Hệ thống điện quốc gia",
    "icon": "🗼",
    "description": "Nguồn điện, Lưới truyền tải (>110kV), Lưới phân phối (<=110kV), Đường dây 500kV Bắc - Nam",
    "questions": [
      {
        "id": 23,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện quá trình nào sau đây?",
        "options": [
          "A. Khai thác than, dầu mỏ và lọc dầu thành phẩm.",
          "B. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng trên quy mô toàn quốc.",
          "C. Sản xuất và lắp ráp các loại ô tô điện và xe máy điện.",
          "D. Quản lí dự báo thời tiết và thủy văn toàn quốc."
        ],
        "correct": 1,
        "explain": "Hệ thống điện quốc gia gồm nguồn điện, lưới điện và tải tiêu thụ liên kết thành hệ thống thống nhất để thực hiện quá trình sản xuất, truyền tải, phân phối và tiêu thụ điện năng (SGK trang 23)."
      },
      {
        "id": 24,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấu trúc chung của hệ thống điện quốc gia gồm ba thành phần chính là",
        "options": [
          "A. Trạm biến áp, công tơ điện và dây dẫn.",
          "B. Nguồn điện, lưới điện và tải tiêu thụ.",
          "C. Nhà máy nhiệt điện, nhà máy thủy điện và điện mặt trời.",
          "D. Tủ tổng, tủ nhánh và tủ động lực."
        ],
        "correct": 1,
        "explain": "Ba thành phần chính của hệ thống điện quốc gia là: Nguồn điện, Lưới điện và Tải tiêu thụ (Hình 4.2 và 4.3 SGK trang 22-23)."
      },
      {
        "id": 25,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện truyền tải trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV."
        ],
        "correct": 3,
        "explain": "Lưới điện truyền tải có điện áp trên 110 kV, làm nhiệm vụ truyền tải điện năng số lượng lớn từ các nhà máy điện/trạm nguồn đến các trạm phân phối chính (SGK trang 23)."
      },
      {
        "id": 26,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện phân phối trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống.",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có điện áp từ 110 kV trở xuống, có nhiệm vụ truyền tải điện năng từ trạm điện phân phối chính đến các tải tiêu thụ (SGK trang 23)."
      },
      {
        "id": 27,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấp điện áp siêu cao áp trong hệ thống lưới điện Việt Nam là",
        "options": [
          "A. điện áp đến 1 kV.",
          "B. điện áp trên 1 kV đến 35 kV.",
          "C. điện áp từ trên 35 kV đến 220 kV.",
          "D. điện áp trên 220 kV."
        ],
        "correct": 3,
        "explain": "Phân cấp điện áp: Hạ áp (đến 1 kV); Trung áp (trên 1 kV đến 35 kV); Cao áp (từ trên 35 kV đến 220 kV); Siêu cao áp (trên 220 kV, ví dụ đường dây 500 kV) (SGK trang 23)."
      },
      {
        "id": 28,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện 500 kV Bắc - Nam mạch 1 được khánh thành và đóng điện vào thời gian nào?",
        "options": [
          "A. Ngày 5/4/1992",
          "B. Ngày 27/5/1994",
          "C. Ngày 30/4/1975",
          "D. Ngày 1/1/2000"
        ],
        "correct": 1,
        "explain": "Đường dây truyền tải điện 500 kV Bắc Nam được khởi công ngày 5/4/1992 và hoàn thành ngày 27/5/1994, dài 1487 km từ Hòa Bình đến TP. Hồ Chí Minh (SGK trang 24)."
      },
      {
        "id": 29,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện người ta phải sử dụng máy biến áp tăng áp trước khi đưa điện lên đường dây truyền tải đi xa?",
        "options": [
          "A. Để tăng tần số dòng điện lên cao.",
          "B. Để tăng điện áp, từ đó giảm dòng điện chạy trên dây, giúp giảm hao phí công suất toả nhiệt trên đường dây.",
          "C. Để chuyển điện xoay chiều thành một chiều.",
          "D. Để bảo vệ máy phát điện không bị sét đánh."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí toả nhiệt ΔP = I²R = (P²/U²cos²φ)R. Tăng điện áp U lên n lần thì hao phí giảm n² lần, giúp truyền tải công suất lớn đi xa hiệu quả và tiết kiệm tiết diện dây dẫn."
      },
      {
        "id": 30,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thiết bị nào trong lưới điện có chức năng chuyển đổi cấp điện áp từ thấp lên cao hoặc từ cao xuống thấp?",
        "options": [
          "A. Máy phát điện xoay chiều.",
          "B. Máy biến áp.",
          "C. Động cơ không đồng bộ ba pha.",
          "D. Aptomat khối MCCB."
        ],
        "correct": 1,
        "explain": "Trạm biến áp thực hiện chức năng chuyển đổi cấp điện áp từ điện áp thấp lên điện áp cao hoặc ngược lại thông qua các máy biến áp (SGK trang 24)."
      }
    ]
  },
  {
    "id": "cn_bai5",
    "title": "Bài 5: Sản xuất điện năng",
    "icon": "☀️",
    "description": "Thủy điện, Nhiệt điện, Điện hạt nhân, Điện gió, Điện mặt trời (Ưu - Nhược điểm)",
    "questions": [
      {
        "id": 31,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Quá trình sản xuất điện năng là quá trình",
        "options": [
          "A. biến đổi điện năng thành nhiệt năng và cơ năng.",
          "B. chuyển đổi các dạng năng lượng khác trong tự nhiên thành năng lượng điện.",
          "C. truyền tải điện năng từ nhà máy đến hộ gia đình.",
          "D. lưu trữ điện năng trong tụ điện phẳng."
        ],
        "correct": 1,
        "explain": "Sản xuất điện năng là quá trình chuyển đổi các dạng năng lượng khác nhau thành năng lượng điện (SGK trang 27)."
      },
      {
        "id": 32,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
        "options": [
          "A. Than đá",
          "B. Dầu mỏ",
          "C. Năng lượng dòng nước (thủy điện)",
          "D. Khí thiên nhiên"
        ],
        "correct": 2,
        "explain": "Năng lượng dòng nước, năng lượng gió, năng lượng mặt trời, sinh khối là các nguồn năng lượng tái tạo. Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hóa thạch không tái tạo (Hình 5.2 SGK trang 26)."
      },
      {
        "id": 33,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguyên lí hoạt động của nhà máy thủy điện là",
        "options": [
          "A. sử dụng thế năng của nước trong hồ chứa chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện.",
          "B. đốt than để đun sôi nước tạo hơi nước đẩy cánh quạt.",
          "C. sử dụng phản ứng nhiệt hạch giải phóng nhiệt lượng lớn.",
          "D. dùng ánh sáng mặt trời chiếu vào tấm silic tạo dòng electron."
        ],
        "correct": 0,
        "explain": "Nhà máy thủy điện sử dụng thế năng của nước trong hồ chứa để chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện (SGK trang 27)."
      },
      {
        "id": 34,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Một trong những nhược điểm lớn của nhà máy thủy điện là",
        "options": [
          "A. phát thải lượng lớn khí nhà kính CO2 trong quá trình vận hành.",
          "B. công suất phát điện phụ thuộc nhiều vào lượng nước tích trữ trong hồ chứa (theo mùa) và tác động làm thay đổi chế độ thủy văn, hệ sinh thái.",
          "C. chi phí vận hành hàng ngày rất cao.",
          "D. tuổi thọ công trình rất ngắn dưới 5 năm."
        ],
        "correct": 1,
        "explain": "Nhược điểm của thủy điện: Công suất phát phụ thuộc vào lưu lượng nước trong hồ chứa (hạn hán thì giảm mạnh), chi phí đầu tư ban đầu lớn, làm thay đổi cơ chế thủy văn và đa dạng sinh học (SGK trang 27)."
      },
      {
        "id": 35,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Ưu điểm nổi bật của nhà máy nhiệt điện so với nhà máy thủy điện là",
        "options": [
          "A. hoàn toàn không gây ô nhiễm môi trường.",
          "B. có thể vận hành liên tục, ổn định quanh năm mà không phụ thuộc vào điều kiện thời tiết hay mùa vụ.",
          "C. sử dụng nguồn năng lượng tái tạo vô tận.",
          "D. không tốn chi phí mua nhiên liệu vận hành."
        ],
        "correct": 1,
        "explain": "Ưu điểm của nhiệt điện là công suất phát điện lớn, chi phí đầu tư ban đầu không quá cao, xây dựng nhanh và có thể vận hành liên tục, không phụ thuộc vào thời tiết (SGK trang 28)."
      },
      {
        "id": 36,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy điện hạt nhân chuyển hóa năng lượng từ đâu để sản xuất điện?",
        "options": [
          "A. Đốt cháy khí hidro trong bầu khí quyển.",
          "B. Năng lượng nhiệt sinh ra từ các phản ứng phân hạch hạt nhân để đun nóng nước tạo hơi nước áp suất cao quay turbine.",
          "C. Thế năng của các hạt nhân phóng xạ nặng.",
          "D. Điện trường tĩnh điện xung quanh lò phản ứng."
        ],
        "correct": 1,
        "explain": "Nhà máy điện hạt nhân sử dụng năng lượng từ phản ứng phân hạch (thường là Uranium) để đun nóng nước tạo ra hơi nước có áp suất cao làm quay turbine của máy phát điện tạo ra điện (SGK trang 28-29)."
      },
      {
        "id": 37,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Bộ phận nào trong hệ thống điện mặt trời có chức năng chuyển đổi dòng điện một chiều (DC) từ các tấm pin mặt trời thành dòng xoay chiều (AC) để cấp cho tải và hòa vào lưới điện?",
        "options": [
          "A. Tấm pin mặt trời (PV)",
          "B. Bộ biến tần (Inverter)",
          "C. Pin lưu trữ (Battery)",
          "D. Máy biến áp phân phối"
        ],
        "correct": 1,
        "explain": "Nguồn điện do tấm pin mặt trời tạo ra là dòng điện một chiều (DC), cần qua bộ điều khiển sạc và biến tần (Inverter - biến đổi DC thành AC) trước khi hòa vào lưới điện hoặc cung cấp cho các thiết bị xoay chiều (Hình 5.7 SGK trang 30)."
      },
      {
        "id": 38,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Tại sao các hệ thống điện mặt trời và điện gió thường cần có hệ thống lưu trữ năng lượng (pin tích năng / ắc quy)?",
        "options": [
          "A. Vì công suất của chúng rất lớn, lưới điện quốc gia không thể tiếp nhận hết.",
          "B. Vì gió và ánh sáng mặt trời có tính gián đoạn, phụ thuộc vào thời tiết, ngày đêm nên cần tích trữ để cấp điện khi không đủ gió hoặc nắng.",
          "C. Để làm mát cánh quạt turbine gió và các tấm pin.",
          "D. Để tự động chuyển đổi điện áp từ cao xuống thấp."
        ],
        "correct": 1,
        "explain": "Ánh sáng mặt trời không có vào ban đêm và suy giảm vào ngày mưa, gió cũng thay đổi thất thường theo thời gian. Do đó cần hệ thống pin tích năng để lưu trữ khi phát dư thừa và xả ra cung cấp khi thiếu hụt (SGK trang 29-30)."
      }
    ]
  },
  {
    "id": "cn_bai6",
    "title": "Bài 6: Mạng điện sản xuất quy mô nhỏ",
    "icon": "🏭",
    "description": "Trạm biến áp, Tủ tổng MSB, Tủ nhánh, Tủ động lực, Tủ chiếu sáng; Quy tắc đóng/cắt an toàn",
    "questions": [
      {
        "id": 39,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ thường có công suất tiêu thụ điện năng trong khoảng",
        "options": [
          "A. dưới 1 kW.",
          "B. từ vài chục đến vài trăm kW.",
          "C. từ vài nghìn đến vài chục nghìn MW.",
          "D. trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới phân phối cấp cho tải (SGK trang 31)."
      },
      {
        "id": 40,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Đặc điểm nào sau đây là đặc điểm của mạng điện sản xuất quy mô nhỏ?",
        "options": [
          "A. Tải phân bố rải rác trên phạm vi hàng trăm km vuông.",
          "B. Tải phân bố tập trung, mạng điện dùng cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Toàn bộ thiết bị đều dùng điện áp 110 kV.",
          "D. Không cần thiết bị đóng cắt và bảo vệ quá tải."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ có các đặc điểm: tải phân bố tập trung; dùng máy biến áp riêng hoặc lấy điện từ đường hạ áp 380/220 V; mạng điện cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập (SGK trang 31)."
      },
      {
        "id": 41,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Trạm biến áp hạ áp trong mạng điện sản xuất quy mô nhỏ có nhiệm vụ gì?",
        "options": [
          "A. Tăng điện áp từ 380 V lên 500 kV để truyền tải đi xa.",
          "B. Hạ áp từ lưới điện phân phối (thường là đường trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp 380/220 V.",
          "C. Đo đếm trực tiếp công suất của từng bóng đèn trong xưởng.",
          "D. Biến đổi dòng xoay chiều thành dòng một chiều cho toàn bộ nhà máy."
        ],
        "correct": 1,
        "explain": "Trạm biến áp có vai trò hạ áp từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp (380/220 V) cấp cho cơ sở sản xuất (SGK trang 33)."
      },
      {
        "id": 42,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện nào sau đây nhận điện trực tiếp từ máy biến áp hạ áp để phân phối cho các tủ điện nhánh của các phân xưởng?",
        "options": [
          "A. Tủ điện chiếu sáng",
          "B. Tủ điện động lực",
          "C. Tủ điện phân phối tổng",
          "D. Tủ điều khiển máy CNC"
        ],
        "correct": 2,
        "explain": "Tủ điện phân phối tổng được đặt ở trạm biến áp, lấy điện từ đường hạ áp 380/220 V của máy biến áp để phân phối cho các tủ điện phân phối nhánh ở các phân xưởng sản xuất (SGK trang 33)."
      },
      {
        "id": 43,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện động lực trong phân xưởng sản xuất có vai trò chính là",
        "options": [
          "A. cấp nguồn cho hệ thống chiếu sáng bảo vệ hành lang.",
          "B. lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng (động cơ điện, máy hàn, máy công cụ...).",
          "C. tăng điện áp từ 220 V lên 22 kV.",
          "D. lọc sóng hài và tích trữ điện năng."
        ],
        "correct": 1,
        "explain": "Tủ điện động lực được đặt ở phân xưởng sản xuất, lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng, chứa thiết bị đóng cắt và bảo vệ quá tải, ngắn mạch (SGK trang 33)."
      },
      {
        "id": 44,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Khi thực hiện thao tác ĐÓNG ĐIỆN cho một xưởng sản xuất, quy trình an toàn chuẩn là gì?",
        "options": [
          "A. Đóng từ thiết bị tiêu thụ trước, sau đó mới đóng ngược về tủ tổng và nguồn.",
          "B. Đóng lần lượt từ nguồn đến tải (Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực/chiếu sáng -> Bật thiết bị máy móc).",
          "C. Bật tất cả các máy móc cùng lúc rồi mới đóng cầu dao nguồn.",
          "D. Đóng ngẫu nhiên bất kì công tắc nào trước cũng được."
        ],
        "correct": 1,
        "explain": "Quy trình đóng điện an toàn: Đóng lần lượt từ nguồn đến tải (Nguồn -> Tủ tổng -> Tủ nhánh -> Tủ động lực / chiếu sáng -> Tải máy móc). Mục đích là để các cấp bảo vệ sẵn sàng và tránh quá tải đột ngột (SGK trang 33)."
      },
      {
        "id": 45,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Vì sao khi CẮT ĐIỆN xưởng sản xuất, người ta phải thực hiện theo chiều ngược lại (cắt từ phía tải trước, sau đó mới cắt dần về tủ nhánh và tủ tổng)?",
        "options": [
          "A. Để tránh tiêu tốn nhiều điện năng không cần thiết.",
          "B. Để ngắt dòng điện tải đang chạy lớn trước, tránh sinh ra hồ quang điện nguy hiểm gây cháy nổ, hư hỏng tiếp điểm tại cầu dao/aptomat phía nguồn.",
          "C. Để làm nguội dây dẫn từ từ.",
          "D. Vì tủ phân phối tổng không có khả năng ngắt dòng điện."
        ],
        "correct": 1,
        "explain": "Cắt điện từ tải về nguồn nhằm giảm dòng điện trước khi ngắt các thiết bị phía nguồn. Nếu ngắt tủ tổng khi tải đang ăn dòng cực lớn sẽ phát sinh hồ quang điện rất mạnh, có thể gây nổ tiếp điểm, phóng điện nguy hiểm cho người vận hành (SGK trang 33)."
      }
    ]
  },
  {
    "id": "cn_bai7",
    "title": "Bài 7: Mạng điện hạ áp dùng trong sinh hoạt",
    "icon": "🏠",
    "description": "Mạng điện gia đình 380/220V, 50Hz, dây trục 3 pha 4 dây, rẽ nhánh cân pha, thiết bị ACB, MCCB, MCB",
    "questions": [
      {
        "id": 46,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc loại lưới điện nào?",
        "options": [
          "A. Lưới điện siêu cao áp.",
          "B. Lưới điện truyền tải.",
          "C. Lưới điện phân phối.",
          "D. Lưới điện cao áp trên 110 kV."
        ],
        "correct": 2,
        "explain": "Mạng điện hạ áp dùng trong sinh hoạt thuộc lưới điện phân phối, có nhiệm vụ truyền tải năng lượng điện từ trạm biến áp phân phối đến công tơ điện của các hộ gia đình (SGK trang 34)."
      },
      {
        "id": 47,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thông số kĩ thuật điện áp định mức và tần số của mạng điện hạ áp sinh hoạt tại Việt Nam là",
        "options": [
          "A. 110 V / 60 Hz",
          "B. 380/220 V / 50 Hz",
          "C. 220 V / 60 Hz",
          "D. 500 kV / 50 Hz"
        ],
        "correct": 1,
        "explain": "Thông số kĩ thuật định mức của mạng điện hạ áp dùng trong sinh hoạt ở nước ta là: Điện áp dây/pha: 380/220 V; Tần số điện lưới: 50 Hz (SGK trang 34 & 36)."
      },
      {
        "id": 48,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Sai số điện áp cho phép đối với mạng điện hạ áp dùng trong sinh hoạt là không quá",
        "options": [
          "A. ± 1%",
          "B. ± 5%",
          "C. ± 15%",
          "D. ± 20%"
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 36: Mức sai số cho phép đối với điện áp là không quá ± 5%, tần số cũng không quá ± 5% so với giá trị định mức."
      },
      {
        "id": 49,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Công suất của lưới điện hạ áp sinh hoạt thường dao động trong khoảng nào tùy thuộc quy mô khu dân cư?",
        "options": [
          "A. Từ 1 kW đến 10 kW",
          "B. Từ 50 kW đến 2 500 kW",
          "C. Từ 10 000 kW đến 50 000 kW",
          "D. Trên 100 000 kW"
        ],
        "correct": 1,
        "explain": "Công suất của lưới điện hạ áp sinh hoạt từ 50 kW đến 2 500 kW, tuỳ thuộc vào công suất của máy biến áp cấp điện cho khu dân cư đó (SGK trang 36)."
      },
      {
        "id": 50,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối khu vực (nhánh) thường là đường dây",
        "options": [
          "A. một pha hai dây.",
          "B. ba pha ba dây không có dây trung tính.",
          "C. ba pha bốn dây.",
          "D. một pha một dây."
        ],
        "correct": 2,
        "explain": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối nhánh là ba pha bốn dây (gồm 3 dây pha và 1 dây trung tính) (SGK trang 36)."
      },
      {
        "id": 51,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Đường dây nhánh nối từ tủ điện phân phối khu vực vào công tơ điện của các hộ gia đình chủ yếu là",
        "options": [
          "A. đường dây một pha hai dây (dây pha và dây trung tính).",
          "B. đường dây cáp quang.",
          "C. đường dây cao áp 22 kV.",
          "D. đường dây siêu dẫn nhiệt độ thấp."
        ],
        "correct": 0,
        "explain": "Đường dây nhánh nối từ tủ điện khu vực đến các hộ gia đình chủ yếu là các đường một pha hai dây, một số ít trường hợp có nhu cầu lớn là ba pha bốn dây (SGK trang 36)."
      },
      {
        "id": 52,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Loại aptomat nào sau đây thường được sử dụng trong tủ điện phân phối tổng tại trạm biến áp hạ áp do có khả năng đóng cắt dòng điện rất lớn?",
        "options": [
          "A. MCB (Miniature Circuit Breaker - aptomat tép)",
          "B. Cầu chì ống sứ nhỏ",
          "C. ACB (Air Circuit Breaker - máy cắt không khí)",
          "D. Công tắc xoay một cực"
        ],
        "correct": 2,
        "explain": "Trong các tủ điện phân phối: ACB (máy cắt không khí) và MCCB (aptomat khối) thường dùng cho tủ tổng do dòng định mức lớn; còn MCB (aptomat tép) thường dùng cho tủ khu vực và hộ gia đình (Hình 7.3 SGK trang 35-36)."
      },
      {
        "id": 53,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Để đảm bảo mạng điện ba pha không bị lệch pha nghiêm trọng khi cấp điện cho các hộ gia đình, các kĩ sư thiết kế mạng điện cần phải",
        "options": [
          "A. nối tất cả các hộ gia đình vào cùng một pha duy nhất.",
          "B. phân chia các đường nhánh cấp điện cho các hộ gia đình rải đều để đảm bảo cân bằng tải giữa ba pha của nguồn.",
          "C. bắt buộc mọi gia đình phải dùng động cơ ba pha.",
          "D. không nối dây trung tính về nguồn."
        ],
        "correct": 1,
        "explain": "Các đường rẽ nhánh một pha được thiết kế chia đều cho các pha nhằm đảm bảo cân bằng tải giữa các pha của nguồn điện, giảm dòng điện chạy trong dây trung tính và ổn định điện áp (SGK trang 36)."
      }
    ]
  },
  {
    "id": "cn_gk1",
    "title": "🎯 Đề Thi Thử Giữa Kì 1 Công Nghệ 12 (Chuẩn Ma Trận)",
    "icon": "🎯",
    "description": "Trắc nghiệm nhiều lựa chọn + Trắc nghiệm Đúng/Sai 4 ý có ngữ liệu + Tính toán mạch điện",
    "questions": [
      {
        "id": 1,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Công việc nào sau đây thuộc nhóm công việc thiết kế điện?",
        "options": [
          "A. Lắp đặt đường dây và trạm biến áp ngoài hiện trường.",
          "B. Nghiên cứu, ứng dụng kiến thức kĩ thuật điện để phân tích, lựa chọn vật liệu và thiết bị điện, lập bản vẽ sơ đồ mạch điện.",
          "C. Đóng cắt và giám sát các chỉ số hoạt động của lưới điện tại phòng điều độ.",
          "D. Thay thế dầu bôi trơn và bảo dưỡng định kì máy biến áp."
        ],
        "correct": 1,
        "explain": "Thiết kế điện là việc nghiên cứu, ứng dụng các kiến thức về kĩ thuật điện và phương pháp tính toán để phân tích, thiết kế, lựa chọn vật liệu, thiết bị điện cho các hệ thống và thiết bị điện; tạo ra sản phẩm là bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật."
      },
      {
        "id": 2,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Sản phẩm chính của công việc thiết kế điện là gì?",
        "options": [
          "A. Các linh kiện điện tử và bóng đèn LED.",
          "B. Bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật mô tả hệ thống điện.",
          "C. Hệ thống cột điện và đường dây truyền tải điện.",
          "D. Điện năng cung cấp cho các hộ gia đình."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 (KNTT trang 11), sản phẩm của công việc thiết kế điện là các bản vẽ sơ đồ mạch điện và các tài liệu kĩ thuật mô tả hệ thống điện."
      },
      {
        "id": 3,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí kĩ sư thiết kế điện đòi hỏi người lao động phải có trình độ đào tạo tối thiểu là",
        "options": [
          "A. sơ cấp nghề điện.",
          "B. trung cấp nghề kĩ thuật điện.",
          "C. cao đẳng nghề kĩ thuật điện.",
          "D. đại học ngành kĩ thuật điện."
        ],
        "correct": 3,
        "explain": "Người làm nghề thiết kế điện đối với vị trí kĩ sư phải có trình độ đại học ngành kĩ thuật điện (hoặc các chuyên ngành gần tương đương)."
      },
      {
        "id": 4,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Trong ngành sản xuất, chế tạo thiết bị điện, công việc nào sau đây do thợ sản xuất, chế tạo thực hiện?",
        "options": [
          "A. Quản lí chất lượng và kiểm soát quy trình kiểm định xuất xưởng.",
          "B. Tổ chức vận hành và tối ưu hóa dây chuyền công nghệ sản xuất.",
          "C. Thao tác các công việc cụ thể như kiểm tra linh kiện đầu vào, lắp ráp, hàn linh kiện, đóng gói bao bì sản phẩm.",
          "D. Nghiên cứu công nghệ vật liệu mới cho thiết bị điện."
        ],
        "correct": 2,
        "explain": "Thợ sản xuất, chế tạo chịu trách nhiệm thao tác các công việc cụ thể trong dây chuyền như: kiểm tra linh kiện đầu vào, lắp ráp và hàn linh kiện, đóng gói bao bì sản phẩm đạt chất lượng (SGK trang 11)."
      },
      {
        "id": 5,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mô tả nào sau đây thể hiện đúng nhất công việc của người làm nghề lắp đặt điện?",
        "options": [
          "A. Theo dõi các thông số đồng hồ đo tại phòng điều khiển trung tâm nhà máy điện.",
          "B. Thi công, lắp đặt, kết nối đường dây điện và thiết bị điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện.",
          "C. Tính toán mô phỏng mạch điện tử bằng phần mềm chuyên dụng trên máy tính tính toán.",
          "D. Kiểm tra định kì và vệ sinh, thay dầu máy biến thế đang vận hành."
        ],
        "correct": 1,
        "explain": "Lắp đặt điện là việc thi công, lắp đặt, kết nối đường dây điện và thiết bị điện cho các hệ thống điện, công trình điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện (SGK trang 12)."
      },
      {
        "id": 6,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mục đích chính của công việc vận hành điện là gì?",
        "options": [
          "A. Xây dựng mới hoàn toàn các cột tháp truyền tải điện 500 kV.",
          "B. Duy trì chế độ làm việc bình thường của hệ thống điện, đáp ứng các yêu cầu chất lượng, độ tin cậy và tính kinh tế.",
          "C. Thay thế toàn bộ dây dẫn điện trong khu dân cư sau mỗi tháng.",
          "D. Thiết kế các linh kiện vi mạch điện tử siêu nhỏ."
        ],
        "correct": 1,
        "explain": "Vận hành thiết bị điện là các hoạt động nhằm duy trì chế độ làm việc bình thường của hệ thống điện đáp ứng các yêu cầu chất lượng, độ tin cậy và kinh tế (SGK trang 12)."
      },
      {
        "id": 7,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Phát biểu nào sau đây phân biệt chính xác giữa hoạt động 'bảo dưỡng điện' và 'sửa chữa điện'?",
        "options": [
          "A. Bảo dưỡng tiến hành khi có sự cố hư hỏng, còn sửa chữa tiến hành định kì thường xuyên.",
          "B. Bảo dưỡng là hoạt động thường kì nhằm duy trì hệ thống hoạt động bình thường và phòng ngừa hư hỏng; sửa chữa là hoạt động phục hồi khi xảy ra sự cố.",
          "C. Bảo dưỡng do thợ điện làm, sửa chữa chỉ do kĩ sư điện làm.",
          "D. Bảo dưỡng chỉ áp dụng cho đồ gia dụng, sửa chữa áp dụng cho lưới điện quốc gia."
        ],
        "correct": 1,
        "explain": "Bảo dưỡng điện là hoạt động thường kì nhằm duy trì hệ thống điện, thiết bị điện hoạt động bình thường, tránh hỏng hóc. Sửa chữa điện là hoạt động thực hiện khi có sự cố nhằm phục hồi hệ thống trở lại trạng thái hoạt động bình thường (SGK trang 13)."
      },
      {
        "id": 8,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí việc làm kĩ sư thi công điện trong nhóm công việc lắp đặt điện có nhiệm vụ chính là",
        "options": [
          "A. trực tiếp leo trèo lắp dây dẫn trên cột điện cao áp.",
          "B. chỉ huy và giám sát thi công lắp đặt điện theo hồ sơ thiết kế.",
          "C. sản xuất vỏ tủ điện tại phân xưởng gia công cơ khí.",
          "D. sửa chữa các thiết bị gia dụng trong hộ gia đình."
        ],
        "correct": 1,
        "explain": "Trong nhóm công việc lắp đặt điện: kĩ sư thi công điện có nhiệm vụ chỉ huy và giám sát thi công lắp đặt điện; kĩ thuật viên hỗ trợ thi công và lắp đặt; thợ điện trực tiếp thực hiện lắp đặt (SGK trang 12)."
      },
      {
        "id": 9,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Nơi làm việc nào sau đây là môi trường làm việc đặc trưng của nghề vận hành điện?",
        "options": [
          "A. Phòng thiết kế đồ họa của công ty quảng cáo truyền thông.",
          "B. Phòng điều hành, quản lí điện của công ty điện lực, trạm biến áp, nhà máy điện.",
          "C. Xưởng dệt may xuất khẩu.",
          "D. Cửa hàng kinh doanh thiết bị văn phòng."
        ],
        "correct": 1,
        "explain": "Người làm nghề vận hành điện thường làm việc tại phòng điều hành, quản lí điện của các công ty điện lực, công ty chiếu sáng đô thị, bộ phận quản lí hệ thống điện trong tòa nhà, nhà máy, cơ quan (SGK trang 12)."
      },
      {
        "id": 10,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Năng lực nào dưới đây đặc biệt quan trọng đối với người làm nghề bảo dưỡng và sửa chữa điện?",
        "options": [
          "A. Năng khiếu hội họa và sáng tác văn học.",
          "B. Khả năng tư duy logic, chẩn đoán, phát hiện lỗi hư hỏng và sử dụng thành thạo dụng cụ đo kiểm tra điện an toàn.",
          "C. Kĩ năng tiếp thị và bán hàng đa kênh.",
          "D. Kĩ năng đàm phán hợp đồng kinh tế quốc tế."
        ],
        "correct": 1,
        "explain": "Người làm nghề bảo dưỡng và sửa chữa điện cần có tư duy logic, khả năng suy luận, chẩn đoán lỗi; kĩ năng thành thạo trong sử dụng các thiết bị đo, thiết bị chẩn đoán lỗi và tuân thủ tuyệt đối quy chuẩn kĩ thuật, an toàn điện (SGK trang 13)."
      },
      {
        "id": 11,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời i = Im.sin(ωt + ψ). Đại lượng Im được gọi là",
        "options": [
          "A. giá trị hiệu dụng của dòng điện.",
          "B. giá trị cực đại (biên độ) của dòng điện.",
          "C. tần số góc của dòng điện.",
          "D. pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức i = Im.sin(ωt + ψ), Im là giá trị dòng điện cực đại (biên độ), đơn vị ampe (A). Giá trị hiệu dụng là I = Im / √2 (SGK trang 18)."
      },
      {
        "id": 12,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z_t của tải điện một pha gồm điện trở R nối tiếp với điện kháng X được tính theo công thức nào?",
        "options": [
          "A. z_t = R + X",
          "B. z_t = √(R² + X²)",
          "C. z_t = √(R² - X²)",
          "D. z_t = R² + X²"
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 18: Tổng trở z_t đặc trưng bởi độ lớn z_t = √(R² + X²) và góc pha φ với tan φ = X/R."
      },
      {
        "id": 13,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có đặc điểm nào sau đây?",
        "options": [
          "A. Khác tần số, cùng biên độ, cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc 2π/3 (120°) giữa các pha.",
          "C. Cùng tần số, biên độ khác nhau, lệch pha nhau góc 90°.",
          "D. Cùng biên độ nhưng tần số gấp ba lần nhau."
        ],
        "correct": 1,
        "explain": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có cùng tần số, cùng biên độ và có góc pha lệch nhau 120° (2π/3 rad) lần lượt giữa các pha (SGK trang 18)."
      },
      {
        "id": 14,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Phần tĩnh (Stator) của máy phát điện xoay chiều ba pha gồm",
        "options": [
          "A. một nam châm điện quay tròn quanh trục.",
          "B. ba cuộn dây giống hệt nhau đặt lệch nhau một góc 120° trên lõi thép có rãnh.",
          "C. bốn cuộn dây đặt vuông góc nhau.",
          "D. cổ góp điện và chổi than."
        ],
        "correct": 1,
        "explain": "Phần tĩnh (stator) là lõi thép có rãnh, đặt 3 cuộn dây AX, BY, CZ có cùng số vòng và kích thước dây, đặt lệch nhau góc 120° trên đường tròn không gian (SGK trang 19)."
      },
      {
        "id": 15,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn điện hoặc tải ba pha hình sao (Y) có đặc điểm là",
        "options": [
          "A. đầu pha này nối với cuối pha kia tạo thành mạch vòng kín.",
          "B. ba điểm cuối X, Y, Z của ba pha nối chung với nhau tạo thành điểm trung tính O.",
          "C. ba điểm đầu A, B, C nối chung với nhau, ba điểm cuối để tự do.",
          "D. chỉ có 2 dây pha đi ra tải tiêu thụ."
        ],
        "correct": 1,
        "explain": "Nối hình sao (Y): Ba điểm cuối X, Y, Z của các pha được nối với nhau tạo thành điểm trung tính O (SGK trang 19)."
      },
      {
        "id": 16,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn hoặc tải ba pha hình tam giác (Δ) được thực hiện như thế nào?",
        "options": [
          "A. Điểm đầu của pha này nối với điểm cuối của pha kia (A nối Z, B nối X, C nối Y) tạo thành hình tam giác khép kín.",
          "B. Ba điểm cuối nối với nhau tạo điểm trung tính O.",
          "C. Cả ba điểm đầu và ba điểm cuối đều nối chập lại.",
          "D. Nối từng pha độc lập với 6 dây dẫn riêng biệt."
        ],
        "correct": 0,
        "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này được nối với điểm cuối của pha kia tạo thành hình tam giác khép kín (SGK trang 19)."
      },
      {
        "id": 17,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Điện áp giữa hai dây pha trong mạch điện xoay chiều ba pha được gọi là",
        "options": [
          "A. điện áp pha (Up).",
          "B. điện áp dây (Ud).",
          "C. điện áp cực đại (Um).",
          "D. điện áp định mức của tải."
        ],
        "correct": 1,
        "explain": "Điện áp giữa hai dây pha gọi là điện áp dây, kí hiệu là Ud. Điện áp giữa dây pha và dây trung tính (hoặc giữa điểm đầu và cuối của một pha) gọi là điện áp pha, kí hiệu là Up (SGK trang 20)."
      },
      {
        "id": 18,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up, dòng điện dây Id và dòng điện pha Ip là:",
        "options": [
          "A. Ud = Up và Id = √3.Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = √3.Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = Ip"
        ],
        "correct": 1,
        "explain": "Khi tải nối hình sao (Y) trong mạch ba pha đối xứng: Id = Ip và Ud = √3.Up (SGK trang 20)."
      },
      {
        "id": 19,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình tam giác (Δ), mối quan hệ giữa các đại lượng dây và pha là:",
        "options": [
          "A. Ud = Up và Id = Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = √3.Ip"
        ],
        "correct": 2,
        "explain": "Khi tải nối hình tam giác (Δ) trong mạch ba pha đối xứng: Ud = Up và Id = √3.Ip (SGK trang 21)."
      },
      {
        "id": 20,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha đối xứng gồm 3 điện trở R = 50 Ω nối hình tam giác (Δ) vào nguồn ba pha có điện áp dây Ud = 380 V. Dòng điện pha Ip và dòng điện dây Id của mạch có giá trị lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A",
          "B. Ip = 7,6 A; Id = 13,16 A",
          "C. Ip = 13,16 A; Id = 7,6 A",
          "D. Ip = 7,6 A; Id = 7,6 A"
        ],
        "correct": 1,
        "explain": "Tải nối tam giác nên Up = Ud = 380 V. Dòng điện pha: Ip = Up / R = 380 / 50 = 7,6 A. Dòng điện dây: Id = √3.Ip = √3 × 7,6 ≈ 13,16 A (Ví dụ SGK trang 21)."
      },
      {
        "id": 21,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch ba pha tải đối xứng nối hình sao (Y) có điện áp pha Up = 220 V, tải gồm 3 điện trở R = 50 Ω. Dòng điện pha Ip, dòng điện dây Id và điện áp dây Ud lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A; Ud ≈ 381 V",
          "B. Ip = 7,6 A; Id = 4,4 A; Ud = 220 V",
          "C. Ip = 4,4 A; Id = 7,6 A; Ud = 380 V",
          "D. Ip = 2,2 A; Id = 2,2 A; Ud = 127 V"
        ],
        "correct": 0,
        "explain": "Tải nối hình sao nên: Ip = Up / R = 220 / 50 = 4,4 A. Dòng điện dây Id = Ip = 4,4 A. Điện áp dây Ud = √3.Up = √3 × 220 ≈ 381 V (Bài tập 2 SGK trang 21)."
      },
      {
        "id": 22,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha có ghi 220V/380V - Δ/Y. Nếu lưới điện có điện áp dây Ud = 380 V thì phải đấu dây động cơ theo kiểu nào để hoạt động bình thường?",
        "options": [
          "A. Đấu hình tam giác (Δ).",
          "B. Đấu hình sao (Y).",
          "C. Đấu hình sao có nối đất.",
          "D. Đấu kiểu nào cũng được."
        ],
        "correct": 1,
        "explain": "Thông số ghi 220V/380V tương ứng với cách nối Δ/Y nghĩa là: điện áp đặt vào mỗi cuộn dây của động cơ chịu tối đa 220 V. Khi lưới có Ud = 380 V, nếu nối sao (Y) thì Up = Ud/√3 = 380/√3 = 220 V (vừa đúng định mức của cuộn dây)."
      },
      {
        "id": 23,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện quá trình nào sau đây?",
        "options": [
          "A. Khai thác than, dầu mỏ và lọc dầu thành phẩm.",
          "B. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng trên quy mô toàn quốc.",
          "C. Sản xuất và lắp ráp các loại ô tô điện và xe máy điện.",
          "D. Quản lí dự báo thời tiết và thủy văn toàn quốc."
        ],
        "correct": 1,
        "explain": "Hệ thống điện quốc gia gồm nguồn điện, lưới điện và tải tiêu thụ liên kết thành hệ thống thống nhất để thực hiện quá trình sản xuất, truyền tải, phân phối và tiêu thụ điện năng (SGK trang 23)."
      },
      {
        "id": 24,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấu trúc chung của hệ thống điện quốc gia gồm ba thành phần chính là",
        "options": [
          "A. Trạm biến áp, công tơ điện và dây dẫn.",
          "B. Nguồn điện, lưới điện và tải tiêu thụ.",
          "C. Nhà máy nhiệt điện, nhà máy thủy điện và điện mặt trời.",
          "D. Tủ tổng, tủ nhánh và tủ động lực."
        ],
        "correct": 1,
        "explain": "Ba thành phần chính của hệ thống điện quốc gia là: Nguồn điện, Lưới điện và Tải tiêu thụ (Hình 4.2 và 4.3 SGK trang 22-23)."
      },
      {
        "id": 25,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện truyền tải trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV."
        ],
        "correct": 3,
        "explain": "Lưới điện truyền tải có điện áp trên 110 kV, làm nhiệm vụ truyền tải điện năng số lượng lớn từ các nhà máy điện/trạm nguồn đến các trạm phân phối chính (SGK trang 23)."
      },
      {
        "id": 26,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện phân phối trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống.",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có điện áp từ 110 kV trở xuống, có nhiệm vụ truyền tải điện năng từ trạm điện phân phối chính đến các tải tiêu thụ (SGK trang 23)."
      },
      {
        "id": 27,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấp điện áp siêu cao áp trong hệ thống lưới điện Việt Nam là",
        "options": [
          "A. điện áp đến 1 kV.",
          "B. điện áp trên 1 kV đến 35 kV.",
          "C. điện áp từ trên 35 kV đến 220 kV.",
          "D. điện áp trên 220 kV."
        ],
        "correct": 3,
        "explain": "Phân cấp điện áp: Hạ áp (đến 1 kV); Trung áp (trên 1 kV đến 35 kV); Cao áp (từ trên 35 kV đến 220 kV); Siêu cao áp (trên 220 kV, ví dụ đường dây 500 kV) (SGK trang 23)."
      },
      {
        "id": 28,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện 500 kV Bắc - Nam mạch 1 được khánh thành và đóng điện vào thời gian nào?",
        "options": [
          "A. Ngày 5/4/1992",
          "B. Ngày 27/5/1994",
          "C. Ngày 30/4/1975",
          "D. Ngày 1/1/2000"
        ],
        "correct": 1,
        "explain": "Đường dây truyền tải điện 500 kV Bắc Nam được khởi công ngày 5/4/1992 và hoàn thành ngày 27/5/1994, dài 1487 km từ Hòa Bình đến TP. Hồ Chí Minh (SGK trang 24)."
      },
      {
        "id": 29,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện người ta phải sử dụng máy biến áp tăng áp trước khi đưa điện lên đường dây truyền tải đi xa?",
        "options": [
          "A. Để tăng tần số dòng điện lên cao.",
          "B. Để tăng điện áp, từ đó giảm dòng điện chạy trên dây, giúp giảm hao phí công suất toả nhiệt trên đường dây.",
          "C. Để chuyển điện xoay chiều thành một chiều.",
          "D. Để bảo vệ máy phát điện không bị sét đánh."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí toả nhiệt ΔP = I²R = (P²/U²cos²φ)R. Tăng điện áp U lên n lần thì hao phí giảm n² lần, giúp truyền tải công suất lớn đi xa hiệu quả và tiết kiệm tiết diện dây dẫn."
      },
      {
        "id": 30,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thiết bị nào trong lưới điện có chức năng chuyển đổi cấp điện áp từ thấp lên cao hoặc từ cao xuống thấp?",
        "options": [
          "A. Máy phát điện xoay chiều.",
          "B. Máy biến áp.",
          "C. Động cơ không đồng bộ ba pha.",
          "D. Aptomat khối MCCB."
        ],
        "correct": 1,
        "explain": "Trạm biến áp thực hiện chức năng chuyển đổi cấp điện áp từ điện áp thấp lên điện áp cao hoặc ngược lại thông qua các máy biến áp (SGK trang 24)."
      },
      {
        "id": 31,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Quá trình sản xuất điện năng là quá trình",
        "options": [
          "A. biến đổi điện năng thành nhiệt năng và cơ năng.",
          "B. chuyển đổi các dạng năng lượng khác trong tự nhiên thành năng lượng điện.",
          "C. truyền tải điện năng từ nhà máy đến hộ gia đình.",
          "D. lưu trữ điện năng trong tụ điện phẳng."
        ],
        "correct": 1,
        "explain": "Sản xuất điện năng là quá trình chuyển đổi các dạng năng lượng khác nhau thành năng lượng điện (SGK trang 27)."
      },
      {
        "id": 32,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
        "options": [
          "A. Than đá",
          "B. Dầu mỏ",
          "C. Năng lượng dòng nước (thủy điện)",
          "D. Khí thiên nhiên"
        ],
        "correct": 2,
        "explain": "Năng lượng dòng nước, năng lượng gió, năng lượng mặt trời, sinh khối là các nguồn năng lượng tái tạo. Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hóa thạch không tái tạo (Hình 5.2 SGK trang 26)."
      },
      {
        "id": 33,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguyên lí hoạt động của nhà máy thủy điện là",
        "options": [
          "A. sử dụng thế năng của nước trong hồ chứa chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện.",
          "B. đốt than để đun sôi nước tạo hơi nước đẩy cánh quạt.",
          "C. sử dụng phản ứng nhiệt hạch giải phóng nhiệt lượng lớn.",
          "D. dùng ánh sáng mặt trời chiếu vào tấm silic tạo dòng electron."
        ],
        "correct": 0,
        "explain": "Nhà máy thủy điện sử dụng thế năng của nước trong hồ chứa để chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện (SGK trang 27)."
      },
      {
        "id": 34,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Một trong những nhược điểm lớn của nhà máy thủy điện là",
        "options": [
          "A. phát thải lượng lớn khí nhà kính CO2 trong quá trình vận hành.",
          "B. công suất phát điện phụ thuộc nhiều vào lượng nước tích trữ trong hồ chứa (theo mùa) và tác động làm thay đổi chế độ thủy văn, hệ sinh thái.",
          "C. chi phí vận hành hàng ngày rất cao.",
          "D. tuổi thọ công trình rất ngắn dưới 5 năm."
        ],
        "correct": 1,
        "explain": "Nhược điểm của thủy điện: Công suất phát phụ thuộc vào lưu lượng nước trong hồ chứa (hạn hán thì giảm mạnh), chi phí đầu tư ban đầu lớn, làm thay đổi cơ chế thủy văn và đa dạng sinh học (SGK trang 27)."
      },
      {
        "id": 35,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Ưu điểm nổi bật của nhà máy nhiệt điện so với nhà máy thủy điện là",
        "options": [
          "A. hoàn toàn không gây ô nhiễm môi trường.",
          "B. có thể vận hành liên tục, ổn định quanh năm mà không phụ thuộc vào điều kiện thời tiết hay mùa vụ.",
          "C. sử dụng nguồn năng lượng tái tạo vô tận.",
          "D. không tốn chi phí mua nhiên liệu vận hành."
        ],
        "correct": 1,
        "explain": "Ưu điểm của nhiệt điện là công suất phát điện lớn, chi phí đầu tư ban đầu không quá cao, xây dựng nhanh và có thể vận hành liên tục, không phụ thuộc vào thời tiết (SGK trang 28)."
      },
      {
        "id": 36,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy điện hạt nhân chuyển hóa năng lượng từ đâu để sản xuất điện?",
        "options": [
          "A. Đốt cháy khí hidro trong bầu khí quyển.",
          "B. Năng lượng nhiệt sinh ra từ các phản ứng phân hạch hạt nhân để đun nóng nước tạo hơi nước áp suất cao quay turbine.",
          "C. Thế năng của các hạt nhân phóng xạ nặng.",
          "D. Điện trường tĩnh điện xung quanh lò phản ứng."
        ],
        "correct": 1,
        "explain": "Nhà máy điện hạt nhân sử dụng năng lượng từ phản ứng phân hạch (thường là Uranium) để đun nóng nước tạo ra hơi nước có áp suất cao làm quay turbine của máy phát điện tạo ra điện (SGK trang 28-29)."
      },
      {
        "id": 37,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Bộ phận nào trong hệ thống điện mặt trời có chức năng chuyển đổi dòng điện một chiều (DC) từ các tấm pin mặt trời thành dòng xoay chiều (AC) để cấp cho tải và hòa vào lưới điện?",
        "options": [
          "A. Tấm pin mặt trời (PV)",
          "B. Bộ biến tần (Inverter)",
          "C. Pin lưu trữ (Battery)",
          "D. Máy biến áp phân phối"
        ],
        "correct": 1,
        "explain": "Nguồn điện do tấm pin mặt trời tạo ra là dòng điện một chiều (DC), cần qua bộ điều khiển sạc và biến tần (Inverter - biến đổi DC thành AC) trước khi hòa vào lưới điện hoặc cung cấp cho các thiết bị xoay chiều (Hình 5.7 SGK trang 30)."
      },
      {
        "id": 38,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Tại sao các hệ thống điện mặt trời và điện gió thường cần có hệ thống lưu trữ năng lượng (pin tích năng / ắc quy)?",
        "options": [
          "A. Vì công suất của chúng rất lớn, lưới điện quốc gia không thể tiếp nhận hết.",
          "B. Vì gió và ánh sáng mặt trời có tính gián đoạn, phụ thuộc vào thời tiết, ngày đêm nên cần tích trữ để cấp điện khi không đủ gió hoặc nắng.",
          "C. Để làm mát cánh quạt turbine gió và các tấm pin.",
          "D. Để tự động chuyển đổi điện áp từ cao xuống thấp."
        ],
        "correct": 1,
        "explain": "Ánh sáng mặt trời không có vào ban đêm và suy giảm vào ngày mưa, gió cũng thay đổi thất thường theo thời gian. Do đó cần hệ thống pin tích năng để lưu trữ khi phát dư thừa và xả ra cung cấp khi thiếu hụt (SGK trang 29-30)."
      },
      {
        "id": 39,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ thường có công suất tiêu thụ điện năng trong khoảng",
        "options": [
          "A. dưới 1 kW.",
          "B. từ vài chục đến vài trăm kW.",
          "C. từ vài nghìn đến vài chục nghìn MW.",
          "D. trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới phân phối cấp cho tải (SGK trang 31)."
      },
      {
        "id": 40,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Đặc điểm nào sau đây là đặc điểm của mạng điện sản xuất quy mô nhỏ?",
        "options": [
          "A. Tải phân bố rải rác trên phạm vi hàng trăm km vuông.",
          "B. Tải phân bố tập trung, mạng điện dùng cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Toàn bộ thiết bị đều dùng điện áp 110 kV.",
          "D. Không cần thiết bị đóng cắt và bảo vệ quá tải."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ có các đặc điểm: tải phân bố tập trung; dùng máy biến áp riêng hoặc lấy điện từ đường hạ áp 380/220 V; mạng điện cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập (SGK trang 31)."
      }
    ]
  },
  {
    "id": "cn_all",
    "title": "⚡ Trọn Bộ Lý Thuyết & Bài Tập Công Nghệ 12 (Bài 2 - Bài 7)",
    "icon": "🏆",
    "description": "Toàn bộ ngân hàng 75 câu hỏi trắc nghiệm & bài tập chuẩn SGK Kết nối tri thức",
    "questions": [
      {
        "id": 1,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Công việc nào sau đây thuộc nhóm công việc thiết kế điện?",
        "options": [
          "A. Lắp đặt đường dây và trạm biến áp ngoài hiện trường.",
          "B. Nghiên cứu, ứng dụng kiến thức kĩ thuật điện để phân tích, lựa chọn vật liệu và thiết bị điện, lập bản vẽ sơ đồ mạch điện.",
          "C. Đóng cắt và giám sát các chỉ số hoạt động của lưới điện tại phòng điều độ.",
          "D. Thay thế dầu bôi trơn và bảo dưỡng định kì máy biến áp."
        ],
        "correct": 1,
        "explain": "Thiết kế điện là việc nghiên cứu, ứng dụng các kiến thức về kĩ thuật điện và phương pháp tính toán để phân tích, thiết kế, lựa chọn vật liệu, thiết bị điện cho các hệ thống và thiết bị điện; tạo ra sản phẩm là bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật."
      },
      {
        "id": 2,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Sản phẩm chính của công việc thiết kế điện là gì?",
        "options": [
          "A. Các linh kiện điện tử và bóng đèn LED.",
          "B. Bản vẽ sơ đồ mạch điện và tài liệu kĩ thuật mô tả hệ thống điện.",
          "C. Hệ thống cột điện và đường dây truyền tải điện.",
          "D. Điện năng cung cấp cho các hộ gia đình."
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 (KNTT trang 11), sản phẩm của công việc thiết kế điện là các bản vẽ sơ đồ mạch điện và các tài liệu kĩ thuật mô tả hệ thống điện."
      },
      {
        "id": 3,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí kĩ sư thiết kế điện đòi hỏi người lao động phải có trình độ đào tạo tối thiểu là",
        "options": [
          "A. sơ cấp nghề điện.",
          "B. trung cấp nghề kĩ thuật điện.",
          "C. cao đẳng nghề kĩ thuật điện.",
          "D. đại học ngành kĩ thuật điện."
        ],
        "correct": 3,
        "explain": "Người làm nghề thiết kế điện đối với vị trí kĩ sư phải có trình độ đại học ngành kĩ thuật điện (hoặc các chuyên ngành gần tương đương)."
      },
      {
        "id": 4,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Trong ngành sản xuất, chế tạo thiết bị điện, công việc nào sau đây do thợ sản xuất, chế tạo thực hiện?",
        "options": [
          "A. Quản lí chất lượng và kiểm soát quy trình kiểm định xuất xưởng.",
          "B. Tổ chức vận hành và tối ưu hóa dây chuyền công nghệ sản xuất.",
          "C. Thao tác các công việc cụ thể như kiểm tra linh kiện đầu vào, lắp ráp, hàn linh kiện, đóng gói bao bì sản phẩm.",
          "D. Nghiên cứu công nghệ vật liệu mới cho thiết bị điện."
        ],
        "correct": 2,
        "explain": "Thợ sản xuất, chế tạo chịu trách nhiệm thao tác các công việc cụ thể trong dây chuyền như: kiểm tra linh kiện đầu vào, lắp ráp và hàn linh kiện, đóng gói bao bì sản phẩm đạt chất lượng (SGK trang 11)."
      },
      {
        "id": 5,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mô tả nào sau đây thể hiện đúng nhất công việc của người làm nghề lắp đặt điện?",
        "options": [
          "A. Theo dõi các thông số đồng hồ đo tại phòng điều khiển trung tâm nhà máy điện.",
          "B. Thi công, lắp đặt, kết nối đường dây điện và thiết bị điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện.",
          "C. Tính toán mô phỏng mạch điện tử bằng phần mềm chuyên dụng trên máy tính tính toán.",
          "D. Kiểm tra định kì và vệ sinh, thay dầu máy biến thế đang vận hành."
        ],
        "correct": 1,
        "explain": "Lắp đặt điện là việc thi công, lắp đặt, kết nối đường dây điện và thiết bị điện cho các hệ thống điện, công trình điện theo hồ sơ thiết kế, quy chuẩn kĩ thuật và an toàn điện (SGK trang 12)."
      },
      {
        "id": 6,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Mục đích chính của công việc vận hành điện là gì?",
        "options": [
          "A. Xây dựng mới hoàn toàn các cột tháp truyền tải điện 500 kV.",
          "B. Duy trì chế độ làm việc bình thường của hệ thống điện, đáp ứng các yêu cầu chất lượng, độ tin cậy và tính kinh tế.",
          "C. Thay thế toàn bộ dây dẫn điện trong khu dân cư sau mỗi tháng.",
          "D. Thiết kế các linh kiện vi mạch điện tử siêu nhỏ."
        ],
        "correct": 1,
        "explain": "Vận hành thiết bị điện là các hoạt động nhằm duy trì chế độ làm việc bình thường của hệ thống điện đáp ứng các yêu cầu chất lượng, độ tin cậy và kinh tế (SGK trang 12)."
      },
      {
        "id": 7,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Phát biểu nào sau đây phân biệt chính xác giữa hoạt động 'bảo dưỡng điện' và 'sửa chữa điện'?",
        "options": [
          "A. Bảo dưỡng tiến hành khi có sự cố hư hỏng, còn sửa chữa tiến hành định kì thường xuyên.",
          "B. Bảo dưỡng là hoạt động thường kì nhằm duy trì hệ thống hoạt động bình thường và phòng ngừa hư hỏng; sửa chữa là hoạt động phục hồi khi xảy ra sự cố.",
          "C. Bảo dưỡng do thợ điện làm, sửa chữa chỉ do kĩ sư điện làm.",
          "D. Bảo dưỡng chỉ áp dụng cho đồ gia dụng, sửa chữa áp dụng cho lưới điện quốc gia."
        ],
        "correct": 1,
        "explain": "Bảo dưỡng điện là hoạt động thường kì nhằm duy trì hệ thống điện, thiết bị điện hoạt động bình thường, tránh hỏng hóc. Sửa chữa điện là hoạt động thực hiện khi có sự cố nhằm phục hồi hệ thống trở lại trạng thái hoạt động bình thường (SGK trang 13)."
      },
      {
        "id": 8,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Vị trí việc làm kĩ sư thi công điện trong nhóm công việc lắp đặt điện có nhiệm vụ chính là",
        "options": [
          "A. trực tiếp leo trèo lắp dây dẫn trên cột điện cao áp.",
          "B. chỉ huy và giám sát thi công lắp đặt điện theo hồ sơ thiết kế.",
          "C. sản xuất vỏ tủ điện tại phân xưởng gia công cơ khí.",
          "D. sửa chữa các thiết bị gia dụng trong hộ gia đình."
        ],
        "correct": 1,
        "explain": "Trong nhóm công việc lắp đặt điện: kĩ sư thi công điện có nhiệm vụ chỉ huy và giám sát thi công lắp đặt điện; kĩ thuật viên hỗ trợ thi công và lắp đặt; thợ điện trực tiếp thực hiện lắp đặt (SGK trang 12)."
      },
      {
        "id": 9,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Nơi làm việc nào sau đây là môi trường làm việc đặc trưng của nghề vận hành điện?",
        "options": [
          "A. Phòng thiết kế đồ họa của công ty quảng cáo truyền thông.",
          "B. Phòng điều hành, quản lí điện của công ty điện lực, trạm biến áp, nhà máy điện.",
          "C. Xưởng dệt may xuất khẩu.",
          "D. Cửa hàng kinh doanh thiết bị văn phòng."
        ],
        "correct": 1,
        "explain": "Người làm nghề vận hành điện thường làm việc tại phòng điều hành, quản lí điện của các công ty điện lực, công ty chiếu sáng đô thị, bộ phận quản lí hệ thống điện trong tòa nhà, nhà máy, cơ quan (SGK trang 12)."
      },
      {
        "id": 10,
        "topic": "BÀI 2: NGÀNH NGHỀ KĨ THUẬT ĐIỆN",
        "question": "Năng lực nào dưới đây đặc biệt quan trọng đối với người làm nghề bảo dưỡng và sửa chữa điện?",
        "options": [
          "A. Năng khiếu hội họa và sáng tác văn học.",
          "B. Khả năng tư duy logic, chẩn đoán, phát hiện lỗi hư hỏng và sử dụng thành thạo dụng cụ đo kiểm tra điện an toàn.",
          "C. Kĩ năng tiếp thị và bán hàng đa kênh.",
          "D. Kĩ năng đàm phán hợp đồng kinh tế quốc tế."
        ],
        "correct": 1,
        "explain": "Người làm nghề bảo dưỡng và sửa chữa điện cần có tư duy logic, khả năng suy luận, chẩn đoán lỗi; kĩ năng thành thạo trong sử dụng các thiết bị đo, thiết bị chẩn đoán lỗi và tuân thủ tuyệt đối quy chuẩn kĩ thuật, an toàn điện (SGK trang 13)."
      },
      {
        "id": 11,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều một pha có cường độ tức thời i = Im.sin(ωt + ψ). Đại lượng Im được gọi là",
        "options": [
          "A. giá trị hiệu dụng của dòng điện.",
          "B. giá trị cực đại (biên độ) của dòng điện.",
          "C. tần số góc của dòng điện.",
          "D. pha ban đầu của dòng điện."
        ],
        "correct": 1,
        "explain": "Trong biểu thức i = Im.sin(ωt + ψ), Im là giá trị dòng điện cực đại (biên độ), đơn vị ampe (A). Giá trị hiệu dụng là I = Im / √2 (SGK trang 18)."
      },
      {
        "id": 12,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Tổng trở z_t của tải điện một pha gồm điện trở R nối tiếp với điện kháng X được tính theo công thức nào?",
        "options": [
          "A. z_t = R + X",
          "B. z_t = √(R² + X²)",
          "C. z_t = √(R² - X²)",
          "D. z_t = R² + X²"
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 18: Tổng trở z_t đặc trưng bởi độ lớn z_t = √(R² + X²) và góc pha φ với tan φ = X/R."
      },
      {
        "id": 13,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có đặc điểm nào sau đây?",
        "options": [
          "A. Khác tần số, cùng biên độ, cùng pha với nhau.",
          "B. Cùng tần số, cùng biên độ nhưng lệch pha nhau góc 2π/3 (120°) giữa các pha.",
          "C. Cùng tần số, biên độ khác nhau, lệch pha nhau góc 90°.",
          "D. Cùng biên độ nhưng tần số gấp ba lần nhau."
        ],
        "correct": 1,
        "explain": "Dòng điện xoay chiều ba pha là hệ thống ba dòng điện xoay chiều có cùng tần số, cùng biên độ và có góc pha lệch nhau 120° (2π/3 rad) lần lượt giữa các pha (SGK trang 18)."
      },
      {
        "id": 14,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Phần tĩnh (Stator) của máy phát điện xoay chiều ba pha gồm",
        "options": [
          "A. một nam châm điện quay tròn quanh trục.",
          "B. ba cuộn dây giống hệt nhau đặt lệch nhau một góc 120° trên lõi thép có rãnh.",
          "C. bốn cuộn dây đặt vuông góc nhau.",
          "D. cổ góp điện và chổi than."
        ],
        "correct": 1,
        "explain": "Phần tĩnh (stator) là lõi thép có rãnh, đặt 3 cuộn dây AX, BY, CZ có cùng số vòng và kích thước dây, đặt lệch nhau góc 120° trên đường tròn không gian (SGK trang 19)."
      },
      {
        "id": 15,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn điện hoặc tải ba pha hình sao (Y) có đặc điểm là",
        "options": [
          "A. đầu pha này nối với cuối pha kia tạo thành mạch vòng kín.",
          "B. ba điểm cuối X, Y, Z của ba pha nối chung với nhau tạo thành điểm trung tính O.",
          "C. ba điểm đầu A, B, C nối chung với nhau, ba điểm cuối để tự do.",
          "D. chỉ có 2 dây pha đi ra tải tiêu thụ."
        ],
        "correct": 1,
        "explain": "Nối hình sao (Y): Ba điểm cuối X, Y, Z của các pha được nối với nhau tạo thành điểm trung tính O (SGK trang 19)."
      },
      {
        "id": 16,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cách nối nguồn hoặc tải ba pha hình tam giác (Δ) được thực hiện như thế nào?",
        "options": [
          "A. Điểm đầu của pha này nối với điểm cuối của pha kia (A nối Z, B nối X, C nối Y) tạo thành hình tam giác khép kín.",
          "B. Ba điểm cuối nối với nhau tạo điểm trung tính O.",
          "C. Cả ba điểm đầu và ba điểm cuối đều nối chập lại.",
          "D. Nối từng pha độc lập với 6 dây dẫn riêng biệt."
        ],
        "correct": 0,
        "explain": "Nối hình tam giác (Δ): Điểm đầu của pha này được nối với điểm cuối của pha kia tạo thành hình tam giác khép kín (SGK trang 19)."
      },
      {
        "id": 17,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Điện áp giữa hai dây pha trong mạch điện xoay chiều ba pha được gọi là",
        "options": [
          "A. điện áp pha (Up).",
          "B. điện áp dây (Ud).",
          "C. điện áp cực đại (Um).",
          "D. điện áp định mức của tải."
        ],
        "correct": 1,
        "explain": "Điện áp giữa hai dây pha gọi là điện áp dây, kí hiệu là Ud. Điện áp giữa dây pha và dây trung tính (hoặc giữa điểm đầu và cuối của một pha) gọi là điện áp pha, kí hiệu là Up (SGK trang 20)."
      },
      {
        "id": 18,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up, dòng điện dây Id và dòng điện pha Ip là:",
        "options": [
          "A. Ud = Up và Id = √3.Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = √3.Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = Ip"
        ],
        "correct": 1,
        "explain": "Khi tải nối hình sao (Y) trong mạch ba pha đối xứng: Id = Ip và Ud = √3.Up (SGK trang 20)."
      },
      {
        "id": 19,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Trong mạch điện ba pha đối xứng khi tải nối hình tam giác (Δ), mối quan hệ giữa các đại lượng dây và pha là:",
        "options": [
          "A. Ud = Up và Id = Ip",
          "B. Ud = √3.Up và Id = Ip",
          "C. Ud = Up và Id = √3.Ip",
          "D. Ud = Up/√3 và Id = √3.Ip"
        ],
        "correct": 2,
        "explain": "Khi tải nối hình tam giác (Δ) trong mạch ba pha đối xứng: Ud = Up và Id = √3.Ip (SGK trang 21)."
      },
      {
        "id": 20,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một tải ba pha đối xứng gồm 3 điện trở R = 50 Ω nối hình tam giác (Δ) vào nguồn ba pha có điện áp dây Ud = 380 V. Dòng điện pha Ip và dòng điện dây Id của mạch có giá trị lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A",
          "B. Ip = 7,6 A; Id = 13,16 A",
          "C. Ip = 13,16 A; Id = 7,6 A",
          "D. Ip = 7,6 A; Id = 7,6 A"
        ],
        "correct": 1,
        "explain": "Tải nối tam giác nên Up = Ud = 380 V. Dòng điện pha: Ip = Up / R = 380 / 50 = 7,6 A. Dòng điện dây: Id = √3.Ip = √3 × 7,6 ≈ 13,16 A (Ví dụ SGK trang 21)."
      },
      {
        "id": 21,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Cho mạch ba pha tải đối xứng nối hình sao (Y) có điện áp pha Up = 220 V, tải gồm 3 điện trở R = 50 Ω. Dòng điện pha Ip, dòng điện dây Id và điện áp dây Ud lần lượt là",
        "options": [
          "A. Ip = 4,4 A; Id = 4,4 A; Ud ≈ 381 V",
          "B. Ip = 7,6 A; Id = 4,4 A; Ud = 220 V",
          "C. Ip = 4,4 A; Id = 7,6 A; Ud = 380 V",
          "D. Ip = 2,2 A; Id = 2,2 A; Ud = 127 V"
        ],
        "correct": 0,
        "explain": "Tải nối hình sao nên: Ip = Up / R = 220 / 50 = 4,4 A. Dòng điện dây Id = Ip = 4,4 A. Điện áp dây Ud = √3.Up = √3 × 220 ≈ 381 V (Bài tập 2 SGK trang 21)."
      },
      {
        "id": 22,
        "topic": "BÀI 3: MẠCH ĐIỆN XOAY CHIỀU 3 PHA",
        "question": "Một động cơ điện ba pha có ghi 220V/380V - Δ/Y. Nếu lưới điện có điện áp dây Ud = 380 V thì phải đấu dây động cơ theo kiểu nào để hoạt động bình thường?",
        "options": [
          "A. Đấu hình tam giác (Δ).",
          "B. Đấu hình sao (Y).",
          "C. Đấu hình sao có nối đất.",
          "D. Đấu kiểu nào cũng được."
        ],
        "correct": 1,
        "explain": "Thông số ghi 220V/380V tương ứng với cách nối Δ/Y nghĩa là: điện áp đặt vào mỗi cuộn dây của động cơ chịu tối đa 220 V. Khi lưới có Ud = 380 V, nếu nối sao (Y) thì Up = Ud/√3 = 380/√3 = 220 V (vừa đúng định mức của cuộn dây)."
      },
      {
        "id": 23,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Hệ thống điện quốc gia thực hiện quá trình nào sau đây?",
        "options": [
          "A. Khai thác than, dầu mỏ và lọc dầu thành phẩm.",
          "B. Sản xuất, truyền tải, phân phối và tiêu thụ điện năng trên quy mô toàn quốc.",
          "C. Sản xuất và lắp ráp các loại ô tô điện và xe máy điện.",
          "D. Quản lí dự báo thời tiết và thủy văn toàn quốc."
        ],
        "correct": 1,
        "explain": "Hệ thống điện quốc gia gồm nguồn điện, lưới điện và tải tiêu thụ liên kết thành hệ thống thống nhất để thực hiện quá trình sản xuất, truyền tải, phân phối và tiêu thụ điện năng (SGK trang 23)."
      },
      {
        "id": 24,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấu trúc chung của hệ thống điện quốc gia gồm ba thành phần chính là",
        "options": [
          "A. Trạm biến áp, công tơ điện và dây dẫn.",
          "B. Nguồn điện, lưới điện và tải tiêu thụ.",
          "C. Nhà máy nhiệt điện, nhà máy thủy điện và điện mặt trời.",
          "D. Tủ tổng, tủ nhánh và tủ động lực."
        ],
        "correct": 1,
        "explain": "Ba thành phần chính của hệ thống điện quốc gia là: Nguồn điện, Lưới điện và Tải tiêu thụ (Hình 4.2 và 4.3 SGK trang 22-23)."
      },
      {
        "id": 25,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện truyền tải trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. dưới 1 kV.",
          "B. từ 1 kV đến 35 kV.",
          "C. từ 110 kV trở xuống.",
          "D. trên 110 kV."
        ],
        "correct": 3,
        "explain": "Lưới điện truyền tải có điện áp trên 110 kV, làm nhiệm vụ truyền tải điện năng số lượng lớn từ các nhà máy điện/trạm nguồn đến các trạm phân phối chính (SGK trang 23)."
      },
      {
        "id": 26,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Lưới điện phân phối trong hệ thống điện quốc gia có cấp điện áp là",
        "options": [
          "A. từ 110 kV trở xuống.",
          "B. trên 110 kV đến 500 kV.",
          "C. trên 220 kV.",
          "D. chỉ duy nhất cấp 220 V."
        ],
        "correct": 0,
        "explain": "Lưới điện phân phối có điện áp từ 110 kV trở xuống, có nhiệm vụ truyền tải điện năng từ trạm điện phân phối chính đến các tải tiêu thụ (SGK trang 23)."
      },
      {
        "id": 27,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Cấp điện áp siêu cao áp trong hệ thống lưới điện Việt Nam là",
        "options": [
          "A. điện áp đến 1 kV.",
          "B. điện áp trên 1 kV đến 35 kV.",
          "C. điện áp từ trên 35 kV đến 220 kV.",
          "D. điện áp trên 220 kV."
        ],
        "correct": 3,
        "explain": "Phân cấp điện áp: Hạ áp (đến 1 kV); Trung áp (trên 1 kV đến 35 kV); Cao áp (từ trên 35 kV đến 220 kV); Siêu cao áp (trên 220 kV, ví dụ đường dây 500 kV) (SGK trang 23)."
      },
      {
        "id": 28,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Đường dây truyền tải điện 500 kV Bắc - Nam mạch 1 được khánh thành và đóng điện vào thời gian nào?",
        "options": [
          "A. Ngày 5/4/1992",
          "B. Ngày 27/5/1994",
          "C. Ngày 30/4/1975",
          "D. Ngày 1/1/2000"
        ],
        "correct": 1,
        "explain": "Đường dây truyền tải điện 500 kV Bắc Nam được khởi công ngày 5/4/1992 và hoàn thành ngày 27/5/1994, dài 1487 km từ Hòa Bình đến TP. Hồ Chí Minh (SGK trang 24)."
      },
      {
        "id": 29,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Vì sao tại các nhà máy điện người ta phải sử dụng máy biến áp tăng áp trước khi đưa điện lên đường dây truyền tải đi xa?",
        "options": [
          "A. Để tăng tần số dòng điện lên cao.",
          "B. Để tăng điện áp, từ đó giảm dòng điện chạy trên dây, giúp giảm hao phí công suất toả nhiệt trên đường dây.",
          "C. Để chuyển điện xoay chiều thành một chiều.",
          "D. Để bảo vệ máy phát điện không bị sét đánh."
        ],
        "correct": 1,
        "explain": "Theo định luật Jun-Len-xơ, công suất hao phí toả nhiệt ΔP = I²R = (P²/U²cos²φ)R. Tăng điện áp U lên n lần thì hao phí giảm n² lần, giúp truyền tải công suất lớn đi xa hiệu quả và tiết kiệm tiết diện dây dẫn."
      },
      {
        "id": 30,
        "topic": "BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA",
        "question": "Thiết bị nào trong lưới điện có chức năng chuyển đổi cấp điện áp từ thấp lên cao hoặc từ cao xuống thấp?",
        "options": [
          "A. Máy phát điện xoay chiều.",
          "B. Máy biến áp.",
          "C. Động cơ không đồng bộ ba pha.",
          "D. Aptomat khối MCCB."
        ],
        "correct": 1,
        "explain": "Trạm biến áp thực hiện chức năng chuyển đổi cấp điện áp từ điện áp thấp lên điện áp cao hoặc ngược lại thông qua các máy biến áp (SGK trang 24)."
      },
      {
        "id": 31,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Quá trình sản xuất điện năng là quá trình",
        "options": [
          "A. biến đổi điện năng thành nhiệt năng và cơ năng.",
          "B. chuyển đổi các dạng năng lượng khác trong tự nhiên thành năng lượng điện.",
          "C. truyền tải điện năng từ nhà máy đến hộ gia đình.",
          "D. lưu trữ điện năng trong tụ điện phẳng."
        ],
        "correct": 1,
        "explain": "Sản xuất điện năng là quá trình chuyển đổi các dạng năng lượng khác nhau thành năng lượng điện (SGK trang 27)."
      },
      {
        "id": 32,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
        "options": [
          "A. Than đá",
          "B. Dầu mỏ",
          "C. Năng lượng dòng nước (thủy điện)",
          "D. Khí thiên nhiên"
        ],
        "correct": 2,
        "explain": "Năng lượng dòng nước, năng lượng gió, năng lượng mặt trời, sinh khối là các nguồn năng lượng tái tạo. Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hóa thạch không tái tạo (Hình 5.2 SGK trang 26)."
      },
      {
        "id": 33,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nguyên lí hoạt động của nhà máy thủy điện là",
        "options": [
          "A. sử dụng thế năng của nước trong hồ chứa chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện.",
          "B. đốt than để đun sôi nước tạo hơi nước đẩy cánh quạt.",
          "C. sử dụng phản ứng nhiệt hạch giải phóng nhiệt lượng lớn.",
          "D. dùng ánh sáng mặt trời chiếu vào tấm silic tạo dòng electron."
        ],
        "correct": 0,
        "explain": "Nhà máy thủy điện sử dụng thế năng của nước trong hồ chứa để chuyển thành động năng làm quay turbine của máy phát điện tạo ra điện (SGK trang 27)."
      },
      {
        "id": 34,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Một trong những nhược điểm lớn của nhà máy thủy điện là",
        "options": [
          "A. phát thải lượng lớn khí nhà kính CO2 trong quá trình vận hành.",
          "B. công suất phát điện phụ thuộc nhiều vào lượng nước tích trữ trong hồ chứa (theo mùa) và tác động làm thay đổi chế độ thủy văn, hệ sinh thái.",
          "C. chi phí vận hành hàng ngày rất cao.",
          "D. tuổi thọ công trình rất ngắn dưới 5 năm."
        ],
        "correct": 1,
        "explain": "Nhược điểm của thủy điện: Công suất phát phụ thuộc vào lưu lượng nước trong hồ chứa (hạn hán thì giảm mạnh), chi phí đầu tư ban đầu lớn, làm thay đổi cơ chế thủy văn và đa dạng sinh học (SGK trang 27)."
      },
      {
        "id": 35,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Ưu điểm nổi bật của nhà máy nhiệt điện so với nhà máy thủy điện là",
        "options": [
          "A. hoàn toàn không gây ô nhiễm môi trường.",
          "B. có thể vận hành liên tục, ổn định quanh năm mà không phụ thuộc vào điều kiện thời tiết hay mùa vụ.",
          "C. sử dụng nguồn năng lượng tái tạo vô tận.",
          "D. không tốn chi phí mua nhiên liệu vận hành."
        ],
        "correct": 1,
        "explain": "Ưu điểm của nhiệt điện là công suất phát điện lớn, chi phí đầu tư ban đầu không quá cao, xây dựng nhanh và có thể vận hành liên tục, không phụ thuộc vào thời tiết (SGK trang 28)."
      },
      {
        "id": 36,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Nhà máy điện hạt nhân chuyển hóa năng lượng từ đâu để sản xuất điện?",
        "options": [
          "A. Đốt cháy khí hidro trong bầu khí quyển.",
          "B. Năng lượng nhiệt sinh ra từ các phản ứng phân hạch hạt nhân để đun nóng nước tạo hơi nước áp suất cao quay turbine.",
          "C. Thế năng của các hạt nhân phóng xạ nặng.",
          "D. Điện trường tĩnh điện xung quanh lò phản ứng."
        ],
        "correct": 1,
        "explain": "Nhà máy điện hạt nhân sử dụng năng lượng từ phản ứng phân hạch (thường là Uranium) để đun nóng nước tạo ra hơi nước có áp suất cao làm quay turbine của máy phát điện tạo ra điện (SGK trang 28-29)."
      },
      {
        "id": 37,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Bộ phận nào trong hệ thống điện mặt trời có chức năng chuyển đổi dòng điện một chiều (DC) từ các tấm pin mặt trời thành dòng xoay chiều (AC) để cấp cho tải và hòa vào lưới điện?",
        "options": [
          "A. Tấm pin mặt trời (PV)",
          "B. Bộ biến tần (Inverter)",
          "C. Pin lưu trữ (Battery)",
          "D. Máy biến áp phân phối"
        ],
        "correct": 1,
        "explain": "Nguồn điện do tấm pin mặt trời tạo ra là dòng điện một chiều (DC), cần qua bộ điều khiển sạc và biến tần (Inverter - biến đổi DC thành AC) trước khi hòa vào lưới điện hoặc cung cấp cho các thiết bị xoay chiều (Hình 5.7 SGK trang 30)."
      },
      {
        "id": 38,
        "topic": "BÀI 5: SẢN XUẤT ĐIỆN NĂNG",
        "question": "Tại sao các hệ thống điện mặt trời và điện gió thường cần có hệ thống lưu trữ năng lượng (pin tích năng / ắc quy)?",
        "options": [
          "A. Vì công suất của chúng rất lớn, lưới điện quốc gia không thể tiếp nhận hết.",
          "B. Vì gió và ánh sáng mặt trời có tính gián đoạn, phụ thuộc vào thời tiết, ngày đêm nên cần tích trữ để cấp điện khi không đủ gió hoặc nắng.",
          "C. Để làm mát cánh quạt turbine gió và các tấm pin.",
          "D. Để tự động chuyển đổi điện áp từ cao xuống thấp."
        ],
        "correct": 1,
        "explain": "Ánh sáng mặt trời không có vào ban đêm và suy giảm vào ngày mưa, gió cũng thay đổi thất thường theo thời gian. Do đó cần hệ thống pin tích năng để lưu trữ khi phát dư thừa và xả ra cung cấp khi thiếu hụt (SGK trang 29-30)."
      },
      {
        "id": 39,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Mạng điện sản xuất quy mô nhỏ thường có công suất tiêu thụ điện năng trong khoảng",
        "options": [
          "A. dưới 1 kW.",
          "B. từ vài chục đến vài trăm kW.",
          "C. từ vài nghìn đến vài chục nghìn MW.",
          "D. trên 1 000 000 kW."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ là mạng điện có công suất tiêu thụ điện năng từ vài chục đến vài trăm kW, lấy điện từ lưới phân phối cấp cho tải (SGK trang 31)."
      },
      {
        "id": 40,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Đặc điểm nào sau đây là đặc điểm của mạng điện sản xuất quy mô nhỏ?",
        "options": [
          "A. Tải phân bố rải rác trên phạm vi hàng trăm km vuông.",
          "B. Tải phân bố tập trung, mạng điện dùng cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập.",
          "C. Toàn bộ thiết bị đều dùng điện áp 110 kV.",
          "D. Không cần thiết bị đóng cắt và bảo vệ quá tải."
        ],
        "correct": 1,
        "explain": "Mạng điện sản xuất quy mô nhỏ có các đặc điểm: tải phân bố tập trung; dùng máy biến áp riêng hoặc lấy điện từ đường hạ áp 380/220 V; mạng điện cho thiết bị sản xuất và mạng điện chiếu sáng hoạt động độc lập (SGK trang 31)."
      },
      {
        "id": 41,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Trạm biến áp hạ áp trong mạng điện sản xuất quy mô nhỏ có nhiệm vụ gì?",
        "options": [
          "A. Tăng điện áp từ 380 V lên 500 kV để truyền tải đi xa.",
          "B. Hạ áp từ lưới điện phân phối (thường là đường trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp 380/220 V.",
          "C. Đo đếm trực tiếp công suất của từng bóng đèn trong xưởng.",
          "D. Biến đổi dòng xoay chiều thành dòng một chiều cho toàn bộ nhà máy."
        ],
        "correct": 1,
        "explain": "Trạm biến áp có vai trò hạ áp từ lưới điện phân phối (trung áp 22 kV hoặc 35 kV) xuống điện áp hạ áp (380/220 V) cấp cho cơ sở sản xuất (SGK trang 33)."
      },
      {
        "id": 42,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện nào sau đây nhận điện trực tiếp từ máy biến áp hạ áp để phân phối cho các tủ điện nhánh của các phân xưởng?",
        "options": [
          "A. Tủ điện chiếu sáng",
          "B. Tủ điện động lực",
          "C. Tủ điện phân phối tổng",
          "D. Tủ điều khiển máy CNC"
        ],
        "correct": 2,
        "explain": "Tủ điện phân phối tổng được đặt ở trạm biến áp, lấy điện từ đường hạ áp 380/220 V của máy biến áp để phân phối cho các tủ điện phân phối nhánh ở các phân xưởng sản xuất (SGK trang 33)."
      },
      {
        "id": 43,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Tủ điện động lực trong phân xưởng sản xuất có vai trò chính là",
        "options": [
          "A. cấp nguồn cho hệ thống chiếu sáng bảo vệ hành lang.",
          "B. lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng (động cơ điện, máy hàn, máy công cụ...).",
          "C. tăng điện áp từ 220 V lên 22 kV.",
          "D. lọc sóng hài và tích trữ điện năng."
        ],
        "correct": 1,
        "explain": "Tủ điện động lực được đặt ở phân xưởng sản xuất, lấy nguồn từ tủ phân phối nhánh để cấp cho tải tiêu thụ là các máy sản xuất trong phân xưởng, chứa thiết bị đóng cắt và bảo vệ quá tải, ngắn mạch (SGK trang 33)."
      },
      {
        "id": 44,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Khi thực hiện thao tác ĐÓNG ĐIỆN cho một xưởng sản xuất, quy trình an toàn chuẩn là gì?",
        "options": [
          "A. Đóng từ thiết bị tiêu thụ trước, sau đó mới đóng ngược về tủ tổng và nguồn.",
          "B. Đóng lần lượt từ nguồn đến tải (Trạm biến áp -> Tủ phân phối tổng -> Tủ phân phối nhánh -> Tủ động lực/chiếu sáng -> Bật thiết bị máy móc).",
          "C. Bật tất cả các máy móc cùng lúc rồi mới đóng cầu dao nguồn.",
          "D. Đóng ngẫu nhiên bất kì công tắc nào trước cũng được."
        ],
        "correct": 1,
        "explain": "Quy trình đóng điện an toàn: Đóng lần lượt từ nguồn đến tải (Nguồn -> Tủ tổng -> Tủ nhánh -> Tủ động lực / chiếu sáng -> Tải máy móc). Mục đích là để các cấp bảo vệ sẵn sàng và tránh quá tải đột ngột (SGK trang 33)."
      },
      {
        "id": 45,
        "topic": "BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ",
        "question": "Vì sao khi CẮT ĐIỆN xưởng sản xuất, người ta phải thực hiện theo chiều ngược lại (cắt từ phía tải trước, sau đó mới cắt dần về tủ nhánh và tủ tổng)?",
        "options": [
          "A. Để tránh tiêu tốn nhiều điện năng không cần thiết.",
          "B. Để ngắt dòng điện tải đang chạy lớn trước, tránh sinh ra hồ quang điện nguy hiểm gây cháy nổ, hư hỏng tiếp điểm tại cầu dao/aptomat phía nguồn.",
          "C. Để làm nguội dây dẫn từ từ.",
          "D. Vì tủ phân phối tổng không có khả năng ngắt dòng điện."
        ],
        "correct": 1,
        "explain": "Cắt điện từ tải về nguồn nhằm giảm dòng điện trước khi ngắt các thiết bị phía nguồn. Nếu ngắt tủ tổng khi tải đang ăn dòng cực lớn sẽ phát sinh hồ quang điện rất mạnh, có thể gây nổ tiếp điểm, phóng điện nguy hiểm cho người vận hành (SGK trang 33)."
      },
      {
        "id": 46,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Mạng điện hạ áp dùng trong sinh hoạt thuộc loại lưới điện nào?",
        "options": [
          "A. Lưới điện siêu cao áp.",
          "B. Lưới điện truyền tải.",
          "C. Lưới điện phân phối.",
          "D. Lưới điện cao áp trên 110 kV."
        ],
        "correct": 2,
        "explain": "Mạng điện hạ áp dùng trong sinh hoạt thuộc lưới điện phân phối, có nhiệm vụ truyền tải năng lượng điện từ trạm biến áp phân phối đến công tơ điện của các hộ gia đình (SGK trang 34)."
      },
      {
        "id": 47,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Thông số kĩ thuật điện áp định mức và tần số của mạng điện hạ áp sinh hoạt tại Việt Nam là",
        "options": [
          "A. 110 V / 60 Hz",
          "B. 380/220 V / 50 Hz",
          "C. 220 V / 60 Hz",
          "D. 500 kV / 50 Hz"
        ],
        "correct": 1,
        "explain": "Thông số kĩ thuật định mức của mạng điện hạ áp dùng trong sinh hoạt ở nước ta là: Điện áp dây/pha: 380/220 V; Tần số điện lưới: 50 Hz (SGK trang 34 & 36)."
      },
      {
        "id": 48,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Sai số điện áp cho phép đối với mạng điện hạ áp dùng trong sinh hoạt là không quá",
        "options": [
          "A. ± 1%",
          "B. ± 5%",
          "C. ± 15%",
          "D. ± 20%"
        ],
        "correct": 1,
        "explain": "Theo SGK Công nghệ 12 trang 36: Mức sai số cho phép đối với điện áp là không quá ± 5%, tần số cũng không quá ± 5% so với giá trị định mức."
      },
      {
        "id": 49,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Công suất của lưới điện hạ áp sinh hoạt thường dao động trong khoảng nào tùy thuộc quy mô khu dân cư?",
        "options": [
          "A. Từ 1 kW đến 10 kW",
          "B. Từ 50 kW đến 2 500 kW",
          "C. Từ 10 000 kW đến 50 000 kW",
          "D. Trên 100 000 kW"
        ],
        "correct": 1,
        "explain": "Công suất của lưới điện hạ áp sinh hoạt từ 50 kW đến 2 500 kW, tuỳ thuộc vào công suất của máy biến áp cấp điện cho khu dân cư đó (SGK trang 36)."
      },
      {
        "id": 50,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối khu vực (nhánh) thường là đường dây",
        "options": [
          "A. một pha hai dây.",
          "B. ba pha ba dây không có dây trung tính.",
          "C. ba pha bốn dây.",
          "D. một pha một dây."
        ],
        "correct": 2,
        "explain": "Đường dây trục chính nối từ tủ điện phân phối tổng đến các tủ điện phân phối nhánh là ba pha bốn dây (gồm 3 dây pha và 1 dây trung tính) (SGK trang 36)."
      },
      {
        "id": 51,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Đường dây nhánh nối từ tủ điện phân phối khu vực vào công tơ điện của các hộ gia đình chủ yếu là",
        "options": [
          "A. đường dây một pha hai dây (dây pha và dây trung tính).",
          "B. đường dây cáp quang.",
          "C. đường dây cao áp 22 kV.",
          "D. đường dây siêu dẫn nhiệt độ thấp."
        ],
        "correct": 0,
        "explain": "Đường dây nhánh nối từ tủ điện khu vực đến các hộ gia đình chủ yếu là các đường một pha hai dây, một số ít trường hợp có nhu cầu lớn là ba pha bốn dây (SGK trang 36)."
      },
      {
        "id": 52,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Loại aptomat nào sau đây thường được sử dụng trong tủ điện phân phối tổng tại trạm biến áp hạ áp do có khả năng đóng cắt dòng điện rất lớn?",
        "options": [
          "A. MCB (Miniature Circuit Breaker - aptomat tép)",
          "B. Cầu chì ống sứ nhỏ",
          "C. ACB (Air Circuit Breaker - máy cắt không khí)",
          "D. Công tắc xoay một cực"
        ],
        "correct": 2,
        "explain": "Trong các tủ điện phân phối: ACB (máy cắt không khí) và MCCB (aptomat khối) thường dùng cho tủ tổng do dòng định mức lớn; còn MCB (aptomat tép) thường dùng cho tủ khu vực và hộ gia đình (Hình 7.3 SGK trang 35-36)."
      },
      {
        "id": 53,
        "topic": "BÀI 7: MẠNG ĐIỆN HẠ ÁP SINH HOẠT",
        "question": "Để đảm bảo mạng điện ba pha không bị lệch pha nghiêm trọng khi cấp điện cho các hộ gia đình, các kĩ sư thiết kế mạng điện cần phải",
        "options": [
          "A. nối tất cả các hộ gia đình vào cùng một pha duy nhất.",
          "B. phân chia các đường nhánh cấp điện cho các hộ gia đình rải đều để đảm bảo cân bằng tải giữa ba pha của nguồn.",
          "C. bắt buộc mọi gia đình phải dùng động cơ ba pha.",
          "D. không nối dây trung tính về nguồn."
        ],
        "correct": 1,
        "explain": "Các đường rẽ nhánh một pha được thiết kế chia đều cho các pha nhằm đảm bảo cân bằng tải giữa các pha của nguồn điện, giảm dòng điện chạy trong dây trung tính và ổn định điện áp (SGK trang 36)."
      },
      {
        "id": 54,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "a. Khi lò sấy nối hình tam giác, điện áp đặt trên mỗi điện trở R bằng 380 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Khi tải nối hình tam giác (Δ), điện áp pha trên tải bằng điện áp dây của nguồn: Up(tải) = Ud = 380 V.",
        "subLabel": "1a"
      },
      {
        "id": 55,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "b. Cường độ dòng điện chạy qua mỗi điện trở của lò sấy là Ip = 10 A.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Dòng điện pha của lò sấy: Ip = Up / R = 380 / 38 = 10 A.",
        "subLabel": "1b"
      },
      {
        "id": 56,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "c. Dòng điện dây cấp cho lò sấy nối hình tam giác có độ lớn bằng dòng điện pha Ip = 10 A.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Đối với tải nối hình tam giác (Δ), dòng điện dây Id = √3.Ip = √3 × 10 ≈ 17,32 A, không bằng Ip.",
        "subLabel": "1c"
      },
      {
        "id": 57,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "d. Để các bóng đèn 220V sáng bình thường, bắt buộc phải nối hệ thống đèn theo hình sao có dây trung tính vào nguồn 380/220V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / TÌNH HUỐNG THỰC TẾ: Mạch điện ba pha xưởng cơ khí</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một xưởng cơ khí nhỏ sử dụng nguồn điện ba pha bốn dây với điện áp dây Ud = 380 V, điện áp pha Up = 220 V. Phân xưởng có một lò sấy điện trở ba pha đối xứng công suất lớn gồm 3 điện trở R = 38 Ω mắc hình tam giác (Δ), và một hệ thống đèn chiếu sáng gồm 12 bóng sợi đốt loại 220 V - 100 W được chia đều cho 3 pha mắc hình sao (Y) có dây trung tính.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Nguồn có điện áp pha Up = 220 V phù hợp với điện áp định mức của bóng đèn (220 V). Nối hình sao có dây trung tính giữ cho điện áp mỗi pha luôn ổn định ở mức 220 V ngay cả khi tải các pha không hoàn toàn bằng nhau.",
        "subLabel": "1d"
      },
      {
        "id": 58,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "a. Đường dây 500 kV Bắc - Nam thuộc lưới điện truyền tải của hệ thống điện quốc gia.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Lưới truyền tải có điện áp trên 110 kV, đường dây 500 kV thuộc cấp siêu cao áp và là trục truyền tải điện năng chính kết nối hai miền Nam - Bắc.",
        "subLabel": "2a"
      },
      {
        "id": 59,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "b. Các nhà máy nhiệt điện than như Phả Lại, Vĩnh Tân có ưu điểm là không thải khí CO2 ra môi trường.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Nhiệt điện than đốt nhiên liệu hóa thạch nên thải ra lượng khí nhà kính CO2, tro xỉ và khí SO2, NOx rất lớn gây ô nhiễm môi trường.",
        "subLabel": "2b"
      },
      {
        "id": 60,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "c. Điện mặt trời và điện gió là các nguồn năng lượng tái tạo sạch nhưng công suất phụ thuộc vào điều kiện tự nhiên.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Năng lượng mặt trời và gió là nguồn năng lượng tái tạo, vô tận và sạch; tuy nhiên nhược điểm là công suất thấp hơn nhà máy lớn và thiếu ổn định (phụ thuộc cường độ nắng và sức gió).",
        "subLabel": "2c"
      },
      {
        "id": 61,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "d. Các trạm biến áp trung gian 220/110 kV và 110/22 kV làm nhiệm vụ tăng điện áp để đưa vào các hộ sinh hoạt.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / THÔNG TIN: Hệ thống điện quốc gia Việt Nam</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Hệ thống điện quốc gia Việt Nam gồm các nguồn điện (thủy điện Sơn La, Hòa Bình; nhiệt điện Phả Lại, Vĩnh Tân; điện mặt trời, điện gió Ninh Thuận...), liên kết với nhau qua lưới truyền tải siêu cao áp 500 kV Bắc - Nam và các cấp 220 kV, 110 kV để cấp điện cho các trung tâm phụ tải và hộ sinh hoạt trên toàn quốc.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Trạm 220/110 kV và 110/22 kV là các trạm biến áp hạ áp (hạ từ 220 kV xuống 110 kV, rồi hạ tiếp xuống 22 kV trung áp). Điện sinh hoạt dùng điện áp hạ áp 220 V nên phải qua tiếp trạm hạ áp 22/0,4 kV.",
        "subLabel": "2d"
      },
      {
        "id": 62,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "a. Cơ sở chế biến này cần xây dựng một trạm biến áp hạ áp riêng để biến đổi điện áp từ 22 kV xuống 380/220 V.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Với công suất 150 kW và lấy nguồn trung áp 22 kV, xưởng sản xuất quy mô nhỏ cần lắp đặt một trạm biến áp hạ áp 22/0,4 kV riêng để cấp điện cho hệ thống thiết bị.",
        "subLabel": "3a"
      },
      {
        "id": 63,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "b. Tủ điện phân phối tổng của cơ sở nên được đặt trực tiếp cạnh các máy trộn thực phẩm ẩm ướt trong phân xưởng.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Tủ điện phân phối tổng thường được đặt ngay tại phòng điện của trạm biến áp, ở nơi khô ráo, an toàn, có khóa bảo vệ; không được đặt cạnh khu vực ẩm ướt dễ gây chập cháy nguy hiểm.",
        "subLabel": "3b"
      },
      {
        "id": 64,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "c. Mạng điện động lực và mạng điện chiếu sáng của phân xưởng phải được bố trí cấp nguồn độc lập từ tủ phân phối nhánh.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Theo đặc điểm của mạng điện sản xuất quy mô nhỏ (SGK trang 31): Mạng điện dùng cho các thiết bị sản xuất (động lực) và mạng điện chiếu sáng hoạt động độc lập nhằm tránh nhấp nháy đèn khi máy móc khởi động và đảm bảo ánh sáng khi sửa chữa máy.",
        "subLabel": "3c"
      },
      {
        "id": 65,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "d. Để tiết kiệm thời gian, cuối ca làm việc công nhân chỉ cần ngắt aptomat tổng ở trạm biến áp mà không cần tắt các máy sản xuất.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / DỰ ÁN: Mạng điện cơ sở sản xuất 150 kW</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Một cơ sở chế biến thực phẩm tư nhân chuẩn bị xây dựng mạng điện sản xuất quy mô nhỏ với công suất tính toán khoảng 150 kW, lấy nguồn từ đường dây trung áp 22 kV của điện lực địa phương đi ngang qua cổng xưởng.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Quy tắc an toàn nghiêm ngặt khi cắt điện là phải cắt từ tải trước (tắt máy móc -> ngắt tủ động lực/chiếu sáng -> ngắt tủ nhánh -> ngắt tủ tổng) để tránh hồ quang điện nguy hiểm và bảo vệ thiết bị.",
        "subLabel": "3d"
      },
      {
        "id": 66,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "a. Vị trí kĩ sư thiết kế điện của công ty yêu cầu người ứng tuyển phải có trình độ từ đại học trở lên chuyên ngành kĩ thuật điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Theo yêu cầu chuẩn trình độ nghề nghiệp trong SGK trang 11, vị trí kĩ sư yêu cầu trình độ đại học chuyên ngành kĩ thuật điện.",
        "subLabel": "4a"
      },
      {
        "id": 67,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "b. Thợ điện lắp đặt chỉ cần hiểu biết về an toàn điện mà không cần biết đọc hiểu sơ đồ bản vẽ kĩ thuật.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Người làm nghề lắp đặt điện bắt buộc phải có kĩ năng đọc hiểu sơ đồ thiết kế điện để lắp đặt đúng vị trí, đúng sơ đồ và đảm bảo kĩ thuật (SGK trang 12).",
        "subLabel": "4b"
      },
      {
        "id": 68,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "c. Kĩ thuật viên vận hành điện thường xuyên làm việc ngoài trời để trực tiếp đào hào chôn cáp ngầm.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "SAI. Nhóm công việc vận hành điện thường làm việc tại các phòng điều hành, trạm biến áp để theo dõi, điều khiển thông số; còn việc đào rãnh chôn cáp thuộc nhóm công việc lắp đặt điện.",
        "subLabel": "4c"
      },
      {
        "id": 69,
        "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
        "question": "d. Sự phát triển mạnh mẽ của năng lượng tái tạo và lưới điện thông minh mở ra nhiều cơ hội việc làm mới cho ngành kĩ thuật điện.<br>\n    <div class=\"geo-table-card geo-passage-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.35); border-left: 4px solid #3b82f6; border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #60a5fa; font-size: 13px; margin-bottom: 4px;\">📄 BỐI CẢNH / ĐỊNH HƯỚNG: Tuyển dụng ngành kĩ thuật điện</div>\n      <div style=\"font-size: 13px; line-height: 1.65; color: #e2e8f0;\">Bạn An đang tìm hiểu về định hướng nghề nghiệp trong lĩnh vực kĩ thuật điện và khảo sát thông tin tuyển dụng của một công ty xây lắp cơ điện tại khu công nghiệp.</div>\n    </div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "ĐÚNG. Nhu cầu chuyển đổi xanh, phát triển điện gió, điện mặt trời, xe điện và lưới điện thông minh tạo ra nhu cầu nhân lực rất lớn cho ngành kĩ thuật điện trong tương lai.",
        "subLabel": "4d"
      },
      {
        "id": 70,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một nguồn điện ba pha đối xứng có điện áp pha Up = 220 V. Giá trị của điện áp dây Ud xấp xỉ bằng bao nhiêu vôn?",
        "options": [
          "A. 127 V",
          "B. 220 V",
          "C. 380 V (hoặc 381 V)",
          "D. 440 V"
        ],
        "correct": 2,
        "explain": "Ta có công thức liên hệ giữa điện áp dây và điện áp pha của nguồn đối xứng: Ud = √3.Up = √3 × 220 ≈ 381 V (trong thực tế mạng điện quy ước là 380 V)."
      },
      {
        "id": 71,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Cho mạch điện xoay chiều một pha có R = 30 Ω, cảm kháng XL = 60 Ω, dung kháng XC = 20 Ω. Độ lớn tổng trở z_t của mạch điện là",
        "options": [
          "A. 110 Ω",
          "B. 50 Ω",
          "C. 70 Ω",
          "D. 10 Ω"
        ],
        "correct": 1,
        "explain": "Điện kháng của mạch: X = XL - XC = 60 - 20 = 40 Ω. Tổng trở: z_t = √(R² + X²) = √(30² + 40²) = 50 Ω."
      },
      {
        "id": 72,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một tải ba pha gồm 3 cuộn dây đối xứng có điện trở R = 12 Ω và cảm kháng XL = 16 Ω mỗi pha nối hình sao (Y) vào nguồn có điện áp dây Ud = 380 V. Cường độ dòng điện pha Ip chạy qua mỗi cuộn dây là",
        "options": [
          "A. 11 A",
          "B. 19 A",
          "C. 31,6 A",
          "D. 22 A"
        ],
        "correct": 0,
        "explain": "Tổng trở mỗi pha của tải: z_p = √(R² + XL²) = √(12² + 16²) = 20 Ω. Do tải nối sao: Up = Ud / √3 = 380 / √3 ≈ 220 V. Cường độ dòng điện pha: Ip = Up / z_p = 220 / 20 = 11 A."
      },
      {
        "id": 73,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một động cơ điện ba pha nối hình tam giác (Δ) tiêu thụ dòng điện pha Ip = 15 A. Cường độ dòng điện dây Id chạy trên đường dây cấp điện cho động cơ là",
        "options": [
          "A. 15 A",
          "B. 8,66 A",
          "C. 25,98 A",
          "D. 45 A"
        ],
        "correct": 2,
        "explain": "Tải nối tam giác (Δ) đối xứng thì: Id = √3.Ip = √3 × 15 ≈ 25,98 A."
      },
      {
        "id": 74,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Một khu tập thể gồm 150 hộ gia đình, mỗi hộ tiêu thụ công suất trung bình vào giờ cao điểm là 4 kW. Cần chọn máy biến áp phân phối có công suất định mức tối thiểu là bao nhiêu kVA (giả sử hệ số công suất cosφ = 0,8)?",
        "options": [
          "A. 150 kVA",
          "B. 480 kVA",
          "C. 750 kVA",
          "D. 600 kVA"
        ],
        "correct": 2,
        "explain": "Tổng công suất tác dụng: P = 150 × 4 = 600 kW. Công suất biểu kiến của máy biến áp: S = P / cosφ = 600 / 0,8 = 750 kVA."
      },
      {
        "id": 75,
        "topic": "BÀI TẬP TÍNH TOÁN MẠCH 3 PHA",
        "question": "Điện áp danh định mạng điện hạ áp sinh hoạt là 220 V. Theo quy chuẩn sai số cho phép không quá ±5%, dải điện áp thực tế tại ổ cắm trong nhà chấp nhận được là",
        "options": [
          "A. từ 200 V đến 240 V",
          "B. từ 209 V đến 231 V",
          "C. từ 215 V đến 225 V",
          "D. từ 180 V đến 260 V"
        ],
        "correct": 1,
        "explain": "Độ lệch điện áp 5%: ΔU = 220 × 5% = 11 V. Dải điện áp cho phép: U_min = 220 - 11 = 209 V; U_max = 220 + 11 = 231 V."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CONGNGHE_CATEGORIES = CONGNGHE_CATEGORIES;
  window.CONGNGHE_ALL_QUESTIONS = CONGNGHE_ALL_QUESTIONS;
  window.CONGNGHE_TOPICS_DATABASE = CONGNGHE_TOPICS_DATABASE;
}
