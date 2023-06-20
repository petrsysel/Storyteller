"use strict";
class CmdJustEnter extends Command {
    InitCommand() {
    }
    Help() {
        return "";
    }
    Execution(args) {
        this.Output.Print("");
    }
}
