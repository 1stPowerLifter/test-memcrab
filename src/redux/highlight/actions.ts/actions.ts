import { SET_ARR_OF_INDEX, SET_HIGHLINGT } from "./actionsTypes";

export const setHighlight = (number:number) => ({
   type: SET_HIGHLINGT,
   payload: number,
})

export const setArrOfIndex = (arr:number[]) => ({
   type: SET_ARR_OF_INDEX,
   payload: arr,
})