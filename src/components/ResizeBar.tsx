import React, { FC } from "react";

type ResizeBarProps = {
  handleMouseDown: () => void;
};

export const ResizeBar: FC<ResizeBarProps> = ({ handleMouseDown }) => {
  return <div className="resize-bar" onMouseDown={handleMouseDown}></div>;
};
