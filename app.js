"use strict";
/*5 - Criar uma classe que retorne a quantidade de vowels da palavra passada.
  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.*/
class Word {
    static normalizeString(wd) {
        return wd.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
    static countVowels(word) {
        const letters = Array.from(word);
        return letters.filter((letter) => 'aeiou'.includes(this.normalizeString(letter))).length;
    }
}
function contaVogal() {
    const str = (document.getElementById("wd").value);
    console.log(`A palavra ${str} tem ${Word.countVowels(str)} vogais`);
}
console.log(`A palavra tem ${Word.countVowels("Árvore")} vogais`);
