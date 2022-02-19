import React, {  VFC } from "react";
import { TTooltipProps } from "src/components/Tooltip/types";

const Tooltip:VFC<TTooltipProps> = (
  {
    x,
    y,
    display
  }) =>{

  if(!display){
    return null;
  }

  return (
    <div
      className="tooltip"
      style={{
        left: String(x),
        top: String(y),
        opacity: String(Number(display)),
        transition: 'opacity 0.3s ease',
      }}
    >
      <p>макс. кол-во слева = 2 шт</p>
      <p>макс. кол-во справа = 2 шт</p>
      <p>Общее кол-во = 4 шт</p>
    </div>
  );
};

export default Tooltip;
