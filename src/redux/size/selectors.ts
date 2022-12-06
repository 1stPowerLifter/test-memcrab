import { Store } from "../type";
import { ISizeState } from "./types";

export const selectSize = (state: Store):ISizeState => state.size;
export const selectHeigth = (state: Store):number => state.size.heigth;
export const selectWidth = (state: Store):number => state.size.width;