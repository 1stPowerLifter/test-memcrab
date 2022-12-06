import { createSelector } from "reselect";
import { creareArrOfAverage } from "../../utils/creareArrOfAverage";
import { Store } from "../type";

export const selectMatrix = (state: Store):number[][] => state.matrix;
export const selectVisibilityMatrix = (state: Store):boolean => state.matrix.length > 0;

export const selectArrOfAverage = createSelector(selectMatrix, (matrix):number[] => {
    const width = matrix[0]?.length
    const heigth = matrix.length

    return creareArrOfAverage(heigth, width, matrix)
})

export const selectMatrixSortedNumber = createSelector(selectMatrix, (matrix):number[] => matrix.flatMap((line: number[]) => line).sort((a: number, b: number) => a - b));

export const selectMaxNumOfBoxes = createSelector(selectMatrix, (matrix):number => matrix.length * matrix[0].length)