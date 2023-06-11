"use strict";
class Command {
    constructor(world, output) {
        this.World = world;
        this.Output = output;
        this.Keywords = [];
        this.InitCommand();
    }
    InitCommand() {
    }
    Execute(args) {
        throw new Error("Execution of command is not defined");
    }
    HaveKeyword(keyword) {
        return this.Keywords.includes(keyword);
    }
    Help() {
        return "K tomuto příkazu neexistuje nápověda";
    }
    AddKeyword(keyword) {
        this.Keywords.push(keyword);
    }
}
