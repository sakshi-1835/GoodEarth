
import React from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;