import { getAfterAndBefore } from "./getAfterAndBefore"

interface IgetArrHighlight {
    highlight: number,
    idx: number
    length: number
}


export const getArrIdxHighlight = ({ highlight, idx, length }: IgetArrHighlight): number[] => {

    if (highlight === 0) return []

    const arrHighlight:number[] = []
    const { after, befor } = getAfterAndBefore({ highlight, idx, length })


    for (let i = befor; i <= after+1; i += 1) {
        arrHighlight.push(i)
    }

    return arrHighlight
}