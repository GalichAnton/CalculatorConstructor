import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
export type DragEndResult = DropResult;
interface IDragDropWrapperProps {
  children: React.ReactNode;
  onDragEnd: (result: DropResult) => void;
}

const DragDropWrapper: React.FC<IDragDropWrapperProps> = ({
  children,
  onDragEnd,
}) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export default DragDropWrapper;
