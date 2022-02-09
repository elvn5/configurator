import React, { VFC } from 'react';
import { CheckboxProps } from "src/components/CheckBox/types";

const Checkbox: VFC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
}) => (
  <label className="checkbox">
    {label && <div>{label}</div>}
    <input
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span className="checkmark"/>
  </label>
);

export default Checkbox;
