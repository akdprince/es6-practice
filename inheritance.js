class Parent{
    constructor(){
        this.fatherName = "Adhir Chandra Das";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const name1 = new Child("Jhinuk Rani Das");
const name2 = new Child("Anik Kumar Das");
const name3 = new Child("Ananna Rani Das");

console.log(name1, name2, name3);