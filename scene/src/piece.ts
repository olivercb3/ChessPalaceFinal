//considering a 512*512 board
import {squareMap, chessColor, PieceType, resizeFactor, ISquare, getSquareColor} from './utils'
// import * as Utils from './utils'

let piecesSize = {
    "pawn": {"height": 48/resizeFactor, "width": 32/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 60, "source-height":78},
    "knight": {"height": 48/resizeFactor, "width": 48/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 82, "source-height":83},
    "bishop": {"height": 48/resizeFactor, "width": 48/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 82, "source-height":82},
    "rook": {"height": 48/resizeFactor, "width": 42/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 69.5, "source-height":78.5},
    "queen": {"height": 48/resizeFactor, "width": 48/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 95, "source-height":85},
    "king": {"height": 48/resizeFactor, "width": 48/resizeFactor, "source-left": 0 , "source-top": 0, "source-width": 87.5, "source-height":86.2}
}

export class Piece{
    color: chessColor
    position: string
    piece: PieceType
    canvas: UICanvas
    image: UIImage

    constructor(_color:chessColor,_piece: PieceType,  _position:string, _canvas:UICanvas){
        this.color = _color
        this.position = _position
        this.piece  =_piece
        this.canvas = _canvas
        // this.height = 
        // this.width = 
        this.image = this.generate2UI()
        this.set2UIProperties()
    }   

    generate2UI():UIImage{
        let path:string = "images/chessboard/" + this.color + "-" + this.piece + ".png"
        let image:UIImage = new UIImage(this.canvas, new Texture(path))
        return image;
    }


    set2UIProperties(){
        this.image.visible = true
        this.image.width = piecesSize[this.piece]["width"]
        this.image.height = piecesSize[this.piece]["height"]
        this.image.sourceLeft = piecesSize[this.piece]["source-left"]
        this.image.sourceTop = piecesSize[this.piece]["source-top"]
        this.image.sourceWidth = piecesSize[this.piece]["source-width"]
        this.image.sourceHeight = piecesSize[this.piece]["source-height"]
        this.image.positionY=squareMap[this.position].yPosition
        this.image.positionX=squareMap[this.position].xPosition
    }

    public getColor():chessColor{
        return this.color;
    }

    public getPosition(): string{
        return this.position
    }

    public getPiece(): PieceType{
        return this.piece
    }

    public setVisibility(mode:boolean):void {
        this.image.visible = mode
    }

    //pre: The validity of the move has been checked
    public movePiece(square: string){
        // this.image.positionX = squareMap[square].xPosition
        // this.image.positionY = squareMap[square].yPosition
        // this.image = new UIImage(this.canvas,  Texture ())
        // this.position = squarez
        this.setVisibility(false)
        this.constructor(this.color, this.piece, square, this.canvas)
    }
}