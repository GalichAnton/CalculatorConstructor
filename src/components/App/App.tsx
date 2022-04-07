import classes from "./App.module.scss";
import NumberBox from "../Boxes/NumberBox";
import DisplayBox from "../Boxes/DisplayBox";
import MathOperationsBox from "../Boxes/MathOperationsBox";
import ResultBox from "../Boxes/ResultBox";

function App() {
  return (
    <div className={classes.App}>
      Calculator
      <DisplayBox />
      <MathOperationsBox />
      <NumberBox />
      <ResultBox />
    </div>
  );
}

export default App;
