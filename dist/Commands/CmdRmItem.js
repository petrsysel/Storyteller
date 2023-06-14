"use strict";
class CmdRmItem extends Command {
    InitCommand() {
        this.AddKeyword("removeitem");
        this.AddKeyword("rmitem");
        this.AddKeyword("odeberpredmet");
        this.AddKeyword("odebervec");
    }
    Help() {
        return `Odebere předmět z aktuální lokace.
        Příklad: rmitem "Ozubené kolo střední velikosti"
        Lze specifikovat množství.
        Příklad: rmitem mince 12`;
    }
    Execute(args) {
        let name = args.GetValue(0, "");
        let amount = args.GetValue(0, 1);
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
