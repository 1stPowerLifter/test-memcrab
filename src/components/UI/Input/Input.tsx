import React, { FC } from 'react';


interface InputProps {
    name: string;
    value: string | number,
    message: string,
    onChange:(name:string, number:number) => void ;
}


export const Input: FC<InputProps> = ({ name, onChange, value , message}) => {
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const number = +e.target.value;
        onChange(name, number)
    }


    return (
        <>
            <label htmlFor={name}>{name.toUpperCase()}</label>
            <input
                name={name}
                onChange={(e) => handleOnChange(e)}
                type="number"
                value={value}
                placeholder={message}
            />
        </>
    );
};