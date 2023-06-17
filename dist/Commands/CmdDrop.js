"use strict";
class CmdDrop extends Command {
    InitCommand() {
        this.AddKeyword("drop");
        this.AddKeyword("polož");
        this.AddKeyword("zahoď");
        this.AddRequiredArgument(ArgumentType.string, "name", "název", "Název předmětu, který chceš položit", "Musíš specifikovat, který předmět chceš položit");
        this.AddUnrequiredArgument(ArgumentType.number, "amount", "množství", "Kolik kusů od daného předmětu chceš položit", 1);
        this.AddUnrequiredArgument(ArgumentType.string, "destination", "místo", "Úložný prostor kam chceš předmět položit (musí být otevřený)", "room");
    }
    Help() {
        return `Přemístí předmět z inventáře do místnosti, ve které se nácházíš
        Lze specifikovat množství a úložný prostor v místnosti
        Příklad: drop svíčka 2 truhla`;
    }
    Execution(args) {
        let itemName = args.GetArg("name");
        let amount = args.GetArg("amount");
        let destination = args.GetArg("destination");
        let removed = this.World.Player.Inventory.RemoveByName(itemName, amount);
        if (removed) {
            this.Output.Print(`Položil jsi předmět ${itemName} ${Utility.VerbousAmount(amount)}`);
            this.World.Player.Room.AddItem(removed);
        }
        else {
            this.Output.Print(`Předmět ${itemName} nemáš v inventáři, abys ho mohl položit`);
        }
    }
}
