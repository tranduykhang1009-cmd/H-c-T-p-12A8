import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/question_model.dart';
import '../models/subject_model.dart';
import '../models/topic_model.dart';

class ExamRepository {
  static final ExamRepository _instance = ExamRepository._internal();
  factory ExamRepository() => _instance;
  ExamRepository._internal();

  List<QuestionModel> _geographyQuestions = [];

  Future<void> initialize() async {
    try {
      final geoString = await rootBundle.loadString('assets/data/geography.json');
      final List<dynamic> geoJson = json.decode(geoString);
      _geographyQuestions = geoJson.map((e) => QuestionModel.fromJson(e)).toList();
    } catch (e) {
      // Fallback if assets not yet registered in test runner
      _geographyQuestions = [];
    }
  }

  List<TopicModel> getTopicsForSubject(SubjectType subject) {
    switch (subject) {
      case SubjectType.geography:
        return _getGeographyTopics();
      case SubjectType.history:
        return _getHistoryTopics();
      case SubjectType.physics:
        return _getPhysicsTopics();
      case SubjectType.english:
        return _getEnglishTopics();
    }
  }

  List<TopicModel> _getGeographyTopics() {
    final p1 = _geographyQuestions.take(70).toList();
    final p2 = _geographyQuestions.skip(70).take(70).toList();
    final p3 = _geographyQuestions.skip(140).toList();

    return [
      TopicModel(
        id: 'geo_phan1',
        title: 'Phần I: Trắc Nghiệm 4 Lựa Chọn (70 câu)',
        sub: 'Câu 1 đến Câu 70 theo đúng thứ tự 10 trang đầu tài liệu in',
        icon: '📖',
        category: 'cd1',
        questions: p1,
      ),
      TopicModel(
        id: 'geo_phan2',
        title: 'Phần II: Đúng / Sai (70 ý / 17 câu gốc)',
        sub: '17 câu kèm đầy đủ ngữ liệu trích dẫn & lược đồ (1a, 1b...)',
        icon: '⚖️',
        category: 'cd2',
        questions: p2,
      ),
      TopicModel(
        id: 'geo_phan3',
        title: 'Phần III: Trả Lời Ngắn & Tính Toán (19 câu)',
        sub: 'Biên độ nhiệt, nhiệt độ TB, độ che phủ rừng, mật độ dân số...',
        icon: '📊',
        category: 'cd3',
        questions: p3,
      ),
      TopicModel(
        id: 'geo_all',
        title: 'Marathon Trọn Bộ 20 Trang Địa Lí (159 câu)',
        sub: 'Đầy đủ 159 câu theo đúng thứ tự 20 trang tài liệu ôn tập',
        icon: '🌍',
        category: 'all',
        questions: _geographyQuestions,
      ),
    ];
  }

  List<TopicModel> _getHistoryTopics() {
    return [
      TopicModel(
        id: 'hist_all',
        title: 'Marathon Toàn Bộ 16 Bài Lịch Sử 12 (440 câu)',
        sub: 'Lịch sử thế giới & Lịch sử Việt Nam hiện đại',
        icon: '🏛️',
        category: 'all',
        questions: [],
      ),
    ];
  }

  List<TopicModel> _getPhysicsTopics() {
    return [
      TopicModel(
        id: 'phys_all',
        title: 'Trọn Bộ Chương 1: Vật Lí Nhiệt (106 câu)',
        sub: 'Sự chuyển thể, thang nhiệt độ & nội năng',
        icon: '⚛️',
        category: 'all',
        questions: [],
      ),
    ];
  }

  List<TopicModel> _getEnglishTopics() {
    return [
      TopicModel(
        id: 'eng_all',
        title: 'Toàn Bộ Tiếng Anh 12 (91 câu)',
        sub: 'Life stories, Green living & Ghép thẻ từ',
        icon: '🇬🇧',
        category: 'all',
        questions: [],
      ),
    ];
  }
}
