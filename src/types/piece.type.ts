import { PieceColorEnum } from '../enums/piece-color.enum';
import { PieceTypeEnum } from '../enums/piece-type.enum';

export type PieceType = {
  img?: string;
  index: number;
  type: PieceTypeEnum;
  captured?: boolean;
  color?: PieceColorEnum;
  isFirstMove?: boolean;
};
