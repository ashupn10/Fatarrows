class student{
    static counter=0;
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.boardmarks=marks;
        student.counter++;
    }
    isEligible(){
        if(this.boardmarks>=40) return 'eligible';
        else return 'not eligible';
    }
}

let person = new student('ashu',18,6394571807,60);
console.log(student.counter);

let person2 = new student('krishna',19,935599594,40);
console.log(student.counter);

let person3 = new student('navin',23,639894305,35);
console.log(student.counter);

let person4 = new student('hardy',44,349920239,66);

let person5=new student('naveen',54,943883222,33);
console.log(student.counter);

console.log(person.isEligible())
console.log(person2.isEligible());
console.log(person3.isEligible());

