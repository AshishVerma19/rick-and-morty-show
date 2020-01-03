import { getCharacter } from 'rickmortyapi';

// actions
export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SERACH_BY_NAME = 'SERACH_BY_NAME';
export const SORT_CHARACTERS = 'SORT_CHARACTERS';
export const DATA_NOT_FOUND = 'DATA_NOT_FOUND';
export const LOADING_COMPLETE = 'LOADING_COMPLETE';
export const LOADING = 'LOADING';
// action creater
export function addAllCharacters(data) {
  return { type: FETCH_ALL_CHARACTERS, payload: data };
}

export function dataNotFound(data) {
  return { type: DATA_NOT_FOUND, payload: data };
}

export function loading() {
  return { type: LOADING };
}

export function loadingComplete() {
  return { type: LOADING_COMPLETE };
}

export function paginateCharacter(pageNumber) {
  return dispatch => {
    dispatch(loading());
    getCharacter({ page: pageNumber })
      .then(resp => {
        debugger;
        dispatch(loadingComplete());
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
    dispatch(loading());
    getCharacter(params)
      .then(resp => {
        dispatch(loadingComplete());
        if (resp.status === 404) {
          dispatch(dataNotFound(resp));
        } else {
          dispatch(addAllCharacters(resp));
        }
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
