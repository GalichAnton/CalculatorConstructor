import React from "react";
import { Box } from "./Boxes";
import Button from "../Button/Button";
import { digits } from "../../constants/digits";

const NumberBox = () => {
  return (
    <Box type="digit">
      {digits.map((digit: number) => (
        <Button key={digit} title={digit.toString()} />
      ))}
      <Button title="0" form={"zero"} />
      <Button title="," />
    </Box>
  );
};

export default NumberBox;
