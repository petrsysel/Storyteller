class CmdUnknown extends Command{
    Execution(args: Arguments){
        this.Output.Error("Neznámý příkaz");
    }
}