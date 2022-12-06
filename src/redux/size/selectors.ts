import { Store } from "../type";
import { ISizeState } from "./types";

export const selectSize = (state: Store):ISizeState => state.size;