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
        this.AddUnrequiredArgument(ArgumentType.string, "option", "možnost výpisu", "O jaký druh nápovědy k příkazům se jedná", "default");
    }
    Execution(args) {
        let option = args.GetArg("option");
        switch (option) {
            case "default": {
                this.WriteHelpFor(this);
                break;
            }
            case "full": {
                this.CmdPackage.Commands.forEach(command => {
                    this.WriteHelpFor(command);
                });
                break;
            }
            case "list": {
                this.CmdPackage.Commands.forEach(command => {
                    this.Output.Print(command.GetName());
                });
                break;
            }
            case "alist": {
                this.CmdPackage.Commands.forEach(command => {
                    this.Output.Print(`${command.GetName()} (${command.Keywords.join(", ")})`);
                });
                break;
            }
            default: {
                let foundCommand = this.CmdPackage.GetCommand(option);
                if (foundCommand instanceof CmdUnknown)
                    this.Output.Print(`Nelze vypsat nápovědu pro neexistující příkaz ${option}`);
                else
                    this.WriteHelpFor(foundCommand);
                break;
            }
        }
    }
    Help() {
        return `Vypíše nápovědu k dostupným příkazům
        Možnosti nápovědy:
        help list - vypíše seznam dostupných příkazů
        help alist - vypíše seznam dostupných příkazů a všemi jejich aliasy
        help full - vypíše seznam dostupných příkazů s podrobným popisem
        help <název konkrétního příkazu> - zobrazí podrobný popis konkrétního příkazu`;
    }
    WriteHelpFor(command) {
        let argumentList = command.Arguments.Arguments.map(argument => `&lt${argument.Label}${argument.Required ? "*" : ""}&gt`);
        this.Output.Print("_____________________________________________");
        this.Output.Print(command.GetName());
        this.Output.Print("---------------------------------------------");
        this.Output.Print(command.Help());
        this.Output.Print(`Všechny aliasy: ${command.Keywords.join(", ")}`);
        this.Output.Print(`Použití: ${command.GetName()} ${argumentList.join(" ")}`);
        command.Arguments.Arguments.forEach(argument => {
            this.Output.Print(`${argument.Label} - ${argument.Description}`);
        });
        this.Output.Print("_____________________________________________");
    }
}
