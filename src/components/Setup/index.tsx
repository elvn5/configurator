import React, { VFC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";
import { getColor } from "src/components/Setup/utils";
import { ISetupProps } from "src/components/Setup/types";


const Setup:VFC<ISetupProps> = ({ progress }) => {
  const { currentConfiguration } = useSelector(selectCurrentConfiguration);

  return (
    <div className="setup">
      <div>
        <h3>Конфигурация</h3>
        <p>Модуль: {currentConfiguration.base?.tentSize}</p>
        <div
          className="setup__progress"
          style={{
            background: `linear-gradient(to right, #000000 ${progress}%,#F1F1F1 ${progress}% 100%)`
          }}/>
        <img src={currentConfiguration.base?.img} alt="" />
        <ul>
          <li className="flex justify-between mb-5">
            <div>
              <li>Каркас: {currentConfiguration.base?.karkas}</li>
              <li>Тент: {currentConfiguration.base?.tentSize}</li>
            </div>
            <div className="flex items-end">
              240 000 руб
            </div>
          </li>
          <li className="flex justify-between">
            <div>
              Цвет: {getColor(currentConfiguration.selectedColor)}
            </div>
            <div>
              22 000 руб.
            </div>
          </li>
        </ul>
      </div>
      <div>
        <hr/>
        <div>
          <p>Итоговая стоимость</p>
          <p>240 000 руб</p>
        </div>
      </div>
    </div>
  );
};

export default Setup;
