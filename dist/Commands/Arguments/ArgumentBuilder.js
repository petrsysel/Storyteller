"use strict";
class ArgumentBuilder {
    constructor() {
    }
    SetName(name) {
        this.Name = name;
        return this;
    }
    SetLabel(label) {
        this.Label = label;
        return this;
    }
    SetDescription(description) {
        this.Description = description;
        return this;
    }
    SetRequired(required) {
        this.Required = required;
        return this;
    }
    SetType(type) {
        this.Type = type;
        return this;
    }
    SetRequirementDescription(description) {
        this.RequirementDescription = description;
        return this;
    }
    SetDefaultValue(defaultValue) {
        this.DefaultValue = defaultValue;
        return this;
    }
    Build() {
        if (!this.Name)
            throw new ArgumentError("Není nastaven název argumentu");
        if (!this.Label)
            this.Label = this.Name;
        if (!this.Description)
            throw new ArgumentError("Není nastaven popis argumentu");
        if (this.Required == undefined)
            throw new ArgumentError("Není nastavena povinnost argumentu");
        if (!this.Type)
            throw new ArgumentError("Není nastaven typ argumentu");
        if (this.Required && !this.RequirementDescription)
            throw new ArgumentError("Není nastavena chybová hláška povinného argumentu");
        if (!this.Required && !this.DefaultValue)
            throw new ArgumentError("Není nastavena výchozí hodnota u nepovinného argumentu");
        if (!this.RequirementDescription)
            this.RequirementDescription = "";
        if (!this.DefaultValue)
            this.DefaultValue = 0;
        return new Argument(this.Name, this.Label, this.Description, this.Required, this.Type, this.RequirementDescription, this.DefaultValue);
    }
}
