import { FC } from 'react';
import style from "./Box.module.css"

interface IBoxAverage{
    number: number
}

export const BoxAverage: FC<IBoxAverage> = ({ number }) => {

    return (
        <div className={[style.box, style.box_average].join(" ")}>
           {number}
        </div>
    );
};