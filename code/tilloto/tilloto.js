// question
let nTillotoCorrectAnswers = 0;
let nTillotoWrongAnswers = 0;
let nFlippedCards = 0;
let arrTillotoCards = [];
// const
const AMOUNT_OF_TILLOTO_QUESTION = DATA.tilloto.amountOfQuestions;
/* tilloto
--------------------------------------------------------------
Description: start tilloto app*/
const tilloto = () => {
    strCurrentApp = "tilloto";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tilloto`).classList.remove(`hidden`);
    arrTillotoCards = shuffle(DATA.tilloto.appContent);
    createTillotoContent();
}

/* createTillotoContent
--------------------------------------------------------------
Description: start tillgram app*/
const createTillotoContent = () => {
    let card;
    for(let i = 0; i < arrTillotoCards.length; i++) {
        if(Object.keys(arrTillotoCards[i])[0] === "src"){
            card = El("div", {classes: [`tillotoCard`, `tillotoCard${arrTillotoCards[i].group}`, `flexCenter`], listeners: {click: flipCard}},
                El("img", {attributes: {class: `tillotoCardBack`, src: arrTillotoCards[i].src}}),
                El("img", {attributes: {class: `tillotoCardFront`, src: `../assets/images/tilloto/tillLogo.svg`}}),
            );
        } else {
            card = El("div", {classes: [`tillotoCard`, `tillotoCard${arrTillotoCards[i].group}`, `flexCenter`], listeners: {click: flipCard}},
                El("div", {attributes: {class: `tillotoCardBack`}}, arrTillotoCards[i].definitions),
                El("img", {attributes: {class: `tillotoCardFront`, src: `../assets/images/tilloto/tillLogo.svg`}}),
            );
        }
        document.querySelector(`.tillotoBoard`).append(card)
    }
}

const flipBackCards = () => {
    document.querySelectorAll('.tillotoCard:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })
    nTillotoWrongAnswers++;
    nFlippedCards = 0
}

const flipCard = (event) => {
    let card = event.currentTarget;
    nFlippedCards++ 

    if (nFlippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (nFlippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')
        if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
            nTillotoCorrectAnswers++;
            flippedCards[0].removeEventListener("click", flipCard);
            flippedCards[1].removeEventListener("click", flipCard);
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }

    // If there are no more cards that we can flip, we won the game
    if (nTillotoCorrectAnswers === AMOUNT_OF_TILLOTO_QUESTION) {
        console.log("win");
        setTimeout(sendHome, 1000);
    }
}