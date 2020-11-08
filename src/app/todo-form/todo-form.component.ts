import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  private id = 2;

  @Output() onTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.id = ++this.id;
    const newTodo = {
      id: this.id,
      text: form.value.text,
    };
    this.onTodo.emit(newTodo);

  }
}
