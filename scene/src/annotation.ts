import {chessColor} from './utils'

export class Annotation{
    move_number: number
    white_movement: string = ''
    black_movement: string = ''
    graphical_representation: UIText
    fen: string = "" //fen is a string representation of a chess position -- stored after move
    // color: chessColor

    // these objects are not visible by default!
    constructor(number: number, canvas: UICanvas, fen:string){
        this.move_number = number
        this.fen = fen
        this.graphical_representation = new UIText(canvas)
        // this.white_movement = movement
        // this.color = color

        // this.graphical_representation.value = this.movement
        // if(this.color == "white") this.graphical_representation.value = this.move_number + ". " + this.movement
        // this.graphical_representation.fontSize = 20
        // this.graphical_representation.color = Color4.Black()
        // this.graphical_representation.positionX = 50
        // // if(this.color == "black") this.graphical_representation.positionX = 250
        // this.graphical_representation.positionY = 0
        // this.graphical_representation.visible = true
    }

    getMovement(): string[]{
        return [this.white_movement, this.black_movement]
    }

    getMoveNumber(): number{
        return this.move_number
    }

    getObject(): UIText{
        return this.graphical_representation
    }

    getFen(): string{
        return this.fen
    }

    storeFen(fen:string){
        this.fen = fen
    }

    setMovement(color:chessColor, movement: string){
        if (color == "white" && !this.white_movement)
            this.white_movement = movement
        else if (!this.black_movement)
            this.black_movement = movement 
        this.updateUI()       
    }

    updateUI(){
        this.graphical_representation.fontSize = 15
        this.graphical_representation.color = Color4.Black()
        let space:string;
        this.graphical_representation.value = this.getMoveNumber() + ". " + this.white_movement + Array(15-(this.white_movement.length)*2).join(" ") + this.black_movement

        log(this.graphical_representation.value)

        this.graphical_representation.positionX = 50
        this.graphical_representation.positionY = 0
        this.graphical_representation.width = 150
        this.graphical_representation.height = 25
        this.graphical_representation.visible = true
    }

}