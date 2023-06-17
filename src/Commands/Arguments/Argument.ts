class Argument{
    Name: string
    Label: string
    Description: string
    Required: boolean
    Type: ArgumentType
    RequirementDescription: string
    DefaultValue: ArgValueType

    constructor(name: string, label: string, description: string, required: boolean, valueType: ArgumentType, requirementDescription: string, defaultValue: ArgValueType){
        this.Name = name
        this.Label = label
        this.Description = description
        this.Required = required
        this.Type = valueType
        this.RequirementDescription = requirementDescription
        this.DefaultValue = defaultValue
    }
}