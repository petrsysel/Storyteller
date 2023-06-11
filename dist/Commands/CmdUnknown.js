"use strict";
class CmdUnknown extends Command {
    Execute(args) {
        this.Output.Print("Neznámý příkaz");
    }
}
