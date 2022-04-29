import { Room, Client } from "colyseus";
import { game_turn, MyRoomState } from "./schema/MyRoomState";

//let cleint

export class MyRoom extends Room<MyRoomState> {

  onCreate (options: any) {
    this.setState(new MyRoomState());
    console.log("room was created")
    
    this.onMessage('moverFicha', (client, message) => {
      
      //this.state.pieces[message.id].position = message.movement
      //console.log(message.pie.color)
      //inicialmente hacer una comprobación de si el moviemiento es correcto
      console.log(message.original_position)
      this.broadcast("flashMovement", {movement: message.move, original_position: message.original_position}, { except: client })
      //if(this.state.white_player.id == client.sessionId) this.broadcast("flashWhiteTurn", { except: client })
      this.broadcast("YourTurn", { except: client })
      //this.send(client, "flashColor", {color: message.color})
      if (this.state.game_state == game_turn.BLACK) this.state.game_state = game_turn.WHITE
      else if (this.state.game_state == game_turn.WHITE) this.state.game_state = game_turn.BLACK
      console.log('movement executed', message.move)
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");

    if(this.state.game_state == game_turn.NO_PLAYERS) {
      this.state.white_player.id = client.sessionId
      this.state.white_player.color = "WHITE"
      this.state.game_state = game_turn.NO_BLACK
      //cleint = client
    }
    else if(this.state.game_state == game_turn.NO_BLACK) { 
      this.state.black_player.id = client.sessionId
      this.state.black_player.color = "BLACK"
      this.state.game_state = game_turn.WHITE
      this.broadcast("YourTurn", { except: client })
    }
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}



//cuando un jugador manda un moviemiento el servidor tiene que detectar si este es correcto, en este caso lanzar el mensaje movement executed y cambiar el estado del tirador.