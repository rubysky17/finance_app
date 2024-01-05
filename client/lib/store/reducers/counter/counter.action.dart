import 'package:flutter/material.dart';

class CounterAction {
  @override
  String toString() {
    return 'CounterAction { }';
  }
}

class CounterIncreaseAction {
  CounterIncreaseAction();

  @override
  String toString() {
    return 'CounterSuccessAction { isSuccess:  }';
  }
}

class CounterFailedAction {
  final String error;

  CounterFailedAction({required this.error});

  @override
  String toString() {
    return 'CounterFailedAction { error: $error }';
  }
}
