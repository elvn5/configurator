import React, { VFC } from "react";
import cn from "classnames";
import { IButtonProps } from "src/components/Button/types";

const Button:VFC<IButtonProps> = (
  {
    disabled,
    text,
    className,
    onClick
  }
) => (
  <button
    disabled={disabled}
    className={cn(className, "button")}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
