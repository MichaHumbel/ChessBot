import blackBishop from '../assets/pieces/bishop-b.svg';
import whiteBishop from '../assets/pieces/bishop-w.svg';
import blackKing from '../assets/pieces/king-b.svg';
import whiteKing from '../assets/pieces/king-w.svg';
import blackKnight from '../assets/pieces/knight-b.svg';
import whiteKnight from '../assets/pieces/knight-w.svg';
import blackPawn from '../assets/pieces/pawn-b.svg';
import whitePawn from '../assets/pieces/pawn-w.svg';
import blackQueen from '../assets/pieces/queen-b.svg';
import whiteQueen from '../assets/pieces/queen-w.svg';
import blackRook from '../assets/pieces/rook-b.svg';
import whiteRook from '../assets/pieces/rook-w.svg';
import { PieceColorEnum } from '../enums/piece-color.enum';
import { PieceTypeEnum } from '../enums/piece-type.enum';
import { PieceType } from '../types/piece.type';

export const pieces: PieceType[] = [
  // black pieces
  {
    img: blackRook,
    index: 0,
    type: PieceTypeEnum.ROOK,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackKnight,
    index: 1,
    type: PieceTypeEnum.KNIGHT,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackBishop,
    index: 2,
    type: PieceTypeEnum.BISHOP,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackQueen,
    index: 3,
    type: PieceTypeEnum.QUEEN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackKing,
    index: 4,
    type: PieceTypeEnum.KING,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackBishop,
    index: 5,
    type: PieceTypeEnum.BISHOP,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackKnight,
    index: 6,
    type: PieceTypeEnum.KNIGHT,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackRook,
    index: 7,
    type: PieceTypeEnum.ROOK,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 8,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 9,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 10,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 11,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 12,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 13,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 14,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    img: blackPawn,
    index: 15,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.BLACK,
    isFirstMove: true,
  },
  {
    index: 16,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 17,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 18,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 19,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 20,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 21,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 22,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 23,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 42,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 25,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 26,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 27,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 28,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 29,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 30,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 31,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 32,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 33,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 34,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 35,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 36,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 37,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 38,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 39,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 40,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 41,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 42,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 43,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 44,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 45,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 46,
    type: PieceTypeEnum.EMPTY,
  },
  {
    index: 47,
    type: PieceTypeEnum.EMPTY,
  },

  // white pieces
  {
    img: whitePawn,
    index: 48,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 49,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 50,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 51,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 52,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 53,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 54,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whitePawn,
    index: 55,
    type: PieceTypeEnum.PAWN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteRook,
    index: 56,
    type: PieceTypeEnum.ROOK,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteKnight,
    index: 57,
    type: PieceTypeEnum.KNIGHT,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteBishop,
    index: 58,
    type: PieceTypeEnum.BISHOP,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteQueen,
    index: 59,
    type: PieceTypeEnum.QUEEN,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteKing,
    index: 60,
    type: PieceTypeEnum.KING,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteBishop,
    index: 61,
    type: PieceTypeEnum.BISHOP,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteKnight,
    index: 62,
    type: PieceTypeEnum.KNIGHT,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
  {
    img: whiteRook,
    index: 63,
    type: PieceTypeEnum.ROOK,
    captured: false,
    color: PieceColorEnum.WHITE,
    isFirstMove: true,
  },
];
