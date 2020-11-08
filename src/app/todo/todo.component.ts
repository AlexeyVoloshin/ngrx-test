import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../models/todo.interface';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, AfterViewInit {
  @Input() todo: ITodo;
  @Output() onDeleteTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() onCompleted: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() onEditMode: EventEmitter<void> = new EventEmitter<void>()

  constructor() {}

  ngAfterViewInit(): void {
  }

  completed(event): void {
    event.preventDefault();
    this.onCompleted.emit();

  }
  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.onDeleteTodo.emit();
  }

  toggleEdit(): void {
    this.onEditMode.emit();
  }

}
