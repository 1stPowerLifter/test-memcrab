import { ISizeState } from "../redux/size/types"
import { createLine } from "./createLine"

export const createMatrix = ({ width, heigth }:ISizeState):number[][]=> {
    let counterHeight = 0
    const matrix = []

    while (counterHeight < heigth) {

        const line = createLine(+width)
        matrix.push(line)
        counterHeight+=1
    }
    
    return matrix
}