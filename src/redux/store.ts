import { createStore, Store } from "redux";
import { combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import highlightReducer from "./highlight/reducer";
import matrixReducer from "./matrix/reducer";
import {sizeReduser} from "./size/reducer";


export const rootReducer = combineReducers({
    size: sizeReduser,
    matrix: matrixReducer,
    highlight: highlightReducer
});

const enhancer = devToolsEnhancer({});
export const store: Store = createStore(rootReducer,enhancer);