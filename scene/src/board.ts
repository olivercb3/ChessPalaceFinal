import {Piece}from './piece'
import {Square}from './square'
import {Annotations} from  './annotations'
import { Chess } from '../node_modules/chess.ts/src/chess'
import {squareMap, chessColor, PieceType, resizeFactor, ISquare, getSquareColor} from './utils'
import { Client, Room } from 'colyseus.js'

export class Board{
    canvas_container: UIContainerStack
    canvas: UICanvas
    squares: { [key: string]: Square } //Square[]
    white_pieces:Piece[] = []
    black_pieces:Piece[] = []
    chessgame: Chess  
    annotations_container:UIContainerStack
    annotations: Annotations      
    possibleMovesImages:{ [key: string]: Square } = {}
    room:Room
    turn: boolean

    constructor(room: Room){
        this.chessgame = new Chess()
        this.canvas = new UICanvas()
        this.canvas_container = new UIContainerStack(this.canvas) //declare parent element
        this.annotations_container = new UIContainerStack(this.canvas)
        this.configureContainer("canvas")
        this.configureContainer("annotations")
        this.annotations = new Annotations(this.annotations_container)
        this.squares = this.generateBoard()
        this.white_pieces = this.generatePieces(chessColor.WHITE)
        this.black_pieces = this.generatePieces(chessColor.BLACK)
        this.setAllVisible()
        this.room = room
        this.turn = false

        // this.annotations_container.
    }

    //supports modes "canvas" and "annotations"
    configureContainer(container_name:string){
        if (container_name == "canvas"){
            this.canvas_container.adaptWidth = true
            this.canvas_container.width = "70%"
            this.canvas_container.height = "100%"
            this.canvas_container.opacity = 1
            this.canvas_container.color = Color4.Gray() //set background-color
            this.canvas_container.visible = false
        }

        else if(container_name == "annotations"){
            this.annotations_container.adaptWidth = true
            this.annotations_container.width = "25%"
            this.annotations_container.height = "90%"
            this.annotations_container.opacity = 1
            this.annotations_container.color = Color4.White() //set background-color
            this.annotations_container.visible = true
            this.annotations_container.positionX = squareMap['h4'].xPosition + 260
            this.annotations_container.positionY = squareMap['h4'].yPosition + 30
            this.annotations_container.adaptWidth= false 
            this.annotations_container.adaptHeight =false //-> TODO: make it scrollable
        }
    }

    // generateBoardFromFen(fen:string){
    //     this.chessgame.load(fen)
    //     let rows = fen.split("/", 8)
    //     rows.forEach((row, index) => {
            
    //     })
    // }

    //fills this.squares with Square objects
    generateBoard(){
        const board: { [key: string]: Square } = {};
        let square:string = 'a1' 
        let board_built: boolean = false
        let counter_x:number = 1, counter_y:number = 1
        while (!board_built){
            square = String.fromCharCode(96 + counter_x) + String.fromCharCode(48 + counter_y);
            board[square] = new Square (square, this.canvas)
            if(counter_x == 8 && counter_y == 8){
                board_built = true
            } 
            else if(counter_y == 8){
                counter_y = 1;
                counter_x++;
            }
            else counter_y++;
        }

        return board
    }

    //fils this.white_pieces & this.black_pieces with Pieces objects
    generatePieces(color: chessColor): Piece[]{
        let pieces: Piece[] = [] 

        //PAWNS
        for (let i:number=97; i<=104; i++){ //ascii a-h
            let column:string = String.fromCharCode(i), row:string = (color == chessColor.WHITE) ? '2' : '7'
            let square:string = column + row
            let pawn:Piece = new Piece(color, PieceType.PAWN, square , this.canvas)
            pawn.image.onClick = new OnPointerDown(()=> {
                if(!this.chessgame.gameOver())
                    this.displayPosibilities(pawn)
            })
            
            pieces.push(pawn)
        } 

        //KNIGHT
        for(let i:number=98; i<=103; i=i+5){
            let column:string = String.fromCharCode(i), row:string = (color == chessColor.WHITE) ? '1' : '8'
            let square:string = column + row
            let knight:Piece = new Piece(color, PieceType.KNIGHT, square , this.canvas)
            knight.image.onClick = new OnPointerDown(()=> {
                if(!this.chessgame.gameOver())
                    this.displayPosibilities(knight)
            })
            pieces.push(knight)
        }

        //BISHOPS
        for(let i:number=99; i<=102; i=i+3){
            let column:string = String.fromCharCode(i), row:string = (color == chessColor.WHITE) ? '1' : '8'
            let square:string = column + row
            let bishop:Piece = new Piece(color, PieceType.BISHOP, square , this.canvas)
            bishop.image.onClick = new OnPointerDown(()=> {
                if(!this.chessgame.gameOver())
                    this.displayPosibilities(bishop)
            })
            pieces.push(bishop)
        }

        //ROOK
        for(let i:number=97; i<=104; i=i+7){
            let column:string = String.fromCharCode(i), row:string = (color == chessColor.WHITE) ? '1' : '8'
            let square:string = column + row
            let rook:Piece = new Piece(color, PieceType.ROOK, square , this.canvas)
            rook.image.onClick = new OnPointerDown(()=> {
                if(!this.chessgame.gameOver())
                    this.displayPosibilities(rook)
            })
            pieces.push(rook)
        }

        //QUEEN
        let square:string = (color == chessColor.WHITE) ? 'd1' : 'd8'
        let queen:Piece = new Piece(color, PieceType.QUEEN, square , this.canvas)
        queen.image.onClick = new OnPointerDown(()=> {
            if(!this.chessgame.gameOver())
                this.displayPosibilities(queen)
        })
        pieces.push(queen)

        //KING
        square = (color == chessColor.WHITE) ? 'e1' : 'e8'
        let king:Piece = new Piece(color, PieceType.KING, square , this.canvas)
        king.image.onClick = new OnPointerDown(()=> {
            if(!this.chessgame.gameOver())
                this.displayPosibilities(king)
        })
        pieces.push(king)

        return pieces
        
    }


