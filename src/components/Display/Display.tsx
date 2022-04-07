import React, { ChangeEvent, useState } from "react";
import classes from "./Display.module.scss";
const Display = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const str = e.currentTarget.value;
    if (str.match(/\D/) == null && str.length < 12) {
      setValue(str);
    } else alert("Wrong input");
  };
  return (
    <input
      type="text"
      className={classes.display}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Display;
