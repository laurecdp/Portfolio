const showCards = document.querySelector(".container-cards");
console.log(showCards);

const profileButton = document.querySelector(".icon-card");
console.log(profileButton);

profileButton.addEventListener("click", (event) => {
    showCards.classList.toggle("hidden")
});


const cardResume = () => { };

export { cardResume };