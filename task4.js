class Resume {
    constructor(_fname, _lname, _age, _email,){
        this.fname = _fname
        this.lname = _lname
        this.age = _age
        this.email = _email
    }
    getName(){
        return `${this.fname} ${this.lname}`
    }
    getAge(){
        return `${this.age}`
    }
    getEmail(){
        return `${this.email}`
    }
    getFullUserData(){
        return `Ad : ${this.fname} \nSoyad : ${this.lname} \nYaş : ${this.age} \nEmail : ${this.email} \nYetkinlik : ${this.isAdult()}`
    }
    isAdult(){
        if (this.age >= 18){
            return `Yetkindir`
        }
    }
}
let user1 = new Resume("Hafiz", "Qafarov", "36", "h.qafar@gmail.com",)
console.log(user1.getFullUserData())