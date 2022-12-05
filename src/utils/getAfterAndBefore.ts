interface IgetAfterAndBefore {
    highlight: number,
    idx: number
    length: number
}

interface IReturn {
    befor: number,
    after: number
}

export const getAfterAndBefore = ({ highlight, idx, length }: IgetAfterAndBefore): IReturn => {

    let beforNumber:number
    let afterNumber:number

    if (highlight % 2 === 0) {
        beforNumber = +highlight / 2
        afterNumber = +highlight / 2
    } else {
        beforNumber = (+highlight + 1) / 2
        afterNumber = (+highlight -1) /2
    }

    

    while (idx - beforNumber <= 0) {
        beforNumber -= 1
        afterNumber +=1
    }
    
    while (idx + afterNumber >= length) {
        beforNumber += 1
        afterNumber -=1
    }

    return {
        befor: idx -beforNumber,
        after: idx + afterNumber
    }
}