angular.module('MyTodoApp', [])
    .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
        {
            name:'Learn AngularJS', 
            task:'Learn all the basic features and funtionality of angular.',
            done:true
        },
        {
            name:'Learn MEAN Stack',
            task:'Learn application development in MEAN.',
            done:false
        }
    ];
    
    todoList.addTodo = function() {
        todoList.todos.push({name: todoList.todoName, task:todoList.todoTask, done:false});
        todoList.todoTask = '';
        todoList.todoName = '';
    };
     
    todoList.remaining = function() {
        var count = 0;
        angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
     
    todoList.delete = function() {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});