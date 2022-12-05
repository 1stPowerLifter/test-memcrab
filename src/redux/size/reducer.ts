import { AnyAction } from 'redux'
import { ADD_SIZE } from './actions.ts/actionsTypes';
import { ISizeState } from './types';







const SizeInitialState:ISizeState = { heigth : "", width: "" }

export const sizeReduser = (state = SizeInitialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_SIZE:
      return action.payload;
    default:
      return state;
  }
};