class Output{
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('output') as HTMLElement;
        this.element.innerHTML="";
    }

    Print(text: String){
        this.element.innerHTML += `${text}\n`;
        this.KeepScrolling();
    }

    KeepScrolling(){
        this.element.scrollTo(0, this.element.scrollHeight);
    }
    
    Clear(){
        this.element.innerHTML = "";
    }
}