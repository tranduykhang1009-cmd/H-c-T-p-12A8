enum SubjectType {
  geography,
  history,
  physics,
  english,
}

class SubjectModel {
  final SubjectType type;
  final String name;
  final String icon;
  final String code;
  final int totalQuestions;

  const SubjectModel({
    required this.type,
    required this.name,
    required this.icon,
    required this.code,
    required this.totalQuestions,
  });

  static const List<SubjectModel> allSubjects = [
    SubjectModel(
      type: SubjectType.geography,
      name: 'Địa Lí 12',
      icon: '🌍',
      code: 'geography',
      totalQuestions: 159,
    ),
    SubjectModel(
      type: SubjectType.history,
      name: 'Lịch Sử 12',
      icon: '🏛️',
      code: 'history',
      totalQuestions: 440,
    ),
    SubjectModel(
      type: SubjectType.physics,
      name: 'Vật Lí 12',
      icon: '⚛️',
      code: 'physics',
      totalQuestions: 106,
    ),
    SubjectModel(
      type: SubjectType.english,
      name: 'Tiếng Anh 12',
      icon: '🇬🇧',
      code: 'english',
      totalQuestions: 91,
    ),
  ];
}
