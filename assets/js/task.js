const firstPic= document.getElementById("picc");
const service1=document.getElementById("service");
const expect= document.getElementById("epect");
const seLink=document.getElementById("seelink");
const service2=document.getElementById("service2");
const about=document.getElementById("about");


function detail(){
    if(expect.style.display == 'none'){
        expect.style.display = 'block';
    }
    else{
        expect.style.display = 'none';
    }
}
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
};

