import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setArrOfIndex } from '../../../redux/highlight/actions.ts/actions';
import { selectArrHighlight, selectHighlight } from '../../../redux/highlight/selectors';
import { changeMatrixNumber } from '../../../redux/matrix/actions.ts/actions';
import { selectMatrixSortedNumber } from '../../../redux/matrix/selectors';
import {getArrIdxHighlight} from '../../../utils/getArrHighlight'
import style from "./Box.module.css"

interface IBox{
    idx: number
    number: number
    idxArr: number
}

export const Box: FC<IBox> = ({ idx, idxArr, number }) => {

    const dispatch = useDispatch()
    const highlight = useSelector(selectHighlight)
    const matrixSortedNumber = useSelector(selectMatrixSortedNumber)
    const arrHighlight = useSelector(selectArrHighlight)

        const absolutIdx = matrixSortedNumber.indexOf(number)

    let styleBox = arrHighlight.includes(absolutIdx) ? [style.box, style.box_highlight] : [style.box]

    const handleOnClick = () => {
        dispatch(changeMatrixNumber({ idx, idxArr, step: 1 }))
    }

    const enter = (highlight:any) => {
        const hoverIdx: number = matrixSortedNumber.indexOf(number)
        const length = matrixSortedNumber.length
        const arrOfIdx = getArrIdxHighlight({ idx: hoverIdx, highlight, length })

        dispatch(setArrOfIndex(arrOfIdx))
    }
    const leave = () => dispatch(setArrOfIndex([]))

    return (
        <button className={styleBox.join(" ")}
            onClick={handleOnClick}
            onMouseEnter={() => enter(highlight)}
            onMouseLeave={leave}
        >
            {number}
        </button>
    );
}