function printNumbersFrom1To100(num){
    // 1-100 arası ədədləri ekrana çap edin
    if(num > 0)
    {
         printNumbersFrom1To100(num-1)
         console.log(num)
     }
}
printNumbersFrom1To100(100)