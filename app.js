"use strict";
/*5 - Criar uma classe que retorne a quantidade de vowels da palavra passada.
  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.*/
class WordtoCount {
    constructor(w) {
        this.str = w.toLowerCase();
    }
    countVowels(word) {
        const letters = Array.from(word);
        return letters.filter((letter) => 'aeiou'.includes(letter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))).length;
    }
}
let p1 = new WordtoCount('AdalbÉrto');
function contaVogal() {
    p1.str = (document.getElementById("wd").value).toLowerCase();
    console.log(`A palavra ${p1.str} tem ${p1.countVowels(p1.str)} vogais`);
}
console.log(`A palavra ${p1.str} tem ${p1.countVowels(p1.str)} vogais`);
