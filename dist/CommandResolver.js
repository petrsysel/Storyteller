"use strict";
class CommandResolver {
    constructor(input, commandsPackage) {
        this.input = input;
        this.commandsPackage = commandsPackage;
        input.AddListener(this.OnSomeInput.bind(this));
    }
    OnSomeInput(text) {
        let phrases = Utility.SplitCommand(text);
        let keyword = phrases.splice(0, 1)[0];
        let args = phrases;
        let command = this.commandsPackage.GetCommand(keyword);
        command.Execute(args);
    }
}
