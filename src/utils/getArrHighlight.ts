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

console.log({ after, befor })

    for (let i = befor; i <= after; i += 1) {
        arrHighlight.push(i)
    }
    console.log({ after, befor, arrHighlight, highlight})
    return arrHighlight
}