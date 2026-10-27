import 'package:flutter/material.dart';

class PassageCard extends StatelessWidget {
  final String title;
  final String content;

  const PassageCard({
    super.key,
    required this.title,
    required this.content,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A).withOpacity(0.85),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFF3B82F6).withOpacity(0.35)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.description, size: 16, color: Color(0xFF60A5FA)),
              const SizedBox(width: 6),
              const Text(
                'ĐOẠN TƯ LIỆU / THÔNG TIN:',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  color: Color(0xFF60A5FA),
                  letterSpacing: 0.5,
                ),
              ),
              if (title.isNotEmpty) ...[
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    title,
                    style: const TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF93C5FD),
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ],
          ),
          const SizedBox(height: 8),
          Text(
            content,
            textAlign: TextAlign.justify,
            style: const TextStyle(
              fontSize: 13.5,
              height: 1.6,
              color: Color(0xFFE2E8F0),
            ),
          ),
        ],
      ),
    );
  }
}
