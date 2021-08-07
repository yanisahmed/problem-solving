function matchingStrings(strings, queries) {

    let matches = [];

    for (const query of queries) {

        let matchFound = 0;
        for (const string of strings) {
            if (query == string) {
                matchFound++;
            }
        }
        matches.push(matchFound);

    }

    return matches;

}

const queryFound = matchingStrings(['abc', 'ab', 'cda', 'dca', 'ab'], ['dca', 'abc', 'abc', 'ab']);
console.log(queryFound);