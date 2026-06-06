const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light");

const icon = themeToggle.querySelector("i");

if(document.body.classList.contains("light")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}
});

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});
});

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

alert("Thank you for contacting me! Your message has been received.");

form.reset();
});