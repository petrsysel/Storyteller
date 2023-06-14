"use strict";
class NullableObject {
    static isNull(object) {
        if ('isNull' in object) {
            return object.isNull;
        }
        else
            return false;
    }
}
