import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  // hold lastid to simulate auto increament of id's

  lastid: number = 0;

  todos: Todo[] = [];

 private _url = 'api/todo/Todo.json';

  constructor(private _http: Http) {}

  // Simulate Post /todos

  addTodo(todo: Todo): Observable<Todo>{
    if(!todo.id){
      todo.id = ++this.lastid;
    }
   // this.todos.push(todo);
    return this._http.post(this._url, JSON.stringify(todo))
            .map((res: Response) => <Todo>res.json());
  }

  // simulate delete
  deleteTodoById(id: number): TodoService{
    this.todos = this.todos
        .filter(todo => todo.id !== id);
     return this;   
  }

 // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // simulate GET /todos
   getAllTodos(): Observable<Todo[]>{
      return this._http.get(this._url)
          .map((res: Response) => <Todo[]>res.json());
  }

  // simulate GET /todos/:id
  getTodoById(id: number): Todo{
    return this.todos
        .filter(todo => todo.id === id)
        .pop();
  }


   // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
