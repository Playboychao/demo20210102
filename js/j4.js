var home = document.getElementById("home")
var cv=document.getElementById("cv")
var projects=document.getElementById("projects")
var contact=document.getElementById("contact")
var mycv=document.getElementById("mycv")
cv.addEventListener('click',function(){
    window.location.href="cv.html"; 
},false);

home.addEventListener('click',function(){
    window.location.href="index.html"; 
},false);
projects.addEventListener('click',function(){
    window.location.href="projects.html"; 
},false);
contact.addEventListener('click',function(){
    window.location.href="contact.html"; 
},false);