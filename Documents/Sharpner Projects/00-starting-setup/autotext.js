window.onload=function(){

    const toogle=document.getElementById('toogle')

    toogle.addEventListener('change',(e)=>{
        document.body.classList.toggle("dark",e.target.checked)
    })

}