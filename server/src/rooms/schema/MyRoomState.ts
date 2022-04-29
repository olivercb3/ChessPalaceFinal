import { Schema, Context, type } from "@colyseus/schema";
import { Room } from 'colyseus'

export enum game_turn {
  WHITE,
  BLACK,
  BLOCKED,
  NO_PLAYERS,
  NO_BLACK
}

class  Player extends Schema {
  @type("string") id: string;
  @type("string") color: string;
  @type("number") time: string;
}


class Partida extends Schema {

  @type("string") fen: string
  @type("string") resultado: string
  
  constructor(room: Room, fen:string){
    super()
    this.fen = fen
    this.resultado = "O-O"
  }
}


export class MyRoomState extends Schema {
  @type('number') game_state: game_turn
  @type(Player) white_player = new Player()
  @type(Player) black_player = new Player()
  @type(Partida) partida: Partida //se inicializa dentro de la subclase cuando ya se ha creado la habitación

  constructor(){
    super()
    this.game_state = game_turn.NO_PLAYERS;
  }
}



/*
Player:
- wallet
- color
- tiempo

Partida: 
- fen
- Resultado {1-0, 0-1, 1/2-1/2, indefinido}

MyRoomState:
- game_state (enum dictating the state at a certain time) BLOCKED
- white_player (player)
- black_player (player)
- Instancia de Partida

*/