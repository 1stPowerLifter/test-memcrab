import { IMatrix } from "../redux/matrix/type"
import { ISizeState } from "../redux/size/types"
import { createLine } from "./createLine"


export const createMatrix = ({ width, heigth }:ISizeState):IMatrix => {
    let counterHeight = 0
    const matrix = []

    while (counterHeight < heigth) {

        const line = createLine(+width)
        matrix.push(line)
        counterHeight+=1
    }
    
    return matrix
}