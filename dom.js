

let printFullName=function(city,state){
    console.log(this.firstName+"  "+this.lastName+" from "+ city+" " +state);
}


let name2={
    firstName:'Sulaiman',
    lastName:'Khan',

    }
    
printFullName.call(name2,"Pune","maharastra");

printFullName.apply(name2,["Pune","Maharashtra"]);
let printName=printFullName.bind(name2,"Goa","maharastra")
console.log(printName);

printName();

let Student = {
    name:'folks',
    age : 25
}

let StudentAge=function(){
    console.log(this.name+" age is " + this.age)
}

let studAge= StudentAge.bind(Student)
console.log(studAge);
studAge();