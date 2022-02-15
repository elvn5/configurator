import React, { VFC } from 'react';
import { CheckboxProps } from "src/components/CheckBox/types";

const Checkbox: VFC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
}) => (
  <label className="checkbox">
    {[1,2,3,4,5,6].map(inp=><input
      key={inp}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />)}
    {label && <div>{label}</div>}

    <span className="checkmark"/>
  </label>
);

export default Checkbox;
