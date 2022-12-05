import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMatrix } from '../../redux/matrix/selectors';
import {nanoid} from 'nanoid'
import { Line, LineAverage } from './Line';
import style from './Matrix.module.css'

export const Matrix: FC = () => {
    const matrix = useSelector(selectMatrix)


    return (
        <ul className={style.matrix}>
            {matrix.map((_:any, idx: number) => (
                <li key={nanoid()}
                    className={style.line}>
                    <Line idxArr={idx} />
                </li>
            ))}
            <li className={style.line}>
                <LineAverage/>
            </li>
        </ul>
    );
};