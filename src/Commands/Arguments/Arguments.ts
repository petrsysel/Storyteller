class Arguments{
    ResolvedArgs: Map<string, ArgValueType>
    RawArgs: RawArguments

    constructor(resolvedValues: Map<string, ArgValueType>, rawArgs: RawArguments){
        this.ResolvedArgs = resolvedValues
        this.RawArgs = rawArgs
    }

    GetArg(name: string){
        return this.ResolvedArgs.get(name)
    }

    static Resolve(rawArgs: RawArguments, commandArgs: CommandArgs): Arguments{
        let resolvedValues = new Map<string, ArgValueType>()

        for(let i = 0; i < commandArgs.GetCount(); i++){
            let arg = commandArgs.GetCommand(i)
            
            if(i < commandArgs.GetRequieredCount()){
                console.log(arg)
                if(!rawArgs.IsSpecified(i)) throw new ArgumentError(arg.RequirementDescription)
            }
            if(!rawArgs.CheckType(i, arg.Type) && rawArgs.IsSpecified(i)) throw new ArgumentError(`Argument ${arg.Label} vyžaduje jiný typ (číslo/slovo)`)

            let value: ArgValueType = rawArgs.GetValue(i, arg.Type, arg.DefaultValue)

            console.log(arg.Name + " " + value)
            resolvedValues.set(arg.Name, value)
        }

        return new Arguments(resolvedValues, rawArgs)
    }
}