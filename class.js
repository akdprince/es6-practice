class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = "DIU";

    }
}

const student1 = new Student(1, "Anik");
const student2 = new Student(2, "Sagar");
const student3 = new Student(3, "Rupa");
console.log(student1, student2, student3);

