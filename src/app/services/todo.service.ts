import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ITodoHttp } from '../models/http-models/todo-http.interface';
import { ITodo } from '../models/todo.interface';


@Injectable()
export class TodoService {
  todosUrl = `${environment.apiUrl}todos.json`;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  getTodos(): Observable<ITodoHttp> {
    return this._http.get<ITodoHttp>(this.todosUrl);
  }
}
