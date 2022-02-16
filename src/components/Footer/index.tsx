import React, { VFC } from "react";
import Button from "src/components/Button/Button";
import { TFooterProps } from "src/components/Footer/types";

const Footer:VFC<TFooterProps> = ({ buttons }) => (
  <footer className="footer">
    <hr className="my-10"/>
    <div className="flex justify-between">
      {buttons && buttons.map((
        {
          title,
          onClick,
          className
        })=>
        (
          <Button
            key={title}
            disabled={false}
            text={title}
            onClick={onClick}
            className={className}
          />
        )
      )}

    </div>
  </footer>
);

export default Footer;
