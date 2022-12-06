import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMatrix } from '../../redux/matrix/selectors';
import { Line, LineAverage } from './Line';
import style from './Matrix.module.css'

export const Matrix: FC = () => {
    const matrix = useSelector(selectMatrix)


    return (
        <ul className={style.matrix}>
            {matrix.map((line, idx) => (
                <li key={line.id}
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