import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = [];

const todos = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default todoApp;
