import React, { VFC } from "react";
import Title from "src/components/Title";

const FinalConfig:VFC = () => (
  <div>
    <Title title="Ваша конфигурация"/>
    <ul>
      <li>Каркас 6х6</li>
      <li>Белый цвет</li>
      <li>Зимний комплект</li>
      <li>Торцевые шторы</li>
      <li>Окна в кровле</li>
      <li>Окна в стене</li>
      <hr/>
      <div><b>Общая стоимость вашего модуль</b></div>
      <div><b>Количество модулей</b></div>
      <div><b>Итоговая стоимость</b></div>
    </ul>
  </div>
);

export default FinalConfig;
