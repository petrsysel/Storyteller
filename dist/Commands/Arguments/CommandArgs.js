"use strict";
class CommandArgs {
    constructor() {
        this.Arguments = [];
    }
    AddArgument(arg) {
        this.Arguments.push(arg);
    }
    GetCommand(index) {
        return this.Arguments[index];
    }
    GetCount() {
        return this.Arguments.length;
    }
    GetRequieredCount() {
        let count = this.Arguments.filter(arg => arg.Required).length;
        return count;
    }
}
