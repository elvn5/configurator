import React, { useState, VFC } from "react";
import { TCardProps, TColors } from "src/components/Card/types";
import { colors } from "src/components/Card/constants";
import cn from "classnames";
import { useNavigate } from "react-router";
import { ITents } from "src/redux/modules/types";
import { useDispatch } from "react-redux";
import { addConfiguration } from "src/redux/tentConfigurations";

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
    color = false
  }
) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [colorsState, setColorsState] = useState<Array<TColors>>(colors);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showDetailsCn = cn({
    "card__details": showDetails,
    "card__details_active": !showDetails,
  });

  const selectedCnColor = (index:number) => cn({
    "card__colors": true,
    "card__colors-selected": colorsState[index].selected
  });

  const onClickShowDetails = () =>{
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

  const onClickSelectTent = (tentObj:ITents) =>{
    const selectedColor = colorsState.find(element=> element.selected)?.color || "";

    dispatch(addConfiguration(Object.assign({}, tentObj,{ selectedColor: selectedColor } )));

    navigate("/winter-module");
  };

  return <div className="card">
    <img src={img} width={260} height={260} alt="" />
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
          onClick={()=>onClickSelectTent(
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
            })}
          className="button__base">
          Выбрать
        </button>
        <button className="button__default" onClick={onClickShowDetails}>
          Подробнее
        </button>
      </li>
    </ul>
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
  </div>;
};

export default Card;
