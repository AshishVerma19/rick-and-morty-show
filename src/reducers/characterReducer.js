import { FETCH_ALL_CHARACTERS } from '../actions/characterAction';

const initialState = {
  info: {},
  characters: []
};

const characterReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS:
      return {
        ...state,
        ...{
          info: action.data.info,
          characters: action.data.results
        }
      };
    default:
      return state;
  }
};

export const getCharacters = state => state.characters;
export const getInfo = state => state.info;

export default characterReducer;
