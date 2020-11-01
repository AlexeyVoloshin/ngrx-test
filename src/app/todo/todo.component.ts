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

  constructor() {}

  ngAfterViewInit(): void {
    const chackbox = document.getElementById('check');
    chackbox.addEventListener('change', (event) => {
     this.todo.completed = event.target.checked;
     console.log(this.todo);


    })
  }

  ngOnInit(): void {

  }
  deleteTodo() {
    this.onDeleteTodo.emit(this.todo);
  }
}
