class World{
    RootRoom;
    Player;
    Rooms: Room[];

    constructor(player: Player){
        this.Player = player;
        this.RootRoom = new Room("init room");
        this.Rooms = [];
        this.Player.ChangeRoom(this.RootRoom);
    }
}