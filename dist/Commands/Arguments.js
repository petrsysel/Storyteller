"use strict";
class Arguments {
    constructor(args) {
        this.Args = args;
    }
    IsSpecified(index) {
        let arg = this.Args[index];
        if (arg == null || arg == undefined || Number.isNaN(arg)) {
            return false;
        }
        return true;
    }
    GetValue(index, defalutValue) {
        if (!this.IsSpecified(index))
            return defalutValue;
        else if (typeof defalutValue === 'number')
            return +this.Args[index];
        else if (typeof defalutValue === 'string')
            return this.Args[index];
        else
            return defalutValue;
    }
}
