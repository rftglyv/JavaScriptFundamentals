let userName = "ElektrikləŞdirdikLƏrdinizdənsinizmi"

const main = str => {
    let vowels = /[aıoueəiöü]/gi;
    let result = str.match(vowels);
    let upper = str.match(/[A-Z,Ü,Ö,Ğ,Ə,Ç,Ş]/g);
    console.log("Sait hərflərin sayı : " + result.length + "\n" + "Sözdəki hərf sayı : " 
    + str.length + "\n" + "Söz daxilində olan böyük hərf sayı : " + upper.length + " " + "(" + upper + ")");
};

main(userName)