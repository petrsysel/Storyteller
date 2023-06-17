"use strict";
class CmdClear extends Command {
    InitCommand() {
        this.AddKeyword("clear");
        this.AddKeyword("vymaž");
    }
    Help() {
        return "Vymaže vše v konzoli.";
    }
    Execution(args) {
        this.Output.Clear();
    }
}
