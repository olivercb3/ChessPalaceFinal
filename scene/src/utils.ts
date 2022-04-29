export const resizeFactor:number = 1
const xTranslation:number = -200.0
const yTranslation:number = 0.0

export const squareMap:{[squareName: string]: ISquare} = {
    "a1":{xPosition:-224 + xTranslation , yPosition:-224 + yTranslation}, "a2": {  xPosition:-224 + xTranslation , yPosition:-160 + yTranslation}, "a3":{  xPosition:-224 + xTranslation ,yPosition:-96 + yTranslation},  "a4":{  xPosition:-224 + xTranslation ,yPosition:-32 + yTranslation}, "a5":{  xPosition:-224 + xTranslation ,yPosition:32 + yTranslation}, "a6":{  xPosition:-224 + xTranslation ,yPosition:96 + yTranslation}, "a7":{  xPosition:-224 + xTranslation , yPosition:160 + yTranslation}, "a8":{  xPosition:-224 + xTranslation ,yPosition:224 + yTranslation},
    "b1":{xPosition:-160 + xTranslation , yPosition:-224 + yTranslation}, "b2": {  xPosition:-160 + xTranslation , yPosition:-160 + yTranslation}, "b3":{  xPosition:-160 + xTranslation ,yPosition:-96 + yTranslation},  "b4":{  xPosition:-160 + xTranslation ,yPosition:-32 + yTranslation}, "b5":{  xPosition:-160 + xTranslation ,yPosition:32 + yTranslation}, "b6":{  xPosition:-160 + xTranslation ,yPosition:96 + yTranslation}, "b7":{  xPosition:-160 + xTranslation , yPosition:160 + yTranslation}, "b8":{  xPosition:-160 + xTranslation ,yPosition:224 + yTranslation},
    "c1":{xPosition:-96 + xTranslation ,  yPosition:-224 + yTranslation},  "c2": { xPosition:-96 + xTranslation ,  yPosition:-160 + yTranslation},  "c3":{ xPosition:-96 + xTranslation , yPosition:-96 + yTranslation},   "c4":{ xPosition:-96 + xTranslation , yPosition:-32 + yTranslation},  "c5":{ xPosition:-96 + xTranslation , yPosition:32 + yTranslation},  "c6":{ xPosition:-96 + xTranslation , yPosition:96 + yTranslation},  "c7":{ xPosition:-96 + xTranslation ,  yPosition:160 + yTranslation},  "c8":{ xPosition:-96 + xTranslation , yPosition:224 + yTranslation},
    "d1":{xPosition:-32 + xTranslation ,  yPosition:-224 + yTranslation},  "d2": { xPosition:-32 + xTranslation ,  yPosition:-160 + yTranslation},  "d3":{ xPosition:-32 + xTranslation , yPosition:-96 + yTranslation},   "d4":{ xPosition:-32 + xTranslation , yPosition:-32 + yTranslation},  "d5":{ xPosition:-32 + xTranslation , yPosition:32 + yTranslation},  "d6":{ xPosition:-32 + xTranslation , yPosition:96 + yTranslation},  "d7":{ xPosition:-32 + xTranslation ,  yPosition:160 + yTranslation},  "d8":{ xPosition:-32 + xTranslation , yPosition:224 + yTranslation},
    "e1":{xPosition:32 + xTranslation ,   yPosition:-224 + yTranslation},   "e2": {xPosition:32 + xTranslation ,   yPosition:-160 + yTranslation},   "e3":{xPosition:32 + xTranslation ,  yPosition:-96 + yTranslation},    "e4":{xPosition:32 + xTranslation ,  yPosition:-32 + yTranslation},   "e5":{xPosition:32 + xTranslation ,  yPosition:32 + yTranslation},   "e6":{xPosition:32 + xTranslation ,  yPosition:96 + yTranslation},   "e7":{xPosition:32 + xTranslation ,   yPosition:160 + yTranslation},   "e8":{xPosition:32 + xTranslation ,  yPosition:224 + yTranslation},
    "f1":{xPosition:96 + xTranslation ,   yPosition:-224 + yTranslation},   "f2": {xPosition:96 + xTranslation ,   yPosition:-160 + yTranslation},   "f3":{xPosition:96 + xTranslation ,  yPosition:-96 + yTranslation},    "f4":{xPosition:96 + xTranslation ,  yPosition:-32 + yTranslation},   "f5":{xPosition:96 + xTranslation ,  yPosition:32 + yTranslation},   "f6":{xPosition:96 + xTranslation ,  yPosition:96 + yTranslation},   "f7":{xPosition:96 + xTranslation ,   yPosition:160 + yTranslation},   "f8":{xPosition:96 + xTranslation ,  yPosition:224 + yTranslation},
    "g1":{xPosition:160 + xTranslation ,  yPosition:-224 + yTranslation},  "g2": { xPosition:160 + xTranslation ,  yPosition:-160 + yTranslation},  "g3":{ xPosition:160 + xTranslation , yPosition:-96 + yTranslation},   "g4":{ xPosition:160 + xTranslation , yPosition:-32 + yTranslation},  "g5":{ xPosition:160 + xTranslation , yPosition:32 + yTranslation},  "g6":{ xPosition:160 + xTranslation , yPosition:96 + yTranslation},  "g7":{ xPosition:160 + xTranslation ,  yPosition:160 + yTranslation},  "g8":{ xPosition:160 + xTranslation , yPosition:224 + yTranslation},
    "h1":{xPosition:224 + xTranslation ,  yPosition:-224 + yTranslation},  "h2": { xPosition:224 + xTranslation ,  yPosition:-160 + yTranslation},  "h3":{ xPosition:224 + xTranslation , yPosition:-96 + yTranslation},   "h4":{ xPosition:224 + xTranslation , yPosition:-32 + yTranslation},  "h5":{ xPosition:224 + xTranslation , yPosition:32 + yTranslation},  "h6":{ xPosition:224 + xTranslation , yPosition:96 + yTranslation},  "h7":{ xPosition:224 + xTranslation ,  yPosition:160 + yTranslation},  "h8":{ xPosition:224 + xTranslation , yPosition:224 + yTranslation}
}


export function nextChar(c:string) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

export enum PieceType{
    PAWN = "pawn",
    KNIGHT = "knight",
    BISHOP = "bishop",
    ROOK = "rook",
    QUEEN = "queen",
    KING = "king"
}

export enum chessColor{
    WHITE = "white",
    BLACK = "black"
}

export interface ISquare{
    xPosition: number,
    yPosition: number,
}

//returns the color of a square -- getSquareColor('a1')
export function getSquareColor(square: string): chessColor{
    let column:string = square.charAt(square.length-2)
    let row:string = square.charAt(square.length-1)
    let a:number = 97 // 'a' ASCII code
    let color = chessColor.WHITE
    if (((column.charCodeAt(0)-a+1)+parseInt(row))%2 == 0)
        color = chessColor.BLACK;

    return color    
}