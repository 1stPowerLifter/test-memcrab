import { ISizeState } from '../types';
import { ADD_SIZE } from './actionsTypes';

export const addSize = (size:ISizeState) => ({
   type: ADD_SIZE,
   payload: size,
})