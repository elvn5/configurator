import React, { VFC } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from 'src/common/assets/logo.jpeg';

const Logo:VFC = () => (
  <div className="logo ">
    <img src={logo} alt="" />
  </div>
);

export default Logo;
