class CmdPickItem extends Command{
    InitCommand(){
        this.AddKeyword("pick");
        this.AddKeyword("seber");
        this.AddKeyword("vezmi");

        this.AddRequiredArgument(ArgumentType.string, "name", "název", "Název předmětu který chceš vzít", "Musíš zadat název předmětu, který chceš vzít")

        this.AddUnrequiredArgument(ArgumentType.number, "amount", "množství", "Kolik kusů od předmětu chceš vzít", 1)
    }
    Help(){
        return `Přesune předmět z aktuální lokace do inventáře.
        Příklad: pick Hřeben
        Lze specifikovat množství.
        Příklad: pick baterie 5`;
    }

    Execution(args: Arguments){
        let name = args.GetArg('name') as string
        let amount = args.GetArg('amount') as number

        let room = this.World.Player.Room;

        let founded = room.Items.GetByName(name);
        if(NullableObject.isNull(founded)){    // dělá mi v tom bordel NullItem
            this.Output.Print(`Předmět ${name} se zde nenachází`);
            return;
        }
        let removed = room.RemoveItem(founded, amount) as Item;
        this.World.Player.PickItem(founded.Copy(removed.GetAmount()));
    }
}