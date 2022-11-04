import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import styles from "./Main.module.scss";
import Stockfish from "../../intergrations/Stockfish";
import CustomChessBoard from "../../Components/CustomChessboard";
import Button from "../../Components/Button/Button";
import ProgressBar from "@ramonak/react-progress-bar";

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
  const [showMove, setShowMove] = useState(false);
  const playerColor: "white" | "black" = "white";

  const toogleSetMove = () => {
    const temp = !showMove;
    setShowMove(temp);
    console.log(showMove);
  };
  return (
    <div className={styles.container}>
      <Stockfish playerColor={playerColor} test={showMove}>
        {({ position, onDrop, bestMove, engineStatus, returning }: any) => {
          console.log("returning", returning);
          return (
            <>
              <CustomChessBoard
                customArrows={showMove ? bestMove : []}
                customBoardStyle={boardStyle}
                position={position}
                boardOrientation={playerColor}
                onPieceDrop={onDrop}
                customDarkSquareStyle={darkSq}
                customLightSquareStyle={lightSq}
              ></CustomChessBoard>
              <ProgressBar
                labelAlignment={engineStatus < 0 ? "left" : "outside"}
                bgColor="black"
                completed={5 + engineStatus}
                customLabel={engineStatus}
                ariaValuemin={-20}
                ariaValuemax={20}
                baseBgColor="white"
                dir="auto"
              />
            </>
          );
        }}
      </Stockfish>
      <Button onClick={toogleSetMove}>
        <p>Show best move</p>
      </Button>
    </div>
  );
};

export default Main;
