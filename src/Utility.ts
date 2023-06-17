class Utility{
    static SplitCommand(phrase: string) {
        var regex = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
        var results: string[] = [];
        var match;
      
        while ((match = regex.exec(phrase)) !== null) {
          // Pokud byl nalezen text v uvozovkách, přidáme ho do výsledků
          if (match[1] !== undefined) {
            results.push(match[1]);
          } else {
            // Jinak přidáme nalezené slovo
            results.push(match[0]);
          }
        }
      
        return results;
      }
  static CheckParameter<T>(parameter: T, defalutValue: T): T{
    if(parameter !== null && parameter !== undefined && !Number.isNaN(parameter)){
      return parameter
    }
    else return defalutValue
  }

  static VerbousAmount(amount: number){
    let verbous = amount > 1 ? `v množství ${amount}ks` : ""
    return verbous
  }
}