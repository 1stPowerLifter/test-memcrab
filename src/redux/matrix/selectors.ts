import { createSelector } from "reselect";
import { creareArrOfAverage } from "../../utils/creareArrOfAverage";
import { Store } from "../type";
import { ILine, IMatrix, INumber } from "./type";

export const selectMatrix = (state: Store):IMatrix => state.matrix;
export const selectVisibilityMatrix = (state: Store):boolean => state.matrix.length > 0;

export const selectArrOfAverage = createSelector(selectMatrix, (matrix):number[] => {
    const width = matrix[0]?.line.length
    const heigth = matrix.length

    return creareArrOfAverage(heigth, width, matrix)
})

export const selectMatrixSortedNumber = createSelector(selectMatrix, (matrix):INumber[] => matrix.flatMap((line:ILine) => line.line).sort((a:INumber, b:INumber) => a.number - b.number));

export const selectMaxNumOfBoxes = createSelector(selectMatrix, (matrix):number => matrix.length * matrix[0].line.length)