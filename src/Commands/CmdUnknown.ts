class CmdUnknown extends Command{
    Execute(args: Arguments){
        this.Output.Print("Neznámý příkaz");
    }
}