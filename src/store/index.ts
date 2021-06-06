import { combineReducers } from 'redux';
import pokemons, { IPokemonsInitalState } from './pokemon';

export interface iInitalState {
  pokemons: IPokemonsInitalState;
}

const createRootReducer = () =>
  combineReducers({
    pokemons,
  });

export default createRootReducer;
