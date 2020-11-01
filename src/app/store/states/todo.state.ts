import { Todo } from 'src/app/app.component';
import { ITodo } from '../../models/todo.interface';

export interface ITodoState {
  todos: ITodo[];
  selectedTodo: Todo;
}

export const initialTodoState: ITodoState = {
  todos: null,
  selectedTodo: null
}
