import React, { useMemo, useState, VFC } from "react";
import { TCardProps, TColors, TTooltipState, TWindowsState } from "src/components/Card/types";
import { colors, windows } from "src/components/Card/constants";
import cn from "classnames";
import { getColor } from "src/components/Setup/utils";
import { toLocaleString } from "src/utils";
import Tooltip from "src/components/Tooltip";

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
    size,
    type,
    withPrice = false,
    input
  }
) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [colorsState, setColorsState] = useState<Array<TColors>>(colors);
  const [tooltipState, setTooltipState] = useState<TTooltipState>({
    display: false,
    x: null,
    y: null,
  });
  const [windowsState, setWindowsState] = useState<Array<TWindowsState>>([]);

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

  const selectedColor = useMemo(()=>{
    const selected = colorsState.find(color=>color.selected);
    if(selected){
      return getColor(selected.color);
    }
    return [];
  },
  [colorsState]);

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

  const onMouseOverTooltip = (event: React.MouseEvent<HTMLDivElement>) =>{
    setTooltipState({
      x: event.pageX,
      y: event.pageY,
      display: true
    });
  };

  const onMouseLeaveTooltip = () => {
    setTooltipState({
      x: null,
      y: null,
      display: false,
    });
  };

  const windowsCount = useMemo(()=>windowsState.reduce((acc, current)=>acc + current.value, 0), [windowsState]);

  const onClickWindow = (window:TWindowsState): void => {
    if(windowsState.includes(window)){
      setWindowsState(old => old.filter(element => element !== window));
      return;
    }

    const isValid = windowsCount <= 4 && (window.value + windowsCount) <= 4;

    if(isValid) {
      setWindowsState(old => old.concat(window));
    }
  };

  const buildStyles = (colorObj:TColors) =>({
    background: colorObj.color,
    border: colorObj.color === colors[2].color ? "1px solid gray" : ""
  });

  return <div className="card">
    <img src={img} width={260} height={260} alt="" />
    {type && <h2 className="card__windows-type">{type}</h2>}
    {size && <p className="card__windows-size">{size}</p>}
    {title && !type && <h2 className="card__title">{title}</h2> }
    {description && <p className="card__p-desc">{description}</p>}
    {price && withPrice && !type && <p className="card__p-price">{toLocaleString(price)} руб</p>}
    {price && withPrice && type && <p className="card__p-price">{toLocaleString(price)} руб шт</p>}
    {type &&
      <div className="card__checkbox-container">
        <div
          className="card__help"
          onMouseOver={e=>onMouseOverTooltip(e)}
          onMouseLeave={onMouseLeaveTooltip}
        >
          <div className="card__help-tooltip">
            ?
            <Tooltip
              x={tooltipState.x}
              y={tooltipState.y}
              display={tooltipState.display}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {windows.map(window => <div
            className={cn(
              "card__checkbox",
              windowsState.includes(window) ? "card__checkbox-selected" : "",
              type === "Круглые окна" ? "rounded-full" : ""
            )}
            onClick={()=>onClickWindow(window)}
            key={window.label}
          >
            {window.label}
          </div>)}
        </div>
      </div>}

    <ul className="card__list">
      {tentSize && <li className="text-3xl my-2"><span>Тент:</span> {tentSize}</li>}
      {karkas &&<li className="text-3xl my-2"><span>Каркас:</span> {karkas}</li>}
      {price && !withPrice && !type && <li className="text-3xl my-2"><span>Цена:</span> {price}</li>}
      {color && <li className="text-3xl my-2"><span>Цвет:</span> {selectedColor}</li>}
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
          onClick={()=>onClickSelectModule({
            specifications,
            karkas,
            tentSize,
            material,
            colorPrice,
            price,
            id,
            binding,
            img,
            title,
            size,
            type,
          }, colorsState, windowsState)}
          className="button__base"
          disabled={(!!type && !windowsState.length)}
        >
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
        <div className="text-4xl my-8">
          <span className="card__details-label">Характеристики: </span>
          {specifications}
        </div>
        <div className="text-4xl my-8">
          <span className="card__details-label" >Материал: </span >
          {material}
        </div>
        {input && <div className="text-4xl my-8">
          <span className="card__details-label" >Вход: </span >
          {input}
        </div>}
        {color && <div className="text-4xl my-8">
          <span className="card__details-label" >Цвет: </span >
          {selectedColor}
        </div>}
        <div className="text-4xl my-8">
          <span className="card__details-label" >Крепление:</span>
          {binding}
        </div>
      </div>
    }

  </div>;
};

export default Card;
