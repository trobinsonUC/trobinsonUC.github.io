let navLinks = document.querySelector(".nav-link");
let courseFinder = document.querySelector(".course-finder");

navLinks.addEventListener("click", function(){
  document.getElementById("main").children.style.display = "none";
});

courseFinder.addEventListener("click", function(){
  document.getElementById('course-content').style.display = "block";
});
