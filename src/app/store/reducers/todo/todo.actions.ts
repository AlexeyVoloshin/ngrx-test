import { Action } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo.interface';

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item',
  completed = '[TODO] completed todo item',
  edit = '[TODO] edit todo item'
}
export class TodoCreateAction implements Action {
 readonly type = todoActionsType.create;
 constructor(public payload: { text: string }) {}
}

export class TodoCompletedAction implements Action {
  readonly type = todoActionsType.completed;
  constructor(public payload: { todo: ITodo }) {}
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: { todo: ITodo }) {}
}

export class TodoDeletedAction implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: { todo: ITodo }) {}
}

export type TodoActions = TodoCreateAction
| TodoCompletedAction
| TodoDeletedAction
| TodoEditAction;
