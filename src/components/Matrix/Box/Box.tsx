import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setArrHighlight } from '../../../redux/highlight/actions.ts/actions';
import { selectArrHighlight, selectHighlight } from '../../../redux/highlight/selectors';
import { changeMatrixNumber } from '../../../redux/matrix/actions.ts/actions';
import { selectMatrixSortedNumber } from '../../../redux/matrix/selectors';
import { getArrHighlight } from '../../../utils/getArrHighlight';
import style from "./Box.module.css"

interface IBox{
    idx: number
    number: number
    idxArr: number
}

export const Box: FC<IBox> = ({ idx, idxArr, number }) => {
    const [isHighlight, setIsHighlight] = useState(false)
    const dispatch = useDispatch()

    const highlight = useSelector(selectHighlight)
    const arrMatrix = useSelector(selectMatrixSortedNumber)
    const arrHighlight = useSelector(selectArrHighlight)

    useEffect(() => {
        arrHighlight.includes(number) 
            ? setIsHighlight(true)
            : setIsHighlight(false)
    }, [arrHighlight, number])
    

    const handleOnClick = () => {
        dispatch(changeMatrixNumber({ idx, idxArr, step: 1 }))
    }

    const enter = () => {
        const arr = getArrHighlight({ number, highlight, arr: arrMatrix })
        dispatch(setArrHighlight(arr))
    }

    const leave = () => {
        dispatch(setArrHighlight([]))
    }

    return (
        <button className={isHighlight ? [style.box, style.box_highlight].join(" ") :style.box}
            onClick={handleOnClick}
            onMouseEnter={enter}
            onMouseLeave={leave}
        >
            {number}
        </button>
    );
}