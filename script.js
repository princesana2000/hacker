fun=()=>{
    alert("security alert. Got access to your personal information ")}

but.addEventListener('click',function(){
but.innerHTML="Tu to ullu ban gaya ,Ab tera kya hoga kalia";
but.style.background= 'red';
setInterval(fun,10);
})