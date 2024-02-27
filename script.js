$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    responsiveClass:true,
    responsive:{ 
        0:{
            items:1,
            nav:true,
        },
        1400:{
            items:1,
            nav:true
        }
    }
})
function onScreen(elem, allowElemBehind = false, allowElemAhead = false) {
    const scrollDist = document.documentElement.scrollTop;
    const elemOffset = window.scrollY + elem.getBoundingClientRect().top; 

    if (!allowElemBehind && !(elemOffset + elem.offsetHeight > scrollDist))
        return false;
    
    if (!allowElemAhead && !(scrollDist + window.innerHeight > elemOffset))
        return false;

    return true;
}
function visibleCard(element, element2){
    element.classList.add("active");
    element2.classList.remove("active");
    switch(element.id){
        case 'websiteCardTitle':
            document.querySelector('.websiteCards').classList.remove('hidden');
            document.querySelector('.projectCards').classList.add('hidden');
            break;
        case 'projectCardTitle':
            document.querySelector('.projectCards').classList.remove('hidden');
            document.querySelector('.websiteCards').classList.add('hidden'); 
            break;
        default:
            Console.log('error');
    }
}
function changePrompt(element, element2){
    element2.removeClass("hidden")
    element.addClass('hidden');
    textPrompt = $('.typePromptText');
    cursorPointer = $('.cursor_pointer');
    var className = $('.element').attr('class');
    if(element.hasClass('linuxButton')){
        textPrompt.text('C:\\Users\\PellegrinoPiccolo>');
        cursorPointer.removeClass('linuxCursor')
        cursorPointer.addClass('windowsCursor')
    }else{
        textPrompt.text('[PellegrinoPiccolo]:-$')
        cursorPointer.removeClass('windowsCursor')
        cursorPointer.addClass('linuxCursor')
    }
}
var navPos = document.getElementById("nav").getBoundingClientRect().top;
document.addEventListener("DOMContentLoaded", () => {
    if(onScreen(document.getElementById("sectionHome"))){
        document.getElementById("HomeLink").classList.add("active");
    }
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > (navPos + 100) || document.documentElement.scrollTop > (navPos + 100)) {
        document.getElementById("nav").classList.add("navScroll")
    } else {
        document.getElementById("nav").classList.remove("navScroll")
    }
    if(onScreen(document.getElementById("sectionHome"))){
        document.getElementById("HomeLink").classList.add("active");
    }else{
        document.getElementById("HomeLink").classList.remove("active");
    }
    if(onScreen(document.getElementById("sectionAbout"))){
        document.getElementById("AboutLink").classList.add("active");
    }else{
        document.getElementById("AboutLink").classList.remove("active");
    }
    if(onScreen(document.getElementById("websiteCardTitle"))){
        document.getElementById("BlogLink").classList.add("active");
    }else{
        document.getElementById("BlogLink").classList.remove("active");
    }
    if(onScreen(document.getElementById("contactPageLink"))){
        document.getElementById("ContactLink").classList.add("active");
    }else{
        document.getElementById("ContactLink").classList.remove("active");
    }
}