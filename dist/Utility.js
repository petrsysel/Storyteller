"use strict";
class Utility {
    static SplitCommand(phrase) {
        var regex = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
        var results = [];
        var match;
        while ((match = regex.exec(phrase)) !== null) {
            // Pokud byl nalezen text v uvozovkách, přidáme ho do výsledků
            if (match[1] !== undefined) {
                results.push(match[1]);
            }
            else {
                // Jinak přidáme nalezené slovo
                results.push(match[0]);
            }
        }
        return results;
    }
}
