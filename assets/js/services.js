const con=document.getElementById("con");
const service1=document.getElementById("service");
// const service2=document.getElementById("service2");
const cont=document.getElementById("cont");
function clicked(){
    
    
    if(con.style.marginTop!="400px" ){
        con.style.marginTop="400px";
        // service1.style.display="none";
        // service2.style.display="block";
    }
    else{
        con.style.marginTop="0px";
    }

    
}

function clicked2(){
    
    
    if(cont.style.marginTop!="400px"){
        cont.style.marginTop="400px";
        // service1.style.display="none";
        // service2.style.display="block";
    }
    else{
        cont.style.marginTop="0px";
    }

    
}

/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
