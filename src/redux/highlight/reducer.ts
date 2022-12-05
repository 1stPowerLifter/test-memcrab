import { AnyAction } from 'redux'
import {SET_ARR_OF_INDEX, SET_HIGHLINGT} from './actions.ts/actionsTypes';
import { highlight } from './types';


const highlightInitialState: highlight = {
  highlight: 0,
  arrOfIndex: []
}


const highlightReducer = (state = highlightInitialState, action: AnyAction) => {
  switch (action.type) {
    case SET_HIGHLINGT:
      return { ...state, highlight: action.payload};
    case SET_ARR_OF_INDEX:
      return { ...state, arrOfIndex: action.payload};
    default:
      return state;
  };
};


export default highlightReducer;