class ItemContainer{
    Items: Item[];

    constructor(){
        this.Items = []
    }

    Add(item: Item){
        let existing = this.GetByName(item.GetName());
        console.log(existing);
        if(!(existing instanceof NullItem)){
            existing.Amount += item.GetAmount();
        }
        else{
            this.Items.push(item);
        }
    }
    
    Remove(item: Item, amount = 1){
        if(!this.Items.includes(item)) return null;
        if(amount >= item.GetAmount()){
            return this.Items.splice(this.Items.indexOf(item),1)[0];
        }
        else{
            this.Items[this.Items.indexOf(item)].Amount -= amount;
        }

        return item.Copy(amount);
    }
    
    GetByName(name: string){
        let founded: Item = new NullItem();
        this.Items.forEach(item => {
            if(item.GetName() == name) founded = item;
        })
        return founded;
    }
    
    RemoveByName(name: string, amount = 1){
        let item = this.GetByName(name);
        return this.Remove(item, amount);
    }

    GetItems(){
        return this.Items;
    }
}