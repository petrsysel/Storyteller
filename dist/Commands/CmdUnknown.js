"use strict";
class CmdUnknown extends Command {
    Execution(args) {
        this.Output.Error("Neznámý příkaz");
    }
}
