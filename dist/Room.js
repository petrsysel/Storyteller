"use strict";
class Room {
    constructor(name) {
        this.Name = name;
        this.Items = new ItemContainer();
        this.Neighboars = [];
        this.Description = "A room";
    }
    AddItem(item) {
        this.Items.Add(item);
    }
    RemoveItem(item, amount = 1) {
        return this.Items.Remove(item, amount);
    }
    RemoveItemByName(name, amount = 1) {
        return this.Items.RemoveByName(name, amount);
    }
    GetDescription() {
        return this.Description;
    }
    GetName() {
        return this.Name;
    }
    SetName(name) {
        this.Name = name;
    }
    AddNeighbor(neighboar) {
        this.Neighboars.push(neighboar);
    }
    RemoveNeighboar(neighboar) {
        if (this.Neighboars.includes(neighboar)) {
            this.Neighboars.splice(this.Neighboars.indexOf(neighboar), 1);
        }
    }
}
