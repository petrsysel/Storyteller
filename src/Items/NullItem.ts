class NullItem extends Item implements INullableObject{
    isNull: boolean = true;
    constructor(){
        super("NULL ITEM", "NULL ITEM", 0)
    }
}