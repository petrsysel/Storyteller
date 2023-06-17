"use strict";
class CmdAddItem extends Command {
    InitCommand() {
        this.Keywords.push('additem');
        this.Keywords.push('pridejpredmet');
        this.AddRequiredArgument(ArgumentType.string, "name", "název", "Název přidávaného předmětu", "Musíš zadat název předmětu, který chceš přidat");
        this.AddRequiredArgument(ArgumentType.string, "description", "popis", "Popis přidávaného předmětu", "Musíš zadat popis předmětu, který chceš přidat");
        this.AddUnrequiredArgument(ArgumentType.number, "amount", "množství", "Množství v jakém bude předmět přidán", 1);
    }
    Execution(args) {
        let name = args.GetArg('name');
        let description = args.GetArg('description');
        let amount = args.GetArg('amount');
        console.log(args.GetArg('amount'));
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
