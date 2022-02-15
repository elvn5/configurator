import React, { VFC } from "react";
import Title from "src/components/Title";

const FinalConfig:VFC = () => (
  <div className="final__config">
    <ul className="config">
      <Title title="Ваша конфигурация" className="final__config-title"/>
      <li>
        <div>
          Каркас 6х6
          Тент 6х6
        </div>
        <div>
          240 000 руб.
        </div>
      </li>
      <li>
        <div>
          Белый цвет
        </div>
        <div>
          Без доплаты
        </div></li>
      <li>
        <div>
          Зимний комплект
        </div>
        <div>
          220 000 руб.
        </div>
      </li>
      <li>
        <div>
          Торцевые шторы
        </div>
        <div>
          108 000 руб.
        </div>
      </li>
      <li>
        <div>
          Окна в кровле
        </div>
        <div>
          40 000 руб.
        </div>
      </li>
      <li>
        <div>
          Окна в стене
        </div>
        <div>
          40 000 руб.
        </div>
      </li>
      <div className="final__config-price">
        <div>
          <b>Общая стоимость вашего модуля</b>
          <div>648 000 руб.</div>
        </div>
      </div>
      <div className="final__config-module_count">
        <div><b>Количество модулей</b></div>
        <div>3 шт  </div>
        {/*<div className="final__minus"/> <div className="final__plus"/>*/}
      </div>
      <div className="final__config-total">
        <div><b>Итоговая стоимость</b></div>
        <div>1 944 000 руб</div>
      </div>
    </ul>
  </div>
);

export default FinalConfig;
