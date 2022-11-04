window.onload=function(){  

const btn=document.getElementById('btn')
const nav=document.getElementById('nav')
const bton=document.getElementById("bton")
const container=document.getElementById('container')

btn.addEventListener("click",()=>{
	nav.classList.toggle("active")
	btn.classList.toggle("active")

})




bton.addEventListener('click',()=>{
	createNotification()
})

function createNotification(){
	const notif=document.createElement('div')
	notif.classList.add('toast')
	notif.innerText="This Challenge is crazy"

	container.appendChild(notif)

	setTimeout(() => {
		notif.remove()
	}, 3000);

}
}

