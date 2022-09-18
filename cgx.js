let mutliply=function(x,y)
{
    console.log(x*y);
}

let mutliplyBytwo= mutliply.bind(this,2);

mutliplyBytwo(10);// 20

let mutliplyByboth= mutliply.bind(this,2,20);
mutliplyByboth(4);//40 becoz we are already passing values of x and y as 2,20 resp.

let mutliplyno= mutliply.bind(this,);
mutliplyno(7,2);

// By closure 

let addition=function(a){

    function bb (b)
    {
        console.log(a+b);
    }
    return bb
}

let addbytwo=addition(10);
addbytwo(50);// 60
let addboth=addition(10,80);
addboth(80);// 90

let addno=addition();
addno(60,40);