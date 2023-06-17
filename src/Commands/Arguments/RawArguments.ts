class RawArguments{
    Args: string[]
    constructor(args: string[]){
        this.Args = args
    }

    IsSpecified(index: number): boolean{
        let arg = this.Args[index]
        if(arg == null || arg == undefined || Number.isNaN(arg)){
            return false
        }
        return true
    }

    GetValue(index: number, type: ArgumentType, defaultValue: ArgValueType): ArgValueType{
        if(type == ArgumentType.number) return this.GetNumberValue(index, defaultValue as number)
        else return this.GetStringValue(index, defaultValue as string)
    }

    GetNumberValue(index: number, defaultValue: number): number{
        if(!this.IsSpecified(index)) return defaultValue
        else return +this.Args[index]
    }

    GetStringValue(index: number, defaultValue: string): string{
        if(!this.IsSpecified(index)) return defaultValue
        else return this.Args[index]
    }
    CheckType(index: number, type: ArgumentType){
        let rawArgType = Number.isNaN(+this.Args[index]) ? ArgumentType.string : ArgumentType.number

        return type == rawArgType
    }
}