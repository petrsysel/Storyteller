"use strict";
class UnrequiredArgument extends Argument {
    constructor(name, defaultValue) {
        super(name);
        this.DefaultValue = defaultValue;
    }
}
