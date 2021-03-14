const showPage = () => { 

  window.addEventListener("load", (event) => {
    
  }) 
  
  const showCards = document.querySelector(".container-cards");
  const showProjects = document.querySelector(".container-projects");
  const buttonProfile = document.getElementById("icon-profile");
  const buttonProjets = document.getElementById("icon-projets");

  buttonProfile.addEventListener("click", (event) => {
    event.preventDefault();
    showCards.classList.toggle("hidden");
    showProjects.classList.add("d-none");
  })

  buttonProjets.addEventListener("click", (event) => {
    event.preventDefault();
    showProjects.classList.toggle("d-none");
    showCards.classList.add("hidden");
  })

};

export { showPage };