// question
let nTillburgerCurrentQuestion = 0;
let nTillburgerCorrectAnswers = 0;
let arrTillburgerQuestions = [];
let bTillburgerVisited = false;
// const
const TOPPINGS = ["tomato","lettuce", "patty", "onion"];

/* tillburger
--------------------------------------------------------------
Description: start tillburger app*/
var tillburger = () => {
    strCurrentApp = "tillburger";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillburger`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTillburgerVisited) {
        bTillburgerVisited = true;
        arrTillburgerQuestions = shuffle(DATA.tillburger.appContent);
    }
    startTillburger();
    document.querySelectorAll(".tillburgerToppingsContainer .item").forEach((e, index) => {
        e.style.zIndex = 10 + (document.querySelectorAll(".tillburgerToppingsContainer .item").length - index)
        e.style.marginBottom = `-${3 * arrTillburgerQuestions[nTillburgerCurrentQuestion].options.length}px`;
    })
}

/* startTillburger
--------------------------------------------------------------
Description: */
const startTillburger = () => {
    new Sortable(tillburgerToppingsContainer, {
        animation: 150,
        onEnd: function (/**Event*/evt) {
            document.querySelectorAll(".tillburgerToppingsContainer .item").forEach((e, index) => {
                e.style.zIndex = 10 + (document.querySelectorAll(".tillburgerToppingsContainer .item").length - index)
            })
        },
    });
}


