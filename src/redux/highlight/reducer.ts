import { AnyAction } from 'redux'
import {SET_ARR_OF_INDEX, SET_HIGHLINGT} from './actions.ts/actionsTypes';
import { IHighlight } from './types';


const highlightInitialState: IHighlight = {
  highlight: 0,
  arrHighlight: []
}


const highlightReducer = (state = highlightInitialState, action: AnyAction) => {
  switch (action.type) {
    case SET_HIGHLINGT:
      return { ...state, highlight: action.payload};
    case SET_ARR_OF_INDEX:
      return { ...state, arrHighlight: action.payload};
    default:
      return state;
  };
};


export default highlightReducer;