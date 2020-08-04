var time = new Date().toLocaleTimeString();

var todoList = {
  todos : [ {todoText: "fart button on pi", completed: true},
            {todoText: "create awesome website", completed: false},
            {todoText: "bork", completed: true}],
  // todos : [],
  addTodo : function (todoText) {
    this.todos.push({
      todoText : todoText,
      completed : false
    });
  },
  changeTodo : function (position, todoText) {
    todoText = todoText.trim();
    if (todoText.length) {
      this.todos[position].todoText = todoText;
    }
  },
  deleteTodo : function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted : function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll :function () {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    //Get Number of completed todos.
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos ++;
      }
    });
    this.todos.forEach(function (todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo : function () {
    addTodoTextInput = document.getElementById("addTodoTextInput");
    if (addTodoTextInput.value.trim().length) {
      todoList.addTodo(addTodoTextInput.value);
      console.log(addTodoTextInput);
      addTodoTextInput.value = "";
      view.displayTodos();
    }
  },
  changeTodo : function (position,todo) {
    // console.log(position, todo);
    todoList.changeTodo(position, todo);
    view.displayTodos();
  },
  deleteTodo : function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleTodo : function(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  },
  toggleAll : function () {
    todoList.toggleAll();
    view.displayTodos();
  },
  toggleCompleted : function (position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  }
};

let view = {
  displayTodos : function() {
    if (todoList.todos.length === 0) {
      let todosUl = document.querySelector("ul");
      todosUl.innerHTML = "No todos here!";
    } else {
      let biglen = [0, ""];
      todoList.todos.forEach(function(todo) {
        todo = todo.todoText.trim();
        if (todo.length>biglen[0]) {
          biglen[0] = todo.length;
          biglen[1] = todo;
        }
      });
      let maxlen = biglen[0] + 2;

      let todosUl = document.querySelector("ul");
      todosUl.innerHTML = "";
      todoList.todos.forEach(function (todo, position) {
        let todoLi = document.createElement("li");
        let todoTextWithCompletion = "";
        todoLi.id = position;
        todoLi.textContent = todo.todoText + " ".repeat(maxlen-todo.todoText.length);

        if (todo.completed === true) {
          todoTextWithCompletion = todoLi.appendChild(this.createToggleButton("x"));
        } else {
          todoTextWithCompletion = todoLi.appendChild(this.createToggleButton(" "));
        }

        todoLi.appendChild(this.createDeleteButton());
        todoLi.appendChild(this.createChangeInput());
        todosUl.appendChild(todoLi);
      }, this);
    }
  },
  createDeleteButton : function () {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  createToggleButton : function (content) {
    let toggleButton = document.createElement('button');
    toggleButton.textContent = content;
    toggleButton.className = 'toggleButton';
    return toggleButton;
  },
  createChangeInput : function () {
    let changeInput = document.createElement('input');
    changeInput.placeholder = "Modify";
    changeInput.className = 'changeTodo';
    changeInput.style = "width:25ch";
    return changeInput;
  },
  setUpEventListeners : function () {
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event) {
      let elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(event.target.parentNode.id));
      } else if (elementClicked.className === 'toggleButton'){
        handlers.toggleCompleted(parseInt(event.target.parentNode.id));
      }
    });
    todosUl.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        let currentInput = event.target;
        if (currentInput.className === 'changeTodo') {
          handlers.changeTodo(parseInt(event.target.parentNode.id), currentInput.value);
        }
      }
    });

    addTodoInput = document.getElementById('addTodoTextInput');
    addTodoInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        handlers.addTodo();
      }
    });
  }
};

view.displayTodos();
view.setUpEventListeners();