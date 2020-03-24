var i = 0;            
var images = [];    


images[0] = "slika5.jpg";
images[1] = "slika1.jpg";
images[2] = "slika2.jpg";
images[3] = "slika3.jpg";


function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
      i++; 
    } else { 
        i = 0;
    }

    setTimeout("changeImg()", 3000);
	
}

window.onload=changeImg();