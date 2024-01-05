// Import Other States
import 'counter/counter.state.dart';

class AppState {
  final CounterState counterState;

  AppState({
    required this.counterState,
  });

  factory AppState.initial() {
    return AppState(
      counterState: CounterState.initial(),
    );
  }

  @override
  bool operator ==(other) =>
      identical(this, other) ||
      other is AppState && counterState == other.counterState;

  @override
  int get hashCode => counterState.hashCode;

  @override
  String toString() {
    return "AppState { }";
  }
}
