let userName = "ElektrikləşdirdikLərdinizdənsinizMi"

const main = str => {
    let vowels = /[aıoueəiöü]/gi;
    let result = str.match(vowels);
    let upper = str.match(/[A-Z]/g);
    console.log("Sait hərflərin sayı : " + result.length + "\n" + "Sözdəki hərf sayı : " 
    + str.length + "\n" + "Söz daxilində olan böyük hərf sayı : " + upper.length + " " + "(" + upper + ")");
};

main(userName)