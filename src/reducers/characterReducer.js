import {
  FETCH_ALL_CHARACTERS,
  DATA_NOT_FOUND,
  LOADING,
  LOADING_COMPLETE
} from '../actions/characterAction';

const initialState = {
  isLoading: false,
  info: {},
  characters: []
};

const characterReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS:
      return {
        ...state,
        ...{
          info: action.payload.info,
          characters: action.payload.results
        }
      };
    case DATA_NOT_FOUND:
      return initialState;
    case LOADING:
      return {
        ...state,
        ...{ isLoading: true }
      };
    case LOADING_COMPLETE:
      return {
        ...state,
        ...{ isLoading: false }
      };
    default:
      return state;
  }
};

export const getCharacters = state => state.characters;
export const getInfo = state => state.info;

export default characterReducer;
