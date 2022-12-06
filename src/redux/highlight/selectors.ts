import { Store } from "../type";

export const selectHighlight = (state: Store):number => state.highlight.highlight;
export const selectArrHighlight = (state: Store):string[] => state.highlight.arrHighlight;