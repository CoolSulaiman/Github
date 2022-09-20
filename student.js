class student{
    static count=0;  //static variable to call


    constructor(name,age,phoneNo,boardMarks,)
    {
       // student.count()
        this.name=name;
        this.age=age;
        this.phoneNo=phoneNo;
        this.boardMarks=boardMarks;
        student.countStudent();


    }

     eligiblity ()
    {
        if(this.boardMarks>40){
            console.log("Eligible for college");
                }else{
                    console.log("Not eligible");
                }
    }
    //static count(){
    //    student.counter = (student.counter || 0) + 1;
     //   return;

 //   }

    static countStudent(){
        return(student.count++);     //this is how u access static variable

    }


    elibileForPlace(MinplacementAge){

            return (MinMarks)=>{
                if(this.boardMarks>MinMarks && this.age>MinplacementAge)
                {
                    console.log(this.name +" is eligible for placements")
                }else{
                    console.log(this.name +" is not eligible for placements")

                }
            }
    }
    

}

let Student1= new student("john",25,90289881,37);
let Student2= new student("DOM",25,12345678,50);

let Student3= new student("ROCK",25,45639276,40);

let Student4= new student("SAMUEL",25,89304856,77);

let Student5= new student("DANY",30,26456936,95);
//console.log(student.counter);  //1


Student1.eligiblity();
console.log(student.countStudent());

Student1.elibileForPlace(18)(40);
Student2.elibileForPlace(18)(40);
Student3.elibileForPlace(18)(40);
Student4.elibileForPlace(18)(40);
Student5.elibileForPlace(18)(40);

