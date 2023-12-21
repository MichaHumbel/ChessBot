import { FunctionComponent } from 'react';
import { useDrag } from 'react-dnd';
import { PieceType } from '../../types/piece.type';

interface PieceProps {
  piece: PieceType;
  onClick: (piece: PieceType) => void;
}

const Piece: FunctionComponent<PieceProps> = ({ piece, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: piece.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      onClick={() => onClick(piece)}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className={
        isDragging ? 'cursor-grabbing bg-transparent' : 'cursor-pointer'
      }
      src={piece.img}
      alt={`${piece.type}`}
    />
  );
};

export default Piece;
