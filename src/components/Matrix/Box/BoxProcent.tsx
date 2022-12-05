import { FC } from 'react';
import style from "./Box.module.css"

interface IBoxProcent{
    number: number,
}

export const BoxProcent: FC<IBoxProcent> = ({ number }) => {

    const background = { background: ` linear-gradient(90deg, #00d0ff 0%, #00d0ff ${number}%, rgba(255,255,255,1) ${number}%, rgba(255,255,255,1) 100%)` };

    return (
        <div className={style.box}
            style={background}>
           {number}%
        </div>
    );
};