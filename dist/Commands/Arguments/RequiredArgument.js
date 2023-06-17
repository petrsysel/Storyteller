"use strict";
class RequiredArgument extends Argument {
    constructor(name, requiredDescription) {
        super(name);
        this.RequiredDescription = requiredDescription;
    }
}
