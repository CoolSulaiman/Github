const posts=[
    {title:'post one',body:'This is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'This is post two',createdAt:new Date().getTime()}
];

console.log(posts.title);
let intervalId=0;

function getpost(){
 intervalId= setInterval(()=>{
    clearInterval(intervalId);
        let output=''; 
        for(let i=0;i<posts.length;i++){

            output+=`<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`;
        }
        document.body.innerHTML=output;
    },1000);

}


function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});

     callback();
    },2000)
}

function create4thPost (post,callback1){

    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback1();
    },3000)
}


createPost({title:'post three',body:'This is post three'},getpost);
create4thPost({title:'post four',body:'This is post four'},getpost);
 // Creating a timestamp
 var timestamp = Date.now();
console.log(timestamp + "<hr>");
  
 // Converting it back to human-readable date and time
 var d = new Date(timestamp);
 console.log(d);

 let timer;
 let count=0;
 function  lastEditedInSecondsAgo (){
    count=0;
    clearInterval(timer);
    timer= setInterval(()=>{
        count++;
        console.log(count);
    },1000);
 }

 lastEditedInSecondsAgo();