class Item implements IItem{
    Name;
    Description;
    Amount;

    constructor(name: string, description: string, amount = 1){
        this.Name = name;
        this.Description = description;
        this.Amount = amount;
    }

    GetName(){
        return this.Name;
    }
    GetDescription(){
        return this.Description;
    }
    GetAmount(){
        return this.Amount;
    }

    Copy(amount = 1){
        let i = new Item(this.Name, this.Description, amount);
        return i;
    }
}