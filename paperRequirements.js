function paperRequirements(firstBookQuanity, secondBookQuantity, thirdBookQuantiy) {
    let firstBookPages = 100;
    let secondBookPages = 200;
    let thirdBookPages = 300;

    firstBookPages *= firstBookQuanity;
    secondBookPages *= secondBookQuantity;
    thirdBookPages *= thirdBookQuantiy;

    return firstBookPages + secondBookPages + thirdBookPages;

}

const totalPages = paperRequirements(5, 6, 7);
console.log(totalPages);