"use strict";
class Argument {
    constructor(name, label, description, required, valueType, requirementDescription, defaultValue) {
        this.Name = name;
        this.Label = label;
        this.Description = description;
        this.Required = required;
        this.Type = valueType;
        this.RequirementDescription = requirementDescription;
        this.DefaultValue = defaultValue;
    }
}
