import {Annotation} from './annotation'
import {chessColor} from './utils'

export class Annotations{
    annotations: Annotation[]
    move_counter: number
    canvas: UICanvas

    constructor(canvas: UICanvas){
        this.annotations = []
        this.move_counter = 0;
        this.canvas = canvas
    }

    addMove(movement: string, color: chessColor, fen: string){
        if(color == "white"){
            let annotation = new Annotation(Math.floor((this.move_counter/2)+1), this.canvas, fen)
            annotation.setMovement(color, movement)
            this.annotations.push(annotation)
        }
        else    
            this.annotations[this.annotations.length - 1].setMovement(color, movement)
            
        this.move_counter++
    }

    getMoves(){
        let movements:string[] = []
        this.annotations.forEach(annotation => {
            annotation.getMovement().forEach(movement => {
                movements.push(movement)
            })
        })
        return movements
    }
}