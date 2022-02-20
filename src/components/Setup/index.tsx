import React, { useMemo, VFC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";
import { getColor } from "src/components/Setup/utils";
import { toLocaleString } from "src/utils";
import { TSetupProps } from "src/components/Setup/types";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";


const Setup:VFC<TSetupProps> = ({ isOpen, setState }) => {
  const { currentConfiguration } = useSelector(selectCurrentConfiguration);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const totalPrice = useMemo(()=>(Number(currentConfiguration.base?.price) || 0) +
          (Number(currentConfiguration.roofWindows.price) || 0) +
      (Number(currentConfiguration.windows.price) || 0) +
      (Number(currentConfiguration.base?.colorPrice) || 0) +
      (Number(currentConfiguration.winterModulePrice) || 0) +
      (Number(currentConfiguration.curtainsModule.price) || 0), [currentConfiguration]);

  return (
    <div className={cn("setup",isMobile && "mobile__setup", isOpen && "mobile__setup-open" )}>
      {isMobile && <div
        onClick={() => setState ? setState(old => !old) : undefined}
        className={"setup__times"}
      >
        &times;
      </div>}
      <div>
        <h3 className={cn("text-4xl my-3")}>Конфигурация</h3>
        <p className={cn("text-3xl my-3")}>Модуль: {currentConfiguration.base?.tentSize}</p>
        <div
          className="setup__progress"
          style={{
            background: `linear-gradient(to right, #000000 ${85}%,#F1F1F1 ${85}% 100%)`
          }}/>
        <img src={currentConfiguration.base?.img} alt="" />
        <ul>
          <li className="flex justify-between mb-5">
            <div>
              <div className="gray">Каркас: {currentConfiguration.base?.karkas}</div>
              <div className="gray">Тент: {currentConfiguration.base?.tentSize}</div>
            </div>
            <div className="flex items-end">
              {currentConfiguration.base?.price} руб
            </div>
          </li>
          { currentConfiguration.winterModulePrice && <li className="flex justify-between mb-5">
            <div className="gray">
              Зимной модуль:
            </div>
            <div>
              {currentConfiguration.winterModulePrice} руб
            </div>
          </li>}

          {currentConfiguration.curtainsModule.price && <li className="flex justify-between mb-5">
            <div className="gray">
              {currentConfiguration.curtainsModule.name?.slice(0, 15)}. :
            </div>
            <div>
              {currentConfiguration.curtainsModule.price} руб
            </div>
          </li>}

          {currentConfiguration.windows.state?.length && <li className="flex justify-between mb-5">
            <div className="gray">
              Окна в кровле:
            </div>
            <div>
              {currentConfiguration.windows.price} руб
            </div>
          </li>}
          { currentConfiguration.selectedColor && <li className="flex justify-between">
            <div className="gray">
              Цвет: {getColor(currentConfiguration.selectedColor)}
            </div>
            <div>
              22 000 руб.
            </div>
          </li>}
        </ul>
      </div>
      <div>
        <div className="my-8 setup__total">
          <p>Итоговая стоимость</p>
          <p>{toLocaleString(totalPrice)} руб</p>
        </div>
      </div>
    </div>
  );
};

export default Setup;
