"use strict";
class Output {
    constructor() {
        this.element = document.getElementById('output');
        this.element.innerHTML = "";
        this.indentation = 0;
        this.color = Color.Text;
    }
    SetIndentation(indentation) {
        this.indentation = indentation;
    }
    SetColor(color) {
        this.color = color;
    }
    Print(text) {
        let colorTag = `<${this.color}>`;
        let colorEndTag = `</${this.color}>`;
        let indent = new Array(this.indentation * 4).fill("&nbsp;").join("");
        this.element.innerHTML += `${indent}${colorTag}${text}${colorEndTag}\n`;
        this.KeepScrolling();
    }
    Error(text) {
        this.SetColor(Color.Error);
        this.Print(text);
        this.SetColor(Color.Text);
    }
    Split(height = 1) {
        this.Print(`<hr style='height: ${height}px'>`);
    }
    KeepScrolling() {
        this.element.scrollTo(0, this.element.scrollHeight);
    }
    Clear() {
        this.element.innerHTML = "";
    }
}
