import React, { useMemo, useState, VFC } from "react";
import Title from "src/components/Title";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";
import { toLocaleString } from "src/utils";
import { getColor } from "src/components/Setup/utils";
import Minus from "src/components/Icons/Minus";
import Plus from "src/components/Icons/Plus";
import { addConfig } from "src/redux/readyConfigurations";
import { resetState } from "src/redux/tentConfigurations";

const FinalConfig:VFC = () => {
  const { currentConfiguration } = useSelector(selectCurrentConfiguration);
  const [counter, setCounter] = useState<number>(1);

  const dispatch = useDispatch();

  // eslint-disable-next-line max-len
  const windowsCount = useMemo(()=>currentConfiguration.windows.state?.reduce((acc, current)=>acc + current.value, 0), [currentConfiguration.windows.state]);
  // eslint-disable-next-line max-len
  const roofWindowsCount = useMemo(()=>currentConfiguration.roofWindows.state?.reduce((acc, current)=> acc + current.value, 0), [currentConfiguration.roofWindows.state]);

  const totalCount = useMemo(()=>(currentConfiguration.base?.price || 0) +
      (Number(currentConfiguration.winterModulePrice) || 0) +
      (Number(currentConfiguration.curtainsModule.price) || 0) +
      (Number(currentConfiguration.windows.price) || 0) +
      (Number(currentConfiguration.roofWindows.price) || 0), [currentConfiguration]);

  const onClickAddModule = () => {
    dispatch(addConfig(currentConfiguration));
    dispatch(resetState());
  };

  return (
    <div className="final__config">
      <ul className="config">
        <Title title="Ваша конфигурация" className="final__config-title mb-5 my-0"/>
        <li>
          <div>
            <p>Каркас {currentConfiguration.base?.karkas}</p>
            <p>Тент {currentConfiguration.base?.tentSize}</p>
          </div>
          <div>
            {toLocaleString(currentConfiguration.base?.price || 0)} руб.
          </div>
        </li>
        <li>
          <div>
            {getColor(currentConfiguration.selectedColor)}
          </div>
          <div>
            {toLocaleString(currentConfiguration.base?.colorPrice)} руб
          </div></li>
        <li>
          <div>
            Зимний комплект
          </div>
          <div>
            {toLocaleString(currentConfiguration.winterModulePrice)} руб
          </div>
        </li>
        <li>
          <div>
            <p>Торцевые шторы</p>
            <p className="gray text-2xl">{currentConfiguration.curtainsModule.name}</p>
          </div>
          <div>
            {toLocaleString(currentConfiguration.curtainsModule.price)} руб
          </div>
        </li>
        <li>
          <div>
            <p>Окна в кровле</p>
            <p className="gray text-2xl">
              {currentConfiguration.windows.type} &nbsp;
              {currentConfiguration.windows.size} &nbsp;
              {windowsCount + "шт"}
            </p>
          </div>
          <div>
            {toLocaleString(currentConfiguration.windows.price)} руб.
          </div>
        </li>
        <li>
          <div>
            <p>Окна в стене</p>
            {currentConfiguration.roofWindows.state?.length && <p className="gray text-2xl">
              {currentConfiguration.roofWindows.type} &nbsp;
              {currentConfiguration.roofWindows.size} &nbsp;
              {roofWindowsCount + "шт"} </p>}
          </div>
          <div>
            {toLocaleString(currentConfiguration.roofWindows.price)} руб.
          </div>
        </li>
        <div className="final__config-price">
          <div>
            <b>Общая стоимость вашего модуля</b>
            <div>{toLocaleString(totalCount)} руб.</div>
          </div>
        </div>
        <div className="final__config-module_count">
          <div><b>Количество модулей</b></div>
          <div className="final__config-counter">{counter} шт &nbsp;
            <Minus onClick={()=>setCounter(old=>old === 0 ? old : old-1)}/> &nbsp;
            <Plus onClick={()=>setCounter(old=>old+1)}/> &nbsp;
          </div>
          {/*<div className="final__minus"/> <div className="final__plus"/>*/}
        </div>
        <div className="final__config-total">
          <div><b>Итоговая стоимость</b></div>
          <div>{toLocaleString(totalCount * counter)} руб</div>
        </div>
      </ul>
      <div className="final__config-buttons">
        <button className="button order">Оформить заказ</button>
        <button onClick={onClickAddModule} className="button add">Добавить еще модуль</button>
      </div>
    </div>
  );
};

export default FinalConfig;
