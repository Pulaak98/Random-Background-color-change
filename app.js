const colors = [`green`, `orange`, `rgb(97,199,299)`, `blue`];

const btn = document.querySelector(`.btn`);
const color = document.querySelector(`#color`);

btn.addEventListener(`click`, () => {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}