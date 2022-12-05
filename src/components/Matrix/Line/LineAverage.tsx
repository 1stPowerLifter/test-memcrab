import { FC } from 'react';
import { useSelector } from 'react-redux';
import {nanoid} from 'nanoid'
import { selectArrOfAverage } from '../../../redux/matrix/selectors';
import { BoxAverage } from '../Box';





export const LineAverage: FC= () => {
    const arrOfAverage =useSelector(selectArrOfAverage)

    return (
        <ul>
            {arrOfAverage.map((number: number) => (
                        <li key={nanoid()}>
                            <BoxAverage number={number}/>
                        </li>
                    ))}
        </ul>
    );
};