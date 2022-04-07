import React from "react";
import { Box } from "./Boxes";
import Button from "../Button/Button";

const ResultBox = () => {
  return (
    <Box type="result">
      <Button title={"="} form={"result"} />
    </Box>
  );
};

export default ResultBox;
