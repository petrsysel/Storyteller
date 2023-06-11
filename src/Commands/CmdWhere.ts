class CmdWhere extends Command{
    InitCommand(){
        this.Keywords.push("where");
        this.Keywords.push("kde");
    }

    Execute(args: String[]){
        let room = this.World.Player.Room;
        let roomName = room.GetName();
        this.Output.Print(`=============== ${roomName} ===============`);
        this.Output.Print(`Popis: ${room.GetDescription()}`)
        this.Output.Print("Předměty:");
        room.Items.GetItems().forEach(item => {
            let amount = item.GetAmount() > 1 ? `(${item.GetAmount()})` : "";
            this.Output.Print(`${item.GetName()}${amount}`);
        })
    }
    Help(){
        return "Vypíše název, popis, předměty a další informace o aktuální lokaci";
    }
}