import { INumber } from "../redux/matrix/type";
import {nanoid} from 'nanoid'

export const getRandomNumber = (): INumber => {
  const number = Math.floor(100 + Math.random() * 900);
  const id = nanoid()

  return {number, id}
}