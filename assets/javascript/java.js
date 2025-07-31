document.addEventListener("DOMContentLoaded", () => {
  //Quizz's openng
  document.getElementById("quizzButton").addEventListener("click", function () {
    window.location.href = "./quizz.html";
  });
});

// Changement of the Main title's color
  const title = document.querySelector("h1");
  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.color = "#2a9d8f";
    });
    title.addEventListener("mouseout", () => {
      title.style.color = "";
    });
  }

