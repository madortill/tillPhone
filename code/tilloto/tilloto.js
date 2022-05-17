// question
let nTillotoCorrectAnswers = 0;
let arrTillotoCards = [];
/* tilloto
--------------------------------------------------------------
Description: start tilloto app*/
const tilloto = () => {
    strCurrentApp = "tilloto";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tilloto`).classList.remove(`hidden`);
    arrTillotoCards = shuffle(DATA.tilloto.appContent[0].src.slice().concat(DATA.tilloto.appContent[0].definitions.slice()));
    createTillotoContent();
}

/* createTillotoContent
--------------------------------------------------------------
Description: start tillgram app*/
const createTillotoContent = () => {
    let card;
    for(let i = 0; i < arrTillotoCards.length; i++) {
        if(arrTillotoCards[i].includes("assets")){
            card = El("div", {classes: [`tillotoCard`, `tillotoCard${i}`, `flexCenter`], listeners: {click: flipCard}},
                El("img", {attributes: {class: `tillotoCardBack`, src: arrTillotoCards[i]}}),
                El("img", {attributes: {class: `tillotoCardFront`, src: `../assets/images/tilloto/tillLogo.svg`}}),
            );
        } else {
            card = El("div", {classes: [`tillotoCard`, `tillotoCard${i}`, `flexCenter`], listeners: {click: flipCard}},
                El("div", {attributes: {class: `tillotoCardBack`}}, arrTillotoCards[i]),
                El("img", {attributes: {class: `tillotoCardFront`, src: `../assets/images/tilloto/tillLogo.svg`}}),
            );
        }
        document.querySelector(`.tillotoBoard`).append(card)
    }
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}

const flipCard = (event) => {
    let card = event.currenttarget;
    // state.flippedCards++
    // state.totalFlips++

    // if (!state.gameStarted) {
    //     startGame()
    // }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }

    // If there are no more cards that we can flip, we won the game
    if (!document.querySelectorAll('.tillotoCard:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `

            clearInterval(state.loop)
        }, 1000)
    }
}