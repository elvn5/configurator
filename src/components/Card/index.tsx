import React, { VFC } from "react";
import { ICardProps } from "src/components/Card/types";
import CheckBox from "src/components/CheckBox";

const Card:VFC<ICardProps> = (
  {
    specifications,
    colors,
    karkas,
    tentSize,
    id,
    material,
    img,
    price,
    colorPrice,
  }
) => (
  <div className="card">
    {console.log(specifications + material)}
    <img src={img} width={260} height={260} alt="" />
    <ul>
      <li>Тент: {tentSize}</li>
      <li>Каркас: {karkas}</li>
      <li>Цена: {price}</li>
      <li>Цвет: Белый</li>
      <li className="flex justify-between">
        {colors.map(color =>
          <CheckBox key={color + id}/>
        )}
      </li>
      <li>
        +{colorPrice} руб
      </li>
      <li className="flex flex-col">
        <button className="button__base">Выбрать</button>
        <button className="button__default">Подробнее</button>
      </li>
    </ul>
  </div>
);

export default Card;
