import '../reducers/app.state.dart';

int counterIntSelector(AppState state) => state.counterState.numberCount;
