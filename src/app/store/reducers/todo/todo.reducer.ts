import { ITodo } from 'src/app/models/todo.interface';
import { TodoActions, todoActionsType } from './todo.actions';
import * as moment from 'moment';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: ITodo[];
}

const initialState: TodoState = {
  idIncrement: 3,
  todoList: []
};

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.load:
      return {
        ...action.payload.state
      };
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            text: action.payload.text,
            completed: false,
            createdAt: moment().format('DD.MM.YYYY-h:mm:ss a'),
            updatedAt: moment().format('DD.MM.YYYY-h:mm:ss a'),
          }
        ]
      };
      case todoActionsType.completed:
        return {
          ...state,
          todoList: state.todoList.map(todo => todo.id === action.payload.todo.id ? {
                ...todo,
                completed: !todo.completed,
                updatedAt: moment().format('DD.MM.YYYY-h:mm:ss a')
              } : todo
            )
        };
      case todoActionsType.edit:
        return {
          ...state,
          todoList: state.todoList.map(todo => todo.id === action.payload.todo.id ? {
              ...todo,
              text: action.payload.todo.text,
              updatedAt: moment().format('DD.MM.YYYY-h:mm:ss a')
            } : todo
          )
        };
      case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.todo.id)
      };
    default:
      return state;
  }
};
