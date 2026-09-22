# 🎓 HỆ THỐNG ÔN THI TRẮC NGHIỆM LỊCH SỬ 12 (GDPT 2018)
> **Ứng dụng web ôn thi trắc nghiệm Lịch sử 12 chuẩn ma trận thi Tốt nghiệp THPT mới với 440 câu hỏi, lời giải chi tiết, âm thanh Lofi thư giãn và Bảng vàng vinh danh thời gian thực.**

---

## 📌 1. Giới Thiệu Dự Án

Dự án **Web App Luyện Thi Lịch Sử 12** là một giải pháp ôn tập hiện đại, trực quan và hấp dẫn dành cho học sinh THPT (đặc biệt là lớp 12) chuẩn bị cho kỳ thi Tốt nghiệp THPT theo **Chương trình Giáo dục phổ thông 2018**.

Ứng dụng được thiết kế theo triết lý **Offline-First**, chạy mượt mà ngay trên trình duyệt máy tính và điện thoại mà không cần cài đặt phần mềm phức tạp.

---

## ✨ 2. Các Tính Năng Nổi Bật

### 📚 Ngân Hàng Câu Hỏi 100% Chuẩn GDPT 2018
* **16 Chuyên đề / Bài học** với tổng cộng **440 câu hỏi trắc nghiệm 4 lựa chọn** (A, B, C, D).
* **Lời giải chi tiết từng câu:** Giải thích rõ ràng nguyên nhân, sự kiện lịch sử, ý nghĩa; được tích hợp trong thanh Accordion thu gọn/mở rộng `[💡 Lời giải chi tiết | Xem thêm ▼]`.
* **Chế độ thi đa dạng:**
  * 🌟 **Thi Thử THPT:** Tự động trích xuất ngẫu nhiên 40 câu hỏi từ toàn bộ 16 bài học mô phỏng một đề thi thật của Bộ GD&ĐT.
  * 🏆 **Tất Cả 16 Bài (Marathon 440 câu):** Luyện tập toàn diện toàn bộ ngân hàng câu hỏi.
  * 📖 **Ôn theo từng bài:** Học sinh có thể chọn ôn riêng lẻ bất kỳ bài học nào từ Bài 1 đến Bài 13, Chủ đề Bác Hồ hay Ôn tập Lịch sử Lớp 11.

### 🎨 Giao Diện Sang Trọng & Đậm Chất Lịch Sử
* **Phong cách Dark Navy Glassmorphism:** Tông màu xanh thẫm hiện đại kết hợp hiệu ứng kính mờ tinh tế.
* **Hình nền Cờ Tổ Quốc & Bác Hồ:** Tích hợp ảnh nền hào hùng với Bác Hồ, cờ đỏ sao vàng và trống đồng Đông Sơn được nhúng trực tiếp dưới dạng Base64 Data URI, không bao giờ bị lỗi hiển thị.
* **Favicon Tab Web riêng biệt:** Biểu tượng lá cờ Tổ quốc bo tròn viền vàng hiển thị nổi bật trên thanh tab trình duyệt.
* **100% Responsive:** Tối ưu hóa mượt mà cho mọi kích thước màn hình từ điện thoại (iPhone, Samsung, Xiaomi...) đến máy tính bảng và PC.

### 🎧 Âm Thanh SFX & Nhạc Nền Lofi
* **Web Audio SFX:** Hiệu ứng âm thanh khi bấm nút, âm thanh chuông chúc mừng khi chọn đúng, âm thanh thông báo khi chọn sai (được tổng hợp trực tiếp bằng Web Audio API mà không cần tải file âm thanh ngoài).
* **Nhạc nền Lofi thư giãn:** Tích hợp trình phát nhạc Lofi piano/guitar giúp giảm căng thẳng và tăng cường tập trung khi làm bài.

### 🏆 Bảng Vàng Vinh Danh (Firebase Realtime Database)
* **Lưu điểm trực tuyến:** Tự động đồng bộ điểm số (thang điểm 10), thời gian làm bài, bài thi lên máy chủ Firebase thời gian thực.
* **Chế độ xem thông minh:**
  * **Theo Thí Sinh:** Tự động lọc ra thành tích cao nhất của từng bạn và hiển thị tổng số lần đã làm bài.
  * **Tất Cả Lượt Thi:** Xem lịch sử toàn bộ các lượt làm bài của mọi người.
* **Hỗ trợ chế độ "Ẩn danh":** Nếu học sinh không nhập tên, hệ thống tự động ghi nhận là "Ẩn danh" và phân tách từng lượt thi độc lập.
* **Thả cảm xúc tương tác:** Hỗ trợ tính năng chạm giữ (long-press) để bung thanh cảm xúc (`❤️ 😆 😮 🔥 😡`) tương tự mạng xã hội.

