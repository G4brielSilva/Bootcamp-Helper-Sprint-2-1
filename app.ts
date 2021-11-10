/*5 - Criar uma classe que retorne a quantidade de vowels da palavra passada.
  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.*/

class Word {
    private static normalizeString(wd: string): string{
        return wd.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    public static countVowels(word: string): number {
        const letters: Array<string> = Array.from(word);
        return letters.filter((letter: string) => 'aeiou'.includes(this.normalizeString(letter))).length;
    }
}

function contaVogal(): void{
    const str: string= ((document.getElementById("wd") as HTMLInputElement).value);
    console.log(`A palavra ${str} tem ${Word.countVowels(str)} vogais`);
}

console.log(`A palavra tem ${Word.countVowels("Árvore")} vogais`);