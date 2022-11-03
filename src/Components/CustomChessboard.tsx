import React from "react";
import { Chessboard, ChessBoardProps } from "react-chessboard";
import Button from "./Button/Button";

interface IProps extends ChessBoardProps {}

const CustomChessBoard: React.FC<IProps> = ({ ...rest }) => {
  return (
    <div>
      <Chessboard {...rest}></Chessboard>
      <Button onClick={() => {}}>
        <p>test</p>
      </Button>
    </div>
  );
};

export default CustomChessBoard;
