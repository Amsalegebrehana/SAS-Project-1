const firstPic= document.getElementById("picc");
const service1=document.getElementById("service");
const service2=document.getElementById("service2");
const about=document.getElementById("about");
function clicked(){
    
    
    if(firstPic.style.marginTop!="300px"){
        firstPic.style.marginTop="300px";
        service1.style.display="none";
        service2.style.display="block";
    }
    else{
        firstPic.style.marginTop="0px";
    }

    
}

function clicked2(){
    if(about.style.marginTop!="300px"){
        about.style.marginTop="300px";
        service1.style.display="none";
        service2.style.display="block";
    }
    else{
        about.style.marginTop="0px"; 
    }
}
document.addEventListener("DOMContentLoaded", function(event) {

    var div = document.getElementById('mode');
    div.addEventListener('click', function(e){
    
    var li = document.getElementById('card-mode');
    var bgdark = document.getElementById('dark-background');
    
    if (li.className.split(' ')[1] == "card-dark") {
    
    li.classList.remove('card-dark');
    bgdark.classList.remove('bg-dark');
    
    
    }else{
    
    
    
    
    li.classList.add('card-dark');
    bgdark.classList.add('bg-dark');
    
    }
    
    
    });
    
    
    
    });