    //sets all elements visible
    setAllVisible(){
        this.canvas_container.visible = true
        this.canvas.visible = true
        this.white_pieces.forEach((white_piece, index) => {
            white_piece.setVisibility(true)
        })

        this.black_pieces.forEach((black_piece, index) => {
            black_piece.setVisibility(true)
        })
    }

    //moves a piece to a square
    movePiece(piece: Piece, movement: string){
        if(this.turn == true) {
            this.chessgame.move(movement) //make move in chessgame
            this.resetPossibleMoves()
            log("dos cops?")
            let color:string = piece.getColor() 
            log("aqui no arriba sas")
            if(movement == "O-O"){
                piece.movePiece(color=="white" ? 'g1' : 'g8')
                let rook:Piece = this.getPiece(color=='white' ? 'h1' : 'h8')
                rook.movePiece(color=="white" ? 'f1' : 'f8')
                rook.image.onClick = piece.image.onClick = new OnPointerDown(()=> {
                    this.displayPosibilities(rook)
                })        
            }  

            else if(movement == "O-O-O"){
                piece.movePiece(color=="white" ? 'c1' : 'c8')
                let rook:Piece = this.getPiece(color=='white' ? 'a1' : 'a8')
                rook.movePiece(color=="white" ? 'd1' : 'd8')
                rook.image.onClick = piece.image.onClick = new OnPointerDown(()=> {
                    this.displayPosibilities(rook)
                })
            }  
            //Normal move
            else
                piece.movePiece(movement.substr(movement.length-2)) 
            
            piece.image.onClick = piece.image.onClick =new OnPointerDown(()=> {
                this.displayPosibilities(piece)
            }); 

            //this.room.send("moverFicha", {move: movement, pie: piece})
            this.annotations.addMove(movement, piece.getColor(), this.chessgame.fen())
            this.turn = false //poso el torn un altre cop a fals fins que la senyal em digui el contrari
        }
    }

    //gets piece on a square
    getPiece(position:string):Piece{
        // let piece: Piece = new Piece(chessColor.WHITE, PieceType.PAWN, "a1", this.canvas)
        for(let i:number = 0; i < this.white_pieces.length; i++){
            if(this.white_pieces[i].position == position){
                return this.white_pieces[i]
            }
        }
        for(let i:number = 0; i < this.black_pieces.length; i++){
            if(this.black_pieces[i].position == position){
                return this.black_pieces[i]
            }
        }        

        let piece: Piece = new Piece(chessColor.WHITE, PieceType.PAWN, "a1", this.canvas)
        piece.setVisibility(false)
        return piece;
    }  

