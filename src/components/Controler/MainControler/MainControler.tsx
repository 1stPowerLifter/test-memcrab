import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMatrix } from '../../../redux/matrix/actions.ts/actions';
import { addSize } from '../../../redux/size/actions.ts/actions';
import { createMatrix } from '../../../utils/createMatrix';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';

interface IStateSize {
    heigth: string|number,
    width: string|number
}

export const MainControler: FC = () => {
    const [{ heigth, width }, setSize] = useState<IStateSize>({ heigth: "", width: "" })
    const dispatch = useDispatch()
    
    const message = "Введіть число від 1 до 100"
    const isValid = +heigth > 0 && +width > 0

    useEffect(() => {

        if (heigth !== "" || width !== "") {
            if (+heigth < 0) setSize(state => ({ ...state, heigth: 0 }))
            if (+heigth > 100) setSize(state => ({ ...state, heigth: 100 }))
            if (+width < 0) setSize(state => ({ ...state, width: 0 }))
            if (+width > 100) setSize(state => ({ ...state, width: 100 }))
        }

    }, [heigth, width])
    

    const handleSizeChanger = (name: string, number: number): void => {
        setSize(state => ({ ...state, [name]: number }))
    }

    const handleSubmit = (): void => {
        if (typeof width !== "string" && typeof heigth !== "string") {
            dispatch(addSize({ heigth, width }))
            dispatch(setMatrix(createMatrix({ heigth, width })))
        }
    }

    return (
        <div>
            <Input name="heigth" onChange={handleSizeChanger} value={heigth} message={message} />
            <Input name="width" onChange={handleSizeChanger} value={width} message={message} />
            <Button name="Change Size" onClick={handleSubmit} disabled={!isValid} />
        </div>
    );
};