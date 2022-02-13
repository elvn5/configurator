import React, { useState, VFC } from "react";
import { TCardProps, TColors } from "src/components/Card/types";
import { colors } from "src/components/Card/constants";
import cn from "classnames";

const Card:VFC<TCardProps> = (
  {
    specifications,
    karkas,
    tentSize,
    id,
    material,
    img,
    price,
    colorPrice,
    binding,
    color = false,
    withDetails = false,
    onClickSelectModule,
    description,
    title,
  }
) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [colorsState, setColorsState] = useState<Array<TColors>>(colors);

  const showDetailsCn = cn({
    "card__details": showDetails,
    "card__details_active": !showDetails,
  });

  const selectedCnColor = (index:number) => cn({
    "card__colors": true,
    "card__colors-selected": colorsState[index].selected
  });

  const onClickShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const onClickColor = (selectedColor:TColors, index:number) =>{
    setColorsState(old=>{
      const newArray = old.map(element=>({
        color: element.color,
        selected: false
      }));
      newArray[index] = { ...selectedColor, selected: true };
      return newArray;
    });
  };

  const buildStyles = (colorObj:TColors) =>({
    background: colorObj.color,
    border: colorObj.color === colors[2].color ? "1px solid gray" : ""
  });

  return <div className="card">
    <img src={img} width={260} height={260} alt="" />

    {title && <h2>{title}</h2> }
    {description && <p>{description}</p>}
    {price && <p>{price}</p>}

    <ul className="card__list">
      {tentSize && <li className="text-3xl my-2"><span>Тент:</span> {tentSize}</li>}
      {karkas &&<li className="text-3xl my-2"><span>Каркас:</span> {karkas}</li>}
      {price && <li className="text-3xl my-2"><span>Цена:</span> {price}</li>}
      {color && <li className="text-3xl my-2"><span>Цвет:</span> Белый</li>}
      {color && <li className="flex justify-between">

        {colors.map((colorObj, index) =>
          <div
            className={selectedCnColor(index)}
            onClick={() => onClickColor(colorObj, index)}
            style={buildStyles(colorObj)}
            key={colorObj.color + id}
          />,
        )}
      </li>}
      {color && <li className="justify-center">
        + {colorPrice} руб
      </li>}

      <li className="flex flex-col">
        <button
          onClick={()=>onClickSelectModule(
            {
              specifications,
              karkas,
              tentSize,
              material,
              colorPrice,
              price,
              id,
              binding,
              img,
              title
            }, colorsState)}
          className="button__base">
          Выбрать
        </button>

        {withDetails &&
          <button className="button__default" onClick={onClickShowDetails}>
            Подробнее
          </button>}

      </li>
    </ul>
    {withDetails &&
      <div className={showDetailsCn}>
        <button
          className="flex justify-end w-11/12 text-4xl"
          onClick={onClickShowDetails}>
          &#x2715;
        </button>
        <div className="text-4xl my-8"><b>Характеристики:</b> {specifications}</div>
        <div className="text-4xl my-8"><b>Материал:</b> {material}</div>
        <div className="text-4xl my-8"><b>Цвет:</b> Белый</div>
        <div className="text-4xl my-8"><b>Крепление:</b> {binding}</div>
      </div>
    }

  </div>;
};

export default Card;
