
class CounterState {
	final bool loading;
	final String error;

	CounterState(this.loading, this.error);

	factory CounterState.initial() => CounterState(false, '');

	CounterState copyWith({bool? loading, String? error}) =>
		CounterState(loading ?? this.loading, error ?? this.error);

	@override
	bool operator ==(other) =>
		identical(this, other) ||
		other is CounterState &&
			runtimeType == other.runtimeType &&
			loading == other.loading &&
			error == other.error;

	@override
	int get hashCode =>
		super.hashCode ^ runtimeType.hashCode ^ loading.hashCode ^ error.hashCode;

	@override
	String toString() => "CounterState { loading: $loading,  error: $error}";
}
	  