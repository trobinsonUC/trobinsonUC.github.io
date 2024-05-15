let navLinks = document.querySelector(".nav-link");
let courseFinder = document.querySelector(".course-finder");

navLinks.addEventListener("click", function(){
  let contentSections = document.getElementById("main").children;

  for (let index = 0; index < contentSections.length; index++) {
    const element = contentSections[index];
    element.style.display = "none";
  }

});

courseFinder.addEventListener("click", function(){
  document.getElementById("course-content").style.display = "block";
});
