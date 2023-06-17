class CmdRequirementMessages{
    RequirementMessages: string[]

    constructor(){
        this.RequirementMessages = []
    }

    AddRequirementMessage(message: string){
        this.RequirementMessages.push(message)
    }
}