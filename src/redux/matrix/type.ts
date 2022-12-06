export interface IChangeMatrixNumber {
    idxArr: number,
    idx: number,
    step: number
}

export type IMatrix = ILine[]

export interface ILine {
    line: INumber[],
    id: string
}

export interface INumber {
    number: number,
    id: string
}