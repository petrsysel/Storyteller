"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Input_instances, _Input_onPlayerInput;
class Input {
    constructor() {
        _Input_instances.add(this);
        this.element = document.getElementById('player-input');
        this.element.addEventListener('keydown', __classPrivateFieldGet(this, _Input_instances, "m", _Input_onPlayerInput).bind(this));
        this.element.focus();
        this.listeners = [];
        this.inputHistory = [];
        this.positionInHistory = 0;
    }
    AddListener(listener) {
        this.listeners.push(listener);
    }
    LoadHistory() {
        this.element.setSelectionRange(5, 5);
        if (this.positionInHistory < 0 || this.positionInHistory >= this.inputHistory.length)
            return;
        this.element.value = this.inputHistory[this.positionInHistory];
        let that = this.element;
        setTimeout(function () { that.selectionStart = that.selectionEnd = 10000; }, 0);
        // this.element.setSelectionRange(5, 5)
    }
}
_Input_instances = new WeakSet(), _Input_onPlayerInput = function _Input_onPlayerInput(event) {
    if (event.key == "Enter") {
        this.listeners.forEach(listener => {
            listener(this.element.value);
        });
        if (this.element.value != "")
            this.inputHistory.push(this.element.value);
        this.positionInHistory = this.inputHistory.length;
        this.element.value = "";
    }
    if (event.key == "ArrowDown") {
        if (this.positionInHistory < this.inputHistory.length - 1) {
            this.positionInHistory++;
        }
        this.LoadHistory();
    }
    if (event.key == "ArrowUp") {
        if (this.positionInHistory > 0) {
            this.positionInHistory--;
        }
        this.LoadHistory();
    }
};
