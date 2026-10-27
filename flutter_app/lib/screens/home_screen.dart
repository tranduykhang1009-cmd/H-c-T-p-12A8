import 'package:flutter/material.dart';
import '../models/subject_model.dart';
import '../models/topic_model.dart';
import '../data/exam_repository.dart';
import '../widgets/responsive_layout.dart';
import 'quiz_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _nameController = TextEditingController(text: 'Học sinh 12A8');
  SubjectType _selectedSubject = SubjectType.geography;
  final Set<String> _selectedTopicIds = {'geo_phan1'};
  late ExamRepository _repo;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _repo = ExamRepository();
    _loadData();
  }

  Future<void> _loadData() async {
    await _repo.initialize();
    if (mounted) {
      setState(() => _isLoading = false);
    }
  }

  void _startExam(List<TopicModel> allTopics) {
    final selectedQuestions = <dynamic>[];
    for (final topic in allTopics) {
      if (_selectedTopicIds.contains(topic.id)) {
        selectedQuestions.addAll(topic.questions);
      }
    }

    if (selectedQuestions.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Vui lòng chọn ít nhất 1 bài học để bắt đầu thi!')),
      );
      return;
    }

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => QuizScreen(
          subjectName: SubjectModel.allSubjects.firstWhere((s) => s.type == _selectedSubject).name,
          studentName: _nameController.text.trim().isEmpty ? 'Thí sinh 12A8' : _nameController.text.trim(),
          examQuestions: selectedQuestions.cast(),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Scaffold(
        backgroundColor: Color(0xFF080B1A),
        body: Center(child: CircularProgressIndicator(color: Color(0xFF3B82F6))),
      );
    }

    final topics = _repo.getTopicsForSubject(_selectedSubject);

    return Scaffold(
      backgroundColor: const Color(0xFF080B1A),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F172A),
        elevation: 0,
        title: Row(
          children: const [
            Text('🏛️ ', style: TextStyle(fontSize: 18)),
            Text(
              '12A8 HỌC TẬP THPT NGUYỄN HUỆ',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w800,
                letterSpacing: 0.8,
                color: Color(0xFFF8FAFC),
              ),
            ),
          ],
        ),
      ),
      body: ConstrainedContent(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Hộp chọn môn
              _buildSubjectSelector(),
              const SizedBox(height: 16),

              // Tên thí sinh
              TextField(
                controller: _nameController,
                style: const TextStyle(color: Colors.white, fontSize: 14),
                decoration: InputDecoration(
                  labelText: 'Họ và tên thí sinh',
                  labelStyle: const TextStyle(color: Color(0xFF94A3B8)),
                  prefixIcon: const Icon(Icons.person, color: Color(0xFF3B82F6)),
                  filled: true,
                  fillColor: const Color(0xFF13172E),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                    borderSide: const BorderSide(color: Color(0xFF282E5C)),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                    borderSide: const BorderSide(color: Color(0xFF282E5C)),
                  ),
                ),
              ),
              const SizedBox(height: 20),

              // Danh sách thẻ chủ đề
              const Text(
                'CHỌN CHUYÊN ĐỀ ÔN TẬP',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  letterSpacing: 1.0,
                  color: Color(0xFF94A3B8),
                ),
              ),
              const SizedBox(height: 12),

              ListView.separated(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: topics.length,
                separatorBuilder: (_, __) => const SizedBox(height: 10),
                itemBuilder: (context, idx) {
                  final t = topics[idx];
                  final isSelected = _selectedTopicIds.contains(t.id);

                  return InkWell(
                    onTap: () {
                      setState(() {
                        if (isSelected && _selectedTopicIds.length > 1) {
                          _selectedTopicIds.remove(t.id);
                        } else {
                          _selectedTopicIds.add(t.id);
                        }
                      });
                    },
                    borderRadius: BorderRadius.circular(12),
                    child: Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                        color: isSelected
                            ? const Color(0xFF1E3A8A).withOpacity(0.3)
                            : const Color(0xFF13172E),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: isSelected ? const Color(0xFF3B82F6) : const Color(0xFF282E5C),
                          width: isSelected ? 2.0 : 1.0,
                        ),
                      ),
                      child: Row(
                        children: [
                          Text(t.icon, style: const TextStyle(fontSize: 24)),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  t.title,
                                  style: const TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w700,
                                    color: Colors.white,
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  t.sub,
                                  style: const TextStyle(
                                    fontSize: 12,
                                    color: Color(0xFF94A3B8),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(width: 8),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: const Color(0xFF080B1A),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              '${t.questionCount} câu',
                              style: const TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w700,
                                color: Color(0xFF60A5FA),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
              const SizedBox(height: 24),

              // Nút Bắt đầu thi
              ElevatedButton(
                onPressed: () => _startExam(topics),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
                child: const Text(
                  'VÀO THI NGAY ➔',
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSubjectSelector() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        color: const Color(0xFF13172E),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFF282E5C)),
      ),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<SubjectType>(
          value: _selectedSubject,
          dropdownColor: const Color(0xFF13172E),
          icon: const Icon(Icons.arrow_drop_down, color: Color(0xFF60A5FA)),
          isExpanded: true,
          items: SubjectModel.allSubjects.map((s) {
            return DropdownMenuItem<SubjectType>(
              value: s.type,
              child: Text(
                '${s.icon} ${s.name} (${s.totalQuestions} câu)',
                style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w600),
              ),
            );
          }).toList(),
          onChange: (val) {
            if (val != null) {
              setState(() {
                _selectedSubject = val;
                if (val == SubjectType.geography) {
                  _selectedTopicIds.clear();
                  _selectedTopicIds.add('geo_phan1');
                }
              });
            }
          },
        ),
      ),
    );
  }
}
