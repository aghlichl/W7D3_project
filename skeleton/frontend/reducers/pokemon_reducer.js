import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

export default (state = {}, action) => {
  Object.freeze(state)
  let newState;
  switch (action.type) {

    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({}, state, action.pokemon)
      return newState;
  
    default:
      return state;
  }
}