class AllCommandsPackage extends CommandsPackage{
    InitCommands(){
        this.AddCommand(new CmdWhere(this.World, this.Output));
        this.AddCommand(new CmdAddItem(this.World, this.Output));
        this.AddCommand(new CmdHelp(this.World, this.Output, this));
        this.AddCommand(new CmdRmItem(this.World, this.Output));
        this.AddCommand(new CmdShowInventory(this.World, this.Output));
        this.AddCommand(new CmdPickItem(this.World, this.Output));
        this.AddCommand(new CmdClear(this.World, this.Output));
    }
}