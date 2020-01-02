import { getCharacter } from 'rickmortyapi';

// actions
export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SERACH_BY_NAME = 'SERACH_BY_NAME';
export const SORT_CHARACTERS = 'SORT_CHARACTERS';
// action creater
export function addAllCharacters(data) {
  return { type: FETCH_ALL_CHARACTERS, payload: data };
}

export function paginateCharacter(pageNumber) {
  console.log(pageNumber);
  return dispatch => {
    debugger;
    getCharacter({ page: pageNumber })
      .then(resp => {
        debugger;
        dispatch(addAllCharacters(resp));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function searchChracter(name, filterParms) {
  let params = {};
  const { Species, Gender } = filterParms;

  if (name) {
    params.name = name;
  }

  if (Species) {
    params.species = Species;
  }
  if (Gender) {
    params.gender = Gender;
  }

  return dispatch => {
    getCharacter(params)
      .then(resp => {
        dispatch(addAllCharacters(resp));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchAllCharacters() {
  return dispatch => {
    getCharacter()
      .then(resp => {
        dispatch(addAllCharacters(resp));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
