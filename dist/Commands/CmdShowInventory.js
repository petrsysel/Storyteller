"use strict";
class CmdShowInventory extends Command {
    InitCommand() {
        this.AddKeyword("inventory");
        this.AddKeyword("inventář");
    }
    Help() {
        return "Zobrazí předměty v inventáři.";
    }
    Execution(args) {
        let inventory = this.World.Player.Inventory;
        this.Output.Print("Inventář:");
        this.Output.SetIndentation(1);
        inventory.GetItems().forEach(item => {
            let amount = item.GetAmount() > 1 ? `(${item.GetAmount()})` : "";
            this.Output.Print(`${item.GetName()} ${amount}`);
        });
        this.Output.SetIndentation(0);
    }
}
