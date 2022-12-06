import { getRandomNumber } from "./getRandomNumber"
import {nanoid} from 'nanoid'
import { ILine } from "../redux/matrix/type"

export const createLine = (width:number): ILine => {
    let counterWidth = 0
    const line:ILine = {
        line: [],
        id:""
    }

    while (counterWidth < width) {
        line.line.push(getRandomNumber())
        line.id = nanoid()
        counterWidth += 1
    }
    
    return line
}