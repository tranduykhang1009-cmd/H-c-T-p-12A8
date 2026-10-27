import 'question_model.dart';

class TopicModel {
  final String id;
  final String title;
  final String sub;
  final String icon;
  final String category;
  final List<QuestionModel> questions;

  TopicModel({
    required this.id,
    required this.title,
    required this.sub,
    required this.icon,
    required this.category,
    required this.questions,
  });

  int get questionCount => questions.length;
}

class CategoryModel {
  final String id;
  final String name;
  final String icon;

  CategoryModel({
    required this.id,
    required this.name,
    required this.icon,
  });
}
