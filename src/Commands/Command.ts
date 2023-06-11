class Command{
    World;
    Output;
    Keywords: string[];
    
    constructor(world: World, output: Output){
        this.World = world;
        this.Output = output;
        this.Keywords = [];
        this.InitCommand();
    }
    InitCommand(){

    }

    Execute(args: string[]){
        throw new Error("Execution of command is not defined");
    }
    
    HaveKeyword(keyword: string){
        return this.Keywords.includes(keyword);
    }

    Help(){
        return "K tomuto příkazu neexistuje nápověda";
    }

    AddKeyword(keyword: string){
        this.Keywords.push(keyword);
    }
}