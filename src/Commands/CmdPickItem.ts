class CmdPickItem extends Command{
    InitCommand(){
        this.AddKeyword("pick");
        this.AddKeyword("seber");
        this.AddKeyword("vezmi");
    }
    Help(){
        return `Přesune předmět z aktuální lokace do inventáře.
        Příklad: pick Hřeben
        Lze specifikovat množství.
        Příklad: pick baterie 5`;
    }

    Execute(args: string[]){
        let name = args[0];
        if(name == null){
            this.Output.Print("Musíš zadat název předmětu");
            return;
        }
        let amount: number = Number.parseInt(args[1]);
        if(amount == null) amount = 1;

        let room = this.World.Player.Room;

        let founded = room.Items.GetByName(name);
        if(founded == null){    // dělá mi v tom bordel NullItem
            this.Output.Print(`Předmět ${name} se zde nenachází`);
            return;
        }
        let removed = room.RemoveItem(founded, amount) as Item;
        this.World.Player.PickItem(founded.Copy(removed.GetAmount()));
    }
}

class Barva{}
class Ikona{}

class Tlacitko{
    Text: string
    Sirka: number
    Vyska: number
    Ramecek: number
    Barva: Barva
    Ikona: Ikona
    Vybrano: boolean
    Zkratka: string[]

    constructor();
    constructor(text: string = "Text tlačítka", sirka: number = 10, vyska: number = 10, ramecek: number = 1, barva: Barva = new Barva(), ikona: Ikona = new Ikona(), vybrano: boolean = false, zkratka: string[] = []){
        this.Text = text
        this.Sirka = sirka
        this.Vyska = vyska
        this.Ramecek = ramecek
        this.Barva = barva
        this.Ikona = ikona
        this.Vybrano = vybrano
        this.Zkratka = zkratka
    }
}

class TlacitkoBuilder{
    #tlacitko: Tlacitko = new Tlacitko()

    SetText(text:string){
        this.#tlacitko.Text = text
        return this
    }
    SetSirka(sirka: number){
        this.#tlacitko.Sirka = sirka
        return this
    }
    SetVyska(vyska: number){
        this.#tlacitko.Vyska = vyska
        return this
    }
    SetRamecek(ramecek: number){
        this.#tlacitko.Ramecek = ramecek
        return this
    }
    SetBarva(barva: Barva){
        this.#tlacitko.Barva = barva
        return this
    }
    SetIkona(ikona: Ikona){
        this.#tlacitko.Ikona = ikona
        return this
    }
    SetVybrano(vybrano: boolean){
        this.#tlacitko.Vybrano = vybrano
        return this
    }
    SetZkratka(zkratka: string[]){
        this.#tlacitko.Zkratka = zkratka
        return this
    }
    Build(){
        return this.#tlacitko
    }
}

let tlacitkoBuilder = new TlacitkoBuilder()
let tlacitko = tlacitkoBuilder.SetText("Save")
                              .SetSirka(40)
                              .SetVyska(20)
                              .SetRamecek(1)
                              .SetBarva(new Barva)
                              .SetIkona(new Ikona)
                              .SetVybrano(false)
                              .SetZkratka(["ctrl", "s"])
                              .Build()