class CommandResolver{
    input: Input;
    commandsPackage;
    
    constructor(input: Input, commandsPackage: CommandsPackage){
        this.input = input;
        this.commandsPackage = commandsPackage;

        input.AddListener(this.OnSomeInput.bind(this));
    }

    OnSomeInput(text: string){
        let phrases = Utility.SplitCommand(text);
        
        let keyword = phrases.splice(0,1)[0];
        let args = new Arguments(phrases);

        let command = this.commandsPackage.GetCommand(keyword);
        command.Execute(args);
    }
}