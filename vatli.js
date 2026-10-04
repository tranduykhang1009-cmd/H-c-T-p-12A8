// =========================================================================
// Dá»® LIá»†U Váº¬T LĂ 12 - CHÆ¯Æ NG 1: Váº¬T LĂ NHIá»†T (106 CĂ‚U Há»I TRá»ŒN Bá»˜)
// =========================================================================
const FULL_DATABASE = [
      // -------------------------------------------------------------
      // PHẦN 1: SỰ CHUYỂN THỂ - TRẮC NGHIỆM ĐƠN (21 CÂU)
      // -------------------------------------------------------------
      {
        id: 1,
        topic: "SỰ CHUYỂN THỂ",
        question: "Cần một áp suất rất lớn để nén một chất lỏng. Trong khi một chất khí được nén lại dễ dàng. Ý nào sau đây giải thích điều này?",
        options: [
          "A. Các phân tử chất lỏng ở gần nhau hơn và có lực tương tác phân tử mạnh hơn.",
          "B. Các phân tử chất lỏng luôn chuyển động ngẫu nhiên.",
          "C. Các phân tử chất khí ở xa nhau hơn và không tương tác với nhau.",
          "D. Các phân tử chất khí thường xuyên va chạm với nhau và va chạm với thành bình chứa."
        ],
        correct: 0,
        explain: "Ở chất lỏng, khoảng cách giữa các phân tử rất nhỏ và lực tương tác mạnh nên rất khó nén. Ở chất khí, khoảng cách giữa các phân tử rất lớn so với kích thước của chúng nên nén lại rất dễ dàng."
      },
      {
        id: 2,
        topic: "SỰ CHUYỂN THỂ",
        question: "Phát biểu nào sau đây sai khi nói về mô hình động học phân tử?",
        options: [
          "A. Vật chất được cấu tạo từ một số lượng rất lớn các phân tử.",
          "B. Các phân tử chuyển động nhiệt không ngừng.",
          "C. Các phân tử chuyển động nhiệt càng nhanh thì nhiệt độ của vật càng cao.",
          "D. Giữa các phân tử chỉ có lực tương tác hút."
        ],
        correct: 3,
        explain: "Phát biểu D sai vì giữa các phân tử đồng thời tồn tại cả lực hút và lực đẩy phân tử, chứ không phải chỉ có lực hút."
      },
      {
        id: 3,
        topic: "SỰ CHUYỂN THỂ",
        question: "Vật chất ở thể rắn",
        options: [
          "A. thì các phân tử chuyển động nhiệt hỗn loạn, không có vị trí cân bằng xác định.",
          "B. có thể tích xác định nhưng không có hình dạng xác định.",
          "C. có lực tương tác giữa các phân tử rất mạnh giữ cho các phân tử dao động quanh vị trí cân bằng cố định.",
          "D. có khoảng cách giữa các phân tử khá xa nhau."
        ],
        correct: 2,
        explain: "Ở thể rắn, lực tương tác giữa các phân tử rất mạnh giữ cho các phân tử chỉ dao động quanh các vị trí cân bằng cố định xác định."
      },
      {
        id: 4,
        topic: "SỰ CHUYỂN THỂ",
        question: "Vật chất ở thể khí",
        options: [
          "A. thì các phân tử dao động quanh vị trí cân bằng xác định.",
          "B. không có thể tích và hình dạng xác định.",
          "C. có khoảng cách giữa các phân tử rất gần nhau.",
          "D. rất khó nén."
        ],
        correct: 1,
        explain: "Chất khí luôn chiếm toàn bộ thể tích bình chứa, không có hình dạng và thể tích riêng xác định."
      },
      {
        id: 5,
        topic: "SỰ CHUYỂN THỂ",
        question: "Các phân tử khí chuyển động hỗn loạn không ngừng vì",
        options: [
          "A. phân tử khí không có khối lượng.",
          "B. khoảng cách giữa các phân tử khí quá gần nhau.",
          "C. lực tương tác giữa các phân tử quá nhỏ.",
          "D. các phân tử khí luôn đẩy nhau."
        ],
        correct: 2,
        explain: "Khoảng cách giữa các phân tử khí rất lớn nên lực tương tác giữa chúng rất yếu (quá nhỏ), không đủ giữ chúng dao động quanh vị trí cố định."
      },
      {
        id: 6,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong các tính chất sau, tính chất nào là của các phân tử chất rắn?",
        options: [
          "A. Không có hình dạng cố định.",
          "B. Chiếm toàn bộ thể tích của bình chứa.",
          "C. Có lực tương tác phân tử lớn.",
          "D. Chuyển động hỗn loạn không ngừng."
        ],
        correct: 2,
        explain: "Lực tương tác giữa các phân tử chất rắn rất lớn, giữ cho vật có hình dạng và thể tích xác định."
      },
      {
        id: 7,
        topic: "SỰ CHUYỂN THỂ",
        question: "Tính chất nào sau đây không phải là của phân tử?",
        options: [
          "A. Có lúc đứng yên, có lúc chuyển động.",
          "B. Chuyển động không ngừng.",
          "C. Chuyển động càng nhanh thì nhiệt độ của vật càng cao.",
          "D. Va chạm vào thành bình, gây áp suất lên thành bình."
        ],
        correct: 0,
        explain: "Các phân tử luôn chuyển động hỗn loạn không ngừng (chuyển động nhiệt), không bao giờ có lúc đứng yên."
      },
      {
        id: 8,
        topic: "SỰ CHUYỂN THỂ",
        question: "Chất nào sau đây có khả năng chuyển trực tiếp từ thể rắn sang thể hơi khi nó nhận nhiệt?",
        options: [
          "A. Đá khô.",
          "B. Thanh sôcôla.",
          "C. Miếng sắt.",
          "D. Mảnh nhựa."
        ],
        correct: 0,
        explain: "Đá khô (CO2 rắn) xảy ra hiện tượng thăng hoa, chuyển trực tiếp từ thể rắn sang thể hơi mà không qua thể lỏng."
      },
      {
        id: 9,
        topic: "SỰ CHUYỂN THỂ",
        question: "Đặc điểm và tính chất nào dưới đây liên quan đến chất rắn vô định hình?",
        options: [
          "A. Có dạng hình học xác định.",
          "B. Có cấu trúc tinh thể.",
          "C. Có tính dị hướng.",
          "D. Không có nhiệt độ nóng chảy xác định."
        ],
        correct: 3,
        explain: "Chất rắn vô định hình không có cấu trúc tinh thể, có tính đẳng hướng và không có nhiệt độ nóng chảy xác định (khi nung nóng nó mềm dần ra)."
      },
      {
        id: 10,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong các hiện tượng sau đây, hiện tượng nào không liên quan đến sự đông đặc?",
        options: [
          "A. Tuyết rơi.",
          "B. Đúc tượng đồng.",
          "C. Làm đá trong tủ lạnh.",
          "D. Rèn thép trong lò rèn."
        ],
        correct: 3,
        explain: "Rèn thép là nung nóng thanh thép cho mềm rồi dùng búa rèn định hình, không phải quá trình chuyển từ thể lỏng sang thể rắn (đông đặc)."
      },
      {
        id: 11,
        topic: "SỰ CHUYỂN THỂ",
        question: "Một số chất khí có mùi thơm toả ra từ bông hoa hồng làm ta có thể ngửi thấy mùi hoa thơm. Điều này thể hiện tính chất nào của thể khí?",
        options: [
          "A. Dễ dàng nén được.",
          "B. Không có hình dạng xác định.",
          "C. Có thể lan toả trong không gian theo mọi hướng.",
          "D. Không chảy được."
        ],
        correct: 2,
        explain: "Các phân tử khí chuyển động hỗn loạn không ngừng về mọi phía nên có thể khuếch tán và lan tỏa tự do trong không gian."
      },
      {
        id: 12,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trường hợp nào sau đây không xảy ra sự nóng chảy?",
        options: [
          "A. Bỏ cục nước đá vào một cốc nước.",
          "B. Đốt một ngọn nến.",
          "C. Đốt một ngọn đèn dầu.",
          "D. Đúc một cái chuông đồng."
        ],
        correct: 2,
        explain: "Đốt ngọn đèn dầu là dầu hỏa (chất lỏng) thấm qua bấc rồi bay hơi và cháy, không có sự chuyển từ thể rắn sang thể lỏng."
      },
      {
        id: 13,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong các trường hợp dưới đây, trường hợp nào liên quan đến sự bay hơi?",
        options: [
          "A. Kính cửa sổ bị mờ đi trong những ngày đông giá lạnh.",
          "B. Cốc nước bị cạn dần khi để ngoài trời nắng.",
          "C. Miếng bơ để bên ngoài tủ lạnh sau một thời gian bị chảy lỏng.",
          "D. Đưa nước vào trong tủ lạnh để làm đá."
        ],
        correct: 1,
        explain: "Cốc nước bị cạn dần là do các phân tử nước ở mặt thoáng hóa hơi bay vào không khí (sự bay hơi)."
      },
      {
        id: 14,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trường hợp nào sau đây liên quan tới sự nóng chảy?",
        options: [
          "A. Sương đọng trên lá cây.",
          "B. Khăn ướt sẽ khô khi được phơi ra nắng.",
          "C. Đun nước đổ đầy ấm, nước có thể tràn ra ngoài.",
          "D. Cục nước đá bỏ từ tủ đá ra ngoài, sau một thời gian, tan thành nước."
        ],
        correct: 3,
        explain: "Cục nước đá (thể rắn) chuyển thành nước (thể lỏng) là quá trình nóng chảy."
      },
      {
        id: 15,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong các đặc điểm sau đây, đặc điểm nào không phải là sự bay hơi?",
        options: [
          "A. Xảy ra ở bất kì nhiệt độ nào của chất lỏng.",
          "B. Xảy ra trên mặt thoáng của chất lỏng.",
          "C. Không nhìn thấy được.",
          "D. Xảy ra ở nhiệt độ xác định của chất lỏng."
        ],
        correct: 3,
        explain: "Sự bay hơi xảy ra ở bất kì nhiệt độ nào trên mặt thoáng chất lỏng. Quá trình hóa hơi ở nhiệt độ xác định kèm bọt khí là sự sôi."
      },
      {
        id: 16,
        topic: "SỰ CHUYỂN THỂ",
        question: "Quá trình chuyển từ thể rắn sang thể lỏng được gọi là gì?",
        options: [
          "A. Sự ngưng kết.",
          "B. Sự thăng hoa.",
          "C. Sự đông đặc.",
          "D. Sự nóng chảy."
        ],
        correct: 3,
        explain: "Chuyển từ thể rắn sang thể lỏng gọi là sự nóng chảy."
      },
      {
        id: 17,
        topic: "SỰ CHUYỂN THỂ",
        question: "Với cùng một chất, quá trình chuyển thể nào sẽ làm giảm lực tương tác giữa các phân tử nhiều nhất?",
        options: [
          "A. Nóng chảy.",
          "B. Đông đặc.",
          "C. Hóa hơi.",
          "D. Ngưng tụ."
        ],
        correct: 2,
        explain: "Khi hóa hơi, khoảng cách giữa các phân tử tăng lên rất nhiều lần khiến lực tương tác giữa chúng giảm mạnh nhất."
      },
      {
        id: 18,
        topic: "SỰ CHUYỂN THỂ",
        question: "Đưa cốc nước lạnh ra ngoài trời nóng thì thấy xuất hiện một lớp nước bám ngoài thành cốc. Đó là do hiện tượng",
        options: [
          "A. bay hơi.",
          "B. nóng chảy.",
          "C. thăng hoa.",
          "D. ngưng tụ."
        ],
        correct: 3,
        explain: "Hơi nước trong không khí nóng khi gặp thành cốc lạnh bị giảm nhiệt độ và ngưng tụ lại thành các giọt nước bám ngoài thành cốc."
      },
      {
        id: 19,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong các đặc điểm bay hơi sau đây, đặc điểm nào là của sự sôi?",
        options: [
          "A. Xảy ra ở bất kì nhiệt độ nào.",
          "B. Chỉ xảy ra trên mặt thoáng của chất lỏng.",
          "C. Chỉ xảy ra trong lòng chất lỏng.",
          "D. Chỉ xảy ra ở một nhiệt độ xác định của chất lỏng."
        ],
        correct: 3,
        explain: "Sự sôi chỉ xảy ra ở một nhiệt độ xác định (nhiệt độ sôi ứng với áp suất ngoài) và xảy ra ở cả mặt thoáng lẫn trong lòng chất lỏng."
      },
      {
        id: 20,
        topic: "SỰ CHUYỂN THỂ",
        question: "Trong suốt thời gian sôi, nhiệt độ của chất lỏng",
        options: [
          "A. tăng dần lên",
          "B. giảm dần đi",
          "C. khi tăng khi giảm",
          "D. không thay đổi"
        ],
        correct: 3,
        explain: "Trong suốt thời gian sôi, nhiệt độ chất lỏng không thay đổi (nhiệt lượng cung cấp dùng để chuyển trạng thái phân tử sang thể hơi)."
      },
      {
        id: 21,
        topic: "SỰ CHUYỂN THỂ",
        question: "Tốc độ bay hơi của chất lỏng không phụ thuộc vào yếu tố nào sau đây?",
        options: [
          "A. Thể tích của chất lỏng.",
          "B. Gió.",
          "C. Nhiệt độ.",
          "D. Diện tích mặt thoáng của chất lỏng."
        ],
        correct: 0,
        explain: "Tốc độ bay hơi phụ thuộc vào nhiệt độ, diện tích mặt thoáng, gió và độ ẩm, không phụ thuộc vào tổng thể tích khối chất lỏng."
      },

      // -------------------------------------------------------------
      // PHẦN 1: SỰ CHUYỂN THỂ - TRẮC NGHIỆM ĐÚNG/SAI (16 Ý)
      // -------------------------------------------------------------
      {
        id: 22,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Sự Sôi - Ý A]: Nước sôi ở nhiệt độ 100°C (áp suất tiêu chuẩn). Nhiệt độ này gọi là nhiệt độ sôi của nước.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Ở áp suất 1 atm, nước tinh khiết sôi ở 100°C và đây là nhiệt độ sôi của nước."
      },
      {
        id: 23,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Sự Sôi - Ý B]: Trong suốt thời gian sôi, nhiệt độ của nước không thay đổi.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Trong suốt quá trình sôi, nhiệt độ nước luôn giữ không đổi ở 100°C."
      },
      {
        id: 24,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Sự Sôi - Ý C]: Trong suốt thời gian sôi, nhiệt độ của nước tăng dần.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Nhiệt độ của nước không tăng mà được duy trì không đổi trong suốt thời gian sôi."
      },
      {
        id: 25,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Sự Sôi - Ý D]: Sự sôi là một sự bay hơi đặc biệt. Trong suốt thời gian sôi, nước vừa bay hơi tạo ra các bọt khí vừa bay hơi trên mặt thoáng.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đây là định nghĩa đầy đủ và chính xác về bản chất của sự sôi."
      },
      {
        id: 26,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Cấu tạo chất - Ý A]: Các chất được cấu tạo từ các hạt riêng gọi là nguyên tử, phân tử.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG theo thuyết động học phân tử."
      },
      {
        id: 27,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Cấu tạo chất - Ý B]: Các nguyên tử, phân tử đứng sát nhau và giữa chúng không có khoảng cách.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Giữa các nguyên tử, phân tử luôn luôn có khoảng cách."
      },
      {
        id: 28,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Cấu tạo chất - Ý C]: Lực tương tác giữa các phân tử ở thể rắn lớn hơn lực tương tác giữa các phân tử ở thể lỏng và thể khí.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Lực tương tác ở thể rắn là mạnh nhất, sau đó đến thể lỏng và yếu nhất ở thể khí."
      },
      {
        id: 29,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai về Cấu tạo chất - Ý D]: Các nguyên tử, phân tử chất lỏng dao động xung quanh các vị trí cân bằng không cố định.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Ở thể lỏng, vị trí cân bằng của các phân tử không cố định mà di chuyển liên tục."
      },
      {
        id: 30,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị nước đá - Ý A]: Đoạn OA (nằm ngang ở 0°C) cho biết nước tồn tại ở cả thể rắn và thể lỏng.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đoạn nằm ngang ở 0°C là quá trình nóng chảy, nước đá đang chuyển thành nước lỏng nên tồn tại cả thể rắn và thể lỏng."
      },
      {
        id: 31,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị nước đá - Ý B]: Đoạn CD cho biết nước không tồn tại ở thể lỏng.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đoạn CD là sau khi đã hoá hơi hoàn toàn, nước chỉ tồn tại ở thể hơi/khí."
      },
      {
        id: 32,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị nước đá - Ý C]: Đoạn AB cho biết nước đang tồn tại ở thể rắn.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Đoạn AB nhiệt độ tăng từ 0°C đến 100°C, nước hoàn toàn tồn tại ở thể lỏng."
      },
      {
        id: 33,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị nước đá - Ý D]: Đoạn BC cho biết nước đang sôi.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đoạn BC nằm ngang ở 100°C là giai đoạn nước đang sôi."
      },
      {
        id: 34,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị làm nóng chất rắn - Ý A]: Ứng với đoạn A trên đồ thị, chất ở thể rắn.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đoạn đầu tiên nhiệt độ tăng dần từ trạng thái ban đầu là chất đang ở thể rắn."
      },
      {
        id: 35,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị làm nóng chất rắn - Ý B]: Chất được làm nóng là chất rắn kết tinh và đoạn B trên đồ thị ứng với quá trình nóng chảy của chất.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Chất rắn kết tinh có nhiệt độ nóng chảy xác định không đổi ở đoạn nằm ngang B."
      },
      {
        id: 36,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị làm nóng chất rắn - Ý C]: Ứng với đoạn C trên đồ thị, chất ở thể khí và có nhiệt độ tăng dần.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Sau đoạn nóng chảy B, đoạn C là chất ở thể lỏng đang tăng nhiệt độ đến nhiệt độ sôi."
      },
      {
        id: 37,
        topic: "SỰ CHUYỂN THỂ",
        question: "[Đúng/Sai - Đồ thị làm nóng chất rắn - Ý D]: Ứng với đoạn D trên đồ thị, chất vừa ở thể lỏng vừa ở thể khí (hơi).",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Đoạn nằm ngang thứ hai (đoạn D) là quá trình sôi, tồn tại đồng thời cả thể lỏng và thể hơi."
      },

      // -------------------------------------------------------------
      // PHẦN 1: SỰ CHUYỂN THỂ - TRẢ LỜI NGẮN / BÀI TOÁN (4 CÂU)
      // -------------------------------------------------------------
      {
        id: 38,
        topic: "SỰ CHUYỂN THỂ",
        question: "Một thợ kim hoàn muốn nấu chảy một thỏi vàng có khối lượng 74 g để đúc một tấm thẻ bài nhỏ. Tính nhiệt lượng (đơn vị J) cần cung cấp để nấu chảy thỏi vàng ở nhiệt độ nóng chảy của nó. Biết nhiệt nóng chảy riêng của vàng là 0,64.10⁵ J/kg.",
        options: [
          "A. 4 736 J",
          "B. 47 360 J",
          "C. 9 730 J",
          "D. 0,4736 J"
        ],
        correct: 0,
        explain: "Khối lượng: m = 74 g = 0,074 kg. Nhiệt lượng nóng chảy: Q = m.λ = 0,074 × 0,64.10⁵ = 4 736 J."
      },
      {
        id: 39,
        topic: "SỰ CHUYỂN THỂ",
        question: "Cho biết nhiệt nóng chảy riêng của nước đá và nhiệt hoá hơi riêng của nước lần lượt là 3,34.10⁵ J/kg và 2,3.10⁶ J/kg. Năng lượng cần thiết để hoá hơi hoàn toàn 1 kg nước ở nhiệt độ sôi có thể làm nóng chảy bao nhiêu kilôgam nước đá? (Làm tròn 1 chữ số thập phân)",
        options: [
          "A. 6,9 kg",
          "B. 7,2 kg",
          "C. 6,5 kg",
          "D. 8,1 kg"
        ],
        correct: 0,
        explain: "Nhiệt lượng hoá hơi 1 kg nước: Q = 1 × 2,3.10⁶ = 2,3.10⁶ J. Khối lượng nước đá nóng chảy: m = Q / λ = 2,3.10⁶ / (3,34.10⁵) ≈ 6,886 kg ≈ 6,9 kg."
      },
      {
        id: 40,
        topic: "SỰ CHUYỂN THỂ",
        question: "Một tinh thể bị nấu chảy thành chất lỏng nóng và sau đó để nguội đi. Bảng số liệu ghi lại nhiệt độ theo thời gian (0p: 100°C; 5p: 85°C; 10p: 72°C; 15p: 72°C; 20p: 72°C; 25p: 67°C; 30p: 61°C). Nhiệt độ nóng chảy của tinh thể là bao nhiêu °C?",
        options: [
          "A. 72°C",
          "B. 85°C",
          "C. 100°C",
          "D. 67°C"
        ],
        correct: 0,
        explain: "Từ phút thứ 10 đến phút thứ 20, nhiệt độ giữ không đổi ở 72°C trong quá trình chuyển pha đông đặc (cũng chính là nhiệt độ nóng chảy) của tinh thể."
      },
      {
        id: 41,
        topic: "SỰ CHUYỂN THỂ",
        question: "Một ấm điện có công suất 450 W được dùng để đun sôi nước. Giả sử không có mất mát năng lượng nhiệt thì sau 15 phút nước sôi, có bao nhiêu gam hơi nước được tạo thành? Biết nhiệt hoá hơi riêng của nước là 2,3.10⁶ J/kg. (Làm tròn đến hàng đơn vị)",
        options: [
          "A. 176 g",
          "B. 225 g",
          "C. 150 g",
          "D. 195 g"
        ],
        correct: 0,
        explain: "Thời gian: t = 15 × 60 = 900 s. Nhiệt lượng cung cấp: Q = P.t = 450 × 900 = 405 000 J. Khối lượng hơi nước: m = Q / L = 405 000 / (2,3.10⁶) ≈ 0,176087 kg ≈ 176 g."
      },

      // -------------------------------------------------------------
      // PHẦN 2: THANG NHIỆT ĐỘ - TRẮC NGHIỆM ĐƠN (19 CÂU)
      // -------------------------------------------------------------
      {
        id: 42,
        topic: "THANG NHIỆT ĐỘ",
        question: "Dụng cụ nào sau đây dùng để đo nhiệt độ?",
        options: [
          "A. Cân đồng hồ.",
          "B. Nhiệt kế.",
          "C. Vôn kế.",
          "D. Tốc kế."
        ],
        correct: 1,
        explain: "Nhiệt kế là thiết bị đo nhiệt độ."
      },
      {
        id: 43,
        topic: "THANG NHIỆT ĐỘ",
        question: "\"Độ không tuyệt đối\" là nhiệt độ ứng với",
        options: [
          "A. 0 K.",
          "B. 0°C.",
          "C. 273°C.",
          "D. 273 K."
        ],
        correct: 0,
        explain: "Độ không tuyệt đối là 0 K trên thang Kelvin (tương ứng -273,15°C)."
      },
      {
        id: 44,
        topic: "THANG NHIỆT ĐỘ",
        question: "Liên hệ giữa nhiệt độ theo thang Ken-vin và nhiệt độ theo thang Xen-xi-út (khi làm tròn số) là",
        options: [
          "A. T(K) = t(°C) + 273.",
          "B. T(K) = t(°C) - 273.",
          "C. T(K) = t(°C) / 273.",
          "D. T(K) = 273.t(°C)."
        ],
        correct: 0,
        explain: "Công thức liên hệ chuẩn: T(K) = t(°C) + 273."
      },
      {
        id: 45,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nhiệt độ nóng chảy của thuỷ ngân là -39 °C. Nhiệt độ này tương ứng với",
        options: [
          "A. 234 K.",
          "B. 313 K.",
          "C. -313 K.",
          "D. 324 K."
        ],
        correct: 0,
        explain: "T = t + 273 = -39 + 273 = 234 K."
      },
      {
        id: 46,
        topic: "THANG NHIỆT ĐỘ",
        question: "Ở nhiệt độ bao nhiêu trong thang Celsius thì giá trị nhiệt độ bằng một nửa nhiệt độ tuyệt đối của nó?",
        options: [
          "A. 0°C.",
          "B. 100°C.",
          "C. 273°C.",
          "D. 546°C."
        ],
        correct: 2,
        explain: "Theo đề bài: t = T / 2 => T = 2t. Mà T = t + 273 => 2t = t + 273 => t = 273°C."
      },
      {
        id: 47,
        topic: "THANG NHIỆT ĐỘ",
        question: "Điểm cố định dưới (nước đá tan) và điểm cố định trên (nước sôi) của một nhiệt kế hỏng lần lượt là -2°C và 102°C. Nếu số chỉ nhiệt kế này là 50°C thì nhiệt độ đúng trong thang Celsius là bao nhiêu?",
        options: [
          "A. 50°C.",
          "B. 52°C.",
          "C. 48°C.",
          "D. 55°C."
        ],
        correct: 0,
        explain: "Thang hỏng có khoảng cách 102 - (-2) = 104 vạch tương ứng 100°C chuẩn. Độ lệch vạch đo: 50 - (-2) = 52 vạch. Nhiệt độ đúng: t = 52 × (100 / 104) = 50°C."
      },
      {
        id: 48,
        topic: "THANG NHIỆT ĐỘ",
        question: "Cho hai vật có nhiệt độ khác nhau tiếp xúc với nhau. Nhiệt được truyền từ vật nào sang vật nào?",
        options: [
          "A. Từ vật có khối lượng lớn hơn sang vật có khối lượng nhỏ hơn.",
          "B. Từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.",
          "C. Từ vật có nhiệt năng lớn hơn sang vật có nhiệt năng nhỏ hơn.",
          "D. Từ vật ở trên cao sang vật ở dưới thấp."
        ],
        correct: 1,
        explain: "Nhiệt lượng tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn cho đến khi đạt cân bằng nhiệt."
      },
      {
        id: 49,
        topic: "THANG NHIỆT ĐỘ",
        question: "Kết luận nào dưới đây là không đúng với thang nhiệt độ Xen-xi-út?",
        options: [
          "A. Kí hiệu của nhiệt độ là t.",
          "B. Chọn mốc nhiệt độ nước đá đang tan ở áp suất 1 atm là 0°C.",
          "C. 1°C tương ứng với 273 K.",
          "D. Đơn vị đo nhiệt độ là °C."
        ],
        correct: 2,
        explain: "Phát biểu C sai vì độ biến thiên 1°C có cùng độ lớn với độ biến thiên 1 K (Δt = ΔT), chứ không phải 1°C tương ứng 273 K."
      },
      {
        id: 50,
        topic: "THANG NHIỆT ĐỘ",
        question: "Khi nhiệt độ tuyệt đối tăng thêm 6 K thì nhiệt độ Xen-xi-út",
        options: [
          "A. tăng thêm 6°C.",
          "B. tăng thêm 279°C.",
          "C. giảm đi 6°C.",
          "D. tăng thêm 267°C."
        ],
        correct: 0,
        explain: "Độ tăng nhiệt độ trong thang Kelvin luôn bằng độ tăng nhiệt độ trong thang Celsius: ΔT = Δt = 6°C."
      },
      {
        id: 51,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nhiệt độ không tuyệt đối là nhiệt độ tại đó",
        options: [
          "A. Nước đông đặc thành đá.",
          "B. Tất cả các chất khí hóa lỏng.",
          "C. Chuyển động nhiệt phân tử hầu như dừng lại.",
          "D. Tất cả các chất khí hóa rắn."
        ],
        correct: 2,
        explain: "Ở độ không tuyệt đối (0 K), năng lượng chuyển động nhiệt của các phân tử đạt giá trị cực tiểu và xem như dừng lại."
      },
      {
        id: 52,
        topic: "THANG NHIỆT ĐỘ",
        question: "Bản tin thời tiết nhiệt độ Hà Nội: từ 19°C đến 28°C. Nhiệt độ trên tương ứng với khoảng nhiệt độ nào trong thang nhiệt Kelvin?",
        options: [
          "A. Nhiệt độ từ 292 K đến 301 K.",
          "B. Nhiệt độ từ 19 K đến 28 K.",
          "C. Nhiệt độ từ 273 K đến 301 K.",
          "D. Nhiệt độ từ 273 K đến 292 K."
        ],
        correct: 0,
        explain: "T1 = 19 + 273 = 292 K; T2 = 28 + 273 = 301 K."
      },
      {
        id: 53,
        topic: "THANG NHIỆT ĐỘ",
        question: "Cách xác định nhiệt độ trong thang nhiệt độ Celsius là?",
        options: [
          "A. Lấy nhiệt độ của nước khi đóng băng là 10°C và nhiệt độ sôi của nước (100°C) làm chuẩn.",
          "B. Lấy nhiệt độ của nước khi đóng băng là 10°C và nhiệt độ sôi của nước (0°C) làm chuẩn.",
          "C. Lấy nhiệt độ của nước khi đóng băng là 0°C và nhiệt độ sôi của nước (100°C) làm chuẩn.",
          "D. Lấy nhiệt độ của nước khi đóng băng là 100°C và nhiệt độ sôi của nước (10°C) làm chuẩn."
        ],
        correct: 2,
        explain: "Thang Celsius lấy điểm băng là 0°C và điểm sôi là 100°C của nước tinh khiết ở 1 atm."
      },
      {
        id: 54,
        topic: "THANG NHIỆT ĐỘ",
        question: "Theo thang nhiệt độ Celsius, từ nhiệt độ đóng băng đến nhiệt độ sôi của nước được chia thành",
        options: [
          "A. 100 phần bằng nhau, mỗi phần ứng với 1°C.",
          "B. 100 phần bằng nhau, mỗi phần ứng với 1 K.",
          "C. 100 phần bằng nhau, mỗi phần ứng với 1°F.",
          "D. 10 phần bằng nhau, mỗi phần ứng với 1°C."
        ],
        correct: 0,
        explain: "Khoảng cách từ 0°C đến 100°C được chia làm 100 phần bằng nhau, mỗi phần là 1°C."
      },
      {
        id: 55,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nhiệt kế chất lỏng được chế tạo dựa trên nguyên tắc nào?",
        options: [
          "A. Sự nở vì nhiệt của chất lỏng.",
          "B. Sự nở ra của chất lỏng khi nhiệt độ giảm.",
          "C. Sự co lại của chất lỏng khi nhiệt độ tăng.",
          "D. Sự nở của chất lỏng không phụ thuộc vào nhiệt độ."
        ],
        correct: 0,
        explain: "Nhiệt kế chất lỏng hoạt động dựa trên sự nở vì nhiệt của chất lỏng chứa trong bầu và ống quản."
      },
      {
        id: 56,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nhiệt kế nào sau đây hoạt động dựa trên hiện tượng nở vì nhiệt của chất lỏng?",
        options: [
          "A. Nhiệt kế thuỷ ngân.",
          "B. Nhiệt kế kim loại.",
          "C. Nhiệt kế hồng ngoại.",
          "D. Nhiệt kế điện tử."
        ],
        correct: 0,
        explain: "Thủy ngân là chất lỏng ở nhiệt độ thường; nhiệt kế thủy ngân dùng sự dãn nở vì nhiệt của chất lỏng."
      },
      {
        id: 57,
        topic: "THANG NHIỆT ĐỘ",
        question: "Trong các nhiệt kế sau đây, em hãy chọn nhiệt kế phù hợp để đo nhiệt độ của nước sôi?",
        options: [
          "A. Nhiệt kế y tế có thang chia độ từ 35°C đến 42°C.",
          "B. Nhiệt kế rượu có thang chia độ từ -30°C đến 60°C.",
          "C. Nhiệt kế thuỷ ngân có thang chia độ từ -10°C đến 110°C.",
          "D. Nhiệt kế hồng ngoại có thang chia độ từ 30°C đến 45°C."
        ],
        correct: 2,
        explain: "Nước sôi ở 100°C, nhiệt kế thủy ngân có thang đo từ -10°C đến 110°C bao hàm được nhiệt độ này."
      },
      {
        id: 58,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nếu hai vật có nhiệt độ khác nhau đặt tiếp xúc nhau thì:",
        options: [
          "A. Quá trình truyền nhiệt dừng lại khi nhiệt độ hai vật như nhau.",
          "B. Quá trình truyền nhiệt dừng lại khi nhiệt độ một vật đạt 0°C.",
          "C. Quá trình truyền nhiệt tiếp tục cho đến khi nhiệt năng hai vật như nhau.",
          "D. Quá trình truyền nhiệt cho đến khi nhiệt dung riêng hai vật như nhau."
        ],
        correct: 0,
        explain: "Quá trình truyền nhiệt dừng lại khi hai vật đạt trạng thái cân bằng nhiệt, nghĩa là nhiệt độ của chúng bằng nhau."
      },
      {
        id: 59,
        topic: "THANG NHIỆT ĐỘ",
        question: "Trong thang nhiệt Celsius, nhiệt độ của nước đang sôi ở áp suất chuẩn là bao nhiêu?",
        options: [
          "A. 273 K",
          "B. 100°C",
          "C. 0 K",
          "D. 0°C"
        ],
        correct: 1,
        explain: "Nước đang sôi ở áp suất 1 atm có nhiệt độ là 100°C."
      },
      {
        id: 60,
        topic: "THANG NHIỆT ĐỘ",
        question: "Một thang đo X lấy điểm băng là -10°X, lấy điểm sôi là 90°X. Nhiệt độ của một vật đọc được trên nhiệt kế Celsius là 40°C thì trên nhiệt kế X có nhiệt độ bằng",
        options: [
          "A. 20°X.",
          "B. 30°X.",
          "C. 40°X.",
          "D. 50°X."
        ],
        correct: 1,
        explain: "Khoảng chia thang X: 90 - (-10) = 100°X ứng với 100°C => 1°C = 1°X. Do đó: t_X = -10 + 40 × 1 = 30°X."
      },

      // -------------------------------------------------------------
      // PHẦN 2: THANG NHIỆT ĐỘ - TRẮC NGHIỆM ĐÚNG/SAI (11 Ý)
      // -------------------------------------------------------------
      {
        id: 61,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Bảng trạm khí tượng - Ý A]: Nhiệt độ lúc 4 giờ là 13°C.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Tra bảng số liệu: thời gian 4h tương ứng 13°C."
      },
      {
        id: 62,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Bảng trạm khí tượng - Ý B]: Nhiệt độ thấp nhất trong ngày là vào lúc 1 giờ.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Nhiệt độ thấp nhất trong bảng là 12°C vào lúc 22 giờ."
      },
      {
        id: 63,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Bảng trạm khí tượng - Ý C]: Nhiệt độ cao nhất trong ngày là vào lúc 16 giờ.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Nhiệt độ cao nhất đạt 20°C vào thời điểm 16 giờ."
      },
      {
        id: 64,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Bảng trạm khí tượng - Ý D]: Độ chênh lệch nhiệt độ trong ngày lớn nhất là 6°C.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Độ chênh lệch lớn nhất là 20°C - 12°C = 8°C."
      },
      {
        id: 65,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Nhiệt kế y tế - Ý A]: Thang đo 35°C - 42°C vì đó là giới hạn tối đa trong sự dãn nở vì nhiệt của thuỷ ngân.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Thủy ngân dãn nở tuyến tính từ -39°C đến tận 357°C."
      },
      {
        id: 66,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Nhiệt kế y tế - Ý B]: Thang đo 35°C - 42°C vì thân nhiệt bình thường của con người nằm trong khoảng này.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Thân nhiệt người chỉ dao động quanh khoảng 36,5°C - 37,5°C và không vượt quá 35°C - 42°C khi còn sống."
      },
      {
        id: 67,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Nhiệt kế y tế - Ý C]: Vì nhiệt độ cao hơn 42°C thì thể tích thuỷ ngân biến thiên không còn tuyến tính.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Thủy ngân vẫn dãn nở tuyến tính rất tốt ở nhiệt độ cao hơn 42°C."
      },
      {
        id: 68,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Nhiệt kế y tế - Ý D]: Vì nhiệt độ thấp hơn 35°C thì thể tích thuỷ ngân biến thiên không còn tuyến tính.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI."
      },
      {
        id: 69,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Xác định vạch 0°C - Ý A]: Đặt nhiệt kế vào ngăn đông của tủ lạnh để xác định vạch 0°C.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Ngăn đông tủ lạnh thường có nhiệt độ âm sâu (-12°C đến -18°C), không chuẩn 0°C."
      },
      {
        id: 70,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Xác định vạch 0°C - Ý C]: Đặt nhiệt kế vào nước đá đang tan chảy để xác định vạch 0°C.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Nước đá tinh khiết đang tan ở áp suất tiêu chuẩn luôn ở đúng nhiệt độ 0°C."
      },
      {
        id: 71,
        topic: "THANG NHIỆT ĐỘ",
        question: "[Đúng/Sai - Xác định vạch 0°C - Ý D]: Đặt nhiệt kế vào ngọn lửa của bếp gas để xác định vạch 0°C.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Ngọn lửa bếp gas có nhiệt độ hàng trăm đến hơn nghìn độ C."
      },

      // -------------------------------------------------------------
      // PHẦN 2: THANG NHIỆT ĐỘ - TRẢ LỜI NGẮN / BÀI TOÁN (4 CÂU)
      // -------------------------------------------------------------
      {
        id: 72,
        topic: "THANG NHIỆT ĐỘ",
        question: "Người người sử dụng một nhiệt kế thuỷ ngân dùng thang Celsius đo được khoảng cách từ vạch 20°C đến vạch 32°C là 1,5 cm. Tính khoảng cách (đơn vị cm) từ vạch 14°C đến vạch 50°C trên nhiệt kế này.",
        options: [
          "A. 4,5 cm",
          "B. 3,6 cm",
          "C. 5,0 cm",
          "D. 4,2 cm"
        ],
        correct: 0,
        explain: "Khoảng cách 32 - 20 = 12°C ứng với 1,5 cm => 1°C ứng với 1,5 / 12 = 0,125 cm. Từ 14°C đến 50°C chênh lệch 50 - 14 = 36°C. Chiều dài: 36 × 0,125 = 4,5 cm."
      },
      {
        id: 73,
        topic: "THANG NHIỆT ĐỘ",
        question: "Dùng nhiệt kế thuỷ ngân thang Kelvin đo được khoảng cách từ vạch nước đá tan đến vạch nước sôi ở 1 atm là 12 cm. Tính khoảng cách (đơn vị cm) giữa hai vạch lệch nhau 1 K liên tiếp trên nhiệt kế này.",
        options: [
          "A. 0,12 cm",
          "B. 0,24 cm",
          "C. 1,20 cm",
          "D. 0,06 cm"
        ],
        correct: 0,
        explain: "Từ nước đá tan (273 K) đến nước sôi (373 K) là 100 K tương ứng với 12 cm. Khoảng cách giữa 2 vạch lệch nhau 1 K: 12 / 100 = 0,12 cm."
      },
      {
        id: 74,
        topic: "THANG NHIỆT ĐỘ",
        question: "Một nhiệt kế thang nhiệt độ Z có điểm băng là -5°Z và điểm sôi là 105°Z ở 1 atm. Nhiệt độ của vật bằng bao nhiêu (theo thang Xen-xi-út) để số chỉ trên hai thang nhiệt độ bằng nhau?",
        options: [
          "A. 50°C",
          "B. 45°C",
          "C. 60°C",
          "D. 55°C"
        ],
        correct: 0,
        explain: "Khoảng chia thang Z: 105 - (-5) = 110°Z ứng với 100°C. Phương trình chuyển đổi: (Z - (-5)) / 110 = t / 100 => (Z + 5) / 11 = t / 10. Khi Z = t: 10(t + 5) = 11t => 10t + 50 = 11t => t = 50°C."
      },
      {
        id: 75,
        topic: "THANG NHIỆT ĐỘ",
        question: "Nhiệt kế thuỷ ngân tuyến tính có thang đo kéo dài từ -10°C đến 110°C với chiều dài thang đo là 240 mm. Tính quãng đường (đơn vị mm) mà thuỷ ngân dịch chuyển được khi nhiệt độ tăng từ 0°C đến 1°C.",
        options: [
          "A. 2 mm",
          "B. 1 mm",
          "C. 2,4 mm",
          "D. 0,5 mm"
        ],
        correct: 0,
        explain: "Toàn thang đo: 110 - (-10) = 120°C có chiều dài 240 mm. Khi tăng 1°C, độ dịch chuyển là: 240 / 120 = 2 mm."
      },

      // -------------------------------------------------------------
      // PHẦN 3: NỘI NĂNG & ĐỊNH LUẬT I NĐLH - TRẮC NGHIỆM ĐƠN (19 CÂU)
      // -------------------------------------------------------------
      {
        id: 76,
        topic: "NỘI NĂNG & NĐLH",
        question: "Công thức nào sau đây mô tả đúng nguyên lí I của NĐLH?",
        options: [
          "A. ΔU = A - Q.",
          "B. ΔU = Q - A.",
          "C. A = ΔU - Q.",
          "D. ΔU = A + Q."
        ],
        correct: 3,
        explain: "Biểu thức của nguyên lí I Nhiệt động lực học: ΔU = A + Q."
      },
      {
        id: 77,
        topic: "NỘI NĂNG & NĐLH",
        question: "Quy ước về dấu nào sau đây đúng với công thức ΔU = A + Q của nguyên lí I NĐLH?",
        options: [
          "A. Vật nhận công: A < 0; vật nhận nhiệt: Q < 0.",
          "B. Vật nhận công: A > 0; vật nhận nhiệt: Q > 0.",
          "C. Vật thực hiện công: A < 0; vật truyền nhiệt: Q > 0.",
          "D. Vật thực hiện công: A > 0; vật truyền nhiệt: Q < 0."
        ],
        correct: 1,
        explain: "Quy ước dấu chuẩn: Nhận công A > 0, sinh/thực hiện công A < 0; Nhận nhiệt Q > 0, truyền nhiệt Q < 0."
      },
      {
        id: 78,
        topic: "NỘI NĂNG & NĐLH",
        question: "Trường hợp nào dưới đây làm biến đổi nội năng không do thực hiện công?",
        options: [
          "A. Mài dao.",
          "B. Đóng đinh.",
          "C. Khuấy nước.",
          "D. Nung sắt trong lò."
        ],
        correct: 3,
        explain: "Nung sắt trong lò là quá trình truyền nhiệt trực tiếp, không có lực tác dụng gây độ dời cơ học (thực hiện công)."
      },
      {
        id: 79,
        topic: "NỘI NĂNG & NĐLH",
        question: "Trường hợp nào dưới đây làm biến đổi nội năng của vật không phải do truyền nhiệt?",
        options: [
          "A. Nung sắt trong lò.",
          "B. Đóng đinh.",
          "C. Đun nước sôi.",
          "D. Nung đồng trong lò."
        ],
        correct: 1,
        explain: "Đóng đinh là làm nóng đinh thông qua việc thực hiện công cơ học của búa tác dụng vào đinh."
      },
      {
        id: 80,
        topic: "NỘI NĂNG & NĐLH",
        question: "Gọi t là nhiệt độ lúc sau, t₀ là nhiệt độ lúc đầu của vật. Công thức tính nhiệt lượng mà vật thu vào để tăng nhiệt độ là:",
        options: [
          "A. Q = m(t - t₀)",
          "B. Q = mc(t₀ - t)",
          "C. Q = mc",
          "D. Q = mc(t - t₀)"
        ],
        correct: 3,
        explain: "Công thức nhiệt lượng thu vào: Q = m.c.(t - t₀) = m.c.Δt."
      },
      {
        id: 81,
        topic: "NỘI NĂNG & NĐLH",
        question: "Đặt thanh gỗ A đứng yên, cọ xát thanh gỗ B lên thanh gỗ A thì",
        options: [
          "A. nhiệt độ thanh gỗ A không đổi, nhiệt độ thanh gỗ B tăng lên.",
          "B. nhiệt độ thanh gỗ A tăng lên, nhiệt độ thanh gỗ B không đổi.",
          "C. nhiệt độ cả hai thanh gỗ đều tăng.",
          "D. nhiệt độ cả hai thanh gỗ đều không đổi."
        ],
        correct: 2,
        explain: "Lực ma sát thực hiện công làm tăng nội năng của cả hai vật tiếp xúc, làm nhiệt độ của cả hai thanh gỗ cùng tăng."
      },
      {
        id: 82,
        topic: "NỘI NĂNG & NĐLH",
        question: "Nội năng của vật phụ thuộc vào",
        options: [
          "A. nhiệt độ và thể tích của vật.",
          "B. khối lượng và nhiệt độ của vật.",
          "C. khối lượng và thể tích của vật.",
          "D. khối lượng của vật."
        ],
        correct: 0,
        explain: "Nội năng là tổng động năng và thế năng phân tử: động năng phụ thuộc nhiệt độ T, thế năng phân tử phụ thuộc khoảng cách giữa các phân tử (thể tích V)."
      },
      {
        id: 83,
        topic: "NỘI NĂNG & NĐLH",
        question: "Nhiệt lượng của vật bằng 0 khi",
        options: [
          "A. vật truyền nhiệt.",
          "B. vật nhận nhiệt.",
          "C. vật không trao đổi nhiệt.",
          "D. vật trao đổi nhiệt."
        ],
        correct: 2,
        explain: "Nhiệt lượng là số đo phần nội năng biến thiên trong quá trình truyền nhiệt. Không có quá trình truyền nhiệt thì Q = 0."
      },
      {
        id: 84,
        topic: "NỘI NĂNG & NĐLH",
        question: "Nội năng của một vật là",
        options: [
          "A. tổng động năng và thế năng của vật.",
          "B. tổng động năng và thế năng của các phân tử cấu tạo nên vật.",
          "C. tổng nhiệt lượng và cơ năng mà vật nhận được trong quá trình truyền nhiệt và thực hiện công.",
          "D. nhiệt lượng vật nhận được trong quá trình truyền nhiệt."
        ],
        correct: 1,
        explain: "Định nghĩa: Nội năng của một vật là tổng động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật."
      },
      {
        id: 85,
        topic: "NỘI NĂNG & NĐLH",
        question: "Nhiệt năng và nội năng khác nhau ở chỗ?",
        options: [
          "A. Nội năng của vật có động năng phân tử còn nhiệt năng thì không.",
          "B. Nhiệt năng của vật có thế năng phân tử còn nội năng thì không.",
          "C. Nội năng của vật có thế năng phân tử còn nhiệt năng thì không.",
          "D. Nhiệt năng của vật có động năng phân tử còn nội năng thì không."
        ],
        correct: 2,
        explain: "Nhiệt năng chỉ là tổng động năng phân tử; còn nội năng gồm cả động năng và thế năng tương tác phân tử."
      },
      {
        id: 86,
        topic: "NỘI NĂNG & NĐLH",
        question: "Hiện tượng quả bóng bàn bị móp (chưa thủng) khi thả vào cốc nước nóng sẽ phồng trở lại là do",
        options: [
          "A. Nội năng của chất khí tăng lên.",
          "B. Nội năng của chất khí giảm xuống.",
          "C. Nội năng của chất khí không thay đổi.",
          "D. Nội năng của chất khí bị mất đi."
        ],
        correct: 0,
        explain: "Chất khí bên trong bóng nhận nhiệt lượng từ nước nóng làm nhiệt độ và nội năng tăng, áp suất tăng làm bóng phồng trở lại."
      },
      {
        id: 87,
        topic: "NỘI NĂNG & NĐLH",
        question: "Điều gì xảy ra với nội năng của phần nước còn lại trong cốc khi một cốc nước đang bay hơi?",
        options: [
          "A. Nội năng tăng vì số lượng phân tử giảm và nhiệt độ tăng.",
          "B. Nội năng giảm vì số lượng phân tử giảm và nhiệt độ tăng.",
          "C. Nội năng tăng vì số lượng phân tử giảm và nhiệt độ giảm.",
          "D. Nội năng giảm vì số lượng phân tử giảm và nhiệt độ giảm."
        ],
        correct: 3,
        explain: "Các phân tử bay hơi mang theo động năng lớn làm giảm số phân tử và giảm nhiệt độ của phần nước còn lại, dẫn tới nội năng giảm."
      },
      {
        id: 88,
        topic: "NỘI NĂNG & NĐLH",
        question: "Đơn vị của nhiệt dung riêng của vật là:",
        options: [
          "A. J/kg",
          "B. kg/J",
          "C. J/(kg.K)",
          "D. kg/(J.K)"
        ],
        correct: 2,
        explain: "Nhiệt dung riêng c = Q / (m.Δt) có đơn vị chuẩn là J/(kg.K) hoặc J/(kg.°C)."
      },
      {
        id: 89,
        topic: "NỘI NĂNG & NĐLH",
        question: "Nhiệt lượng trao đổi trong quá trình truyền nhiệt không phụ thuộc vào:",
        options: [
          "A. thời gian truyền nhiệt.",
          "B. độ biến thiên nhiệt độ.",
          "C. khối lượng của chất.",
          "D. nhiệt dung riêng của chất."
        ],
        correct: 0,
        explain: "Theo công thức Q = mcΔt, nhiệt lượng phụ thuộc m, c, Δt và không phụ thuộc trực tiếp vào thời gian."
      },
      {
        id: 90,
        topic: "NỘI NĂNG & NĐLH",
        question: "Khi một hệ chuyển từ trạng thái A sang trạng thái B, nó được cấp nhiệt lượng 500 J và thực hiện một công 200 J. Điều gì xảy ra với nội năng của hệ?",
        options: [
          "A. Nội năng của hệ tăng 300 J.",
          "B. Nội năng của hệ tăng 700 J.",
          "C. Nội năng của hệ giảm 300 J.",
          "D. Nội năng của hệ giảm 700 J."
        ],
        correct: 0,
        explain: "Hệ nhận nhiệt: Q = +500 J; hệ thực hiện công: A = -200 J. Độ biến thiên nội năng: ΔU = A + Q = -200 + 500 = +300 J (tăng 300 J)."
      },
      {
        id: 91,
        topic: "NỘI NĂNG & NĐLH",
        question: "Người ta truyền cho khí trong xilanh nhiệt lượng 100 J. Khí nở ra thực hiện công 70 J đẩy pit-tông lên. Độ biến thiên nội năng của khí là",
        options: [
          "A. 20 J.",
          "B. 30 J.",
          "C. 40 J.",
          "D. 50 J."
        ],
        correct: 1,
        explain: "Q = +100 J; A = -70 J => ΔU = A + Q = -70 + 100 = 30 J."
      },
      {
        id: 92,
        topic: "NỘI NĂNG & NĐLH",
        question: "Với 100 g chì được truyền nhiệt lượng 260 J thì tăng nhiệt độ từ 15°C đến 35°C. Nhiệt dung riêng của chì là:",
        options: [
          "A. 130 J/(kg.K).",
          "B. 26 J/(kg.K).",
          "C. 130 kJ/(kg.K).",
          "D. 260 kJ/(kg.K)."
        ],
        correct: 0,
        explain: "m = 0,1 kg; Δt = 35 - 15 = 20°C. Nhiệt dung riêng: c = Q / (m.Δt) = 260 / (0,1 × 20) = 130 J/(kg.K)."
      },
      {
        id: 93,
        topic: "NỘI NĂNG & NĐLH",
        question: "Biết nhiệt dung riêng của nước là 4,18.10³ J/(kg.K). Nhiệt lượng cần cung cấp cho 1 kg nước ở 20°C đến khi nước sôi ở 100°C là?",
        options: [
          "A. 8.10⁴ J.",
          "B. 10.10⁴ J.",
          "C. 33,44.10⁴ J.",
          "D. 32.10³ J."
        ],
        correct: 2,
        explain: "Q = m.c.Δt = 1 × 4,18.10³ × (100 - 20) = 4 180 × 80 = 334 400 J = 33,44.10⁴ J."
      },
      {
        id: 94,
        topic: "NỘI NĂNG & NĐLH",
        question: "Ấm nhôm khối lượng 500 g đựng 2 lít nước ở 20°C. Biết c_nước = 4200 J/(kg.K) và c_nhôm = 920 J/(kg.K). Nhiệt lượng tối thiểu cần để đun sôi lượng nước trên ở áp suất tiêu chuẩn là:",
        options: [
          "A. 708,8 kJ.",
          "B. 36,8 kJ.",
          "C. 672 kJ.",
          "D. 635,2 kJ."
        ],
        correct: 0,
        explain: "Q = (m_nhôm.c_nhôm + m_nước.c_nước).Δt = (0,5 × 920 + 2 × 4200) × 80 = (460 + 8400) × 80 = 8860 × 80 = 708 800 J = 708,8 kJ."
      },

      // -------------------------------------------------------------
      // PHẦN 3: NỘI NĂNG & ĐỊNH LUẬT I NĐLH - TRẮC NGHIỆM ĐÚNG/SAI (8 Ý)
      // -------------------------------------------------------------
      {
        id: 95,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Nén khí và nung nóng - Ý a]: Công A > 0 vì khí bị nén (khí nhận công).",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Theo quy ước dấu, khí nhận công cơ học thì A > 0."
      },
      {
        id: 96,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Nén khí và nung nóng - Ý b]: Nhiệt lượng Q < 0 vì khí bị nung nóng (khí nhận nhiệt).",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Khí nhận nhiệt lượng từ ngọn lửa đèn cồn thì Q > 0."
      },
      {
        id: 97,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Nén khí và nung nóng - Ý c]: Nội năng của khí tăng ΔU > 0.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Vì A > 0 và Q > 0 nên ΔU = A + Q > 0 (nội năng tăng)."
      },
      {
        id: 98,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Nén khí và nung nóng - Ý d]: Biểu thức liên hệ độ biến thiên nội năng, công và nhiệt lượng là ΔU = A - Q.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Biểu thức đúng của nguyên lí I là ΔU = A + Q."
      },
      {
        id: 99,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Giảm nóng phòng kính - Ý a]: Mở cửa để không khí đối lưu với bên ngoài, từ đó làm giảm nội năng không khí trong phòng và nhiệt độ phòng giảm xuống.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Khi phòng kín bị hiệu ứng nhà kính làm nhiệt độ phòng cao hơn bên ngoài, đối lưu không khí giúp giải phóng nhiệt ra ngoài."
      },
      {
        id: 100,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Giảm nóng phòng kính - Ý b]: Lắp rèm cửa bằng vải dày chuyên dụng, màu sẫm, bề mặt lượn sóng.",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Giúp cản bức xạ nhiệt mặt trời truyền trực tiếp qua kính vào phòng."
      },
      {
        id: 101,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Giảm nóng phòng kính - Ý c]: Dán tấm phim cách nhiệt có cấu tạo đặc biệt (từ nhiều lớp polyester và chống ánh sáng tử ngoại).",
        options: ["A. Đúng", "B. Sai"],
        correct: 0,
        explain: "Phát biểu ĐÚNG. Phim cách nhiệt phản xạ bức xạ hồng ngoại và tử ngoại, ngăn truyền nhiệt bức xạ vào trong phòng."
      },
      {
        id: 102,
        topic: "NỘI NĂNG & NĐLH",
        question: "[Đúng/Sai - Giảm nóng phòng kính - Ý d]: Đóng tất cả các cửa ở các lối vào, ra của tòa nhà để làm giảm nội năng căn phòng.",
        options: ["A. Đúng", "B. Sai"],
        correct: 1,
        explain: "Phát biểu SAI. Đóng kín cửa sẽ giữ nhiệt tích tụ trong phòng do bức xạ mặt trời (hiệu ứng nhà kính) khiến phòng càng nóng hơn."
      },

      // -------------------------------------------------------------
      // PHẦN 3: NỘI NĂNG & ĐỊNH LUẬT I NĐLH - TRẢ LỜI NGẮN / BÀI TOÁN (4 CÂU)
      // -------------------------------------------------------------
      {
        id: 103,
        topic: "NỘI NĂNG & NĐLH",
        question: "Người ta thực hiện công 200 J để nén khí trong một xilanh. Biết khí truyền ra môi trường xung quanh nhiệt lượng 40 J. Độ biến thiên nội năng của khí là bao nhiêu Jun?",
        options: [
          "A. 160 J",
          "B. 240 J",
          "C. -160 J",
          "D. 200 J"
        ],
        correct: 0,
        explain: "Khí nhận công: A = +200 J. Khí truyền nhiệt: Q = -40 J. Độ biến thiên nội năng: ΔU = A + Q = 200 + (-40) = 160 J."
      },
      {
        id: 104,
        topic: "NỘI NĂNG & NĐLH",
        question: "Khi truyền nhiệt lượng 3 000 J cho khối khí trong xilanh thì khí dãn nở làm thể tích tăng thêm 0,005 m³. Áp suất không đổi bằng 2,4.10⁵ Pa. Tính độ biến thiên nội năng (đơn vị Jun) của khối khí.",
        options: [
          "A. 1 800 J",
          "B. 4 200 J",
          "C. 1 200 J",
          "D. 3 000 J"
        ],
        correct: 0,
        explain: "Công khí thực hiện đẩy pít-tông: A' = p.ΔV = 2,4.10⁵ × 0,005 = 1200 J => A = -1200 J. Khí nhận nhiệt: Q = +3000 J. Độ biến thiên nội năng: ΔU = A + Q = -1200 + 3000 = 1800 J."
      },
      {
        id: 105,
        topic: "NỘI NĂNG & NĐLH",
        question: "Một bình chứa 0,5 kg nước ở nhiệt độ 3°C. Bình được đun nóng và nội năng của nước tăng thêm 21 kJ. Biết c_nước = 4180 J/(kg.K). Nhiệt độ (°C) của nước sau khi đun là bao nhiêu? (Lấy phần nguyên)",
        options: [
          "A. 13°C",
          "B. 10°C",
          "C. 15°C",
          "D. 18°C"
        ],
        correct: 0,
        explain: "Q = ΔU = 21 000 J. Độ tăng nhiệt độ: Δt = Q / (m.c) = 21 000 / (0,5 × 4180) ≈ 10,05°C. Nhiệt độ sau khi đun: t = 3 + 10,05 = 13,05°C => Lấy phần nguyên: 13°C."
      },
      {
        id: 106,
        topic: "NỘI NĂNG & NĐLH",
        question: "Thợ rèn nhúng dao thép khối lượng 1,1 kg ở 850°C vào bể nước 200 lít ở 27°C. Xác định nhiệt độ (°C) của nước khi cân bằng nhiệt. Biết c_thép = 460 J/(kg.K), c_nước = 4180 J/(kg.K). (Làm tròn 1 chữ số thập phân)",
        options: [
          "A. 27,5°C",
          "B. 28,2°C",
          "C. 29,0°C",
          "D. 31,5°C"
        ],
        correct: 0,
        explain: "Khối lượng nước m₂ = 200 kg. Phương trình cân bằng nhiệt: m₁.c₁.(850 - t) = m₂.c₂.(t - 27) <=> 1,1 × 460 × (850 - t) = 200 × 4180 × (t - 27) <=> 506(850 - t) = 836 000(t - 27) <=> 836 506 t = 23 002 100 <=> t ≈ 27,4978°C ≈ 27,5°C."
      }
    ];

