import React from "react"

interface ButtonProps {
    color?: string;
    label?: string;
    onClick: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, color, label } : ButtonProps) => {
    return (
        <button className="bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded-lg" onClick={onClick}>
            { label }
        </button>

    )
}