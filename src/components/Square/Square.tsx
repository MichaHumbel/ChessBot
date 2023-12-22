import { FunctionComponent } from 'react';
import { useDrop } from 'react-dnd';
import {
  CHESS_BOARD_SIZE,
  GAME_BOARD_SIZE,
} from '../../constants/gameBoardConstants';
import { PieceTypeEnum } from '../../enums/piece-type.enum';
import { canPieceMove } from '../../helpers/pieceHelpers';
import { PieceType } from '../../types/piece.type';
import SquareOverlay from '../Overlay/SquareOverlay';
import Piece from '../Piece/Piece';

interface SquareProps {
  index: number;
  piece: PieceType;
  makeMove: (piece: PieceType, dropIndex: number) => void;
  gameState: PieceType[];
}

const Square: FunctionComponent<SquareProps> = ({
  piece,
  index,
  makeMove,
  gameState,
}) => {
  const row = Math.floor(index / CHESS_BOARD_SIZE);
  const col = index % CHESS_BOARD_SIZE;
  const color = (row + col) % 2 === 0 ? 'bg-slate-200' : 'bg-slate-800';

  const squareSize = GAME_BOARD_SIZE / 8;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'PIECE',
      drop: (draggedPiece: PieceType) => makeMove(draggedPiece, index),
      canDrop: (draggedPiece) => canPieceMove(draggedPiece, index, gameState),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [piece]
  );

  return (
    <div
      ref={drop}
      className={`${color} relative`}
      key={`${row}-${col}`}
      style={{ width: `${squareSize}px`, height: `${squareSize}px` }}
    >
      <span className="absolute">{index}</span>
      {piece && piece.type !== PieceTypeEnum.EMPTY && <Piece piece={piece} />}

      {isOver && !canDrop && <SquareOverlay color="red" />}
      {!isOver && canDrop && <SquareOverlay color="yellow" />}
      {isOver && canDrop && <SquareOverlay color="green" />}
    </div>
  );
};

export default Square;
