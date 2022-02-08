import React, { VFC } from "react";
import Button from "src/components/Button/Button";

const Footer:VFC = () => (
  <footer>
    <hr className="my-10"/>
    <div className="flex justify-end">
      <Button
        disabled={false}
        text="Продолжить"
        className="button__base"
      />
    </div>
  </footer>
);

export default Footer;
