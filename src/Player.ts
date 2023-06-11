class Player{
    Room: Room;
    IsAdmin;
    Inventory;

    constructor(){
        this.IsAdmin = true;
        this.Inventory = new ItemContainer();
        this.Room = new Room("Empty room");
    }

    ChangeRoom(room: Room){
        if(room){
            this.Room = room;
        }
    }

    PickItem(item: Item){
        this.Inventory.Add(item);
    }
    DropItem(item: Item, amount = 1){
        return this.Inventory.Remove(item, amount);
    }
    DropItemByName(name: string, amount = 1){
        return this.Inventory.RemoveByName(name, amount);
    }
}