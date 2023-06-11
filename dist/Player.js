"use strict";
class Player {
    constructor() {
        this.IsAdmin = true;
        this.Inventory = new ItemContainer();
        this.Room = new Room("Empty room");
    }
    ChangeRoom(room) {
        if (room) {
            this.Room = room;
        }
    }
    PickItem(item) {
        this.Inventory.Add(item);
    }
    DropItem(item, amount = 1) {
        return this.Inventory.Remove(item, amount);
    }
    DropItemByName(name, amount = 1) {
        return this.Inventory.RemoveByName(name, amount);
    }
}
