"use strict";
class World {
    constructor(player) {
        this.Player = player;
        this.RootRoom = new Room("init room");
        this.Rooms = [];
        this.Player.ChangeRoom(this.RootRoom);
    }
}
