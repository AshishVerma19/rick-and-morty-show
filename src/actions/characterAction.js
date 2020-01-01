import characterService from './baseAction';

// actions
export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SERACH_BY_NAME = 'SERACH_BY_NAME';
export const SORT_CHARACTERS = 'SORT_CHARACTERS';

// action creater
export function addAllCharacters(data) {
  return { type: FETCH_ALL_CHARACTERS, data };
}

export function fetchAllCharacters() {
  return dispatch => {
    characterService
      .get('/character')
      .then(resp => {
        dispatch(addAllCharacters(resp.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
