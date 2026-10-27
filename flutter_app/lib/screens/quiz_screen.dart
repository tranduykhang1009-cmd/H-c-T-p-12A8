import 'dart:async';
import 'package:flutter/material.dart';
import '../models/question_model.dart';
import '../widgets/responsive_layout.dart';
import '../widgets/passage_card.dart';
import '../widgets/option_button.dart';
import '../widgets/question_palette_grid.dart';
import 'result_screen.dart';

class QuizScreen extends StatefulWidget {
  final String subjectName;
  final String studentName;
  final List<QuestionModel> examQuestions;

  const QuizScreen({
    super.key,
    required this.subjectName,
    required this.studentName,
    required this.examQuestions,
  });

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int _currentIndex = 0;
  final Map<int, int> _selectedAnswers = {};
  final Set<int> _flagged = {};
  int _elapsedSeconds = 0;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _startTimer();
  }

  void _startTimer() {
    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (mounted) {
        setState(() => _elapsedSeconds++);
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  String _formatTimer() {
    final m = (_elapsedSeconds ~/ 60).toString().padLeft(2, '0');
    final s = (_elapsedSeconds % 60).toString().padLeft(2, '0');
    return '$m:$s';
  }

  void _onAnswerSelected(int optionIndex) {
    setState(() {
      _selectedAnswers[_currentIndex] = optionIndex;
    });
  }

  void _toggleFlag() {
    setState(() {
      if (_flagged.contains(_currentIndex)) {
        _flagged.remove(_currentIndex);
      } else {
        _flagged.add(_currentIndex);
      }
    });
  }

  void _submitExam() {
    _timer?.cancel();
    int correctCount = 0;
    _selectedAnswers.forEach((qIdx, optIdx) {
      if (widget.examQuestions[qIdx].correct == optIdx) {
        correctCount++;
      }
    });

    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (_) => ResultScreen(
          subjectName: widget.subjectName,
          studentName: widget.studentName,
          questions: widget.examQuestions,
          answers: _selectedAnswers,
          correctCount: correctCount,
          timeSeconds: _elapsedSeconds,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final currentQ = widget.examQuestions[_currentIndex];
    final total = widget.examQuestions.length;
    final isLast = _currentIndex == total - 1;

    return Scaffold(
      backgroundColor: const Color(0xFF080B1A),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F172A),
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF94A3B8)),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          widget.subjectName,
          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Colors.white),
        ),
        actions: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            margin: const EdgeInsets.only(right: 12),
            decoration: BoxDecoration(
              color: const Color(0xFF1E293B),
              borderRadius: BorderRadius.circular(6),
            ),
            alignment: Alignment.center,
            child: Text(
              _formatTimer(),
              style: const TextStyle(
                fontFamily: 'monospace',
                fontSize: 14,
                fontWeight: FontWeight.w800,
                color: Color(0xFF38BDF8),
              ),
            ),
          ),
          TextButton(
            onPressed: _submitExam,
            child: const Text('Nộp bài', style: TextStyle(color: Color(0xFFEF4444), fontWeight: FontWeight.w800)),
          ),
        ],
      ),
      body: ResponsiveLayout(
        // Mobile Layout: 1 Cột cuộn dọc, bảng câu hỏi mở qua Drawer
        mobileBuilder: (context, constraints) {
          return _buildMobileExam(currentQ, total, isLast);
        },
        // Tablet / Desktop Layout: 2 Cột song song theo flutter-build-responsive-layout
        desktopBuilder: (context, constraints) {
          return _buildDesktopExam(currentQ, total, isLast);
        },
      ),
    );
  }

  Widget _buildMobileExam(QuestionModel currentQ, int total, bool isLast) {
    return Column(
      children: [
        // Thanh trạng thái số câu & cờ
        _buildStatusBar(currentQ, total),

        // Khung câu hỏi & tư liệu
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: _buildQuestionContent(currentQ),
          ),
        ),

        // Thanh điều hướng đáy
        _buildBottomNav(isLast, onOpenDrawer: () => _openMobileDrawer(total)),
      ],
    );
  }

  Widget _buildDesktopExam(QuestionModel currentQ, int total, bool isLast) {
    return Row(
      children: [
        // Cột trái: Bảng số thứ tự câu hỏi (SliverGridDelegateWithMaxCrossAxisExtent)
        SizedBox(
          width: 280,
          child: Container(
            decoration: const BoxDecoration(
              color: Color(0xFF0F172A),
              border: Border(right: BorderSide(color: Color(0xFF282E5C))),
            ),
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'DANH SÁCH CÂU HỎI',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 0.8,
                    color: Color(0xFF94A3B8),
                  ),
                ),
                const SizedBox(height: 12),
                Expanded(
                  child: QuestionPaletteGrid(
                    questions: widget.examQuestions,
                    currentIndex: _currentIndex,
                    selectedAnswers: _selectedAnswers,
                    flaggedQuestions: _flagged,
                    onSelectQuestion: (idx) => setState(() => _currentIndex = idx),
                  ),
                ),
              ],
            ),
          ),
        ),

        // Cột phải: Khung làm bài (Đoạn tư liệu + Câu hỏi + Đáp án) bọc ConstrainedContent
        Expanded(
          child: Column(
            children: [
              _buildStatusBar(currentQ, total),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(24),
                  child: ConstrainedContent(
                    maxWidth: 800,
                    child: _buildQuestionContent(currentQ),
                  ),
                ),
              ),
              _buildBottomNav(isLast, onOpenDrawer: null),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildStatusBar(QuestionModel currentQ, int total) {
    final label = currentQ.subLabel != null
        ? 'Câu ${currentQ.subLabel} (${_currentIndex + 1}/$total)'
        : 'Câu ${_currentIndex + 1}/$total';

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      color: const Color(0xFF13172E),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFF2563EB),
              borderRadius: BorderRadius.circular(6),
            ),
            child: Text(
              label,
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: Colors.white),
            ),
          ),
          InkWell(
            onTap: _toggleFlag,
            child: Row(
              children: [
                Text(
                  _flagged.contains(_currentIndex) ? '🚩 Đã đánh dấu' : '🏳️ Đánh dấu',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: _flagged.contains(_currentIndex) ? const Color(0xFFEF4444) : const Color(0xFF94A3B8),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuestionContent(QuestionModel currentQ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // 1. TƯ LIỆU / BẢNG SỐ LIỆU ĐẶT TRÊN CÙNG
        if (currentQ.passage != null && currentQ.passage!.isNotEmpty)
          PassageCard(
            title: currentQ.passageTitle ?? '',
            content: currentQ.passage!,
          ),

        const SizedBox(height: 12),

        // 2. MỆNH ĐỀ / CÂU HỎI
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              currentQ.subLabel != null ? 'Câu ${currentQ.subLabel}: ' : 'Câu ${_currentIndex + 1}: ',
              style: const TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w800,
                color: Color(0xFF60A5FA),
              ),
            ),
            Expanded(
              child: Text(
                currentQ.question,
                style: const TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                  height: 1.5,
                ),
              ),
            ),
          ],
        ),

        const SizedBox(height: 16),

        // 3. CÁC NÚT ĐÁP ÁN (A. Đúng / B. Sai hoặc A, B, C, D)
        ...currentQ.options.asMap().entries.map((entry) {
          final optIdx = entry.key;
          final optText = entry.value;
          final isAnswered = _selectedAnswers.containsKey(_currentIndex);
          final isSelected = _selectedAnswers[_currentIndex] == optIdx;
          final isCorrect = optIdx == currentQ.correct;

          return OptionButton(
            text: optText,
            index: optIdx,
            isSelected: isSelected,
            isAnswered: isAnswered,
            isCorrect: isCorrect,
            onTap: () => _onAnswerSelected(optIdx),
          );
        }),

        // Giải thích chi tiết sau khi trả lời
        if (_selectedAnswers.containsKey(_currentIndex)) ...[
          const SizedBox(height: 14),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFF1E293B),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFF38BDF8).withOpacity(0.3)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '💡 LỜI GIẢI CHI TIẾT:',
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: Color(0xFF38BDF8)),
                ),
                const SizedBox(height: 4),
                Text(
                  currentQ.explain,
                  style: const TextStyle(fontSize: 13, color: Color(0xFFE2E8F0), height: 1.5),
                ),
              ],
            ),
          ),
        ],
      ],
    );
  }

  Widget _buildBottomNav(bool isLast, {VoidCallback? onOpenDrawer}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: const BoxDecoration(
        color: Color(0xFF0F172A),
        border: Border(top: BorderSide(color: Color(0xFF282E5C))),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          ElevatedButton(
            onPressed: _currentIndex > 0 ? () => setState(() => _currentIndex--) : null,
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF1E293B),
              foregroundColor: Colors.white,
            ),
            child: const Text('❮ Trước'),
          ),
          if (onOpenDrawer != null)
            OutlinedButton.icon(
              onPressed: onOpenDrawer,
              icon: const Icon(Icons.list_alt, size: 16, color: Color(0xFF60A5FA)),
              label: const Text('Danh sách', style: TextStyle(color: Color(0xFF60A5FA), fontSize: 12)),
              style: OutlinedButton.styleFrom(
                side: const BorderSide(color: Color(0xFF282E5C)),
              ),
            ),
          ElevatedButton(
            onPressed: isLast ? _submitExam : () => setState(() => _currentIndex++),
            style: ElevatedButton.styleFrom(
              backgroundColor: isLast ? const Color(0xFFEF4444) : const Color(0xFF2563EB),
              foregroundColor: Colors.white,
            ),
            child: Text(isLast ? 'Nộp bài ➔' : 'Tiếp ❯'),
          ),
        ],
      ),
    );
  }

  void _openMobileDrawer(int total) {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0F172A),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
      ),
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '📋 DANH SÁCH CÂU HỎI',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Colors.white),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, color: Color(0xFF94A3B8)),
                    onPressed: () => Navigator.pop(context),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              Expanded(
                child: QuestionPaletteGrid(
                  questions: widget.examQuestions,
                  currentIndex: _currentIndex,
                  selectedAnswers: _selectedAnswers,
                  flaggedQuestions: _flagged,
                  onSelectQuestion: (idx) {
                    setState(() => _currentIndex = idx);
                    Navigator.pop(context);
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
