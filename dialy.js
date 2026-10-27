// =========================================================================
// DỮ LIỆU ĐỊA LÍ 12 - TRỌN BỘ TỰ NHIÊN, DÂN CƯ & CÂU HỎI THEO FORM MỚI 2025
// (159 CÂU HỎI TRẮC NGHIỆM ĐƠN + ĐÚNG/SAI + BÀI TẬP TÍNH TOÁN)
// Biên soạn theo đề cương và chương trình Địa lí 12 chuẩn Bộ GD&ĐT
// Kèm theo hình ảnh sắc nét và sơ đồ số hóa vector trực quan
// =========================================================================

const GEOGRAPHY_CATEGORIES = [
  {
    "id": "all",
    "name": "Tất cả bài học",
    "icon": "🌐"
  },
  {
    "id": "cd1",
    "name": "Phần I: Trắc nghiệm 4 lựa chọn (70 câu)",
    "icon": "📖"
  },
  {
    "id": "cd2",
    "name": "Phần II: Đúng / Sai (70 ý / 17 câu)",
    "icon": "⚖️"
  },
  {
    "id": "cd3",
    "name": "Phần III: Trả lời ngắn & Tính toán (19 câu)",
    "icon": "📊"
  }
];

const geoAllQuestions = [
  {
    "id": 1,
    "question": "Vị trí nằm hoàn toàn trong vùng nội chí tuyến nên nước ta có",
    "options": [
      "A. lượng mưa lớn.",
      "B. nền nhiệt độ cao.",
      "C. khí hậu mát mẻ.",
      "D. nhiều sông lớn."
    ],
    "correct": 1,
    "explain": "Do nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc nên nước ta nhận được lượng bức xạ Mặt Trời lớn, quanh năm có nền nhiệt độ cao (nhiệt độ trung bình năm trên 20°C, trừ vùng núi cao), nhiều nắng.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 2,
    "question": "Việt Nam tiếp giáp với nước nào sau đây trên đất liền?",
    "options": [
      "A. Trung Quốc.",
      "B. Liên bang Nga.",
      "C. Nhật Bản.",
      "D. Ấn Độ."
    ],
    "correct": 0,
    "explain": "Trên đất liền, Việt Nam tiếp giáp với 3 quốc gia: Trung Quốc ở phía Bắc, Lào và Cam-pu-chia ở phía Tây.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 3,
    "question": "Việt Nam gắn liền với lục địa và đại dương nào sau đây?",
    "options": [
      "A. Á – Âu và Bắc Băng Dương.",
      "B. Á – Âu và Đại Tây Dương.",
      "C. Á – Âu và Thái Bình Dương.",
      "D. Á – Âu và Ấn Độ Dương."
    ],
    "correct": 2,
    "explain": "Việt Nam nằm ở rìa phía đông của bán đảo Đông Dương, gắn liền với lục địa Á – Âu và tiếp giáp với Thái Bình Dương (Biển Đông là một biển lớn thuộc Thái Bình Dương).",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 4,
    "question": "Nước ta có vị trí ở",
    "options": [
      "A. bán cầu Nam.",
      "B. ngoại chí tuyến.",
      "C. vùng xích đạo.",
      "D. bán cầu Bắc."
    ],
    "correct": 3,
    "explain": "Lãnh thổ Việt Nam nằm hoàn toàn ở bán cầu Bắc (khoảng từ 8°34'B đến 23°23'B) và hoàn toàn ở bán cầu Đông.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 5,
    "question": "Nước ta có nhiệt độ trung bình năm cao do",
    "options": [
      "A. nằm trong khu vực gió mùa.",
      "B. nằm ở vùng nội chí tuyến.",
      "C. tiếp giáp với biển Đông.",
      "D. có gió Mậu dịch hoạt động."
    ],
    "correct": 1,
    "explain": "Nước ta nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, góc nhập xạ lớn và trong năm có hai lần Mặt Trời lên thiên đỉnh nên nhận lượng bức xạ nhiệt dồi dào, nền nhiệt độ trung bình năm cao.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 6,
    "question": "Nước ta có chung đường biên giới trên đất liền với quốc gia nào sau đây?",
    "options": [
      "A. Trung Quốc.",
      "B. Thái Lan.",
      "C. Xin-ga-po.",
      "D. Phi-lip-pin."
    ],
    "correct": 0,
    "explain": "Nước ta có chung đường biên giới trên đất liền với 3 nước: Trung Quốc, Lào và Cam-pu-chia. Thái Lan, Xin-ga-po và Phi-lip-pin không tiếp giáp đất liền với Việt Nam.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 7,
    "question": "Đặc điểm nền nhiệt độ trung bình năm cao của nước ta là do nguyên nhân nào?",
    "options": [
      "A. nằm trong khu vực gió mùa.",
      "B. nằm ở vùng nội chí tuyến.",
      "C. tiếp giáp với biển Đông.",
      "D. có gió Mậu dịch hoạt động."
    ],
    "correct": 1,
    "explain": "Vị trí nằm trong vùng nội chí tuyến giúp nước ta có góc nhập xạ lớn, quanh năm nhận được lượng nhiệt lớn từ Mặt Trời.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 8,
    "question": "Vị trí địa lí nước ta có đặc điểm nào sau đây?",
    "options": [
      "A. Nằm hoàn toàn ở vùng ngoại chí tuyến Bắc bán cầu.",
      "B. Thuộc khu vực khí hậu nhiệt đới gió mùa Châu Á.",
      "C. Nằm trung tâm của khu vực Đông Nam Á.",
      "D. Nằm ở bờ phía đông của Thái Bình Dương."
    ],
    "correct": 1,
    "explain": "Việt Nam nằm ở rìa đông bán đảo Đông Dương, tiếp giáp Biển Đông và thuộc khu vực khí hậu nhiệt đới gió mùa Châu Á.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 9,
    "question": "Phát biểu nào sau đây đúng về đặc điểm vị trí địa lí và phạm vi lãnh thổ của vùng Đông Nam Bộ?",
    "options": [
      "A. Đông Nam Bộ tiếp giáp vùng Bắc Trung Bộ.",
      "B. Chỉ giáp các nước trên đất liền, không giáp biển.",
      "C. Tất cả các tỉnh, thành trong vùng đều giáp biển.",
      "D. Giáp nước láng giềng Cam-pu-chia và Biển Đông."
    ],
    "correct": 3,
    "explain": "Đông Nam Bộ có đường biên giới phía tây bắc giáp Cam-pu-chia và phía đông nam giáp Biển Đông (khu vực Bà Rịa - Vũng Tàu, TP.HCM).",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 10,
    "question": "Nước ta nằm ở khu vực nào sau đây?",
    "options": [
      "A. Tây Nam Á.",
      "B. Đông Nam Á.",
      "C. Đông Bắc Á.",
      "D. Trung Á."
    ],
    "correct": 1,
    "explain": "Việt Nam thuộc khu vực Đông Nam Á, nằm ở rìa phía đông của bán đảo Đông Dương.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 11,
    "question": "Vị trí địa lí nước ta có đặc điểm là",
    "options": [
      "A. nằm trong vùng nội chí tuyến bán cầu Nam.",
      "B. nằm trong khu vực hoạt động của gió mùa châu Á.",
      "C. nằm ở vị trí trung tâm khu vực Đông Nam Á.",
      "D. phía bắc giáp với Trung Quốc và Lào."
    ],
    "correct": 1,
    "explain": "Nước ta nằm trong khu vực nội chí tuyến bán cầu Bắc và thuộc khu vực hoạt động của hoàn lưu gió mùa châu Á.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 12,
    "question": "Chiếm diện tích lớn nhất khu vực đồi núi nước ta là đất",
    "options": [
      "A. feralit.",
      "B. phù sa.",
      "C. xám phù sa cổ.",
      "D. mùn thô."
    ],
    "correct": 0,
    "explain": "Quá trình feralit là quá trình hình thành đất đặc trưng của khí hậu nhiệt đới ẩm gió mùa ở vùng đồi núi nước ta, đất feralit chiếm trên 60% diện tích đất tự nhiên cả nước.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 13,
    "question": "Đặc điểm của thiên nhiên nhiệt đới, ẩm, gió mùa của nước ta là do",
    "options": [
      "A. vị trí địa lí, hình dáng lãnh thổ quy định.",
      "B. ảnh hưởng của gió thổi theo mùa.",
      "C. sự phân hóa phức tạp của địa hình.",
      "D. ảnh hưởng của Biển Đông."
    ],
    "correct": 0,
    "explain": "Vị trí địa lí nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, tiếp giáp Biển Đông rộng lớn và nằm trong khu vực gió mùa châu Á quy định tính chất nhiệt đới ẩm gió mùa của thiên nhiên nước ta.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 14,
    "question": "Sự phân hóa thiên nhiên theo độ cao ở nước ta biểu hiện rõ qua các thành phần",
    "options": [
      "A. khí hậu, đất đai, sinh vật.",
      "B. sông ngòi, đất đai, khí hậu.",
      "C. sinh vật, đất đai, sông ngòi.",
      "D. khí hậu, sinh vật, sông ngòi."
    ],
    "correct": 0,
    "explain": "Sự phân hóa thiên nhiên theo đai cao thể hiện rõ rệt nhất qua 3 thành phần tự nhiên là khí hậu, đất đai và hệ sinh vật đặc trưng theo 3 đai cao.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 15,
    "question": "Nguồn tài nguyên sinh vật dưới nước, đặc biệt là nguồn hải sản bị giảm sút rõ rệt do nguyên nhân chủ yếu nào sau đây?",
    "options": [
      "A. Ô nhiễm môi trường nước và khai thác quá mức.",
      "B. Khai thác quá mức và bùng phát dịch bệnh.",
      "C. Dịch bệnh và các hiện tượng thời tiết thất thường.",
      "D. Thời tiết thất thường và khai thác quá mức."
    ],
    "correct": 0,
    "explain": "Nguồn lợi sinh vật biển và thủy hải sản bị suy giảm nghiêm trọng chủ yếu do tình trạng đánh bắt quá mức (tận diệt) và môi trường nước bị ô nhiễm.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 16,
    "question": "Cho bảng số liệu sau:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">Nhiệt độ trung bình tại một số địa điểm</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: °C)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Địa điểm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng 1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng 7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Lạng Sơn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,2</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Hà Nội</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">16,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">23,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Huế</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">19,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">25,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Đà Nẵng</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">25,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Quy Nhơn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">23,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,8</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">TP. Hồ Chí Minh</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">25,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,1</td></tr></tbody>\n      </table>\n    </div>\n  Nhận xét nào sau đây đúng về nhiệt độ trung bình tại các địa điểm của nước ta?",
    "options": [
      "A. Nhiệt độ trung bình năm nước ta tăng dần từ Bắc vào Nam.",
      "B. Biên độ nhiệt năm tăng dần từ Bắc vào Nam.",
      "C. Nước ta nằm trong vùng nhiệt đới.",
      "D. Miền Bắc chịu ảnh hưởng của gió mùa Đông Bắc vào mùa đông."
    ],
    "correct": 0,
    "explain": "Căn cứ vào bảng số liệu, nhiệt độ trung bình năm tăng đều đặn từ Bắc vào Nam: Lạng Sơn (21,2°C) lên đến TP. Hồ Chí Minh (27,1°C).",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 17,
    "question": "Nguyên nhân chủ yếu làm cho biên độ nhiệt trung bình năm ở miền Bắc lớn là do",
    "options": [
      "A. Vị trí địa lý và độ cao địa hình.",
      "B. Địa hình và hoạt động gió mùa.",
      "C. Vị trí địa lý và hoạt động gió mùa.",
      "D. Hình dáng lãnh thổ và dải hội tụ nhiệt đới."
    ],
    "correct": 2,
    "explain": "Miền Bắc có biên độ nhiệt trung bình năm lớn do nằm ở vĩ độ cao hơn (gần chí tuyến Bắc) và chịu ảnh hưởng trực tiếp của gió mùa Đông Bắc làm mùa đông hạ nhiệt độ sâu, mùa hè góc nhập xạ lớn nhiệt độ cao.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 18,
    "question": "Đất feralit ở nước ta thường bị chua vì nguyên nhân chủ yếu nào sau đây?",
    "options": [
      "A. Quá trình phong hóa diễn ra mạnh.",
      "B. Tích tụ ôxít sắt Fe2O3.",
      "C. Mưa nhiều, rửa trôi các chất bazơ dễ tan.",
      "D. Tích tụ ôxít nhôm Al2O3."
    ],
    "correct": 2,
    "explain": "Mưa nhiều và tập trung theo mùa làm rửa trôi các chất kiềm bazơ dễ tan (Ca2+, Mg2+, K+) xuống sâu, tích tụ oxit sắt và nhôm làm cho đất feralit có tính chất chua.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 19,
    "question": "Sự phân hóa thiên nhiên giữa hai khu vực Đông Trường Sơn và Tây Nguyên chủ yếu do",
    "options": [
      "A. tác động của gió mùa và hướng của các dãy núi.",
      "B. độ cao địa hình và ảnh hưởng của biển.",
      "C. Ảnh hưởng của biển và lớp phủ thực vật.",
      "D. độ cao địa hình và hướng các dãy núi."
    ],
    "correct": 0,
    "explain": "Sự đối lập giữa mùa mưa và mùa khô giữa Đông Trường Sơn và Tây Nguyên là hệ quả của sự tương tác giữa hoàn lưu gió mùa với bức chắn địa hình dãy núi Trường Sơn.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 20,
    "question": "Sự đối lập về mùa mưa và mùa khô giữa Đông Trường Sơn và Tây Nguyên chủ yếu là do",
    "options": [
      "A. tác động của gió mùa và hướng của các dãy núi.",
      "B. độ cao địa hình và ảnh hưởng của biển.",
      "C. Ảnh hưởng của biển và lớp phủ thực vật.",
      "D. độ cao địa hình và hướng các dãy núi."
    ],
    "correct": 0,
    "explain": "Gió mùa Tây Nam và gió mùa mùa đông kết hợp với hướng chạy bắc - nam của dãy núi Trường Sơn gây nên hiện tượng mưa sườn đón gió và khô nóng ở sườn khuất gió (hiệu ứng phơn).",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 21,
    "question": "Tài nguyên sinh vật nước ta đang bị suy giảm biểu hiện ở",
    "options": [
      "A. số lượng cá thể các loài động vật, thực vật tăng.",
      "B. số lượng cá thể và loài động vật hoang dã tăng.",
      "C. hệ sinh thái rừng nguyên sinh chiếm diện tích lớn nhất.",
      "D. một số loài động vật, thực vật có nguy cơ tuyệt chủng."
    ],
    "correct": 3,
    "explain": "Sự suy giảm đa dạng sinh học biểu hiện rõ qua việc nhiều loài động thực vật quý hiếm bị suy giảm số lượng nghiêm trọng và có nguy cơ tuyệt chủng.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 22,
    "question": "Căn cứ vào biểu đồ diện tích và tỉ lệ che phủ rừng nước ta giai đoạn 2008 - 2021 (tỉ lệ che phủ từ 38,7% năm 2008 lên 42,0% năm 2021), nhận xét nào sau đây đúng?",
    "options": [
      "A. Tổng diện tích rừng nước ta tăng liên tục.",
      "B. Tỉ lệ che phủ rừng nước ta tăng 3,3% .",
      "C. Diện tích rừng trồng giảm qua các năm.",
      "D. Diện tích rừng không đổi qua các năm."
    ],
    "correct": 1,
    "explain": "Tỉ lệ che phủ rừng năm 2021 là 42,0%, năm 2008 là 38,7%. Mức tăng là: 42,0% - 38,7% = 3,3% (3,3 điểm phần trăm).",
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 640 370\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"640\" height=\"370\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Title -->\n  <text x=\"320\" y=\"28\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">DIỆN TÍCH VÀ TỈ LỆ CHE PHỦ RỪNG NƯỚC TA (2008 - 2021)</text>\n  \n  <!-- Axis labels -->\n  <text x=\"35\" y=\"55\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"600\">Diện tích (tr. ha)</text>\n  <text x=\"605\" y=\"55\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"600\" text-anchor=\"end\">Tỉ lệ che phủ (%)</text>\n  \n  <!-- Grid lines & Left ticks (0 - 16) -->\n  <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"3 3\">\n    <line x1=\"80\" y1=\"70\" x2=\"560\" y2=\"70\" />\n    <line x1=\"80\" y1=\"100\" x2=\"560\" y2=\"100\" />\n    <line x1=\"80\" y1=\"130\" x2=\"560\" y2=\"130\" />\n    <line x1=\"80\" y1=\"160\" x2=\"560\" y2=\"160\" />\n    <line x1=\"80\" y1=\"190\" x2=\"560\" y2=\"190\" />\n    <line x1=\"80\" y1=\"220\" x2=\"560\" y2=\"220\" />\n    <line x1=\"80\" y1=\"250\" x2=\"560\" y2=\"250\" />\n    <line x1=\"80\" y1=\"280\" x2=\"560\" y2=\"280\" />\n  </g>\n  \n  <!-- Baseline -->\n  <line x1=\"80\" y1=\"280\" x2=\"560\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"2\" />\n  \n  <!-- Left Axis numbers (0 - 14) -->\n  <g fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"end\">\n    <text x=\"72\" y=\"74\">14</text>\n    <text x=\"72\" y=\"104\">12</text>\n    <text x=\"72\" y=\"134\">10</text>\n    <text x=\"72\" y=\"164\">8</text>\n    <text x=\"72\" y=\"194\">6</text>\n    <text x=\"72\" y=\"224\">4</text>\n    <text x=\"72\" y=\"254\">2</text>\n    <text x=\"72\" y=\"284\">0</text>\n  </g>\n  \n  <!-- Right Axis numbers (0 - 100%) -->\n  <g fill=\"#f59e0b\" font-size=\"11\" text-anchor=\"start\">\n    <text x=\"568\" y=\"74\">100</text>\n    <text x=\"568\" y=\"116\">80</text>\n    <text x=\"568\" y=\"158\">60</text>\n    <text x=\"568\" y=\"200\">40</text>\n    <text x=\"568\" y=\"242\">20</text>\n    <text x=\"568\" y=\"284\">0</text>\n  </g>\n  \n  <!-- 2008 Stacked Bar: x=140, Natural=10.3 (h=154.5, y=125.5), Planted=2.8 (h=42, y=83.5) -->\n  <rect x=\"140\" y=\"125.5\" width=\"40\" height=\"154.5\" fill=\"#0284c7\" rx=\"2\" />\n  <rect x=\"140\" y=\"83.5\" width=\"40\" height=\"42\" fill=\"#38bdf8\" rx=\"2\" />\n  <text x=\"160\" y=\"210\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">10,3</text>\n  <text x=\"160\" y=\"110\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2,8</text>\n  <text x=\"160\" y=\"302\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\">2008</text>\n  \n  <!-- 2010 Stacked Bar: x=245, Natural=10.3 (h=154.5, y=125.5), Planted=3.1 (h=46.5, y=79) -->\n  <rect x=\"245\" y=\"125.5\" width=\"40\" height=\"154.5\" fill=\"#0284c7\" rx=\"2\" />\n  <rect x=\"245\" y=\"79\" width=\"40\" height=\"46.5\" fill=\"#38bdf8\" rx=\"2\" />\n  <text x=\"265\" y=\"210\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">10,3</text>\n  <text x=\"265\" y=\"107\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3,1</text>\n  <text x=\"265\" y=\"302\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\">2010</text>\n\n  <!-- 2015 Stacked Bar: x=350, Natural=10.2 (h=153, y=127), Planted=3.9 (h=58.5, y=68.5) -->\n  <rect x=\"350\" y=\"127\" width=\"40\" height=\"153\" fill=\"#0284c7\" rx=\"2\" />\n  <rect x=\"350\" y=\"68.5\" width=\"40\" height=\"58.5\" fill=\"#38bdf8\" rx=\"2\" />\n  <text x=\"370\" y=\"210\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">10,2</text>\n  <text x=\"370\" y=\"103\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">3,9</text>\n  <text x=\"370\" y=\"302\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\">2015</text>\n\n  <!-- 2021 Stacked Bar: x=455, Natural=10.2 (h=153, y=127), Planted=4.5 (h=67.5, y=59.5) -->\n  <rect x=\"455\" y=\"127\" width=\"40\" height=\"153\" fill=\"#0284c7\" rx=\"2\" />\n  <rect x=\"455\" y=\"59.5\" width=\"40\" height=\"67.5\" fill=\"#38bdf8\" rx=\"2\" />\n  <text x=\"475\" y=\"210\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">10,2</text>\n  <text x=\"475\" y=\"98\" fill=\"#0f172a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">4,5</text>\n  <text x=\"475\" y=\"302\" fill=\"#e2e8f0\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\">2021 (Năm)</text>\n\n  <!-- Line Chart: 38.7% -> 39.5% -> 40.8% -> 42.0% (Right axis: y = 280 - val * 2.1) -->\n  <!-- 2008: y = 280 - 38.7*2.1 = 198.7 -->\n  <!-- 2010: y = 280 - 39.5*2.1 = 197.05 -->\n  <!-- 2015: y = 280 - 40.8*2.1 = 194.32 -->\n  <!-- 2021: y = 280 - 42.0*2.1 = 191.8 -->\n  <polyline points=\"160,198.7 265,197.1 370,194.3 475,191.8\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  \n  <!-- Data dots and labels for line -->\n  <circle cx=\"160\" cy=\"198.7\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"2\" />\n  <text x=\"160\" y=\"188\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">38,7</text>\n  \n  <circle cx=\"265\" cy=\"197.1\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"2\" />\n  <text x=\"265\" y=\"187\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">39,5</text>\n  \n  <circle cx=\"370\" cy=\"194.3\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"2\" />\n  <text x=\"370\" y=\"184\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">40,8</text>\n  \n  <circle cx=\"475\" cy=\"191.8\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"2\" />\n  <text x=\"475\" y=\"181\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">42,0</text>\n\n  <!-- Legend -->\n  <g transform=\"translate(100, 325)\">\n    <rect x=\"0\" y=\"2\" width=\"16\" height=\"12\" fill=\"#0284c7\" rx=\"2\" />\n    <text x=\"22\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Rừng tự nhiên</text>\n    \n    <rect x=\"135\" y=\"2\" width=\"16\" height=\"12\" fill=\"#38bdf8\" rx=\"2\" />\n    <text x=\"157\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Rừng trồng</text>\n    \n    <line x1=\"260\" y1=\"8\" x2=\"285\" y2=\"8\" stroke=\"#f59e0b\" stroke-width=\"3\" />\n    <circle cx=\"272.5\" cy=\"8\" r=\"4\" fill=\"#f59e0b\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"293\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Tỉ lệ che phủ rừng (%)</text>\n  </g>\n\n  <!-- Source -->\n  <text x=\"320\" y=\"358\" fill=\"#64748b\" font-size=\"11\" font-style=\"italic\" text-anchor=\"middle\">(Nguồn: Tổng cục Thống kê, năm 2022)</text>\n</svg>",
      "image": "assets/images/geo_cau22_bieudo_rung.png"
    },
    "image": "assets/images/geo_cau22_bieudo_rung.png"
  },
  {
    "id": 23,
    "question": "Nguồn tài nguyên sinh vật dưới nước, đặc biệt là nguồn hải sản ven bờ bị suy giảm do",
    "options": [
      "A. Ô nhiễm môi trường nước và khai thác quá mức.",
      "B. Khai thác quá mức và bùng phát dịch bệnh.",
      "C. Dịch bệnh và các hiện tượng thời tiết thất thường.",
      "D. Thời tiết thất thường và khai thác quá mức."
    ],
    "correct": 0,
    "explain": "Khai thác quá mức cho phép (đánh bắt hủy diệt ven bờ) và ô nhiễm môi trường nước biển ven bờ là hai nguyên nhân then chốt làm suy giảm hải sản.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 24,
    "question": "Cho bảng số liệu:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">Diện tích rừng của nước ta giai đoạn 1943 - 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: triệu ha)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích có rừng</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng tự nhiên</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng trồng</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr></tbody>\n      </table>\n    </div>\n  Theo bảng số liệu, nhận xét nào sau đây đúng với sự biến động diện tích rừng của nước ta?",
    "options": [
      "A. Tổng diện tích có rừng tăng qua các năm.",
      "B. Diện tích rừng trồng tăng chậm hơn tổng diện tích có rừng.",
      "C. Tỉ trọng diện tích rừng trồng tăng liên tục.",
      "D. Độ che phủ rừng tăng qua các năm."
    ],
    "correct": 2,
    "explain": "Tỉ trọng diện tích rừng trồng trong tổng diện tích rừng tăng liên tục từ 0% (1943) lên 23,1% (2010) và đạt 31,3% (2021).",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 25,
    "question": "Nguyên nhân nào làm cho sông ngòi nước ta nhiều nước, giàu phù sa?",
    "options": [
      "A. Nước ta có mùa mưa kéo dài, mưa lớn.",
      "B. Mưa nhiều trên triền núi có độ dốc lớn.",
      "C. Miền núi cao có nhiều cát, đất vụn bở.",
      "D. Mưa nhiều và đất đai vụn bở dễ bị cuốn trôi."
    ],
    "correct": 3,
    "explain": "Lượng mưa lớn cung cấp nguồn nước dồi dào; mưa nhiều kết hợp địa hình đồi núi dốc, đất phong hóa vụn bở dễ bị xói mòn, rửa trôi tạo nên lượng phù sa lớn cho sông ngòi.",
    "topic": "ĐỊA LÍ TỰ NHIÊN"
  },
  {
    "id": 26,
    "question": "Cơ cấu lao động có sự chuyển dịch giữa các ngành kinh tế ở nước ta là do tác động của",
    "options": [
      "A. quá trình công nghiệp hóa, hiện đại hóa.",
      "B. chính sách dân số, kế hoạch hóa gia đình.",
      "C. mạng lưới đô thị ngày càng mở rộng.",
      "D. tỉ lệ lao động qua đào tạo tăng nhanh."
    ],
    "correct": 0,
    "explain": "Công nghiệp hóa, hiện đại hóa thúc đẩy chuyển dịch cơ cấu kinh tế theo ngành, kéo theo sự chuyển dịch cơ cấu lao động từ nông nghiệp sang công nghiệp và dịch vụ.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 27,
    "question": "Vùng có mật độ dân số cao nhất ở nước ta hiện nay là",
    "options": [
      "A. Đông Nam Bộ.",
      "B. Đồng bằng sông Hồng.",
      "C. Đồng bằng sông Cửu Long.",
      "D. Trung du và miền núi Bắc Bộ."
    ],
    "correct": 1,
    "explain": "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước (trên 1000 người/km²) do lịch sử định cư lâu đời và hoạt động nông nghiệp, kinh tế phát triển.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 28,
    "question": "Dân cư nước ta phân bố",
    "options": [
      "A. tương đối đồng đều giữa các khu vực.",
      "B. chủ yếu ở nông thôn với mật độ cao.",
      "C. khác nhau giữa các khu vực.",
      "D. chỉ tập trung ở đồng bằng ven biển."
    ],
    "correct": 2,
    "explain": "Dân cư nước ta phân bố chưa hợp lí, có sự chênh lệch rõ rệt giữa đồng bằng và đồi núi, giữa thành thị và nông thôn.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 29,
    "question": "Xu hướng già hoá của dân số nước ta không có biểu hiện nào sau đây?",
    "options": [
      "A. Tỉ lệ người trên 60 tuổi tăng.",
      "B. Tuổi thọ trung bình tăng.",
      "C. Tỉ lệ người từ 0 – 14 tuổi tăng.",
      "D. Tỉ suất gia tăng dân số giảm."
    ],
    "correct": 2,
    "explain": "Già hóa dân số làm tỉ lệ trẻ em (nhóm 0 - 14 tuổi) ngày càng giảm chứ không tăng, trong khi tỉ lệ người già trên 60 tuổi và tuổi thọ trung bình tăng lên.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 30,
    "question": "Nguyên nhân nào sau đây là chủ yếu làm cho mật độ dân số trung bình của Đông Nam Bộ tăng nhiều nhất cả nước trong thời gian gần đây?",
    "options": [
      "A. Số người nhập cư tăng nhanh.",
      "B. Gia tăng dân số tự nhiên cao.",
      "C. Công nghiệp phát triển mạnh.",
      "D. Cơ sở hạ tầng phát triển hiện đại."
    ],
    "correct": 0,
    "explain": "Đông Nam Bộ là trung tâm kinh tế năng động, thu hút lực lượng lao động nhập cư từ khắp các vùng trong cả nước đến sinh sống và làm việc.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 31,
    "question": "Biện pháp chủ yếu để giải quyết tình trạng thất nghiệp ở thành thị nước ta hiện nay là",
    "options": [
      "A. xây dựng các nhà máy công nghiệp quy mô lớn.",
      "B. phân bố lại lực lượng lao động trên quy mô cả nước.",
      "C. hợp tác lao động quốc tế để xuất khẩu lao động.",
      "D. đẩy mạnh phát triển công nghiệp và dịch vụ ở đô thị."
    ],
    "correct": 3,
    "explain": "Đẩy mạnh phát triển công nghiệp và các ngành dịch vụ tại đô thị là giải pháp chủ yếu tạo ra nhiều việc làm mới, giải quyết tình trạng thất nghiệp.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 32,
    "question": "Để sử dụng có hiệu quả quỹ thời gian lao động dư thừa ở nông thôn, biện pháp tốt nhất là",
    "options": [
      "A. khôi phục các nghề thủ công.",
      "B. tiến hành thâm canh, tăng vụ.",
      "C. phát triển kinh tế hộ gia đình.",
      "D. khai hoang mở rộng diện tích."
    ],
    "correct": 1,
    "explain": "Biện pháp tốt nhất và trực tiếp nhất trong nông nghiệp là thâm canh, tăng vụ kết hợp đa dạng hóa nông nghiệp và phát triển ngành nghề phụ truyền thống.",
    "topic": "ĐỊA LÍ DÂN CƯ"
  },
  {
    "id": 33,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Phát biểu nào sau đây không đúng với đặc điểm của lao động của nước ta?",
    "options": [
      "A. Nguồn lao động dồi dào và tăng nhanh.",
      "B. Đội ngũ công nhân kĩ thuật lành nghề thiếu nhiều.",
      "C. Chất lượng lao động ngày càng được nâng lên.",
      "D. Lực lượng lao động có trình độ cao đông đảo."
    ],
    "correct": 3,
    "explain": "Lực lượng lao động có trình độ chuyên môn kĩ thuật cao của nước ta hiện nay vẫn còn mỏng, chưa đáp ứng đầy đủ yêu cầu hiện đại hóa công nghiệp và hội nhập quốc tế, do đó phát biểu 'đông đảo' là không chính xác."
  },
  {
    "id": 34,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Lao động nước ta đang có xu hướng chuyển từ khu vực quốc doanh sang các khu vực khác vì",
    "options": [
      "A. Khu vực quốc doanh làm ăn không có hiệu quả.",
      "B. Kinh tế nước ta đang từng bước chuyển sang cơ chế thị trường.",
      "C. Tác động của công nghiệp hoá và hiện đại hoá.",
      "D. Nước ta thực hiện nền kinh tế mở, thu hút đầu tư từ nước ngoài."
    ],
    "correct": 1,
    "explain": "Nước ta chuyển đổi từ nền kinh tế kế hoạch hóa tập trung bao cấp sang nền kinh tế thị trường định hướng XHCN, phát triển đa dạng các thành phần kinh tế (ngoài nhà nước, có vốn đầu tư nước ngoài), tạo nhiều cơ hội việc làm mới ngoài khu vực quốc doanh."
  },
  {
    "id": 35,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Tỉ lệ thời gian lao động được sử dụng ở nông thôn nước ta ngày càng tăng nhờ",
    "options": [
      "A. Việc thực hiện công nghiệp hoá nông thôn.",
      "B. Thanh niên nông thôn đã ra thành thị tìm việc làm.",
      "C. Chất lượng lao động ở nông thôn đã được nâng lên.",
      "D. Việc đa dạng hoá cơ cấu kinh tế ở nông thôn."
    ],
    "correct": 3,
    "explain": "Việc đẩy mạnh đa dạng hóa cơ cấu kinh tế nông thôn (phát triển ngành nghề tiểu thủ công nghiệp, làng nghề, chế biến nông sản và dịch vụ) giúp tạo thêm việc làm, tận dụng hiệu quả thời gian nông nhàn giữa các vụ mùa."
  },
  {
    "id": 36,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Tỉ lệ thất nghiệp ở thành thị cao hơn nông thôn vì",
    "options": [
      "A. Thành thị đông dân hơn nên lao động cũng dồi dào hơn.",
      "B. Chất lượng lao động ở thành thị thấp hơn.",
      "C. Dân nông thôn vào thành thị tìm việc làm.",
      "D. Đặc trưng hoạt động kinh tế ở thành thị khác nông thôn."
    ],
    "correct": 3,
    "explain": "Kinh tế thành thị chủ yếu là sản xuất công nghiệp và dịch vụ đòi hỏi tuyển dụng theo vị trí chuyên môn, khi người lao động không tìm được việc làm sẽ rơi vào tình trạng thất nghiệp; trong khi kinh tế nông thôn mang tính chất mùa vụ, thời gian rảnh rỗi nhiều dẫn đến thiếu việc làm chứ ít khi thất nghiệp hoàn toàn."
  },
  {
    "id": 37,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Dân cư thành thị nước ta hiện nay",
    "options": [
      "A. có tỉ lệ tăng liên tục qua các năm.",
      "B. tập trung hoàn toàn ở đồng bằng.",
      "C. chỉ hoạt động trong ngành dịch vụ.",
      "D. có tỉ trọng lớn trong tổng số dân."
    ],
    "correct": 0,
    "explain": "Cùng với quá trình công nghiệp hóa và hiện đại hóa, tỉ lệ dân cư thành thị của nước ta có xu hướng tăng liên tục qua các năm (từ khoảng 20% năm 1990 lên xấp xỉ 38% hiện nay)."
  },
  {
    "id": 38,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Phát biểu nào sau đây không đúng với đặc điểm đô thị hóa nước ta?",
    "options": [
      "A. Đô thị hóa thúc đẩy tăng trưởng kinh tế.",
      "B. Không gian đô thị ngày càng mở rộng.",
      "C. Lịch sử hình thành đô thị từ lâu đời.",
      "D. Tỉ lệ dân thành thị ngày càng tăng."
    ],
    "correct": 2,
    "explain": "Trong các đặc điểm cơ bản của đô thị hóa nước ta theo SGK: Quá trình đô thị hóa diễn ra chậm chạp, trình độ đô thị hóa thấp; tỉ lệ dân thành thị thấp; phân bố đô thị không đều. Tuy mạng lưới đô thị manh nha từ sớm (thành Cổ Loa) nhưng lịch sử phát triển đô thị bị gián đoạn kéo dài, đô thị hóa chỉ thực sự phát triển mạnh trong thời kì Đổi mới."
  },
  {
    "id": 39,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Mạng lưới đô thị của nước ta hiện nay phân bố",
    "options": [
      "A. chủ yếu ở đồi núi.",
      "B. chủ yếu ở phía Tây.",
      "C. đều giữa các vùng.",
      "D. chủ yếu ở đồng bằng."
    ],
    "correct": 3,
    "explain": "Mạng lưới đô thị nước ta phân bố không đều giữa các vùng, tập trung với mật độ cao chủ yếu ở các vùng đồng bằng và duyên hải ven biển (Đồng bằng sông Hồng, Đông Nam Bộ, Đồng bằng sông Cửu Long)."
  },
  {
    "id": 40,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Do nằm trong khu vực nội chí tuyến nên Biển Đông có",
    "options": [
      "A. các vùng biển nông và giáp Thái Bình Dương, biển ẩm, mưa nhiều.",
      "B. các dòng biển đổi hướng theo mùa, dải hội tụ và áp thấp nhiệt đới.",
      "C. độ muối khá cao, nhiều ánh sáng, giàu ôxi, nhiệt độ nước biển cao.",
      "D. biển kín và rộng, khí hậu nhiệt đới gió mùa, độ muối tương đối lớn."
    ],
    "correct": 2,
    "explain": "Do nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, Biển Đông có nền nhiệt độ nước biển cao quanh năm (trên 25°C), bốc hơi mạnh nên độ muối khá cao (trung bình 32 - 33‰), tầng nước mặt nhận nhiều ánh sáng mặt trời và giàu oxy."
  },
  {
    "id": 41,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Do lãnh thổ trải dài theo chiều vĩ tuyến nên Việt Nam",
    "options": [
      "A. khác nhau về tự nhiên hai phía tây và đông.",
      "B. thiên nhiên có sự phân hoá theo bắc - nam.",
      "C. chịu ảnh hưởng mạnh của các loại gió mùa.",
      "D. chịu ảnh hưởng của khí hậu vùng xích đạo."
    ],
    "correct": 1,
    "explain": "Lãnh thổ nước ta trải dài gần 15 độ vĩ tuyến (từ 8°34'B đến 23°23'B) làm cho góc nhập xạ và bức xạ mặt trời giảm dần từ Nam ra Bắc, kết hợp tác động của gió mùa Đông Bắc suy yếu dần về phía Nam dẫn đến sự phân hóa thiên nhiên theo chiều Bắc - Nam."
  },
  {
    "id": 42,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Phát biểu nào sau đây không đúng về vị trí địa lí của Việt Nam?",
    "options": [
      "A. Nằm gần nơi giao nhau của các vành đai sinh khoáng lớn.",
      "B. Ở trong vùng xích đạo và lãnh thổ kéo dài theo chiều vĩ tuyến.",
      "C. Nằm hoàn toàn trong vùng nội chí tuyến của bán cầu Bắc.",
      "D. Ở gần trung tâm Đông Nam Á và tiếp giáp với Biển Đông."
    ],
    "correct": 1,
    "explain": "Việt Nam nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc (khoảng từ 8°34'B đến 23°23'B), chứ không nằm ở trong vùng xích đạo (xích đạo nằm ở vĩ độ 0°)."
  },
  {
    "id": 43,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Quần đảo Hoàng Sa thuộc tỉnh (thành phố) nào sau đây?",
    "options": [
      "A. Quảng Ngãi.",
      "B. Đà Nẵng.",
      "C. Khánh Hòa.",
      "D. Quảng Nam."
    ],
    "correct": 1,
    "explain": "Huyện đảo Hoàng Sa trực thuộc thành phố Đà Nẵng. Huyện đảo Trường Sa trực thuộc tỉnh Khánh Hòa."
  },
  {
    "id": 44,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Nội thủy là vùng biển",
    "options": [
      "A. liền kề vùng biển quốc tế.",
      "B. nằm ở phía ngoài lãnh hải.",
      "C. ở phía trong đường cơ sở.",
      "D. có chiều rộng là 12 hải lý."
    ],
    "correct": 2,
    "explain": "Nội thủy là vùng nước tiếp giáp với bờ biển, nằm ở phía trong đường cơ sở. Tại nội thủy, quốc gia ven biển có chủ quyền hoàn toàn, tuyệt đối như trên lãnh thổ đất liền."
  },
  {
    "id": 45,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Việt Nam nằm ở",
    "options": [
      "A. phía bắc của Đông Nam Á.",
      "B. phía đông của lục địa Á - Âu.",
      "C. trung tâm của Đông Dương.",
      "D. phía đông nam của châu Á."
    ],
    "correct": 3,
    "explain": "Vị trí địa lí của Việt Nam nằm ở phía Đông Nam châu Á, thuộc bán đảo Đông Dương, ven bờ biển Thái Bình Dương."
  },
  {
    "id": 46,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Thuận lợi của vị trí địa lí nước ta đối với phát triển kinh tế không phải là",
    "options": [
      "A. có nét tương đồng lịch sử, văn hoá với các nước.",
      "B. án ngữ trên tuyến đường hàng không quốc tế.",
      "C. nằm trong khu vực kinh tế phát triển năng động.",
      "D. ở vị trí trung chuyển tuyến hàng hải quốc tế."
    ],
    "correct": 0,
    "explain": "Nét tương đồng về lịch sử, văn hóa và xã hội với các nước trong khu vực là thuận lợi về mặt văn hóa - xã hội và giao lưu ngoại giao, không phải là ý nghĩa trực tiếp đối với phát triển kinh tế."
  },
  {
    "id": 47,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Do tiếp giáp với Biển Đông nên Việt Nam có",
    "options": [
      "A. nhiều bão, lũ lụt, hạn hán, động đất.",
      "B. tài nguyên khoáng sản rất đa dạng.",
      "C. thảm thực vật xanh tốt quanh năm.",
      "D. tự nhiên phân hoá theo bắc - nam."
    ],
    "correct": 2,
    "explain": "Nhờ Biển Đông mang lại nguồn ẩm dồi dào và lượng mưa phong phú, thảm thực vật của nước ta luôn xanh tốt quanh năm và giàu sức sống, khác hẳn với các vùng đất cùng vĩ độ ở Tây Á hay Bắc Phi."
  },
  {
    "id": 48,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Lãnh hải là",
    "options": [
      "A. vùng nước sâu ở khoảng 200 m hoặc hơn nữa.",
      "B. vùng biển rộng 200 hải lý tính từ đường cơ sở.",
      "C. vùng biển thuộc chủ quyền quốc gia trên biển.",
      "D. vùng được xem như bộ phận lãnh thổ đất liền."
    ],
    "correct": 2,
    "explain": "Lãnh hải là vùng biển thuộc chủ quyền quốc gia trên biển, có chiều rộng 12 hải lí tính từ đường cơ sở. Ranh giới ngoài của lãnh hải chính là đường biên giới quốc gia trên biển."
  },
  {
    "id": 49,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Vùng đất của nước ta gồm",
    "options": [
      "A. vùng đồi núi, đồng bằng và bán đảo.",
      "B. phần đất liền và các quần đảo xa bờ.",
      "C. các quần đảo, bãi ngầm và đảo ven bờ.",
      "D. toàn bộ phần lục địa (đất liền) và các đảo."
    ],
    "correct": 3,
    "explain": "Vùng đất của nước ta gồm toàn bộ phần đất liền (lục địa) và các hải đảo trên biển với tổng diện tích tự nhiên là hơn 331 nghìn km²."
  },
  {
    "id": 50,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Phần lớn đường biên giới trên đất liền của nước ta nằm ở khu vực",
    "options": [
      "A. ven biển.",
      "B. cao nguyên.",
      "C. đồng bằng.",
      "D. miền núi."
    ],
    "correct": 3,
    "explain": "Đường biên giới trên đất liền của nước ta dài hơn 4600 km, phần lớn chạy qua các vùng núi cao, hiểm trở, đi theo các sống núi, đỉnh núi hoặc đường phân thủy tự nhiên."
  },
  {
    "id": 51,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Mùa mưa ở Tây Nguyên bắt đầu do tác động chủ yếu của gió",
    "options": [
      "A. Mậu dịch ở chí tuyến bán cầu Bắc thổi đến.",
      "B. Đông Bắc có nguồn gốc từ cao áp Xibia.",
      "C. Tây Nam từ áp cao chí tuyến bán cầu Nam.",
      "D. Tây Nam áp cao Bắc Ấn Độ Dương đến."
    ],
    "correct": 3,
    "explain": "Vào đầu mùa hạ, khối khí nhiệt đới ẩm Bắc Ấn Độ Dương di chuyển theo hướng tây nam xâm nhập trực tiếp vào nước ta, gây mưa lớn cho đồng bằng Nam Bộ và Tây Nguyên, mở đầu mùa mưa tại khu vực này."
  },
  {
    "id": 52,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Vào giữa và cuối mùa hạ, Tây Nguyên có mưa nhiều chủ yếu do tác động của",
    "options": [
      "A. Tín phong bán cầu Bắc.",
      "B. Gió mùa Đông Bắc.",
      "C. Gió Tây Nam từ vịnh Bengal đến.",
      "D. Gió mùa Tây Nam từ bán cầu Nam."
    ],
    "correct": 3,
    "explain": "Vào giữa và cuối mùa hạ, gió mùa Tây Nam xuất phát từ áp cao cận chí tuyến bán cầu Nam vượt qua vùng biển xích đạo trở nên nóng ẩm, gây mưa lớn và kéo dài cho Nam Bộ và Tây Nguyên."
  },
  {
    "id": 53,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Tính chất nhiệt đới ẩm gió mùa của đất ở nước ta biểu hiện chủ yếu là",
    "options": [
      "A. Độ dày đất lớn nhưng dễ bị xói mòn, rửa trôi và thường nghèo mùn.",
      "B. Quá trình feralit hình thành đất là chủ đạo, đất feralit là chủ yếu.",
      "C. Quá trình tích tụ ôxít sắt, ôxít nhôm là chủ yếu, đất đá ong phổ biến.",
      "D. Đất feralit có chủ yếu ở đồi núi và đất phù sa chủ yếu ở đồng bằng."
    ],
    "correct": 1,
    "explain": "Quá trình feralit là quá trình hình thành đất đặc trưng cho khí hậu nhiệt đới ẩm gió mùa: quá trình phong hóa diễn ra mạnh, các chất bazơ dễ tan bị rửa trôi, tích tụ oxit sắt và oxit nhôm tạo nên loại đất feralit đỏ vàng chiếm hơn 65% diện tích đất tự nhiên."
  },
  {
    "id": 54,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Nguồn gốc của gió Đông Nam từ biển thổi vào đồng bằng sông Hồng vào giữa và cuối mùa hạ là khối khí từ áp cao",
    "options": [
      "A. Siberia.",
      "B. Tây Thái Bình Dương.",
      "C. Chí tuyến Nam bán cầu.",
      "D. Bắc Ấn Độ Dương."
    ],
    "correct": 2,
    "explain": "Gió mùa Tây Nam (có nguồn gốc từ cao áp chí tuyến Nam bán cầu) vượt qua xích đạo, khi thổi đến Bắc Bộ bị hút về tâm áp thấp Bắc Bộ theo hướng đông nam, thổi từ biển vào đồng bằng sông Hồng."
  },
  {
    "id": 55,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Biểu hiện của tính chất nhiệt đới ẩm khí hậu nước ta là:",
    "options": [
      "A. cân bằng bức xạ dương, tổng số giờ nắng lớn.",
      "B. nhiệt độ trung bình năm cao, lượng mưa lớn.",
      "C. nhiệt độ trung bình cao, độ ẩm không khí lớn.",
      "D. gió mùa hoạt động, cân bằng ẩm luôn dương."
    ],
    "correct": 1,
    "explain": "Tính chất nhiệt đới thể hiện ở nền nhiệt độ trung bình năm cao trên toàn quốc (trên 20°C, trừ vùng núi cao), còn tính chất ẩm thể hiện ở tổng lượng mưa năm rất lớn (1500 - 2000 mm) và độ ẩm không khí cao trên 80%."
  },
  {
    "id": 56,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Thuận lợi của khí hậu nhiệt đới ẩm gió mùa đối với sản xuất nông nghiệp nước ta chủ yếu là",
    "options": [
      "A. Phát triển nông nghiệp nhiệt đới, sản xuất quanh năm, đa dạng cơ cấu nông sản.",
      "B. Đa dạng hóa cây trồng và vật nuôi, nuôi trồng thủy sản, tạo điều kiện để tăng vụ.",
      "C. Phát triển cây trồng nhiệt đới, tăng cường đánh bắt thủy sản, cung cấp nước tưới.",
      "D. Cung cấp nước tưới, phát triển đánh bắt và nuôi trồng thủy sản, cải tạo đất trồng."
    ],
    "correct": 0,
    "explain": "Khí hậu nhiệt đới ẩm dồi dào nhiệt và nước cho phép cây trồng vật nuôi sinh trưởng quanh năm, thâm canh tăng vụ, đồng thời sự phân hóa khí hậu giúp phát triển đa dạng hóa cơ cấu sản phẩm nông nghiệp nhiệt đới, cận nhiệt và ôn đới."
  },
  {
    "id": 57,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Nguyên nhân chủ yếu gây mưa vào mùa hạ trên cả nước ta là",
    "options": [
      "A. Gió mùa Tây Nam, dải hội tụ nhiệt đới và bão.",
      "B. Gió mùa Tây Nam, áp thấp nhiệt đới.",
      "C. Tín phong bán cầu Bắc và dải hội tụ nhiệt đới.",
      "D. Gió Tây Nam Bắc Ấn Độ Dương đến, bão."
    ],
    "correct": 0,
    "explain": "Vào mùa hạ, lượng mưa trên cả nước chủ yếu do hoạt động của gió mùa Tây Nam kết hợp chặt chẽ với dải hội tụ nhiệt đới (FIT) chạy ngang qua lãnh thổ và các xoáy thuận nhiệt đới (bão, áp thấp nhiệt đới)."
  },
  {
    "id": 58,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Biểu hiện của khí hậu nhiệt đới ẩm gió mùa ở nước ta là",
    "options": [
      "A. Độ ẩm tương đối của không khí cao, số giờ nắng nhiều.",
      "B. Lượng bức xạ mặt trời lớn, nhiệt độ trung bình năm cao.",
      "C. Có sự hoạt động của gió Mậu dịch và các loại gió mùa.",
      "D. Cán cân bức xạ quanh năm dương, lượng mưa khá lớn."
    ],
    "correct": 1,
    "explain": "Tính chất nhiệt đới thể hiện qua tổng lượng bức xạ mặt trời rất lớn (trên 130 kcal/cm²/năm) và cán cân bức xạ luôn dương quanh năm, nền nhiệt trung bình năm cao vượt chuẩn vùng nhiệt đới."
  },
  {
    "id": 59,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Đặc điểm nào sau đây đúng với tính chất ẩm của khí hậu nước ta?",
    "options": [
      "A. Tổng lượng mưa trong năm lớn.",
      "B. Cân bằng ẩm trong năm luôn âm.",
      "C. Độ tương đối của không khí thấp.",
      "D. Lượng bốc hơi lớn hơn lượng mưa."
    ],
    "correct": 0,
    "explain": "Tính chất ẩm của khí hậu nước ta thể hiện ở tổng lượng mưa trung bình năm rất lớn (1500 - 2000 mm, một số sườn đón gió đạt trên 3000 mm/năm), cân bằng ẩm luôn dương và độ ẩm không khí trên 80%."
  },
  {
    "id": 60,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Tính thất thường của thời tiết nước ta gây ra các khó khăn chủ yếu về",
    "options": [
      "A. Các loại dịch bệnh, bảo dưỡng máy móc, bảo quản nông sản.",
      "B. Thiên tai, dịch bệnh, gây các thiệt hại cho đời sống nhân dân.",
      "C. Hoạt động canh tác, kế hoạch mùa vụ, phòng chống thiên tai.",
      "D. Cơ cấu mùa vụ, gián đoạn hoạt động giao thông, thâm canh."
    ],
    "correct": 2,
    "explain": "Sự diễn biến thất thường của thời tiết (năm rét sớm năm rét muộn, hạn hán kéo dài, mưa bão trái mùa) gây khó khăn lớn nhất cho việc lên kế hoạch mùa vụ canh tác nông nghiệp và công tác dự báo phòng chống thiên tai."
  },
  {
    "id": 61,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Đặc điểm thiên nhiên đai nhiệt đới gió mùa ở nước ta là:",
    "options": [
      "A. Nhiệt độ trung bình năm dưới 15°C, đất mùn thô, nhiều loài cây ôn đới.",
      "B. Có khí hậu mát mẻ, đất feralit có mùn và đất mùn, rừng cận nhiệt đới.",
      "C. Nhiệt độ trung bình các tháng dưới 25°C, đất mùn, sinh vật phong phú.",
      "D. Nền nhiệt độ cao, đất chủ yếu là feralit và rừng nhiệt đới ẩm."
    ],
    "correct": 3,
    "explain": "Đai nhiệt đới gió mùa chân núi (dưới 600 - 700m ở miền Bắc và dưới 900 - 1000m ở miền Nam) có nền nhiệt cao, mùa hạ nóng >25°C, đất feralit vùng đồi núi thấp và phù sa đồng bằng, hệ sinh thái rừng nhiệt đới ẩm lá rộng thường xanh phát triển mạnh."
  },
  {
    "id": 62,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Nhân tố chủ yếu tạo ra sự đối lập về chế độ mưa giữa Đông Trường Sơn và Tây Nguyên là",
    "options": [
      "A. Gió mùa và độ cao dãy núi Trường Sơn Nam.",
      "B. Các loại gió trong năm kết hợp hướng núi.",
      "C. Biển Đông kết hợp với các loại gió theo mùa.",
      "D. Vị trí địa lí và hoạt động của gió trong năm."
    ],
    "correct": 1,
    "explain": "Sự đối lập mùa mưa và mùa khô giữa Đông Trường Sơn và Tây Nguyên được hình thành do bức chắn địa hình của dãy Trường Sơn kết hợp với các luồng gió hướng tây nam vào mùa hạ (Tây Nguyên mưa lớn, Đông Trường Sơn khô nóng) và gió hướng đông bắc vào mùa đông (Đông Trường Sơn mưa lớn, Tây Nguyên vào mùa khô)."
  },
  {
    "id": 63,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Đặc điểm thiên nhiên đai cận nhiệt đới gió mùa trên núi ở nước ta là:",
    "options": [
      "A. Nhiệt độ trung bình năm dưới 15°C, đất mùn thô, nhiều loài cây ôn đới.",
      "B. Có khí hậu mát mẻ, đất feralit có mùn và đất mùn, sinh vật cận nhiệt đới.",
      "C. Nhiệt độ trung bình các tháng dưới 25°C, đất mùn, sinh vật phong phú.",
      "D. Nền nhiệt độ cao, đất chủ yếu là feralit và phù sa, rừng nhiệt đới ẩm."
    ],
    "correct": 1,
    "explain": "Đai cận nhiệt đới gió mùa trên núi (từ 600 - 700m lên đến 2600m) có khí hậu mát mẻ, nhiệt độ các tháng đều dưới 25°C, đất feralit có mùn và đất mùn trên núi, xuất hiện các loài sinh vật cận nhiệt như thông, dẻ, re, chim thú cận nhiệt."
  },
  {
    "id": 64,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Nguyên nhân chủ yếu làm phân hoá thiên nhiên nước ta theo chiều bắc - nam là",
    "options": [
      "A. Gió mùa mùa hạ và độ cao các dãy núi.",
      "B. Hoạt động của gió trong năm và vị trí.",
      "C. Gió mùa kết hợp với hướng các dãy núi.",
      "D. Gió mùa mùa đông và hướng các dãy núi."
    ],
    "correct": 2,
    "explain": "Nguyên nhân chủ yếu là do lãnh thổ trải dài theo vĩ tuyến kết hợp hoạt động của gió mùa Đông Bắc suy yếu dần khi di chuyển về phía Nam do bị chặn lại bởi bức chắn địa hình của dãy Bạch Mã."
  },
  {
    "id": 65,
    "topic": "ĐỊA LÍ TỰ NHIÊN",
    "question": "Đặc điểm nào sau đây đúng với tính chất ẩm của khí hậu nước ta?",
    "options": [
      "A. Cân bằng ẩm trong năm luôn âm.",
      "B. Độ tương đối của không khí thấp.",
      "C. Lượng bốc hơi lớn hơn lượng mưa.",
      "D. Tổng lượng mưa trong năm lớn."
    ],
    "correct": 3,
    "explain": "Đặc điểm cơ bản của tính chất ẩm là tổng lượng mưa trung bình năm lớn (1500 - 2000 mm) và độ ẩm không khí tương đối cao trên 80%."
  },
  {
    "id": 66,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Lao động nước ta hiện nay",
    "options": [
      "A. có tỉ lệ thất nghiệp còn cao.",
      "B. phân bố đều khắp các vùng.",
      "C. ở cố định, không di chuyển.",
      "D. có sự phân bố không đồng đều giữa các vùng."
    ],
    "correct": 3,
    "explain": "Nguồn lao động nước ta phân bố không đều giữa các vùng: tập trung rất đông đúc ở đồng bằng ven biển (chiếm khoảng 75% lao động), trong khi vùng trung du miền núi giàu tài nguyên lại thiếu hụt lao động."
  },
  {
    "id": 67,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Phát biểu nào sau đây không đúng về vấn đề việc làm ở nước ta hiện nay?",
    "options": [
      "A. Là một vấn đề kinh tế - xã hội lớn cần quan tâm.",
      "B. Tỉ lệ thất nghiệp ở nông thôn lớn hơn ở thành thị.",
      "C. Thất nghiệp, thiếu việc làm vẫn đang còn gay gắt.",
      "D. Tỉ lệ thiếu việc làm ở nông thôn lớn hơn thành thị."
    ],
    "correct": 1,
    "explain": "Ở nước ta hiện nay, tỉ lệ thất nghiệp ở thành thị cao hơn nông thôn, còn tỉ lệ thiếu việc làm ở nông thôn lại cao hơn ở khu vực thành thị. Do đó phát biểu 'Tỉ lệ thất nghiệp ở nông thôn lớn hơn ở thành thị' là sai."
  },
  {
    "id": 68,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Lao động nước ta phân bố không đều giữa các vùng gây khó khăn chủ yếu cho",
    "options": [
      "A. đẩy mạnh sự chuyển dịch cơ cấu kinh tế.",
      "B. phát huy tiềm năng tự nhiên, tạo thu nhập.",
      "C. sử dụng hợp lí tài nguyên, tạo ra việc làm.",
      "D. chuyển dịch cơ cấu lao động theo lãnh thổ."
    ],
    "correct": 2,
    "explain": "Sự phân bố lao động không đều (đồng bằng thừa lao động thiếu tài nguyên, miền núi thừa tài nguyên thiếu lao động) gây trở ngại lớn cho việc khai thác hợp lí tiềm năng tài nguyên thiên nhiên của từng vùng và giải quyết việc làm cho người lao động."
  },
  {
    "id": 69,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Tỉ lệ lao động thiếu việc làm ở nông thôn nước ta còn cao chủ yếu do",
    "options": [
      "A. hoạt động trồng trọt, sản xuất theo thời vụ.",
      "B. lao động đông, đất đai tài nguyên có hạn.",
      "C. kinh tế hạn chế, ngành nghề chưa đa dạng.",
      "D. dân số đông, mức sinh nhiều nơi còn cao."
    ],
    "correct": 0,
    "explain": "Kinh tế nông thôn phụ thuộc lớn vào sản xuất nông nghiệp mang tính chất mùa vụ, khoảng thời gian nông nhàn giữa các đợt gieo trồng và thu hoạch là nguyên nhân chính dẫn đến tình trạng thiếu việc làm cao."
  },
  {
    "id": 70,
    "topic": "ĐỊA LÍ DÂN CƯ",
    "question": "Tỉ lệ lao động thất nghiệp ở thành thị nước ta vẫn còn cao chủ yếu do",
    "options": [
      "A. lao động tăng, số chưa qua đào tạo nhiều.",
      "B. hoạt động dịch vụ chưa phát triển đa dạng.",
      "C. lao động ở nhiều vùng nông thôn nhập cư.",
      "D. mật độ dân cao, kinh tế phát triển hạn chế."
    ],
    "correct": 2,
    "explain": "Dòng người lao động di cư từ khu vực nông thôn đổ dồn về các đô thị để tìm kiếm việc làm trong khi các ngành kinh tế đô thị chưa tạo thêm đủ vị trí việc làm mới, dẫn đến tỉ lệ thất nghiệp tại thành thị duy trì ở mức cao."
  },
  {
    "id": 71,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Vùng biển nước ta - Ý a]: Vùng biển nước ta có nhiều thuận lợi cho phát triển du lịch biển đảo.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Với hơn 4000 hòn đảo lớn nhỏ, nhiều bãi biển đẹp và khí hậu nhiệt đới nắng ấm quanh năm, nước ta có tiềm năng vô cùng to lớn để phát triển du lịch biển đảo."
  },
  {
    "id": 72,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Vùng biển nước ta - Ý b]: Dầu khí là loại khoáng sản có giá trị kinh tế nhất ở vùng biển.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Dầu mỏ và khí đốt ở thềm lục địa phía Nam là tài nguyên khoáng sản có giá trị kinh tế cao nhất và đóng góp tỉ trọng lớn nhất cho kinh tế biển của nước ta."
  },
  {
    "id": 73,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Vùng biển nước ta - Ý c]: Bắc Trung Bộ là vùng có điều kiện thuận lợi nhất để xây dựng cảng nước sâu.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Vùng Duyên hải Nam Trung Bộ mới là vùng có điều kiện tự nhiên thuận lợi nhất để xây dựng cảng nước sâu (bờ biển khúc khuỷu, nhiều vũng vịnh kín gió, thềm lục địa hẹp và sâu)."
  },
  {
    "id": 74,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Vùng biển nước ta - Ý d]: Một trong những giải pháp quan trọng để khai thác nguồn lợi hải sản là đánh bắt xa bờ.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Đẩy mạnh đánh bắt xa bờ giúp bảo vệ nguồn lợi thủy sản ven bờ đang cạn kiệt, nâng cao hiệu quả kinh tế và khẳng định chủ quyền biển đảo thiêng liêng của Tổ quốc."
  },
  {
    "id": 75,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Phạm vi lãnh thổ - Ý a]: Biên giới trên đất liền nước ta tiếp giáp với bốn quốc gia.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Trên đất liền nước ta chỉ tiếp giáp với 3 quốc gia là Trung Quốc, Lào và Cam-pu-chia."
  },
  {
    "id": 76,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Phạm vi lãnh thổ - Ý b]: Việt Nam nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Điểm cực Nam ở 8°34'B và cực Bắc ở 23°23'B đều nằm giữa xích đạo và chí tuyến Bắc (23°27'B), tức hoàn toàn trong vùng nội chí tuyến bán cầu Bắc."
  },
  {
    "id": 77,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Phạm vi lãnh thổ - Ý c]: Nước ta nằm hoàn toàn ở bán cầu Đông.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Kinh độ nước ta từ 102°09'Đ đến 109°28'Đ (đất liền) và đến 117°20'Đ (vùng biển), đều nằm ở bán cầu Đông."
  },
  {
    "id": 78,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Phạm vi lãnh thổ - Ý d]: Thiên nhiên nước ta chịu ảnh hưởng sâu sắc của biển.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Do tiếp giáp Biển Đông rộng lớn với bờ biển dài 3260 km, các khối khí qua biển mang lượng ẩm dồi dào khiến thiên nhiên nước ta mang tính chất hải dương sâu sắc."
  },
  {
    "id": 79,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tọa độ địa lí - Ý a]: Nước ta nằm hoàn toàn ở nửa cầu Bắc.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Toàn bộ phần đất liền và vùng biển nước ta có vĩ độ từ 6°50'B đến 23°23'B, hoàn toàn ở nửa cầu Bắc."
  },
  {
    "id": 80,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tọa độ địa lí - Ý b]: Lãnh thổ phần đất liền nước ta kéo dài trên 17 vĩ độ.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Phần đất liền từ 8°34'B đến 23°23'B kéo dài khoảng 14°49' vĩ độ (chưa tới 15 vĩ độ), không phải trên 17 vĩ độ."
  },
  {
    "id": 81,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tọa độ địa lí - Ý c]: Vị trí địa lí tạo thuận lợi cho nước ta phát triển tổng hợp kinh tế biển.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Vùng biển rộng khoảng 1 triệu km² với tài nguyên phong phú tạo điều kiện phát triển toàn diện 4 ngành kinh tế biển: thủy sản, du lịch, giao thông vận tải và khai thác khoáng sản dầu khí."
  },
  {
    "id": 82,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tọa độ địa lí - Ý d]: Vị trí địa lí và hình dáng lãnh thổ đã làm sông ngòi nước ta phần lớn sông nhỏ, nhiều nước, thủy chế theo mùa.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Lãnh thổ kéo dài và hẹp ngang, địa hình dốc ra biển khiến mạng lưới sông ngắn, nhỏ; lượng mưa lớn làm sông nhiều nước và chế độ nước biến động theo mùa mưa - khô của khí hậu."
  },
  {
    "id": 83,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "Căn cứ vào sơ đồ khái quát các vùng biển Việt Nam, nhận định nào sau đây là đúng?",
    "options": [
      "A. Vùng biển nước ta bao gồm: Nội thủy, lãnh hải, vùng tiếp giáp lãnh hải và vùng đặc quyền kinh tế.",
      "B. Vùng biển rộng 200 hải lí tính từ đường cơ sở ra phía đông hợp với lãnh hải là vùng đặc quyền kinh tế.",
      "C. Vai trò chính của đường cơ sở là phân tách vùng nội thủy và vùng lãnh hải.",
      "D. Trong vùng đặc quyền kinh tế nước ta, các quốc gia khác có quyền tự do thăm dò và khai thác tài nguyên."
    ],
    "correct": 1,
    "explain": "Vùng đặc quyền kinh tế là vùng biển tiếp liền và nằm ngoài lãnh hải, hợp với lãnh hải thành một vùng biển có chiều rộng 200 hải lí tính từ đường cơ sở. Nước ta có chủ quyền hoàn toàn về kinh tế tại vùng này.",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 760 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"760\" height=\"300\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Title -->\n  <text x=\"380\" y=\"28\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">SƠ ĐỒ MẶT CẮT KHÁI QUÁT CÁC VÙNG BIỂN VIỆT NAM</text>\n  \n  <!-- Sky background / water gradient -->\n  <defs>\n    <linearGradient id=\"seaGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0284c7\" stop-opacity=\"0.85\" />\n      <stop offset=\"100%\" stop-color=\"#0369a1\" stop-opacity=\"0.95\" />\n    </linearGradient>\n    <linearGradient id=\"landGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0%\" stop-color=\"#d97706\" />\n      <stop offset=\"100%\" stop-color=\"#b45309\" />\n    </linearGradient>\n    <linearGradient id=\"shelfGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#78350f\" />\n      <stop offset=\"100%\" stop-color=\"#451a03\" />\n    </linearGradient>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f59e0b\" />\n    </marker>\n    <marker id=\"arrowWhite\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#e2e8f0\" />\n    </marker>\n  </defs>\n\n  <!-- Water Surface & Water Mass -->\n  <!-- Coastline starts at x=110, y=170. Base points island at x=205. Slope down to x=720, y=215 -->\n  <path d=\"M 110,165 Q 160,165 205,165 L 720,165 L 720,225 Q 400,210 205,178 Q 150,172 110,170 Z\" fill=\"url(#seaGrad)\" />\n  \n  <!-- Sea Surface Line -->\n  <line x1=\"110\" y1=\"165\" x2=\"720\" y2=\"165\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <text x=\"725\" y=\"169\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"600\">Mặt biển</text>\n  \n  <!-- Seabed / Continental Shelf -->\n  <path d=\"M 30,170 Q 70,165 110,170 Q 150,172 205,178 L 205,160 L 210,165 Q 400,210 720,225 L 720,245 L 30,245 Z\" fill=\"url(#shelfGrad)\" stroke=\"#92400e\" stroke-width=\"1.5\" />\n  <text x=\"260\" y=\"235\" fill=\"#fde68a\" font-size=\"12\" font-weight=\"bold\">Thềm lục địa</text>\n\n  <!-- Land & Coconut Tree -->\n  <path d=\"M 30,245 L 30,140 Q 60,145 90,158 Q 105,165 110,170 Z\" fill=\"url(#landGrad)\" />\n  <!-- Tree -->\n  <path d=\"M 60,145 Q 65,120 75,115\" stroke=\"#78350f\" stroke-width=\"3\" fill=\"none\" />\n  <circle cx=\"75\" cy=\"113\" r=\"10\" fill=\"#15803d\" />\n  <text x=\"65\" y=\"160\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Đất liền</text>\n\n  <!-- Vertical Demarcation Lines (Dashed) -->\n  <!-- Coast line: x=110 -->\n  <line x1=\"110\" y1=\"50\" x2=\"110\" y2=\"170\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n  \n  <!-- Base Line (Đường cơ sở): x=205 (Solid Red) -->\n  <line x1=\"205\" y1=\"45\" x2=\"205\" y2=\"178\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n  <text x=\"198\" y=\"115\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\" transform=\"rotate(-90 198 115)\" text-anchor=\"middle\">Đường cơ sở</text>\n\n  <!-- Territorial Waters outer limit (12 nautical miles): x=265 -->\n  <line x1=\"265\" y1=\"50\" x2=\"265\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n\n  <!-- Contiguous Zone outer limit (24 nautical miles from baseline): x=325 -->\n  <line x1=\"325\" y1=\"50\" x2=\"325\" y2=\"195\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n\n  <!-- EEZ outer limit (200 nautical miles): x=640 -->\n  <line x1=\"640\" y1=\"50\" x2=\"640\" y2=\"220\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n\n  <!-- High Seas limit: x=690 -->\n  <line x1=\"690\" y1=\"50\" x2=\"690\" y2=\"223\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\" />\n  <text x=\"705\" y=\"65\" fill=\"#94a3b8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Biển cả</text>\n\n  <!-- Dimension Arrows & Zone Names -->\n  <!-- 1. Nội thuỷ -->\n  <line x1=\"114\" y1=\"58\" x2=\"201\" y2=\"58\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-start=\"url(#arrow)\" marker-end=\"url(#arrow)\" />\n  <text x=\"157\" y=\"78\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Nội thuỷ</text>\n\n  <!-- 2. Lãnh hải: 12 hải lí -->\n  <line x1=\"209\" y1=\"58\" x2=\"261\" y2=\"58\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-start=\"url(#arrow)\" marker-end=\"url(#arrow)\" />\n  <text x=\"235\" y=\"75\" fill=\"#f1f5f9\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">12 hải lí</text>\n  <text x=\"235\" y=\"88\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Lãnh hải</text>\n\n  <!-- 3. Vùng tiếp giáp: 12 hải lí -->\n  <line x1=\"269\" y1=\"58\" x2=\"321\" y2=\"58\" stroke=\"#38bdf8\" stroke-width=\"1.5\" marker-start=\"url(#arrow)\" marker-end=\"url(#arrow)\" />\n  <text x=\"295\" y=\"75\" fill=\"#f1f5f9\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">12 hải lí</text>\n  <text x=\"295\" y=\"88\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Vùng tiếp giáp</text>\n\n  <!-- 4. Vùng đặc quyền kinh tế -->\n  <text x=\"475\" y=\"98\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Vùng đặc quyền kinh tế</text>\n  \n  <!-- 200 nautical miles bar: from baseline (205) to 640 -->\n  <line x1=\"209\" y1=\"120\" x2=\"636\" y2=\"120\" stroke=\"#f59e0b\" stroke-width=\"2\" marker-start=\"url(#arrow)\" marker-end=\"url(#arrow)\" />\n  <text x=\"422\" y=\"138\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Lãnh hải + Vùng đặc quyền kinh tế = 200 hải lí</text>\n\n  <!-- Footnote -->\n  <text x=\"30\" y=\"280\" fill=\"#94a3b8\" font-size=\"11\" font-style=\"italic\">Ghi chú: 1 hải lí = 1852m</text>\n</svg>",
      "image": "assets/images/docx_1._image1.png"
    },
    "image": "assets/images/docx_1._image1.png"
  },
  {
    "id": 84,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lượng mưa Đà Nẵng - Ý a]: Tháng có lượng mưa lớn nhất là tháng 9.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">LƯỢNG MƯA CÁC THÁNG TRONG NĂM 2021 TẠI TRẠM ĐÀ NẴNG</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: mm - Nguồn: Niên giám thống kê 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Lượng mưa</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">34,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">32,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">38,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">12,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">93,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">800,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">782,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">271,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">485,8</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tháng 9 có lượng mưa đạt 800,4 mm, là tháng có lượng mưa cao nhất trong năm 2021 tại trạm Đà Nẵng."
  },
  {
    "id": 85,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lượng mưa Đà Nẵng - Ý b]: Mùa mưa kéo dài từ tháng 1 đến tháng 5.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">LƯỢNG MƯA CÁC THÁNG TRONG NĂM 2021 TẠI TRẠM ĐÀ NẴNG</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: mm - Nguồn: Niên giám thống kê 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Lượng mưa</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">34,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">32,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">38,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">12,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">93,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">800,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">782,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">271,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">485,8</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Từ tháng 1 đến tháng 5 lượng mưa rất thấp (tháng 5 chỉ có 2,1 mm), đây là các tháng mùa khô. Mùa mưa tại Đà Nẵng tập trung từ tháng 9 đến tháng 12."
  },
  {
    "id": 86,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lượng mưa Đà Nẵng - Ý c]: Lượng mưa trung bình năm của Đà Nẵng là 2492,1 mm.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">LƯỢNG MƯA CÁC THÁNG TRONG NĂM 2021 TẠI TRẠM ĐÀ NẴNG</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: mm - Nguồn: Niên giám thống kê 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Lượng mưa</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">34,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">32,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">38,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">12,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">93,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">800,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">782,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">271,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">485,8</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tổng lượng mưa 12 tháng năm 2021 của trạm Đà Nẵng là: 34,7 + 32,1 + 14,6 + 21,4 + 2,1 + 38,5 + 12,5 + 93,5 + 800,4 + 782,8 + 271,0 + 485,8 = 2589,4 mm (khác với 2492,1 mm)."
  },
  {
    "id": 87,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lượng mưa Đà Nẵng - Ý d]: Lượng mưa lớn vào thu đông chủ yếu do hoạt động của gió mùa và dải hội tụ nhiệt đới.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">LƯỢNG MƯA CÁC THÁNG TRONG NĂM 2021 TẠI TRẠM ĐÀ NẴNG</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: mm - Nguồn: Niên giám thống kê 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Lượng mưa</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">34,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">32,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">21,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">38,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">12,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">93,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">800,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">782,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">271,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">485,8</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Lượng mưa cực đại vào thu đông ở Duyên hải miền Trung (Đà Nẵng) là do gió mùa Đông Bắc thổi qua biển gặp địa hình dãy Trường Sơn chắn gió, kết hợp với dải hội tụ nhiệt đới và bão."
  },
  {
    "id": 88,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Gió mùa Đông Bắc - Ý a]: Nửa đầu mùa đông, miền Bắc có thời tiết lạnh ẩm.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Nửa đầu mùa đông (từ tháng 11 đến tháng 1), miền Bắc có thời tiết lạnh khô; nửa sau mùa đông (từ tháng 2 đến tháng 4) mới chuyển sang thời tiết lạnh ẩm có mưa phùn."
  },
  {
    "id": 89,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Gió mùa Đông Bắc - Ý b]: Gió mùa Đông Bắc tác động yếu đến miền Nam do ảnh hưởng của dãy Bạch Mã.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Gió mùa Đông Bắc bị chặn lại hầu như hoàn toàn tại bức chắn địa hình dãy Bạch Mã (16°B), do đó miền Nam hầu như không chịu ảnh hưởng của gió mùa Đông Bắc mà chịu sự thống trị của Tín phong bán cầu Bắc."
  },
  {
    "id": 90,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Gió mùa Đông Bắc - Ý c]: Gió mùa Đông Bắc là nguyên nhân chính tạo nên mùa khô ở Nam Bộ và Tây Nguyên.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tín phong bán cầu Bắc (thổi theo hướng đông bắc mang tính chất khô ráo) mới là nguyên nhân chính tạo nên mùa khô sâu sắc kéo dài ở Nam Bộ và Tây Nguyên."
  },
  {
    "id": 91,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Gió mùa Đông Bắc - Ý d]: Gió mùa Đông Bắc di chuyển quãng đường dài trên lục địa, gây nên thời tiết lạnh khô vào đầu mùa Đông ở miền Bắc.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Vào nửa đầu mùa đông, khối khí cực đới lục địa xuất phát từ cao áp Xibia di chuyển qua lục địa châu Á rộng lớn nên bị biến tính lạnh khô, gây thời tiết hanh khô rét buốt ở miền Bắc."
  },
  {
    "id": 92,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Khí hậu Hà Nội và Cần Thơ - Ý a]: Hà Nội có biên độ nhiệt nhỏ hơn Cần Thơ.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Hà Nội ở miền Bắc có mùa đông lạnh nên biên độ nhiệt năm rất lớn (khoảng 12 - 13°C), trong khi Cần Thơ ở miền Nam nóng quanh năm nên biên độ nhiệt năm rất nhỏ (khoảng 2 - 3°C).",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 740 370\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"740\" height=\"370\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Main Title -->\n  <text x=\"370\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">HÌNH 3.1. BIỂU ĐỒ NHIỆT ĐỘ VÀ LƯỢNG MƯA Ở HÀ NỘI VÀ CẦN THƠ</text>\n  \n  <!-- ==================== HÀ NỘI (Left Panel) ==================== -->\n  <g transform=\"translate(10, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">HÀ NỘI (Biên độ nhiệt lớn ~ 13°C)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Hanoi Rain (approx y = 230 - mm*0.5) -->\n    <!-- T1: 18.6 (h=9), T2: 26.2 (h=13), T3: 43.8 (h=22), T4: 90.1 (h=45), T5: 188.5 (h=94), T6: 239.9 (h=120) -->\n    <!-- T7: 288.2 (h=144), T8: 318.0 (h=159), T9: 265.4 (h=133), T10: 130.7 (h=65), T11: 43.4 (h=22), T12: 23.4 (h=12) -->\n    <g fill=\"#3b82f6\" rx=\"1\">\n      <rect x=\"63\" y=\"221\" width=\"16\" height=\"9\" />\n      <rect x=\"83\" y=\"217\" width=\"16\" height=\"13\" />\n      <rect x=\"103\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"123\" y=\"185\" width=\"16\" height=\"45\" />\n      <rect x=\"143\" y=\"136\" width=\"16\" height=\"94\" />\n      <rect x=\"163\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"183\" y=\"86\" width=\"16\" height=\"144\" />\n      <rect x=\"203\" y=\"71\" width=\"16\" height=\"159\" />\n      <rect x=\"223\" y=\"97\" width=\"16\" height=\"133\" />\n      <rect x=\"243\" y=\"165\" width=\"16\" height=\"65\" />\n      <rect x=\"263\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"283\" y=\"218\" width=\"16\" height=\"12\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Hà Nội)</text>\n    </g>\n    \n    <!-- Hanoi Temp Curve (Winter < 20°C!): T1=16.4 (y=148), T2=17.0 (y=145), T6=28.8 (y=86), T7=28.9 (y=85), T12=18.2 (y=139) -->\n    <path d=\"M 71,148 Q 91,145 111,129 Q 131,111 151,93 Q 171,86 191,85 Q 211,88 231,94 Q 251,107 271,123 Q 291,139 291,139\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"71\" y=\"142\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">16.4°</text>\n    <text x=\"191\" y=\"78\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">28.9°</text>\n  </g>\n\n  <!-- ==================== CẦN THƠ (Right Panel) ==================== -->\n  <g transform=\"translate(380, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">CẦN THƠ (Mùa khô sâu sắc, nhiệt cao quanh năm)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Can Tho Rain (Severe dry season months 1-4!) -->\n    <!-- T1: ~10 (h=5), T2: ~5 (h=3), T3: ~15 (h=8), T4: ~40 (h=20), T5: 180 (h=90), T6: 210 (h=105) -->\n    <!-- T7: 235 (h=118), T8: 240 (h=120), T9: 250 (h=125), T10: 300 (h=150), T11: 135 (h=68), T12: 40 (h=20) -->\n    <g fill=\"#0284c7\" rx=\"1\">\n      <rect x=\"63\" y=\"225\" width=\"16\" height=\"5\" />\n      <rect x=\"83\" y=\"227\" width=\"16\" height=\"3\" />\n      <rect x=\"103\" y=\"222\" width=\"16\" height=\"8\" />\n      <rect x=\"123\" y=\"210\" width=\"16\" height=\"20\" />\n      <rect x=\"143\" y=\"140\" width=\"16\" height=\"90\" />\n      <rect x=\"163\" y=\"125\" width=\"16\" height=\"105\" />\n      <rect x=\"183\" y=\"112\" width=\"16\" height=\"118\" />\n      <rect x=\"203\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"223\" y=\"105\" width=\"16\" height=\"125\" />\n      <rect x=\"243\" y=\"80\" width=\"16\" height=\"150\" />\n      <rect x=\"263\" y=\"162\" width=\"16\" height=\"68\" />\n      <rect x=\"283\" y=\"210\" width=\"16\" height=\"20\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Cần Thơ)</text>\n    </g>\n    \n    <!-- Can Tho Temp Curve (Flat ~ 26-28°C all year round!) -->\n    <path d=\"M 71,98 Q 111,94 151,90 Q 191,95 231,96 Q 271,96 291,102\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"151\" y=\"82\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">~27°C (Ổn định)</text>\n  </g>\n\n  <!-- Common Legend -->\n  <g transform=\"translate(260, 335)\">\n    <rect x=\"0\" y=\"2\" width=\"16\" height=\"12\" fill=\"#3b82f6\" rx=\"2\" />\n    <text x=\"22\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Lượng mưa (mm)</text>\n    \n    <line x1=\"140\" y1=\"8\" x2=\"165\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n    <circle cx=\"152.5\" cy=\"8\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"173\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Nhiệt độ (°C)</text>\n  </g>\n</svg>",
      "image": "assets/images/geo_cau92_hanoi_cantho.png"
    },
    "image": "assets/images/geo_cau92_hanoi_cantho.png"
  },
  {
    "id": 93,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Khí hậu Hà Nội và Cần Thơ - Ý b]: Cần Thơ có mùa khô sâu sắc hơn Hà Nội.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tại Cần Thơ, trong các tháng mùa khô (tháng 1, 2, 3), lượng mưa chỉ vài mm, mùa khô rất gay gắt; trong khi ở Hà Nội mùa đông vẫn có mưa nhỏ và mưa phùn vào nửa cuối mùa.",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 740 370\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"740\" height=\"370\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Main Title -->\n  <text x=\"370\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">HÌNH 3.1. BIỂU ĐỒ NHIỆT ĐỘ VÀ LƯỢNG MƯA Ở HÀ NỘI VÀ CẦN THƠ</text>\n  \n  <!-- ==================== HÀ NỘI (Left Panel) ==================== -->\n  <g transform=\"translate(10, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">HÀ NỘI (Biên độ nhiệt lớn ~ 13°C)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Hanoi Rain (approx y = 230 - mm*0.5) -->\n    <!-- T1: 18.6 (h=9), T2: 26.2 (h=13), T3: 43.8 (h=22), T4: 90.1 (h=45), T5: 188.5 (h=94), T6: 239.9 (h=120) -->\n    <!-- T7: 288.2 (h=144), T8: 318.0 (h=159), T9: 265.4 (h=133), T10: 130.7 (h=65), T11: 43.4 (h=22), T12: 23.4 (h=12) -->\n    <g fill=\"#3b82f6\" rx=\"1\">\n      <rect x=\"63\" y=\"221\" width=\"16\" height=\"9\" />\n      <rect x=\"83\" y=\"217\" width=\"16\" height=\"13\" />\n      <rect x=\"103\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"123\" y=\"185\" width=\"16\" height=\"45\" />\n      <rect x=\"143\" y=\"136\" width=\"16\" height=\"94\" />\n      <rect x=\"163\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"183\" y=\"86\" width=\"16\" height=\"144\" />\n      <rect x=\"203\" y=\"71\" width=\"16\" height=\"159\" />\n      <rect x=\"223\" y=\"97\" width=\"16\" height=\"133\" />\n      <rect x=\"243\" y=\"165\" width=\"16\" height=\"65\" />\n      <rect x=\"263\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"283\" y=\"218\" width=\"16\" height=\"12\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Hà Nội)</text>\n    </g>\n    \n    <!-- Hanoi Temp Curve (Winter < 20°C!): T1=16.4 (y=148), T2=17.0 (y=145), T6=28.8 (y=86), T7=28.9 (y=85), T12=18.2 (y=139) -->\n    <path d=\"M 71,148 Q 91,145 111,129 Q 131,111 151,93 Q 171,86 191,85 Q 211,88 231,94 Q 251,107 271,123 Q 291,139 291,139\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"71\" y=\"142\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">16.4°</text>\n    <text x=\"191\" y=\"78\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">28.9°</text>\n  </g>\n\n  <!-- ==================== CẦN THƠ (Right Panel) ==================== -->\n  <g transform=\"translate(380, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">CẦN THƠ (Mùa khô sâu sắc, nhiệt cao quanh năm)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Can Tho Rain (Severe dry season months 1-4!) -->\n    <!-- T1: ~10 (h=5), T2: ~5 (h=3), T3: ~15 (h=8), T4: ~40 (h=20), T5: 180 (h=90), T6: 210 (h=105) -->\n    <!-- T7: 235 (h=118), T8: 240 (h=120), T9: 250 (h=125), T10: 300 (h=150), T11: 135 (h=68), T12: 40 (h=20) -->\n    <g fill=\"#0284c7\" rx=\"1\">\n      <rect x=\"63\" y=\"225\" width=\"16\" height=\"5\" />\n      <rect x=\"83\" y=\"227\" width=\"16\" height=\"3\" />\n      <rect x=\"103\" y=\"222\" width=\"16\" height=\"8\" />\n      <rect x=\"123\" y=\"210\" width=\"16\" height=\"20\" />\n      <rect x=\"143\" y=\"140\" width=\"16\" height=\"90\" />\n      <rect x=\"163\" y=\"125\" width=\"16\" height=\"105\" />\n      <rect x=\"183\" y=\"112\" width=\"16\" height=\"118\" />\n      <rect x=\"203\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"223\" y=\"105\" width=\"16\" height=\"125\" />\n      <rect x=\"243\" y=\"80\" width=\"16\" height=\"150\" />\n      <rect x=\"263\" y=\"162\" width=\"16\" height=\"68\" />\n      <rect x=\"283\" y=\"210\" width=\"16\" height=\"20\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Cần Thơ)</text>\n    </g>\n    \n    <!-- Can Tho Temp Curve (Flat ~ 26-28°C all year round!) -->\n    <path d=\"M 71,98 Q 111,94 151,90 Q 191,95 231,96 Q 271,96 291,102\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"151\" y=\"82\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">~27°C (Ổn định)</text>\n  </g>\n\n  <!-- Common Legend -->\n  <g transform=\"translate(260, 335)\">\n    <rect x=\"0\" y=\"2\" width=\"16\" height=\"12\" fill=\"#3b82f6\" rx=\"2\" />\n    <text x=\"22\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Lượng mưa (mm)</text>\n    \n    <line x1=\"140\" y1=\"8\" x2=\"165\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n    <circle cx=\"152.5\" cy=\"8\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"173\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Nhiệt độ (°C)</text>\n  </g>\n</svg>",
      "image": "assets/images/geo_cau92_hanoi_cantho.png"
    },
    "image": "assets/images/geo_cau92_hanoi_cantho.png"
  },
  {
    "id": 94,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Khí hậu Hà Nội và Cần Thơ - Ý c]: Hà Nội có một số tháng nhiệt độ dưới 20°C là do ảnh hưởng của gió Tín phong bán cầu Bắc.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Nhiệt độ mùa đông Hà Nội hạ thấp xuống dưới 20°C (có tháng dưới 18°C) là do tác động trực tiếp của các đợt gió mùa Đông Bắc từ lục địa phương Bắc tràn về, không phải do Tín phong.",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 740 370\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"740\" height=\"370\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Main Title -->\n  <text x=\"370\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">HÌNH 3.1. BIỂU ĐỒ NHIỆT ĐỘ VÀ LƯỢNG MƯA Ở HÀ NỘI VÀ CẦN THƠ</text>\n  \n  <!-- ==================== HÀ NỘI (Left Panel) ==================== -->\n  <g transform=\"translate(10, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">HÀ NỘI (Biên độ nhiệt lớn ~ 13°C)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Hanoi Rain (approx y = 230 - mm*0.5) -->\n    <!-- T1: 18.6 (h=9), T2: 26.2 (h=13), T3: 43.8 (h=22), T4: 90.1 (h=45), T5: 188.5 (h=94), T6: 239.9 (h=120) -->\n    <!-- T7: 288.2 (h=144), T8: 318.0 (h=159), T9: 265.4 (h=133), T10: 130.7 (h=65), T11: 43.4 (h=22), T12: 23.4 (h=12) -->\n    <g fill=\"#3b82f6\" rx=\"1\">\n      <rect x=\"63\" y=\"221\" width=\"16\" height=\"9\" />\n      <rect x=\"83\" y=\"217\" width=\"16\" height=\"13\" />\n      <rect x=\"103\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"123\" y=\"185\" width=\"16\" height=\"45\" />\n      <rect x=\"143\" y=\"136\" width=\"16\" height=\"94\" />\n      <rect x=\"163\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"183\" y=\"86\" width=\"16\" height=\"144\" />\n      <rect x=\"203\" y=\"71\" width=\"16\" height=\"159\" />\n      <rect x=\"223\" y=\"97\" width=\"16\" height=\"133\" />\n      <rect x=\"243\" y=\"165\" width=\"16\" height=\"65\" />\n      <rect x=\"263\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"283\" y=\"218\" width=\"16\" height=\"12\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Hà Nội)</text>\n    </g>\n    \n    <!-- Hanoi Temp Curve (Winter < 20°C!): T1=16.4 (y=148), T2=17.0 (y=145), T6=28.8 (y=86), T7=28.9 (y=85), T12=18.2 (y=139) -->\n    <path d=\"M 71,148 Q 91,145 111,129 Q 131,111 151,93 Q 171,86 191,85 Q 211,88 231,94 Q 251,107 271,123 Q 291,139 291,139\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"71\" y=\"142\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">16.4°</text>\n    <text x=\"191\" y=\"78\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">28.9°</text>\n  </g>\n\n  <!-- ==================== CẦN THƠ (Right Panel) ==================== -->\n  <g transform=\"translate(380, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">CẦN THƠ (Mùa khô sâu sắc, nhiệt cao quanh năm)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Can Tho Rain (Severe dry season months 1-4!) -->\n    <!-- T1: ~10 (h=5), T2: ~5 (h=3), T3: ~15 (h=8), T4: ~40 (h=20), T5: 180 (h=90), T6: 210 (h=105) -->\n    <!-- T7: 235 (h=118), T8: 240 (h=120), T9: 250 (h=125), T10: 300 (h=150), T11: 135 (h=68), T12: 40 (h=20) -->\n    <g fill=\"#0284c7\" rx=\"1\">\n      <rect x=\"63\" y=\"225\" width=\"16\" height=\"5\" />\n      <rect x=\"83\" y=\"227\" width=\"16\" height=\"3\" />\n      <rect x=\"103\" y=\"222\" width=\"16\" height=\"8\" />\n      <rect x=\"123\" y=\"210\" width=\"16\" height=\"20\" />\n      <rect x=\"143\" y=\"140\" width=\"16\" height=\"90\" />\n      <rect x=\"163\" y=\"125\" width=\"16\" height=\"105\" />\n      <rect x=\"183\" y=\"112\" width=\"16\" height=\"118\" />\n      <rect x=\"203\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"223\" y=\"105\" width=\"16\" height=\"125\" />\n      <rect x=\"243\" y=\"80\" width=\"16\" height=\"150\" />\n      <rect x=\"263\" y=\"162\" width=\"16\" height=\"68\" />\n      <rect x=\"283\" y=\"210\" width=\"16\" height=\"20\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Cần Thơ)</text>\n    </g>\n    \n    <!-- Can Tho Temp Curve (Flat ~ 26-28°C all year round!) -->\n    <path d=\"M 71,98 Q 111,94 151,90 Q 191,95 231,96 Q 271,96 291,102\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"151\" y=\"82\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">~27°C (Ổn định)</text>\n  </g>\n\n  <!-- Common Legend -->\n  <g transform=\"translate(260, 335)\">\n    <rect x=\"0\" y=\"2\" width=\"16\" height=\"12\" fill=\"#3b82f6\" rx=\"2\" />\n    <text x=\"22\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Lượng mưa (mm)</text>\n    \n    <line x1=\"140\" y1=\"8\" x2=\"165\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n    <circle cx=\"152.5\" cy=\"8\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"173\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Nhiệt độ (°C)</text>\n  </g>\n</svg>",
      "image": "assets/images/geo_cau92_hanoi_cantho.png"
    },
    "image": "assets/images/geo_cau92_hanoi_cantho.png"
  },
  {
    "id": 95,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Khí hậu Hà Nội và Cần Thơ - Ý d]: Hà Nội có mùa khô ít sâu sắc hơn là do ảnh hưởng của gió mùa Đông Bắc vào cuối mùa đông.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Vào nửa sau mùa đông, khối khí áp cao Xibia lệch đông di chuyển qua biển vào nước ta, mang theo hơi ẩm gây mưa phùn và độ ẩm cao, làm cho mùa khô ở miền Bắc không sâu sắc như miền Nam.",
    "illustration": {
      "svg": "<svg viewBox=\"0 0 740 370\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width: 100%; height: auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\">\n  <rect width=\"740\" height=\"370\" rx=\"12\" fill=\"#0f172a\" />\n  \n  <!-- Main Title -->\n  <text x=\"370\" y=\"26\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">HÌNH 3.1. BIỂU ĐỒ NHIỆT ĐỘ VÀ LƯỢNG MƯA Ở HÀ NỘI VÀ CẦN THƠ</text>\n  \n  <!-- ==================== HÀ NỘI (Left Panel) ==================== -->\n  <g transform=\"translate(10, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">HÀ NỘI (Biên độ nhiệt lớn ~ 13°C)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Hanoi Rain (approx y = 230 - mm*0.5) -->\n    <!-- T1: 18.6 (h=9), T2: 26.2 (h=13), T3: 43.8 (h=22), T4: 90.1 (h=45), T5: 188.5 (h=94), T6: 239.9 (h=120) -->\n    <!-- T7: 288.2 (h=144), T8: 318.0 (h=159), T9: 265.4 (h=133), T10: 130.7 (h=65), T11: 43.4 (h=22), T12: 23.4 (h=12) -->\n    <g fill=\"#3b82f6\" rx=\"1\">\n      <rect x=\"63\" y=\"221\" width=\"16\" height=\"9\" />\n      <rect x=\"83\" y=\"217\" width=\"16\" height=\"13\" />\n      <rect x=\"103\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"123\" y=\"185\" width=\"16\" height=\"45\" />\n      <rect x=\"143\" y=\"136\" width=\"16\" height=\"94\" />\n      <rect x=\"163\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"183\" y=\"86\" width=\"16\" height=\"144\" />\n      <rect x=\"203\" y=\"71\" width=\"16\" height=\"159\" />\n      <rect x=\"223\" y=\"97\" width=\"16\" height=\"133\" />\n      <rect x=\"243\" y=\"165\" width=\"16\" height=\"65\" />\n      <rect x=\"263\" y=\"208\" width=\"16\" height=\"22\" />\n      <rect x=\"283\" y=\"218\" width=\"16\" height=\"12\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Hà Nội)</text>\n    </g>\n    \n    <!-- Hanoi Temp Curve (Winter < 20°C!): T1=16.4 (y=148), T2=17.0 (y=145), T6=28.8 (y=86), T7=28.9 (y=85), T12=18.2 (y=139) -->\n    <path d=\"M 71,148 Q 91,145 111,129 Q 131,111 151,93 Q 171,86 191,85 Q 211,88 231,94 Q 251,107 271,123 Q 291,139 291,139\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"71\" y=\"142\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">16.4°</text>\n    <text x=\"191\" y=\"78\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">28.9°</text>\n  </g>\n\n  <!-- ==================== CẦN THƠ (Right Panel) ==================== -->\n  <g transform=\"translate(380, 35)\">\n    <!-- Subtitle -->\n    <text x=\"180\" y=\"22\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">CẦN THƠ (Mùa khô sâu sắc, nhiệt cao quanh năm)</text>\n    \n    <!-- Y-Axis Labels -->\n    <text x=\"35\" y=\"42\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"600\">Lượng mưa (mm)</text>\n    <text x=\"325\" y=\"42\" fill=\"#f87171\" font-size=\"10\" font-weight=\"600\" text-anchor=\"end\">Nhiệt độ (°C)</text>\n    \n    <!-- Grid lines -->\n    <g stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"2 2\">\n      <line x1=\"55\" y1=\"55\" x2=\"305\" y2=\"55\" />\n      <line x1=\"55\" y1=\"90\" x2=\"305\" y2=\"90\" />\n      <line x1=\"55\" y1=\"125\" x2=\"305\" y2=\"125\" />\n      <line x1=\"55\" y1=\"160\" x2=\"305\" y2=\"160\" />\n      <line x1=\"55\" y1=\"195\" x2=\"305\" y2=\"195\" />\n      <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" />\n    </g>\n    <line x1=\"55\" y1=\"230\" x2=\"305\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n    \n    <!-- Left Axis: 0 to 350 mm -->\n    <g fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"end\">\n      <text x=\"50\" y=\"58\">350</text>\n      <text x=\"50\" y=\"93\">300</text>\n      <text x=\"50\" y=\"128\">200</text>\n      <text x=\"50\" y=\"163\">100</text>\n      <text x=\"50\" y=\"198\">50</text>\n      <text x=\"50\" y=\"233\">0</text>\n    </g>\n    \n    <!-- Right Axis: 0 to 35 °C -->\n    <g fill=\"#f87171\" font-size=\"9\" text-anchor=\"start\">\n      <text x=\"310\" y=\"58\">35</text>\n      <text x=\"310\" y=\"93\">30</text>\n      <text x=\"310\" y=\"128\">25</text>\n      <text x=\"310\" y=\"163\">20</text>\n      <text x=\"310\" y=\"198\">10</text>\n      <text x=\"310\" y=\"233\">0</text>\n    </g>\n\n    <!-- 12 Bars for Can Tho Rain (Severe dry season months 1-4!) -->\n    <!-- T1: ~10 (h=5), T2: ~5 (h=3), T3: ~15 (h=8), T4: ~40 (h=20), T5: 180 (h=90), T6: 210 (h=105) -->\n    <!-- T7: 235 (h=118), T8: 240 (h=120), T9: 250 (h=125), T10: 300 (h=150), T11: 135 (h=68), T12: 40 (h=20) -->\n    <g fill=\"#0284c7\" rx=\"1\">\n      <rect x=\"63\" y=\"225\" width=\"16\" height=\"5\" />\n      <rect x=\"83\" y=\"227\" width=\"16\" height=\"3\" />\n      <rect x=\"103\" y=\"222\" width=\"16\" height=\"8\" />\n      <rect x=\"123\" y=\"210\" width=\"16\" height=\"20\" />\n      <rect x=\"143\" y=\"140\" width=\"16\" height=\"90\" />\n      <rect x=\"163\" y=\"125\" width=\"16\" height=\"105\" />\n      <rect x=\"183\" y=\"112\" width=\"16\" height=\"118\" />\n      <rect x=\"203\" y=\"110\" width=\"16\" height=\"120\" />\n      <rect x=\"223\" y=\"105\" width=\"16\" height=\"125\" />\n      <rect x=\"243\" y=\"80\" width=\"16\" height=\"150\" />\n      <rect x=\"263\" y=\"162\" width=\"16\" height=\"68\" />\n      <rect x=\"283\" y=\"210\" width=\"16\" height=\"20\" />\n    </g>\n    \n    <!-- Months text -->\n    <g fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">\n      <text x=\"71\" y=\"244\">1</text><text x=\"91\" y=\"244\">2</text><text x=\"111\" y=\"244\">3</text>\n      <text x=\"131\" y=\"244\">4</text><text x=\"151\" y=\"244\">5</text><text x=\"171\" y=\"244\">6</text>\n      <text x=\"191\" y=\"244\">7</text><text x=\"211\" y=\"244\">8</text><text x=\"231\" y=\"244\">9</text>\n      <text x=\"251\" y=\"244\">10</text><text x=\"271\" y=\"244\">11</text><text x=\"291\" y=\"244\">12</text>\n      <text x=\"180\" y=\"260\" fill=\"#94a3b8\" font-size=\"10\">Tháng (Cần Thơ)</text>\n    </g>\n    \n    <!-- Can Tho Temp Curve (Flat ~ 26-28°C all year round!) -->\n    <path d=\"M 71,98 Q 111,94 151,90 Q 191,95 231,96 Q 271,96 291,102\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    <text x=\"151\" y=\"82\" fill=\"#f87171\" font-size=\"8.5\" font-weight=\"bold\">~27°C (Ổn định)</text>\n  </g>\n\n  <!-- Common Legend -->\n  <g transform=\"translate(260, 335)\">\n    <rect x=\"0\" y=\"2\" width=\"16\" height=\"12\" fill=\"#3b82f6\" rx=\"2\" />\n    <text x=\"22\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Lượng mưa (mm)</text>\n    \n    <line x1=\"140\" y1=\"8\" x2=\"165\" y2=\"8\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n    <circle cx=\"152.5\" cy=\"8\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"173\" y=\"13\" fill=\"#cbd5e1\" font-size=\"12\">Nhiệt độ (°C)</text>\n  </g>\n</svg>",
      "image": "assets/images/geo_cau92_hanoi_cantho.png"
    },
    "image": "assets/images/geo_cau92_hanoi_cantho.png"
  },
  {
    "id": 96,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đai cao chân núi - Ý a]: Độ cao dưới 600 - 700m (Bắc) và dưới 900 - 1000m (Nam) là đặc điểm của đai cận nhiệt đới gió mùa.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Đây là giới hạn độ cao của đai nhiệt đới gió mùa chân núi. Đai cận nhiệt đới gió mùa trên núi nằm ở độ cao từ 600 - 700m (hoặc 900 - 1000m) lên đến 2600m."
  },
  {
    "id": 97,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đai cao chân núi - Ý b]: Đai nhiệt đới chân núi có hệ sinh thái rừng ôn đới chiếm ưu thế.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tại đai nhiệt đới gió mùa, hệ sinh thái đặc trưng chiếm ưu thế là rừng nhiệt đới ẩm lá rộng thường xanh và rừng nhiệt đới gió mùa, không phải rừng ôn đới."
  },
  {
    "id": 98,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đai cao chân núi - Ý c]: Mùa hạ nóng do ảnh hưởng vị trí địa lí và hoạt động của gió mùa hạ.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Vị trí nội chí tuyến có góc nhập xạ lớn kết hợp với khối khí nhiệt đới ẩm Tây Nam hoạt động mạnh vào mùa hạ làm cho nền nhiệt mùa hạ luôn ở mức cao trên 25°C."
  },
  {
    "id": 99,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đai cao chân núi - Ý d]: Đất feralit chiếm ưu thế do tác động chủ yếu của yếu tố địa hình và khí hậu.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Khí hậu nhiệt đới ẩm nóng mưa nhiều kết hợp với địa hình đồi núi thấp làm cho quá trình phong hóa feralit diễn ra mạnh mẽ, tạo nên lớp đất feralit dày chiếm ưu thế."
  },
  {
    "id": 100,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Hoàng Liên Sơn & Phan-xi-păng - Ý a]: Thiên nhiên dãy núi Hoàng Liên Sơn có 2 đai cao.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Với độ cao đỉnh 3143m, dãy Hoàng Liên Sơn là nơi duy nhất ở Việt Nam có đầy đủ cả 3 đai cao: đai nhiệt đới gió mùa chân núi, đai cận nhiệt đới gió mùa trên núi và đai ôn đới gió mùa trên núi (trên 2600m)."
  },
  {
    "id": 101,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Hoàng Liên Sơn & Phan-xi-păng - Ý b]: Càng lên cao nhiệt độ càng giảm, tính nhiệt đới tăng dần.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Theo quy luật đai cao, càng lên cao nhiệt độ càng giảm nên tính nhiệt đới giảm dần, thay vào đó tính cận nhiệt đới và ôn đới tăng dần."
  },
  {
    "id": 102,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Hoàng Liên Sơn & Phan-xi-păng - Ý c]: Đai cao từ 700m đến 2600m có khí hậu mang tính chất cận nhiệt đới gió mùa.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Từ 600 - 700m đến 2600m là đai cận nhiệt đới gió mùa trên núi, mùa hạ mát mẻ, nhiệt độ dưới 25°C, có nhiều loài cây lá kim và hạt trần cận nhiệt."
  },
  {
    "id": 103,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Hoàng Liên Sơn & Phan-xi-păng - Ý d]: Thiên nhiên nước ta phân hóa theo độ cao do địa hình đồi núi và gió.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Nguyên nhân trực tiếp làm thiên nhiên phân hóa theo độ cao là sự suy giảm nhiệt độ (trung bình cứ lên cao 100m nhiệt độ giảm 0,6°C) và sự thay đổi độ ẩm theo độ cao địa hình."
  },
  {
    "id": 104,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Môi trường - Ý a]: Ô nhiễm không khí diễn ra chủ yếu tại các thành phố lớn, đông dân.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục Thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Các đô thị lớn (như Hà Nội, TP.HCM) có mật độ giao thông dày đặc, tập trung nhiều công trình xây dựng và nhà máy nên mức độ ô nhiễm bụi mịn và khí thải rất nghiêm trọng."
  },
  {
    "id": 105,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Môi trường - Ý b]: Khí thải từ hoạt động công nghiệp và sinh hoạt là nguyên nhân chủ yếu gây ô nhiễm không khí.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục Thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Khí thải phát tán từ phương tiện giao thông, nhà máy nhiệt điện, xí nghiệp công nghiệp và đun nấu sinh hoạt là các nguồn phát thải ô nhiễm không khí hàng đầu."
  },
  {
    "id": 106,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Môi trường - Ý c]: Sự gia tăng nguồn nước thải từ các ngành kinh tế và nước thải sinh hoạt là những nguyên nhân trực tiếp gây ô nhiễm nguồn nước.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục Thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Nước thải công nghiệp, nông nghiệp (dư lượng phân bón, thuốc bảo vệ thực vật) và nước thải sinh hoạt chưa qua xử lí xả trực tiếp ra sông hồ là nguyên nhân trực tiếp gây ô nhiễm nguồn nước mặt."
  },
  {
    "id": 107,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Môi trường - Ý d]: Tăng cường sử dụng nguồn năng lượng hoá thạch góp phần giảm tình trạng ô nhiễm không khí.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục Thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">- Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>\n  ",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Đốt nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt) thải ra lượng lớn khí nhà kính và bụi độc hại. Để giảm ô nhiễm cần chuyển dịch sang năng lượng tái tạo (điện gió, điện mặt trời, sinh khối)."
  },
  {
    "id": 108,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Diện tích rừng - Ý a]: Tổng diện tích rừng nước ta tăng liên tục qua các năm (1943 - 2021).<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tổng diện tích rừng giảm từ 14,3 triệu ha (1943) xuống 13,4 triệu ha (2010), sau đó mới tăng lên 14,7 triệu ha (2021), do đó không tăng liên tục."
  },
  {
    "id": 109,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Diện tích rừng - Ý b]: Diện tích rừng nước ta chủ yếu là rừng tự nhiên.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Năm 2021, diện tích rừng tự nhiên là 10,1 triệu ha, chiếm tới 68,7% trong tổng số 14,7 triệu ha rừng cả nước."
  },
  {
    "id": 110,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Diện tích rừng - Ý c]: Diện tích rừng nước ta tăng chủ yếu là do tăng diện tích rừng trồng.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Rừng trồng tăng từ 0 triệu ha (1943) lên 3,1 triệu ha (2010) và 4,6 triệu ha (2021), trong khi rừng tự nhiên suy giảm từ 14,3 triệu ha xuống 10,1 triệu ha."
  },
  {
    "id": 111,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Diện tích rừng - Ý d]: Mặc dù tổng diện tích rừng tăng nhưng chất lượng rừng vẫn thấp do diện tích rừng nghèo, mới phục hồi.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">13,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng tự nhiên (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">10,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">– Diện tích rừng trồng (triệu ha)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Độ che phủ (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">43,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">39,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">42,0</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Dù diện tích rừng đã phục hồi đạt 14,7 triệu ha, nhưng phần lớn là rừng non mới trồng và rừng nghèo, diện tích rừng giàu nguyên sinh còn rất ít, chất lượng và độ đa dạng sinh học còn thấp."
  },
  {
    "id": 112,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đa dạng sinh học - Ý a]: Giai đoạn 1943-1973, chiến tranh là một trong những nguyên nhân làm suy giảm diện tích rừng ở nước ta.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Trong chiến tranh, bom đạn và chất độc hóa học (dioxin) đã hủy diệt hơn 2 triệu ha rừng, làm suy giảm nghiêm trọng độ che phủ rừng và đa dạng sinh thái."
  },
  {
    "id": 113,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đa dạng sinh học - Ý b]: Diện tích rừng suy giảm không ảnh hưởng đến sự đa dạng sinh học.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Rừng là môi trường sống và nơi cư trú của phần lớn các loài động thực vật hoang dã. Khi rừng bị thu hẹp hoặc phân mảnh, các loài mất nơi cư trú và thức ăn, đẩy nhiều loài đến bờ vực tuyệt chủng."
  },
  {
    "id": 114,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đa dạng sinh học - Ý c]: Nguyên nhân suy giảm sự đa dạng sinh học bao gồm cả các yếu tố tự nhiên và kinh tế xã hội.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Suy giảm đa dạng sinh học do cả thiên tai biến đổi khí hậu (yếu tố tự nhiên) và khai thác quá mức, phá rừng, mở rộng đất canh tác, ô nhiễm môi trường (yếu tố kinh tế - xã hội)."
  },
  {
    "id": 115,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Đa dạng sinh học - Ý d]: Thực hiện các giải pháp giảm nhẹ biến đổi khí hậu góp phần bảo vệ sự đa dạng sinh học.",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Biến đổi khí hậu làm thay đổi môi trường sống và thời tiết cực đoan. Giảm thiểu biến đổi khí hậu giúp bảo tồn sinh cảnh tự nhiên và ổn định hệ sinh thái."
  },
  {
    "id": 116,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tuổi thọ & Cơ cấu nhóm tuổi - Ý a]: Tỉ trọng dân số nhóm từ 0 – 14 tuổi ngày càng tăng.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TUỔI THỌ TRUNG BÌNH VÀ CƠ CẤU DÂN SỐ THEO NHÓM TUỔI Ở NƯỚC TA (2009 – 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tuổi thọ TB (tuổi)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">0 – 14 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">15 – 64 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Từ 65 tuổi trở lên (%)</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2009</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">72,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">69,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">6,4</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2019</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">68,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">7,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2021</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">67,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">8,3</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Nhóm 0 - 14 tuổi giảm liên tục từ 24,5% (2009) xuống 24,3% (2019) và 24,1% (2021) do mức sinh giảm."
  },
  {
    "id": 117,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tuổi thọ & Cơ cấu nhóm tuổi - Ý b]: Nước ta có nguồn lao động dồi dào và ngày càng tăng nhanh.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TUỔI THỌ TRUNG BÌNH VÀ CƠ CẤU DÂN SỐ THEO NHÓM TUỔI Ở NƯỚC TA (2009 – 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tuổi thọ TB (tuổi)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">0 – 14 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">15 – 64 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Từ 65 tuổi trở lên (%)</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2009</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">72,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">69,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">6,4</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2019</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">68,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">7,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2021</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">67,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">8,3</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tỉ trọng nhóm tuổi lao động (15 - 64 tuổi) có xu hướng giảm từ 69,1% (2009) xuống 67,6% (2021), tốc độ tăng nguồn lao động đang có xu hướng chậm lại."
  },
  {
    "id": 118,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tuổi thọ & Cơ cấu nhóm tuổi - Ý c]: Tỉ trọng nhóm từ 65 tuổi trở lên ngày càng tăng do kinh tế phát triển, điều kiện sống và dịch vụ y tế được cải thiện.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TUỔI THỌ TRUNG BÌNH VÀ CƠ CẤU DÂN SỐ THEO NHÓM TUỔI Ở NƯỚC TA (2009 – 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tuổi thọ TB (tuổi)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">0 – 14 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">15 – 64 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Từ 65 tuổi trở lên (%)</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2009</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">72,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">69,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">6,4</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2019</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">68,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">7,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2021</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">67,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">8,3</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Nhóm từ 65 tuổi trở lên tăng nhanh từ 6,4% lên 8,3% nhờ sự tiến bộ của y tế và chất lượng cuộc sống nâng cao giúp kéo dài tuổi thọ người dân."
  },
  {
    "id": 119,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tuổi thọ & Cơ cấu nhóm tuổi - Ý d]: Dân số nước ta ngày càng già hóa do tỉ suất sinh và tỉ suất tử ngày càng giảm, tuổi thọ trung bình ngày càng tăng.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TUỔI THỌ TRUNG BÌNH VÀ CƠ CẤU DÂN SỐ THEO NHÓM TUỔI Ở NƯỚC TA (2009 – 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tuổi thọ TB (tuổi)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">0 – 14 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">15 – 64 tuổi (%)</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Từ 65 tuổi trở lên (%)</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2009</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">72,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">69,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">6,4</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2019</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">68,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">7,7</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2021</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">67,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">8,3</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tỉ suất sinh thấp, tỉ lệ tử vong giảm và tuổi thọ bình quân tăng lên 73,6 tuổi là các nguyên nhân cốt lõi khiến nước ta bước vào thời kì già hóa dân số nhanh."
  },
  {
    "id": 120,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lao động việc làm 2022 - Ý a]: Tỉ lệ thất nghiệp giữa thành thị và nông thôn bằng nhau.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN LAO ĐỘNG VÀ VIỆC LÀM NƯỚC TA NĂM 2022</div>\n      \n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Năm 2022, tỉ lệ thất nghiệp trong độ tuổi lao động của Việt Nam là 2,34%. Trong đó, tỉ lệ thất nghiệp của lao động trong độ tuổi khu vực thành thị năm 2021 là 2,82%; khu vực nông thôn là 2,04%. Tỉ lệ thiếu việc làm trong độ tuổi lao động năm 2022 là 2,21%, trong đó tỉ lệ thiếu việc làm khu vực thành thị là 1,71%; tỉ lệ thiếu việc làm khu vực nông thôn là 2,52%.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tỉ lệ thất nghiệp khu vực thành thị là 2,82%, cao hơn đáng kể so với khu vực nông thôn là 2,04%."
  },
  {
    "id": 121,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lao động việc làm 2022 - Ý b]: Tỉ lệ thiếu việc làm ở nông thôn cao hơn thành thị.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN LAO ĐỘNG VÀ VIỆC LÀM NƯỚC TA NĂM 2022</div>\n      \n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Năm 2022, tỉ lệ thất nghiệp trong độ tuổi lao động của Việt Nam là 2,34%. Trong đó, tỉ lệ thất nghiệp của lao động trong độ tuổi khu vực thành thị năm 2021 là 2,82%; khu vực nông thôn là 2,04%. Tỉ lệ thiếu việc làm trong độ tuổi lao động năm 2022 là 2,21%, trong đó tỉ lệ thiếu việc làm khu vực thành thị là 1,71%; tỉ lệ thiếu việc làm khu vực nông thôn là 2,52%.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tỉ lệ thiếu việc làm ở nông thôn là 2,52%, cao hơn khu vực thành thị (1,71%)."
  },
  {
    "id": 122,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lao động việc làm 2022 - Ý c]: Ở nông thôn, tỉ lệ thất nghiệp thấp hơn tỉ lệ thiếu việc làm do đặc điểm của hoạt động sản xuất.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN LAO ĐỘNG VÀ VIỆC LÀM NƯỚC TA NĂM 2022</div>\n      \n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Năm 2022, tỉ lệ thất nghiệp trong độ tuổi lao động của Việt Nam là 2,34%. Trong đó, tỉ lệ thất nghiệp của lao động trong độ tuổi khu vực thành thị năm 2021 là 2,82%; khu vực nông thôn là 2,04%. Tỉ lệ thiếu việc làm trong độ tuổi lao động năm 2022 là 2,21%, trong đó tỉ lệ thiếu việc làm khu vực thành thị là 1,71%; tỉ lệ thiếu việc làm khu vực nông thôn là 2,52%.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Sản xuất nông nghiệp mang tính chất mùa vụ cao nên lúc nông nhàn người nông dân thiếu việc làm (2,52%) nhiều hơn là thất nghiệp hoàn toàn (2,04%)."
  },
  {
    "id": 123,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Lao động việc làm 2022 - Ý d]: Biểu đồ tròn là dạng biểu đồ thích hợp nhất thể hiện tỉ lệ thiếu việc làm phân theo khu vực thành thị và nông thôn năm 2022.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN LAO ĐỘNG VÀ VIỆC LÀM NƯỚC TA NĂM 2022</div>\n      \n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Năm 2022, tỉ lệ thất nghiệp trong độ tuổi lao động của Việt Nam là 2,34%. Trong đó, tỉ lệ thất nghiệp của lao động trong độ tuổi khu vực thành thị năm 2021 là 2,82%; khu vực nông thôn là 2,04%. Tỉ lệ thiếu việc làm trong độ tuổi lao động năm 2022 là 2,21%, trong đó tỉ lệ thiếu việc làm khu vực thành thị là 1,71%; tỉ lệ thiếu việc làm khu vực nông thôn là 2,52%.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tỉ lệ thiếu việc làm (%) ở hai khu vực là hai chỉ số độc lập, không cấu thành tổng thể 100%, do đó biểu đồ cột (hoặc cột đơn so sánh) mới là biểu đồ thích hợp nhất."
  },
  {
    "id": 124,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "Căn cứ vào bảng số liệu Cơ cấu dân số theo nhóm tuổi ở nước ta giai đoạn 1999 – 2021, nhận xét nào sau đây là đúng?<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">CƠ CẤU DÂN SỐ THEO NHÓM TUỔI Ở NƯỚC TA, GIAI ĐOẠN 1999 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Tổng điều tra dân số và nhà ở 2009, 2019, 2021)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Nhóm tuổi</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1999</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2009</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">0 – 14</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">33,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,1</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">15 – 64</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">61,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">69,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">68,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">67,6</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">> 65</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">5,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">6,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">7,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">8,3</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Tỉ lệ nhóm tuổi 0 - 14 tuổi tăng liên tục.",
      "B. Tỉ lệ nhóm tuổi từ 65 trở lên tăng và luôn chiếm tỉ lệ thấp nhất.",
      "C. Nước ta có cơ cấu dân số già ngay từ năm 1999.",
      "D. Tỉ lệ nhóm tuổi 15 - 64 tuổi giảm liên tục từ năm 1999 đến 2021."
    ],
    "correct": 1,
    "explain": "Theo bảng số liệu: Nhóm từ 65 tuổi trở lên tăng liên tục từ 5,8% (1999) lên 6,4% (2009), 7,7% (2019) và 8,3% (2021), đồng thời luôn là nhóm chiếm tỉ trọng thấp nhất trong cả 3 nhóm tuổi."
  },
  {
    "id": 125,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Dân số năm 2022 - Ý a]: Dân số trung bình của cả nước tăng.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN DÂN SỐ NƯỚC TA NĂM 2022</div>\n      <div style=\"font-size: 11px; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Dân số trung bình năm 2022 của cả nước ước tính 99,46 triệu người, tăng 957,3 nghìn người, tương đương tăng 0,97% so với năm 2021. Trong tổng dân số, dân số thành thị 37,35 triệu người, chiếm 37,6%; dân số nông thôn 62,11 triệu người, chiếm 62,4%; Tỷ số giới tính khi sinh là 111,6 bé trai/100 bé gái.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Dân số cả nước ước tính 99,46 triệu người, tăng 957,3 nghìn người (tương đương tăng 0,97%) so với năm 2021."
  },
  {
    "id": 126,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Dân số năm 2022 - Ý b]: Nước ta có sự mất cân bằng giới tính khi sinh.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN DÂN SỐ NƯỚC TA NĂM 2022</div>\n      <div style=\"font-size: 11px; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Dân số trung bình năm 2022 của cả nước ước tính 99,46 triệu người, tăng 957,3 nghìn người, tương đương tăng 0,97% so với năm 2021. Trong tổng dân số, dân số thành thị 37,35 triệu người, chiếm 37,6%; dân số nông thôn 62,11 triệu người, chiếm 62,4%; Tỷ số giới tính khi sinh là 111,6 bé trai/100 bé gái.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tỷ số giới tính khi sinh là 111,6 bé trai/100 bé gái, vượt xa mức cân bằng sinh học tự nhiên (104 - 106 trai/100 gái)."
  },
  {
    "id": 127,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Dân số năm 2022 - Ý c]: Số dân ở nông thôn vẫn còn nhiều do quá trình công nghiệp hóa chưa mạnh.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN DÂN SỐ NƯỚC TA NĂM 2022</div>\n      <div style=\"font-size: 11px; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Dân số trung bình năm 2022 của cả nước ước tính 99,46 triệu người, tăng 957,3 nghìn người, tương đương tăng 0,97% so với năm 2021. Trong tổng dân số, dân số thành thị 37,35 triệu người, chiếm 37,6%; dân số nông thôn 62,11 triệu người, chiếm 62,4%; Tỷ số giới tính khi sinh là 111,6 bé trai/100 bé gái.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Dân số nông thôn vẫn chiếm tỉ trọng lớn (62,4%) do quá trình công nghiệp hóa, hiện đại hóa và đô thị hóa ở nước ta diễn ra tương đối chậm."
  },
  {
    "id": 128,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Dân số năm 2022 - Ý d]: Dân số của nước ta đông làm giảm tốc độ tăng trưởng kinh tế.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px;\">\n      <div style=\"font-weight: 700; color: #93c5fd; font-size: 13px; margin-bottom: 4px;\">THÔNG TIN DÂN SỐ NƯỚC TA NĂM 2022</div>\n      <div style=\"font-size: 11px; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <div style=\"font-size: 12.5px; line-height: 1.6; color: #e2e8f0; text-align: justify;\">Dân số trung bình năm 2022 của cả nước ước tính 99,46 triệu người, tăng 957,3 nghìn người, tương đương tăng 0,97% so với năm 2021. Trong tổng dân số, dân số thành thị 37,35 triệu người, chiếm 37,6%; dân số nông thôn 62,11 triệu người, chiếm 62,4%; Tỷ số giới tính khi sinh là 111,6 bé trai/100 bé gái.</div>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Dân số đông tạo ra nguồn lao động dồi dào và thị trường tiêu thụ nội địa rộng lớn, thúc đẩy tăng trưởng kinh tế nếu được đào tạo và sử dụng hợp lí."
  },
  {
    "id": 129,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tỉ lệ thất nghiệp 2019-2022 - Ý a]: Tỷ lệ thất nghiệp của cả nước năm 2022 so với 2019 giảm.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TỶ LỆ THẤT NGHIỆP Ở NƯỚC TA PHÂN THEO THÀNH THỊ VÀ NÔNG THÔN (2019 – 2022)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2022</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Cả nước</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,19</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,20</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,34</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Thành thị</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,10</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,33</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,82</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nông thôn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,74</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,50</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,04</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Năm 2019 tỉ lệ thất nghiệp cả nước là 2,19%, năm 2022 là 2,34% (tăng 0,15%)."
  },
  {
    "id": 130,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tỉ lệ thất nghiệp 2019-2022 - Ý b]: Tỷ lệ thất nghiệp thành thị luôn cao hơn nông thôn.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TỶ LỆ THẤT NGHIỆP Ở NƯỚC TA PHÂN THEO THÀNH THỊ VÀ NÔNG THÔN (2019 – 2022)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2022</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Cả nước</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,19</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,20</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,34</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Thành thị</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,10</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,33</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,82</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nông thôn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,74</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,50</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,04</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Qua cả 3 năm (2019: 3,10% > 1,74%; 2021: 4,33% > 2,50%; 2022: 2,82% > 2,04%), tỉ lệ thất nghiệp thành thị luôn cao hơn nông thôn."
  },
  {
    "id": 131,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tỉ lệ thất nghiệp 2019-2022 - Ý c]: Tỷ lệ thất nghiệp năm 2019 – 2021 tăng do tác động của dịch Covid.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TỶ LỆ THẤT NGHIỆP Ở NƯỚC TA PHÂN THEO THÀNH THỊ VÀ NÔNG THÔN (2019 – 2022)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2022</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Cả nước</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,19</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,20</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,34</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Thành thị</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,10</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,33</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,82</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nông thôn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,74</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,50</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,04</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Đại dịch Covid-19 làm đứt gãy chuỗi cung ứng, đình trệ sản xuất kinh doanh khiến tỉ lệ thất nghiệp năm 2021 tăng vọt lên 3,20%."
  },
  {
    "id": 132,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Tỉ lệ thất nghiệp 2019-2022 - Ý d]: Thất nghiệp ở thành thị biến động mạnh hơn nông thôn do sự khác nhau về quy mô dân số.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TỶ LỆ THẤT NGHIỆP Ở NƯỚC TA PHÂN THEO THÀNH THỊ VÀ NÔNG THÔN (2019 – 2022)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2022</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Cả nước</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,19</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,20</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,34</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Thành thị</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">3,10</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">4,33</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,82</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nông thôn</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,74</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,50</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2,04</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Thất nghiệp ở thành thị biến động mạnh hơn chủ yếu do đặc điểm cơ cấu ngành kinh tế thành thị gắn liền với dịch vụ và công nghiệp nhạy cảm với khủng hoảng thị trường, không phải do quy mô dân số."
  },
  {
    "id": 133,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Trình độ lao động - Ý a]: Tỉ lệ lao động có việc làm đã qua đào tạo có xu hướng giảm.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">CƠ CẤU LAO ĐỘNG CÓ VIỆC LÀM PHÂN THEO TRÌNH ĐỘ CHUYÊN MÔN KĨ THUẬT (2010 VÀ 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2012, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">STT</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Trình độ chuyên môn kĩ thuật</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Đã qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,2</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Chưa qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">85,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,8</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tỉ lệ lao động đã qua đào tạo tăng mạnh từ 14,6% (2010) lên 26,2% (2021)."
  },
  {
    "id": 134,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Trình độ lao động - Ý b]: Tỉ lệ lao động có việc làm chưa qua đào tạo có xu hướng tăng.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">CƠ CẤU LAO ĐỘNG CÓ VIỆC LÀM PHÂN THEO TRÌNH ĐỘ CHUYÊN MÔN KĨ THUẬT (2010 VÀ 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2012, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">STT</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Trình độ chuyên môn kĩ thuật</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Đã qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,2</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Chưa qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">85,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,8</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Tỉ lệ lao động chưa qua đào tạo giảm từ 85,4% (2010) xuống 73,8% (2021)."
  },
  {
    "id": 135,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Trình độ lao động - Ý c]: Chất lượng lao động ngày càng tăng phù hợp với yêu cầu hiện đại hoá đất nước.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">CƠ CẤU LAO ĐỘNG CÓ VIỆC LÀM PHÂN THEO TRÌNH ĐỘ CHUYÊN MÔN KĨ THUẬT (2010 VÀ 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2012, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">STT</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Trình độ chuyên môn kĩ thuật</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Đã qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,2</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Chưa qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">85,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,8</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tỉ lệ lao động qua đào tạo tăng lên giúp nâng cao năng suất lao động, đáp ứng tốt hơn yêu cầu của quá trình công nghiệp hóa, hiện đại hóa."
  },
  {
    "id": 136,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Trình độ lao động - Ý d]: Lao động chưa qua đào tạo chiếm tỉ lệ lớn do nước ta có xuất phát điểm nền kinh tế thấp.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">CƠ CẤU LAO ĐỘNG CÓ VIỆC LÀM PHÂN THEO TRÌNH ĐỘ CHUYÊN MÔN KĨ THUẬT (2010 VÀ 2021)</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: % - Nguồn: Niên giám thống kê Việt Nam năm 2012, 2022)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">STT</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Trình độ chuyên môn kĩ thuật</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Đã qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">14,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,2</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">Chưa qua đào tạo</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">85,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">73,8</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Do xuất phát điểm là nền nông nghiệp lạc hậu, hệ thống đào tạo nghề phát triển muộn nên phần lớn người lao động chưa có bằng cấp chứng chỉ chuyên môn kĩ thuật."
  },
  {
    "id": 137,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Quy mô & Gia tăng dân số - Ý a]: Quy mô dân số nước ta giảm liên tục qua các năm (1999 - 2021).<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">QUY MÔ DÂN SỐ VÀ TỈ LỆ GIA TĂNG DÂN SỐ Ở NƯỚC TA GIAI ĐOẠN 1999 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng điều tra dân số & Niên giám thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1999</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2009</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Quy mô dân số (triệu người)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">76,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">86,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">96,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">98,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tỉ lệ gia tăng dân số (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,51</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,06</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,15</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0,94</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Quy mô dân số tăng liên tục từ 76,5 triệu người (1999) lên 86,0 triệu người (2009), 96,5 triệu người (2019) và 98,5 triệu người (2021)."
  },
  {
    "id": 138,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Quy mô & Gia tăng dân số - Ý b]: Tỉ lệ gia tăng dân số thấp nhất năm 2021.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">QUY MÔ DÂN SỐ VÀ TỈ LỆ GIA TĂNG DÂN SỐ Ở NƯỚC TA GIAI ĐOẠN 1999 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng điều tra dân số & Niên giám thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1999</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2009</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Quy mô dân số (triệu người)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">76,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">86,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">96,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">98,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tỉ lệ gia tăng dân số (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,51</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,06</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,15</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0,94</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Tỉ lệ gia tăng dân số năm 2021 đạt 0,94%, là mức thấp nhất so với các năm 1999 (1,51%), 2009 (1,06%) và 2019 (1,15%)."
  },
  {
    "id": 139,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Quy mô & Gia tăng dân số - Ý c]: Tỉ lệ gia tăng dân số giảm, quy mô dân số tăng do dân số đông, số người trong độ tuổi sinh đẻ ít.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">QUY MÔ DÂN SỐ VÀ TỈ LỆ GIA TĂNG DÂN SỐ Ở NƯỚC TA GIAI ĐOẠN 1999 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng điều tra dân số & Niên giám thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1999</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2009</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Quy mô dân số (triệu người)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">76,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">86,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">96,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">98,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tỉ lệ gia tăng dân số (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,51</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,06</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,15</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0,94</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 1,
    "explain": "Phát biểu SAI. Nước ta có cơ cấu dân số vàng nên số phụ nữ trong độ tuổi sinh đẻ rất đông đảo (chứ không phải ít), quy mô dân số tăng mỗi năm gần 1 triệu người do quy mô dân số ban đầu rất lớn."
  },
  {
    "id": 140,
    "topic": "TRẮC NGHIỆM ĐÚNG/SAI",
    "question": "[Đúng/Sai về Quy mô & Gia tăng dân số - Ý d]: Biểu đồ kết hợp là dạng biểu đồ thích hợp nhất thể hiện quy mô dân số và tỉ lệ gia tăng dân số nước ta giai đoạn 1999-2021.<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">QUY MÔ DÂN SỐ VÀ TỈ LỆ GIA TĂNG DÂN SỐ Ở NƯỚC TA GIAI ĐOẠN 1999 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng điều tra dân số & Niên giám thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Chỉ tiêu</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1999</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2009</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2019</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Quy mô dân số (triệu người)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">76,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">86,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">96,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">98,5</td></tr><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tỉ lệ gia tăng dân số (%)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,51</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,06</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">1,15</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">0,94</td></tr></tbody>\n      </table>\n    </div>",
    "options": [
      "A. Đúng",
      "B. Sai"
    ],
    "correct": 0,
    "explain": "Phát biểu ĐÚNG. Biểu đồ kết hợp (cột thể hiện quy mô dân số theo đơn vị triệu người, đường thể hiện tỉ lệ gia tăng dân số theo đơn vị %) là dạng biểu đồ chuẩn và thích hợp nhất."
  },
  {
    "id": 141,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Cho bảng số liệu nhiệt độ không khí trung bình tháng tại Hà Nội năm 2022:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">NHIỆT ĐỘ KHÔNG KHÍ TRUNG BÌNH THÁNG TẠI HÀ NỘI NĂM 2022</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: °C - Nguồn: Niên giám thống kê 2022, NXB Thống kê, 2023)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nhiệt độ</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">18,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">15,3</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">23,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">31,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">30,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">17,8</td></tr></tbody>\n      </table>\n    </div>\nCăn cứ vào bảng số liệu trên, tính biên độ nhiệt năm tại Hà Nội (làm tròn kết quả đến một chữ số thập phân của °C).",
    "options": [
      "A. 16,1°C",
      "B. 15,3°C",
      "C. 31,4°C",
      "D. 12,8°C"
    ],
    "correct": 0,
    "explain": "Công thức: Biên độ nhiệt năm = T_max - T_min. Trong đó tháng có nhiệt độ cao nhất là tháng 6 (31,4°C), tháng thấp nhất là tháng 2 (15,3°C). Biên độ nhiệt năm = 31,4 - 15,3 = 16,1°C."
  },
  {
    "id": 142,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Cho bảng số liệu nhiệt độ không khí trung bình tháng của trạm quan trắc A:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">NHIỆT ĐỘ KHÔNG KHÍ TRUNG BÌNH THÁNG CỦA TRẠM QUAN TRẮC A</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: °C - Nguồn: Niên giám thống kê 2022, NXB Thống kê, 2023)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nhiệt độ</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,1</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,0</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,4</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">27,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">26,6</td></tr></tbody>\n      </table>\n    </div>\nCăn cứ vào bảng số liệu trên và kiến thức đã học, cho biết nhiệt độ của trạm quan trắc A thuộc miền khí hậu nào của nước ta?",
    "options": [
      "A. Miền khí hậu phía Nam (Nam Bộ)",
      "B. Miền khí hậu phía Bắc",
      "C. Miền khí hậu Trung và Nam Bắc Bộ",
      "D. Miền khí hậu Bắc Trung Bộ"
    ],
    "correct": 0,
    "explain": "Trạm A có nền nhiệt cao quanh năm, không có tháng nào dưới 25°C, biên độ nhiệt năm rất nhỏ (2,1°C). Đây là đặc trưng tiêu biểu của khí hậu cận xích đạo gió mùa thuộc Miền khí hậu phía Nam (Nam Bộ và Tây Nguyên)."
  },
  {
    "id": 143,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Cho bảng số liệu nhiệt độ không khí trung bình các tháng trong năm tại Hà Nội năm 2021:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">NHIỆT ĐỘ KHÔNG KHÍ TRUNG BÌNH CÁC THÁNG TRONG NĂM TẠI HÀ NỘI NĂM 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: °C - Nguồn: Tổng cục thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Tháng</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">3</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">4</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">5</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">6</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">7</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">8</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">9</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">10</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">11</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">12</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Nhiệt độ</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">16,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">20,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">22,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">25,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">29,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">31,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">30,8</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">30,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">28,7</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">24,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">22,5</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">19,4</td></tr></tbody>\n      </table>\n    </div>\nCăn cứ vào bảng số liệu trên, tính nhiệt độ trung bình năm tại Hà Nội năm 2021 (làm tròn kết quả đến hàng đơn vị của °C).",
    "options": [
      "A. 25°C",
      "B. 26°C",
      "C. 24°C",
      "D. 23°C"
    ],
    "correct": 0,
    "explain": "Tổng nhiệt độ 12 tháng = 16,9 + 20,9 + 22,5 + 25,6 + 29,7 + 31,6 + 30,8 + 30,5 + 28,7 + 24,6 + 22,5 + 19,4 = 303,7°C. Nhiệt độ trung bình năm = 303,7 / 12 ≈ 25,31°C ≈ 25°C."
  },
  {
    "id": 144,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2021, diện tích rừng nước ta là 148 nghìn km² và diện tích tự nhiên là 331 nghìn km². Hãy cho biết độ che phủ rừng của nước ta năm 2021 là bao nhiêu % (làm tròn đến số thập phân thứ nhất)?",
    "options": [
      "A. 44,7%",
      "B. 42,0%",
      "C. 45,2%",
      "D. 39,5%"
    ],
    "correct": 0,
    "explain": "Công thức: Độ che phủ rừng = (Diện tích rừng / Diện tích tự nhiên) × 100% = (148 / 331) × 100% ≈ 44,713% ≈ 44,7%."
  },
  {
    "id": 145,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Tổng diện tích rừng của nước ta năm 2021 là 14,8 triệu ha. Trong đó, diện tích rừng tự nhiên là 10,2 triệu ha. Tính tỉ lệ diện tích rừng tự nhiên trong tổng diện tích rừng (làm tròn đến 1 chữ số thập phân của %)?",
    "options": [
      "A. 68,9%",
      "B. 31,1%",
      "C. 65,4%",
      "D. 70,2%"
    ],
    "correct": 0,
    "explain": "Công thức: Tỉ lệ rừng tự nhiên = (10,2 / 14,8) × 100% ≈ 68,919% ≈ 68,9%."
  },
  {
    "id": 146,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2021, diện tích tự nhiên nước ta là 331 134,5 km², trong đó diện tích rừng là 14 790,1 nghìn ha. Cho biết độ che phủ rừng là bao nhiêu phần trăm (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 44,7%",
      "B. 46,2%",
      "C. 42,5%",
      "D. 43,8%"
    ],
    "correct": 0,
    "explain": "Đổi đơn vị: 14 790,1 nghìn ha = 14 790 100 ha = 147 901 km² (do 1 km² = 100 ha). Độ che phủ rừng = (147 901 / 331 134,5) × 100% ≈ 44,665% ≈ 44,7%."
  },
  {
    "id": 147,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Biết tổng diện tích rừng nước ta năm 2021 là 14,7 triệu ha, diện tích rừng tự nhiên là 10,1 triệu ha. Cho biết tỉ lệ diện tích rừng tự nhiên trong tổng diện tích rừng cả nước là bao nhiêu phần trăm (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 68,7%",
      "B. 69,5%",
      "C. 31,3%",
      "D. 67,2%"
    ],
    "correct": 0,
    "explain": "Công thức: Tỉ lệ = (10,1 / 14,7) × 100% ≈ 68,707% ≈ 68,7%."
  },
  {
    "id": 148,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Cho bảng số liệu Diện tích rừng của nước ta giai đoạn 1943 - 2021:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">DIỆN TÍCH RỪNG CỦA NƯỚC TA GIAI ĐOẠN 1943 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Nguồn: Tổng cục thống kê)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1943</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2010</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2015</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng diện tích rừng (km²)</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">143.000</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">134.000</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">141.000</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">148.000</td></tr></tbody>\n      </table>\n    </div>\nTính độ che phủ rừng của nước ta năm 2021 (đơn vị %), biết rằng diện tích tự nhiên của nước ta 331.000 km² (làm tròn đến số thập phân thứ nhất).",
    "options": [
      "A. 44,7%",
      "B. 43,5%",
      "C. 45,0%",
      "D. 41,8%"
    ],
    "correct": 0,
    "explain": "Độ che phủ rừng = (148.000 / 331.000) × 100% ≈ 44,71% ≈ 44,7%."
  },
  {
    "id": 149,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Quy mô dân số nước ta năm 2021 là 98 504,4 nghìn người, trong đó dân thành thị là 36 563,3 nghìn người. Vậy tỉ lệ dân nông thôn năm 2021 của nước ta là bao nhiêu phần trăm (làm tròn đến số thập phân thứ nhất)?",
    "options": [
      "A. 62,9%",
      "B. 37,1%",
      "C. 63,5%",
      "D. 61,8%"
    ],
    "correct": 0,
    "explain": "Dân số nông thôn = 98 504,4 - 36 563,3 = 61 941,1 nghìn người. Tỉ lệ dân nông thôn = (61 941,1 / 98 504,4) × 100% ≈ 62,88% ≈ 62,9%."
  },
  {
    "id": 150,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Tính đến 31/12/2023, dân số Việt Nam ước tính là 99 186 471 người, có 1 418 890 trẻ sinh ra và 681 157 người chết. Vậy tỉ suất gia tăng dân số tự nhiên của Việt Nam năm 2023 là bao nhiêu phần trăm (làm tròn đến 2 chữ số thập phân)?",
    "options": [
      "A. 0,74%",
      "B. 0,95%",
      "C. 1,43%",
      "D. 0,68%"
    ],
    "correct": 0,
    "explain": "Gia tăng dân số tự nhiên = Số sinh - Số chết = 1 418 890 - 681 157 = 737 733 người. Tỉ suất gia tăng tự nhiên = (737 733 / 99 186 471) × 100% ≈ 0,74378% ≈ 0,74%."
  },
  {
    "id": 151,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2022, thành phố Cần Thơ có diện tích là 1 440,4 km², dân số 1 252,35 nghìn người. Vậy mật độ dân số trung bình ở thành phố Cần Thơ là bao nhiêu người/km² (làm tròn thành số nguyên)?",
    "options": [
      "A. 869 người/km²",
      "B. 870 người/km²",
      "C. 850 người/km²",
      "D. 912 người/km²"
    ],
    "correct": 0,
    "explain": "Đổi dân số: 1 252,35 nghìn người = 1 252 350 người. Mật độ dân số = Dân số / Diện tích = 1 252 350 / 1 440,4 ≈ 869,45 người/km² ≈ 869 người/km²."
  },
  {
    "id": 152,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Quy mô dân số nước ta năm 2021 là 98 506,19 nghìn người, số người lao động thực tế là 49 072,00 nghìn người. Tỉ lệ lao động trong tổng số dân của nước ta chiếm bao nhiêu phần trăm (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 49,8%",
      "B. 51,2%",
      "C. 48,5%",
      "D. 50,0%"
    ],
    "correct": 0,
    "explain": "Tỉ lệ lao động = (Số người lao động / Tổng dân số) × 100% = (49 072,00 / 98 506,19) × 100% ≈ 49,816% ≈ 49,8%."
  },
  {
    "id": 153,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2022, quy mô dân số vùng Bắc Trung Bộ và Duyên hải miền Trung là 20 661,7 nghìn người; diện tích là 95 847,9 km². Vậy mật độ dân số của vùng là bao nhiêu người/km² (làm tròn thành số nguyên)?",
    "options": [
      "A. 216 người/km²",
      "B. 215 người/km²",
      "C. 220 người/km²",
      "D. 198 người/km²"
    ],
    "correct": 0,
    "explain": "Dân số = 20 661 700 người. Mật độ dân số = 20 661 700 / 95 847,9 ≈ 215,567 người/km² ≈ 216 người/km²."
  },
  {
    "id": 154,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2022, tổng số lao động nước ta là 50 604,7 nghìn người, số lao động trong khu vực Công nghiệp, xây dựng là 24 442,0 nghìn người. Vậy tỉ trọng lao động của khu vực công nghiệp, xây dựng chiếm bao nhiêu phần trăm (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 48,3%",
      "B. 47,5%",
      "C. 49,1%",
      "D. 51,2%"
    ],
    "correct": 0,
    "explain": "Tỉ trọng lao động = (24 442,0 / 50 604,7) × 100% ≈ 48,299% ≈ 48,3%."
  },
  {
    "id": 155,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Cho bảng số liệu Tổng số dân của nước ta giai đoạn 1990 - 2021:<br>\n    <div class=\"geo-table-card\" style=\"margin: 12px 0; overflow-x: auto; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px;\">\n      <div style=\"font-weight: 700; text-align: center; margin-bottom: 3px; color: #93c5fd; font-size: 13px;\">TỔNG SỐ DÂN CỦA NƯỚC TA GIAI ĐOẠN 1990 – 2021</div>\n      <div style=\"font-size: 11px; text-align: right; color: #94a3b8; margin-bottom: 6px; font-style: italic;\">(Đơn vị: triệu người - Nguồn: Niên giám thống kê Việt Nam)</div>\n      <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.15);\">\n        <thead><tr><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">Năm</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">1990</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2000</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2015</th><th style=\"border: 1px solid rgba(255,255,255,0.15); padding: 5px 8px; background: rgba(30, 58, 138, 0.4); color: #60a5fa;\">2021</th></tr></thead>\n        <tbody><tr><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: left; font-weight: 600;\">Tổng số dân</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">66,9</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">77,6</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">92,2</td><td style=\"border: 1px solid rgba(255,255,255,0.15); padding: 4px 6px; text-align: center; font-weight: normal;\">98,5</td></tr></tbody>\n      </table>\n    </div>\nCăn cứ bảng số liệu trên, hãy cho biết dân số năm 2021 tăng bao nhiêu triệu người so với năm 1990? (làm tròn kết quả đến một chữ số thập phân của triệu người).",
    "options": [
      "A. 31,6 triệu người",
      "B. 32,4 triệu người",
      "C. 30,8 triệu người",
      "D. 29,5 triệu người"
    ],
    "correct": 0,
    "explain": "Số dân tăng thêm = Dân số 2021 - Dân số 1990 = 98,5 - 66,9 = 31,6 triệu người."
  },
  {
    "id": 156,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Biết diện tích tự nhiên của Việt Nam là 0,331212 triệu km², số dân năm 2022 là 99,47 triệu người. Vậy mật độ dân số nước ta năm 2022 là bao nhiêu người/km² (làm tròn đến hàng đơn vị)?",
    "options": [
      "A. 300 người/km²",
      "B. 298 người/km²",
      "C. 305 người/km²",
      "D. 289 người/km²"
    ],
    "correct": 0,
    "explain": "Mật độ dân số = Dân số / Diện tích = 99,47 / 0,331212 ≈ 300,32 người/km² ≈ 300 người/km²."
  },
  {
    "id": 157,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Nước ta có 54 dân tộc, trong đó người Kinh là 82,9 triệu người, các dân tộc khác là 13,18 triệu người. Tính tỉ trọng người Kinh và các dân tộc thiểu số trong tổng dân số (làm tròn đến 2 chữ số thập phân)?",
    "options": [
      "A. 86,28% và 13,72%",
      "B. 85,50% và 14,50%",
      "C. 87,10% và 12,90%",
      "D. 84,20% và 15,80%"
    ],
    "correct": 0,
    "explain": "Tổng dân số = 82,9 + 13,18 = 96,08 triệu người. Tỉ trọng người Kinh = (82,9 / 96,08) × 100% ≈ 86,282% ≈ 86,28%. Tỉ trọng các dân tộc khác = 100% - 86,28% = 13,72%."
  },
  {
    "id": 158,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2021, quy mô dân số nước ta là 95,8 triệu người; tỉ lệ dân thành thị là 38,2%. Vậy số dân thành thị nước ta là bao nhiêu triệu người (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 36,6 triệu người",
      "B. 37,2 triệu người",
      "C. 35,8 triệu người",
      "D. 38,0 triệu người"
    ],
    "correct": 0,
    "explain": "Số dân thành thị = 95,8 × 38,2% = 36,5956 triệu người ≈ 36,6 triệu người."
  },
  {
    "id": 159,
    "topic": "BÀI TẬP TÍNH TOÁN ĐỊA LÍ",
    "question": "Năm 2021, dân số thành thị của nước ta là 36,6 triệu người và dân số nông thôn là 61,9 triệu người. Vậy tỉ lệ dân nông thôn của nước ta năm 2021 là bao nhiêu phần trăm (làm tròn đến 1 chữ số thập phân)?",
    "options": [
      "A. 62,8%",
      "B. 63,5%",
      "C. 37,2%",
      "D. 61,9%"
    ],
    "correct": 0,
    "explain": "Tổng dân số = 36,6 + 61,9 = 98,5 triệu người. Tỉ lệ dân nông thôn = (61,9 / 98,5) × 100% ≈ 62,84% ≈ 62,8%."
  }
];

