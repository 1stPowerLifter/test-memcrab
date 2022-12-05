import { IChangeMatrixNumber, Matrix } from '../types';
import { CHANGE_MATRIX_NUMBER, CREATE_MATRIX, DELETE_LAST_ARR, ADD_LINE} from './actionsTypes';

export const setMatrix = (matrix:Matrix) => ({
   type: CREATE_MATRIX,
   payload: matrix,
})

export const changeMatrixNumber = (payload:IChangeMatrixNumber) => ({
   type: CHANGE_MATRIX_NUMBER,
   payload: payload
})

export const deleteLastLine = () => ({
   type: DELETE_LAST_ARR,
})

export const addLine = () => ({
   type: ADD_LINE,
})