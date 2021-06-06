import { IStateRequest } from './../interface/index';
import { Dispatch } from 'react';
import { ITypesRequest } from '../pages/Pokedex/interface';
import req from '../utils/request';
import { iInitalState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPE_RESOLVE = 'FETCH_TYPE_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

export type ActionTypes = TypesAction;

export interface IPokemonsInitalState {
  types: IStateRequest<string>;
}

const initialState: IPokemonsInitalState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export const pokemons = (state = initialState, action: TypesAction) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPE_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: iInitalState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: iInitalState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>('getOther');
      console.log('🚀 ~ file: pokemon.ts ~ line 65 ~ return ~ response', response);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPE_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default pokemons;
