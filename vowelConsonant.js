function vowelAndConsonants(s) {

    let vowels = [];
    let consonants = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }
    // vowels.join();
    // consonants.join();
    // vowels.concat(consonants);
    const alphabet = vowels.concat(consonants);
    // console.log(alphabet);

    for (let i = 0; i < alphabet.length; i++) {
        console.log(alphabet[i]);
    }
}

const s = 'javascriptloops';
vowelAndConsonants(s);