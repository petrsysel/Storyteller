class CmdPickItem extends Command{
    InitCommand(){
        this.AddKeyword("pick");
        this.AddKeyword("seber");
        this.AddKeyword("vezmi");
    }
    Help(){
        return `Přesune předmět z aktuální lokace do inventáře.
        Příklad: pick Hřeben
        Lze specifikovat množství.
        Příklad: pick baterie 5`;
    }

    Execute(args: string[]){
        let name = args[0];
        if(name == null){
            this.Output.Print("Musíš zadat název předmětu");
            return;
        }
        let amount: number = Number.parseInt(args[1]);
        if(amount == null) amount = 1;

        let room = this.World.Player.Room;

        let founded = room.Items.GetByName(name);
        if(founded == null){    // dělá mi v tom bordel NullItem
            this.Output.Print(`Předmět ${name} se zde nenachází`);
            return;
        }
        let removed = room.RemoveItem(founded, amount) as Item;
        this.World.Player.PickItem(founded.Copy(removed.GetAmount()));
    }
}