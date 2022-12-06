import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import {nanoid} from 'nanoid'
import { selectMatrix } from '../../../redux/matrix/selectors';
import { Box, BoxTotal, BoxProcent} from '../Box';
import { getLineTotal } from '../../../utils/getLineTotal';



interface ILine {
    idxArr: number
}

export const Line: FC<ILine> = ({ idxArr }) => {
    const [hoveredTotal, setHoveredTotal] = useState(false)
    const line = useSelector(selectMatrix)[idxArr]

    const lineTotal = getLineTotal(line)
    const lineProcent= line.map( (number) => +(number/lineTotal*100).toFixed(1))

    const handelHoverTotalOn = () => setHoveredTotal(true)
    const handelHoverTotalOff = () => setHoveredTotal(false)

    return (
        <>
            {hoveredTotal
                ? (<ul>
                    {lineProcent.map((number) => (
                        <li key={nanoid()}>
                            <BoxProcent number={number}/>
                        </li>
                    ))}
                </ul>)
                : (<ul>
                    {line.map((number, idx) => (
                        <li key={nanoid()}>
                            <Box number={number} idx={idx} idxArr={idxArr} />
                        </li>
                    ))}
                </ul>)
            }
            <BoxTotal number={lineTotal}
                enter={handelHoverTotalOn}
                leave={handelHoverTotalOff} />
        </>
    );
};