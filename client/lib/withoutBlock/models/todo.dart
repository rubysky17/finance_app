class Todo {
  String? id;
  String? todoText;
  bool isDone;

  Todo({
    required this.id,
    required this.todoText,
    this.isDone = false,
  });

  static List<Todo> todoList() {
    return [
      Todo(id: '1', todoText: "Làm bài tập 1", isDone: true),
      Todo(id: '2', todoText: "Làm bài tập 2", isDone: false),
      Todo(id: '3', todoText: "Làm bài tập 3", isDone: false),
      Todo(id: '5', todoText: "Làm bài tập 4", isDone: true),
      Todo(id: '6', todoText: "Làm bài tập 5", isDone: false),
    ];
  }
}
