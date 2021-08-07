function bestFriend(names) {
    let bigName = '';
    for (const name of names) {
        if (name.length > bigName.length) {
            bigName = name;
        }
    }
    return bigName;
}

const longestName = bestFriend(['Suhel', 'Zakaria', 'Selim Rahman', 'Kalim', 'Rahim']);
console.log(longestName);
console.log(typeof longestName);