const con=document.getElementById("con");
const service1=document.getElementById("service");
const service2=document.getElementById("service2");
const cont=document.getElementById("cont");
function clicked(){
    
    
    if(con.style.marginTop!="300px"){
        con.style.marginTop="300px";
        service1.style.display="none";
        service2.style.display="block";
    }
    else{
        con.style.marginTop="0px";
    }

    
}


function clicked2(){
    
    
    if(cont.style.marginTop!="300px"){
        cont.style.marginTop="300px";
        service1.style.display="none";
        service2.style.display="block";
    }
    else{
        cont.style.marginTop="0px";
    }

    
}