### 📊 Màn Hình Đánh Giá Kết Quả Chuyên Sâu
* **Đồng hồ đo Donut SVG:** Trực quan hóa tỷ lệ đúng/sai và phần trăm chính xác.
* **Nhận xét thông minh:** Đưa ra lời khuyên phù hợp dựa trên mức điểm đạt được.
* **Tính năng "Phục thù":** Nút bấm cho phép học sinh làm lại riêng những câu đã trả lời sai để ghi nhớ kiến thức 100%.

---

## 🗂️ 3. Cấu Trúc Ngân Hàng Câu Hỏi (440 Câu)

| STT | Mã bài | Tên Chuyên đề / Bài học | Số câu |
|:---:|:---:|---|:---:|
| 1 | `bai1` | **Bài 1: Liên Hợp Quốc (UN)** | 28 |
| 2 | `bai2` | **Bài 2: Trật tự thế giới trong Chiến tranh lạnh** | 28 |
| 3 | `bai3` | **Bài 3: Trật tự thế giới sau Chiến tranh lạnh** | 25 |
| 4 | `bai4` | **Bài 4: Sự ra đời và phát triển của ASEAN** | 26 |
| 5 | `bai5` | **Bài 5: Cộng đồng ASEAN: Từ ý tưởng đến hiện thực** | 24 |
| 6 | `bai6` | **Bài 6: Cách mạng tháng Tám năm 1945** | 35 |
| 7 | `bai7` | **Bài 7: Cuộc kháng chiến chống thực dân Pháp (1945 – 1954)** | 31 |
| 8 | `bai8` | **Bài 8: Cuộc kháng chiến chống Mỹ, cứu nước (1954 – 1975)** | 42 |
| 9 | `bai9` | **Bài 9: Cuộc đấu tranh bảo vệ Tổ quốc từ sau tháng 4-1975 đến nay** | 14 |
| 10 | `bai10` | **Bài 10: Khái quát về công cuộc Đổi mới từ năm 1986 đến nay** | 15 |
| 11 | `bai11` | **Bài 11: Thành tựu cơ bản và bài học của công cuộc Đổi mới** | 35 |
| 12 | `bai12` | **Bài 12: Hoạt động đối ngoại của Việt Nam (đầu TK XX – 1975)** | 30 |
| 13 | `bai13` | **Bài 13: Hoạt động đối ngoại của Việt Nam (1975 đến nay)** | 26 |
| 14 | `chude6` | **Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam** | 41 |
| 15 | `on11_tg` | **Ôn tập 11: Lịch sử Thế giới lớp 11** | 20 |
| 16 | `on11_vn` | **Ôn tập 11: Lịch sử Việt Nam lớp 11** | 20 |
| **Tổng** | | **Toàn bộ chương trình ôn thi Tốt nghiệp THPT** | **440 câu** |

---

## 🛠️ 4. Công Nghệ & Kiến Trúc Kỹ Thuật

* **Ngôn ngữ:** HTML5, CSS3, JavaScript thuần (Vanilla JS ES6+).
* **Styling:** CSS Grid, Flexbox, Backdrop Filter, CSS Keyframe Animations.
* **Phông chữ:** `Plus Jakarta Sans` (Google Fonts).
* **Cơ sở dữ liệu đám mây:** Google Firebase Realtime Database (sử dụng giao thức REST API không tiêu tốn kết nối nền và tiết kiệm băng thông tối đa).
* **Hiệu ứng pháo hoa:** Canvas Confetti.
* **Âm thanh:** Web Audio API (AudioContext, OscillatorNode, GainNode).

---

## 🚀 5. Hướng Dẫn Sử Dụng & Triển Khai

### Chạy trực tiếp trên máy:
1. Nhấp đúp vào file `index.html` để mở ngay trên bất kỳ trình duyệt nào (Google Chrome, Cốc Cốc, Microsoft Edge, Safari,...).
2. Ứng dụng chạy hoàn toàn offline cho phần thi trắc nghiệm; chỉ cần có mạng internet khi muốn đồng bộ lên Bảng Vàng trực tuyến.

### Triển khai lên Web miễn phí (GitHub Pages, Vercel, Netlify):
* **GitHub Pages:**
  1. Tạo một repository mới trên GitHub (VD: `quiz-lich-su-12`).
  2. Tải file `index.html` và `bg.jpg` lên repository.
  3. Vào mục **Settings** -> **Pages** -> Chọn nhánh `main` và bấm **Save**.
  4. Nhận ngay đường link web trực tuyến (VD: `https://username.github.io/quiz-lich-su-12/`) để chia sẻ cho cả lớp cùng thi!
