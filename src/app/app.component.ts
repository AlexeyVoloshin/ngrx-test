import { Component, OnInit } from '@angular/core';
import { ITodo } from './models/todo.interface';
import { select, Store } from '@ngrx/store';
import { CountState } from './store/reducers/count/count.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCount, selectUpdateAt } from './store/reducers/count/count.selectors';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './store/reducers/count/count.actions';
import { TodoState } from './store/reducers/todo/todo.reducer';
import { TodoCompletedAction, TodoCreateAction, TodoDeletedAction, TodoEditAction } from './store/reducers/todo/todo.actions';
import { todoListSelector } from './store/reducers/todo/todo.selectors';
import { TodoStorageService } from './services/todo-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public editIds: Array<number> = [];
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disapleDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));
  public updateAt$: Observable<number> = this.store$.pipe(select(selectUpdateAt));

  todoList$: Observable<ITodo[]> = this.storeTodo$.pipe(select(todoListSelector));
  constructor(
    private store$: Store<CountState>,
    private storeTodo$: Store<TodoState>,
    private todoStorageService: TodoStorageService
    ) {}
  ngOnInit(): void {
    this.todoStorageService.init();
  }

  addTodo(todo: ITodo): void {
    // this.todos.push(todo);
    this.storeTodo$.dispatch(new TodoCreateAction({ text: todo.text }));
  }

  onDelete(todo: ITodo): void {
    this.storeTodo$.dispatch(new TodoDeletedAction({ todo }));
  }

  onCompleted(todo: ITodo): void {
    this.storeTodo$.dispatch(new TodoCompletedAction({ todo }));
  }

  onEdit(todo: ITodo): void {
    this.storeTodo$.dispatch(new TodoEditAction({ todo }));
    this.editIds = this.editIds.filter(item => item !== todo.id);
  }

  onEditMode(id): void {
    this.editIds.push(id);
  }

  increase(): void {
    this.store$.dispatch(new CountIncreaseAction());
  }
  decrease(): void {
    this.store$.dispatch(new CountDecreaseAction());
  }
  clear(): void {
    this.store$.dispatch(new CountClearAction());
  }
}
