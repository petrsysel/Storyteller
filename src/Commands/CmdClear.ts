class CmdClear extends Command{
    InitCommand(){
        this.AddKeyword("clear")
        this.AddKeyword("vymaž")
    }
    Help(){
        return "Vymaže vše v konzoli.";
    }
    Execute(args: string[]){
        this.Output.Clear();
    }
}