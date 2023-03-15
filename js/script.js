var currentImg = 1;
slideShow(currentImg);

function setSlide(num){
    slideShow(currentImg += num);
}

function slideShow(num){
    var i;
    var slides = document.getElementsByClassName('slide_img');

    if(num > slides.length){
        currentImg = 1
    } 
    if(num < 1){
        currentImg = slides.length
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[currentImg - 1].style.display = 'block';
}