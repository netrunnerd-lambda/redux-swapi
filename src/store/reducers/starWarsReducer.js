import { FETCHING, SUCCESS, FAILURE } from '../actions/actionTypes';

const initialState = {
  characters: [],
  error: null,
  fetching: false,
  next: 'https://swapi.co/api/people',
  population: null,
  total: 0
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.chars],
        fetching: false,
        next: action.url,
        population: state.population + action.curr,
        total: action.total
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};
