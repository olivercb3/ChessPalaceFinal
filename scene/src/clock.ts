import {squareMap, chessColor, PieceType, resizeFactor, ISquare, getSquareColor} from './utils'

export class Clock{
    clock: UIText  
    timer: number

    constructor(color:string, timer:number, canvas:UICanvas){
        this.timer = timer
        this.clock = new UIText(canvas)
        this.clock.value = timer.toString()
        this.clock.fontSize = 25
        if(color == "white"){
            this.clock.positionX = squareMap['h1'].xPosition + 10
            this.clock.positionY = squareMap['h1'].yPosition - 45
        }
        else{
            this.clock.positionX = squareMap['h8'].xPosition + 10
            this.clock.positionY = squareMap['h8'].yPosition + 62
        }
        this.updateTimer()
    }

    updateTimer(){
        let minutes:string = Math.floor(this.timer/60).toString()
        let seconds:string = (Math.round(this.timer%60)).toString()
        if (seconds.length == 1){
            seconds = "0" + seconds
        }
        this.clock.value = minutes+":"+seconds
    }
}