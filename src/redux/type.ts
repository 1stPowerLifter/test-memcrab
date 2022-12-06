import { IHighlight } from "./highlight/types";
import { IMatrix } from "./matrix/type";
import { ISizeState } from "./size/types";

export interface Store {
   size: ISizeState,
    matrix: IMatrix,
    highlight: IHighlight 
}