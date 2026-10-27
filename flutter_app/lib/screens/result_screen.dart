import 'package:flutter/material.dart';
import '../models/question_model.dart';
import '../widgets/responsive_layout.dart';

class ResultScreen extends StatelessWidget {
  final String subjectName;
  final String studentName;
  final List<QuestionModel> questions;
  final Map<int, int> answers;
  final int correctCount;
  final int timeSeconds;

  const ResultScreen({
    super.key,
    required this.subjectName,
    required this.studentName,
    required this.questions,
    required this.answers,
    required this.correctCount,
    required this.timeSeconds,
  });

  @override
  Widget build(BuildContext context) {
    final total = questions.length;
    final score = (correctCount / total) * 10.0;
    final m = (timeSeconds ~/ 60).toString().padLeft(2, '0');
    final s = (timeSeconds % 60).toString().padLeft(2, '0');

    return Scaffold(
      backgroundColor: const Color(0xFF080B1A),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F172A),
        elevation: 0,
        title: const Text('KẾT QUẢ BÀI THI', style: TextStyle(fontWeight: FontWeight.w800, color: Colors.white)),
        automaticallyImplyLeading: false,
      ),
      body: ConstrainedContent(
        maxWidth: 750,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Thẻ điểm số
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF1E3A8A), Color(0xFF1E1B4B)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFF3B82F6)),
                ),
                child: Column(
                  children: [
                    Text(
                      studentName,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: Color(0xFF93C5FD)),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '${score.toStringAsFixed(1)}đ',
                      style: const TextStyle(fontSize: 48, fontWeight: FontWeight.w900, color: Colors.white),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Đúng: $correctCount / $total câu • Thời gian: $m:$s',
                      style: const TextStyle(fontSize: 13, color: Color(0xFFE2E8F0)),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),

              ElevatedButton.icon(
                onPressed: () => Navigator.pop(context),
                icon: const Icon(Icons.refresh),
                label: const Text('LÀM BÀI KHÁC', style: TextStyle(fontWeight: FontWeight.w800)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
