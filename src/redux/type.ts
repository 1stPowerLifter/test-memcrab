import { IHighlight } from "./highlight/types";
import { IMatrix } from "./matrix/types";
import { ISizeState } from "./size/types";

export interface Store {
   size: ISizeState,
    matrix: IMatrix,
    highlight: IHighlight 
}