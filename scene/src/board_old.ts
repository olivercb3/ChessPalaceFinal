
    // setPieces(){
    //     //set pawns
    //     let ascii_code = 'a'.charCodeAt(0) 
    //     for (let i = 0; i < 8; i++){
    //         let white_square:string = String.fromCharCode(ascii_code)+'2'
    //         let black_square:string = String.fromCharCode(ascii_code)+'7'
    //         let white_pawn:Piece = new Piece(PieceColor.WHITE, PieceType.PAWN, white_square, this.canvas)
    //         let black_pawn:Piece = new Piece(PieceColor.BLACK, PieceType.PAWN, black_square, this.canvas)
    //         ascii_code++;
    //         this.white_pieces.push(white_pawn)
    //         this.black_pieces.push(black_pawn)
    //     }
    // }


// export const canvasContainer = new UIContainerStack(canvas) //declare parent element
// canvasContainer.adaptWidth = true
// canvasContainer.width = "70%"
// canvasContainer.height = "100%"
// canvasContainer.opacity = 1
// canvasContainer.color = Color4.Gray() //set background-color
// canvasContainer.visible = false


// //sets all the canvas elements visibility to type's value
// const board: { [key: string]: UIImage } = {};
// let boardBuilt: boolean = false
// let square:string = 'a1' 
// let count:number = 0 //keeps track on whether the square should be black or white
// while (!boardBuilt){
//     board[square] = count%2==0 ? new UIImage(canvas, new Texture("images/chessboard/black-square.png")) : new UIImage(canvas, new Texture("images/chessboard/white-square.png"))
//     board[square].positionX = squareMap[square].xPosition
//     board[square].positionY = squareMap[square].yPosition
//     board[square].height = 64/resizeFactor
//     board[square].width = 64/resizeFactor
//     board[square].visible = false 

//     if (square.charAt(0) != 'h')
//         square = square.replace(square.charAt(0), String.fromCharCode(square.charCodeAt(0)+1));
    
//     else{
//         square = square.replace(square.charAt(0), 'a');
//         count--
//         if (square.charAt(1) == '8')
//             boardBuilt = true
//         else  
//             square = square.replace(square.charAt(1), String.fromCharCode(square.charCodeAt(1)+1));
//     }
//     count++
// }

// const closeButton:UIImage = new UIImage(canvas, new Texture("images/chessboard/close-button.png"))
// closeButton.visible = false
// closeButton.width = 32
// closeButton.height = 32
// closeButton.sourceLeft = 0
// closeButton.sourceTop = 0
// closeButton.sourceWidth = 860
// closeButton.sourceHeight = 896
// closeButton.hAlign="right"
// closeButton.vAlign="top"
// closeButton.positionX="-240"
// closeButton.positionY=squareMap['e1'].yPosition
// closeButton.positionX=squareMap['e2'].xPosition

// let ascii_code = 'a'.charCodeAt(0) 
// for (let i = 0; i < 8; i++){
//     const whitePawn = new UIImage(canvas, new Texture("images/chessboard/white-pawn.png"))
//     whitePawn.visible = false
//     whitePawn.width = 32
//     whitePawn.height = 48
//     whitePawn.sourceLeft = 0
//     whitePawn.sourceTop = 0
//     whitePawn.sourceWidth = 60
//     whitePawn.sourceHeight = 78
//     whitePawn.positionY=squareMap[String.fromCharCode(ascii_code)+'2'].yPosition
//     whitePawn.positionX=squareMap[String.fromCharCode(ascii_code)+'2'].xPosition
//     ascii_code++;
//     whitePieces.push(whitePawn)
// }


// ascii_code = 'a'.charCodeAt(0) 
// for (let i = 0; i < 8; i++){
//     const blackPawn = new UIImage(canvas, new Texture("images/chessboard/black-pawn.png"))
//     blackPawn.visible = false
//     blackPawn.width = 32
//     blackPawn.height = 48
//     blackPawn.sourceLeft = 0
//     blackPawn.sourceTop = 0
//     blackPawn.sourceWidth = 60
//     blackPawn.sourceHeight = 78
//     blackPawn.positionY=squareMap[String.fromCharCode(ascii_code)+'7'].yPosition
//     blackPawn.positionX=squareMap[String.fromCharCode(ascii_code)+'7'].xPosition
//     ascii_code++;
//     blackPieces.push(blackPawn)
// }


// for (let i = 0; i < 2; i++){
//     const blackKnight = new UIImage(canvas, new Texture("images/chessboard/black-knight.png"))
//     blackKnight.visible = false
//     blackKnight.width = 48
//     blackKnight.height = 48
//     blackKnight.sourceLeft = 0
//     blackKnight.sourceTop = 0
//     blackKnight.sourceWidth = 82
//     blackKnight.sourceHeight = 83
//     if(i==0){
//         blackKnight.positionY=squareMap['b8'].yPosition
//         blackKnight.positionX=squareMap['b8'].xPosition
//     }
//     else{
//         blackKnight.positionY=squareMap['g8'].yPosition
//         blackKnight.positionX=squareMap['g8'].xPosition
//     }
//     blackPieces.push(blackKnight)
// }


// for (let i = 0; i < 2; i++){
//     const whiteBishop = new UIImage(canvas, new Texture("images/chessboard/white-bishop.png"))
//     whiteBishop.visible = false
//     whiteBishop.width = 48
//     whiteBishop.height = 48
//     whiteBishop.sourceLeft = 0
//     whiteBishop.sourceTop = 0
//     whiteBishop.sourceWidth = 82
//     whiteBishop.sourceHeight = 82
//     if(i==0){
//         whiteBishop.positionY=squareMap['c1'].yPosition
//         whiteBishop.positionX=squareMap['c1'].xPosition
//     }
//     else{
//         whiteBishop.positionY=squareMap['f1'].yPosition
//         whiteBishop.positionX=squareMap['f1'].xPosition
//     }
//     whitePieces.push(whiteBishop)
// }


