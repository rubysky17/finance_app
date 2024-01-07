import 'package:client/store/reducers/counter/counter.reducer.dart';

// Import Reducers
import './app.state.dart';

AppState appReducer(AppState state, action) => AppState(
      counterState: counterReducer(state.counterState, action),
    );
