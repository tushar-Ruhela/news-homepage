const menuBtn=document.getElementsByClassName("menu")[0];
const menuCloseBtn=document.getElementsByClassName("close-menu")[0];
const backGr=document.getElementsByTagName("body")[0];

menuBtn.addEventListener("click",function(){
    let  menuBar=document.querySelector(".menu-bar-mobile")

    menuBar.style.visibility="visible";
    backGr.style.backgroundColor="hsl(233, 8%, 79%)"
   
    backGr.style.opacity = 0.9; 
})

menuCloseBtn.addEventListener("click",function(){
    let  menuBar=document.querySelector(".menu-bar-mobile")

    menuBar.style.visibility="hidden";
     backGr.style.backgroundColor="white"
    
     backGr.style.opacity = 1; 
})

