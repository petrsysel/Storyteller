class CmdHelp extends Command{
    CmdPackage;

    /**
     * 
     * @param {World} world 
     * @param {Output} output 
     * @param {CommandsPackage} cmdPackage 
     */
    constructor(world: World, output: Output, cmdPackage: CommandsPackage){
        super(world, output);
        this.CmdPackage = cmdPackage;
    }

    InitCommand(){
        this.AddKeyword("help");
        this.AddKeyword("pomoc");
    }

    Execute(){
        this.CmdPackage.Commands.forEach(command => {
            this.Output.Print(command.Keywords[0]);
            this.Output.Print(command.Help());
            this.Output.Print(`Všechny aliasy: ${command.Keywords.join(", ")}`);
            this.Output.Print("---------------------------------------------");
        })
    }

    Help(){
        return "Vypíše nápovědu k dostupným příkazům";
    }
}