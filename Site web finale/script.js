// Fonction pour activer le lien du menu correspondant à la page actuelle
const links = document.querySelectorAll(".navbar-list li a");

links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
