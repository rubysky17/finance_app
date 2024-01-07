import 'package:client/store/reducers/app.reducer.dart';
import 'package:client/store/reducers/app.state.dart';
import 'package:redux/redux.dart';

Store<AppState> createStore() {
  return Store(
    appReducer,
    initialState: AppState.initial(),
    distinct: true,
  );
}