// for (let i = 0; i < 2; i++){
//     const blackBishop = new UIImage(canvas, new Texture("images/chessboard/black-bishop.png"))
//     blackBishop.visible = false
//     blackBishop.width = 48
//     blackBishop.height = 48
//     blackBishop.sourceLeft = 0
//     blackBishop.sourceTop = 0
//     blackBishop.sourceWidth = 82
//     blackBishop.sourceHeight = 82
//     if(i==0){
//         blackBishop.positionY=squareMap['c8'].yPosition
//         blackBishop.positionX=squareMap['c8'].xPosition
//     }
//     else{
//         blackBishop.positionY=squareMap['f8'].yPosition
//         blackBishop.positionX=squareMap['f8'].xPosition
//     }
//     blackPieces.push(blackBishop)
// }

// for (let i = 0; i < 2; i++){
//     const whiteKnight = new UIImage(canvas, new Texture("images/chessboard/white-knight.png"))
//     whiteKnight.visible = false
//     whiteKnight.width = 48
//     whiteKnight.height = 48
//     whiteKnight.sourceLeft = 0
//     whiteKnight.sourceTop = 0
//     whiteKnight.sourceWidth = 82
//     whiteKnight.sourceHeight = 82
//     if(i==0){
//         whiteKnight.positionY=squareMap['b1'].yPosition
//         whiteKnight.positionX=squareMap['b1'].xPosition
//     }
//     else{
//         whiteKnight.positionY=squareMap['g1'].yPosition
//         whiteKnight.positionX=squareMap['g1'].xPosition
//     }
//     whitePieces.push(whiteKnight)
// }

// for (let i = 0; i < 2; i++){
//     const whiteRook = new UIImage(canvas, new Texture("images/chessboard/white-rook.png"))
//     whiteRook.visible = false
//     whiteRook.width = 42
//     whiteRook.height = 48
//     whiteRook.sourceLeft = 0
//     whiteRook.sourceTop = 0
//     whiteRook.sourceWidth = 69
//     whiteRook.sourceHeight = 78
//     if (i==0){
//         whiteRook.positionY=squareMap['a1'].yPosition
//         whiteRook.positionX=squareMap['a1'].xPosition
//     }
//     else{
//         whiteRook.positionY=squareMap['h1'].yPosition
//         whiteRook.positionX=squareMap['h1'].xPosition
//     }
//     whitePieces.push(whiteRook)
// }

// for (let i = 0; i < 2; i++){
//     const blackRook = new UIImage(canvas, new Texture("images/chessboard/black-rook.png"))
//     blackRook.visible = false
//     blackRook.width = 42
//     blackRook.height = 48
//     blackRook.sourceLeft = 0
//     blackRook.sourceTop = 0
//     blackRook.sourceWidth = 70
//     blackRook.sourceHeight = 77
//     if (i==0){
//         blackRook.positionY=squareMap['a8'].yPosition
//         blackRook.positionX=squareMap['a8'].xPosition
//     }
//     else{
//         blackRook.positionY=squareMap['h8'].yPosition
//         blackRook.positionX=squareMap['h8'].xPosition
//     }
//     blackPieces.push(blackRook)
// }

// const whiteQueen:UIImage = new UIImage(canvas, new Texture("images/chessboard/white-queen.png"))
// whiteQueen.visible = false
// whiteQueen.width = 48
// whiteQueen.height = 48
// whiteQueen.sourceLeft = 0
// whiteQueen.sourceTop = 0
// whiteQueen.sourceWidth = 95
// whiteQueen.sourceHeight = 85
// whiteQueen.positionY=squareMap['d1'].yPosition
// whiteQueen.positionX=squareMap['d1'].xPosition
// whitePieces.push(whiteQueen)

// const blackQueen:UIImage = new UIImage(canvas, new Texture("images/chessboard/black-queen.png"))
// blackQueen.visible = false
// blackQueen.width = 48
// blackQueen.height = 48
// blackQueen.sourceLeft = 0
// blackQueen.sourceTop = 0
// blackQueen.sourceWidth = 94
// blackQueen.sourceHeight = 90
// blackQueen.positionY=squareMap['d8'].yPosition
// blackQueen.positionX=squareMap['d8'].xPosition
// blackPieces.push(blackQueen)



// const whiteKing:UIImage = new UIImage(canvas, new Texture("images/chessboard/white-king.png"))
// whiteKing.visible = false
// whiteKing.width = 48
// whiteKing.height = 48
// whiteKing.sourceLeft = 0
// whiteKing.sourceTop = 0
// whiteKing.sourceWidth = 87
// whiteKing.sourceHeight = 85
// whiteKing.positionY=squareMap['e1'].yPosition
// whiteKing.positionX=squareMap['e1'].xPosition
// whitePieces.push(whiteKing)

// const blackKing:UIImage = new UIImage(canvas, new Texture("images/chessboard/black-king.png"))
// blackKing.visible = false
// blackKing.width = 48
// blackKing.height = 48
// blackKing.sourceLeft = 0
// blackKing.sourceTop = 0
// blackKing.sourceWidth = 88
// blackKing.sourceHeight = 87
// blackKing.positionY=squareMap['e8'].yPosition
// blackKing.positionX=squareMap['e8'].xPosition
// blackPieces.push(blackKing)

// for(let i=0; i<whitePieces.length;i++){
//     whitePieces[i].width = parseFloat(whitePieces[i].width.replace('px','')) / resizeFactor
//     blackPieces[i].width = parseFloat(blackPieces[i].width.replace('px','')) / resizeFactor
// }
