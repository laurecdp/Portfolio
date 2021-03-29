const loadingPage = () => {

  const loginPage = document.getElementById("login-page");
  const userIcon = document.querySelector('.user-icon-bg');
  const gif = document.getElementById('windows-gif');

  userIcon.addEventListener("click", (event) => {
    event.preventDefault();
    setTimeout(function () {
    loginPage.style.display = " none";
    }, 100);

    setTimeout(function () {
      gif.style.display = "d-none";
    }, 1500);

    document.querySelector(".main").classList.remove("d-none");
    document.querySelector(".container-icons").classList.remove("d-none");
    document.querySelector(".taskbar-horizontal").classList.remove("d-none");

  })

    //Toggle Menu
    const startUpMenu = document.getElementById("startup-menu");
    document.getElementById("startup-button").classList.toggle("active");

      if (startUpMenu.style.left === "-400px") {
        return (startUpMenu.style.left = "0");
      } else {
        startUpMenu.style.left = "-400px";
      }
  
};

export { loadingPage };