import axios from '../services/fetchService';

// actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * action creators
 */

export function addTodo(text) {
  return dispatch => {
    axios
      .get('/character')
      .then(res => {
        dispatch({ type: ADD_TODO, text });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
