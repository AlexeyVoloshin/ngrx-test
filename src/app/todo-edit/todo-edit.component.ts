import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  public text: string;
  @Input() todo: ITodo;
  @Output() onEdit: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() { }

  ngOnInit(): void {
    this.text = this.todo.text;
  }

  editText(): void {
    if (this.text) {
      if (this.text === this.todo.text) return;
      const editTodo: ITodo = {
        id: this.todo.id,
        text: this.text
      }
      this.onEdit.emit(editTodo);
    }
  }
  onCancel(): void {
    this.text = this.todo.text;
  }

}
