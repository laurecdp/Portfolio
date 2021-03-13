const cardResume = () => {

  const showCards = document.querySelector("");
  showCards.forEach(element => {
    element.addEventListener("click", (event) => {
      document.querySelector("").classList.toggle("hidden")
    })
  })

}

export { cardResume }