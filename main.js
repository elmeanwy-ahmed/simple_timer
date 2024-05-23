var  sec=0
var min=0
var x
let time=document.getElementById('time')
let start=document.getElementById('start')
let reset=document.getElementById('reset')
let stopp=document.getElementById('stop')
start.addEventListener('click',()=>{
    
    x=window.setInterval(()=>{
        time.innerHTML='<h1 class="timer" >timer | '+min+' : '+ sec+'</h1>'
        if(sec>58){
            min++
            sec=0
        }else{
            sec++
            
        }

    },1000)
    start.setAttribute('disabled','')
})
reset.addEventListener('click',()=>{
    sec=0
    min=0
})
stopp.addEventListener('click',()=>{
    window.clearInterval(x)
    start.removeAttribute('disabled','')
})
