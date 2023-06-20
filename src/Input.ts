class Input{
    element: HTMLInputElement;
    listeners: ((arg: string)=>void)[];
    inputHistory: string[];
    positionInHistory;

    constructor(){
        this.element = document.getElementById('player-input') as HTMLInputElement;
        this.element.addEventListener('keydown', this.#onPlayerInput.bind(this));
        this.element.focus()

        this.listeners = [];
        this.inputHistory = [];
        this.positionInHistory = 0;
    }

    #onPlayerInput(event: KeyboardEvent){
        if(event.key == "Enter"){
            this.listeners.forEach(listener => {
                listener(this.element.value);
            })
            if(this.element.value != "") this.inputHistory.push(this.element.value);
            this.positionInHistory = this.inputHistory.length;
            this.element.value = "";
        }
        

        if(event.key == "ArrowDown"){
            if(this.positionInHistory < this.inputHistory.length-1){
                this.positionInHistory++;
                
            }
            this.LoadHistory();
        }
        if(event.key == "ArrowUp"){
            if(this.positionInHistory > 0){
                this.positionInHistory--;
                
            }
            this.LoadHistory();
        }
    }

    AddListener(listener: ((arg: string) => void)){
        this.listeners.push(listener);
    }

    LoadHistory(){
        this.element.setSelectionRange(5, 5)
        if(this.positionInHistory < 0 || this.positionInHistory >= this.inputHistory.length) return;
        this.element.value = this.inputHistory[this.positionInHistory];
        let that = this.element
        setTimeout(function(){ that.selectionStart = that.selectionEnd = 10000; }, 0);
        // this.element.setSelectionRange(5, 5)
    }
}