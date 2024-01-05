import 'package:client/store/reducers/app.state.dart';
import 'package:client/store/selectors/selectors.dart';
import 'package:flutter/material.dart';

import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, _ViewModel>(
      distinct: true,
      converter: (store) => _ViewModel.fromStore(store),
      builder: (BuildContext context, _ViewModel viewModel) {
        return Scaffold(
          body: Column(children: [
            Text("Hello world ${viewModel.numberCount}"),
            ElevatedButton(
              child: Text("Tap"),
              style: ElevatedButton.styleFrom(
                primary: Colors.red,
                elevation: 0,
              ),
              onPressed: () {
                print("Counter pressed!");
              },
            ),
          ]),
        );
      },
    );
  }
}

class _ViewModel {
  final int numberCount;
  final Function() onIncrease;

  _ViewModel({
    required this.numberCount,
    required this.onIncrease,
  });

  static _ViewModel fromStore(Store<AppState> store) {
    return _ViewModel(
        numberCount: counterIntSelector(store.state),
        onIncrease: () => store.dispatch());
  }
}
