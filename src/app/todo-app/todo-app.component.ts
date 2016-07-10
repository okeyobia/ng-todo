import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent {

  newTodo: Todo = new Todo();

  todoss: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  addTodo() {
   // this.todoService.addTodo(this.newTodo);
    //this.newTodo = new Todo();


     if (!this.newTodo) { return; }
    return this.todoService.addTodo(this.newTodo)
                     .subscribe(
                       todo  => this.todoss.push(todo));
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos()
          .subscribe(todos => this.todoss = todos);
  }

}