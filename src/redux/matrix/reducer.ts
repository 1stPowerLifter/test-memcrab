import { AnyAction } from 'redux'
import { createLine } from '../../utils/createLine';
import { ADD_LINE, CHANGE_MATRIX_NUMBER, CREATE_MATRIX, DELETE_LAST_ARR } from './actions.ts/actionsTypes';
import { Matrix } from './types';


const MatrixInitialState: Matrix = []


const matrixReducer = (state = MatrixInitialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_MATRIX:
      return action.payload;
    case CHANGE_MATRIX_NUMBER:
      const { idxArr, idx, step } = action.payload;
      state[idxArr][idx] += step;
      return [...state];
    case DELETE_LAST_ARR:
      const inxForDel = state.length - 1
      state.splice(inxForDel, 1)
      return [...state]
    case ADD_LINE:
      const matrixWidth = state[0].length
      const line = createLine(matrixWidth)
      return [...state, line];
    default:
      return state;
  }
};


export default matrixReducer;