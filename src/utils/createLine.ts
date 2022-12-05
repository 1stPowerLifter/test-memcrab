import { getRandomNumber } from "./getRandomNumber"

export const createLine = (width:number): number[] => {
    let counterWidth = 0
    const line = []

    while (counterWidth < width) {
        line.push(getRandomNumber())
        counterWidth += 1
    }
    
    return line
}