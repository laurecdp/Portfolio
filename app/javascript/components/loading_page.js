const loadingPage = () => {

  function submitPassword() {
    var loginPage = document.getElementById("login-page");
    var submit = document.getElementById("submit");

    setTimeout(function () {
      submit.style.backgroundColor = "green";
    }, 1100);

    setTimeout(function () {
      loginPage.style.display = "none";
    }, 2000);
  }

  document.addEventListener("keydown", formValidation);

  function formValidation(e) {
    if (13 == e.keyCode) {
      var loginPage = document.getElementById("login-page");
      var homePage = document.getElementById("home-page")
      var submitBtn = document.getElementById("submit");
      var submitForm = document.getElementById("input-container");

      setTimeout(function () {
        submitBtn.style.backgroundColor = "green";
      }, 1100);

      setTimeout(function () {
        loginPage.style.display = "none";
      }, 2000);
    }
  }

  //Toggle Menu
  function toggleMenu() {
    var startUpMenu = document.getElementById("startup-menu");
    document.getElementById("startup-button").classList.toggle("active");

    if (startUpMenu.style.left === "-400px") {
      return (startUpMenu.style.left = "0");
    } else {
      startUpMenu.style.left = "-400px";
    }
  }


};

export { loadingPage };