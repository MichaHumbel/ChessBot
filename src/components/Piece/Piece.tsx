import { FunctionComponent } from 'react';
import { useDrag } from 'react-dnd';
import { PieceType } from '../../types/piece.type';

interface PieceProps {
  piece: PieceType;
}

const Piece: FunctionComponent<PieceProps> = ({ piece }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PIECE',
    item: piece,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
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
