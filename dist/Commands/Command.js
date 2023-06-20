"use strict";
class Command {
    constructor(world, output) {
        this.World = world;
        this.Output = output;
        this.Keywords = [];
        this.Arguments = new CommandArgs();
        this.InitCommand();
    }
    InitCommand() {
    }
    Execute(rawArgs) {
        try {
            this.Output.Split(1);
            let args = Arguments.Resolve(rawArgs, this.Arguments);
            this.Execution(args);
        }
        catch (e) {
            if (e instanceof Error) {
                let message = e.message;
                console.log(message);
                this.Output.Error(`Chyba příkazu: ${message}`);
            }
        }
    }
    Execution(args) {
        throw new Error("Execution of command is not defined");
    }
    HaveKeyword(keyword) {
        return this.Keywords.includes(keyword);
    }
    Help() {
        return "K tomuto příkazu neexistuje nápověda";
    }
    AddKeyword(keyword) {
        this.Keywords.push(keyword);
    }
    AddArgument(argument) {
        this.Arguments.AddArgument(argument);
    }
    GetName() {
        return this.Keywords[0];
    }
    AddRequiredArgument(type, name, label, description, requirementError) {
        this.AddArgument(new ArgumentBuilder()
            .SetName(name)
            .SetLabel(label)
            .SetDescription(description)
            .SetRequired(true)
            .SetRequirementDescription(requirementError)
            .SetType(type)
            .Build());
    }
    AddUnrequiredArgument(type, name, label, description, defaultValue) {
        this.AddArgument(new ArgumentBuilder()
            .SetName(name)
            .SetLabel(label)
            .SetDescription(description)
            .SetRequired(false)
            .SetDefaultValue(defaultValue)
            .SetType(type)
            .Build());
    }
}
