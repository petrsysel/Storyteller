"use strict";
class RawArguments {
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
    GetValue(index, type, defaultValue) {
        if (type == ArgumentType.number)
            return this.GetNumberValue(index, defaultValue);
        else
            return this.GetStringValue(index, defaultValue);
    }
    GetNumberValue(index, defaultValue) {
        if (!this.IsSpecified(index))
            return defaultValue;
        else
            return +this.Args[index];
    }
    GetStringValue(index, defaultValue) {
        if (!this.IsSpecified(index))
            return defaultValue;
        else
            return this.Args[index];
    }
    CheckType(index, type) {
        let rawArgType = Number.isNaN(+this.Args[index]) ? ArgumentType.string : ArgumentType.number;
        return type == rawArgType;
    }
}
