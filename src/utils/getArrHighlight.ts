import { INumber } from "../redux/matrix/types"

interface IgetArrHighlight{
    highlight: number,
    id : string
    arr: INumber[]
}

export const getArrHighlight = ({ highlight, id , arr }: IgetArrHighlight): string[] => {
    
    const arrIdxHighlight: string[] = []

    if(highlight === 0 || arr.length === 0 ) return arrIdxHighlight
        
    const idx = arr.findIndex(number => number.id === id)
    const number = arr[idx].number

    let afterIdx: number = idx + 1;
    let beforIdx: number = idx - 1

    while (arrIdxHighlight.length !== highlight) {
        
        const afterNum = arr[afterIdx]
        const beforNum = arr[beforIdx]

        if (!afterNum) {
            arrIdxHighlight.push(beforNum.id)
            beforIdx -= 1
        } else if (!beforNum){
            arrIdxHighlight.push(afterNum.id)
            afterIdx +=1
        } else {

            number - beforNum.number < afterNum.number - number ? arrIdxHighlight.push(beforNum.id) : arrIdxHighlight.push(afterNum.id)

            number - beforNum.number < afterNum.number - number ? beforIdx -= 1 : afterIdx +=1
        }
    }

    return arrIdxHighlight
}