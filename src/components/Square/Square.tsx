import { FunctionComponent } from 'react';
import {
  CHESS_BOARD_SIZE,
  GAME_BOARD_SIZE,
} from '../../constants/gameBoardConstants';
import { PieceType } from '../../types/piece.type';
import Piece from '../Piece/Piece';

interface SquareProps {
  index: number;
  piece: PieceType;
  makeMove: (piece: PieceType) => void;
}

const Square: FunctionComponent<SquareProps> = ({ piece, index, makeMove }) => {
  const row = Math.floor(index / CHESS_BOARD_SIZE);
  const col = index % CHESS_BOARD_SIZE;
  const color = (row + col) % 2 === 0 ? 'bg-slate-200' : 'bg-slate-800';

  const squareSize = GAME_BOARD_SIZE / 8;
  return (
    <div
      className={`${color}`}
      key={`${row}-${col}`}
      style={{ width: `${squareSize}px`, height: `${squareSize}px` }}
    >
      {piece && <Piece piece={piece} onClick={makeMove} />}
    </div>
  );
};

export default Square;
