// =========================================================================
// DỮ LIỆU ÔN TẬP GIỮA KỲ 1 - TIN HỌC 12 (NH 2026 - 2027)
// NGUỒN: TRƯỜNG THPT NGUYỄN HUỆ - HỆ THỐNG vnEdu LMS
// BỘ CÂU HỎI CHUẨN KÈM ĐÁP ÁN ĐẠT 10/10 ĐIỂM
// CHỦ ĐỀ: TRÍ TUỆ NHÂN TẠO (AI) & THIẾT KẾ TRANG WEB VỚI HTML
// =========================================================================

const INFORMATICS_CATEGORIES = [
  {
    "id": "all",
    "name": "🌐 Tất cả bài (40 câu)",
    "icon": "🌐"
  },
  {
    "id": "gk1",
    "name": "🎯 Đề Giữa Kì 1 (40 câu)",
    "icon": "🎯"
  },
  {
    "id": "ai",
    "name": "🤖 Trí Tuệ Nhân Tạo (16 câu)",
    "icon": "🤖"
  },
  {
    "id": "html",
    "name": "💻 Thiết Kế Web HTML (24 câu)",
    "icon": "💻"
  },
  {
    "id": "tf",
    "name": "⚖️ Đúng / Sai (16 câu)",
    "icon": "⚖️"
  },
  {
    "id": "mcq",
    "name": "📖 Trắc Nghiệm 4 PA (24 câu)",
    "icon": "📖"
  }
];

