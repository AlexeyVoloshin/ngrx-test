import { HostListener, Injectable, Renderer2 } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { TodoLoadStateAction } from '../store/reducers/todo/todo.actions';
import { TodoState } from '../store/reducers/todo/todo.reducer';
import { todoFeatureSelector } from '../store/reducers/todo/todo.selectors';

export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  private isInit = false;
  constructor(private storeTodo$: Store<TodoState>,
    ) {}

  init(): void {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromStorage();

    this.storeTodo$.pipe(select(todoFeatureSelector),
    filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state));
    });

    window.addEventListener('storage', () => this.loadFromStorage());
  }
  private loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
    this.storeTodo$.dispatch(new TodoLoadStateAction({
      state: JSON.parse(storageState)
    }))
    }
  }
}
