import React from "react";

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = React.memo(({ onClick }) => (
    <button type="button" onClick={onClick}>
        Получить случайного пользователя
    </button>
));

export default Button;
