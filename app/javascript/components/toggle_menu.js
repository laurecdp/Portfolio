const toggleMenu = () => {

  const dropupToggle = document.querySelector(".dropdown-toggle")
  const windowsIcon = document.querySelector(".fa-windows")
  const dropupMenu = document.querySelector(".dropdown-menu")
  dropupToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropupMenu.classList.toggle("active");
  }) 


};

export { toggleMenu };