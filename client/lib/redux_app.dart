// Packages
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

// State
import 'package:client/store/reducers/app.state.dart';

// Screen
import 'package:client/screen/main/index.dart';

class ReduxApp extends StatelessWidget {
  final Store<AppState> store;

  ReduxApp({
    required this.store,
  }) : super();

  @override
  Widget build(BuildContext context) {
    return StoreProvider<AppState>(
      store: store,
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        routes: <String, WidgetBuilder>{
          '/': (BuildContext context) {
            return MainScreen();
          }
        },
      ),
    );
  }
}
