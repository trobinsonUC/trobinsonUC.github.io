let navLinks = document.querySelectorAll(".nav-link");
let courseFinder = document.querySelector(".course-finder");

for (let i = 0; i < navLinks.length; i++) {
  const element = navLinks[i];

  element.addEventListener("click", function () {
    let contentSections = document.getElementById("main").children;

    for (let i = 0; i < contentSections.length; i++) {
      const element = contentSections[i];
      element.style.display = "none";
    }

  });

}



courseFinder.addEventListener("click", function(){
  document.getElementById("course-content").style.display = "block";
});
