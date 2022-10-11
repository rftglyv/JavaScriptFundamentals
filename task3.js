customers=[
    {
        name:"John",
        age:30,
        city:"New York"
    },
    {
        name:"Dave",
        age:40,
        city:"Los Angeles"
    },
    {
        name:"Mary",
        age:50,
        city:"Miami"
    },
    {
        name:"Anna",
        age:30,
        city:"Washington"
    }
];

function sumOfAges()
{
    let sum = 0
    for(i in customers){
        sum+= customers[i].age
    }
    console.log(`İşçilərin yaşlarının cəmi : ${sum}`)
}

function customerWhichNameStartsWithA(str) {
    if (str.match(/[A]/g)){
    const index = customers.map(customers => customers.name).indexOf(str);
    console.log(`Müştəri adı : ${customers[index].name} \nYaşı : ${customers[index].age} \nŞəhəri : ${customers[index].city}`);

    }  
}

var namesOfCustomersArr = []
function namesOfCustomers(){
    namesOfCustomersArr = customers.map(customers => {
       return customers.name
    })
    console.log(namesOfCustomersArr.toString())
}

function newEntry(name, age, city){
    var customer = {};
    customer.name = name;
    customer.age = age;
    customer.city = city;
    customers.push(customer);
}

namesOfCustomers()
sumOfAges()
namesOfCustomersArr.forEach(customerWhichNameStartsWithA)
newEntry("İlkin", 24, "Baku")
console.table(customers)