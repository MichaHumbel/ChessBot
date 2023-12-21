import { PieceColorEnum } from '../enums/piece-color.enum';
import { PieceTypeEnum } from '../enums/piece-type.enum';
import { PieceType } from '../types/piece.type';

export const canPieceMove = (piece: PieceType, moveIndex: number): boolean => {
  if (
    piece.type === PieceTypeEnum.PAWN &&
    piece.color === PieceColorEnum.WHITE
  ) {
    return (
      piece.index - 8 === moveIndex ||
      (piece.index - 16 === moveIndex && piece.isFirstMove)
    );
  }

  if (
    piece.type === PieceTypeEnum.PAWN &&
    piece.color === PieceColorEnum.BLACK
  ) {
    return (
      piece.index + 8 === moveIndex ||
      (piece.index + 16 === moveIndex && piece.isFirstMove)
    );
  }

  if (piece.type === PieceTypeEnum.ROOK) {
    // TODO: this is BS and only works if rook is on index 0 or 63
    return (
      piece.index - 1 === moveIndex ||
      piece.index - 2 === moveIndex ||
      piece.index - 3 === moveIndex ||
      piece.index - 4 === moveIndex ||
      piece.index - 5 === moveIndex ||
      piece.index - 6 === moveIndex ||
      piece.index - 7 === moveIndex ||
      piece.index - 8 === moveIndex ||
      piece.index + 1 === moveIndex ||
      piece.index + 2 === moveIndex ||
      piece.index + 3 === moveIndex ||
      piece.index + 4 === moveIndex ||
      piece.index + 5 === moveIndex ||
      piece.index + 6 === moveIndex ||
      piece.index + 7 === moveIndex ||
      piece.index + 8 === moveIndex ||
      piece.index - 16 === moveIndex ||
      piece.index - 24 === moveIndex ||
      piece.index - 32 === moveIndex ||
      piece.index - 40 === moveIndex ||
      piece.index - 48 === moveIndex ||
      piece.index - 56 === moveIndex ||
      piece.index + 16 === moveIndex ||
      piece.index + 24 === moveIndex ||
      piece.index + 32 === moveIndex ||
      piece.index + 40 === moveIndex ||
      piece.index + 48 === moveIndex ||
      piece.index + 56 === moveIndex
    );
  }
};
