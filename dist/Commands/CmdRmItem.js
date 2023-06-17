"use strict";
class CmdRmItem extends Command {
    InitCommand() {
        this.AddKeyword("removeitem");
        this.AddKeyword("rmitem");
        this.AddKeyword("odeberpredmet");
        this.AddKeyword("odebervec");
        this.AddRequiredArgument(ArgumentType.string, "name", "název", "Název předmětu který chceš odstranit", "Musíš zadat název předmětu který chceš odstranit");
        this.AddUnrequiredArgument(ArgumentType.number, "amount", "množství", "Množství ve kterém chceš předmět odebrat", 1);
    }
    Help() {
        return `Odebere předmět z aktuální lokace.
        Příklad: rmitem "Ozubené kolo střední velikosti"
        Lze specifikovat množství.
        Příklad: rmitem mince 12`;
    }
    Execution(args) {
        let name = args.GetArg('name');
        let amount = args.GetArg('amount');
        let room = this.World.Player.Room;
        let founded = room.Items.GetByName(name);
        if (NullableObject.isNull(founded)) {
            this.Output.Print(`Předmět "${name}" nebyl v tomto místě nalezen`);
            return;
        }
        let removed = room.RemoveItem(founded, amount);
        let amountString = removed.GetAmount() > 1 ? ` v množství ${removed.GetAmount()} ks` : "";
        this.Output.Print(`Předmět ${founded.GetName()} byl odebrán${amountString}`);
    }
}
