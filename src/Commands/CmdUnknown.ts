class CmdUnknown extends Command{
    Execute(args: string[]){
        this.Output.Print("Neznámý příkaz");
    }
}