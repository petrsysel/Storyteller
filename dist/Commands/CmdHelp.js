"use strict";
class CmdHelp extends Command {
    /**
     *
     * @param {World} world
     * @param {Output} output
     * @param {CommandsPackage} cmdPackage
     */
    constructor(world, output, cmdPackage) {
        super(world, output);
        this.CmdPackage = cmdPackage;
    }
    InitCommand() {
        this.AddKeyword("help");
        this.AddKeyword("pomoc");
    }
    Execute(args) {
        this.CmdPackage.Commands.forEach(command => {
            this.Output.Print(command.Keywords[0]);
            this.Output.Print(command.Help());
            this.Output.Print(`Všechny aliasy: ${command.Keywords.join(", ")}`);
            this.Output.Print("---------------------------------------------");
        });
    }
    Help() {
        return "Vypíše nápovědu k dostupným příkazům";
    }
}
