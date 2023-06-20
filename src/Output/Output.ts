class Output{
    element: HTMLElement
    indentation: number
    color: Color

    constructor(){
        this.element = document.getElementById('output') as HTMLElement;
        this.element.innerHTML="";
        this.indentation = 0
        this.color = Color.Text
    }

    SetIndentation(indentation: number){
        this.indentation = indentation
    }
    SetColor(color: Color){
        this.color = color
    }

    Print(text: string){
        let colorTag = `<${this.color}>`
        let colorEndTag = `</${this.color}>`
        let indent = new Array<string>(this.indentation*4).fill("&nbsp;").join("")
        this.element.innerHTML += `${indent}${colorTag}${text}${colorEndTag}\n`;
        this.KeepScrolling();
    }
    Error(text: string){
        this.SetColor(Color.Error)
        this.Print(text)
        this.SetColor(Color.Text)
    }

    Split(height: number = 1){
        this.Print(`<hr style='height: ${height}px'>`)
    }

    KeepScrolling(){
        this.element.scrollTo(0, this.element.scrollHeight);
    }
    
    Clear(){
        this.element.innerHTML = "";
    }
}