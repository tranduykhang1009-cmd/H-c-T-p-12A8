import 'package:flutter/material.dart';

const double largeScreenMinWidth = 600.0;
const double maxContentConstraintWidth = 850.0;

class ResponsiveLayout extends StatelessWidget {
  final Widget Function(BuildContext context, BoxConstraints constraints) mobileBuilder;
  final Widget Function(BuildContext context, BoxConstraints constraints) desktopBuilder;

  const ResponsiveLayout({
    super.key,
    required this.mobileBuilder,
    required this.desktopBuilder,
  });

  static bool isLargeScreen(BuildContext context) {
    return MediaQuery.sizeOf(context).width > largeScreenMinWidth;
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth > largeScreenMinWidth) {
          return desktopBuilder(context, constraints);
        } else {
          return mobileBuilder(context, constraints);
        }
      },
    );
  }
}

class ConstrainedContent extends StatelessWidget {
  final Widget child;
  final double maxWidth;

  const ConstrainedContent({
    super.key,
    required this.child,
    this.maxWidth = maxContentConstraintWidth,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: maxWidth),
        child: child,
      ),
    );
  }
}
