/*function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("time is up");
        }
    }
    tick();
}*/

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides= document.getElementsByClassName("mySlides");
    for (i= 0; i <slides.length; i++){
        slides [i].style.display= "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex =1}
    slides[slideIndex -1].style.display ="block";
    setTimeout(showSlides, 2000); //slides rotate from this instruction, can make it faster with smaller number because measured in milliseconds
}