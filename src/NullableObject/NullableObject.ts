class NullableObject{
    static isNull(object: any): boolean{
        if('isNull' in object){
            return object.isNull
        }
        else return false
    }
}