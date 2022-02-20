import React, { VFC } from "react";
import Button from "src/components/Button/Button";
import { TFooterProps } from "src/components/Footer/types";
import cn from "classnames";

const Footer:VFC<TFooterProps> = ({ buttons }) => {
  const mobileButtonsClassname = cn({
    "justify-center": buttons?.length === 1,
    "justify-between": buttons?.length === 2,
    "flex": true
  });

  return (
    <footer className="footer">
      <hr className="my-10" />
      <div className={mobileButtonsClassname}>
        {buttons && buttons.map((
          {
            title,
            onClick,
            className
          }) =>
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
};
export default Footer;
