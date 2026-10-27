import 'package:flutter/material.dart';

class OptionButton extends StatelessWidget {
  final String text;
  final int index;
  final bool isSelected;
  final bool isAnswered;
  final bool isCorrect;
  final VoidCallback onTap;

  const OptionButton({
    super.key,
    required this.text,
    required this.index,
    required this.isSelected,
    required this.isAnswered,
    required this.isCorrect,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    Color bgColor = const Color(0xFF13172E).withOpacity(0.9);
    Color borderColor = const Color(0xFF282E5C);
    Color textColor = Colors.white;

    if (isAnswered) {
      if (isCorrect) {
        bgColor = const Color(0xFF10B981).withOpacity(0.2);
        borderColor = const Color(0xFF10B981);
        textColor = const Color(0xFF34D399);
      } else if (isSelected) {
        bgColor = const Color(0xFFEF4444).withOpacity(0.2);
        borderColor = const Color(0xFFEF4444);
        textColor = const Color(0xFFF87171);
      }
    } else if (isSelected) {
      bgColor = const Color(0xFF2563EB).withOpacity(0.2);
      borderColor = const Color(0xFF3B82F6);
    }

    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: isAnswered ? null : onTap,
          borderRadius: BorderRadius.circular(10),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              color: bgColor,
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: borderColor, width: 1.5),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    text,
                    style: TextStyle(
                      fontSize: 14.5,
                      fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
                      color: textColor,
                      height: 1.45,
                    ),
                  ),
                ),
                if (isAnswered && isCorrect)
                  const Icon(Icons.check_circle, color: Color(0xFF10B981), size: 20)
                else if (isAnswered && isSelected && !isCorrect)
                  const Icon(Icons.cancel, color: Color(0xFFEF4444), size: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
