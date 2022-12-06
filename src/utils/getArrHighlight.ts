interface IgetArrHighlight{
    highlight: number,
    number: number
    arr: number[]
}

export const getArrHighlight = ({ highlight, number, arr }: IgetArrHighlight): number[] => {
    
    const arrIdxHighlight: number[] = []

    if(highlight === 0 || arr.length === 0 ) return arrIdxHighlight
        
    const idx = arr.indexOf(number)

    let afterIdx: number = idx + 1;
    let beforIdx: number = idx - 1

    while (arrIdxHighlight.length !== highlight) {
        
        const afterNum = arr[afterIdx]
        const beforNum = arr[beforIdx]

        if (!afterNum) {
            arrIdxHighlight.push(beforNum)
            beforIdx -= 1
        } else if (!beforNum){
            arrIdxHighlight.push(afterNum)
            afterIdx +=1
        } else {

            number - beforNum < afterNum - number ? arrIdxHighlight.push(beforNum) : arrIdxHighlight.push(afterNum)

            number - beforNum < afterNum - number ? beforIdx -= 1 : afterIdx +=1
        }
    }

    return arrIdxHighlight
}