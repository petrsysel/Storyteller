"use strict";
class Arguments {
    constructor(resolvedValues, rawArgs) {
        this.ResolvedArgs = resolvedValues;
        this.RawArgs = rawArgs;
    }
    GetArg(name) {
        return this.ResolvedArgs.get(name);
    }
    static Resolve(rawArgs, commandArgs) {
        let resolvedValues = new Map();
        for (let i = 0; i < commandArgs.GetCount(); i++) {
            let arg = commandArgs.GetCommand(i);
            if (i < commandArgs.GetRequieredCount()) {
                console.log(arg);
                if (!rawArgs.IsSpecified(i))
                    throw new ArgumentError(arg.RequirementDescription);
            }
            if (!rawArgs.CheckType(i, arg.Type) && rawArgs.IsSpecified(i))
                throw new ArgumentError(`Argument ${arg.Label} vyžaduje jiný typ (číslo/slovo)`);
            let value = rawArgs.GetValue(i, arg.Type, arg.DefaultValue);
            console.log(arg.Name + " " + value);
            resolvedValues.set(arg.Name, value);
        }
        return new Arguments(resolvedValues, rawArgs);
    }
}
