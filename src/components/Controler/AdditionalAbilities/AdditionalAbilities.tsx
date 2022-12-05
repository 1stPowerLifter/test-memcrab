import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setHighlight } from '../../../redux/highlight/actions.ts/actions';
import { addLine, deleteLastLine } from '../../../redux/matrix/actions.ts/actions';
import { selectMaxNumOfBoxes } from '../../../redux/size/selectors';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';

export const AdditionalAbilities: FC = () => {
    const [value, setValue] = useState<string | number>("")
    const maxNumOfBoxes = useSelector(selectMaxNumOfBoxes)
    const dispatch = useDispatch()
    const message = "How many close numbers?"

    useEffect(() => {
        if (typeof value !== "string") {
            if (value >= maxNumOfBoxes) {
                setValue(maxNumOfBoxes - 1)
                dispatch(setHighlight(maxNumOfBoxes - 1))
            } else {
                dispatch(setHighlight(value))
            }
        }
    }, [dispatch, maxNumOfBoxes, value])
    

    const handleChegerHighlight = (_: string, number: number) => {
        setValue(number)
    }

    const handleDeleter = () => {
        dispatch(deleteLastLine())
    }

    const handleCreater = () => {
        dispatch(addLine())
    }

    return (
        <div>
            <Input name="highlight" onChange={handleChegerHighlight} value={value} message={message} />
            <Button name="Add a Line" onClick={handleCreater} />
            <Button name="Delite a Line" onClick={handleDeleter} />
        </div>
    );
};