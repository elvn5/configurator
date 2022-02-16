import React, { VFC } from "react";

const Header:VFC = () => (
  <div id="header">
    <h1 className="text-center mt-20 header__title">Конфигуратор</h1>
    <p className="text-center my-5 header__desc">Собери свой модуль за 7 шагов!</p>
    <hr/>
  </div>
);

export default Header;
