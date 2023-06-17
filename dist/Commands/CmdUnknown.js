"use strict";
class CmdUnknown extends Command {
    Execution(args) {
        this.Output.Print("Neznámý příkaz");
    }
}
