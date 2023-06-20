class CommandsPackage{
    Commands: Command[];
    World;
    Output;
    #baseCommand;
    #justEnterCommand

    constructor(world: World, output: Output){
        this.World = world
        this.Output = output
        this.Commands = []
        this.#baseCommand = new CmdUnknown(world, output)
        this.#justEnterCommand = new CmdJustEnter(world, output)
        this.InitCommands()
    }

    InitCommands(){

    }
    
    AddCommand(command: Command){
        this.Commands.push(command);
    }

    GetCommand(keyword: string){
        let found = null;
        console.log(keyword)
        this.Commands.forEach(command => {
            if(command.HaveKeyword(keyword)){
                found = command;
            }
        })
        if(!found) found = this.#baseCommand;
        if(keyword == undefined) found = this.#justEnterCommand
        return found;
    }
}