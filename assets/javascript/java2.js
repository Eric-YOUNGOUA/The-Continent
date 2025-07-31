document.addEventListener("DOMContentLoaded", () => {
  // Form management 
  const form = document.querySelector("form");
  const responses = [];

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;

      // Q1
      const q1 = form.querySelector('input[name="answer1"]:checked');
      if (q1 && q1.value === "10") score++;

      // Q2
      const q2Answers = Array.from(form.querySelectorAll('input[name="answer2"]:checked')).map(el => el.value);
      if (q2Answers.includes("Nigeria")) score++;
      if (q2Answers.includes("Gabon")) score++;

      // Q3
      const q3 = form.querySelector('input[name="answer3"]:checked');
      if (q3 && q3.value === "Far North") score++;

      // Q4
      const q4 = form.querySelector('input[name="answer4"]:checked');
      if (q4 && selectedCeleb && q4.value === selectedCeleb.name) score++; 

      
      // Récupération des infos utilisateur
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const siteRating = document.getElementById("rating").value;
      const comment = document.getElementById("comment").value;

       // Stockage dans l'array
      responses.push({
           firstName,
           lastName,
           email,
           siteRating,
           comment,
           quizScore: score
      });


      console.log("Saved answers :", responses);
      alert("Your score is " + score + " on 5");
    });
  }

  // Random displaying of a celebrity
  const showBtn = document.getElementById("showCeleb");
  const img = document.getElementById("randomCeleb");
  const celebs = [
    { name: "Francis Ngannou", src: "./assets/images/Ngannou.jpg" },
    { name: "Samuel Eto'o", src: "./assets/images/Eto'o.jpg" },
    { name: "ERIC YOUNG'Z", src: "./assets/images/ma_photo.jpg" },
    { name: "Maurice Kamto", src: "./assets/images/Kamto.jpg" },
    { name: "Tayc", src: "./assets/images/Tayc.jpg" },
    { name: "Joel Embiid", src: "./assets/images/Embiid.jpg" },
  ];

  let selectedCeleb = null;

  if (showBtn && img) {
    showBtn.addEventListener("click", () => {
      selectedCeleb = celebs[Math.floor(Math.random() * celebs.length)];
      img.src = selectedCeleb.src;
      img.alt = `Image de ${selectedCeleb.name}`;
      img.style.display = "block";
      img.style.width = "300px";
      img.style.height = "200px";
    });
  }
});