    //sets board attribute possibleMovesImages with a list of Square variables. Each one of these variables points to a square 
    //on the board whose image will have changed to a selector image
    displayPosibilities(piece: Piece){
        this.resetPossibleMoves()
        this.resetPieceEvents()
        let square:string = piece.position                          //piece position
        let moves:string[] = this.chessgame.moves({square: square}) //possible moves for piece
        // piece.setPossibleMoves(moves) 
        moves.forEach((move) =>{
            move = move.replace('#','')
            move = move.replace('+','')
            log(move)
            //short castling
            if(move == "O-O"){
                let square_position:string = piece.getColor() == "white" ? 'g1' : 'g8'
                let square:Square = new Square(square_position, this.canvas, "images/chessboard/move-" + getSquareColor(square_position) + "-square.png")
                square.image.onClick = new OnPointerDown(()=> {
                    this.room.send("moverFicha", {move: "O-O", original_position: piece.position}) //cuando se realiza un movimiento se manda una señal a la room para que el servidor se lo haga saber a los demás jugadores
                    this.movePiece(piece, 'O-O')

                })
                this.possibleMovesImages[square_position] = this.squares[square_position]
            }
            //long castling
            else if(move == "O-O-O"){
                let square_position:string = piece.getColor() == "white" ? 'c1' : 'c8'
                let square:Square = new Square(square_position, this.canvas, "images/chessboard/move-" + getSquareColor(square_position) + "-square.png")
                square.image.onClick = new OnPointerDown(()=> {
                    this.room.send("moverFicha", {move: "O-O-O", original_position: piece.position}) //cuando se realiza un movimiento se manda una señal a la room para que el servidor se lo haga saber a los demás jugadores
                    
                    this.movePiece(piece, 'O-O-O')

                })
                this.possibleMovesImages[square_position] = this.squares[square_position]
            }
            //capture move
            else if (move.indexOf("x") !=  -1){
                let square_to_move:string = move.substr(move.length-2)
                let piece_on_square: Piece = this.getPiece(square_to_move) 
                if(piece_on_square.image.visible == true){                      // if there's a enemy piece on that square
                    piece_on_square.image.onClick = new OnPointerDown(()=> {    //create an event on the piece object
                        if(!this.chessgame.gameOver()){
                            piece_on_square.image.visible = false;
                            piece_on_square.getColor() == "white" ? this.white_pieces.splice(this.white_pieces.indexOf(piece_on_square), 1) : this.black_pieces.splice(this.black_pieces.indexOf(piece_on_square), 1)
                            this.room.send("moverFicha", {move: move, original_position: piece.position}) //cuando se realiza un movimiento se manda una señal a la room para que el servidor se lo haga saber a los demás jugadores
                            
                            this.movePiece(piece, move)

                        }
                    })
                }

                else if (piece.getPiece() == PieceType.PAWN){
                    let square_position:string = ""
                    if(piece.color == "white")
                        square_position = square_to_move[0] + String.fromCharCode(square_to_move.charCodeAt(1)-1)
                    
                    else
                        square_position = square_to_move[0] + String.fromCharCode(square_to_move.charCodeAt(1)+1)
                    
                    let pawn_to_take = this.getPiece(square_position)
                    if(this.getPiece(square_position).piece == "pawn" && pawn_to_take.image.visible && pawn_to_take.color != piece.color){   //comer al paso?
                        let square = new Square(move.substr(move.length-2), this.canvas, "images/chessboard/move-" + getSquareColor(move.substr(move.length-2)) + "-square.png")
                        square.image.onClick = new OnPointerDown(()=> { 
                            //create an event on the square object
                            if(!this.chessgame.gameOver()){
                                this.room.send("moverFicha", {move: move, original_position: piece.position}) //cuando se realiza un movimiento se manda una señal a la room para que el servidor se lo haga saber a los demás jugadores
                                
                                this.movePiece(piece, move)

                                pawn_to_take.image.visible = false;
                                pawn_to_take.getColor() == "white" ? this.white_pieces.splice(this.white_pieces.indexOf(pawn_to_take), 1) : this.black_pieces.splice(this.black_pieces.indexOf(pawn_to_take), 1)
                            }
                        })
                        this.squares[move.substr(move.length-2)] = square
                        this.possibleMovesImages[move.substr(move.length-2)] = this.squares[move.substr(move.length-2)]
                    }   
                }
            }

            //promotion
            // else if (move.indexOf("=") !=  -1){
            //     let square_to_move:string = move.substr(move.length-2)
            //     let piece_on_square: Piece = this.getPiece(square_to_move) 
            //     if(piece_on_square.image.visible == true){                      // if there's a enemy piece on that square
            //         piece_on_square.image.onClick = new OnPointerDown(()=> {    //create an event on the piece object
            //             piece_on_square.image.visible = false;
            //             piece_on_square.getColor() == "white" ? this.white_pieces.splice(this.white_pieces.indexOf(piece_on_square), 1) : this.black_pieces.splice(this.black_pieces.indexOf(piece_on_square), 1)
            //             this.movePiece(piece, move)
            //         })
            //     }
            // }

            else{
                let square = new Square(move.substr(move.length-2), this.canvas, "images/chessboard/move-" + getSquareColor(move.substr(move.length-2)) + "-square.png")
                square.image.onClick = new OnPointerDown(()=> {              //create an event on the square object
                    this.room.send("moverFicha", {move: move, original_position: piece.position}) //cuando se realiza un movimiento se manda una señal a la room para que el servidor se lo haga saber a los demás jugadores
                    
                    this.movePiece(piece, move)
                })
                this.squares[move.substr(move.length-2)] = square
                this.possibleMovesImages[move.substr(move.length-2)] = this.squares[move.substr(move.length-2)]
            }
        })    
    }

    //resets board attribute possibleMovesImages and sets all squares to their original image
    resetPossibleMoves(){
        Object.keys(this.possibleMovesImages).forEach((square) => {
            this.squares[square] = new Square(square, this.canvas)
        })
        this.possibleMovesImages = {}
    }

    //resets onPointerDown events on all pieces to displayPosibilities -- this default event may have changed when a piece was selected
    resetPieceEvents(){
        this.white_pieces.forEach((piece) => {
            piece.image.onClick = new OnPointerDown(()=> {
                this.displayPosibilities(piece)
            })
        })

        this.black_pieces.forEach((piece) => {
            piece.image.onClick = new OnPointerDown(()=> {
                this.displayPosibilities(piece)
            })
        })
    }
}

