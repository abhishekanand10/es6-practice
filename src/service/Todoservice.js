import Todo from '../model/Todo';

class TodoService{
    constructor(){
        this.todos = [];
    }

    addTodo(Title){
        let newTodo = new Todo(title);
        this.todos = [...this.todos, newTodo];

    }

    viewTodos(status){
        
    }
}

