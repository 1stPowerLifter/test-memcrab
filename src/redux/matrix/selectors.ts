import { creareArrOfAverage } from "../../utils/creareArrOfAverage";

export const selectMatrix = (state: any) => state.matrix;
export const selectVisibilityMatrix = (state: any) => state.matrix.length > 0;
export const selectArrOfAverage = (state: any) => {
    const width = state.matrix[0]?.length
    const heigth = state.matrix.length

    return creareArrOfAverage(heigth, width, state.matrix)
}
export const selectMatrixSortedNumber = (state: any): number[] => state.matrix.flatMap((line: number[]) => line).sort((a: number, b: number) => a - b);
export const selectMaxNumOfBoxes = (state: any) => state.matrix.length*state.matrix[0].length