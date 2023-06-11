"use strict";
class Output {
    constructor() {
        this.element = document.getElementById('output');
        this.element.innerHTML = "";
    }
    Print(text) {
        this.element.innerHTML += `${text}\n`;
        this.KeepScrolling();
    }
    KeepScrolling() {
        this.element.scrollTo(0, this.element.scrollHeight);
    }
    Clear() {
        this.element.innerHTML = "";
    }
}
