// question
let nTillburgerCurrentQuestion = 0;
let nTillburgerCorrectAnswers = 0;
let arrTillburgerQuestions = [];
let arrTillburgerCurrentOptions = [];
let bTillburgerVisited = false;
// const
const TOPPINGS = ["tomato","patty", "lettuce", "onion"];

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
        startTillburger();
    }
    document.querySelectorAll(".tillburgerToppingsContainer .tillburgerTopping").forEach((e, index) => {
        e.style.zIndex = 10 + (document.querySelectorAll(".tillburgerToppingsContainer .tillburgerTopping").length - index);
    });
} 

/* startTillburger
--------------------------------------------------------------
Description: */
const startTillburger = () => {
    document.querySelector("#tillburgerToppingsContainer").innerHTML = "";
    arrTillburgerCurrentOptions = shuffle(arrTillburgerQuestions[nTillburgerCurrentQuestion].options.slice());
    let topingIndex = 0;
    let toppings = shuffle(TOPPINGS)
    arrTillburgerCurrentOptions.forEach(option => {
        if(topingIndex >= TOPPINGS.length){topingIndex = 0}
        let topping = El("div", {classes: ["tillburgerTopping", toppings[topingIndex]]},
            El("div", {cls: "toppingText"}, option)
        );
        document.querySelector("#tillburgerToppingsContainer").append(topping);
        topingIndex++;
    });

    document.querySelector(".topBun").innerHTML = arrTillburgerQuestions[nTillburgerCurrentQuestion].rangeTop;
    document.querySelector(".bottomBun").innerHTML = arrTillburgerQuestions[nTillburgerCurrentQuestion].rangeBottom;
    document.querySelector("#tillburgerExerInstruction").innerHTML = arrTillburgerQuestions[nTillburgerCurrentQuestion].instructions;

    
    new Sortable(tillburgerToppingsContainer, {
        animation: 150,
        onEnd: function (/**Event*/evt) {
            document.querySelectorAll(".tillburgerToppingsContainer .tillburgerTopping").forEach((e, index) => {
                e.style.zIndex = 10 + (document.querySelectorAll(".tillburgerToppingsContainer .tillburgerTopping").length - index);
            })
        },
    });

    document.querySelector(".tillburgerSubmitButton").addEventListener("click", onClickTillburgerSubmit);
}

/* onClickTillburgerSubmit
--------------------------------------------------------------
Description: */
const onClickTillburgerSubmit = () => {
    document.querySelectorAll(".tillburgerToppingsContainer .tillburgerTopping").forEach((e, index) => {
        if (e.children[0].innerHTML === arrTillburgerQuestions[nTillburgerCurrentQuestion].options[index]) {
            console.log(e.classList[1]);
            e.style.backgroundImage = `url("../assets/images/tillburger/${e.classList[1]}Right.svg")`
        } else {
            e.style.backgroundImage = `url("../assets/images/tillburger/${e.classList[1]}Wrong.svg")`
        }
    });
}


