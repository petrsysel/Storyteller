class CmdWhere extends Command{
    InitCommand(){
        this.Keywords.push("where");
        this.Keywords.push("kde");
    }

    Execution(args: Arguments){
        let room = this.World.Player.Room;
        let roomName = room.GetName();
        this.Output.SetColor(Color.RoomName)
        this.Output.Print(`Nacházíš se v lokaci: ${roomName}`);
        this.Output.SetColor(Color.Text)
        this.Output.Print(`Popis: ${room.GetDescription()}`)
        this.Output.Print("Předměty:");
        this.Output.SetIndentation(1)
        room.Items.GetItems().forEach(item => {
            let amount = item.GetAmount() > 1 ? `(${item.GetAmount()})` : "";
            this.Output.Print(`${item.GetName()}${amount}`);
        })
        this.Output.SetIndentation(0)
    }
    Help(){
        return "Vypíše název, popis, předměty a další informace o aktuální lokaci";
    }
}