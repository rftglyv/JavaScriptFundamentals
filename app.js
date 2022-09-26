let userName = "Məmməd"

const main = str => {
    let vowels = /[aıoueəiöü]/gi;
    let result = str.match(vowels);
    let count = result.length;
    let upper = str.match(/[A-Z]/g);
    console.log("Sait hərflərin sayı : " + count + "\n" + "Sözdəki hərf sayı : " + str.length + "\n" + "Söz daxilində olan böyük hərf sayı : " + upper.length + "(" + upper + ")");
};

main(userName)