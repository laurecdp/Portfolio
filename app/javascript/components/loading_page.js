const loadingPage = () => {
  const windows = document.querySelector(".container-global");
  windows.insertAdjacentHTML('afterbegin', "<div class='loading-page'><h2 class= 'btn-greeting'>Enter</h2><div class='spinner icon-spinner' aria-hidden='true'></div></div>");
  const loadingPage = document.querySelector(".loading-page");
  const containerIcons = document.querySelector(".container-icons");
  const navbar = document.querySelector(".navbar");
  const enterButton = document.querySelector(".btn-greeting");
  enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    loadingPage.classList.add("d-none");
    containerIcons.classList.remove('d-none');
    navbar.classList.remove('d-none');
  })

};

export { loadingPage };