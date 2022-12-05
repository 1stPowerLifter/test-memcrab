import { FC } from 'react';
import style from "./Box.module.css"

interface IBoxTotal{
    number: number,
    enter: any,
    leave:any
}

export const BoxTotal: FC<IBoxTotal> = ({ number, enter, leave }) => {

    return (
        <div className={[style.box, style.box_total].join(" ")}
            onMouseEnter={enter}
            onMouseLeave={leave}>
           {number}
        </div>
    );
};