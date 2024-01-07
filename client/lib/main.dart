import 'package:client/redux_app.dart';
import 'package:client/store/store.dart';
import 'package:flutter/material.dart';

void main() {
  //**
  // Create Store with Global App
  // createStore methods from store.dart
  // */
  final store = createStore();

  runApp(ReduxApp(store: store));
}
