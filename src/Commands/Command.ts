class Command{
    World;
    Output;
    Keywords: string[];
    Arguments: CommandArgs;
    
    constructor(world: World, output: Output){
        this.World = world
        this.Output = output
        this.Keywords = []
        this.Arguments = new CommandArgs()
        this.InitCommand()
    }
    InitCommand(){

    }

    Execute(rawArgs: RawArguments){
        try{
            let args = Arguments.Resolve(rawArgs, this.Arguments)
            this.Execution(args)
        }
        catch(e){
            if(e instanceof Error){
                let message = (e as Error).message
                console.log(message)
                this.Output.Print(`Chyba příkazu: ${message}`)
            }
        }
    }

    Execution(args: Arguments){
        throw new Error("Execution of command is not defined");
    }
    
    HaveKeyword(keyword: string){
        return this.Keywords.includes(keyword);
    }

    Help(){
        return "K tomuto příkazu neexistuje nápověda";
    }

    AddKeyword(keyword: string){
        this.Keywords.push(keyword);
    }

    AddArgument(argument: Argument){
        this.Arguments.AddArgument(argument)
    }

    AddRequiredArgument(type: ArgumentType, name: string, label: string, description: string, requirementError: string){
        this.AddArgument(new ArgumentBuilder()
            .SetName(name)
            .SetLabel(label)
            .SetDescription(description)
            .SetRequired(true)
            .SetRequirementDescription(requirementError)
            .SetType(type)
            .Build()
        )
    }
    AddUnrequiredArgument(type: ArgumentType, name: string, label: string, description: string, defaultValue: ArgValueType){
        this.AddArgument(new ArgumentBuilder()
            .SetName(name)
            .SetLabel(label)
            .SetDescription(description)
            .SetRequired(false)
            .SetDefaultValue(defaultValue)
            .SetType(type)
            .Build()
        )
    }
}