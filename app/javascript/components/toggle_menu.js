const toggleMenu = () => {
  const dropupToggle = document.querySelector(".dropdown-toggle")
  const dropupMenu = document.querySelector(".dropdown-menu")
  dropupToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropupMenu.classList.toggle("d-block");
  })
};

export { toggleMenu };