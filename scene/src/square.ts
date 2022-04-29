// import {squareMap, chessColor, PieceType, ISquare, getSquareColor, resizeFactor} from './utils'
import {squareMap, chessColor, PieceType, resizeFactor, ISquare, getSquareColor} from './utils'
// import * as Utils from './utils'

export class Square{
    name: string //name of the square (a1,a2,a3, etc.)
    canvas: UICanvas 
    color: chessColor //color of the square
    position: ISquare //square position
    image: UIImage 
    path: string

    constructor(_name:string, _canvas: UICanvas, _path: string = "default"){
        this.name = _name
        this.position = squareMap[_name]
        this.color = getSquareColor(_name) 
        this.canvas = _canvas
        this.path = _path
        if(_path == "default")
            this.image = (this.color == chessColor.WHITE) ? new UIImage(_canvas, new Texture("images/chessboard/white-square.png")) : new UIImage(_canvas, new Texture("images/chessboard/black-square.png"))
        else
            this.image = new UIImage(_canvas, new Texture(_path))

        this.setImageProperties()
    }

    public getColor(): chessColor{
        return this.color
    }

    public getPosition(): ISquare{
        return this.position
    }

    public getImage(): UIImage{
        return this.image
    }

    // public modifyImage(path:string){
    //     this.image = new UIImage(this.canvas, new Texture(path))
    //     this.setImageProperties()
    // }

    setImageProperties(){
        this.image.positionX = this.position.xPosition
        this.image.positionY = this.position.yPosition
        this.image.sourceLeft = 0
        this.image.sourceTop = 0
        if(this.path != "default"){
            this.image.sourceWidth = 90
            this.image.sourceHeight = 90
        }
        this.image.height = 64/resizeFactor
        this.image.width = 64/resizeFactor
        this.image.visible = true 
    }

    //sets the square visible if mode == true
    public setVisibiliy(mode:boolean){
        this.image.visible = mode
    }
}