const physAll = FULL_DATABASE;
const physChuyenThe = FULL_DATABASE.filter(q => q.topic === 'Sá»° CHUYá»‚N THá»‚');
const physThangNhiet = FULL_DATABASE.filter(q => q.topic === 'THANG NHIá»†T Äá»˜');
const physNoiNang = FULL_DATABASE.filter(q => q.topic === 'Ná»˜I NÄ‚NG & NÄLH');

const PHYSICS_TOPICS_DATABASE = [
  {
    id: "phys_all",
    title: "ChÆ°Æ¡ng 1: Váº­t LĂ­ Nhiá»‡t (Trá»n Bá»™ 106 cĂ¢u)",
    icon: "đŸŒŸ",
    category: "all",
    questions: physAll
  },
  {
    id: "phys_chuyen_the",
    title: "1. Sá»± Chuyá»ƒn Thá»ƒ (41 cĂ¢u)",
    icon: "đŸ’§",
    category: "cd1",
    questions: physChuyenThe
  },
  {
    id: "phys_thang_nhiet",
    title: "2. Thang Nhiá»‡t Äá»™ (34 cĂ¢u)",
    icon: "đŸŒ¡ï¸",
    category: "cd2",
    questions: physThangNhiet
  },
  {
    id: "phys_noi_nang",
    title: "3. Ná»™i NÄƒng & Äá»‹nh Luáº­t I NÄLH (31 cĂ¢u)",
    icon: "â¡",
    category: "cd3",
    questions: physNoiNang
  }
];

const PHYSICS_CATEGORIES = [
  { id: 'all', name: 'Táº¥t cáº£ (ChÆ°Æ¡ng 1)' },
  { id: 'cd1', name: 'CÄ 1: Sá»± chuyá»ƒn thá»ƒ', icon: 'đŸ’§' },
  { id: 'cd2', name: 'CÄ 2: Thang nhiá»‡t Ä‘á»™', icon: 'đŸŒ¡ï¸' },
  { id: 'cd3', name: 'CÄ 3: Ná»™i nÄƒng & NÄLH', icon: 'â¡' }
];

window.PHYSICS_TOPICS_DATABASE = PHYSICS_TOPICS_DATABASE;
window.PHYSICS_CATEGORIES = PHYSICS_CATEGORIES;