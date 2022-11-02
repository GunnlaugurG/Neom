import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import styles from "./Main.module.scss";
import Stockfish from "../../intergrations/Stockfish";
import CustomChessBoard from "../../Components/CustomChessboard";
import Button from "../../Components/Button/Button";

const lightSq = {
  background: "#bbbfcb",
};

const darkSq = {
  background: "#6e84bd",
};

const boardStyle = {
  boxShadow: "5px 5px 10px #212121, -5px -5px 10px #3f3f3f",
};

const Main = () => {
  return (
    <div className={styles.container}>
      <Stockfish>
        {({ position, onDrop, bestMove, getBestMove }: any) => {
          return (
            <CustomChessBoard
              customArrows={bestMove}
              customBoardStyle={boardStyle}
              position={position}
              boardOrientation="black"
              onPieceDrop={onDrop}
              customDarkSquareStyle={darkSq}
              customLightSquareStyle={lightSq}
              findBestMove={getBestMove}
            ></CustomChessBoard>
          );
        }}
      </Stockfish>
    </div>
  );
};

export default Main;
