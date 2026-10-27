class QuestionModel {
  final int id;
  final String topic;
  final String question;
  final String? subLabel; // '1a', '1b', '2a'...
  final String? passage;  // Ngữ liệu văn bản
  final String? passageTitle;
  final String? image;    // Đường dẫn ảnh minh họa
  final List<String> options;
  final int correct;
  final String explain;

  QuestionModel({
    required this.id,
    required this.topic,
    required this.question,
    this.subLabel,
    this.passage,
    this.passageTitle,
    this.image,
    required this.options,
    required this.correct,
    required this.explain,
  });

  factory QuestionModel.fromJson(Map<String, dynamic> json) {
    return QuestionModel(
      id: json['id'] as int,
      topic: json['topic'] as String? ?? '',
      question: json['question'] as String? ?? '',
      subLabel: json['subLabel'] as String?,
      passage: json['passage'] as String?,
      passageTitle: json['passageTitle'] as String?,
      image: json['image'] as String?,
      options: (json['options'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      correct: json['correct'] as int? ?? 0,
      explain: json['explain'] as String? ?? '',
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'topic': topic,
    'question': question,
    'subLabel': subLabel,
    'passage': passage,
    'passageTitle': passageTitle,
    'image': image,
    'options': options,
    'correct': correct,
    'explain': explain,
  };
}
