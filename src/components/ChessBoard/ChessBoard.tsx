import { FunctionComponent, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  CHESS_BOARD_SIZE,
  GAME_BOARD_SIZE,
} from '../../constants/gameBoardConstants';
import { pieces } from '../../constants/pieces';
import { PieceType } from '../../types/piece.type';
import Square from '../Square/Square';

interface ChessBoardProps {}

const ChessBoard: FunctionComponent<ChessBoardProps> = () => {
  const [gameState, setGameState] = useState(pieces);

  // TODO: move to helper functions
  const makeMove = (piece: PieceType, dropIndex: number) => {
    setGameState((prevGameState) =>
      prevGameState.map((gameStatePiece) => {
        if (gameStatePiece.index === piece.index) {
          return { ...piece, index: dropIndex, isFirstMove: false };
        }
        return gameStatePiece;
      })
    );
  };

  const createChessBoard = Array.from(
    { length: CHESS_BOARD_SIZE * CHESS_BOARD_SIZE },
    (_, i) => {
      const piece = gameState.find((el) => el.index === i);

      return (
        <Square
          piece={piece}
          index={i}
          makeMove={makeMove}
          key={`square-${i}`}
        />
      );
    }
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`w-[${GAME_BOARD_SIZE}px] h-[${GAME_BOARD_SIZE}px] flex flex-wrap`}
      >
        {createChessBoard}
      </div>
    </DndProvider>
  );
};

export default ChessBoard;
