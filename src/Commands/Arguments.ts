class Arguments{
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
    GetValue<T>(index: number, defalutValue: T): T{
        if(!this.IsSpecified(index)) return defalutValue
        else if(typeof defalutValue === 'number') return +this.Args[index] as T
        else if(typeof defalutValue === 'string') return this.Args[index] as T
        else return defalutValue
    }
}