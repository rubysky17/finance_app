import '../withoutBlock/constants/colors.dart';
import '../withoutBlock/widget/todo_item.dart';
import 'package:flutter/material.dart';

import 'models/todo.dart';

class WithoutBloc extends StatefulWidget {
  WithoutBloc({Key? key}) : super(key: key);

  @override
  State<WithoutBloc> createState() => _WithoutBlocState();
}

class _WithoutBlocState extends State<WithoutBloc> {
  final todoList = Todo.todoList();
  List<Todo> _foundTodo = [];

  final _todoController = TextEditingController();

  @override
  void initState() {
    _foundTodo = todoList;

    super.initState();
  }

  @override
  void _handleTodoChange(Todo todo) {
    setState(() {
      todo.isDone = !todo.isDone;
    });
  }

  void _handleTodoDelete(String id) {
    setState(() {
      todoList.removeWhere((item) => item.id == id);
    });
  }

  void _handleAddTodo(String todoText) {
    if (todoText.length > 0) {
      setState(() {
        todoList.add(Todo(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            todoText: todoText,
            isDone: false));
      });

      _todoController.clear();
    }
  }

  void _handleSearch(String enterSearchKey) {
    List<Todo> results = [];

    if (enterSearchKey.isEmpty) {
      results = todoList;
    } else {
      results = todoList
          .where((item) => item.todoText!
              .toLowerCase()
              .contains(enterSearchKey.toLowerCase()))
          .toList();
    }

    setState(() {
      _foundTodo = results;
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppbar(),
      backgroundColor: tdBGColor,
      body: Stack(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 15,
            ),
            child: Column(
              children: [
                SearchBox(),
                Expanded(
                  child: ListView(
                    children: [
                      Container(
                        margin: const EdgeInsets.only(
                          top: 50,
                          bottom: 20,
                        ),
                        child: const Text(
                          "All todos",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      // TodoItem(),
                      for (Todo todoo in _foundTodo)
                        TodoItem(
                          todo: todoo,
                          onTodoChanged: _handleTodoChange,
                          onTodoDeleted: _handleTodoDelete,
                        ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Row(
              children: [
                Expanded(
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
                    margin: const EdgeInsets.only(
                      bottom: 20,
                      right: 20,
                      left: 20,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey,
                          offset: Offset(0.0, 0.0),
                          blurRadius: 10.0,
                          spreadRadius: 0.0,
                        )
                      ],
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: TextField(
                      controller: _todoController,
                      decoration: InputDecoration(
                        hintText: "Add new task",
                        border: InputBorder.none,
                      ),
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(
                    bottom: 20,
                    right: 20,
                  ),
                  child: ElevatedButton(
                      child: Text(
                        '+',
                        style: TextStyle(
                          fontSize: 40,
                          color: Colors.white,
                        ),
                      ),
                      onPressed: () {
                        _handleAddTodo(_todoController.text);
                      },
                      style: ElevatedButton.styleFrom(
                        primary: tdBlue,
                        minimumSize: Size(60, 60),
                        elevation: 10,
                      )),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget SearchBox() {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: 15,
      ),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextField(
        onChanged: (value) {
          _handleSearch(value);
        },
        decoration: InputDecoration(
          contentPadding: EdgeInsets.all(0),
          prefixIcon: Icon(
            Icons.search,
            color: tdBlack,
            size: 20,
          ),
          prefixIconConstraints: BoxConstraints(
            maxHeight: 20,
            minWidth: 25,
          ),
          border: InputBorder.none,
          hintText: "Search",
        ),
      ),
    );
  }

  AppBar _buildAppbar() {
    return AppBar(
      title: const Row(
        children: [
          Icon(
            Icons.menu,
            color: tdBlack,
            size: 30,
          ),
        ],
      ),
      backgroundColor: tdBGColor,
    );
  }
}
