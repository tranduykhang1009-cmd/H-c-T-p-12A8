import 'package:flutter/material.dart';
import '../models/question_model.dart';

class QuestionPaletteGrid extends StatelessWidget {
  final List<QuestionModel> questions;
  final int currentIndex;
  final Map<int, int> selectedAnswers;
  final Set<int> flaggedQuestions;
  final Function(int index) onSelectQuestion;

  const QuestionPaletteGrid({
    super.key,
    required this.questions,
    required this.currentIndex,
    required this.selectedAnswers,
    required this.flaggedQuestions,
    required this.onSelectQuestion,
  });

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const ClampingScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 64, // Tối ưu co giãn nút theo chiều rộng
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
        childAspectRatio: 1.0,
      ),
      itemCount: questions.length,
      itemBuilder: (context, index) {
        final q = questions[index];
        final isCurrent = index == currentIndex;
        final isAnswered = selectedAnswers.containsKey(index);
        final isFlagged = flaggedQuestions.contains(index);

        final label = q.subLabel ?? '${index + 1}';

        Color bgColor = const Color(0xFF0B0E22);
        Color borderColor = const Color(0xFF282E5C);
        Color textColor = const Color(0xFFCBD5E1);

        if (isAnswered) {
          final isCorrect = selectedAnswers[index] == q.correct;
          bgColor = isCorrect ? const Color(0xFF10B981) : const Color(0xFFEF4444);
          borderColor = bgColor;
          textColor = Colors.white;
        }

        if (isCurrent) {
          borderColor = Colors.white;
        }

        return Stack(
          children: [
            InkWell(
              onTap: () => onSelectQuestion(index),
              borderRadius: BorderRadius.circular(8),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 150),
                decoration: BoxDecoration(
                  color: bgColor,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(
                    color: borderColor,
                    width: isCurrent ? 2.0 : 1.5,
                  ),
                ),
                alignment: Alignment.center,
                child: Text(
                  label,
                  style: TextStyle(
                    fontSize: label.length > 2 ? 11.5 : 13,
                    fontWeight: FontWeight.w800,
                    color: textColor,
                    letterSpacing: -0.3,
                  ),
                ),
              ),
            ),
            if (isFlagged)
              const Positioned(
                top: 2,
                right: 2,
                child: Text('🚩', style: TextStyle(fontSize: 9)),
              ),
          ],
        );
      },
    );
  }
}
