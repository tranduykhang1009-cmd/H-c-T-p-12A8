// DU LIEU TIENG ANH 12 TOAN DIEN (UNIT 1 + UNIT 3 + WRITING EXERCISES)
const ENGLISH_TOPICS_DATABASE = [
  {
    "id": "eng_unit1_all",
    "title": "Unit 1: Life Stories We Admire (Trọn Bộ 32 câu)",
    "icon": "⭐",
    "category": "all",
    "questions": [
      {
        "id": 101,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) _______ in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. Bear",
          "B. Bore",
          "C. Born",
          "D. Birth"
        ],
        "correct": 2,
        "explain": "Trong ghi chú tiểu sử dạng gạch đầu dòng (bullet points), người ta dùng phân từ quá khứ rút gọn: 'Born in + [năm] + in + [địa điểm]' (Sinh năm 1915 tại tỉnh Quảng Nam)."
      },
      {
        "id": 102,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. in",
          "B. at",
          "C. on",
          "D. when"
        ],
        "correct": 1,
        "explain": "Cụm giới từ cố định: 'at a young age' mang nghĩa là 'khi còn trẻ / từ khi còn nhỏ tuổi'."
      },
      {
        "id": 103,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. as",
          "B. like",
          "C. by",
          "D. ∅"
        ],
        "correct": 0,
        "explain": "Cấu trúc: 'work as + chức danh/nghề nghiệp' mang nghĩa làm việc với cương vị là... (Worked as General Secretary: Đảm nhiệm cương vị Tổng Bí thư)."
      },
      {
        "id": 104,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. know",
          "B. knew",
          "C. knowing",
          "D. known"
        ],
        "correct": 3,
        "explain": "Rút gọn mệnh đề quan hệ dạng bị động: '...economic reforms, (which were) known as Đổi Mới' -> 'known as Đổi Mới' (được biết đến với tên gọi Đổi Mới)."
      },
      {
        "id": 105,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) known as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. was marking",
          "B. is marking",
          "C. will mark",
          "D. marked"
        ],
        "correct": 3,
        "explain": "Sự việc lịch sử đã xảy ra và kết thúc trong quá khứ, dùng thì Quá khứ đơn (Past Simple): 'marked' (đã đánh dấu một bước ngoặt quan trọng)."
      },
      {
        "id": 106,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">Elon Musk (1) _______ on June 28, 1971, in Pretoria, South Africa. From a young age, he showed his interest in technology and taught himself computer programming at the age of 12...</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. bears",
          "B. born",
          "C. was born",
          "D. was bear"
        ],
        "correct": 2,
        "explain": "Cấu trúc bị động chỉ năm sinh trong quá khứ: 'S + was/were born on + [ngày tháng năm]'."
      },
      {
        "id": 107,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(2) _______ Queen's University in Ontario, Canada in 1995, he was already thinking about his next steps. When he transferred to the University of Pennsylvania, where he was earning degrees in both economics and physics, Musk continued to explore his passions...</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. While was attending",
          "B. While he was attending",
          "C. While he attending",
          "D. While he was attended"
        ],
        "correct": 1,
        "explain": "Mệnh đề trạng ngữ chỉ thời gian với 'While' cần có đầy đủ chủ ngữ 'he' và thì Quá khứ tiếp diễn chủ động: 'While he was attending' (Trong khi ông đang theo học tại...)."
      },
      {
        "id": 108,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">After completing his studies, Musk moved to California to pursue a Ph.D. in energy physics at Stanford University. However, (3) _______ after just two days to pursue his ambitions.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. he dropped",
          "B. he dropped out",
          "C. he was dropped",
          "D. he was dropped out"
        ],
        "correct": 1,
        "explain": "Cụm động từ 'drop out' = bỏ học giữa chừng. Ở thì quá khứ đơn dạng chủ động: 'he dropped out'."
      },
      {
        "id": 109,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">In 1999, he co-founded X.com, an online payment company that later became PayPal. While (4) _______ well, Musk was already setting his sights on the next project: space exploration...</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. developing",
          "B. he was developing",
          "C. PayPal was developing",
          "D. he was developed"
        ],
        "correct": 2,
        "explain": "Chủ ngữ của hành động phát triển tốt ở đây là công ty PayPal ('PayPal was developing well'). Vế sau chủ ngữ là Musk nên không thể rút gọn chủ ngữ."
      },
      {
        "id": 110,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(5) _______, together with his strong determination, has made him one of the most influential figures in technology and innovation.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. Elon Musk's ambitious vision for the future",
          "B. Elon Musk's future for ambitious vision",
          "C. The future of Elon Musk's ambitious vision",
          "D. The ambitious vision of Elon Musk's future"
        ],
        "correct": 0,
        "explain": "Cụm danh từ làm chủ ngữ diễn đạt chuẩn xác: 'Elon Musk's ambitious vision for the future' (Tầm nhìn đầy hoài bão cho tương lai của Elon Musk)."
      },
      {
        "id": 111,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử Chủ tịch Hồ Chí Minh:</b><br>a) He founded the Communist Party of Viet Nam in 1930.<br>b) He led the party to fight for Viet Nam's independence from the French.<br>c) He was born in 1890.<br>d) Ho Chi Minh was a famous leader in Viet Nam.<br>e) Later, he became the first President of Viet Nam in 1945.</div>",
        "options": [
          "A. c - a - b - e - d",
          "B. d - c - b - a - e",
          "C. d - c - a - b - e",
          "D. d - c - e - a - b"
        ],
        "correct": 2,
        "explain": "Trình tự tiểu sử chuẩn logic: (d) Giới thiệu nhân vật chung -> (c) Năm sinh 1890 -> (a) Sáng lập Đảng năm 1930 -> (b) Lãnh đạo đấu tranh giành độc lập -> (e) Trở thành Chủ tịch nước đầu tiên năm 1945. Thứ tự đúng: d - c - a - b - e."
      },
      {
        "id": 112,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử nhà bác học Albert Einstein:</b><br>a) He won the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect.<br>b) Albert Einstein was one of the most famous theoretical physicists in history.<br>c) Later, he moved to the United States in 1933 due to the political situation in Germany.<br>d) He was born in Germany in 1879.<br>e) In 1905, he published his famous theory of relativity, which changed modern physics.</div>",
        "options": [
          "A. d - b - e - a - c",
          "B. b - d - e - a - c",
          "C. b - d - a - e - c",
          "D. d - b - a - e - c"
        ],
        "correct": 1,
        "explain": "Trình tự thời gian và logic tiểu sử: (b) Giới thiệu khái quát -> (d) Sinh năm 1879 tại Đức -> (e) Năm 1905 công bố thuyết tương đối -> (a) Năm 1921 đoạt giải Nobel Vật lý -> (c) Năm 1933 chuyển sang định cư tại Mỹ. Thứ tự đúng: b - d - e - a - c."
      },
      {
        "id": 113,
        "task": "part1",
        "question": "Vo Nguyen Giap was widely recognized as a _______ genius for his pivotal role in leading Vietnamese forces during the First Indochina War and the Vietnam War.",
        "options": [
          "A. military",
          "B. artistic",
          "C. musical",
          "D. literary"
        ],
        "correct": 0,
        "explain": "Cụm từ 'military genius' nghĩa là thiên tài quân sự (nói về Đại tướng Võ Nguyên Giáp lãnh đạo quân đội nhân dân Việt Nam)."
      },
      {
        "id": 114,
        "task": "part1",
        "question": "Viet Quang _______ himself to helping the needy in his neighbourhood.",
        "options": [
          "A. admired",
          "B. devoted",
          "C. diagnosed",
          "D. attended"
        ],
        "correct": 1,
        "explain": "Cấu trúc cố định: 'devote oneself to V-ing/sth' = tận tụy, cống hiến hết mình cho việc gì (Viet Quang đã cống hiến hết mình để giúp đỡ người nghèo khó)."
      },
      {
        "id": 115,
        "task": "part1",
        "question": "Her interesting _______ of her trip to Thailand last year fascinated all of us.",
        "options": [
          "A. rule",
          "B. biography",
          "C. account",
          "D. blockbuster"
        ],
        "correct": 2,
        "explain": "'account of sth' mang nghĩa là lời kể lại, câu chuyện thuật lại chi tiết về một chuyến đi hoặc sự kiện."
      },
      {
        "id": 116,
        "task": "part1",
        "question": "Having a difficult childhood did not hold her back; instead, it inspired her to devote her life to social work, helping others _______ similar challenges.",
        "options": [
          "A. observe",
          "B. note",
          "C. overcome",
          "D. protect"
        ],
        "correct": 2,
        "explain": "'overcome challenges' mang nghĩa là vượt qua những khó khăn, thử thách trong cuộc sống."
      },
      {
        "id": 117,
        "task": "part1",
        "question": "Her biological parents were unable to raise her, so she was _______ by a family who provided her with a loving home.",
        "options": [
          "A. adopted",
          "B. adapted",
          "C. advertised",
          "D. admitted"
        ],
        "correct": 0,
        "explain": "'be adopted by' = được nhận làm con nuôi bởi một gia đình khác (do bố mẹ ruột không đủ khả năng nuôi nấng)."
      },
      {
        "id": 118,
        "task": "part1",
        "question": "Jobs met Steve Wozniak and they quickly _______ over their love of electronics, a shared passion that would eventually lead to the founding of Apple.",
        "options": [
          "A. bonded",
          "B. connected",
          "C. united",
          "D. argued"
        ],
        "correct": 0,
        "explain": "Cụm từ: 'bond over sth' = trở nên thân thiết, gắn kết tình bạn nhờ có chung niềm đam mê/sở thích đồ điện tử."
      },
      {
        "id": 119,
        "task": "part1",
        "question": "Thomas Edison's _______ achievement in developing the first practical electric light bulb revolutionized the way the world illuminated the night.",
        "options": [
          "A. impress",
          "B. impressive",
          "C. impression",
          "D. impressively"
        ],
        "correct": 1,
        "explain": "Đứng trước danh từ 'achievement' cần một tính từ bổ nghĩa -> chọn 'impressive' (đầy ấn tượng)."
      },
      {
        "id": 120,
        "task": "part1",
        "question": "Vo Thi Sau _______ attacks against French colonial forces, becoming a symbol of resistance and courage in Vietnam's struggle for independence.",
        "options": [
          "A. carried out",
          "B. got over",
          "C. came across",
          "D. went on"
        ],
        "correct": 0,
        "explain": "Cụm động từ 'carry out attacks' = thực hiện, tiến hành các cuộc tấn công chống lại thực dân Pháp."
      },
      {
        "id": 121,
        "task": "part1",
        "question": "Even though Susan was _______ with breast cancer, she remained positive.",
        "options": [
          "A. dedicated",
          "B. admired",
          "C. volunteered",
          "D. diagnosed"
        ],
        "correct": 3,
        "explain": "Cấu trúc y tế: 'be diagnosed with + [tên bệnh]' = bị chẩn đoán mắc bệnh (ung thư vú)."
      },
      {
        "id": 122,
        "task": "part1",
        "question": "When he went home, his mother _______ dinner, so he took off his coat to help her.",
        "options": [
          "A. is cooking",
          "B. was cooking",
          "C. cooked",
          "D. cooks"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra tại một thời điểm trong quá khứ (mẹ đang nấu ăn khi anh ấy về nhà) -> dùng thì Quá khứ tiếp diễn: 'was cooking'."
      },
      {
        "id": 123,
        "task": "part1",
        "question": "Mr. Viet _______ his time and energy to giving free English lessons for poor children.",
        "options": [
          "A. admires",
          "B. devotes",
          "C. diagnoses",
          "D. attends"
        ],
        "correct": 1,
        "explain": "Cấu trúc: 'devote time/energy to V-ing' = dành thời gian, tâm huyết cho việc gì. Chủ ngữ Mr. Viet ở hiện tại đơn số ít -> devotes."
      },
      {
        "id": 124,
        "task": "part1",
        "question": "We _______ to the hospital to visit Mike when he _______ to say that he was fine.",
        "options": [
          "A. were driving - was calling",
          "B. drove - called",
          "C. were driving - called",
          "D. drove - was calling"
        ],
        "correct": 2,
        "explain": "Hành động đang diễn ra trong quá khứ ('were driving' - đang lái xe) thì có hành động bất ngờ xen vào ('called' - anh ấy gọi điện)."
      },
      {
        "id": 125,
        "task": "part1",
        "question": "What _______ to you on Sunday night?",
        "options": [
          "A. happen",
          "B. happened",
          "C. was happening",
          "D. would happen"
        ],
        "correct": 1,
        "explain": "Hỏi về sự việc đã xảy ra và kết thúc trong quá khứ ('on Sunday night') -> dùng thì Quá khứ đơn (happened)."
      },
      {
        "id": 126,
        "task": "part1",
        "question": "Last night, we _______ for you for ages but you never _______ up.",
        "options": [
          "A. waited - showed",
          "B. would wait - showed",
          "C. were waiting - were showing",
          "D. waited - was showing"
        ],
        "correct": 0,
        "explain": "Diễn tả hai hành động nối tiếp trong quá khứ: 'waited' (chúng tôi đã đợi rất lâu) nhưng 'never showed up' (bạn chẳng hề xuất hiện) -> cả hai đều chia Quá khứ đơn."
      },
      {
        "id": 127,
        "task": "part1",
        "question": "We _______ our quality time when the unexpected guest _______.",
        "options": [
          "A. had - came",
          "B. were having - came",
          "C. had been having - came",
          "D. have had - would have come"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra ('were having' - đang tận hưởng thời gian tuyệt vời) thì hành động khác cắt ngang ('came' - vị khách bất ngờ xuất hiện)."
      },
      {
        "id": 128,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>What does the passage mainly discuss?</b>",
        "options": [
          "A. Steve Jobs' academic achievements",
          "B. Steve Jobs' life and achievements",
          "C. Steve Jobs' rare disease",
          "D. Steve Jobs' first company"
        ],
        "correct": 1,
        "explain": "Toàn bộ bài đọc nói về cuộc đời và các thành tựu vĩ đại của Steve Jobs từ thuở trẻ, thành lập Apple, Pixar, vượt qua bệnh tật và di sản công nghệ để lại."
      },
      {
        "id": 129,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>According to paragraph 1, which of the following is NOT stated about Steve Jobs?</b>",
        "options": [
          "A. He was adopted by a working-class family.",
          "B. He found a passion for technology from childhood.",
          "C. He didn't finish his college education.",
          "D. He's a genius in the world of technology."
        ],
        "correct": 1,
        "explain": "Đoạn 1 nêu rõ: 'He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity' (ông tìm thấy đam mê sau khi bỏ đại học, KHÔNG PHẢI từ thuở nhỏ 'from childhood')."
      },
      {
        "id": 130,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>they</u> in paragraph 2 refers to _______.</b>",
        "options": [
          "A. cutting-edge innovations",
          "B. Apple's Macintosh computer and iPhone",
          "C. Jobs and Steve Wozniak",
          "D. design and technology"
        ],
        "correct": 2,
        "explain": "Trong đoạn 2: 'In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple...' -> 'they' là đại từ thay thế cho Steve Jobs và Steve Wozniak."
      },
      {
        "id": 131,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>setbacks</u> in paragraph 3 is opposite in meaning to _______.</b>",
        "options": [
          "A. difficulties",
          "B. advantages",
          "C. results",
          "D. influences"
        ],
        "correct": 1,
        "explain": "'setbacks' mang nghĩa là khó khăn, trở ngại, trắc trở. Từ TRÁI NGHĨA (opposite in meaning) là 'advantages' (thuận lợi, lợi thế)."
      },
      {
        "id": 132,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>Which of the following is true about Steve Jobs?</b>",
        "options": [
          "A. He contributed to the success of Pixar Animation Studios.",
          "B. He established Apple without the help of Steve Wozniak.",
          "C. He didn't lead Apple when he was diagnosed with cancer.",
          "D. His ambition was to shape the way people lived and worked."
        ],
        "correct": 0,
        "explain": "Đoạn 3 khẳng định: 'Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story.' (Ông đóng góp vào sự thành công của xưởng phim hoạt hình Pixar)."
      }
    ]
  },
  {
    "id": "eng_part1",
    "title": "Phần I: Từ Vựng & Ngữ Pháp (15 câu)",
    "icon": "📚",
    "category": "vocab",
    "questions": [
      {
        "id": 113,
        "task": "part1",
        "question": "Vo Nguyen Giap was widely recognized as a _______ genius for his pivotal role in leading Vietnamese forces during the First Indochina War and the Vietnam War.",
        "options": [
          "A. military",
          "B. artistic",
          "C. musical",
          "D. literary"
        ],
        "correct": 0,
        "explain": "Cụm từ 'military genius' nghĩa là thiên tài quân sự (nói về Đại tướng Võ Nguyên Giáp lãnh đạo quân đội nhân dân Việt Nam)."
      },
      {
        "id": 114,
        "task": "part1",
        "question": "Viet Quang _______ himself to helping the needy in his neighbourhood.",
        "options": [
          "A. admired",
          "B. devoted",
          "C. diagnosed",
          "D. attended"
        ],
        "correct": 1,
        "explain": "Cấu trúc cố định: 'devote oneself to V-ing/sth' = tận tụy, cống hiến hết mình cho việc gì (Viet Quang đã cống hiến hết mình để giúp đỡ người nghèo khó)."
      },
      {
        "id": 115,
        "task": "part1",
        "question": "Her interesting _______ of her trip to Thailand last year fascinated all of us.",
        "options": [
          "A. rule",
          "B. biography",
          "C. account",
          "D. blockbuster"
        ],
        "correct": 2,
        "explain": "'account of sth' mang nghĩa là lời kể lại, câu chuyện thuật lại chi tiết về một chuyến đi hoặc sự kiện."
      },
      {
        "id": 116,
        "task": "part1",
        "question": "Having a difficult childhood did not hold her back; instead, it inspired her to devote her life to social work, helping others _______ similar challenges.",
        "options": [
          "A. observe",
          "B. note",
          "C. overcome",
          "D. protect"
        ],
        "correct": 2,
        "explain": "'overcome challenges' mang nghĩa là vượt qua những khó khăn, thử thách trong cuộc sống."
      },
      {
        "id": 117,
        "task": "part1",
        "question": "Her biological parents were unable to raise her, so she was _______ by a family who provided her with a loving home.",
        "options": [
          "A. adopted",
          "B. adapted",
          "C. advertised",
          "D. admitted"
        ],
        "correct": 0,
        "explain": "'be adopted by' = được nhận làm con nuôi bởi một gia đình khác (do bố mẹ ruột không đủ khả năng nuôi nấng)."
      },
      {
        "id": 118,
        "task": "part1",
        "question": "Jobs met Steve Wozniak and they quickly _______ over their love of electronics, a shared passion that would eventually lead to the founding of Apple.",
        "options": [
          "A. bonded",
          "B. connected",
          "C. united",
          "D. argued"
        ],
        "correct": 0,
        "explain": "Cụm từ: 'bond over sth' = trở nên thân thiết, gắn kết tình bạn nhờ có chung niềm đam mê/sở thích đồ điện tử."
      },
      {
        "id": 119,
        "task": "part1",
        "question": "Thomas Edison's _______ achievement in developing the first practical electric light bulb revolutionized the way the world illuminated the night.",
        "options": [
          "A. impress",
          "B. impressive",
          "C. impression",
          "D. impressively"
        ],
        "correct": 1,
        "explain": "Đứng trước danh từ 'achievement' cần một tính từ bổ nghĩa -> chọn 'impressive' (đầy ấn tượng)."
      },
      {
        "id": 120,
        "task": "part1",
        "question": "Vo Thi Sau _______ attacks against French colonial forces, becoming a symbol of resistance and courage in Vietnam's struggle for independence.",
        "options": [
          "A. carried out",
          "B. got over",
          "C. came across",
          "D. went on"
        ],
        "correct": 0,
        "explain": "Cụm động từ 'carry out attacks' = thực hiện, tiến hành các cuộc tấn công chống lại thực dân Pháp."
      },
      {
        "id": 121,
        "task": "part1",
        "question": "Even though Susan was _______ with breast cancer, she remained positive.",
        "options": [
          "A. dedicated",
          "B. admired",
          "C. volunteered",
          "D. diagnosed"
        ],
        "correct": 3,
        "explain": "Cấu trúc y tế: 'be diagnosed with + [tên bệnh]' = bị chẩn đoán mắc bệnh (ung thư vú)."
      },
      {
        "id": 122,
        "task": "part1",
        "question": "When he went home, his mother _______ dinner, so he took off his coat to help her.",
        "options": [
          "A. is cooking",
          "B. was cooking",
          "C. cooked",
          "D. cooks"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra tại một thời điểm trong quá khứ (mẹ đang nấu ăn khi anh ấy về nhà) -> dùng thì Quá khứ tiếp diễn: 'was cooking'."
      },
      {
        "id": 123,
        "task": "part1",
        "question": "Mr. Viet _______ his time and energy to giving free English lessons for poor children.",
        "options": [
          "A. admires",
          "B. devotes",
          "C. diagnoses",
          "D. attends"
        ],
        "correct": 1,
        "explain": "Cấu trúc: 'devote time/energy to V-ing' = dành thời gian, tâm huyết cho việc gì. Chủ ngữ Mr. Viet ở hiện tại đơn số ít -> devotes."
      },
      {
        "id": 124,
        "task": "part1",
        "question": "We _______ to the hospital to visit Mike when he _______ to say that he was fine.",
        "options": [
          "A. were driving - was calling",
          "B. drove - called",
          "C. were driving - called",
          "D. drove - was calling"
        ],
        "correct": 2,
        "explain": "Hành động đang diễn ra trong quá khứ ('were driving' - đang lái xe) thì có hành động bất ngờ xen vào ('called' - anh ấy gọi điện)."
      },
      {
        "id": 125,
        "task": "part1",
        "question": "What _______ to you on Sunday night?",
        "options": [
          "A. happen",
          "B. happened",
          "C. was happening",
          "D. would happen"
        ],
        "correct": 1,
        "explain": "Hỏi về sự việc đã xảy ra và kết thúc trong quá khứ ('on Sunday night') -> dùng thì Quá khứ đơn (happened)."
      },
      {
        "id": 126,
        "task": "part1",
        "question": "Last night, we _______ for you for ages but you never _______ up.",
        "options": [
          "A. waited - showed",
          "B. would wait - showed",
          "C. were waiting - were showing",
          "D. waited - was showing"
        ],
        "correct": 0,
        "explain": "Diễn tả hai hành động nối tiếp trong quá khứ: 'waited' (chúng tôi đã đợi rất lâu) nhưng 'never showed up' (bạn chẳng hề xuất hiện) -> cả hai đều chia Quá khứ đơn."
      },
      {
        "id": 127,
        "task": "part1",
        "question": "We _______ our quality time when the unexpected guest _______.",
        "options": [
          "A. had - came",
          "B. were having - came",
          "C. had been having - came",
          "D. have had - would have come"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra ('were having' - đang tận hưởng thời gian tuyệt vời) thì hành động khác cắt ngang ('came' - vị khách bất ngờ xuất hiện)."
      }
    ]
  },
  {
    "id": "eng_task1",
    "title": "Task 1: Tiểu Sử Nguyễn Văn Linh (5 câu)",
    "icon": "📝",
    "category": "cloze",
    "questions": [
      {
        "id": 101,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) _______ in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. Bear",
          "B. Bore",
          "C. Born",
          "D. Birth"
        ],
        "correct": 2,
        "explain": "Trong ghi chú tiểu sử dạng gạch đầu dòng (bullet points), người ta dùng phân từ quá khứ rút gọn: 'Born in + [năm] + in + [địa điểm]' (Sinh năm 1915 tại tỉnh Quảng Nam)."
      },
      {
        "id": 102,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. in",
          "B. at",
          "C. on",
          "D. when"
        ],
        "correct": 1,
        "explain": "Cụm giới từ cố định: 'at a young age' mang nghĩa là 'khi còn trẻ / từ khi còn nhỏ tuổi'."
      },
      {
        "id": 103,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. as",
          "B. like",
          "C. by",
          "D. ∅"
        ],
        "correct": 0,
        "explain": "Cấu trúc: 'work as + chức danh/nghề nghiệp' mang nghĩa làm việc với cương vị là... (Worked as General Secretary: Đảm nhiệm cương vị Tổng Bí thư)."
      },
      {
        "id": 104,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. know",
          "B. knew",
          "C. knowing",
          "D. known"
        ],
        "correct": 3,
        "explain": "Rút gọn mệnh đề quan hệ dạng bị động: '...economic reforms, (which were) known as Đổi Mới' -> 'known as Đổi Mới' (được biết đến với tên gọi Đổi Mới)."
      },
      {
        "id": 105,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) known as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. was marking",
          "B. is marking",
          "C. will mark",
          "D. marked"
        ],
        "correct": 3,
        "explain": "Sự việc lịch sử đã xảy ra và kết thúc trong quá khứ, dùng thì Quá khứ đơn (Past Simple): 'marked' (đã đánh dấu một bước ngoặt quan trọng)."
      }
    ]
  },
  {
    "id": "eng_task2",
    "title": "Task 2: Tiểu Sử Elon Musk (5 câu)",
    "icon": "🚀",
    "category": "cloze",
    "questions": [
      {
        "id": 106,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">Elon Musk (1) _______ on June 28, 1971, in Pretoria, South Africa. From a young age, he showed his interest in technology and taught himself computer programming at the age of 12...</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. bears",
          "B. born",
          "C. was born",
          "D. was bear"
        ],
        "correct": 2,
        "explain": "Cấu trúc bị động chỉ năm sinh trong quá khứ: 'S + was/were born on + [ngày tháng năm]'."
      },
      {
        "id": 107,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(2) _______ Queen's University in Ontario, Canada in 1995, he was already thinking about his next steps. When he transferred to the University of Pennsylvania, where he was earning degrees in both economics and physics, Musk continued to explore his passions...</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. While was attending",
          "B. While he was attending",
          "C. While he attending",
          "D. While he was attended"
        ],
        "correct": 1,
        "explain": "Mệnh đề trạng ngữ chỉ thời gian với 'While' cần có đầy đủ chủ ngữ 'he' và thì Quá khứ tiếp diễn chủ động: 'While he was attending' (Trong khi ông đang theo học tại...)."
      },
      {
        "id": 108,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">After completing his studies, Musk moved to California to pursue a Ph.D. in energy physics at Stanford University. However, (3) _______ after just two days to pursue his ambitions.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. he dropped",
          "B. he dropped out",
          "C. he was dropped",
          "D. he was dropped out"
        ],
        "correct": 1,
        "explain": "Cụm động từ 'drop out' = bỏ học giữa chừng. Ở thì quá khứ đơn dạng chủ động: 'he dropped out'."
      },
      {
        "id": 109,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">In 1999, he co-founded X.com, an online payment company that later became PayPal. While (4) _______ well, Musk was already setting his sights on the next project: space exploration...</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. developing",
          "B. he was developing",
          "C. PayPal was developing",
          "D. he was developed"
        ],
        "correct": 2,
        "explain": "Chủ ngữ của hành động phát triển tốt ở đây là công ty PayPal ('PayPal was developing well'). Vế sau chủ ngữ là Musk nên không thể rút gọn chủ ngữ."
      },
      {
        "id": 110,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(5) _______, together with his strong determination, has made him one of the most influential figures in technology and innovation.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. Elon Musk's ambitious vision for the future",
          "B. Elon Musk's future for ambitious vision",
          "C. The future of Elon Musk's ambitious vision",
          "D. The ambitious vision of Elon Musk's future"
        ],
        "correct": 0,
        "explain": "Cụm danh từ làm chủ ngữ diễn đạt chuẩn xác: 'Elon Musk's ambitious vision for the future' (Tầm nhìn đầy hoài bão cho tương lai của Elon Musk)."
      }
    ]
  },
  {
    "id": "eng_task3",
    "title": "Task 3: Sắp Xếp Câu Tiểu Sử (2 câu)",
    "icon": "🔀",
    "category": "arrange",
    "questions": [
      {
        "id": 111,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử Chủ tịch Hồ Chí Minh:</b><br>a) He founded the Communist Party of Viet Nam in 1930.<br>b) He led the party to fight for Viet Nam's independence from the French.<br>c) He was born in 1890.<br>d) Ho Chi Minh was a famous leader in Viet Nam.<br>e) Later, he became the first President of Viet Nam in 1945.</div>",
        "options": [
          "A. c - a - b - e - d",
          "B. d - c - b - a - e",
          "C. d - c - a - b - e",
          "D. d - c - e - a - b"
        ],
        "correct": 2,
        "explain": "Trình tự tiểu sử chuẩn logic: (d) Giới thiệu nhân vật chung -> (c) Năm sinh 1890 -> (a) Sáng lập Đảng năm 1930 -> (b) Lãnh đạo đấu tranh giành độc lập -> (e) Trở thành Chủ tịch nước đầu tiên năm 1945. Thứ tự đúng: d - c - a - b - e."
      },
      {
        "id": 112,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử nhà bác học Albert Einstein:</b><br>a) He won the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect.<br>b) Albert Einstein was one of the most famous theoretical physicists in history.<br>c) Later, he moved to the United States in 1933 due to the political situation in Germany.<br>d) He was born in Germany in 1879.<br>e) In 1905, he published his famous theory of relativity, which changed modern physics.</div>",
        "options": [
          "A. d - b - e - a - c",
          "B. b - d - e - a - c",
          "C. b - d - a - e - c",
          "D. d - b - a - e - c"
        ],
        "correct": 1,
        "explain": "Trình tự thời gian và logic tiểu sử: (b) Giới thiệu khái quát -> (d) Sinh năm 1879 tại Đức -> (e) Năm 1905 công bố thuyết tương đối -> (a) Năm 1921 đoạt giải Nobel Vật lý -> (c) Năm 1933 chuyển sang định cư tại Mỹ. Thứ tự đúng: b - d - e - a - c."
      }
    ]
  },
  {
    "id": "eng_part2",
    "title": "Phần II: Bài Đọc Hiểu Steve Jobs (5 câu)",
    "icon": "📖",
    "category": "reading",
    "questions": [
      {
        "id": 128,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>What does the passage mainly discuss?</b>",
        "options": [
          "A. Steve Jobs' academic achievements",
          "B. Steve Jobs' life and achievements",
          "C. Steve Jobs' rare disease",
          "D. Steve Jobs' first company"
        ],
        "correct": 1,
        "explain": "Toàn bộ bài đọc nói về cuộc đời và các thành tựu vĩ đại của Steve Jobs từ thuở trẻ, thành lập Apple, Pixar, vượt qua bệnh tật và di sản công nghệ để lại."
      },
      {
        "id": 129,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>According to paragraph 1, which of the following is NOT stated about Steve Jobs?</b>",
        "options": [
          "A. He was adopted by a working-class family.",
          "B. He found a passion for technology from childhood.",
          "C. He didn't finish his college education.",
          "D. He's a genius in the world of technology."
        ],
        "correct": 1,
        "explain": "Đoạn 1 nêu rõ: 'He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity' (ông tìm thấy đam mê sau khi bỏ đại học, KHÔNG PHẢI từ thuở nhỏ 'from childhood')."
      },
      {
        "id": 130,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>they</u> in paragraph 2 refers to _______.</b>",
        "options": [
          "A. cutting-edge innovations",
          "B. Apple's Macintosh computer and iPhone",
          "C. Jobs and Steve Wozniak",
          "D. design and technology"
        ],
        "correct": 2,
        "explain": "Trong đoạn 2: 'In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple...' -> 'they' là đại từ thay thế cho Steve Jobs và Steve Wozniak."
      },
      {
        "id": 131,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>setbacks</u> in paragraph 3 is opposite in meaning to _______.</b>",
        "options": [
          "A. difficulties",
          "B. advantages",
          "C. results",
          "D. influences"
        ],
        "correct": 1,
        "explain": "'setbacks' mang nghĩa là khó khăn, trở ngại, trắc trở. Từ TRÁI NGHĨA (opposite in meaning) là 'advantages' (thuận lợi, lợi thế)."
      },
      {
        "id": 132,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>Which of the following is true about Steve Jobs?</b>",
        "options": [
          "A. He contributed to the success of Pixar Animation Studios.",
          "B. He established Apple without the help of Steve Wozniak.",
          "C. He didn't lead Apple when he was diagnosed with cancer.",
          "D. His ambition was to shape the way people lived and worked."
        ],
        "correct": 0,
        "explain": "Đoạn 3 khẳng định: 'Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story.' (Ông đóng góp vào sự thành công của xưởng phim hoạt hình Pixar)."
      }
    ]
  },
  {
    "id": "eng_unit3_all",
    "title": "Unit 3: Green Living (Trọn Bộ 31 câu)",
    "icon": "🌿",
    "category": "unit3",
    "questions": [
      {
        "id": 201,
        "task": "u3_vocab",
        "question": "Different kinds of waste are dumped in _______ sites.",
        "options": [
          "A. landfill",
          "B. leftover",
          "C. resource",
          "D. Footprint"
        ],
        "correct": 0,
        "explain": "Cụm danh từ cố định: <b>'landfill sites'</b> mang nghĩa là các bãi chôn lấp rác thải. Các từ còn lại: leftover (thức ăn thừa), resource (tài nguyên), footprint (dấu chân / vết tích)."
      },
      {
        "id": 202,
        "task": "u3_vocab",
        "question": "Leaving the tap running while washing the dishes is purely a _______ of clean water.",
        "options": [
          "A. awareness",
          "B. waste",
          "C. pile",
          "D. Packaging"
        ],
        "correct": 1,
        "explain": "Cụm từ cố định: <b>'a waste of + N'</b> mang nghĩa là sự lãng phí cái gì ('a waste of clean water': sự lãng phí nước sạch). Để vòi nước chảy khi rửa bát là một sự lãng phí nước sạch."
      },
      {
        "id": 203,
        "task": "u3_vocab",
        "question": "We organised a community event to _______ the polluted beaches.",
        "options": [
          "A. get rid of",
          "B. go green",
          "C. rinse out",
          "D. clean up"
        ],
        "correct": 3,
        "explain": "Cụm động từ: <b>'clean up'</b> mang nghĩa là dọn dẹp, dọn sạch ('clean up the beaches': dọn sạch các bãi biển). 'get rid of' (vứt bỏ), 'go green' (sống xanh), 'rinse out' (rửa sạch/xối nước)."
      },
      {
        "id": 204,
        "task": "u3_vocab",
        "question": "By taking fewer flights, we can help to reduce _______ significantly.",
        "options": [
          "A. cardboard",
          "B. leftover",
          "C. fruit peel",
          "D. carbon footprint"
        ],
        "correct": 3,
        "explain": "Cụm từ: <b>'reduce carbon footprint'</b> mang nghĩa là giảm thiểu dấu chân carbon (lượng phát thải khí nhà kính). Việc hạn chế đi máy bay giúp giảm lượng phát thải carbon đáng kể."
      },
      {
        "id": 205,
        "task": "u3_vocab",
        "question": "Plastic bags _______ very slowly, which poses a threat to the ecosystem.",
        "options": [
          "A. release",
          "B. reuse",
          "C. decompose",
          "D. recycle"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'decompose'</b> mang nghĩa là phân hủy tự nhiên. Túi ni-lông phân hủy rất chậm, gây ra mối đe dọa lớn đối với hệ sinh thái."
      },
      {
        "id": 206,
        "task": "u3_vocab",
        "question": "Protecting the environment is crucial for a more _______ future.",
        "options": [
          "A. sustainable",
          "B. reusable",
          "C. single-use",
          "D. recyclable"
        ],
        "correct": 0,
        "explain": "Tính từ: <b>'sustainable'</b> (bền vững). Cụm từ: 'a sustainable future' (một tương lai bền vững, lâu dài). Bảo vệ môi trường là điều tối quan trọng cho một tương lai bền vững hơn."
      },
      {
        "id": 207,
        "task": "u3_vocab",
        "question": "We can use leftovers to make simple _______ to enrich the soil.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ / phân ủ vi sinh). Chúng ta có thể dùng thức ăn thừa để làm phân hữu cơ bón cho đất thêm màu mỡ."
      },
      {
        "id": 208,
        "task": "u3_vocab",
        "question": "The ocean was _______ as a result of a recent oil spill.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Tính từ/Quá khứ phân từ: <b>'contaminated'</b> mang nghĩa là bị ô nhiễm, bị nhiễm độc chất. Đại dương đã bị nhiễm bẩn nghiêm trọng do sự cố tràn dầu gần đây."
      },
      {
        "id": 209,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Đại từ quan hệ: <b>', which'</b> được dùng sau dấu phẩy trong mệnh đề quan hệ không xác định để thay thế cho toàn bộ sự việc ở mệnh đề phía trước ('Nhiều người nổi tiếng theo đuổi lối sống xanh'). Không dùng 'that' sau dấu phẩy."
      },
      {
        "id": 210,
        "task": "u3_vocab",
        "question": "Unless people _______ poaching animals, many species will become extinct.",
        "options": [
          "A. stopped",
          "B. stop",
          "C. had stopped",
          "D. to stop"
        ],
        "correct": 1,
        "explain": "Mệnh đề điều kiện loại 1 với 'Unless' (= If not): <b>Unless + S + V(hiện tại đơn), S + will + V_inf</b>. Chủ ngữ 'people' số nhiều -> chia động từ nguyên thể 'stop'."
      },
      {
        "id": 211,
        "task": "u3_vocab",
        "question": "Ms. Brown often uses leftovers to make her own _______.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ). Cô Brown thường dùng thức ăn thừa để tự làm phân hữu cơ bón cây."
      },
      {
        "id": 212,
        "task": "u3_vocab",
        "question": "The water has become undrinkable because it has been _______ with lead.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'contaminated with + chất độc hại'</b> mang nghĩa bị nhiễm độc chất gì ('contaminated with lead': bị nhiễm chì). Nguồn nước không thể uống được vì đã bị nhiễm chì."
      },
      {
        "id": 213,
        "task": "u3_vocab",
        "question": "They _______ extensive research on the environmental effects of using fake Christmas trees.",
        "options": [
          "A. turned off",
          "B. carried out",
          "C. look after",
          "D. applied for"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>'carry out'</b> = 'conduct' (tiến hành, thực hiện). 'carry out extensive research' (tiến hành nghiên cứu sâu rộng). 'turn off' (tắt), 'look after' (chăm sóc), 'apply for' (nộp đơn xin việc)."
      },
      {
        "id": 214,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Mệnh đề quan hệ không xác định đứng sau dấu phẩy bổ nghĩa cho cả mệnh đề trước bắt buộc dùng <b>'which'</b>."
      },
      {
        "id": 215,
        "task": "u3_opposite",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>OPPOSITE</b> in meaning to the underlined bold word:</i><br><br><b>Single-use</b> products provide great convenience, but they also harm the environment.",
        "options": [
          "A. Contaminated",
          "B. Decomposed",
          "C. Reusable",
          "D. Released"
        ],
        "correct": 2,
        "explain": "Từ gạch chân: <b>Single-use</b> (dùng một lần) >< <b>Reusable</b> (có thể tái sử dụng nhiều lần). Do đó chọn đáp án C."
      },
      {
        "id": 216,
        "task": "u3_closest",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>CLOSEST</b> in meaning to the underlined bold word:</i><br><br>Instead of <b>getting rid of</b> fruit peels, we use them to make simple compost.",
        "options": [
          "A. relying on",
          "B. throwing away",
          "C. preparing for",
          "D. responding to"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>getting rid of</b> = <b>throwing away</b> (vứt bỏ, loại bỏ). Thay vì vứt bỏ vỏ trái cây, chúng tôi dùng chúng để làm phân ủ vi sinh."
      },
      {
        "id": 217,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (17):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) _______ environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (17):</b>",
        "options": [
          "A. the",
          "B. Ø (no article)",
          "C. an",
          "D. a"
        ],
        "correct": 2,
        "explain": "Vị trí 17: 'environmental project' là cụm danh từ đếm được số ít, được nhắc đến lần đầu tiên, bắt đầu bằng nguyên âm /ɪ/ ('environmental'), do đó dùng mạo từ <b>'an'</b>."
      },
      {
        "id": 218,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (18):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (18):</b>",
        "options": [
          "A. rise",
          "B. rate",
          "C. raise",
          "D. rinse"
        ],
        "correct": 2,
        "explain": "Cụm từ cố định: <b>'raise awareness'</b> mang nghĩa là nâng cao nhận thức ('raise students' awareness of environmental issues': nâng cao nhận thức của học sinh về các vấn đề môi trường). 'rise' là nội động từ không có tân ngữ."
      },
      {
        "id": 219,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (19):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) raise students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (19):</b>",
        "options": [
          "A. take",
          "B. bring",
          "C. give",
          "D. cause"
        ],
        "correct": 2,
        "explain": "Cụm kết hợp từ (collocation): <b>'give a presentation'</b> mang nghĩa là thuyết trình, trình bày bài báo cáo."
      },
      {
        "id": 220,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một bản báo cáo hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Therefore, we recommend that you put the suggested solutions into practice as soon as possible.<br><b>b.</b> Third, we recommend that we make use of plastic waste in arts and crafts projects, for example, for making plant pots or bird feeders.<br><b>c.</b> Second, the Youth Union should hold regular sessions to teach students how to recycle properly.<br><b>d.</b> This report suggests three main solutions to the problem of single-use products in our school.<br><b>e.</b> First, we suggest that the school should provide more recycling bins.<br><b>f.</b> Reusing and recycling single-use plastics will lead to a greener school environment and help promote a green lifestyle among young people.</div>",
        "options": [
          "A. d – e – c – f – b – a",
          "B. d – e – c – b – a – f",
          "C. d – e – b – c – f – a",
          "D. d – e – c – b – f – a"
        ],
        "correct": 3,
        "explain": "Thứ tự sắp xếp logic chuẩn của một bản báo cáo đề xuất giải pháp:<br>• <b>d</b> (Mở đầu): Nêu mục đích báo cáo về 3 giải pháp xử lý đồ nhựa dùng một lần.<br>• <b>e</b>: Giải pháp 1 (First...).<br>• <b>c</b>: Giải pháp 2 (Second...).<br>• <b>b</b>: Giải pháp 3 (Third...).<br>• <b>f</b>: Đánh giá tác động tích cực của việc tái chế đối với môi trường học đường.<br>• <b>a</b> (Kết luận): Lời kiến nghị hành động khép lại báo cáo (Therefore...).<br>➡️ Thứ tự đúng là: <b>d – e – c – b – f – a</b>."
      },
      {
        "id": 221,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một đoạn văn hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Second, it prevents environmental destruction by promoting sustainable practices.<br><b>b.</b> Making small changes today can lead to a more sustainable and prosperous tomorrow.<br><b>c.</b> By reducing single-use items, we conserve resources and minimise waste.<br><b>d.</b> Going green offers numerous advantages for both individuals and the planet.<br><b>e.</b> First, it helps reduce our carbon footprint, lessening the harm caused by greenhouse gases.<br><b>f.</b> Additionally, going green raises awareness about environmental issues, fostering a sense of responsibility towards the Earth.<br><b>g.</b> Finally, embracing eco-friendly habits not only benefits the environment but also promotes healthier lifestyles for ourselves and future generations.</div>",
        "options": [
          "A. d – e – a – b – c – f – g",
          "B. b – d – e – a – c – f – g",
          "C. d – e – a – c – f – g – b",
          "D. d – e – a – c – g – f – b"
        ],
        "correct": 2,
        "explain": "Thứ tự sắp xếp logic của một đoạn văn nghị luận:<br>• <b>d</b>: Câu mở đầu chủ đề (Going green offers numerous advantages...).<br>• <b>e</b>: Lợi ích thứ nhất (First, it helps reduce our carbon footprint...).<br>• <b>a</b>: Lợi ích thứ hai (Second, it prevents environmental destruction...).<br>• <b>c</b>: Bổ sung diễn giải hành động giảm đồ dùng một lần.<br>• <b>f</b>: Ý bổ trợ tiếp theo (Additionally, going green raises awareness...).<br>• <b>g</b>: Lợi ích cuối cùng (Finally, embracing eco-friendly habits...).<br>• <b>b</b>: Câu kết đúc kết thông điệp tương lai (Making small changes today...).<br>➡️ Thứ tự chuẩn: <b>d – e – a – c – f – g – b</b>."
      },
      {
        "id": 222,
        "task": "u3_cloze",
        "question": "<b>Read the following passage and choose the best word for blank (22):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Festivals come with many traditions that bring happiness and joy. However, some of these <b>(22) _______</b> may not be environmentally friendly, and may need to be changed for a sustainable future. In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose. The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food. In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div><br><b>Chọn từ thích hợp cho vị trí (22):</b>",
        "options": [
          "A. wishes",
          "B. customs",
          "C. structures",
          "D. patterns"
        ],
        "correct": 1,
        "explain": "Danh từ: <b>'customs'</b> (phong tục, tập quán). 'traditions' (truyền thống) đi liền với 'customs' (phong tục). Một số phong tục lễ hội này có thể không thân thiện với môi trường."
      },
      {
        "id": 223,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (23) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose...</div>",
        "options": [
          "A. scenario",
          "B. viewer",
          "C. audience",
          "D. sight"
        ],
        "correct": 3,
        "explain": "Cụm danh từ: <b>'a spectacular sight'</b> mang nghĩa là một cảnh tượng ngoạn mục, đẹp mắt (khi thả bóng bay hoặc đèn trời)."
      },
      {
        "id": 224,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (24) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food...</div>",
        "options": [
          "A. replace",
          "B. imagine",
          "C. accept",
          "D. mistake"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'mistake A for B'</b> mang nghĩa là nhầm lẫn cái A thành cái B ('mistake the balloons for food': nhiều loài động vật nhầm bóng bay là thức ăn)."
      },
      {
        "id": 225,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (25) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually (26) _______ a lot of harmful chemicals into the air...</div>",
        "options": [
          "A. watch",
          "B. learn",
          "C. miss",
          "D. think"
        ],
        "correct": 2,
        "explain": "Cụm từ: <b>'miss'</b> (bỏ lỡ cơ hội xem). 'displays that people won't want to miss' (những màn pháo hoa đặc sắc mà mọi người không muốn bỏ lỡ)."
      },
      {
        "id": 226,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (26) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div>",
        "options": [
          "A. recycle",
          "B. reuse",
          "C. release",
          "D. revise"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'release'</b> (thải ra, phát tán). Pháo hoa thải ra rất nhiều hóa chất độc hại vào không khí ('release a lot of harmful chemicals into the air')."
      },
      {
        "id": 227,
        "task": "u3_reading",
        "question": "<b>Read the passage and choose the best answer:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Stockholm, Sweden stands out as a green city due to its eco-friendly initiatives. Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills. Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to minimise carbon emissions. These efforts contribute to cleaner air and a healthier environment. Thirdly, Stockholm promotes the use of reusable items and discourages single-use plastics. Citizens are encouraged to bring their bags and containers while shopping to reduce plastic waste. These eco-conscious practices make Stockholm a model for sustainability and inspire other cities worldwide.<br><br>With its commitment to environmental protection and innovative approaches to waste reduction, Stockholm sets a high standard for green living and serves as an example of how cities can prioritise sustainability in urban development.</div><br><b>Question 27: Which best serves as the title for the passage?</b>",
        "options": [
          "A. Stockholm – the Friendliest City",
          "B. Stockholm – the Happiest City",
          "C. Stockholm – a Green City",
          "D. Stockholm – a Success Story"
        ],
        "correct": 2,
        "explain": "Tiêu đề phù hợp nhất là: <b>'Stockholm – a Green City'</b> (Stockholm – Một thành phố xanh). Toàn bộ bài đọc tập trung giới thiệu các sáng kiến thân thiện với môi trường của Stockholm như quản lý rác thải, giao thông xanh, tái chế và giảm rác thải nhựa."
      },
      {
        "id": 228,
        "task": "u3_reading",
        "question": "<b>According to paragraph 1, what does Stockholm put an emphasis on?</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills...</div>",
        "options": [
          "A. landfill sites",
          "B. recycling and composting",
          "C. e-waste management",
          "D. reusing and recycling"
        ],
        "correct": 1,
        "explain": "Dẫn chứng trong đoạn 1: 'It emphasises <b>recycling and composting</b> to reduce the amount of waste sent to landfills.' (Thành phố chú trọng vào việc tái chế và ủ phân hữu cơ)."
      },
      {
        "id": 229,
        "task": "u3_reading",
        "question": "<b>The word 'minimise' in paragraph 2 is OPPOSITE in meaning to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to <b>minimise</b> carbon emissions...</div>",
        "options": [
          "A. prevent",
          "B. reduce",
          "C. control",
          "D. increase"
        ],
        "correct": 3,
        "explain": "Từ: <b>minimise</b> (giảm thiểu đến mức tối đa) >< <b>increase</b> (làm tăng lên). Các từ còn lại: reduce (giảm - đồng nghĩa), prevent (ngăn chặn), control (kiểm soát)."
      },
      {
        "id": 230,
        "task": "u3_reading",
        "question": "<b>The word 'their' in paragraph 2 refers to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Citizens are encouraged to bring <b>their</b> bags and containers while shopping to reduce plastic waste...</div>",
        "options": [
          "A. bags",
          "B. containers",
          "C. practices",
          "D. citizens"
        ],
        "correct": 3,
        "explain": "Dẫn chứng trong đoạn 2: '<b>Citizens</b> are encouraged to bring <b>their</b> bags and containers...' ➡️ Đại từ sở hữu 'their' thay thế cho danh từ số nhiều đứng ngay trước là <b>citizens</b> (người dân thành phố)."
      },
      {
        "id": 231,
        "task": "u3_reading",
        "question": "<b>Which of the following is NOT true according to the passage?</b>",
        "options": [
          "A. Single-use plastics are more popular than reusable items in Stockholm.",
          "B. City dwellers in Stockholm are encouraged to cycle or use public transport.",
          "C. Stockholm is a prime example of how a city can prioritise sustainability.",
          "D. Stockholm adopts innovative approaches to reduce the amount of waste."
        ],
        "correct": 0,
        "explain": "Thông tin sai là đáp án <b>A</b>. Trong đoạn 2 nêu rõ: 'Stockholm promotes the use of reusable items and discourages single-use plastics' (Stockholm khuyến khích dùng đồ tái sử dụng và không khuyến khích đồ nhựa dùng một lần). Do đó nói đồ nhựa dùng một lần phổ biến hơn là sai sự thật."
      }
    ]
  },
  {
    "id": "eng_unit3_vocab",
    "title": "Unit 3: Từ Vựng & Ngữ Pháp Sống Xanh (16 câu)",
    "icon": "🌱",
    "category": "unit3",
    "questions": [
      {
        "id": 201,
        "task": "u3_vocab",
        "question": "Different kinds of waste are dumped in _______ sites.",
        "options": [
          "A. landfill",
          "B. leftover",
          "C. resource",
          "D. Footprint"
        ],
        "correct": 0,
        "explain": "Cụm danh từ cố định: <b>'landfill sites'</b> mang nghĩa là các bãi chôn lấp rác thải. Các từ còn lại: leftover (thức ăn thừa), resource (tài nguyên), footprint (dấu chân / vết tích)."
      },
      {
        "id": 202,
        "task": "u3_vocab",
        "question": "Leaving the tap running while washing the dishes is purely a _______ of clean water.",
        "options": [
          "A. awareness",
          "B. waste",
          "C. pile",
          "D. Packaging"
        ],
        "correct": 1,
        "explain": "Cụm từ cố định: <b>'a waste of + N'</b> mang nghĩa là sự lãng phí cái gì ('a waste of clean water': sự lãng phí nước sạch). Để vòi nước chảy khi rửa bát là một sự lãng phí nước sạch."
      },
      {
        "id": 203,
        "task": "u3_vocab",
        "question": "We organised a community event to _______ the polluted beaches.",
        "options": [
          "A. get rid of",
          "B. go green",
          "C. rinse out",
          "D. clean up"
        ],
        "correct": 3,
        "explain": "Cụm động từ: <b>'clean up'</b> mang nghĩa là dọn dẹp, dọn sạch ('clean up the beaches': dọn sạch các bãi biển). 'get rid of' (vứt bỏ), 'go green' (sống xanh), 'rinse out' (rửa sạch/xối nước)."
      },
      {
        "id": 204,
        "task": "u3_vocab",
        "question": "By taking fewer flights, we can help to reduce _______ significantly.",
        "options": [
          "A. cardboard",
          "B. leftover",
          "C. fruit peel",
          "D. carbon footprint"
        ],
        "correct": 3,
        "explain": "Cụm từ: <b>'reduce carbon footprint'</b> mang nghĩa là giảm thiểu dấu chân carbon (lượng phát thải khí nhà kính). Việc hạn chế đi máy bay giúp giảm lượng phát thải carbon đáng kể."
      },
      {
        "id": 205,
        "task": "u3_vocab",
        "question": "Plastic bags _______ very slowly, which poses a threat to the ecosystem.",
        "options": [
          "A. release",
          "B. reuse",
          "C. decompose",
          "D. recycle"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'decompose'</b> mang nghĩa là phân hủy tự nhiên. Túi ni-lông phân hủy rất chậm, gây ra mối đe dọa lớn đối với hệ sinh thái."
      },
      {
        "id": 206,
        "task": "u3_vocab",
        "question": "Protecting the environment is crucial for a more _______ future.",
        "options": [
          "A. sustainable",
          "B. reusable",
          "C. single-use",
          "D. recyclable"
        ],
        "correct": 0,
        "explain": "Tính từ: <b>'sustainable'</b> (bền vững). Cụm từ: 'a sustainable future' (một tương lai bền vững, lâu dài). Bảo vệ môi trường là điều tối quan trọng cho một tương lai bền vững hơn."
      },
      {
        "id": 207,
        "task": "u3_vocab",
        "question": "We can use leftovers to make simple _______ to enrich the soil.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ / phân ủ vi sinh). Chúng ta có thể dùng thức ăn thừa để làm phân hữu cơ bón cho đất thêm màu mỡ."
      },
      {
        "id": 208,
        "task": "u3_vocab",
        "question": "The ocean was _______ as a result of a recent oil spill.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Tính từ/Quá khứ phân từ: <b>'contaminated'</b> mang nghĩa là bị ô nhiễm, bị nhiễm độc chất. Đại dương đã bị nhiễm bẩn nghiêm trọng do sự cố tràn dầu gần đây."
      },
      {
        "id": 209,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Đại từ quan hệ: <b>', which'</b> được dùng sau dấu phẩy trong mệnh đề quan hệ không xác định để thay thế cho toàn bộ sự việc ở mệnh đề phía trước ('Nhiều người nổi tiếng theo đuổi lối sống xanh'). Không dùng 'that' sau dấu phẩy."
      },
      {
        "id": 210,
        "task": "u3_vocab",
        "question": "Unless people _______ poaching animals, many species will become extinct.",
        "options": [
          "A. stopped",
          "B. stop",
          "C. had stopped",
          "D. to stop"
        ],
        "correct": 1,
        "explain": "Mệnh đề điều kiện loại 1 với 'Unless' (= If not): <b>Unless + S + V(hiện tại đơn), S + will + V_inf</b>. Chủ ngữ 'people' số nhiều -> chia động từ nguyên thể 'stop'."
      },
      {
        "id": 211,
        "task": "u3_vocab",
        "question": "Ms. Brown often uses leftovers to make her own _______.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ). Cô Brown thường dùng thức ăn thừa để tự làm phân hữu cơ bón cây."
      },
      {
        "id": 212,
        "task": "u3_vocab",
        "question": "The water has become undrinkable because it has been _______ with lead.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'contaminated with + chất độc hại'</b> mang nghĩa bị nhiễm độc chất gì ('contaminated with lead': bị nhiễm chì). Nguồn nước không thể uống được vì đã bị nhiễm chì."
      },
      {
        "id": 213,
        "task": "u3_vocab",
        "question": "They _______ extensive research on the environmental effects of using fake Christmas trees.",
        "options": [
          "A. turned off",
          "B. carried out",
          "C. look after",
          "D. applied for"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>'carry out'</b> = 'conduct' (tiến hành, thực hiện). 'carry out extensive research' (tiến hành nghiên cứu sâu rộng). 'turn off' (tắt), 'look after' (chăm sóc), 'apply for' (nộp đơn xin việc)."
      },
      {
        "id": 214,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Mệnh đề quan hệ không xác định đứng sau dấu phẩy bổ nghĩa cho cả mệnh đề trước bắt buộc dùng <b>'which'</b>."
      },
      {
        "id": 215,
        "task": "u3_opposite",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>OPPOSITE</b> in meaning to the underlined bold word:</i><br><br><b>Single-use</b> products provide great convenience, but they also harm the environment.",
        "options": [
          "A. Contaminated",
          "B. Decomposed",
          "C. Reusable",
          "D. Released"
        ],
        "correct": 2,
        "explain": "Từ gạch chân: <b>Single-use</b> (dùng một lần) >< <b>Reusable</b> (có thể tái sử dụng nhiều lần). Do đó chọn đáp án C."
      },
      {
        "id": 216,
        "task": "u3_closest",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>CLOSEST</b> in meaning to the underlined bold word:</i><br><br>Instead of <b>getting rid of</b> fruit peels, we use them to make simple compost.",
        "options": [
          "A. relying on",
          "B. throwing away",
          "C. preparing for",
          "D. responding to"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>getting rid of</b> = <b>throwing away</b> (vứt bỏ, loại bỏ). Thay vì vứt bỏ vỏ trái cây, chúng tôi dùng chúng để làm phân ủ vi sinh."
      }
    ]
  },
  {
    "id": "eng_unit3_announce",
    "title": "Unit 3: Điền Thông Báo Cuộc Thi (3 câu)",
    "icon": "📢",
    "category": "unit3",
    "questions": [
      {
        "id": 217,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (17):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) _______ environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (17):</b>",
        "options": [
          "A. the",
          "B. Ø (no article)",
          "C. an",
          "D. a"
        ],
        "correct": 2,
        "explain": "Vị trí 17: 'environmental project' là cụm danh từ đếm được số ít, được nhắc đến lần đầu tiên, bắt đầu bằng nguyên âm /ɪ/ ('environmental'), do đó dùng mạo từ <b>'an'</b>."
      },
      {
        "id": 218,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (18):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (18):</b>",
        "options": [
          "A. rise",
          "B. rate",
          "C. raise",
          "D. rinse"
        ],
        "correct": 2,
        "explain": "Cụm từ cố định: <b>'raise awareness'</b> mang nghĩa là nâng cao nhận thức ('raise students' awareness of environmental issues': nâng cao nhận thức của học sinh về các vấn đề môi trường). 'rise' là nội động từ không có tân ngữ."
      },
      {
        "id": 219,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (19):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) raise students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (19):</b>",
        "options": [
          "A. take",
          "B. bring",
          "C. give",
          "D. cause"
        ],
        "correct": 2,
        "explain": "Cụm kết hợp từ (collocation): <b>'give a presentation'</b> mang nghĩa là thuyết trình, trình bày bài báo cáo."
      }
    ]
  },
  {
    "id": "eng_unit3_arrange",
    "title": "Unit 3: Sắp Xếp Báo Cáo & Đoạn Văn (2 câu)",
    "icon": "📑",
    "category": "unit3",
    "questions": [
      {
        "id": 220,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một bản báo cáo hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Therefore, we recommend that you put the suggested solutions into practice as soon as possible.<br><b>b.</b> Third, we recommend that we make use of plastic waste in arts and crafts projects, for example, for making plant pots or bird feeders.<br><b>c.</b> Second, the Youth Union should hold regular sessions to teach students how to recycle properly.<br><b>d.</b> This report suggests three main solutions to the problem of single-use products in our school.<br><b>e.</b> First, we suggest that the school should provide more recycling bins.<br><b>f.</b> Reusing and recycling single-use plastics will lead to a greener school environment and help promote a green lifestyle among young people.</div>",
        "options": [
          "A. d – e – c – f – b – a",
          "B. d – e – c – b – a – f",
          "C. d – e – b – c – f – a",
          "D. d – e – c – b – f – a"
        ],
        "correct": 3,
        "explain": "Thứ tự sắp xếp logic chuẩn của một bản báo cáo đề xuất giải pháp:<br>• <b>d</b> (Mở đầu): Nêu mục đích báo cáo về 3 giải pháp xử lý đồ nhựa dùng một lần.<br>• <b>e</b>: Giải pháp 1 (First...).<br>• <b>c</b>: Giải pháp 2 (Second...).<br>• <b>b</b>: Giải pháp 3 (Third...).<br>• <b>f</b>: Đánh giá tác động tích cực của việc tái chế đối với môi trường học đường.<br>• <b>a</b> (Kết luận): Lời kiến nghị hành động khép lại báo cáo (Therefore...).<br>➡️ Thứ tự đúng là: <b>d – e – c – b – f – a</b>."
      },
      {
        "id": 221,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một đoạn văn hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Second, it prevents environmental destruction by promoting sustainable practices.<br><b>b.</b> Making small changes today can lead to a more sustainable and prosperous tomorrow.<br><b>c.</b> By reducing single-use items, we conserve resources and minimise waste.<br><b>d.</b> Going green offers numerous advantages for both individuals and the planet.<br><b>e.</b> First, it helps reduce our carbon footprint, lessening the harm caused by greenhouse gases.<br><b>f.</b> Additionally, going green raises awareness about environmental issues, fostering a sense of responsibility towards the Earth.<br><b>g.</b> Finally, embracing eco-friendly habits not only benefits the environment but also promotes healthier lifestyles for ourselves and future generations.</div>",
        "options": [
          "A. d – e – a – b – c – f – g",
          "B. b – d – e – a – c – f – g",
          "C. d – e – a – c – f – g – b",
          "D. d – e – a – c – g – f – b"
        ],
        "correct": 2,
        "explain": "Thứ tự sắp xếp logic của một đoạn văn nghị luận:<br>• <b>d</b>: Câu mở đầu chủ đề (Going green offers numerous advantages...).<br>• <b>e</b>: Lợi ích thứ nhất (First, it helps reduce our carbon footprint...).<br>• <b>a</b>: Lợi ích thứ hai (Second, it prevents environmental destruction...).<br>• <b>c</b>: Bổ sung diễn giải hành động giảm đồ dùng một lần.<br>• <b>f</b>: Ý bổ trợ tiếp theo (Additionally, going green raises awareness...).<br>• <b>g</b>: Lợi ích cuối cùng (Finally, embracing eco-friendly habits...).<br>• <b>b</b>: Câu kết đúc kết thông điệp tương lai (Making small changes today...).<br>➡️ Thứ tự chuẩn: <b>d – e – a – c – f – g – b</b>."
      }
    ]
  },
  {
    "id": "eng_unit3_cloze",
    "title": "Unit 3: Điền Từ Đoạn Văn Lễ Hội (5 câu)",
    "icon": "🏮",
    "category": "unit3",
    "questions": [
      {
        "id": 222,
        "task": "u3_cloze",
        "question": "<b>Read the following passage and choose the best word for blank (22):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Festivals come with many traditions that bring happiness and joy. However, some of these <b>(22) _______</b> may not be environmentally friendly, and may need to be changed for a sustainable future. In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose. The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food. In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div><br><b>Chọn từ thích hợp cho vị trí (22):</b>",
        "options": [
          "A. wishes",
          "B. customs",
          "C. structures",
          "D. patterns"
        ],
        "correct": 1,
        "explain": "Danh từ: <b>'customs'</b> (phong tục, tập quán). 'traditions' (truyền thống) đi liền với 'customs' (phong tục). Một số phong tục lễ hội này có thể không thân thiện với môi trường."
      },
      {
        "id": 223,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (23) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose...</div>",
        "options": [
          "A. scenario",
          "B. viewer",
          "C. audience",
          "D. sight"
        ],
        "correct": 3,
        "explain": "Cụm danh từ: <b>'a spectacular sight'</b> mang nghĩa là một cảnh tượng ngoạn mục, đẹp mắt (khi thả bóng bay hoặc đèn trời)."
      },
      {
        "id": 224,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (24) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food...</div>",
        "options": [
          "A. replace",
          "B. imagine",
          "C. accept",
          "D. mistake"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'mistake A for B'</b> mang nghĩa là nhầm lẫn cái A thành cái B ('mistake the balloons for food': nhiều loài động vật nhầm bóng bay là thức ăn)."
      },
      {
        "id": 225,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (25) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually (26) _______ a lot of harmful chemicals into the air...</div>",
        "options": [
          "A. watch",
          "B. learn",
          "C. miss",
          "D. think"
        ],
        "correct": 2,
        "explain": "Cụm từ: <b>'miss'</b> (bỏ lỡ cơ hội xem). 'displays that people won't want to miss' (những màn pháo hoa đặc sắc mà mọi người không muốn bỏ lỡ)."
      },
      {
        "id": 226,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (26) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div>",
        "options": [
          "A. recycle",
          "B. reuse",
          "C. release",
          "D. revise"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'release'</b> (thải ra, phát tán). Pháo hoa thải ra rất nhiều hóa chất độc hại vào không khí ('release a lot of harmful chemicals into the air')."
      }
    ]
  },
  {
    "id": "eng_unit3_reading",
    "title": "Unit 3: Đọc Hiểu Thành Phố Xanh Stockholm (5 câu)",
    "icon": "🏙️",
    "category": "unit3",
    "questions": [
      {
        "id": 227,
        "task": "u3_reading",
        "question": "<b>Read the passage and choose the best answer:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Stockholm, Sweden stands out as a green city due to its eco-friendly initiatives. Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills. Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to minimise carbon emissions. These efforts contribute to cleaner air and a healthier environment. Thirdly, Stockholm promotes the use of reusable items and discourages single-use plastics. Citizens are encouraged to bring their bags and containers while shopping to reduce plastic waste. These eco-conscious practices make Stockholm a model for sustainability and inspire other cities worldwide.<br><br>With its commitment to environmental protection and innovative approaches to waste reduction, Stockholm sets a high standard for green living and serves as an example of how cities can prioritise sustainability in urban development.</div><br><b>Question 27: Which best serves as the title for the passage?</b>",
        "options": [
          "A. Stockholm – the Friendliest City",
          "B. Stockholm – the Happiest City",
          "C. Stockholm – a Green City",
          "D. Stockholm – a Success Story"
        ],
        "correct": 2,
        "explain": "Tiêu đề phù hợp nhất là: <b>'Stockholm – a Green City'</b> (Stockholm – Một thành phố xanh). Toàn bộ bài đọc tập trung giới thiệu các sáng kiến thân thiện với môi trường của Stockholm như quản lý rác thải, giao thông xanh, tái chế và giảm rác thải nhựa."
      },
      {
        "id": 228,
        "task": "u3_reading",
        "question": "<b>According to paragraph 1, what does Stockholm put an emphasis on?</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills...</div>",
        "options": [
          "A. landfill sites",
          "B. recycling and composting",
          "C. e-waste management",
          "D. reusing and recycling"
        ],
        "correct": 1,
        "explain": "Dẫn chứng trong đoạn 1: 'It emphasises <b>recycling and composting</b> to reduce the amount of waste sent to landfills.' (Thành phố chú trọng vào việc tái chế và ủ phân hữu cơ)."
      },
      {
        "id": 229,
        "task": "u3_reading",
        "question": "<b>The word 'minimise' in paragraph 2 is OPPOSITE in meaning to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to <b>minimise</b> carbon emissions...</div>",
        "options": [
          "A. prevent",
          "B. reduce",
          "C. control",
          "D. increase"
        ],
        "correct": 3,
        "explain": "Từ: <b>minimise</b> (giảm thiểu đến mức tối đa) >< <b>increase</b> (làm tăng lên). Các từ còn lại: reduce (giảm - đồng nghĩa), prevent (ngăn chặn), control (kiểm soát)."
      },
      {
        "id": 230,
        "task": "u3_reading",
        "question": "<b>The word 'their' in paragraph 2 refers to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Citizens are encouraged to bring <b>their</b> bags and containers while shopping to reduce plastic waste...</div>",
        "options": [
          "A. bags",
          "B. containers",
          "C. practices",
          "D. citizens"
        ],
        "correct": 3,
        "explain": "Dẫn chứng trong đoạn 2: '<b>Citizens</b> are encouraged to bring <b>their</b> bags and containers...' ➡️ Đại từ sở hữu 'their' thay thế cho danh từ số nhiều đứng ngay trước là <b>citizens</b> (người dân thành phố)."
      },
      {
        "id": 231,
        "task": "u3_reading",
        "question": "<b>Which of the following is NOT true according to the passage?</b>",
        "options": [
          "A. Single-use plastics are more popular than reusable items in Stockholm.",
          "B. City dwellers in Stockholm are encouraged to cycle or use public transport.",
          "C. Stockholm is a prime example of how a city can prioritise sustainability.",
          "D. Stockholm adopts innovative approaches to reduce the amount of waste."
        ],
        "correct": 0,
        "explain": "Thông tin sai là đáp án <b>A</b>. Trong đoạn 2 nêu rõ: 'Stockholm promotes the use of reusable items and discourages single-use plastics' (Stockholm khuyến khích dùng đồ tái sử dụng và không khuyến khích đồ nhựa dùng một lần). Do đó nói đồ nhựa dùng một lần phổ biến hơn là sai sự thật."
      }
    ]
  },
  {
    "id": "eng_writing_all",
    "title": "✍️ Luyện Viết Câu Ghép Thẻ Từ (Trọn Bộ 28 câu)",
    "icon": "🧩",
    "category": "writing",
    "questions": [
      {
        "id": 301,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 1: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>My father bought ____ new car yesterday, and ____ car is extremely fuel-efficient.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "My father bought [ ... ] new car yesterday, and [ ... ] car is extremely fuel-efficient.",
        "targetWords": [
          "a",
          "the"
        ],
        "distractors": [
          "an",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "My father bought a new car yesterday, and the car is extremely fuel-efficient.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'a'</b> trước danh từ số ít 'new car' được nhắc đến lần đầu.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'car' vì chiếc xe đã được xác định rõ (chính là chiếc xe bố vừa mua hôm qua).",
        "hint": "Quy tắc: Nhắc lần đầu dùng 'a/an', nhắc lại lần 2 đã xác định dùng 'the'."
      },
      {
        "id": 302,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 2: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>English is spoken as ____ international language in many parts of ____ world.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "English is spoken as [ ... ] international language in many parts of [ ... ] world.",
        "targetWords": [
          "an",
          "the"
        ],
        "distractors": [
          "a",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "English is spoken as an international language in many parts of the world.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'an'</b> trước 'international language' bắt đầu bằng nguyên âm /ɪ/.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'world' vì 'the world' là danh từ chỉ vật thể duy nhất.",
        "hint": "Quy tắc: Trước nguyên âm dùng 'an'; 'the world' luôn có mạo từ 'the'."
      },
      {
        "id": 303,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 3: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>He decided to drop out of university to start his own business. This shocked all his family members.<br>➔ <i>He decided to drop out of university to start his own business, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "He decided to drop out of university to start his own business, [ ... ]",
        "targetWords": [
          "which",
          "shocked",
          "all his",
          "family members."
        ],
        "distractors": [
          "that",
          "who",
          "was shocking",
          "had shocked"
        ],
        "fullSentence": "He decided to drop out of university to start his own business, which shocked all his family members.",
        "explain": "Mệnh đề quan hệ không xác định sử dụng đại từ quan hệ <b>', which'</b> đứng sau dấu phẩy để thay thế cho toàn bộ sự việc ở mệnh đề trước ('việc anh ấy bỏ đại học'). Tuyệt đối không dùng 'that' sau dấu phẩy.",
        "hint": "Công thức: Mệnh đề 1, which + V (chia theo ngôi số ít) + O."
      },
      {
        "id": 304,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>The city authorities planted thousands of trees along main streets. This significantly reduced air pollution.<br>➔ <i>The city authorities planted thousands of trees along main streets, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "The city authorities planted thousands of trees along main streets, [ ... ]",
        "targetWords": [
          "which",
          "significantly reduced",
          "air pollution."
        ],
        "distractors": [
          "that",
          "who",
          "reducing",
          "was reducing"
        ],
        "fullSentence": "The city authorities planted thousands of trees along main streets, which significantly reduced air pollution.",
        "explain": "Đại từ quan hệ <b>', which'</b> thay thế cho cả hành động 'chính quyền thành phố trồng hàng ngàn cây xanh dọc các trục đường chính'.",
        "hint": "Công thức: S + V + O, which + V_ed/V_s + O."
      },
      {
        "id": 305,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 5: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>When I (arrive) ____ at the meeting room yesterday, the director (deliver) ____ a speech.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "When I [ ... ] at the meeting room yesterday, the director [ ... ] a speech.",
        "targetWords": [
          "arrived",
          "was delivering"
        ],
        "distractors": [
          "was arriving",
          "were delivering",
          "delivered",
          "had delivered"
        ],
        "fullSentence": "When I arrived at the meeting room yesterday, the director was delivering a speech.",
        "explain": "Hành động giám đốc đang phát biểu là hành động dài đang diễn ra trong quá khứ ➔ chia <b>Quá khứ tiếp diễn (was delivering)</b>. Hành động tôi bước vào phòng họp là hành động ngắn chen ngang ➔ chia <b>Quá khứ đơn (arrived)</b>.",
        "hint": "Công thức: When + S + V(quá khứ đơn), S + was/were + V-ing."
      },
      {
        "id": 306,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 6: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>While they (discuss) ____ urban housing problems, the electricity suddenly (go) ____ out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While they [ ... ] urban housing problems, the electricity suddenly [ ... ] out.",
        "targetWords": [
          "were discussing",
          "went"
        ],
        "distractors": [
          "was discussing",
          "discussed",
          "was going",
          "gone"
        ],
        "fullSentence": "While they were discussing urban housing problems, the electricity suddenly went out.",
        "explain": "Họ đang thảo luận (hành động dài đang xảy ra) ➔ chia <b>were discussing</b> (chủ ngữ 'they' số nhiều). Đèn đột ngột tắt (hành động ngắn chen ngang) ➔ chia <b>went out</b> (Quá khứ đơn của go).",
        "hint": "Công thức: While + S + was/were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 307,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 7: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>She (not watch) ____ television when her mother (call) ____ her last night.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "She [ ... ] television when her mother [ ... ] her last night.",
        "targetWords": [
          "was not watching",
          "called"
        ],
        "distractors": [
          "did not watch",
          "were not watching",
          "was calling",
          "calls"
        ],
        "fullSentence": "She was not watching television when her mother called her last night.",
        "explain": "Tại thời điểm mẹ cô ấy gọi điện (hành động ngắn ở quá khứ đơn: 'called'), cô ấy đang không xem tivi (hành động tiếp diễn phủ định: <b>'was not watching'</b> với chủ ngữ số ít 'She').",
        "hint": "Công thức phủ định: S(số ít) + was not + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 308,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 8: Chia thì động từ trong ngoặc ở thể nghi vấn</b><br>What ____ you (do) ____ at 8 PM yesterday?",
        "prompt": "Lôi hoặc chạm các từ tạo thành câu hỏi thì Quá khứ tiếp diễn:",
        "cues": "What [ ... ] you [ ... ] at 8 PM yesterday?",
        "targetWords": [
          "were",
          "doing"
        ],
        "distractors": [
          "did",
          "do",
          "was",
          "are"
        ],
        "fullSentence": "What were you doing at 8 PM yesterday?",
        "explain": "Có mốc thời gian cụ thể trong quá khứ ('at 8 PM yesterday') ➔ dùng thì Quá khứ tiếp diễn. Thể nghi vấn với chủ ngữ 'you': <b>What + were + you + V-ing (doing)?</b>",
        "hint": "Công thức câu hỏi: Từ để hỏi (Wh-) + was/were + S + V-ing + thời điểm quá khứ?"
      },
      {
        "id": 309,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 9: Viết lại câu dùng cụm động từ 'work out'</b><br>We should find some solutions to reducing plastic pollution. (Rewrite using: work out)<br>➔ <i>We should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với cụm từ 'work out':",
        "cues": "[ ... ]",
        "targetWords": [
          "We should",
          "work out",
          "some solutions",
          "to reducing",
          "plastic pollution."
        ],
        "distractors": [
          "solve",
          "to reduce",
          "worked out",
          "working"
        ],
        "fullSentence": "We should work out some solutions to reducing plastic pollution.",
        "explain": "Cụm động từ <b>'work out'</b> = 'find / develop' (tìm ra, nghĩ ra). Cấu trúc: 'solutions to + V-ing' (giải pháp cho việc gì).",
        "hint": "Cụm từ: work out = find (tìm ra); solution to + V-ing."
      },
      {
        "id": 310,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 10: Viết lại câu dùng cụm động từ 'look up to'</b><br>She respects her grandfather very much because of his great contributions to the community. (Rewrite using: look up to)<br>➔ <i>She ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với 'look up to':",
        "cues": "[ ... ]",
        "targetWords": [
          "She looks up to",
          "her grandfather",
          "very much",
          "because of",
          "his great contributions",
          "to the community."
        ],
        "distractors": [
          "look up to",
          "looked up to",
          "respects",
          "with"
        ],
        "fullSentence": "She looks up to her grandfather very much because of his great contributions to the community.",
        "explain": "Cụm động từ: <b>'look up to someone'</b> = 'respect someone' (ngưỡng mộ, kính trọng ai). Do chủ ngữ là 'She' nên động từ chia ở thì hiện tại đơn là <b>'looks up to'</b>.",
        "hint": "Cụm từ: S(số ít) + looks up to + O = S + respects + O."
      },
      {
        "id": 311,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>I saw ______ unusual bird in the garden.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I saw [ ... ] unusual bird in the garden.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "I saw an unusual bird in the garden.",
        "explain": "Dùng mạo từ không xác định <b>'an'</b> trước cụm danh từ số ít 'unusual bird' vì từ 'unusual' bắt đầu bằng nguyên âm /ʌ/.",
        "hint": "Quy tắc: Danh từ số ít nhắc lần đầu bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 312,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>The sun is shining brightly. ______ sun makes the day warm.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "The sun is shining brightly. [ ... ] sun makes the day warm.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "The sun is shining brightly. The sun makes the day warm.",
        "explain": "Mặt trời là vật thể duy nhất trong tự nhiên, đồng thời đã được nhắc đến ở câu trước ➔ bắt buộc dùng mạo từ xác định <b>'The'</b>.",
        "hint": "Quy tắc: Danh từ duy nhất trong tự nhiên (Sun, Moon, Earth...) luôn dùng 'The'."
      },
      {
        "id": 313,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a recycling club. It meets every Friday.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a recycling club",
          "which meets",
          "every Friday."
        ],
        "distractors": [
          "who meets",
          "where meets",
          "that meeting",
          "met"
        ],
        "fullSentence": "Our school has a recycling club which meets every Friday.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho danh từ chỉ vật 'a recycling club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V + ..."
      },
      {
        "id": 314,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>They planted 100 trees last weekend. The activity was part of a green campaign.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "They planted 100 trees",
          "last weekend,",
          "which was part of",
          "a green campaign."
        ],
        "distractors": [
          "that was",
          "who was",
          "which were",
          "being"
        ],
        "fullSentence": "They planted 100 trees last weekend, which was part of a green campaign.",
        "explain": "Mệnh đề quan hệ không xác định với <b>', which was...'</b> thay thế cho toàn bộ sự việc trồng 100 cây cuối tuần trước.",
        "hint": "Công thức: Mệnh đề sự việc, which was + N/Adj..."
      },
      {
        "id": 315,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (walk) home, we __________ (see) a poster about the festival.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] home, we [ ... ] a poster about the festival.",
        "targetWords": [
          "were walking",
          "saw"
        ],
        "distractors": [
          "walked",
          "was walking",
          "were seeing",
          "seen"
        ],
        "fullSentence": "While we were walking home, we saw a poster about the festival.",
        "explain": "Hành động chúng tôi đang đi bộ về nhà (kéo dài trong quá khứ ➔ <b>were walking</b>) thì nhìn thấy tấm áp phích (hành động ngắn chen vào ➔ <b>saw</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 316,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the lights __________ (go) out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the lights [ ... ] out.",
        "targetWords": [
          "was reading",
          "went"
        ],
        "distractors": [
          "were reading",
          "read",
          "was going",
          "gone"
        ],
        "fullSentence": "I was reading a biography when the lights went out.",
        "explain": "Tôi đang đọc sách tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì đèn bị tắt (hành động xen ngang ➔ <b>went out</b>).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 317,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 8 p.m. yesterday, the students __________ (practise) their cultural performance.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 8 p.m. yesterday, the students [ ... ] their cultural performance.",
        "targetWords": [
          "were practising"
        ],
        "distractors": [
          "was practising",
          "practised",
          "are practising",
          "have practised"
        ],
        "fullSentence": "At 8 p.m. yesterday, the students were practising their cultural performance.",
        "explain": "Có thời điểm xác định cụ thể trong quá khứ ('At 8 p.m. yesterday'), chủ ngữ số nhiều 'the students' ➔ chia thì Quá khứ tiếp diễn <b>'were practising'</b>.",
        "hint": "Công thức: At + giờ cụ thể + thời gian quá khứ: S(số nhiều) + were + V-ing."
      },
      {
        "id": 318,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 8: Chia thì động từ trong ngoặc</b><br>My sister __________ (visit) the history museum last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My sister [ ... ] the history museum last month.",
        "targetWords": [
          "visited"
        ],
        "distractors": [
          "was visiting",
          "visits",
          "has visited",
          "visit"
        ],
        "fullSentence": "My sister visited the history museum last month.",
        "explain": "Có trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'visited'</b>.",
        "hint": "Dấu hiệu thì Quá khứ đơn: last month / last week / yesterday / in + năm quá khứ ➔ V-ed."
      },
      {
        "id": 319,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 9: Viết lại câu dùng cụm động từ 'GIVE UP'</b><br>You should stop wasting electricity. (Rewrite using: GIVE UP)<br>➔ <i>You should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "You should",
          "give up",
          "wasting electricity."
        ],
        "distractors": [
          "give off",
          "gave up",
          "to waste",
          "stopped"
        ],
        "fullSentence": "You should give up wasting electricity.",
        "explain": "Cụm động từ: <b>'give up + V-ing'</b> = 'stop + V-ing' (từ bỏ, ngừng hẳn làm một thói quen/việc gì đó).",
        "hint": "Công thức: stop + V-ing ➔ give up + V-ing."
      },
      {
        "id": 320,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 10: Viết lại câu dùng cụm động từ 'LOOK AFTER'</b><br>Please take care of the plants while I am away. (Rewrite using: LOOK AFTER)<br>➔ <i>Please ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Please",
          "look after",
          "the plants",
          "while I am away."
        ],
        "distractors": [
          "look for",
          "looked after",
          "looking after",
          "take after"
        ],
        "fullSentence": "Please look after the plants while I am away.",
        "explain": "Cụm động từ: <b>'look after'</b> = 'take care of' (chăm sóc, trông nom cây cối/người thân).",
        "hint": "Công thức: take care of + O ➔ look after + O."
      },
      {
        "id": 321,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>My brother saw ______ amazing documentary about Jane Goodall.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "My brother saw [ ... ] amazing documentary about Jane Goodall.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "My brother saw an amazing documentary about Jane Goodall.",
        "explain": "Dùng <b>'an'</b> trước tính từ 'amazing' vì bắt đầu bằng nguyên âm /ə/ ('an amazing documentary').",
        "hint": "Quy tắc: Trước tính từ/danh từ bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 322,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>I bought a book yesterday. ______ book is about Vietnamese traditions.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I bought a book yesterday. [ ... ] book is about Vietnamese traditions.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "I bought a book yesterday. The book is about Vietnamese traditions.",
        "explain": "Quyển sách đã được đề cập ở câu trước ('a book yesterday'), sang câu thứ hai người nghe và người nói đều đã xác định rõ nên dùng <b>'The'</b>.",
        "hint": "Quy tắc: Nhắc lại danh từ đã nói ở câu trước ➔ dùng mạo từ 'The'."
      },
      {
        "id": 323,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a green club. It organises monthly clean-up days.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a green club",
          "which organises",
          "monthly clean-up days."
        ],
        "distractors": [
          "who organises",
          "that organising",
          "which organise",
          "organised"
        ],
        "fullSentence": "Our school has a green club which organises monthly clean-up days.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'a green club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V(chia theo N) + ..."
      },
      {
        "id": 324,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 4: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>The students visited an exhibition. It celebrated different cultures.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "The students visited",
          "an exhibition",
          "which celebrated",
          "different cultures."
        ],
        "distractors": [
          "who celebrated",
          "where celebrated",
          "celebrating",
          "which celebrate"
        ],
        "fullSentence": "The students visited an exhibition which celebrated different cultures.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'an exhibition' làm chủ ngữ mệnh đề quan hệ.",
        "hint": "Công thức: S + V + an exhibition + which + celebrated + ..."
      },
      {
        "id": 325,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (prepare) the display, our teacher __________ (arrive).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] the display, our teacher [ ... ].",
        "targetWords": [
          "were preparing",
          "arrived"
        ],
        "distractors": [
          "was preparing",
          "prepared",
          "was arriving",
          "were arriving"
        ],
        "fullSentence": "While we were preparing the display, our teacher arrived.",
        "explain": "Chúng tôi đang chuẩn bị gian trưng bày (hành động kéo dài ➔ <b>were preparing</b>) thì giáo viên bước đến (hành động ngắn chen vào ➔ <b>arrived</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 326,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the phone __________ (ring).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the phone [ ... ].",
        "targetWords": [
          "was reading",
          "rang"
        ],
        "distractors": [
          "were reading",
          "read",
          "was ringing",
          "rung"
        ],
        "fullSentence": "I was reading a biography when the phone rang.",
        "explain": "Tôi đang đọc tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì điện thoại reo (hành động bất ngờ xen vào ➔ <b>rang</b>, quá khứ của ring).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn: rang)."
      },
      {
        "id": 327,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 9 a.m. yesterday, the volunteers __________ (plant) trees in the school garden.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 9 a.m. yesterday, the volunteers [ ... ] trees in the school garden.",
        "targetWords": [
          "were planting"
        ],
        "distractors": [
          "was planting",
          "planted",
          "have planted",
          "are planting"
        ],
        "fullSentence": "At 9 a.m. yesterday, the volunteers were planting trees in the school garden.",
        "explain": "Tại thời điểm xác định trong quá khứ ('At 9 a.m. yesterday'), chủ ngữ số nhiều 'the volunteers' ➔ chia Quá khứ tiếp diễn <b>'were planting'</b>.",
        "hint": "Công thức: At + giờ cụ thể + yesterday: S(số nhiều) + were + V-ing."
      },
      {
        "id": 328,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 8: Chia thì động từ trong ngoặc</b><br>My class __________ (take) part in a cultural festival last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My class [ ... ] part in a cultural festival last month.",
        "targetWords": [
          "took"
        ],
        "distractors": [
          "was taking",
          "takes",
          "has taken",
          "taken"
        ],
        "fullSentence": "My class took part in a cultural festival last month.",
        "explain": "Trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'took'</b> (quá khứ của take).",
        "hint": "Dấu hiệu quá khứ: last month ➔ take chuyển thành took."
      }
    ]
  },
  {
    "id": "eng_writing_p1",
    "title": "✍️ Viết Câu Part 1: Mạo Từ, Which, QKĐ/QKTD (10 câu)",
    "icon": "📝",
    "category": "writing",
    "questions": [
      {
        "id": 301,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 1: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>My father bought ____ new car yesterday, and ____ car is extremely fuel-efficient.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "My father bought [ ... ] new car yesterday, and [ ... ] car is extremely fuel-efficient.",
        "targetWords": [
          "a",
          "the"
        ],
        "distractors": [
          "an",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "My father bought a new car yesterday, and the car is extremely fuel-efficient.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'a'</b> trước danh từ số ít 'new car' được nhắc đến lần đầu.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'car' vì chiếc xe đã được xác định rõ (chính là chiếc xe bố vừa mua hôm qua).",
        "hint": "Quy tắc: Nhắc lần đầu dùng 'a/an', nhắc lại lần 2 đã xác định dùng 'the'."
      },
      {
        "id": 302,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 2: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>English is spoken as ____ international language in many parts of ____ world.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "English is spoken as [ ... ] international language in many parts of [ ... ] world.",
        "targetWords": [
          "an",
          "the"
        ],
        "distractors": [
          "a",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "English is spoken as an international language in many parts of the world.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'an'</b> trước 'international language' bắt đầu bằng nguyên âm /ɪ/.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'world' vì 'the world' là danh từ chỉ vật thể duy nhất.",
        "hint": "Quy tắc: Trước nguyên âm dùng 'an'; 'the world' luôn có mạo từ 'the'."
      },
      {
        "id": 303,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 3: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>He decided to drop out of university to start his own business. This shocked all his family members.<br>➔ <i>He decided to drop out of university to start his own business, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "He decided to drop out of university to start his own business, [ ... ]",
        "targetWords": [
          "which",
          "shocked",
          "all his",
          "family members."
        ],
        "distractors": [
          "that",
          "who",
          "was shocking",
          "had shocked"
        ],
        "fullSentence": "He decided to drop out of university to start his own business, which shocked all his family members.",
        "explain": "Mệnh đề quan hệ không xác định sử dụng đại từ quan hệ <b>', which'</b> đứng sau dấu phẩy để thay thế cho toàn bộ sự việc ở mệnh đề trước ('việc anh ấy bỏ đại học'). Tuyệt đối không dùng 'that' sau dấu phẩy.",
        "hint": "Công thức: Mệnh đề 1, which + V (chia theo ngôi số ít) + O."
      },
      {
        "id": 304,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>The city authorities planted thousands of trees along main streets. This significantly reduced air pollution.<br>➔ <i>The city authorities planted thousands of trees along main streets, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "The city authorities planted thousands of trees along main streets, [ ... ]",
        "targetWords": [
          "which",
          "significantly reduced",
          "air pollution."
        ],
        "distractors": [
          "that",
          "who",
          "reducing",
          "was reducing"
        ],
        "fullSentence": "The city authorities planted thousands of trees along main streets, which significantly reduced air pollution.",
        "explain": "Đại từ quan hệ <b>', which'</b> thay thế cho cả hành động 'chính quyền thành phố trồng hàng ngàn cây xanh dọc các trục đường chính'.",
        "hint": "Công thức: S + V + O, which + V_ed/V_s + O."
      },
      {
        "id": 305,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 5: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>When I (arrive) ____ at the meeting room yesterday, the director (deliver) ____ a speech.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "When I [ ... ] at the meeting room yesterday, the director [ ... ] a speech.",
        "targetWords": [
          "arrived",
          "was delivering"
        ],
        "distractors": [
          "was arriving",
          "were delivering",
          "delivered",
          "had delivered"
        ],
        "fullSentence": "When I arrived at the meeting room yesterday, the director was delivering a speech.",
        "explain": "Hành động giám đốc đang phát biểu là hành động dài đang diễn ra trong quá khứ ➔ chia <b>Quá khứ tiếp diễn (was delivering)</b>. Hành động tôi bước vào phòng họp là hành động ngắn chen ngang ➔ chia <b>Quá khứ đơn (arrived)</b>.",
        "hint": "Công thức: When + S + V(quá khứ đơn), S + was/were + V-ing."
      },
      {
        "id": 306,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 6: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>While they (discuss) ____ urban housing problems, the electricity suddenly (go) ____ out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While they [ ... ] urban housing problems, the electricity suddenly [ ... ] out.",
        "targetWords": [
          "were discussing",
          "went"
        ],
        "distractors": [
          "was discussing",
          "discussed",
          "was going",
          "gone"
        ],
        "fullSentence": "While they were discussing urban housing problems, the electricity suddenly went out.",
        "explain": "Họ đang thảo luận (hành động dài đang xảy ra) ➔ chia <b>were discussing</b> (chủ ngữ 'they' số nhiều). Đèn đột ngột tắt (hành động ngắn chen ngang) ➔ chia <b>went out</b> (Quá khứ đơn của go).",
        "hint": "Công thức: While + S + was/were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 307,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 7: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>She (not watch) ____ television when her mother (call) ____ her last night.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "She [ ... ] television when her mother [ ... ] her last night.",
        "targetWords": [
          "was not watching",
          "called"
        ],
        "distractors": [
          "did not watch",
          "were not watching",
          "was calling",
          "calls"
        ],
        "fullSentence": "She was not watching television when her mother called her last night.",
        "explain": "Tại thời điểm mẹ cô ấy gọi điện (hành động ngắn ở quá khứ đơn: 'called'), cô ấy đang không xem tivi (hành động tiếp diễn phủ định: <b>'was not watching'</b> với chủ ngữ số ít 'She').",
        "hint": "Công thức phủ định: S(số ít) + was not + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 308,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 8: Chia thì động từ trong ngoặc ở thể nghi vấn</b><br>What ____ you (do) ____ at 8 PM yesterday?",
        "prompt": "Lôi hoặc chạm các từ tạo thành câu hỏi thì Quá khứ tiếp diễn:",
        "cues": "What [ ... ] you [ ... ] at 8 PM yesterday?",
        "targetWords": [
          "were",
          "doing"
        ],
        "distractors": [
          "did",
          "do",
          "was",
          "are"
        ],
        "fullSentence": "What were you doing at 8 PM yesterday?",
        "explain": "Có mốc thời gian cụ thể trong quá khứ ('at 8 PM yesterday') ➔ dùng thì Quá khứ tiếp diễn. Thể nghi vấn với chủ ngữ 'you': <b>What + were + you + V-ing (doing)?</b>",
        "hint": "Công thức câu hỏi: Từ để hỏi (Wh-) + was/were + S + V-ing + thời điểm quá khứ?"
      },
      {
        "id": 309,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 9: Viết lại câu dùng cụm động từ 'work out'</b><br>We should find some solutions to reducing plastic pollution. (Rewrite using: work out)<br>➔ <i>We should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với cụm từ 'work out':",
        "cues": "[ ... ]",
        "targetWords": [
          "We should",
          "work out",
          "some solutions",
          "to reducing",
          "plastic pollution."
        ],
        "distractors": [
          "solve",
          "to reduce",
          "worked out",
          "working"
        ],
        "fullSentence": "We should work out some solutions to reducing plastic pollution.",
        "explain": "Cụm động từ <b>'work out'</b> = 'find / develop' (tìm ra, nghĩ ra). Cấu trúc: 'solutions to + V-ing' (giải pháp cho việc gì).",
        "hint": "Cụm từ: work out = find (tìm ra); solution to + V-ing."
      },
      {
        "id": 310,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 10: Viết lại câu dùng cụm động từ 'look up to'</b><br>She respects her grandfather very much because of his great contributions to the community. (Rewrite using: look up to)<br>➔ <i>She ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với 'look up to':",
        "cues": "[ ... ]",
        "targetWords": [
          "She looks up to",
          "her grandfather",
          "very much",
          "because of",
          "his great contributions",
          "to the community."
        ],
        "distractors": [
          "look up to",
          "looked up to",
          "respects",
          "with"
        ],
        "fullSentence": "She looks up to her grandfather very much because of his great contributions to the community.",
        "explain": "Cụm động từ: <b>'look up to someone'</b> = 'respect someone' (ngưỡng mộ, kính trọng ai). Do chủ ngữ là 'She' nên động từ chia ở thì hiện tại đơn là <b>'looks up to'</b>.",
        "hint": "Cụm từ: S(số ít) + looks up to + O = S + respects + O."
      }
    ]
  },
  {
    "id": "eng_writing_p2",
    "title": "✍️ Viết Câu Part 2: Mạo Từ, Which, Phrasal Verbs (10 câu)",
    "icon": "🎯",
    "category": "writing",
    "questions": [
      {
        "id": 311,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>I saw ______ unusual bird in the garden.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I saw [ ... ] unusual bird in the garden.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "I saw an unusual bird in the garden.",
        "explain": "Dùng mạo từ không xác định <b>'an'</b> trước cụm danh từ số ít 'unusual bird' vì từ 'unusual' bắt đầu bằng nguyên âm /ʌ/.",
        "hint": "Quy tắc: Danh từ số ít nhắc lần đầu bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 312,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>The sun is shining brightly. ______ sun makes the day warm.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "The sun is shining brightly. [ ... ] sun makes the day warm.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "The sun is shining brightly. The sun makes the day warm.",
        "explain": "Mặt trời là vật thể duy nhất trong tự nhiên, đồng thời đã được nhắc đến ở câu trước ➔ bắt buộc dùng mạo từ xác định <b>'The'</b>.",
        "hint": "Quy tắc: Danh từ duy nhất trong tự nhiên (Sun, Moon, Earth...) luôn dùng 'The'."
      },
      {
        "id": 313,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a recycling club. It meets every Friday.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a recycling club",
          "which meets",
          "every Friday."
        ],
        "distractors": [
          "who meets",
          "where meets",
          "that meeting",
          "met"
        ],
        "fullSentence": "Our school has a recycling club which meets every Friday.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho danh từ chỉ vật 'a recycling club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V + ..."
      },
      {
        "id": 314,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>They planted 100 trees last weekend. The activity was part of a green campaign.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "They planted 100 trees",
          "last weekend,",
          "which was part of",
          "a green campaign."
        ],
        "distractors": [
          "that was",
          "who was",
          "which were",
          "being"
        ],
        "fullSentence": "They planted 100 trees last weekend, which was part of a green campaign.",
        "explain": "Mệnh đề quan hệ không xác định với <b>', which was...'</b> thay thế cho toàn bộ sự việc trồng 100 cây cuối tuần trước.",
        "hint": "Công thức: Mệnh đề sự việc, which was + N/Adj..."
      },
      {
        "id": 315,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (walk) home, we __________ (see) a poster about the festival.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] home, we [ ... ] a poster about the festival.",
        "targetWords": [
          "were walking",
          "saw"
        ],
        "distractors": [
          "walked",
          "was walking",
          "were seeing",
          "seen"
        ],
        "fullSentence": "While we were walking home, we saw a poster about the festival.",
        "explain": "Hành động chúng tôi đang đi bộ về nhà (kéo dài trong quá khứ ➔ <b>were walking</b>) thì nhìn thấy tấm áp phích (hành động ngắn chen vào ➔ <b>saw</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 316,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the lights __________ (go) out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the lights [ ... ] out.",
        "targetWords": [
          "was reading",
          "went"
        ],
        "distractors": [
          "were reading",
          "read",
          "was going",
          "gone"
        ],
        "fullSentence": "I was reading a biography when the lights went out.",
        "explain": "Tôi đang đọc sách tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì đèn bị tắt (hành động xen ngang ➔ <b>went out</b>).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 317,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 8 p.m. yesterday, the students __________ (practise) their cultural performance.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 8 p.m. yesterday, the students [ ... ] their cultural performance.",
        "targetWords": [
          "were practising"
        ],
        "distractors": [
          "was practising",
          "practised",
          "are practising",
          "have practised"
        ],
        "fullSentence": "At 8 p.m. yesterday, the students were practising their cultural performance.",
        "explain": "Có thời điểm xác định cụ thể trong quá khứ ('At 8 p.m. yesterday'), chủ ngữ số nhiều 'the students' ➔ chia thì Quá khứ tiếp diễn <b>'were practising'</b>.",
        "hint": "Công thức: At + giờ cụ thể + thời gian quá khứ: S(số nhiều) + were + V-ing."
      },
      {
        "id": 318,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 8: Chia thì động từ trong ngoặc</b><br>My sister __________ (visit) the history museum last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My sister [ ... ] the history museum last month.",
        "targetWords": [
          "visited"
        ],
        "distractors": [
          "was visiting",
          "visits",
          "has visited",
          "visit"
        ],
        "fullSentence": "My sister visited the history museum last month.",
        "explain": "Có trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'visited'</b>.",
        "hint": "Dấu hiệu thì Quá khứ đơn: last month / last week / yesterday / in + năm quá khứ ➔ V-ed."
      },
      {
        "id": 319,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 9: Viết lại câu dùng cụm động từ 'GIVE UP'</b><br>You should stop wasting electricity. (Rewrite using: GIVE UP)<br>➔ <i>You should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "You should",
          "give up",
          "wasting electricity."
        ],
        "distractors": [
          "give off",
          "gave up",
          "to waste",
          "stopped"
        ],
        "fullSentence": "You should give up wasting electricity.",
        "explain": "Cụm động từ: <b>'give up + V-ing'</b> = 'stop + V-ing' (từ bỏ, ngừng hẳn làm một thói quen/việc gì đó).",
        "hint": "Công thức: stop + V-ing ➔ give up + V-ing."
      },
      {
        "id": 320,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 10: Viết lại câu dùng cụm động từ 'LOOK AFTER'</b><br>Please take care of the plants while I am away. (Rewrite using: LOOK AFTER)<br>➔ <i>Please ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Please",
          "look after",
          "the plants",
          "while I am away."
        ],
        "distractors": [
          "look for",
          "looked after",
          "looking after",
          "take after"
        ],
        "fullSentence": "Please look after the plants while I am away.",
        "explain": "Cụm động từ: <b>'look after'</b> = 'take care of' (chăm sóc, trông nom cây cối/người thân).",
        "hint": "Công thức: take care of + O ➔ look after + O."
      }
    ]
  },
  {
    "id": "eng_writing_p3",
    "title": "✍️ Viết Câu Part 3: Mạo Từ, Which, QKTD/QKĐ (8 câu)",
    "icon": "⚡",
    "category": "writing",
    "questions": [
      {
        "id": 321,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>My brother saw ______ amazing documentary about Jane Goodall.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "My brother saw [ ... ] amazing documentary about Jane Goodall.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "My brother saw an amazing documentary about Jane Goodall.",
        "explain": "Dùng <b>'an'</b> trước tính từ 'amazing' vì bắt đầu bằng nguyên âm /ə/ ('an amazing documentary').",
        "hint": "Quy tắc: Trước tính từ/danh từ bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 322,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>I bought a book yesterday. ______ book is about Vietnamese traditions.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I bought a book yesterday. [ ... ] book is about Vietnamese traditions.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "I bought a book yesterday. The book is about Vietnamese traditions.",
        "explain": "Quyển sách đã được đề cập ở câu trước ('a book yesterday'), sang câu thứ hai người nghe và người nói đều đã xác định rõ nên dùng <b>'The'</b>.",
        "hint": "Quy tắc: Nhắc lại danh từ đã nói ở câu trước ➔ dùng mạo từ 'The'."
      },
      {
        "id": 323,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a green club. It organises monthly clean-up days.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a green club",
          "which organises",
          "monthly clean-up days."
        ],
        "distractors": [
          "who organises",
          "that organising",
          "which organise",
          "organised"
        ],
        "fullSentence": "Our school has a green club which organises monthly clean-up days.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'a green club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V(chia theo N) + ..."
      },
      {
        "id": 324,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 4: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>The students visited an exhibition. It celebrated different cultures.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "The students visited",
          "an exhibition",
          "which celebrated",
          "different cultures."
        ],
        "distractors": [
          "who celebrated",
          "where celebrated",
          "celebrating",
          "which celebrate"
        ],
        "fullSentence": "The students visited an exhibition which celebrated different cultures.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'an exhibition' làm chủ ngữ mệnh đề quan hệ.",
        "hint": "Công thức: S + V + an exhibition + which + celebrated + ..."
      },
      {
        "id": 325,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (prepare) the display, our teacher __________ (arrive).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] the display, our teacher [ ... ].",
        "targetWords": [
          "were preparing",
          "arrived"
        ],
        "distractors": [
          "was preparing",
          "prepared",
          "was arriving",
          "were arriving"
        ],
        "fullSentence": "While we were preparing the display, our teacher arrived.",
        "explain": "Chúng tôi đang chuẩn bị gian trưng bày (hành động kéo dài ➔ <b>were preparing</b>) thì giáo viên bước đến (hành động ngắn chen vào ➔ <b>arrived</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 326,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the phone __________ (ring).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the phone [ ... ].",
        "targetWords": [
          "was reading",
          "rang"
        ],
        "distractors": [
          "were reading",
          "read",
          "was ringing",
          "rung"
        ],
        "fullSentence": "I was reading a biography when the phone rang.",
        "explain": "Tôi đang đọc tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì điện thoại reo (hành động bất ngờ xen vào ➔ <b>rang</b>, quá khứ của ring).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn: rang)."
      },
      {
        "id": 327,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 9 a.m. yesterday, the volunteers __________ (plant) trees in the school garden.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 9 a.m. yesterday, the volunteers [ ... ] trees in the school garden.",
        "targetWords": [
          "were planting"
        ],
        "distractors": [
          "was planting",
          "planted",
          "have planted",
          "are planting"
        ],
        "fullSentence": "At 9 a.m. yesterday, the volunteers were planting trees in the school garden.",
        "explain": "Tại thời điểm xác định trong quá khứ ('At 9 a.m. yesterday'), chủ ngữ số nhiều 'the volunteers' ➔ chia Quá khứ tiếp diễn <b>'were planting'</b>.",
        "hint": "Công thức: At + giờ cụ thể + yesterday: S(số nhiều) + were + V-ing."
      },
      {
        "id": 328,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 8: Chia thì động từ trong ngoặc</b><br>My class __________ (take) part in a cultural festival last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My class [ ... ] part in a cultural festival last month.",
        "targetWords": [
          "took"
        ],
        "distractors": [
          "was taking",
          "takes",
          "has taken",
          "taken"
        ],
        "fullSentence": "My class took part in a cultural festival last month.",
        "explain": "Trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'took'</b> (quá khứ của take).",
        "hint": "Dấu hiệu quá khứ: last month ➔ take chuyển thành took."
      }
    ]
  },
  {
    "id": "eng_all_marathon",
    "title": "🏆 Marathon Toàn Bộ Tiếng Anh 12 (91 câu)",
    "icon": "🌟",
    "category": "all",
    "questions": [
      {
        "id": 101,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) _______ in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. Bear",
          "B. Bore",
          "C. Born",
          "D. Birth"
        ],
        "correct": 2,
        "explain": "Trong ghi chú tiểu sử dạng gạch đầu dòng (bullet points), người ta dùng phân từ quá khứ rút gọn: 'Born in + [năm] + in + [địa điểm]' (Sinh năm 1915 tại tỉnh Quảng Nam)."
      },
      {
        "id": 102,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) _______ a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. in",
          "B. at",
          "C. on",
          "D. when"
        ],
        "correct": 1,
        "explain": "Cụm giới từ cố định: 'at a young age' mang nghĩa là 'khi còn trẻ / từ khi còn nhỏ tuổi'."
      },
      {
        "id": 103,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) _______ General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. as",
          "B. like",
          "C. by",
          "D. ∅"
        ],
        "correct": 0,
        "explain": "Cấu trúc: 'work as + chức danh/nghề nghiệp' mang nghĩa làm việc với cương vị là... (Worked as General Secretary: Đảm nhiệm cương vị Tổng Bí thư)."
      },
      {
        "id": 104,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) _______ as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. know",
          "B. knew",
          "C. knowing",
          "D. known"
        ],
        "correct": 3,
        "explain": "Rút gọn mệnh đề quan hệ dạng bị động: '...economic reforms, (which were) known as Đổi Mới' -> 'known as Đổi Mới' (được biết đến với tên gọi Đổi Mới)."
      },
      {
        "id": 105,
        "task": "task1",
        "question": "<b>TASK 1. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Nguyen Van Linh's life and achievements</b><br>• (1) Born in 1915 in Quang Nam Province.<br>• Joined the Communist Party (2) at a young age.<br>• Worked (3) as General Secretary of the Communist Party from 1986 to 1991.<br>• Known for implementing economic reforms, (4) known as \"Đổi Mới\".<br>• His leadership (5) _______ a significant turning point in Vietnam's development.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. was marking",
          "B. is marking",
          "C. will mark",
          "D. marked"
        ],
        "correct": 3,
        "explain": "Sự việc lịch sử đã xảy ra và kết thúc trong quá khứ, dùng thì Quá khứ đơn (Past Simple): 'marked' (đã đánh dấu một bước ngoặt quan trọng)."
      },
      {
        "id": 106,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">Elon Musk (1) _______ on June 28, 1971, in Pretoria, South Africa. From a young age, he showed his interest in technology and taught himself computer programming at the age of 12...</div><br><b>Chọn đáp án đúng nhất cho vị trí (1):</b>",
        "options": [
          "A. bears",
          "B. born",
          "C. was born",
          "D. was bear"
        ],
        "correct": 2,
        "explain": "Cấu trúc bị động chỉ năm sinh trong quá khứ: 'S + was/were born on + [ngày tháng năm]'."
      },
      {
        "id": 107,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(2) _______ Queen's University in Ontario, Canada in 1995, he was already thinking about his next steps. When he transferred to the University of Pennsylvania, where he was earning degrees in both economics and physics, Musk continued to explore his passions...</div><br><b>Chọn đáp án đúng nhất cho vị trí (2):</b>",
        "options": [
          "A. While was attending",
          "B. While he was attending",
          "C. While he attending",
          "D. While he was attended"
        ],
        "correct": 1,
        "explain": "Mệnh đề trạng ngữ chỉ thời gian với 'While' cần có đầy đủ chủ ngữ 'he' và thì Quá khứ tiếp diễn chủ động: 'While he was attending' (Trong khi ông đang theo học tại...)."
      },
      {
        "id": 108,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">After completing his studies, Musk moved to California to pursue a Ph.D. in energy physics at Stanford University. However, (3) _______ after just two days to pursue his ambitions.</div><br><b>Chọn đáp án đúng nhất cho vị trí (3):</b>",
        "options": [
          "A. he dropped",
          "B. he dropped out",
          "C. he was dropped",
          "D. he was dropped out"
        ],
        "correct": 1,
        "explain": "Cụm động từ 'drop out' = bỏ học giữa chừng. Ở thì quá khứ đơn dạng chủ động: 'he dropped out'."
      },
      {
        "id": 109,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">In 1999, he co-founded X.com, an online payment company that later became PayPal. While (4) _______ well, Musk was already setting his sights on the next project: space exploration...</div><br><b>Chọn đáp án đúng nhất cho vị trí (4):</b>",
        "options": [
          "A. developing",
          "B. he was developing",
          "C. PayPal was developing",
          "D. he was developed"
        ],
        "correct": 2,
        "explain": "Chủ ngữ của hành động phát triển tốt ở đây là công ty PayPal ('PayPal was developing well'). Vế sau chủ ngữ là Musk nên không thể rút gọn chủ ngữ."
      },
      {
        "id": 110,
        "task": "task2",
        "question": "<b>TASK 2. Read the following notes and circle the letter A, B, C, or D to indicate the correct option:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\">(5) _______, together with his strong determination, has made him one of the most influential figures in technology and innovation.</div><br><b>Chọn đáp án đúng nhất cho vị trí (5):</b>",
        "options": [
          "A. Elon Musk's ambitious vision for the future",
          "B. Elon Musk's future for ambitious vision",
          "C. The future of Elon Musk's ambitious vision",
          "D. The ambitious vision of Elon Musk's future"
        ],
        "correct": 0,
        "explain": "Cụm danh từ làm chủ ngữ diễn đạt chuẩn xác: 'Elon Musk's ambitious vision for the future' (Tầm nhìn đầy hoài bão cho tương lai của Elon Musk)."
      },
      {
        "id": 111,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử Chủ tịch Hồ Chí Minh:</b><br>a) He founded the Communist Party of Viet Nam in 1930.<br>b) He led the party to fight for Viet Nam's independence from the French.<br>c) He was born in 1890.<br>d) Ho Chi Minh was a famous leader in Viet Nam.<br>e) Later, he became the first President of Viet Nam in 1945.</div>",
        "options": [
          "A. c - a - b - e - d",
          "B. d - c - b - a - e",
          "C. d - c - a - b - e",
          "D. d - c - e - a - b"
        ],
        "correct": 2,
        "explain": "Trình tự tiểu sử chuẩn logic: (d) Giới thiệu nhân vật chung -> (c) Năm sinh 1890 -> (a) Sáng lập Đảng năm 1930 -> (b) Lãnh đạo đấu tranh giành độc lập -> (e) Trở thành Chủ tịch nước đầu tiên năm 1945. Thứ tự đúng: d - c - a - b - e."
      },
      {
        "id": 112,
        "task": "task3",
        "question": "<b>TASK 3: Mark the letter A, B, C, or D to indicate the correct arrangement of the sentences to make a meaningful biography:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.6;\"><b>Tiểu sử nhà bác học Albert Einstein:</b><br>a) He won the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect.<br>b) Albert Einstein was one of the most famous theoretical physicists in history.<br>c) Later, he moved to the United States in 1933 due to the political situation in Germany.<br>d) He was born in Germany in 1879.<br>e) In 1905, he published his famous theory of relativity, which changed modern physics.</div>",
        "options": [
          "A. d - b - e - a - c",
          "B. b - d - e - a - c",
          "C. b - d - a - e - c",
          "D. d - b - a - e - c"
        ],
        "correct": 1,
        "explain": "Trình tự thời gian và logic tiểu sử: (b) Giới thiệu khái quát -> (d) Sinh năm 1879 tại Đức -> (e) Năm 1905 công bố thuyết tương đối -> (a) Năm 1921 đoạt giải Nobel Vật lý -> (c) Năm 1933 chuyển sang định cư tại Mỹ. Thứ tự đúng: b - d - e - a - c."
      },
      {
        "id": 113,
        "task": "part1",
        "question": "Vo Nguyen Giap was widely recognized as a _______ genius for his pivotal role in leading Vietnamese forces during the First Indochina War and the Vietnam War.",
        "options": [
          "A. military",
          "B. artistic",
          "C. musical",
          "D. literary"
        ],
        "correct": 0,
        "explain": "Cụm từ 'military genius' nghĩa là thiên tài quân sự (nói về Đại tướng Võ Nguyên Giáp lãnh đạo quân đội nhân dân Việt Nam)."
      },
      {
        "id": 114,
        "task": "part1",
        "question": "Viet Quang _______ himself to helping the needy in his neighbourhood.",
        "options": [
          "A. admired",
          "B. devoted",
          "C. diagnosed",
          "D. attended"
        ],
        "correct": 1,
        "explain": "Cấu trúc cố định: 'devote oneself to V-ing/sth' = tận tụy, cống hiến hết mình cho việc gì (Viet Quang đã cống hiến hết mình để giúp đỡ người nghèo khó)."
      },
      {
        "id": 115,
        "task": "part1",
        "question": "Her interesting _______ of her trip to Thailand last year fascinated all of us.",
        "options": [
          "A. rule",
          "B. biography",
          "C. account",
          "D. blockbuster"
        ],
        "correct": 2,
        "explain": "'account of sth' mang nghĩa là lời kể lại, câu chuyện thuật lại chi tiết về một chuyến đi hoặc sự kiện."
      },
      {
        "id": 116,
        "task": "part1",
        "question": "Having a difficult childhood did not hold her back; instead, it inspired her to devote her life to social work, helping others _______ similar challenges.",
        "options": [
          "A. observe",
          "B. note",
          "C. overcome",
          "D. protect"
        ],
        "correct": 2,
        "explain": "'overcome challenges' mang nghĩa là vượt qua những khó khăn, thử thách trong cuộc sống."
      },
      {
        "id": 117,
        "task": "part1",
        "question": "Her biological parents were unable to raise her, so she was _______ by a family who provided her with a loving home.",
        "options": [
          "A. adopted",
          "B. adapted",
          "C. advertised",
          "D. admitted"
        ],
        "correct": 0,
        "explain": "'be adopted by' = được nhận làm con nuôi bởi một gia đình khác (do bố mẹ ruột không đủ khả năng nuôi nấng)."
      },
      {
        "id": 118,
        "task": "part1",
        "question": "Jobs met Steve Wozniak and they quickly _______ over their love of electronics, a shared passion that would eventually lead to the founding of Apple.",
        "options": [
          "A. bonded",
          "B. connected",
          "C. united",
          "D. argued"
        ],
        "correct": 0,
        "explain": "Cụm từ: 'bond over sth' = trở nên thân thiết, gắn kết tình bạn nhờ có chung niềm đam mê/sở thích đồ điện tử."
      },
      {
        "id": 119,
        "task": "part1",
        "question": "Thomas Edison's _______ achievement in developing the first practical electric light bulb revolutionized the way the world illuminated the night.",
        "options": [
          "A. impress",
          "B. impressive",
          "C. impression",
          "D. impressively"
        ],
        "correct": 1,
        "explain": "Đứng trước danh từ 'achievement' cần một tính từ bổ nghĩa -> chọn 'impressive' (đầy ấn tượng)."
      },
      {
        "id": 120,
        "task": "part1",
        "question": "Vo Thi Sau _______ attacks against French colonial forces, becoming a symbol of resistance and courage in Vietnam's struggle for independence.",
        "options": [
          "A. carried out",
          "B. got over",
          "C. came across",
          "D. went on"
        ],
        "correct": 0,
        "explain": "Cụm động từ 'carry out attacks' = thực hiện, tiến hành các cuộc tấn công chống lại thực dân Pháp."
      },
      {
        "id": 121,
        "task": "part1",
        "question": "Even though Susan was _______ with breast cancer, she remained positive.",
        "options": [
          "A. dedicated",
          "B. admired",
          "C. volunteered",
          "D. diagnosed"
        ],
        "correct": 3,
        "explain": "Cấu trúc y tế: 'be diagnosed with + [tên bệnh]' = bị chẩn đoán mắc bệnh (ung thư vú)."
      },
      {
        "id": 122,
        "task": "part1",
        "question": "When he went home, his mother _______ dinner, so he took off his coat to help her.",
        "options": [
          "A. is cooking",
          "B. was cooking",
          "C. cooked",
          "D. cooks"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra tại một thời điểm trong quá khứ (mẹ đang nấu ăn khi anh ấy về nhà) -> dùng thì Quá khứ tiếp diễn: 'was cooking'."
      },
      {
        "id": 123,
        "task": "part1",
        "question": "Mr. Viet _______ his time and energy to giving free English lessons for poor children.",
        "options": [
          "A. admires",
          "B. devotes",
          "C. diagnoses",
          "D. attends"
        ],
        "correct": 1,
        "explain": "Cấu trúc: 'devote time/energy to V-ing' = dành thời gian, tâm huyết cho việc gì. Chủ ngữ Mr. Viet ở hiện tại đơn số ít -> devotes."
      },
      {
        "id": 124,
        "task": "part1",
        "question": "We _______ to the hospital to visit Mike when he _______ to say that he was fine.",
        "options": [
          "A. were driving - was calling",
          "B. drove - called",
          "C. were driving - called",
          "D. drove - was calling"
        ],
        "correct": 2,
        "explain": "Hành động đang diễn ra trong quá khứ ('were driving' - đang lái xe) thì có hành động bất ngờ xen vào ('called' - anh ấy gọi điện)."
      },
      {
        "id": 125,
        "task": "part1",
        "question": "What _______ to you on Sunday night?",
        "options": [
          "A. happen",
          "B. happened",
          "C. was happening",
          "D. would happen"
        ],
        "correct": 1,
        "explain": "Hỏi về sự việc đã xảy ra và kết thúc trong quá khứ ('on Sunday night') -> dùng thì Quá khứ đơn (happened)."
      },
      {
        "id": 126,
        "task": "part1",
        "question": "Last night, we _______ for you for ages but you never _______ up.",
        "options": [
          "A. waited - showed",
          "B. would wait - showed",
          "C. were waiting - were showing",
          "D. waited - was showing"
        ],
        "correct": 0,
        "explain": "Diễn tả hai hành động nối tiếp trong quá khứ: 'waited' (chúng tôi đã đợi rất lâu) nhưng 'never showed up' (bạn chẳng hề xuất hiện) -> cả hai đều chia Quá khứ đơn."
      },
      {
        "id": 127,
        "task": "part1",
        "question": "We _______ our quality time when the unexpected guest _______.",
        "options": [
          "A. had - came",
          "B. were having - came",
          "C. had been having - came",
          "D. have had - would have come"
        ],
        "correct": 1,
        "explain": "Hành động đang diễn ra ('were having' - đang tận hưởng thời gian tuyệt vời) thì hành động khác cắt ngang ('came' - vị khách bất ngờ xuất hiện)."
      },
      {
        "id": 128,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>What does the passage mainly discuss?</b>",
        "options": [
          "A. Steve Jobs' academic achievements",
          "B. Steve Jobs' life and achievements",
          "C. Steve Jobs' rare disease",
          "D. Steve Jobs' first company"
        ],
        "correct": 1,
        "explain": "Toàn bộ bài đọc nói về cuộc đời và các thành tựu vĩ đại của Steve Jobs từ thuở trẻ, thành lập Apple, Pixar, vượt qua bệnh tật và di sản công nghệ để lại."
      },
      {
        "id": 129,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>According to paragraph 1, which of the following is NOT stated about Steve Jobs?</b>",
        "options": [
          "A. He was adopted by a working-class family.",
          "B. He found a passion for technology from childhood.",
          "C. He didn't finish his college education.",
          "D. He's a genius in the world of technology."
        ],
        "correct": 1,
        "explain": "Đoạn 1 nêu rõ: 'He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity' (ông tìm thấy đam mê sau khi bỏ đại học, KHÔNG PHẢI từ thuở nhỏ 'from childhood')."
      },
      {
        "id": 130,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>they</u> in paragraph 2 refers to _______.</b>",
        "options": [
          "A. cutting-edge innovations",
          "B. Apple's Macintosh computer and iPhone",
          "C. Jobs and Steve Wozniak",
          "D. design and technology"
        ],
        "correct": 2,
        "explain": "Trong đoạn 2: 'In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple...' -> 'they' là đại từ thay thế cho Steve Jobs và Steve Wozniak."
      },
      {
        "id": 131,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>The word <u>setbacks</u> in paragraph 3 is opposite in meaning to _______.</b>",
        "options": [
          "A. difficulties",
          "B. advantages",
          "C. results",
          "D. influences"
        ],
        "correct": 1,
        "explain": "'setbacks' mang nghĩa là khó khăn, trở ngại, trắc trở. Từ TRÁI NGHĨA (opposite in meaning) là 'advantages' (thuận lợi, lợi thế)."
      },
      {
        "id": 132,
        "task": "part2",
        "question": "<div style=\"background:rgba(255,255,255,0.06);padding:10px;border-radius:8px;line-height:1.5;margin-bottom:10px;font-size:0.86rem;\"><b>Đoạn văn đọc hiểu:</b><br>Steve Jobs, a genius in the world of technology, was born in 1955 and adopted by a working-class family. He dropped out of college, taking a leap into the unknown, where he found his passion for technology and creativity.<br><br>In 1976, Jobs met Steve Wozniak, and together <u>they</u> founded Apple, a company that would revolutionise the computer industry with cutting-edge innovations. Apple's Macintosh computer and the iconic iPhone are testaments to Jobs' commitment to cutting-edge design and user-friendly technology.<br><br>Apart from his work at Apple, Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story. Despite facing <u>setbacks</u>, such as being diagnosed with cancer, Jobs continued to lead Apple until his passing away in 2011.<br><br>His legacy lives on through the products and innovations that have shaped the way people live and work in the digital age.</div><b>Which of the following is true about Steve Jobs?</b>",
        "options": [
          "A. He contributed to the success of Pixar Animation Studios.",
          "B. He established Apple without the help of Steve Wozniak.",
          "C. He didn't lead Apple when he was diagnosed with cancer.",
          "D. His ambition was to shape the way people lived and worked."
        ],
        "correct": 0,
        "explain": "Đoạn 3 khẳng định: 'Jobs also played a significant role in the success of Pixar Animation Studios, where he contributed to the creation of the first computer-animated film, Toy Story.' (Ông đóng góp vào sự thành công của xưởng phim hoạt hình Pixar)."
      },
      {
        "id": 201,
        "task": "u3_vocab",
        "question": "Different kinds of waste are dumped in _______ sites.",
        "options": [
          "A. landfill",
          "B. leftover",
          "C. resource",
          "D. Footprint"
        ],
        "correct": 0,
        "explain": "Cụm danh từ cố định: <b>'landfill sites'</b> mang nghĩa là các bãi chôn lấp rác thải. Các từ còn lại: leftover (thức ăn thừa), resource (tài nguyên), footprint (dấu chân / vết tích)."
      },
      {
        "id": 202,
        "task": "u3_vocab",
        "question": "Leaving the tap running while washing the dishes is purely a _______ of clean water.",
        "options": [
          "A. awareness",
          "B. waste",
          "C. pile",
          "D. Packaging"
        ],
        "correct": 1,
        "explain": "Cụm từ cố định: <b>'a waste of + N'</b> mang nghĩa là sự lãng phí cái gì ('a waste of clean water': sự lãng phí nước sạch). Để vòi nước chảy khi rửa bát là một sự lãng phí nước sạch."
      },
      {
        "id": 203,
        "task": "u3_vocab",
        "question": "We organised a community event to _______ the polluted beaches.",
        "options": [
          "A. get rid of",
          "B. go green",
          "C. rinse out",
          "D. clean up"
        ],
        "correct": 3,
        "explain": "Cụm động từ: <b>'clean up'</b> mang nghĩa là dọn dẹp, dọn sạch ('clean up the beaches': dọn sạch các bãi biển). 'get rid of' (vứt bỏ), 'go green' (sống xanh), 'rinse out' (rửa sạch/xối nước)."
      },
      {
        "id": 204,
        "task": "u3_vocab",
        "question": "By taking fewer flights, we can help to reduce _______ significantly.",
        "options": [
          "A. cardboard",
          "B. leftover",
          "C. fruit peel",
          "D. carbon footprint"
        ],
        "correct": 3,
        "explain": "Cụm từ: <b>'reduce carbon footprint'</b> mang nghĩa là giảm thiểu dấu chân carbon (lượng phát thải khí nhà kính). Việc hạn chế đi máy bay giúp giảm lượng phát thải carbon đáng kể."
      },
      {
        "id": 205,
        "task": "u3_vocab",
        "question": "Plastic bags _______ very slowly, which poses a threat to the ecosystem.",
        "options": [
          "A. release",
          "B. reuse",
          "C. decompose",
          "D. recycle"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'decompose'</b> mang nghĩa là phân hủy tự nhiên. Túi ni-lông phân hủy rất chậm, gây ra mối đe dọa lớn đối với hệ sinh thái."
      },
      {
        "id": 206,
        "task": "u3_vocab",
        "question": "Protecting the environment is crucial for a more _______ future.",
        "options": [
          "A. sustainable",
          "B. reusable",
          "C. single-use",
          "D. recyclable"
        ],
        "correct": 0,
        "explain": "Tính từ: <b>'sustainable'</b> (bền vững). Cụm từ: 'a sustainable future' (một tương lai bền vững, lâu dài). Bảo vệ môi trường là điều tối quan trọng cho một tương lai bền vững hơn."
      },
      {
        "id": 207,
        "task": "u3_vocab",
        "question": "We can use leftovers to make simple _______ to enrich the soil.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ / phân ủ vi sinh). Chúng ta có thể dùng thức ăn thừa để làm phân hữu cơ bón cho đất thêm màu mỡ."
      },
      {
        "id": 208,
        "task": "u3_vocab",
        "question": "The ocean was _______ as a result of a recent oil spill.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Tính từ/Quá khứ phân từ: <b>'contaminated'</b> mang nghĩa là bị ô nhiễm, bị nhiễm độc chất. Đại dương đã bị nhiễm bẩn nghiêm trọng do sự cố tràn dầu gần đây."
      },
      {
        "id": 209,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Đại từ quan hệ: <b>', which'</b> được dùng sau dấu phẩy trong mệnh đề quan hệ không xác định để thay thế cho toàn bộ sự việc ở mệnh đề phía trước ('Nhiều người nổi tiếng theo đuổi lối sống xanh'). Không dùng 'that' sau dấu phẩy."
      },
      {
        "id": 210,
        "task": "u3_vocab",
        "question": "Unless people _______ poaching animals, many species will become extinct.",
        "options": [
          "A. stopped",
          "B. stop",
          "C. had stopped",
          "D. to stop"
        ],
        "correct": 1,
        "explain": "Mệnh đề điều kiện loại 1 với 'Unless' (= If not): <b>Unless + S + V(hiện tại đơn), S + will + V_inf</b>. Chủ ngữ 'people' số nhiều -> chia động từ nguyên thể 'stop'."
      },
      {
        "id": 211,
        "task": "u3_vocab",
        "question": "Ms. Brown often uses leftovers to make her own _______.",
        "options": [
          "A. waste",
          "B. container",
          "C. compost",
          "D. layer"
        ],
        "correct": 2,
        "explain": "Danh từ: <b>'compost'</b> (phân hữu cơ). Cô Brown thường dùng thức ăn thừa để tự làm phân hữu cơ bón cây."
      },
      {
        "id": 212,
        "task": "u3_vocab",
        "question": "The water has become undrinkable because it has been _______ with lead.",
        "options": [
          "A. sorted",
          "B. decomposed",
          "C. recycled",
          "D. contaminated"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'contaminated with + chất độc hại'</b> mang nghĩa bị nhiễm độc chất gì ('contaminated with lead': bị nhiễm chì). Nguồn nước không thể uống được vì đã bị nhiễm chì."
      },
      {
        "id": 213,
        "task": "u3_vocab",
        "question": "They _______ extensive research on the environmental effects of using fake Christmas trees.",
        "options": [
          "A. turned off",
          "B. carried out",
          "C. look after",
          "D. applied for"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>'carry out'</b> = 'conduct' (tiến hành, thực hiện). 'carry out extensive research' (tiến hành nghiên cứu sâu rộng). 'turn off' (tắt), 'look after' (chăm sóc), 'apply for' (nộp đơn xin việc)."
      },
      {
        "id": 214,
        "task": "u3_vocab",
        "question": "Many celebrities adopt a green lifestyle, _______ helps the environment a lot.",
        "options": [
          "A. that",
          "B. what",
          "C. whose",
          "D. which"
        ],
        "correct": 3,
        "explain": "Mệnh đề quan hệ không xác định đứng sau dấu phẩy bổ nghĩa cho cả mệnh đề trước bắt buộc dùng <b>'which'</b>."
      },
      {
        "id": 215,
        "task": "u3_opposite",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>OPPOSITE</b> in meaning to the underlined bold word:</i><br><br><b>Single-use</b> products provide great convenience, but they also harm the environment.",
        "options": [
          "A. Contaminated",
          "B. Decomposed",
          "C. Reusable",
          "D. Released"
        ],
        "correct": 2,
        "explain": "Từ gạch chân: <b>Single-use</b> (dùng một lần) >< <b>Reusable</b> (có thể tái sử dụng nhiều lần). Do đó chọn đáp án C."
      },
      {
        "id": 216,
        "task": "u3_closest",
        "question": "<i>Mark the letter A, B, C, or D to indicate the word(s) <b>CLOSEST</b> in meaning to the underlined bold word:</i><br><br>Instead of <b>getting rid of</b> fruit peels, we use them to make simple compost.",
        "options": [
          "A. relying on",
          "B. throwing away",
          "C. preparing for",
          "D. responding to"
        ],
        "correct": 1,
        "explain": "Cụm động từ: <b>getting rid of</b> = <b>throwing away</b> (vứt bỏ, loại bỏ). Thay vì vứt bỏ vỏ trái cây, chúng tôi dùng chúng để làm phân ủ vi sinh."
      },
      {
        "id": 217,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (17):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) _______ environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (17):</b>",
        "options": [
          "A. the",
          "B. Ø (no article)",
          "C. an",
          "D. a"
        ],
        "correct": 2,
        "explain": "Vị trí 17: 'environmental project' là cụm danh từ đếm được số ít, được nhắc đến lần đầu tiên, bắt đầu bằng nguyên âm /ɪ/ ('environmental'), do đó dùng mạo từ <b>'an'</b>."
      },
      {
        "id": 218,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (18):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) _______ students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (18):</b>",
        "options": [
          "A. rise",
          "B. rate",
          "C. raise",
          "D. rinse"
        ],
        "correct": 2,
        "explain": "Cụm từ cố định: <b>'raise awareness'</b> mang nghĩa là nâng cao nhận thức ('raise students' awareness of environmental issues': nâng cao nhận thức của học sinh về các vấn đề môi trường). 'rise' là nội động từ không có tân ngữ."
      },
      {
        "id": 219,
        "task": "u3_announce",
        "question": "<b>Read the following school announcement and choose the correct option for blank (19):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>Green Classroom Competition</b><br>Each class is to prepare (17) an environmental project. The project should aim to (18) raise students' awareness of environmental issues. Each class is required to (19) _______ a presentation about their project. The greenest classroom will win an ecotour. If you have any questions, please contact Mr. Trung, the head of the School Youth Union.</div><br><b>Chọn từ thích hợp cho vị trí (19):</b>",
        "options": [
          "A. take",
          "B. bring",
          "C. give",
          "D. cause"
        ],
        "correct": 2,
        "explain": "Cụm kết hợp từ (collocation): <b>'give a presentation'</b> mang nghĩa là thuyết trình, trình bày bài báo cáo."
      },
      {
        "id": 220,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một bản báo cáo hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Therefore, we recommend that you put the suggested solutions into practice as soon as possible.<br><b>b.</b> Third, we recommend that we make use of plastic waste in arts and crafts projects, for example, for making plant pots or bird feeders.<br><b>c.</b> Second, the Youth Union should hold regular sessions to teach students how to recycle properly.<br><b>d.</b> This report suggests three main solutions to the problem of single-use products in our school.<br><b>e.</b> First, we suggest that the school should provide more recycling bins.<br><b>f.</b> Reusing and recycling single-use plastics will lead to a greener school environment and help promote a green lifestyle among young people.</div>",
        "options": [
          "A. d – e – c – f – b – a",
          "B. d – e – c – b – a – f",
          "C. d – e – b – c – f – a",
          "D. d – e – c – b – f – a"
        ],
        "correct": 3,
        "explain": "Thứ tự sắp xếp logic chuẩn của một bản báo cáo đề xuất giải pháp:<br>• <b>d</b> (Mở đầu): Nêu mục đích báo cáo về 3 giải pháp xử lý đồ nhựa dùng một lần.<br>• <b>e</b>: Giải pháp 1 (First...).<br>• <b>c</b>: Giải pháp 2 (Second...).<br>• <b>b</b>: Giải pháp 3 (Third...).<br>• <b>f</b>: Đánh giá tác động tích cực của việc tái chế đối với môi trường học đường.<br>• <b>a</b> (Kết luận): Lời kiến nghị hành động khép lại báo cáo (Therefore...).<br>➡️ Thứ tự đúng là: <b>d – e – c – b – f – a</b>."
      },
      {
        "id": 221,
        "task": "u3_arrange",
        "question": "<b>Sắp xếp các câu sau để tạo thành một đoạn văn hoàn chỉnh, có ý nghĩa:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\"><b>a.</b> Second, it prevents environmental destruction by promoting sustainable practices.<br><b>b.</b> Making small changes today can lead to a more sustainable and prosperous tomorrow.<br><b>c.</b> By reducing single-use items, we conserve resources and minimise waste.<br><b>d.</b> Going green offers numerous advantages for both individuals and the planet.<br><b>e.</b> First, it helps reduce our carbon footprint, lessening the harm caused by greenhouse gases.<br><b>f.</b> Additionally, going green raises awareness about environmental issues, fostering a sense of responsibility towards the Earth.<br><b>g.</b> Finally, embracing eco-friendly habits not only benefits the environment but also promotes healthier lifestyles for ourselves and future generations.</div>",
        "options": [
          "A. d – e – a – b – c – f – g",
          "B. b – d – e – a – c – f – g",
          "C. d – e – a – c – f – g – b",
          "D. d – e – a – c – g – f – b"
        ],
        "correct": 2,
        "explain": "Thứ tự sắp xếp logic của một đoạn văn nghị luận:<br>• <b>d</b>: Câu mở đầu chủ đề (Going green offers numerous advantages...).<br>• <b>e</b>: Lợi ích thứ nhất (First, it helps reduce our carbon footprint...).<br>• <b>a</b>: Lợi ích thứ hai (Second, it prevents environmental destruction...).<br>• <b>c</b>: Bổ sung diễn giải hành động giảm đồ dùng một lần.<br>• <b>f</b>: Ý bổ trợ tiếp theo (Additionally, going green raises awareness...).<br>• <b>g</b>: Lợi ích cuối cùng (Finally, embracing eco-friendly habits...).<br>• <b>b</b>: Câu kết đúc kết thông điệp tương lai (Making small changes today...).<br>➡️ Thứ tự chuẩn: <b>d – e – a – c – f – g – b</b>."
      },
      {
        "id": 222,
        "task": "u3_cloze",
        "question": "<b>Read the following passage and choose the best word for blank (22):</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Festivals come with many traditions that bring happiness and joy. However, some of these <b>(22) _______</b> may not be environmentally friendly, and may need to be changed for a sustainable future. In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose. The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food. In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div><br><b>Chọn từ thích hợp cho vị trí (22):</b>",
        "options": [
          "A. wishes",
          "B. customs",
          "C. structures",
          "D. patterns"
        ],
        "correct": 1,
        "explain": "Danh từ: <b>'customs'</b> (phong tục, tập quán). 'traditions' (truyền thống) đi liền với 'customs' (phong tục). Một số phong tục lễ hội này có thể không thân thiện với môi trường."
      },
      {
        "id": 223,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (23) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In countries such as China, India, and Japan, releasing balloons or sky lanterns provides a spectacular <b>(23) _______</b>. However, the litter left behind the balloons and lanterns is hard to decompose...</div>",
        "options": [
          "A. scenario",
          "B. viewer",
          "C. audience",
          "D. sight"
        ],
        "correct": 3,
        "explain": "Cụm danh từ: <b>'a spectacular sight'</b> mang nghĩa là một cảnh tượng ngoạn mục, đẹp mắt (khi thả bóng bay hoặc đèn trời)."
      },
      {
        "id": 224,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (24) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">The frames of the lanterns can harm wild animals, and many animals <b>(24) _______</b> the balloons for food...</div>",
        "options": [
          "A. replace",
          "B. imagine",
          "C. accept",
          "D. mistake"
        ],
        "correct": 3,
        "explain": "Cấu trúc: <b>'mistake A for B'</b> mang nghĩa là nhầm lẫn cái A thành cái B ('mistake the balloons for food': nhiều loài động vật nhầm bóng bay là thức ăn)."
      },
      {
        "id": 225,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (25) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">In Australia, the US, and many other countries, there are fascinating firework displays that people won't want to <b>(25) _______</b>. However, fireworks actually (26) _______ a lot of harmful chemicals into the air...</div>",
        "options": [
          "A. watch",
          "B. learn",
          "C. miss",
          "D. think"
        ],
        "correct": 2,
        "explain": "Cụm từ: <b>'miss'</b> (bỏ lỡ cơ hội xem). 'displays that people won't want to miss' (những màn pháo hoa đặc sắc mà mọi người không muốn bỏ lỡ)."
      },
      {
        "id": 226,
        "task": "u3_cloze",
        "question": "<b>Chọn từ thích hợp cho vị trí (26) trong đoạn văn lễ hội:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">However, fireworks actually <b>(26) _______</b> a lot of harmful chemicals into the air. Like sky lanterns, they can also cause fires.</div>",
        "options": [
          "A. recycle",
          "B. reuse",
          "C. release",
          "D. revise"
        ],
        "correct": 2,
        "explain": "Động từ: <b>'release'</b> (thải ra, phát tán). Pháo hoa thải ra rất nhiều hóa chất độc hại vào không khí ('release a lot of harmful chemicals into the air')."
      },
      {
        "id": 227,
        "task": "u3_reading",
        "question": "<b>Read the passage and choose the best answer:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Stockholm, Sweden stands out as a green city due to its eco-friendly initiatives. Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills. Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to minimise carbon emissions. These efforts contribute to cleaner air and a healthier environment. Thirdly, Stockholm promotes the use of reusable items and discourages single-use plastics. Citizens are encouraged to bring their bags and containers while shopping to reduce plastic waste. These eco-conscious practices make Stockholm a model for sustainability and inspire other cities worldwide.<br><br>With its commitment to environmental protection and innovative approaches to waste reduction, Stockholm sets a high standard for green living and serves as an example of how cities can prioritise sustainability in urban development.</div><br><b>Question 27: Which best serves as the title for the passage?</b>",
        "options": [
          "A. Stockholm – the Friendliest City",
          "B. Stockholm – the Happiest City",
          "C. Stockholm – a Green City",
          "D. Stockholm – a Success Story"
        ],
        "correct": 2,
        "explain": "Tiêu đề phù hợp nhất là: <b>'Stockholm – a Green City'</b> (Stockholm – Một thành phố xanh). Toàn bộ bài đọc tập trung giới thiệu các sáng kiến thân thiện với môi trường của Stockholm như quản lý rác thải, giao thông xanh, tái chế và giảm rác thải nhựa."
      },
      {
        "id": 228,
        "task": "u3_reading",
        "question": "<b>According to paragraph 1, what does Stockholm put an emphasis on?</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Firstly, Stockholm boasts efficient waste management systems. It emphasises recycling and composting to reduce the amount of waste sent to landfills...</div>",
        "options": [
          "A. landfill sites",
          "B. recycling and composting",
          "C. e-waste management",
          "D. reusing and recycling"
        ],
        "correct": 1,
        "explain": "Dẫn chứng trong đoạn 1: 'It emphasises <b>recycling and composting</b> to reduce the amount of waste sent to landfills.' (Thành phố chú trọng vào việc tái chế và ủ phân hữu cơ)."
      },
      {
        "id": 229,
        "task": "u3_reading",
        "question": "<b>The word 'minimise' in paragraph 2 is OPPOSITE in meaning to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Secondly, the city encourages environmentally-friendly transportation methods, such as cycling and public transit, to <b>minimise</b> carbon emissions...</div>",
        "options": [
          "A. prevent",
          "B. reduce",
          "C. control",
          "D. increase"
        ],
        "correct": 3,
        "explain": "Từ: <b>minimise</b> (giảm thiểu đến mức tối đa) >< <b>increase</b> (làm tăng lên). Các từ còn lại: reduce (giảm - đồng nghĩa), prevent (ngăn chặn), control (kiểm soát)."
      },
      {
        "id": 230,
        "task": "u3_reading",
        "question": "<b>The word 'their' in paragraph 2 refers to:</b><br><br><div style=\"background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;line-height:1.6;\">Citizens are encouraged to bring <b>their</b> bags and containers while shopping to reduce plastic waste...</div>",
        "options": [
          "A. bags",
          "B. containers",
          "C. practices",
          "D. citizens"
        ],
        "correct": 3,
        "explain": "Dẫn chứng trong đoạn 2: '<b>Citizens</b> are encouraged to bring <b>their</b> bags and containers...' ➡️ Đại từ sở hữu 'their' thay thế cho danh từ số nhiều đứng ngay trước là <b>citizens</b> (người dân thành phố)."
      },
      {
        "id": 231,
        "task": "u3_reading",
        "question": "<b>Which of the following is NOT true according to the passage?</b>",
        "options": [
          "A. Single-use plastics are more popular than reusable items in Stockholm.",
          "B. City dwellers in Stockholm are encouraged to cycle or use public transport.",
          "C. Stockholm is a prime example of how a city can prioritise sustainability.",
          "D. Stockholm adopts innovative approaches to reduce the amount of waste."
        ],
        "correct": 0,
        "explain": "Thông tin sai là đáp án <b>A</b>. Trong đoạn 2 nêu rõ: 'Stockholm promotes the use of reusable items and discourages single-use plastics' (Stockholm khuyến khích dùng đồ tái sử dụng và không khuyến khích đồ nhựa dùng một lần). Do đó nói đồ nhựa dùng một lần phổ biến hơn là sai sự thật."
      },
      {
        "id": 301,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 1: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>My father bought ____ new car yesterday, and ____ car is extremely fuel-efficient.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "My father bought [ ... ] new car yesterday, and [ ... ] car is extremely fuel-efficient.",
        "targetWords": [
          "a",
          "the"
        ],
        "distractors": [
          "an",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "My father bought a new car yesterday, and the car is extremely fuel-efficient.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'a'</b> trước danh từ số ít 'new car' được nhắc đến lần đầu.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'car' vì chiếc xe đã được xác định rõ (chính là chiếc xe bố vừa mua hôm qua).",
        "hint": "Quy tắc: Nhắc lần đầu dùng 'a/an', nhắc lại lần 2 đã xác định dùng 'the'."
      },
      {
        "id": 302,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 2: Điền mạo từ thích hợp (a / an / the / Ø)</b><br>English is spoken as ____ international language in many parts of ____ world.",
        "prompt": "Kéo hoặc chạm các thẻ từ bên dưới để điền mạo từ chính xác vào chỗ trống:",
        "cues": "English is spoken as [ ... ] international language in many parts of [ ... ] world.",
        "targetWords": [
          "an",
          "the"
        ],
        "distractors": [
          "a",
          "this",
          "Ø",
          "that"
        ],
        "fullSentence": "English is spoken as an international language in many parts of the world.",
        "explain": "• Vị trí 1: Dùng mạo từ không xác định <b>'an'</b> trước 'international language' bắt đầu bằng nguyên âm /ɪ/.<br>• Vị trí 2: Dùng mạo từ xác định <b>'the'</b> trước 'world' vì 'the world' là danh từ chỉ vật thể duy nhất.",
        "hint": "Quy tắc: Trước nguyên âm dùng 'an'; 'the world' luôn có mạo từ 'the'."
      },
      {
        "id": 303,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 3: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>He decided to drop out of university to start his own business. This shocked all his family members.<br>➔ <i>He decided to drop out of university to start his own business, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "He decided to drop out of university to start his own business, [ ... ]",
        "targetWords": [
          "which",
          "shocked",
          "all his",
          "family members."
        ],
        "distractors": [
          "that",
          "who",
          "was shocking",
          "had shocked"
        ],
        "fullSentence": "He decided to drop out of university to start his own business, which shocked all his family members.",
        "explain": "Mệnh đề quan hệ không xác định sử dụng đại từ quan hệ <b>', which'</b> đứng sau dấu phẩy để thay thế cho toàn bộ sự việc ở mệnh đề trước ('việc anh ấy bỏ đại học'). Tuyệt đối không dùng 'that' sau dấu phẩy.",
        "hint": "Công thức: Mệnh đề 1, which + V (chia theo ngôi số ít) + O."
      },
      {
        "id": 304,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>The city authorities planted thousands of trees along main streets. This significantly reduced air pollution.<br>➔ <i>The city authorities planted thousands of trees along main streets, ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ để ghép thành vế câu hoàn chỉnh với ', which':",
        "cues": "The city authorities planted thousands of trees along main streets, [ ... ]",
        "targetWords": [
          "which",
          "significantly reduced",
          "air pollution."
        ],
        "distractors": [
          "that",
          "who",
          "reducing",
          "was reducing"
        ],
        "fullSentence": "The city authorities planted thousands of trees along main streets, which significantly reduced air pollution.",
        "explain": "Đại từ quan hệ <b>', which'</b> thay thế cho cả hành động 'chính quyền thành phố trồng hàng ngàn cây xanh dọc các trục đường chính'.",
        "hint": "Công thức: S + V + O, which + V_ed/V_s + O."
      },
      {
        "id": 305,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 5: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>When I (arrive) ____ at the meeting room yesterday, the director (deliver) ____ a speech.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "When I [ ... ] at the meeting room yesterday, the director [ ... ] a speech.",
        "targetWords": [
          "arrived",
          "was delivering"
        ],
        "distractors": [
          "was arriving",
          "were delivering",
          "delivered",
          "had delivered"
        ],
        "fullSentence": "When I arrived at the meeting room yesterday, the director was delivering a speech.",
        "explain": "Hành động giám đốc đang phát biểu là hành động dài đang diễn ra trong quá khứ ➔ chia <b>Quá khứ tiếp diễn (was delivering)</b>. Hành động tôi bước vào phòng họp là hành động ngắn chen ngang ➔ chia <b>Quá khứ đơn (arrived)</b>.",
        "hint": "Công thức: When + S + V(quá khứ đơn), S + was/were + V-ing."
      },
      {
        "id": 306,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 6: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>While they (discuss) ____ urban housing problems, the electricity suddenly (go) ____ out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While they [ ... ] urban housing problems, the electricity suddenly [ ... ] out.",
        "targetWords": [
          "were discussing",
          "went"
        ],
        "distractors": [
          "was discussing",
          "discussed",
          "was going",
          "gone"
        ],
        "fullSentence": "While they were discussing urban housing problems, the electricity suddenly went out.",
        "explain": "Họ đang thảo luận (hành động dài đang xảy ra) ➔ chia <b>were discussing</b> (chủ ngữ 'they' số nhiều). Đèn đột ngột tắt (hành động ngắn chen ngang) ➔ chia <b>went out</b> (Quá khứ đơn của go).",
        "hint": "Công thức: While + S + was/were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 307,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 7: Chia thì động từ trong ngoặc (Quá khứ đơn / Quá khứ tiếp diễn)</b><br>She (not watch) ____ television when her mother (call) ____ her last night.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "She [ ... ] television when her mother [ ... ] her last night.",
        "targetWords": [
          "was not watching",
          "called"
        ],
        "distractors": [
          "did not watch",
          "were not watching",
          "was calling",
          "calls"
        ],
        "fullSentence": "She was not watching television when her mother called her last night.",
        "explain": "Tại thời điểm mẹ cô ấy gọi điện (hành động ngắn ở quá khứ đơn: 'called'), cô ấy đang không xem tivi (hành động tiếp diễn phủ định: <b>'was not watching'</b> với chủ ngữ số ít 'She').",
        "hint": "Công thức phủ định: S(số ít) + was not + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 308,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 8: Chia thì động từ trong ngoặc ở thể nghi vấn</b><br>What ____ you (do) ____ at 8 PM yesterday?",
        "prompt": "Lôi hoặc chạm các từ tạo thành câu hỏi thì Quá khứ tiếp diễn:",
        "cues": "What [ ... ] you [ ... ] at 8 PM yesterday?",
        "targetWords": [
          "were",
          "doing"
        ],
        "distractors": [
          "did",
          "do",
          "was",
          "are"
        ],
        "fullSentence": "What were you doing at 8 PM yesterday?",
        "explain": "Có mốc thời gian cụ thể trong quá khứ ('at 8 PM yesterday') ➔ dùng thì Quá khứ tiếp diễn. Thể nghi vấn với chủ ngữ 'you': <b>What + were + you + V-ing (doing)?</b>",
        "hint": "Công thức câu hỏi: Từ để hỏi (Wh-) + was/were + S + V-ing + thời điểm quá khứ?"
      },
      {
        "id": 309,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 9: Viết lại câu dùng cụm động từ 'work out'</b><br>We should find some solutions to reducing plastic pollution. (Rewrite using: work out)<br>➔ <i>We should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với cụm từ 'work out':",
        "cues": "[ ... ]",
        "targetWords": [
          "We should",
          "work out",
          "some solutions",
          "to reducing",
          "plastic pollution."
        ],
        "distractors": [
          "solve",
          "to reduce",
          "worked out",
          "working"
        ],
        "fullSentence": "We should work out some solutions to reducing plastic pollution.",
        "explain": "Cụm động từ <b>'work out'</b> = 'find / develop' (tìm ra, nghĩ ra). Cấu trúc: 'solutions to + V-ing' (giải pháp cho việc gì).",
        "hint": "Cụm từ: work out = find (tìm ra); solution to + V-ing."
      },
      {
        "id": 310,
        "type": "word_chips",
        "part": "part1",
        "question": "<b>Part 1 - Bài 10: Viết lại câu dùng cụm động từ 'look up to'</b><br>She respects her grandfather very much because of his great contributions to the community. (Rewrite using: look up to)<br>➔ <i>She ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh với 'look up to':",
        "cues": "[ ... ]",
        "targetWords": [
          "She looks up to",
          "her grandfather",
          "very much",
          "because of",
          "his great contributions",
          "to the community."
        ],
        "distractors": [
          "look up to",
          "looked up to",
          "respects",
          "with"
        ],
        "fullSentence": "She looks up to her grandfather very much because of his great contributions to the community.",
        "explain": "Cụm động từ: <b>'look up to someone'</b> = 'respect someone' (ngưỡng mộ, kính trọng ai). Do chủ ngữ là 'She' nên động từ chia ở thì hiện tại đơn là <b>'looks up to'</b>.",
        "hint": "Cụm từ: S(số ít) + looks up to + O = S + respects + O."
      },
      {
        "id": 311,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>I saw ______ unusual bird in the garden.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I saw [ ... ] unusual bird in the garden.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "I saw an unusual bird in the garden.",
        "explain": "Dùng mạo từ không xác định <b>'an'</b> trước cụm danh từ số ít 'unusual bird' vì từ 'unusual' bắt đầu bằng nguyên âm /ʌ/.",
        "hint": "Quy tắc: Danh từ số ít nhắc lần đầu bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 312,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>The sun is shining brightly. ______ sun makes the day warm.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "The sun is shining brightly. [ ... ] sun makes the day warm.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "The sun is shining brightly. The sun makes the day warm.",
        "explain": "Mặt trời là vật thể duy nhất trong tự nhiên, đồng thời đã được nhắc đến ở câu trước ➔ bắt buộc dùng mạo từ xác định <b>'The'</b>.",
        "hint": "Quy tắc: Danh từ duy nhất trong tự nhiên (Sun, Moon, Earth...) luôn dùng 'The'."
      },
      {
        "id": 313,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a recycling club. It meets every Friday.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a recycling club",
          "which meets",
          "every Friday."
        ],
        "distractors": [
          "who meets",
          "where meets",
          "that meeting",
          "met"
        ],
        "fullSentence": "Our school has a recycling club which meets every Friday.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho danh từ chỉ vật 'a recycling club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V + ..."
      },
      {
        "id": 314,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 4: Nối 2 câu dùng mệnh đề quan hệ với ', which'</b><br>They planted 100 trees last weekend. The activity was part of a green campaign.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "They planted 100 trees",
          "last weekend,",
          "which was part of",
          "a green campaign."
        ],
        "distractors": [
          "that was",
          "who was",
          "which were",
          "being"
        ],
        "fullSentence": "They planted 100 trees last weekend, which was part of a green campaign.",
        "explain": "Mệnh đề quan hệ không xác định với <b>', which was...'</b> thay thế cho toàn bộ sự việc trồng 100 cây cuối tuần trước.",
        "hint": "Công thức: Mệnh đề sự việc, which was + N/Adj..."
      },
      {
        "id": 315,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (walk) home, we __________ (see) a poster about the festival.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] home, we [ ... ] a poster about the festival.",
        "targetWords": [
          "were walking",
          "saw"
        ],
        "distractors": [
          "walked",
          "was walking",
          "were seeing",
          "seen"
        ],
        "fullSentence": "While we were walking home, we saw a poster about the festival.",
        "explain": "Hành động chúng tôi đang đi bộ về nhà (kéo dài trong quá khứ ➔ <b>were walking</b>) thì nhìn thấy tấm áp phích (hành động ngắn chen vào ➔ <b>saw</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 316,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the lights __________ (go) out.",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the lights [ ... ] out.",
        "targetWords": [
          "was reading",
          "went"
        ],
        "distractors": [
          "were reading",
          "read",
          "was going",
          "gone"
        ],
        "fullSentence": "I was reading a biography when the lights went out.",
        "explain": "Tôi đang đọc sách tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì đèn bị tắt (hành động xen ngang ➔ <b>went out</b>).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn)."
      },
      {
        "id": 317,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 8 p.m. yesterday, the students __________ (practise) their cultural performance.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 8 p.m. yesterday, the students [ ... ] their cultural performance.",
        "targetWords": [
          "were practising"
        ],
        "distractors": [
          "was practising",
          "practised",
          "are practising",
          "have practised"
        ],
        "fullSentence": "At 8 p.m. yesterday, the students were practising their cultural performance.",
        "explain": "Có thời điểm xác định cụ thể trong quá khứ ('At 8 p.m. yesterday'), chủ ngữ số nhiều 'the students' ➔ chia thì Quá khứ tiếp diễn <b>'were practising'</b>.",
        "hint": "Công thức: At + giờ cụ thể + thời gian quá khứ: S(số nhiều) + were + V-ing."
      },
      {
        "id": 318,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 8: Chia thì động từ trong ngoặc</b><br>My sister __________ (visit) the history museum last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My sister [ ... ] the history museum last month.",
        "targetWords": [
          "visited"
        ],
        "distractors": [
          "was visiting",
          "visits",
          "has visited",
          "visit"
        ],
        "fullSentence": "My sister visited the history museum last month.",
        "explain": "Có trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'visited'</b>.",
        "hint": "Dấu hiệu thì Quá khứ đơn: last month / last week / yesterday / in + năm quá khứ ➔ V-ed."
      },
      {
        "id": 319,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 9: Viết lại câu dùng cụm động từ 'GIVE UP'</b><br>You should stop wasting electricity. (Rewrite using: GIVE UP)<br>➔ <i>You should ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "You should",
          "give up",
          "wasting electricity."
        ],
        "distractors": [
          "give off",
          "gave up",
          "to waste",
          "stopped"
        ],
        "fullSentence": "You should give up wasting electricity.",
        "explain": "Cụm động từ: <b>'give up + V-ing'</b> = 'stop + V-ing' (từ bỏ, ngừng hẳn làm một thói quen/việc gì đó).",
        "hint": "Công thức: stop + V-ing ➔ give up + V-ing."
      },
      {
        "id": 320,
        "type": "word_chips",
        "part": "part2",
        "question": "<b>Part 2 - Bài 10: Viết lại câu dùng cụm động từ 'LOOK AFTER'</b><br>Please take care of the plants while I am away. (Rewrite using: LOOK AFTER)<br>➔ <i>Please ...</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Please",
          "look after",
          "the plants",
          "while I am away."
        ],
        "distractors": [
          "look for",
          "looked after",
          "looking after",
          "take after"
        ],
        "fullSentence": "Please look after the plants while I am away.",
        "explain": "Cụm động từ: <b>'look after'</b> = 'take care of' (chăm sóc, trông nom cây cối/người thân).",
        "hint": "Công thức: take care of + O ➔ look after + O."
      },
      {
        "id": 321,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 1: Điền mạo từ thích hợp (a / an / the)</b><br>My brother saw ______ amazing documentary about Jane Goodall.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "My brother saw [ ... ] amazing documentary about Jane Goodall.",
        "targetWords": [
          "an"
        ],
        "distractors": [
          "a",
          "the",
          "Ø"
        ],
        "fullSentence": "My brother saw an amazing documentary about Jane Goodall.",
        "explain": "Dùng <b>'an'</b> trước tính từ 'amazing' vì bắt đầu bằng nguyên âm /ə/ ('an amazing documentary').",
        "hint": "Quy tắc: Trước tính từ/danh từ bắt đầu bằng nguyên âm dùng 'an'."
      },
      {
        "id": 322,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 2: Điền mạo từ thích hợp (a / an / the)</b><br>I bought a book yesterday. ______ book is about Vietnamese traditions.",
        "prompt": "Lôi hoặc chạm mạo từ thích hợp vào chỗ trống:",
        "cues": "I bought a book yesterday. [ ... ] book is about Vietnamese traditions.",
        "targetWords": [
          "The"
        ],
        "distractors": [
          "A",
          "An",
          "This"
        ],
        "fullSentence": "I bought a book yesterday. The book is about Vietnamese traditions.",
        "explain": "Quyển sách đã được đề cập ở câu trước ('a book yesterday'), sang câu thứ hai người nghe và người nói đều đã xác định rõ nên dùng <b>'The'</b>.",
        "hint": "Quy tắc: Nhắc lại danh từ đã nói ở câu trước ➔ dùng mạo từ 'The'."
      },
      {
        "id": 323,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 3: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>Our school has a green club. It organises monthly clean-up days.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "Our school has",
          "a green club",
          "which organises",
          "monthly clean-up days."
        ],
        "distractors": [
          "who organises",
          "that organising",
          "which organise",
          "organised"
        ],
        "fullSentence": "Our school has a green club which organises monthly clean-up days.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'a green club' làm chủ ngữ trong mệnh đề quan hệ xác định.",
        "hint": "Công thức: S + V + N(vật) + which + V(chia theo N) + ..."
      },
      {
        "id": 324,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 4: Nối 2 câu dùng đại từ quan hệ 'which'</b><br>The students visited an exhibition. It celebrated different cultures.<br>➔ <i>Ghép 2 câu thành 1 câu dùng 'which':</i>",
        "prompt": "Lôi hoặc chạm các thẻ từ ghép thành câu hoàn chỉnh:",
        "cues": "[ ... ]",
        "targetWords": [
          "The students visited",
          "an exhibition",
          "which celebrated",
          "different cultures."
        ],
        "distractors": [
          "who celebrated",
          "where celebrated",
          "celebrating",
          "which celebrate"
        ],
        "fullSentence": "The students visited an exhibition which celebrated different cultures.",
        "explain": "Đại từ quan hệ <b>'which'</b> thay thế cho 'an exhibition' làm chủ ngữ mệnh đề quan hệ.",
        "hint": "Công thức: S + V + an exhibition + which + celebrated + ..."
      },
      {
        "id": 325,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 5: Chia thì động từ trong ngoặc</b><br>While we __________ (prepare) the display, our teacher __________ (arrive).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "While we [ ... ] the display, our teacher [ ... ].",
        "targetWords": [
          "were preparing",
          "arrived"
        ],
        "distractors": [
          "was preparing",
          "prepared",
          "was arriving",
          "were arriving"
        ],
        "fullSentence": "While we were preparing the display, our teacher arrived.",
        "explain": "Chúng tôi đang chuẩn bị gian trưng bày (hành động kéo dài ➔ <b>were preparing</b>) thì giáo viên bước đến (hành động ngắn chen vào ➔ <b>arrived</b>).",
        "hint": "Công thức: While + S + were + V-ing, S + V(quá khứ đơn)."
      },
      {
        "id": 326,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 6: Chia thì động từ trong ngoặc</b><br>I __________ (read) a biography when the phone __________ (ring).",
        "prompt": "Lôi hoặc chạm dạng đúng của 2 động từ vào chỗ trống:",
        "cues": "I [ ... ] a biography when the phone [ ... ].",
        "targetWords": [
          "was reading",
          "rang"
        ],
        "distractors": [
          "were reading",
          "read",
          "was ringing",
          "rung"
        ],
        "fullSentence": "I was reading a biography when the phone rang.",
        "explain": "Tôi đang đọc tiểu sử (hành động đang diễn ra ➔ <b>was reading</b>) thì điện thoại reo (hành động bất ngờ xen vào ➔ <b>rang</b>, quá khứ của ring).",
        "hint": "Công thức: S + was + V-ing + when + S + V(quá khứ đơn: rang)."
      },
      {
        "id": 327,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 7: Chia thì động từ trong ngoặc</b><br>At 9 a.m. yesterday, the volunteers __________ (plant) trees in the school garden.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "At 9 a.m. yesterday, the volunteers [ ... ] trees in the school garden.",
        "targetWords": [
          "were planting"
        ],
        "distractors": [
          "was planting",
          "planted",
          "have planted",
          "are planting"
        ],
        "fullSentence": "At 9 a.m. yesterday, the volunteers were planting trees in the school garden.",
        "explain": "Tại thời điểm xác định trong quá khứ ('At 9 a.m. yesterday'), chủ ngữ số nhiều 'the volunteers' ➔ chia Quá khứ tiếp diễn <b>'were planting'</b>.",
        "hint": "Công thức: At + giờ cụ thể + yesterday: S(số nhiều) + were + V-ing."
      },
      {
        "id": 328,
        "type": "word_chips",
        "part": "part3",
        "question": "<b>Part 3 - Bài 8: Chia thì động từ trong ngoặc</b><br>My class __________ (take) part in a cultural festival last month.",
        "prompt": "Lôi hoặc chạm dạng đúng của động từ vào chỗ trống:",
        "cues": "My class [ ... ] part in a cultural festival last month.",
        "targetWords": [
          "took"
        ],
        "distractors": [
          "was taking",
          "takes",
          "has taken",
          "taken"
        ],
        "fullSentence": "My class took part in a cultural festival last month.",
        "explain": "Trạng từ thời gian quá khứ xác định 'last month' (tháng trước) ➔ chia thì Quá khứ đơn <b>'took'</b> (quá khứ của take).",
        "hint": "Dấu hiệu quá khứ: last month ➔ take chuyển thành took."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.ENGLISH_TOPICS_DATABASE = ENGLISH_TOPICS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ENGLISH_TOPICS_DATABASE;
}
