class CmdJustEnter extends Command{
    InitCommand(): void {
        
    }

    Help(): string {
        return ""
    }

    Execution(args: Arguments): void {
        this.Output.Print("")
    }
}