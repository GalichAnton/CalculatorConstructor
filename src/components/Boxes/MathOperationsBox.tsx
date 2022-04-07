import React from "react";
import Button from "../Button/Button";
import { Box } from "./Boxes";
import { operations } from "../../constants/Operations";

const MathOperationsBox = () => {
  return (
    <Box type="operation">
      {Object.keys(operations)
        .filter((operation) => operation !== "=")
        .map((operation) => (
          <Button key={operation} title={operation} />
        ))}
    </Box>
  );
};

export default MathOperationsBox;
