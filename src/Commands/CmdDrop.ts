class CmdDrop extends Command{
    InitCommand(): void {
        this.AddKeyword("drop")
        this.AddKeyword("polož")
        this.AddKeyword("zahoď")

        this.AddRequiredArgument(ArgumentType.string, "name", "název", "Název předmětu, který chceš položit", "Musíš specifikovat, který předmět chceš položit")
        
        this.AddUnrequiredArgument(ArgumentType.number, "amount", "množství", "Kolik kusů od daného předmětu chceš položit", 1)
        this.AddUnrequiredArgument(ArgumentType.string, "destination", "místo", "Úložný prostor kam chceš předmět položit (musí být otevřený)", "room")
    }

    Help(): string {
        return `Přemístí předmět z inventáře do místnosti, ve které se nácházíš
        Lze specifikovat množství a úložný prostor v místnosti
        Příklad: drop svíčka 2 truhla`
    }

    Execution(args: Arguments): void {
        let itemName = args.GetArg("name") as string
        let amount = args.GetArg("amount") as number
        let destination = args.GetArg("destination") as string
        
        
        let removed = this.World.Player.Inventory.RemoveByName(itemName, amount)

        if(removed){
            this.Output.Print(`Položil jsi předmět ${itemName} ${Utility.VerbousAmount(amount)}`)
            this.World.Player.Room.AddItem(removed)
        }
        else{
            this.Output.Print(`Předmět ${itemName} nemáš v inventáři, abys ho mohl položit`)
        }
    }
}