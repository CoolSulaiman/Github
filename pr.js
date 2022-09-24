//-------------->>>>>>>>>>>> Promise function  <<<<<<<<<<<<----------------------------




// console.log("P-->Ticket 1");
// console.log("P-->Ticket 2");


// const WifeBringinfTicket=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Ticket 3");
//     }, 2000);
// }) 



// const getPopcorn=WifeBringinfTicket.then((t)=>{
//                  console.log("Wife :  i have the tickets");

//                 console.log("Husband: Let go");
//                 console.log("Wife : No i am hungry");

//                 return new Promise((resolve,reject)=> {
//                     resolve(`${t} popcorn`)})
// })
            
// const getButter=getPopcorn.then((t)=>{
    
//     console.log("Husband: I got some popcorn");
//     console.log("Wife : I need butter on my popcorn");

//     return new Promise((resolve,reject)=> {
//         resolve(`${t} butter`)})
// })

// const getColdDrink=getButter.then((t)=>{
//     console.log("Husband : I got butter");

//     console.log("Wife : I need cold drink");
// return new Promise((resolve,reject)=>{
//             resolve(`${t} cold drink`)
// })
// })

// getColdDrink.then((t)=>{
//     console.log(t);
// })


// console.log("P-->Ticket 4");
// console.log("P-->Ticket 5");




// console.log("P-->Ticket 1");
// console.log("P-->Ticket 2");




//-------------->>>>>>>>>>>> async function  <<<<<<<<<<<<----------------------------




// const cinema= async()=>{

// const WifeBringinfTicket=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("tickets ");
//     }, 2000);
// }) 

// const getPopcorn=new Promise((resolve,reject)=>{resolve('popcorn')})
// const getButter=new Promise((resolve,reject)=>{resolve('butter')})
// const getColdDrink=new Promise((resolve,reject)=>{resolve('coldDrink')})



// let ticket1= await WifeBringinfTicket;

// console.log(`Wife :  i have the ${ticket1}`);
// console.log("Husband: Let go");
// console.log("Wife : No i am hungry");

// let popcorn1=await getPopcorn; 

// console.log(`Husband: I got some ${popcorn1}`);
// console.log("Wife : I need butter on my popcorn");

// let butter=await getButter;

// console.log("Husband : I got butter");
// console.log("Wife : I need cold drink");

// let cold1=await getColdDrink;

// console.log("Husband : Anything else madam");
// console.log("Wife : haha letz Go");

// return ticket1
// }

// cinema().then((m)=>console.log(m))


// console.log("P-->Ticket 4");
// console.log("P-->Ticket 5");


//-------------->>>>> async function of createpost   and  deletepost <<<<<<<----------------------------


// const posts=[
//     {title:'post one',body:'This is post one',createdAt:new Date().getTime()},
//     {title:'post two',body:'This is post two',createdAt:new Date().getTime()}
// ];

// function getPost (){
//     setTimeout(() => {

//     let output=''; 

//     for(let i=0;i<posts.length;i++)
//     {
        
//         output+=`<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`
//     }
//     document.body.innerHTML=output;
// }, 2000);

// }

// async  function infinity(){

//     function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({...post,createdAt:new Date().getTime()});
//             resolve('created')
//         },1000)
//     }
//     )}
//     function deletePost(){
//                 return new Promise((resolve,reject)=>{
//                     setTimeout(()=>{
//                         posts.pop();
//                         resolve('deleted');
//                     },1000)
//                 })
//             }

//     let createpost =await createPost({title:'post three',body:'This is post three',createdAt:new Date().getTime()})
//     getPost();
//     console.log(`Post is ${createpost}`)

//     let  deletePost1=await deletePost();
//     console.log(`Post is ${deletePost1}`)

//     getPost();
//     let createpost2 =await createPost({title:'post four',body:'This is post four',createdAt:new Date().getTime()})
//     getPost();
//     console.log(`Post is ${createpost}`)
//     let createpost4 =await createPost({title:'post five',body:'This is post five',createdAt:new Date().getTime()})
//     console.log(`Post is ${createpost4}`)

//     let createpost3 =await createPost({title:'post six',body:'This is post six',createdAt:new Date().getTime()})
//     console.log(`Post is ${createpost3}`)
//     console.log("Finally  done")

//     getPost();





// return createpost2;

// }

// infinity().then((m)=>{console.log(m);
// });


// I wolud give the same example of manali
// 1> i want to buy car 
// 2> i want to plan trip 
// 3> i want to go to mall road 
// 4> i want to do paragliding and river rafting

