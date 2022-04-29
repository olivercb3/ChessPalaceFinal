"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = void 0;
const colyseus_1 = require("colyseus");
const MyRoomState_1 = require("./schema/MyRoomState");
class MyRoom extends colyseus_1.Room {
    onCreate(options) {
        this.setState(new MyRoomState_1.MyRoomState());
        console.log("room was created");
        this.onMessage('moverFicha', (client, message) => {
            //this.state.pieces[message.id].position = message.movement
            console.log(message.pie.color);
            this.broadcast("flashMovement", { piece: message.piece, movement: message.movement });
            //this.send(client, "flashColor", {color: message.color})
            console.log('movement executed', message.movement);
        });
    }
    onJoin(client, options) {
        console.log(client.sessionId, "joined!");
    }
    onLeave(client, consented) {
        console.log(client.sessionId, "left!");
    }
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }
}
exports.MyRoom = MyRoom;
