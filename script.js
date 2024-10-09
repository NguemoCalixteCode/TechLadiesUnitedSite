document.addEventListener("DOMContentLoaded", function () {
  // Effet de défilement fluide pour la navigation
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetID = this.getAttribute("href");
      const targetSection = document.querySelector(targetID);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Animation d'apparition lors du défilement
  const sections = document.querySelectorAll(".fade-in-section");

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Validation du formulaire et message de confirmation
  const form = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      formResponse.innerHTML =
        "<div class='alert alert-success'>Merci, " +
        name +
        ". Votre message a été envoyé avec succès !</div>";
      form.reset(); // Réinitialiser le formulaire
    } else {
      formResponse.innerHTML =
        "<div class='alert alert-danger'>Veuillez remplir tous les champs du formulaire.</div>";
    }
  });
});
