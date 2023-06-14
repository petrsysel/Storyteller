"use strict";
class CmdAddItem extends Command {
    InitCommand() {
        this.Keywords.push('additem');
        this.Keywords.push('pridejpredmet');
    }
    Execute(args) {
        if (!args.IsSpecified(0)) {
            this.Output.Print("Zadej název předmětu");
            return;
        }
        let name = args.GetValue(0, "");
        let description = args.GetValue(1, "Chybí popis");
        let amount = args.GetValue(2, 1);
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
