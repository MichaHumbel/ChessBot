import { PieceColorEnum } from '../enums/piece-color.enum';
import { PieceTypeEnum } from '../enums/piece-type.enum';
import { PieceType } from '../types/piece.type';

export const canPieceMove = (
  piece: PieceType,
  dropIndex: number,
  gameState: PieceType[]
): boolean => {
  if (
    piece.type === PieceTypeEnum.PAWN &&
    piece.color === PieceColorEnum.WHITE
  ) {
    return (
      (piece.index - 8 === dropIndex &&
        // prevents pawns from moving forward if there is a piece in front
        !gameState.find((el) => el.index === dropIndex)) ||
      (piece.index - 16 === dropIndex &&
        piece.isFirstMove &&
        // prevents pawns from moving forward if there is a piece in front
        !gameState.find((el) => el.index === dropIndex)) ||
      // TODO: doesn't work for A and H pawns
      // allows pawns to capter diagonally -> if the square you'd like to drop the pawn is occupied and the difference of its index to the currently dragged pawn is 9 -> diagonally up left
      gameState.find((el) => el.index === dropIndex)?.index ===
        piece.index - 9 ||
      // TODO: doesn't work for A and H pawns
      // allows pawns to capter diagonally -> if the square you'd like to drop the pawn is occupied and the difference of its index to the currently dragged pawn is 9 -> diagonally up right
      gameState.find((el) => el.index === dropIndex)?.index === piece.index - 7
    );
  }

  if (
    piece.type === PieceTypeEnum.PAWN &&
    piece.color === PieceColorEnum.BLACK
  ) {
    return (
      piece.index + 8 === dropIndex ||
      (piece.index + 16 === dropIndex && piece.isFirstMove)
    );
  }

  if (piece.type === PieceTypeEnum.ROOK) {
    // TODO: this is BS and only works if rook is on index 0 or 63
    return (
      piece.index - 1 === dropIndex ||
      piece.index - 2 === dropIndex ||
      piece.index - 3 === dropIndex ||
      piece.index - 4 === dropIndex ||
      piece.index - 5 === dropIndex ||
      piece.index - 6 === dropIndex ||
      piece.index - 7 === dropIndex ||
      piece.index - 8 === dropIndex ||
      piece.index + 1 === dropIndex ||
      piece.index + 2 === dropIndex ||
      piece.index + 3 === dropIndex ||
      piece.index + 4 === dropIndex ||
      piece.index + 5 === dropIndex ||
      piece.index + 6 === dropIndex ||
      piece.index + 7 === dropIndex ||
      piece.index + 8 === dropIndex ||
      piece.index - 16 === dropIndex ||
      piece.index - 24 === dropIndex ||
      piece.index - 32 === dropIndex ||
      piece.index - 40 === dropIndex ||
      piece.index - 48 === dropIndex ||
      piece.index - 56 === dropIndex ||
      piece.index + 16 === dropIndex ||
      piece.index + 24 === dropIndex ||
      piece.index + 32 === dropIndex ||
      piece.index + 40 === dropIndex ||
      piece.index + 48 === dropIndex ||
      piece.index + 56 === dropIndex
    );
  }
};
