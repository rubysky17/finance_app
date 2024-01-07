import 'package:client/screen/main/index.dart';
import 'package:flutter/material.dart';

class CounterState {
  final int numberCount;

  CounterState(
    this.numberCount,
  );

  factory CounterState.initial() => CounterState(
        23,
      );

  CounterState copyWith({int? numberCount, Widget? mainScreen}) => CounterState(
        numberCount ?? this.numberCount,
      );

  @override
  bool operator ==(other) =>
      identical(this, other) ||
      other is CounterState &&
          runtimeType == other.runtimeType &&
          numberCount == other.numberCount;

  @override
  int get hashCode =>
      super.hashCode ^ numberCount.hashCode ^ runtimeType.hashCode;

  @override
  String toString() => "CounterState { numberCount: $numberCount}";
}
