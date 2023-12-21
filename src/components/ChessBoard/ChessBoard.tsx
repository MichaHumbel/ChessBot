import { FunctionComponent, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  CHESS_BOARD_SIZE,
  GAME_BOARD_SIZE,
} from '../../constants/gameBoardConstants';
import { pieces } from '../../constants/pieces';
import { PieceColorEnum } from '../../enums/piece-color.enum';
import { PieceTypeEnum } from '../../enums/piece-type.enum';
import { PieceType } from '../../types/piece.type';
import Square from '../Square/Square';

interface ChessBoardProps {}

const ChessBoard: FunctionComponent<ChessBoardProps> = () => {
  const [gameState, setGameState] = useState(pieces);

  // TODO: move to helper functions
  const makeMove = (piece: PieceType) => {
    if (piece.color === PieceColorEnum.WHITE) {
      if (piece.type === PieceTypeEnum.PAWN) {
        setGameState((prevGameState) =>
          prevGameState.map((gameStatePiece) => {
            if (gameStatePiece.index === piece.index) {
              return { ...piece, index: piece.index - 8 };
            }
            return gameStatePiece;
          })
        );
      }
    }

    if (piece.color === PieceColorEnum.BLACK) {
    }
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
