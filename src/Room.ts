class Room{
    Name;
    Description;
    Items;
    Neighboars: Room[];     // Bude implementováno jinak (možná)

    constructor(name: string){
        this.Name = name;
        this.Items = new ItemContainer();
        this.Neighboars = [];
        this.Description = "A room";
    }

    AddItem(item: Item){
        this.Items.Add(item);
    }
    RemoveItem(item: Item, amount = 1){
        return this.Items.Remove(item, amount);
    }
    RemoveItemByName(name: string, amount = 1){
        return this.Items.RemoveByName(name, amount);
    }

    GetDescription(){
        return this.Description;
    }
    GetName(){
        return this.Name;
    }
    SetName(name: string){
        this.Name = name;
    }
    
    AddNeighbor(neighboar: Room){
        this.Neighboars.push(neighboar);
    }
    RemoveNeighboar(neighboar: Room){
        if(this.Neighboars.includes(neighboar)){
            this.Neighboars.splice(this.Neighboars.indexOf(neighboar), 1);
        }
    }
}