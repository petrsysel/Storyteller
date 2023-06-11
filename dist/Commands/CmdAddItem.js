"use strict";
class CmdAddItem extends Command {
    InitCommand() {
        this.Keywords.push('additem');
        this.Keywords.push('pridejpredmet');
    }
    Execute(args) {
        if (args[0] == null) {
            this.Output.Print("Zadej název předmětu");
        }
        let name = args[0];
        let description = args[1] != null ? args[1] : "";
        let amountMaybe = args[2] != null ? args[2] : "1";
        let amount = Number.parseInt(amountMaybe);
        if (amount == null)
            amount = 1;
        let newItem = new Item(name, description, amount);
        this.World.Player.Room.AddItem(newItem);
        this.Output.Print(`Předmět "${newItem.GetName()}" byl přidán.`);
    }
    Help() {
        return `Přidá do hry nový předmět
        Příklad: additem \"Šroubovák\" \"Křížový šroubovák s červenou rukojetí\"
        Vytvoří předmět Šroubovák s odpovídajícím popisem a uloží jej na aktuální lokaci
        Lze specifikovat množství:
        Příklad: additem Mince "Mince trojúhelníkového tvaru" 23`;
    }
}
