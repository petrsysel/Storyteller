class CommandArgs{
    Arguments: Argument[]

    constructor(){
        this.Arguments = []
    }

    AddArgument(arg: Argument){
        this.Arguments.push(arg)
    }

    GetCommand(index: number){
        return this.Arguments[index]
    }
    GetCount(){
        return this.Arguments.length
    }
    GetRequieredCount(){
        let count = this.Arguments.filter(arg => arg.Required).length
        return count
    }
}