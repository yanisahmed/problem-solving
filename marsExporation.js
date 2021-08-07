function marsExploration(s) {
    // Write your code here
    const message = 'SOS';
    let errosCount = 0;

    for (let i = 0; i < s.length; i = i + 3) {
        if (message[0] != s[i]) {
            errosCount++;
        }
        if (message[1] != s[i + 1]) {
            errosCount++;
        }
        if (message[2] != s[i + 2]) {
            errosCount++;
        }
    }

    return errosCount;

}

const erros = marsExploration('SOSSOT');
console.log(erros);