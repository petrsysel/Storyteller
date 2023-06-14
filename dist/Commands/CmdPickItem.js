"use strict";
class CmdPickItem extends Command {
    InitCommand() {
        this.AddKeyword("pick");
        this.AddKeyword("seber");
        this.AddKeyword("vezmi");
    }
    Help() {
        return `Přesune předmět z aktuální lokace do inventáře.
        Příklad: pick Hřeben
        Lze specifikovat množství.
        Příklad: pick baterie 5`;
    }
    Execute(args) {
        if (!args.IsSpecified(0)) {
            this.Output.Print("Musíš zadat název předmětu");
            return;
        }
        let name = args.GetValue(0, "název");
        let amount = args.GetValue(1, 1);
        let room = this.World.Player.Room;
        let founded = room.Items.GetByName(name);
        if (NullableObject.isNull(founded)) { // dělá mi v tom bordel NullItem
            this.Output.Print(`Předmět ${name} se zde nenachází`);
            return;
        }
        let removed = room.RemoveItem(founded, amount);
        this.World.Player.PickItem(founded.Copy(removed.GetAmount()));
    }
}
