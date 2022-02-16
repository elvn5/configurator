import React, { VFC } from "react";
import { ITitleProps } from "src/components/Title/types";

const Title:VFC<ITitleProps> = ({ title, className }) => (
  <h2 className={`text-2xl my-8 ${className} title`}>
    {title}
  </h2>
);

export default Title;