const INFORMATICS_TOPICS_DATABASE = [
  {
    "id": "info_gk1",
    "title": "🎯 ĐỀ ÔN TẬP GIỮA KỲ 1: TIN HỌC 12 (40 câu chuẩn 10/10)",
    "icon": "🎯",
    "description": "Bộ câu hỏi ôn tập Giữa kì 1 chuẩn trường THPT Nguyễn Huệ (Hệ thống vnEdu LMS): Trí tuệ nhân tạo (AI) & Ngôn ngữ HTML",
    "sub": "40 câu trắc nghiệm đơn & chùm Đúng/Sai chuẩn ma trận",
    "category": "gk1",
    "catId": "gk1",
    "questions": [
      {
        "id": 1,
        "subId": "1-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Danh sách không có thứ tự được tạo bằng cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ol&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Danh sách không thứ tự dùng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> là có thứ tự</div>\n</div>"
      },
      {
        "id": 2,
        "subId": "1-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Danh sách không có thứ tự dùng để đánh dấu đầu dòng cho nội dung bằng kí hiệu (ví dụ: dấu chấm tròn)\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Đánh dấu đầu dòng bằng kí hiệu (chấm tròn,...)</div>\n</div>"
      },
      {
        "id": 3,
        "subId": "1-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> dùng để tạo danh sách và thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> dùng để đánh dấu từng mục trong danh sách\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> tạo danh sách, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> tạo từng mục</div>\n</div>"
      },
      {
        "id": 4,
        "subId": "1-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Các thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải được đặt bên ngoài cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ul&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải nằm bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code></div>\n</div>"
      },
      {
        "id": 5,
        "subId": "2",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Robot y tế nào được sử dụng tại Bệnh viện K (Việt Nam) vào tháng 6/2023?",
        "options": [
          "A. Robot Da Vinci.",
          "B. Robot AIBO",
          "C. Robot ASIMO",
          "D. ChatGPT"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Robot Da Vinci.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Robot y tế Da Vinci (tại Bệnh viện K tháng 6/2023)</div>\n</div>"
      },
      {
        "id": 6,
        "subId": "3",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> có chức năng gì?",
        "options": [
          "A. Canh lề trái văn bản",
          "B. Canh giữa văn bản",
          "C. Canh lề phải văn bản",
          "D. Canh đều hai bên"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Canh giữa văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> dùng canh giữa văn bản</div>\n</div>"
      },
      {
        "id": 7,
        "subId": "4",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể phân tích những loại hình ảnh y khoa nào để giúp phát hiện dấu hiệu của bệnh?",
        "options": [
          "A. Chỉ ảnh X-quang.",
          "B. Chỉ ảnh siêu âm.",
          "C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).",
          "D. Chỉ ảnh chụp từ điện thoại."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> X-quang, cắt lớp vi tính (CT scan), cộng hưởng từ (MRI)</div>\n</div>"
      },
      {
        "id": 8,
        "subId": "5",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "ChatGPT cải thiện tri thức của mình theo thời gian bằng cách nào?",
        "options": [
          "A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.",
          "B. Chỉ do các kỹ sư cập nhật thủ công.",
          "C. Chỉ học từ các hình ảnh.",
          "D. Chỉ học từ dữ liệu huấn luyện ban đầu."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thu thập và học từ dữ liệu mới khi gặp thông tin chưa biết</div>\n</div>"
      },
      {
        "id": 9,
        "subId": "6",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Theo tài liệu, tính đến năm 2023, các hệ thống AI hiện có đều thuộc loại nào?",
        "options": [
          "A. Cả ANI và AGI",
          "B. AI hẹp (ANI)",
          "C. AI siêu trí tuệ",
          "D. AI tổng quát (AGI)"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Hệ thống AI hiện có đều thuộc loại AI hẹp (ANI)</div>\n</div>"
      },
      {
        "id": 10,
        "subId": "7",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI được chia thành hai loại chính là gì?",
        "options": [
          "A. AI cho robot và AI cho máy tính",
          "B. AI hẹp (ANI) và AI tổng quát (AGI)",
          "C. AI phần cứng và AI phần mềm",
          "D. AI tự nhiên và AI nhân tạo"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI) và AI tổng quát (AGI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI được chia thành 2 loại: AI hẹp (ANI) & AI tổng quát (AGI)</div>\n</div>"
      },
      {
        "id": 11,
        "subId": "8",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực vận chuyển ứng dụng nào của robot thông minh tích hợp AI?",
        "options": [
          "A. Dạy ngôn ngữ cho người học.",
          "B. Hỗ trợ phẫu thuật.",
          "C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.",
          "D. Chẩn đoán bệnh."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng</div>\n</div>"
      },
      {
        "id": 12,
        "subId": "9",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể ảnh hưởng đến \"Việc làm\" (Employment) như thế nào?",
        "options": [
          "A. AI chỉ tạo ra các công việc mới.",
          "B. AI chỉ thay thế các công việc hiện tại.",
          "C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.",
          "D. AI không ảnh hưởng đến thị trường lao động."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI vừa tạo công việc mới, vừa thay thế công việc hiện tại</div>\n</div>"
      },
      {
        "id": 13,
        "subId": "10",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Lĩnh vực nào sau đây có thể hiện đại hóa kinh tế vùng nông thôn nhờ sự phát triển mạnh mẽ dựa trên AI?",
        "options": [
          "A. Tài chính.",
          "B. Nông nghiệp công nghệ cao.",
          "C. Y tế.",
          "D. Giáo dục."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Nông nghiệp công nghệ cao.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nông nghiệp công nghệ cao</div>\n</div>"
      },
      {
        "id": 14,
        "subId": "11-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để canh lề nội dung bên trong ô đó.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> canh lề nội dung ô</div>\n</div>"
      },
      {
        "id": 15,
        "subId": "11-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Giá trị của màu nền có thể dùng mã hexa (ví dụ \"#66ccff\") hoặc chữ tiếng Anh (ví dụ “lightGreen”).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Màu nền có thể dùng mã hex hoặc tên tiếng Anh</div>\n</div>"
      },
      {
        "id": 16,
        "subId": "11-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thuộc tính bgcolor có thể dùng để thiết lập màu nền cho toàn bộ bảng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code>), một hàng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code>) hoặc một ô (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code>).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> bgcolor dùng cho table, tr, td, th</div>\n</div>"
      },
      {
        "id": 17,
        "subId": "11-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code> để canh lề nội dung bên trong các ô của bảng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong table chỉ canh cả bảng, không canh nội dung ô</div>\n</div>"
      },
      {
        "id": 18,
        "subId": "12",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực chăm sóc sức khoẻ, AI hỗ trợ chẩn đoán bệnh bằng cách học từ dữ liệu nào?",
        "options": [
          "A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.",
          "B. Chỉ học từ triệu chứng do bệnh nhân mô tả.",
          "C. Học từ dữ liệu tài chính của bệnh viện.",
          "D. Chỉ học từ đơn thuốc của bác sĩ."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Học từ hình ảnh y tế (X-quang, MRI) để phân biệt bệnh</div>\n</div>"
      },
      {
        "id": 19,
        "subId": "13",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Đặc điểm nào sau đây mô tả đúng về AI hẹp (ANI)?",
        "options": [
          "A. Có trí thông minh tương tự con người.",
          "B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.",
          "C. Là AI có trong các hệ thống GPT-4.",
          "D. Có khả năng tự học và áp dụng tri thức sang lĩnh vực khác."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI hẹp chỉ giải quyết nhiệm vụ theo những gì đã được học</div>\n</div>"
      },
      {
        "id": 20,
        "subId": "14",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Trình duyệt web (ví dụ: Google Chrome, Firefox) có vai trò gì đối với tệp HTML?",
        "options": [
          "A. Biên dịch mã HTML thành một tệp thực thi",
          "B. Kiểm tra lỗi chính tả trong nội dung trang web",
          "C. Mã hóa tệp HTML để bảo mật",
          "D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Tải xuống và kết xuất mã HTML để hiển thị trang web</div>\n</div>"
      },
      {
        "id": 21,
        "subId": "15",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ AI giả mạo giọng nói hay khuôn mặt có thể gây ra nguy cơ an ninh mạng nào?",
        "options": [
          "A. Giúp người dùng tạo avatar thú vị.",
          "B. Hỗ trợ dịch thuật trong các cuộc gọi video.",
          "C. Giúp tạo ra các nhân vật trong trò chơi điện tử.",
          "D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Được dùng để truy cập trái phép vào hệ thống nhận dạng</div>\n</div>"
      },
      {
        "id": 22,
        "subId": "16",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Siri của Apple và Google Assistant của Google là các ví dụ điển hình của ứng dụng AI nào?",
        "options": [
          "A. Trợ lí ảo",
          "B. Điều khiển tự động trong nông nghiệp",
          "C. Nhận dạng chữ viết tay",
          "D. Chẩn đoán bệnh"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Trợ lí ảo</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Siri và Google Assistant là trợ lí ảo</div>\n</div>"
      },
      {
        "id": 23,
        "subId": "17",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Các thuộc tính (attributes) của một thẻ HTML được đặt ở đâu?",
        "options": [
          "A. Trong một tệp riêng biệt",
          "B. Trong thẻ đóng",
          "C. Ở giữa thẻ mở và thẻ đóng",
          "D. Trong thẻ mở"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Trong thẻ mở</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thuộc tính HTML đặt trong thẻ mở</div>\n</div>"
      },
      {
        "id": 24,
        "subId": "18",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng gì?",
        "options": [
          "A. Ngắt dòng văn bản",
          "B. In đậm văn bản",
          "C. Tạo một đường kẻ ngang",
          "D. Canh giữa văn bản"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Ngắt dòng văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng ngắt dòng</div>\n</div>"
      },
      {
        "id": 25,
        "subId": "19",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để hiển thị công thức hóa học H₂O, thẻ nào được sử dụng cho số 2?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;down&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;b&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sup&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code> hiển thị chỉ số dưới (H₂O)</div>\n</div>"
      },
      {
        "id": 26,
        "subId": "20",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần tử HTML nào sau đây chỉ có thẻ mở?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;div&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần tử chỉ có thẻ mở là thẻ rỗng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></div>\n</div>"
      },
      {
        "id": 27,
        "subId": "21",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần mở đầu của trang web, chứa các thông tin cung cấp cho trình duyệt, được đặt trong cặp thẻ nào?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;footer&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/footer&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;html&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/html&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/body&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần mở đầu trang web đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></div>\n</div>"
      },
      {
        "id": 28,
        "subId": "22-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính colspan và rowspan có thể được sử dụng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code> để áp dụng cho cả hàng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan, rowspan chỉ dùng cho td, th, không dùng trong tr</div>\n</div>"
      },
      {
        "id": 29,
        "subId": "22-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Thuộc tính colspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều ngang.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan gộp ô theo chiều ngang (trên cùng hàng)</div>\n</div>"
      },
      {
        "id": 30,
        "subId": "22-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Nếu một ô dùng colspan=\"2\", nó sẽ chiếm không gian của 2 cột.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan=\"2\" chiếm không gian 2 cột</div>\n</div>"
      },
      {
        "id": 31,
        "subId": "22-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính rowspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều dọc.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> rowspan gộp ô theo chiều dọc (trên cùng cột)</div>\n</div>"
      },
      {
        "id": 32,
        "subId": "23",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Ứng dụng Sybil, do Viện Công nghệ Massachusetts tạo ra, có mục đích gì?",
        "options": [
          "A. Điều khiển robot phẫu thuật.",
          "B. Quản lý chuỗi cung ứng trong kho hàng.",
          "C. Dạy ngôn ngữ cho người học.",
          "D. Phát hiện dấu hiệu bệnh ung thư phổi."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Phát hiện dấu hiệu bệnh ung thư phổi.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Ứng dụng Sybil của MIT: Phát hiện dấu hiệu ung thư phổi</div>\n</div>"
      },
      {
        "id": 33,
        "subId": "24",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để tạo một liên kết đến một vị trí có id=\"dautrang\" trong cùng một trang, giá trị của thuộc tính href là gì?",
        "options": [
          "A. href=\"id:dautrang\"",
          "B. href=\"$dautrang\"",
          "C. href=\"dautrang\"",
          "D. href=\"#dautrang\""
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. href=\"#dautrang\"</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> href=\"#dautrang\" (liên kết nội bộ theo id)</div>\n</div>"
      },
      {
        "id": 34,
        "subId": "25-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;meta charset=\"utf-8\"&gt;</code> được dùng để thiết lập màu nền cho trang web.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> meta charset khai báo bảng mã UTF-8, không đặt màu nền</div>\n</div>"
      },
      {
        "id": 35,
        "subId": "25-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/title&gt;</code> dùng để định nghĩa tiêu đề của trang web trên thanh tiêu đề trình duyệt.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code> định nghĩa tiêu đề trên tab trình duyệt</div>\n</div>"
      },
      {
        "id": 36,
        "subId": "25-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Các thẻ như <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải được đặt bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code></div>\n</div>"
      },
      {
        "id": 37,
        "subId": "25-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa các thông tin của trang web cho trình duyệt và các công cụ tìm kiếm trên Internet.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa thông tin cho trình duyệt & công cụ tìm kiếm</div>\n</div>"
      },
      {
        "id": 38,
        "subId": "26",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ nào của AI giúp máy tính chuyển từ giọng nói sang văn bản?",
        "options": [
          "A. Xử lí ngôn ngữ tự nhiên",
          "B. Thị giác máy tính",
          "C. Nhận dạng giọng nói",
          "D. Nhận dạng khuôn mặt"
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng giọng nói</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng giọng nói (chuyển giọng nói sang văn bản)</div>\n</div>"
      },
      {
        "id": 39,
        "subId": "27",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Vấn đề \"Quyền riêng tư\" (Privacy) bị ảnh hưởng bởi AI như thế nào?",
        "options": [
          "A. AI chỉ sử dụng các dữ liệu công khai.",
          "B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.",
          "C. AI không thể xử lý thông tin cá nhân.",
          "D. AI giúp bảo vệ dữ liệu cá nhân tốt hơn."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Mô hình AI có thể dùng thông tin cá nhân vào mục đích xấu</div>\n</div>"
      },
      {
        "id": 40,
        "subId": "28",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Hệ thống AI nào được dùng làm ví dụ minh hoạ cho một hệ thống có tri thức, khả năng suy luận và khả năng học?",
        "options": [
          "A. Robot Da Vinci",
          "B. Trợ lý ảo Siri",
          "C. Hệ thống nhận dạng khuôn mặt.",
          "D. ChatGPT (dựa trên GPT-3.5)."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. ChatGPT (dựa trên GPT-3.5).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> ChatGPT (dựa trên GPT-3.5) có tri thức, suy luận và học</div>\n</div>"
      }
    ]
  },
  {
    "id": "info_ai",
    "title": "🤖 CHUYÊN ĐỀ 1: Trí Tuệ Nhân Tạo (AI) & Đời Sống (16 câu)",
    "icon": "🤖",
    "description": "Robot y tế (Da Vinci, Sybil), AI hẹp (ANI), AI tổng quát (AGI), ChatGPT, nông nghiệp, việc làm, an ninh mạng & quyền riêng tư",
    "sub": "16 câu trắc nghiệm chuyên sâu về Trí tuệ nhân tạo",
    "category": "ai",
    "catId": "ai",
    "questions": [
      {
        "id": 5,
        "subId": "2",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Robot y tế nào được sử dụng tại Bệnh viện K (Việt Nam) vào tháng 6/2023?",
        "options": [
          "A. Robot Da Vinci.",
          "B. Robot AIBO",
          "C. Robot ASIMO",
          "D. ChatGPT"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Robot Da Vinci.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Robot y tế Da Vinci (tại Bệnh viện K tháng 6/2023)</div>\n</div>"
      },
      {
        "id": 7,
        "subId": "4",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể phân tích những loại hình ảnh y khoa nào để giúp phát hiện dấu hiệu của bệnh?",
        "options": [
          "A. Chỉ ảnh X-quang.",
          "B. Chỉ ảnh siêu âm.",
          "C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).",
          "D. Chỉ ảnh chụp từ điện thoại."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> X-quang, cắt lớp vi tính (CT scan), cộng hưởng từ (MRI)</div>\n</div>"
      },
      {
        "id": 8,
        "subId": "5",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "ChatGPT cải thiện tri thức của mình theo thời gian bằng cách nào?",
        "options": [
          "A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.",
          "B. Chỉ do các kỹ sư cập nhật thủ công.",
          "C. Chỉ học từ các hình ảnh.",
          "D. Chỉ học từ dữ liệu huấn luyện ban đầu."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thu thập và học từ dữ liệu mới khi gặp thông tin chưa biết</div>\n</div>"
      },
      {
        "id": 9,
        "subId": "6",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Theo tài liệu, tính đến năm 2023, các hệ thống AI hiện có đều thuộc loại nào?",
        "options": [
          "A. Cả ANI và AGI",
          "B. AI hẹp (ANI)",
          "C. AI siêu trí tuệ",
          "D. AI tổng quát (AGI)"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Hệ thống AI hiện có đều thuộc loại AI hẹp (ANI)</div>\n</div>"
      },
      {
        "id": 10,
        "subId": "7",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI được chia thành hai loại chính là gì?",
        "options": [
          "A. AI cho robot và AI cho máy tính",
          "B. AI hẹp (ANI) và AI tổng quát (AGI)",
          "C. AI phần cứng và AI phần mềm",
          "D. AI tự nhiên và AI nhân tạo"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI) và AI tổng quát (AGI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI được chia thành 2 loại: AI hẹp (ANI) & AI tổng quát (AGI)</div>\n</div>"
      },
      {
        "id": 11,
        "subId": "8",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực vận chuyển ứng dụng nào của robot thông minh tích hợp AI?",
        "options": [
          "A. Dạy ngôn ngữ cho người học.",
          "B. Hỗ trợ phẫu thuật.",
          "C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.",
          "D. Chẩn đoán bệnh."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng</div>\n</div>"
      },
      {
        "id": 12,
        "subId": "9",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể ảnh hưởng đến \"Việc làm\" (Employment) như thế nào?",
        "options": [
          "A. AI chỉ tạo ra các công việc mới.",
          "B. AI chỉ thay thế các công việc hiện tại.",
          "C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.",
          "D. AI không ảnh hưởng đến thị trường lao động."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI vừa tạo công việc mới, vừa thay thế công việc hiện tại</div>\n</div>"
      },
      {
        "id": 13,
        "subId": "10",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Lĩnh vực nào sau đây có thể hiện đại hóa kinh tế vùng nông thôn nhờ sự phát triển mạnh mẽ dựa trên AI?",
        "options": [
          "A. Tài chính.",
          "B. Nông nghiệp công nghệ cao.",
          "C. Y tế.",
          "D. Giáo dục."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Nông nghiệp công nghệ cao.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nông nghiệp công nghệ cao</div>\n</div>"
      },
      {
        "id": 18,
        "subId": "12",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực chăm sóc sức khoẻ, AI hỗ trợ chẩn đoán bệnh bằng cách học từ dữ liệu nào?",
        "options": [
          "A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.",
          "B. Chỉ học từ triệu chứng do bệnh nhân mô tả.",
          "C. Học từ dữ liệu tài chính của bệnh viện.",
          "D. Chỉ học từ đơn thuốc của bác sĩ."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Học từ hình ảnh y tế (X-quang, MRI) để phân biệt bệnh</div>\n</div>"
      },
      {
        "id": 19,
        "subId": "13",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Đặc điểm nào sau đây mô tả đúng về AI hẹp (ANI)?",
        "options": [
          "A. Có trí thông minh tương tự con người.",
          "B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.",
          "C. Là AI có trong các hệ thống GPT-4.",
          "D. Có khả năng tự học và áp dụng tri thức sang lĩnh vực khác."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI hẹp chỉ giải quyết nhiệm vụ theo những gì đã được học</div>\n</div>"
      },
      {
        "id": 21,
        "subId": "15",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ AI giả mạo giọng nói hay khuôn mặt có thể gây ra nguy cơ an ninh mạng nào?",
        "options": [
          "A. Giúp người dùng tạo avatar thú vị.",
          "B. Hỗ trợ dịch thuật trong các cuộc gọi video.",
          "C. Giúp tạo ra các nhân vật trong trò chơi điện tử.",
          "D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Được dùng để truy cập trái phép vào hệ thống nhận dạng</div>\n</div>"
      },
      {
        "id": 22,
        "subId": "16",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Siri của Apple và Google Assistant của Google là các ví dụ điển hình của ứng dụng AI nào?",
        "options": [
          "A. Trợ lí ảo",
          "B. Điều khiển tự động trong nông nghiệp",
          "C. Nhận dạng chữ viết tay",
          "D. Chẩn đoán bệnh"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Trợ lí ảo</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Siri và Google Assistant là trợ lí ảo</div>\n</div>"
      },
      {
        "id": 32,
        "subId": "23",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Ứng dụng Sybil, do Viện Công nghệ Massachusetts tạo ra, có mục đích gì?",
        "options": [
          "A. Điều khiển robot phẫu thuật.",
          "B. Quản lý chuỗi cung ứng trong kho hàng.",
          "C. Dạy ngôn ngữ cho người học.",
          "D. Phát hiện dấu hiệu bệnh ung thư phổi."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Phát hiện dấu hiệu bệnh ung thư phổi.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Ứng dụng Sybil của MIT: Phát hiện dấu hiệu ung thư phổi</div>\n</div>"
      },
      {
        "id": 38,
        "subId": "26",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ nào của AI giúp máy tính chuyển từ giọng nói sang văn bản?",
        "options": [
          "A. Xử lí ngôn ngữ tự nhiên",
          "B. Thị giác máy tính",
          "C. Nhận dạng giọng nói",
          "D. Nhận dạng khuôn mặt"
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng giọng nói</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng giọng nói (chuyển giọng nói sang văn bản)</div>\n</div>"
      },
      {
        "id": 39,
        "subId": "27",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Vấn đề \"Quyền riêng tư\" (Privacy) bị ảnh hưởng bởi AI như thế nào?",
        "options": [
          "A. AI chỉ sử dụng các dữ liệu công khai.",
          "B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.",
          "C. AI không thể xử lý thông tin cá nhân.",
          "D. AI giúp bảo vệ dữ liệu cá nhân tốt hơn."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Mô hình AI có thể dùng thông tin cá nhân vào mục đích xấu</div>\n</div>"
      },
      {
        "id": 40,
        "subId": "28",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Hệ thống AI nào được dùng làm ví dụ minh hoạ cho một hệ thống có tri thức, khả năng suy luận và khả năng học?",
        "options": [
          "A. Robot Da Vinci",
          "B. Trợ lý ảo Siri",
          "C. Hệ thống nhận dạng khuôn mặt.",
          "D. ChatGPT (dựa trên GPT-3.5)."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. ChatGPT (dựa trên GPT-3.5).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> ChatGPT (dựa trên GPT-3.5) có tri thức, suy luận và học</div>\n</div>"
      }
    ]
  },
  {
    "id": "info_html",
    "title": "💻 CHUYÊN ĐỀ 2: Thiết Kế Trang Web Với HTML (24 câu)",
    "icon": "💻",
    "description": "Cấu trúc trang web (&lt;head&gt;, &lt;body&gt;), thẻ định dạng (&lt;br&gt;, &lt;sub&gt;, &lt;center&gt;, &lt;hr&gt;), danh sách (&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;), bảng (&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, &lt;th&gt;, colspan, rowspan, align, bgcolor), liên kết &lt;a&gt;",
    "sub": "24 câu hỏi lý thuyết & thực hành tạo trang web HTML",
    "category": "html",
    "catId": "html",
    "questions": [
      {
        "id": 1,
        "subId": "1-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Danh sách không có thứ tự được tạo bằng cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ol&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Danh sách không thứ tự dùng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> là có thứ tự</div>\n</div>"
      },
      {
        "id": 2,
        "subId": "1-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Danh sách không có thứ tự dùng để đánh dấu đầu dòng cho nội dung bằng kí hiệu (ví dụ: dấu chấm tròn)\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Đánh dấu đầu dòng bằng kí hiệu (chấm tròn,...)</div>\n</div>"
      },
      {
        "id": 3,
        "subId": "1-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> dùng để tạo danh sách và thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> dùng để đánh dấu từng mục trong danh sách\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> tạo danh sách, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> tạo từng mục</div>\n</div>"
      },
      {
        "id": 4,
        "subId": "1-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Các thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải được đặt bên ngoài cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ul&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải nằm bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code></div>\n</div>"
      },
      {
        "id": 6,
        "subId": "3",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> có chức năng gì?",
        "options": [
          "A. Canh lề trái văn bản",
          "B. Canh giữa văn bản",
          "C. Canh lề phải văn bản",
          "D. Canh đều hai bên"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Canh giữa văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> dùng canh giữa văn bản</div>\n</div>"
      },
      {
        "id": 14,
        "subId": "11-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để canh lề nội dung bên trong ô đó.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> canh lề nội dung ô</div>\n</div>"
      },
      {
        "id": 15,
        "subId": "11-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Giá trị của màu nền có thể dùng mã hexa (ví dụ \"#66ccff\") hoặc chữ tiếng Anh (ví dụ “lightGreen”).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Màu nền có thể dùng mã hex hoặc tên tiếng Anh</div>\n</div>"
      },
      {
        "id": 16,
        "subId": "11-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thuộc tính bgcolor có thể dùng để thiết lập màu nền cho toàn bộ bảng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code>), một hàng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code>) hoặc một ô (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code>).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> bgcolor dùng cho table, tr, td, th</div>\n</div>"
      },
      {
        "id": 17,
        "subId": "11-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code> để canh lề nội dung bên trong các ô của bảng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong table chỉ canh cả bảng, không canh nội dung ô</div>\n</div>"
      },
      {
        "id": 20,
        "subId": "14",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Trình duyệt web (ví dụ: Google Chrome, Firefox) có vai trò gì đối với tệp HTML?",
        "options": [
          "A. Biên dịch mã HTML thành một tệp thực thi",
          "B. Kiểm tra lỗi chính tả trong nội dung trang web",
          "C. Mã hóa tệp HTML để bảo mật",
          "D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Tải xuống và kết xuất mã HTML để hiển thị trang web</div>\n</div>"
      },
      {
        "id": 23,
        "subId": "17",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Các thuộc tính (attributes) của một thẻ HTML được đặt ở đâu?",
        "options": [
          "A. Trong một tệp riêng biệt",
          "B. Trong thẻ đóng",
          "C. Ở giữa thẻ mở và thẻ đóng",
          "D. Trong thẻ mở"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Trong thẻ mở</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thuộc tính HTML đặt trong thẻ mở</div>\n</div>"
      },
      {
        "id": 24,
        "subId": "18",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng gì?",
        "options": [
          "A. Ngắt dòng văn bản",
          "B. In đậm văn bản",
          "C. Tạo một đường kẻ ngang",
          "D. Canh giữa văn bản"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Ngắt dòng văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng ngắt dòng</div>\n</div>"
      },
      {
        "id": 25,
        "subId": "19",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để hiển thị công thức hóa học H₂O, thẻ nào được sử dụng cho số 2?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;down&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;b&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sup&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code> hiển thị chỉ số dưới (H₂O)</div>\n</div>"
      },
      {
        "id": 26,
        "subId": "20",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần tử HTML nào sau đây chỉ có thẻ mở?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;div&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần tử chỉ có thẻ mở là thẻ rỗng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></div>\n</div>"
      },
      {
        "id": 27,
        "subId": "21",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần mở đầu của trang web, chứa các thông tin cung cấp cho trình duyệt, được đặt trong cặp thẻ nào?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;footer&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/footer&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;html&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/html&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/body&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần mở đầu trang web đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></div>\n</div>"
      },
      {
        "id": 28,
        "subId": "22-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính colspan và rowspan có thể được sử dụng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code> để áp dụng cho cả hàng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan, rowspan chỉ dùng cho td, th, không dùng trong tr</div>\n</div>"
      },
      {
        "id": 29,
        "subId": "22-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Thuộc tính colspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều ngang.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan gộp ô theo chiều ngang (trên cùng hàng)</div>\n</div>"
      },
      {
        "id": 30,
        "subId": "22-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Nếu một ô dùng colspan=\"2\", nó sẽ chiếm không gian của 2 cột.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan=\"2\" chiếm không gian 2 cột</div>\n</div>"
      },
      {
        "id": 31,
        "subId": "22-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính rowspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều dọc.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> rowspan gộp ô theo chiều dọc (trên cùng cột)</div>\n</div>"
      },
      {
        "id": 33,
        "subId": "24",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để tạo một liên kết đến một vị trí có id=\"dautrang\" trong cùng một trang, giá trị của thuộc tính href là gì?",
        "options": [
          "A. href=\"id:dautrang\"",
          "B. href=\"$dautrang\"",
          "C. href=\"dautrang\"",
          "D. href=\"#dautrang\""
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. href=\"#dautrang\"</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> href=\"#dautrang\" (liên kết nội bộ theo id)</div>\n</div>"
      },
      {
        "id": 34,
        "subId": "25-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;meta charset=\"utf-8\"&gt;</code> được dùng để thiết lập màu nền cho trang web.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> meta charset khai báo bảng mã UTF-8, không đặt màu nền</div>\n</div>"
      },
      {
        "id": 35,
        "subId": "25-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/title&gt;</code> dùng để định nghĩa tiêu đề của trang web trên thanh tiêu đề trình duyệt.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code> định nghĩa tiêu đề trên tab trình duyệt</div>\n</div>"
      },
      {
        "id": 36,
        "subId": "25-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Các thẻ như <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải được đặt bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code></div>\n</div>"
      },
      {
        "id": 37,
        "subId": "25-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa các thông tin của trang web cho trình duyệt và các công cụ tìm kiếm trên Internet.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa thông tin cho trình duyệt & công cụ tìm kiếm</div>\n</div>"
      }
    ]
  },
  {
    "id": "info_tf",
    "title": "⚖️ PHẦN II: Trắc Nghiệm Đúng / Sai (16 ý / 4 câu gốc)",
    "icon": "⚖️",
    "description": "4 câu chùm ngữ cảnh: Danh sách không thứ tự (&lt;ul&gt;, &lt;li&gt;), Định dạng căn lề & màu sắc (align, bgcolor), Gộp ô (colspan, rowspan), Thẻ &lt;head&gt; &amp; &lt;title&gt;",
    "sub": "16 ý Đúng/Sai phân hóa theo cấu trúc đề mới 2025",
    "category": "tf",
    "catId": "tf",
    "questions": [
      {
        "id": 1,
        "subId": "1-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Danh sách không có thứ tự được tạo bằng cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ol&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Danh sách không thứ tự dùng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> là có thứ tự</div>\n</div>"
      },
      {
        "id": 2,
        "subId": "1-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Danh sách không có thứ tự dùng để đánh dấu đầu dòng cho nội dung bằng kí hiệu (ví dụ: dấu chấm tròn)\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Đánh dấu đầu dòng bằng kí hiệu (chấm tròn,...)</div>\n</div>"
      },
      {
        "id": 3,
        "subId": "1-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> dùng để tạo danh sách và thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> dùng để đánh dấu từng mục trong danh sách\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> tạo danh sách, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> tạo từng mục</div>\n</div>"
      },
      {
        "id": 4,
        "subId": "1-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Các thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải được đặt bên ngoài cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ul&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải nằm bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code></div>\n</div>"
      },
      {
        "id": 14,
        "subId": "11-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để canh lề nội dung bên trong ô đó.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> canh lề nội dung ô</div>\n</div>"
      },
      {
        "id": 15,
        "subId": "11-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Giá trị của màu nền có thể dùng mã hexa (ví dụ \"#66ccff\") hoặc chữ tiếng Anh (ví dụ “lightGreen”).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Màu nền có thể dùng mã hex hoặc tên tiếng Anh</div>\n</div>"
      },
      {
        "id": 16,
        "subId": "11-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thuộc tính bgcolor có thể dùng để thiết lập màu nền cho toàn bộ bảng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code>), một hàng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code>) hoặc một ô (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code>).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> bgcolor dùng cho table, tr, td, th</div>\n</div>"
      },
      {
        "id": 17,
        "subId": "11-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code> để canh lề nội dung bên trong các ô của bảng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong table chỉ canh cả bảng, không canh nội dung ô</div>\n</div>"
      },
      {
        "id": 28,
        "subId": "22-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính colspan và rowspan có thể được sử dụng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code> để áp dụng cho cả hàng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan, rowspan chỉ dùng cho td, th, không dùng trong tr</div>\n</div>"
      },
      {
        "id": 29,
        "subId": "22-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Thuộc tính colspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều ngang.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan gộp ô theo chiều ngang (trên cùng hàng)</div>\n</div>"
      },
      {
        "id": 30,
        "subId": "22-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Nếu một ô dùng colspan=\"2\", nó sẽ chiếm không gian của 2 cột.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan=\"2\" chiếm không gian 2 cột</div>\n</div>"
      },
      {
        "id": 31,
        "subId": "22-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính rowspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều dọc.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> rowspan gộp ô theo chiều dọc (trên cùng cột)</div>\n</div>"
      },
      {
        "id": 34,
        "subId": "25-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;meta charset=\"utf-8\"&gt;</code> được dùng để thiết lập màu nền cho trang web.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> meta charset khai báo bảng mã UTF-8, không đặt màu nền</div>\n</div>"
      },
      {
        "id": 35,
        "subId": "25-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/title&gt;</code> dùng để định nghĩa tiêu đề của trang web trên thanh tiêu đề trình duyệt.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code> định nghĩa tiêu đề trên tab trình duyệt</div>\n</div>"
      },
      {
        "id": 36,
        "subId": "25-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Các thẻ như <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải được đặt bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code></div>\n</div>"
      },
      {
        "id": 37,
        "subId": "25-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa các thông tin của trang web cho trình duyệt và các công cụ tìm kiếm trên Internet.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa thông tin cho trình duyệt & công cụ tìm kiếm</div>\n</div>"
      }
    ]
  },
  {
    "id": "info_mcq",
    "title": "📖 PHẦN I: Trắc Nghiệm Đơn (24 câu 4 lựa chọn)",
    "icon": "📖",
    "description": "24 câu trắc nghiệm nhiều lựa chọn chọn 1 phương án đúng A, B, C, D phủ trọn vẹn toàn bộ kiến thức AI và HTML",
    "sub": "24 câu trắc nghiệm chuẩn 4 phương án A, B, C, D",
    "category": "mcq",
    "catId": "mcq",
    "questions": [
      {
        "id": 5,
        "subId": "2",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Robot y tế nào được sử dụng tại Bệnh viện K (Việt Nam) vào tháng 6/2023?",
        "options": [
          "A. Robot Da Vinci.",
          "B. Robot AIBO",
          "C. Robot ASIMO",
          "D. ChatGPT"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Robot Da Vinci.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Robot y tế Da Vinci (tại Bệnh viện K tháng 6/2023)</div>\n</div>"
      },
      {
        "id": 6,
        "subId": "3",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> có chức năng gì?",
        "options": [
          "A. Canh lề trái văn bản",
          "B. Canh giữa văn bản",
          "C. Canh lề phải văn bản",
          "D. Canh đều hai bên"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Canh giữa văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> dùng canh giữa văn bản</div>\n</div>"
      },
      {
        "id": 7,
        "subId": "4",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể phân tích những loại hình ảnh y khoa nào để giúp phát hiện dấu hiệu của bệnh?",
        "options": [
          "A. Chỉ ảnh X-quang.",
          "B. Chỉ ảnh siêu âm.",
          "C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).",
          "D. Chỉ ảnh chụp từ điện thoại."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> X-quang, cắt lớp vi tính (CT scan), cộng hưởng từ (MRI)</div>\n</div>"
      },
      {
        "id": 8,
        "subId": "5",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "ChatGPT cải thiện tri thức của mình theo thời gian bằng cách nào?",
        "options": [
          "A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.",
          "B. Chỉ do các kỹ sư cập nhật thủ công.",
          "C. Chỉ học từ các hình ảnh.",
          "D. Chỉ học từ dữ liệu huấn luyện ban đầu."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thu thập và học từ dữ liệu mới khi gặp thông tin chưa biết</div>\n</div>"
      },
      {
        "id": 9,
        "subId": "6",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Theo tài liệu, tính đến năm 2023, các hệ thống AI hiện có đều thuộc loại nào?",
        "options": [
          "A. Cả ANI và AGI",
          "B. AI hẹp (ANI)",
          "C. AI siêu trí tuệ",
          "D. AI tổng quát (AGI)"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Hệ thống AI hiện có đều thuộc loại AI hẹp (ANI)</div>\n</div>"
      },
      {
        "id": 10,
        "subId": "7",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI được chia thành hai loại chính là gì?",
        "options": [
          "A. AI cho robot và AI cho máy tính",
          "B. AI hẹp (ANI) và AI tổng quát (AGI)",
          "C. AI phần cứng và AI phần mềm",
          "D. AI tự nhiên và AI nhân tạo"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI) và AI tổng quát (AGI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI được chia thành 2 loại: AI hẹp (ANI) & AI tổng quát (AGI)</div>\n</div>"
      },
      {
        "id": 11,
        "subId": "8",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực vận chuyển ứng dụng nào của robot thông minh tích hợp AI?",
        "options": [
          "A. Dạy ngôn ngữ cho người học.",
          "B. Hỗ trợ phẫu thuật.",
          "C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.",
          "D. Chẩn đoán bệnh."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng</div>\n</div>"
      },
      {
        "id": 12,
        "subId": "9",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể ảnh hưởng đến \"Việc làm\" (Employment) như thế nào?",
        "options": [
          "A. AI chỉ tạo ra các công việc mới.",
          "B. AI chỉ thay thế các công việc hiện tại.",
          "C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.",
          "D. AI không ảnh hưởng đến thị trường lao động."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI vừa tạo công việc mới, vừa thay thế công việc hiện tại</div>\n</div>"
      },
      {
        "id": 13,
        "subId": "10",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Lĩnh vực nào sau đây có thể hiện đại hóa kinh tế vùng nông thôn nhờ sự phát triển mạnh mẽ dựa trên AI?",
        "options": [
          "A. Tài chính.",
          "B. Nông nghiệp công nghệ cao.",
          "C. Y tế.",
          "D. Giáo dục."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Nông nghiệp công nghệ cao.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nông nghiệp công nghệ cao</div>\n</div>"
      },
      {
        "id": 18,
        "subId": "12",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực chăm sóc sức khoẻ, AI hỗ trợ chẩn đoán bệnh bằng cách học từ dữ liệu nào?",
        "options": [
          "A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.",
          "B. Chỉ học từ triệu chứng do bệnh nhân mô tả.",
          "C. Học từ dữ liệu tài chính của bệnh viện.",
          "D. Chỉ học từ đơn thuốc của bác sĩ."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Học từ hình ảnh y tế (X-quang, MRI) để phân biệt bệnh</div>\n</div>"
      },
      {
        "id": 19,
        "subId": "13",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Đặc điểm nào sau đây mô tả đúng về AI hẹp (ANI)?",
        "options": [
          "A. Có trí thông minh tương tự con người.",
          "B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.",
          "C. Là AI có trong các hệ thống GPT-4.",
          "D. Có khả năng tự học và áp dụng tri thức sang lĩnh vực khác."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI hẹp chỉ giải quyết nhiệm vụ theo những gì đã được học</div>\n</div>"
      },
      {
        "id": 20,
        "subId": "14",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Trình duyệt web (ví dụ: Google Chrome, Firefox) có vai trò gì đối với tệp HTML?",
        "options": [
          "A. Biên dịch mã HTML thành một tệp thực thi",
          "B. Kiểm tra lỗi chính tả trong nội dung trang web",
          "C. Mã hóa tệp HTML để bảo mật",
          "D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Tải xuống và kết xuất mã HTML để hiển thị trang web</div>\n</div>"
      },
      {
        "id": 21,
        "subId": "15",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ AI giả mạo giọng nói hay khuôn mặt có thể gây ra nguy cơ an ninh mạng nào?",
        "options": [
          "A. Giúp người dùng tạo avatar thú vị.",
          "B. Hỗ trợ dịch thuật trong các cuộc gọi video.",
          "C. Giúp tạo ra các nhân vật trong trò chơi điện tử.",
          "D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Được dùng để truy cập trái phép vào hệ thống nhận dạng</div>\n</div>"
      },
      {
        "id": 22,
        "subId": "16",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Siri của Apple và Google Assistant của Google là các ví dụ điển hình của ứng dụng AI nào?",
        "options": [
          "A. Trợ lí ảo",
          "B. Điều khiển tự động trong nông nghiệp",
          "C. Nhận dạng chữ viết tay",
          "D. Chẩn đoán bệnh"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Trợ lí ảo</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Siri và Google Assistant là trợ lí ảo</div>\n</div>"
      },
      {
        "id": 23,
        "subId": "17",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Các thuộc tính (attributes) của một thẻ HTML được đặt ở đâu?",
        "options": [
          "A. Trong một tệp riêng biệt",
          "B. Trong thẻ đóng",
          "C. Ở giữa thẻ mở và thẻ đóng",
          "D. Trong thẻ mở"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Trong thẻ mở</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thuộc tính HTML đặt trong thẻ mở</div>\n</div>"
      },
      {
        "id": 24,
        "subId": "18",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng gì?",
        "options": [
          "A. Ngắt dòng văn bản",
          "B. In đậm văn bản",
          "C. Tạo một đường kẻ ngang",
          "D. Canh giữa văn bản"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Ngắt dòng văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng ngắt dòng</div>\n</div>"
      },
      {
        "id": 25,
        "subId": "19",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để hiển thị công thức hóa học H₂O, thẻ nào được sử dụng cho số 2?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;down&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;b&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sup&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code> hiển thị chỉ số dưới (H₂O)</div>\n</div>"
      },
      {
        "id": 26,
        "subId": "20",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần tử HTML nào sau đây chỉ có thẻ mở?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;div&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần tử chỉ có thẻ mở là thẻ rỗng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></div>\n</div>"
      },
      {
        "id": 27,
        "subId": "21",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần mở đầu của trang web, chứa các thông tin cung cấp cho trình duyệt, được đặt trong cặp thẻ nào?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;footer&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/footer&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;html&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/html&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/body&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần mở đầu trang web đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></div>\n</div>"
      },
      {
        "id": 32,
        "subId": "23",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Ứng dụng Sybil, do Viện Công nghệ Massachusetts tạo ra, có mục đích gì?",
        "options": [
          "A. Điều khiển robot phẫu thuật.",
          "B. Quản lý chuỗi cung ứng trong kho hàng.",
          "C. Dạy ngôn ngữ cho người học.",
          "D. Phát hiện dấu hiệu bệnh ung thư phổi."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Phát hiện dấu hiệu bệnh ung thư phổi.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Ứng dụng Sybil của MIT: Phát hiện dấu hiệu ung thư phổi</div>\n</div>"
      },
      {
        "id": 33,
        "subId": "24",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để tạo một liên kết đến một vị trí có id=\"dautrang\" trong cùng một trang, giá trị của thuộc tính href là gì?",
        "options": [
          "A. href=\"id:dautrang\"",
          "B. href=\"$dautrang\"",
          "C. href=\"dautrang\"",
          "D. href=\"#dautrang\""
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. href=\"#dautrang\"</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> href=\"#dautrang\" (liên kết nội bộ theo id)</div>\n</div>"
      },
      {
        "id": 38,
        "subId": "26",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ nào của AI giúp máy tính chuyển từ giọng nói sang văn bản?",
        "options": [
          "A. Xử lí ngôn ngữ tự nhiên",
          "B. Thị giác máy tính",
          "C. Nhận dạng giọng nói",
          "D. Nhận dạng khuôn mặt"
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng giọng nói</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng giọng nói (chuyển giọng nói sang văn bản)</div>\n</div>"
      },
      {
        "id": 39,
        "subId": "27",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Vấn đề \"Quyền riêng tư\" (Privacy) bị ảnh hưởng bởi AI như thế nào?",
        "options": [
          "A. AI chỉ sử dụng các dữ liệu công khai.",
          "B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.",
          "C. AI không thể xử lý thông tin cá nhân.",
          "D. AI giúp bảo vệ dữ liệu cá nhân tốt hơn."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Mô hình AI có thể dùng thông tin cá nhân vào mục đích xấu</div>\n</div>"
      },
      {
        "id": 40,
        "subId": "28",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Hệ thống AI nào được dùng làm ví dụ minh hoạ cho một hệ thống có tri thức, khả năng suy luận và khả năng học?",
        "options": [
          "A. Robot Da Vinci",
          "B. Trợ lý ảo Siri",
          "C. Hệ thống nhận dạng khuôn mặt.",
          "D. ChatGPT (dựa trên GPT-3.5)."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. ChatGPT (dựa trên GPT-3.5).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> ChatGPT (dựa trên GPT-3.5) có tri thức, suy luận và học</div>\n</div>"
      }
    ]
  },
  {
    "id": "info_all",
    "title": "🏆 Marathon Toàn Bộ Ngân Hàng Tin Học 12 (40 câu)",
    "icon": "🏆",
    "description": "Luyện tập toàn diện 40 câu hỏi ôn tập Giữa kì 1 Tin Học 12 để đạt điểm số tuyệt đối 10/10",
    "sub": "Trọn bộ 40 câu kèm đáp án và giải thích chi tiết",
    "category": "all",
    "catId": "all",
    "questions": [
      {
        "id": 1,
        "subId": "1-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Danh sách không có thứ tự được tạo bằng cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ol&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Danh sách không thứ tự dùng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ol&gt;</code> là có thứ tự</div>\n</div>"
      },
      {
        "id": 2,
        "subId": "1-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Danh sách không có thứ tự dùng để đánh dấu đầu dòng cho nội dung bằng kí hiệu (ví dụ: dấu chấm tròn)\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Đánh dấu đầu dòng bằng kí hiệu (chấm tròn,...)</div>\n</div>"
      },
      {
        "id": 3,
        "subId": "1-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> dùng để tạo danh sách và thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> dùng để đánh dấu từng mục trong danh sách\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> tạo danh sách, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> tạo từng mục</div>\n</div>"
      },
      {
        "id": 4,
        "subId": "1-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về danh sách không có thứ tự?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Các thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải được đặt bên ngoài cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code> và <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/ul&gt;</code>\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;li&gt;</code> phải nằm bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;ul&gt;</code></div>\n</div>"
      },
      {
        "id": 5,
        "subId": "2",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Robot y tế nào được sử dụng tại Bệnh viện K (Việt Nam) vào tháng 6/2023?",
        "options": [
          "A. Robot Da Vinci.",
          "B. Robot AIBO",
          "C. Robot ASIMO",
          "D. ChatGPT"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Robot Da Vinci.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Robot y tế Da Vinci (tại Bệnh viện K tháng 6/2023)</div>\n</div>"
      },
      {
        "id": 6,
        "subId": "3",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> có chức năng gì?",
        "options": [
          "A. Canh lề trái văn bản",
          "B. Canh giữa văn bản",
          "C. Canh lề phải văn bản",
          "D. Canh đều hai bên"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Canh giữa văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;center&gt;</code> dùng canh giữa văn bản</div>\n</div>"
      },
      {
        "id": 7,
        "subId": "4",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể phân tích những loại hình ảnh y khoa nào để giúp phát hiện dấu hiệu của bệnh?",
        "options": [
          "A. Chỉ ảnh X-quang.",
          "B. Chỉ ảnh siêu âm.",
          "C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).",
          "D. Chỉ ảnh chụp từ điện thoại."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. X-quang, chụp cắt lớp vi tính (CT scan), chụp cộng hưởng từ (MRI scan).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> X-quang, cắt lớp vi tính (CT scan), cộng hưởng từ (MRI)</div>\n</div>"
      },
      {
        "id": 8,
        "subId": "5",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "ChatGPT cải thiện tri thức của mình theo thời gian bằng cách nào?",
        "options": [
          "A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.",
          "B. Chỉ do các kỹ sư cập nhật thủ công.",
          "C. Chỉ học từ các hình ảnh.",
          "D. Chỉ học từ dữ liệu huấn luyện ban đầu."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Thu thập và học từ dữ liệu mới khi gặp phải thông tin chưa biết.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thu thập và học từ dữ liệu mới khi gặp thông tin chưa biết</div>\n</div>"
      },
      {
        "id": 9,
        "subId": "6",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Theo tài liệu, tính đến năm 2023, các hệ thống AI hiện có đều thuộc loại nào?",
        "options": [
          "A. Cả ANI và AGI",
          "B. AI hẹp (ANI)",
          "C. AI siêu trí tuệ",
          "D. AI tổng quát (AGI)"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Hệ thống AI hiện có đều thuộc loại AI hẹp (ANI)</div>\n</div>"
      },
      {
        "id": 10,
        "subId": "7",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI được chia thành hai loại chính là gì?",
        "options": [
          "A. AI cho robot và AI cho máy tính",
          "B. AI hẹp (ANI) và AI tổng quát (AGI)",
          "C. AI phần cứng và AI phần mềm",
          "D. AI tự nhiên và AI nhân tạo"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. AI hẹp (ANI) và AI tổng quát (AGI)</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI được chia thành 2 loại: AI hẹp (ANI) & AI tổng quát (AGI)</div>\n</div>"
      },
      {
        "id": 11,
        "subId": "8",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực vận chuyển ứng dụng nào của robot thông minh tích hợp AI?",
        "options": [
          "A. Dạy ngôn ngữ cho người học.",
          "B. Hỗ trợ phẫu thuật.",
          "C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.",
          "D. Chẩn đoán bệnh."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng gói hàng và thực hiện nhiệm vụ trong kho hàng</div>\n</div>"
      },
      {
        "id": 12,
        "subId": "9",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "AI có thể ảnh hưởng đến \"Việc làm\" (Employment) như thế nào?",
        "options": [
          "A. AI chỉ tạo ra các công việc mới.",
          "B. AI chỉ thay thế các công việc hiện tại.",
          "C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.",
          "D. AI không ảnh hưởng đến thị trường lao động."
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. AI vừa tạo ra công việc mới, vừa thay thế nhiều công việc hiện tại.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI vừa tạo công việc mới, vừa thay thế công việc hiện tại</div>\n</div>"
      },
      {
        "id": 13,
        "subId": "10",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Lĩnh vực nào sau đây có thể hiện đại hóa kinh tế vùng nông thôn nhờ sự phát triển mạnh mẽ dựa trên AI?",
        "options": [
          "A. Tài chính.",
          "B. Nông nghiệp công nghệ cao.",
          "C. Y tế.",
          "D. Giáo dục."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Nông nghiệp công nghệ cao.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nông nghiệp công nghệ cao</div>\n</div>"
      },
      {
        "id": 14,
        "subId": "11-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để canh lề nội dung bên trong ô đó.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> canh lề nội dung ô</div>\n</div>"
      },
      {
        "id": 15,
        "subId": "11-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Giá trị của màu nền có thể dùng mã hexa (ví dụ \"#66ccff\") hoặc chữ tiếng Anh (ví dụ “lightGreen”).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Màu nền có thể dùng mã hex hoặc tên tiếng Anh</div>\n</div>"
      },
      {
        "id": 16,
        "subId": "11-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Thuộc tính bgcolor có thể dùng để thiết lập màu nền cho toàn bộ bảng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code>), một hàng (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code>) hoặc một ô (<code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code>).\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> bgcolor dùng cho table, tr, td, th</div>\n</div>"
      },
      {
        "id": 17,
        "subId": "11-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về định dạng màu sắc và căn lề trong HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính align dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;table&gt;</code> để canh lề nội dung bên trong các ô của bảng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> align trong table chỉ canh cả bảng, không canh nội dung ô</div>\n</div>"
      },
      {
        "id": 18,
        "subId": "12",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Trong lĩnh vực chăm sóc sức khoẻ, AI hỗ trợ chẩn đoán bệnh bằng cách học từ dữ liệu nào?",
        "options": [
          "A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.",
          "B. Chỉ học từ triệu chứng do bệnh nhân mô tả.",
          "C. Học từ dữ liệu tài chính của bệnh viện.",
          "D. Chỉ học từ đơn thuốc của bác sĩ."
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Học từ hình ảnh y tế (X-quang, MRI,...) để phân biệt mẫu bệnh và khoẻ mạnh.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Học từ hình ảnh y tế (X-quang, MRI) để phân biệt bệnh</div>\n</div>"
      },
      {
        "id": 19,
        "subId": "13",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Đặc điểm nào sau đây mô tả đúng về AI hẹp (ANI)?",
        "options": [
          "A. Có trí thông minh tương tự con người.",
          "B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.",
          "C. Là AI có trong các hệ thống GPT-4.",
          "D. Có khả năng tự học và áp dụng tri thức sang lĩnh vực khác."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Chỉ giải quyết nhiệm vụ theo những gì đã được học.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> AI hẹp chỉ giải quyết nhiệm vụ theo những gì đã được học</div>\n</div>"
      },
      {
        "id": 20,
        "subId": "14",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Trình duyệt web (ví dụ: Google Chrome, Firefox) có vai trò gì đối với tệp HTML?",
        "options": [
          "A. Biên dịch mã HTML thành một tệp thực thi",
          "B. Kiểm tra lỗi chính tả trong nội dung trang web",
          "C. Mã hóa tệp HTML để bảo mật",
          "D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Tải xuống và kết xuất mã HTML để hiển thị nội dung trang web</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Tải xuống và kết xuất mã HTML để hiển thị trang web</div>\n</div>"
      },
      {
        "id": 21,
        "subId": "15",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ AI giả mạo giọng nói hay khuôn mặt có thể gây ra nguy cơ an ninh mạng nào?",
        "options": [
          "A. Giúp người dùng tạo avatar thú vị.",
          "B. Hỗ trợ dịch thuật trong các cuộc gọi video.",
          "C. Giúp tạo ra các nhân vật trong trò chơi điện tử.",
          "D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Được sử dụng để truy cập trái phép vào các hệ thống nhận dạng.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Được dùng để truy cập trái phép vào hệ thống nhận dạng</div>\n</div>"
      },
      {
        "id": 22,
        "subId": "16",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Siri của Apple và Google Assistant của Google là các ví dụ điển hình của ứng dụng AI nào?",
        "options": [
          "A. Trợ lí ảo",
          "B. Điều khiển tự động trong nông nghiệp",
          "C. Nhận dạng chữ viết tay",
          "D. Chẩn đoán bệnh"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Trợ lí ảo</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Siri và Google Assistant là trợ lí ảo</div>\n</div>"
      },
      {
        "id": 23,
        "subId": "17",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Các thuộc tính (attributes) của một thẻ HTML được đặt ở đâu?",
        "options": [
          "A. Trong một tệp riêng biệt",
          "B. Trong thẻ đóng",
          "C. Ở giữa thẻ mở và thẻ đóng",
          "D. Trong thẻ mở"
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Trong thẻ mở</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thuộc tính HTML đặt trong thẻ mở</div>\n</div>"
      },
      {
        "id": 24,
        "subId": "18",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng gì?",
        "options": [
          "A. Ngắt dòng văn bản",
          "B. In đậm văn bản",
          "C. Tạo một đường kẻ ngang",
          "D. Canh giữa văn bản"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Ngắt dòng văn bản</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;br&gt;</code> có tác dụng ngắt dòng</div>\n</div>"
      },
      {
        "id": 25,
        "subId": "19",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để hiển thị công thức hóa học H₂O, thẻ nào được sử dụng cho số 2?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;down&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;b&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sup&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;sub&gt;</code> hiển thị chỉ số dưới (H₂O)</div>\n</div>"
      },
      {
        "id": 26,
        "subId": "20",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần tử HTML nào sau đây chỉ có thẻ mở?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;div&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần tử chỉ có thẻ mở là thẻ rỗng <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;hr&gt;</code></div>\n</div>"
      },
      {
        "id": 27,
        "subId": "21",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Phần mở đầu của trang web, chứa các thông tin cung cấp cho trình duyệt, được đặt trong cặp thẻ nào?",
        "options": [
          "A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>",
          "B. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;footer&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/footer&gt;</code>",
          "C. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;html&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/html&gt;</code>",
          "D. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/body&gt;</code>"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Phần mở đầu trang web đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code></div>\n</div>"
      },
      {
        "id": 28,
        "subId": "22-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thuộc tính colspan và rowspan có thể được sử dụng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;tr&gt;</code> để áp dụng cho cả hàng.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan, rowspan chỉ dùng cho td, th, không dùng trong tr</div>\n</div>"
      },
      {
        "id": 29,
        "subId": "22-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Thuộc tính colspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều ngang.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan gộp ô theo chiều ngang (trên cùng hàng)</div>\n</div>"
      },
      {
        "id": 30,
        "subId": "22-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Nếu một ô dùng colspan=\"2\", nó sẽ chiếm không gian của 2 cột.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> colspan=\"2\" chiếm không gian 2 cột</div>\n</div>"
      },
      {
        "id": 31,
        "subId": "22-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về việc gộp ô trong bảng HTML?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Thuộc tính rowspan được dùng trong thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;td&gt;</code> hoặc <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;th&gt;</code> để gộp nhiều ô lại với nhau theo chiều dọc.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> rowspan gộp ô theo chiều dọc (trên cùng cột)</div>\n</div>"
      },
      {
        "id": 32,
        "subId": "23",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Ứng dụng Sybil, do Viện Công nghệ Massachusetts tạo ra, có mục đích gì?",
        "options": [
          "A. Điều khiển robot phẫu thuật.",
          "B. Quản lý chuỗi cung ứng trong kho hàng.",
          "C. Dạy ngôn ngữ cho người học.",
          "D. Phát hiện dấu hiệu bệnh ung thư phổi."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. Phát hiện dấu hiệu bệnh ung thư phổi.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Ứng dụng Sybil của MIT: Phát hiện dấu hiệu ung thư phổi</div>\n</div>"
      },
      {
        "id": 33,
        "subId": "24",
        "topic": "THIẾT KẾ WEB (HTML)",
        "question": "Để tạo một liên kết đến một vị trí có id=\"dautrang\" trong cùng một trang, giá trị của thuộc tính href là gì?",
        "options": [
          "A. href=\"id:dautrang\"",
          "B. href=\"$dautrang\"",
          "C. href=\"dautrang\"",
          "D. href=\"#dautrang\""
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. href=\"#dautrang\"</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> href=\"#dautrang\" (liên kết nội bộ theo id)</div>\n</div>"
      },
      {
        "id": 34,
        "subId": "25-a",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (a):</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;meta charset=\"utf-8\"&gt;</code> được dùng để thiết lập màu nền cho trang web.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> meta charset khai báo bảng mã UTF-8, không đặt màu nền</div>\n</div>"
      },
      {
        "id": 35,
        "subId": "25-b",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (b):</span> Cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/title&gt;</code> dùng để định nghĩa tiêu đề của trang web trên thanh tiêu đề trình duyệt.\n</div>",
        "options": [
          "A. Đúng",
          "B. Sai"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;title&gt;</code> định nghĩa tiêu đề trên tab trình duyệt</div>\n</div>"
      },
      {
        "id": 36,
        "subId": "25-c",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (c):</span> Các thẻ như <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải được đặt bên trong cặp thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code><code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;/head&gt;</code>.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 0,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>A. Sai</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Thẻ <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;h1&gt;</code>, <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;p&gt;</code> phải đặt trong <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;body&gt;</code></div>\n</div>"
      },
      {
        "id": 37,
        "subId": "25-d",
        "topic": "HTML • ĐÚNG/SAI",
        "question": "<div class=\"tin-context-card\" style=\"margin-bottom: 12px; background: rgba(14, 165, 233, 0.12); border: 1px solid rgba(14, 165, 233, 0.35); border-left: 4px solid #0284c7; border-radius: 8px; padding: 10px 14px;\">\n  <div style=\"font-weight: 800; color: #38bdf8; font-size: 0.82rem; margin-bottom: 3px; display: flex; align-items: center; gap: 5px;\">\n    <span>📋</span> <span>NGỮ CẢNH CÂU HỎI ĐÚNG / SAI:</span>\n  </div>\n  <div style=\"color: #f1f5f9; font-size: 0.94rem; line-height: 1.5;\">Các phát biểu sau đúng hay sai về các thẻ trong phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code>?</div>\n</div>\n<div style=\"font-size: 1.02rem; font-weight: 600; color: #ffffff; line-height: 1.5;\">\n  <span style=\"color: #facc15; font-weight: 800;\">Phát biểu (d):</span> Phần <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa các thông tin của trang web cho trình duyệt và các công cụ tìm kiếm trên Internet.\n</div>",
        "options": [
          "A. Sai",
          "B. Đúng"
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Đúng</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> <code style=\"color:#38bdf8;background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;font-weight:700;\">&lt;head&gt;</code> chứa thông tin cho trình duyệt & công cụ tìm kiếm</div>\n</div>"
      },
      {
        "id": 38,
        "subId": "26",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Công nghệ nào của AI giúp máy tính chuyển từ giọng nói sang văn bản?",
        "options": [
          "A. Xử lí ngôn ngữ tự nhiên",
          "B. Thị giác máy tính",
          "C. Nhận dạng giọng nói",
          "D. Nhận dạng khuôn mặt"
        ],
        "correct": 2,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>C. Nhận dạng giọng nói</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Nhận dạng giọng nói (chuyển giọng nói sang văn bản)</div>\n</div>"
      },
      {
        "id": 39,
        "subId": "27",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Vấn đề \"Quyền riêng tư\" (Privacy) bị ảnh hưởng bởi AI như thế nào?",
        "options": [
          "A. AI chỉ sử dụng các dữ liệu công khai.",
          "B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.",
          "C. AI không thể xử lý thông tin cá nhân.",
          "D. AI giúp bảo vệ dữ liệu cá nhân tốt hơn."
        ],
        "correct": 1,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>B. Các mô hình AI có thể sử dụng thông tin cá nhân (hình ảnh, giọng nói) vào mục đích xấu.</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> Mô hình AI có thể dùng thông tin cá nhân vào mục đích xấu</div>\n</div>"
      },
      {
        "id": 40,
        "subId": "28",
        "topic": "TRÍ TUỆ NHÂN TẠO (AI)",
        "question": "Hệ thống AI nào được dùng làm ví dụ minh hoạ cho một hệ thống có tri thức, khả năng suy luận và khả năng học?",
        "options": [
          "A. Robot Da Vinci",
          "B. Trợ lý ảo Siri",
          "C. Hệ thống nhận dạng khuôn mặt.",
          "D. ChatGPT (dựa trên GPT-3.5)."
        ],
        "correct": 3,
        "explain": "<div style=\"line-height: 1.6;\">\n  <div style=\"margin-bottom: 4px;\"><span style=\"color: #34d399; font-weight: 800;\">✓ Đáp án chính xác:</span> <strong>D. ChatGPT (dựa trên GPT-3.5).</strong></div>\n  <div><span style=\"color: #38bdf8; font-weight: 700;\">💡 Giải thích chi tiết:</span> ChatGPT (dựa trên GPT-3.5) có tri thức, suy luận và học</div>\n</div>"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.INFORMATICS_CATEGORIES = INFORMATICS_CATEGORIES;
  window.INFORMATICS_TOPICS_DATABASE = INFORMATICS_TOPICS_DATABASE;
}