const geoPhan1 = geoAllQuestions.slice(0, 70);    // Trang 1 - 10: Phần I (Câu 1 - 70)
const geoPhan2 = geoAllQuestions.slice(70, 140);  // Trang 11 - 17: Phần II (Câu 71 - 140 / 17 câu ngữ cảnh Đúng/Sai)
const geoPhan3 = geoAllQuestions.slice(140, 159); // Trang 18 - 20: Phần III (Câu 141 - 159 / 19 câu tính toán)

const GEOGRAPHY_TOPICS_DATABASE = [
  {
    id: "geo_all",
    title: "📑 Trọn Bộ Đề Ôn Tập 12A8 (159 câu) [Trang 1 - 20]",
    desc: "Đầy đủ 159 câu theo đúng thứ tự 20 trang tài liệu ôn tập: Phần I (1-70), Phần II (71-140), Phần III (141-159)",
    icon: "🌍",
    category: "all",
    questions: geoAllQuestions
  },
  {
    id: "geo_phan1",
    title: "📖 Phần I: Trắc Nghiệm 4 Lựa Chọn (70 câu) [Trang 1 - 10]",
    desc: "70 câu hỏi trắc nghiệm đơn 4 phương án chuẩn theo đúng thứ tự từ Trang 1 đến Trang 10 tài liệu in",
    icon: "📝",
    category: "cd1",
    questions: geoPhan1
  },
  {
    id: "geo_phan2",
    title: "⚖️ Phần II: Trắc Nghiệm Đúng / Sai (70 ý / 17 câu gốc) [Trang 11 - 17]",
    desc: "17 câu hỏi ngữ cảnh, bảng số liệu & sơ đồ với 70 ý Đúng/Sai theo chuẩn đề thi mới THPT 2025",
    icon: "⚖️",
    category: "cd2",
    questions: geoPhan2
  },
  {
    id: "geo_phan3",
    title: "📊 Phần III: Trả Lời Ngắn & Tính Toán (19 câu) [Trang 18 - 20]",
    desc: "19 câu hỏi tính toán: Biên độ nhiệt, lượng mưa, độ che phủ rừng, mật độ & cơ cấu dân số",
    icon: "🧮",
    category: "cd3",
    questions: geoPhan3
  }
];

if (typeof window !== 'undefined') {
  window.GEOGRAPHY_CATEGORIES = GEOGRAPHY_CATEGORIES;
  window.geoAllQuestions = geoAllQuestions;
  window.GEOGRAPHY_TOPICS_DATABASE = GEOGRAPHY_TOPICS_DATABASE;
}
