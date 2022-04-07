import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import classes from "./Button.module.scss";
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  form?: "zero" | "result";
}
const Button: FC<ButtonProps> = ({ title, form }) => {
  return (
    <button
      className={cn(classes.button, {
        [classes.button_zero]: form === "zero",
        [classes.button_result]: form === "result",
      })}
    >
      {title}
    </button>
  );
};

export default Button;
