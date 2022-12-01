
// // Normal Function
// let getA = function(a){
//     return a;
// }
// console.log(getA(3));

// // Fat arrow functions

// let getfatA = a => a;
// console.log(getfatA(4));

// // writing full syntax of fatarrow function

// let getfullA = (a) => {return a};
// console.log(getfullA(5));

// // multiply function using fat arrow function

// let mult=(a,b)=> a*b;
// console.log(mult(2,6));

// // set time out without using this

// var x =  function(){
//     let that=this;
//     this.value=0;
//     setTimeout(function (){
//         that.value++;
//         console.log(that.value);
//     }, 1000);

// }
// var xx=new x();

// // set timeout using this keyword


// var x =  function(){
//     this.value=0;
//     setTimeout(()=>{
//         this.value++;
//         console.log(this.value);
//     }, 1000);
// }
// var xx=new x();

class student{
    static counter=0;
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.boardmarks=marks;
        student.counter++;
    }
    isEligibleforPlacements(minmarks){
        return (minage)=>{
            return minage<this.age&&minmarks<=this.boardmarks;
        }
    }
}


let person = new student('ashu',18,6394571807,60);
let person2 = new student('krishna',19,935599594,40);

let person3 = new student('navin',23,639894305,35);

let person4 = new student('hardy',44,349920239,66);

let person5=new student('naveen',54,943883222,33);

console.log(person.isEligibleforPlacements(30)(19));
console.log(person2.isEligibleforPlacements(30)(19));
console.log(person3.isEligibleforPlacements(30)(19));
console.log(person4.isEligibleforPlacements(30)(19));
console.log(person5.isEligibleforPlacements(30)(19));



