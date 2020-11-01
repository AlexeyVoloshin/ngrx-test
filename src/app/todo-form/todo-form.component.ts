import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  private id = 2;

  @Output() onTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo(): void {

    this.id = ++this.id;
    const newTodo: ITodo = {
      id: this.id,
      text: this.text,
      completed: false,
      date: moment().format('DD.MM.YYYY-h:mm:ss a'),
    };
    this.onTodo.emit(newTodo);
    this.text = null;
  }
}
