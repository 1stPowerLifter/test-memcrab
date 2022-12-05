
export const creareArrOfAverage = (heigth:number, width:number, matrix:any ):number[] => {
    const arrOfAverage:number[] = []

    for (let w = 0; w < width; w += 1) {
        let total: number = 0

        for (let h = 0; h < heigth; h += 1) {
            total += matrix[h][w]
        }

        const average = +(total / heigth).toFixed(0)
        arrOfAverage.push(average)
    }

    return arrOfAverage
}