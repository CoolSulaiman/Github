const posts=[
    {title:'post one',body:'This is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'This is post two',createdAt:new Date().getTime()}
];

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


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error)
            {
                resolve()
            }else{
                reject()
            }
    
        },1000)
    }
    )}

 function deletePost(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(posts.length >0){
                    resolve(posts.pop());
    
                }else{
                    reject()
                }
               
            },1000)
        })
    }
    createPost({title:'post three',body:'This is post three',createdAt:new Date().getTime()}).then(()=>{
        getpost();
       deletePost().then(()=>{ 
        getpost();
        deletePost().then(()=>{
            getpost();
            deletePost().then(()=>{
                getpost();
                deletePost().then(
                 getpost()
                ).catch(function(){console.log("Array is Empty")});
})
        })
       });
}).catch(function(){console.log("Array is Empty")});

const Promise1=Promise.resolve("Suliaman");
const Promise2=20;
const Promise5='dwff';


const Promise3=new Promise((resolve,reject)  => setTimeout(resolve,5000,"godbye"));

Promise.all([Promise1,Promise2,Promise3,Promise5]).then(values=>{
console.log(values);
});


function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        resolve("last user active" + new Date().getTime());
    })
}
let newd=new Date();
console.log("Before creating post"+new Date().getTime());


Promise.all([createPost({title:'post five ',body:'This is post five',createdAt:new Date().getTime()})
,updateLastUserActivityTime]).then(value=>{
console.log(` user last active at ${(new Date()-newd)/1000} `);
console.log(value);
});

createPost({title:'post six',body:'This is post six',createdAt:new Date().getTime()}).then(
    ()=>{
        getpost()
        updateLastUserActivityTime().then((val)=>{
            console.log(val);
        })

    }
)
  




