import { INumber } from "../redux/matrix/type";

export const getLineTotal = (arr:INumber[]):number => arr.reduce((acc,number)=> acc+number.number , 0)