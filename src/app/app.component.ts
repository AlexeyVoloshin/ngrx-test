import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo.interface';
import * as moment from 'moment';
import { select, Store } from '@ngrx/store';
import { CountState } from './store/reducers/count/count.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCount, selectUpdateAt } from './store/reducers/count/count.selectors';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './store/reducers/count/count.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disapleDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));
  public updateAt$: Observable<number> = this.store$.pipe(select(selectUpdateAt));

  todos: ITodo[] = [
    {text: '1. Освоить NgRx Store', date: '01.11.2020', completed: false, id: 1},
    {text: '2. Освоить NgRx Store', date: '01.11.2020', completed: false, id: 2},
  ];
  constructor(private store$: Store<CountState>) {}
  ngOnInit(): void {
  }

  addTodo(todo: ITodo): void {
    this.todos.push(todo);
  }

  onDelete(todo: ITodo): void {
    console.log(todo);
    this.todos = this.todos.filter(c => c.id !== todo.id);
    console.log(this.todos);
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }
  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }
  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
