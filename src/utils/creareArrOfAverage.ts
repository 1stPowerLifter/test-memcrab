import { IMatrix } from "../redux/matrix/type"

export const creareArrOfAverage = (heigth:number, width:number, matrix:IMatrix ):number[] => {
    const arrOfAverage:number[] = []

    for (let w = 0; w < width; w += 1) {
        let total: number = 0

        for (let h = 0; h < heigth; h += 1) {
            total += matrix[h].line[w].number
        }

        const average = +(total / heigth).toFixed(0)
        arrOfAverage.push(average)
    }

    return arrOfAverage
}