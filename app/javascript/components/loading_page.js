const loadingPage = () => {

  const loginPage = document.getElementById("login-page");
  const userIcon = document.querySelector('.user-icon-bg');
  const gif = document.getElementById('windows-gif');

  userIcon.addEventListener("click", (event) => {
    event.preventDefault();
    setTimeout(function () {
    loginPage.style.display = " none";
      document.querySelector(".container-icons").classList.remove("d-none");
      document.querySelector(".taskbar-horizontal").classList.remove("d-none");
    }, 100);

    /* setTimeout(function () {
      gif.style.display = "d-none";
    }, 1500); */
  })
};

export { loadingPage };