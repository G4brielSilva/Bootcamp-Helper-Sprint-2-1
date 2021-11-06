/*5 - Criar uma classe que retorne a quantidade de vowels da palavra passada.
  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.*/

class WordtoCount {
    
    public str: string;
    constructor(w: string){
        this.str = w.toLowerCase();
    }

    public countVowels(word: string): number {
        const letters: Array<string> = Array.from(word);
        return letters.filter((letter: string) => 'aeiou'.includes(letter)).length;
    }
}

let p1 = new WordtoCount('Adalberto');


function contaVogal(): void{
    p1.str= ((document.getElementById("wd") as HTMLInputElement).value).toLowerCase();
    console.log(`A palavra ${p1.str} tem ${p1.countVowels(p1.str)}`);
}
console.log(`A palavra ${p1.str} tem ${p1.countVowels(p1.str)}`);