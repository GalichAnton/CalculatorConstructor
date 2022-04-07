import cn from "classnames";
import { FC, ReactNode } from "react";
import classes from "./Boxes.module.scss";
interface BoxProps {
  type?: "result" | "display" | "digit" | "operation";
  children: ReactNode;
  inactive?: boolean;
  dragging?: boolean;
}

export const Box: FC<BoxProps> = ({ type, children, inactive, dragging }) => {
  return (
    <div
      className={cn(classes.buttonBox, classes.box, {
        [classes.box_display]: type === "display",
        [classes.box_result]: type === "result",
        [classes.box_digits]: type === "digit",
        [classes.box_operations]: type === "operation",
        [classes.box_inactive]: inactive,
        [classes.box_dragging]: dragging,
      })}
    >
      {children}
    </div>
  );
};
