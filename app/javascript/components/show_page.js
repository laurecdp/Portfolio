const showPage = () => { 
  const showCards = document.querySelector(".container-cards");
  const showProjects = document.querySelector(".container-projects");

  const buttonProfile = document.getElementById("icon-profile");

  buttonProfile.addEventListener("click", (event) => {
    event.preventDefault();
    showCards.classList.toggle("hidden");
  })

  const buttonProjets = document.getElementById("icon-projets");

  buttonProjets.addEventListener("click", (event) => {
    event.preventDefault();
    showProjects.classList.toggle("hidden");
  })

};

export { showPage };