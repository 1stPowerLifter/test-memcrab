import React, { FC } from 'react';
interface IButton {
    name: string,
    onClick: () => void,
    type?: "button" | "submit"
    disabled?: boolean
}

export const Button: FC<IButton> = ({name, onClick, type = "button", disabled = false}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};