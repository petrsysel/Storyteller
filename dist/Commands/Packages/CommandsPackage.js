"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CommandsPackage_baseCommand;
class CommandsPackage {
    constructor(world, output) {
        _CommandsPackage_baseCommand.set(this, void 0);
        this.World = world;
        this.Output = output;
        this.Commands = [];
        __classPrivateFieldSet(this, _CommandsPackage_baseCommand, new CmdUnknown(world, output), "f");
        this.InitCommands();
    }
    InitCommands() {
    }
    AddCommand(command) {
        this.Commands.push(command);
    }
    GetCommand(keyword) {
        let found = null;
        this.Commands.forEach(command => {
            if (command.HaveKeyword(keyword)) {
                found = command;
            }
        });
        if (!found)
            found = __classPrivateFieldGet(this, _CommandsPackage_baseCommand, "f");
        return found;
    }
}
_CommandsPackage_baseCommand = new WeakMap();
