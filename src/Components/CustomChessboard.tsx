import React from "react";
import { Chessboard, ChessBoardProps } from "react-chessboard";
import Button from "./Button/Button";

interface IProps extends ChessBoardProps {
  findBestMove: Function;
}

const CustomChessBoard: React.FC<IProps> = ({ findBestMove, ...rest }) => {
  return (
    <div>
      <Chessboard {...rest}></Chessboard>
      <Button onClick={() => findBestMove()}>
        <p>test</p>
      </Button>
    </div>
  );
};

export default CustomChessBoard;
