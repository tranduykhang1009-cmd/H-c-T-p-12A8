import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/home_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const HocTap12A8App());
}

class HocTap12A8App extends StatelessWidget {
  const HocTap12A8App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '12A8 Học Tập THPT Nguyễn Huệ',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF080B1A),
        primaryColor: const Color(0xFF2563EB),
        textTheme: GoogleFonts.plusJakartaSansTextTheme(
          ThemeData(brightness: Brightness.dark).textTheme,
        ),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF3B82F6),
          secondary: Color(0xFF60A5FA),
          surface: Color(0xFF13172E),
          background: Color(0xFF080B1A),
        ),
      ),
      home: const HomeScreen(),
    );
  }
}
