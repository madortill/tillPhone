// question
let nTillderCurrentQuestion = 0;
let nTillderCorrectAnswers = 0;
let arrTillderQuestions = [];
// const
const AMOUNT_OF_TILLDER_QUESTION = DATA.tillder.amountOfQuestions; // how many questions we want out of the array
const DELAY_AFTER_QUESTION = 3000;

/* tillder
--------------------------------------------------------------
Description: */
const tillder = () => {
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillder`).classList.remove(`hidden`);
    arrTillderQuestions = shuffle(DATA.tillder.appContent);
    addContentToQuestion();
}

/* addContentToQuestion
--------------------------------------------------------------
Description: */
const addContentToQuestion = () => {
    document.querySelector(`.tillderContentContainer`).innerHTML = "";
    // add question
    let question = El("div", {classes: [`tillderQuestionContainer`, `flexCenter`]}, 
        El("img", {cls: `tillderPic`, attributes: {src: arrTillderQuestions[nTillderCurrentQuestion].src}},),
        El("div", {cls: `tillderQuestion`}, arrTillderQuestions[nTillderCurrentQuestion].question),
    );
    document.querySelector(`.tillderContentContainer`).append(question);
    // add answeres
    let ansContainer = El("div", {classes: [`ansContainer`, `flexCenter`]},
        El("div", {classes: [`binaryAns`, `true`, `ans`] , listeners: {click : onClickAnswer}},
            El("img", {classes: [`ansPic`], attributes: {src: `../../assets/images/tillder/vMark.svg`}},), "נכון"
        ),
        El("div", {classes: [`binaryAns`, `false`, `ans`] , listeners: {click : onClickAnswer}}, "לא נכון"),
    );
    document.querySelector(`.tillderContentContainer`).append(ansContainer);
}

/* onClickAnswer    
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // remove listeners
    let arrAns =  document.querySelectorAll(`.ans`);
    for(let i = 0; i < arrAns.length; i++){
        arrAns[i].removeEventListener("click" , onClickAnswer);
    }
    // check if answer is correct
    if(event.currentTarget.classList[1] === String(arrTillderQuestions[nTillderCurrentQuestion].correctAns)){
        console.log("נכון");
        nTillderCorrectAnswers++;
    } else {
        console.log("לא נכון");

    }

    // send to next question.
    nTillderCurrentQuestion++;
    setTimeout(() => {
        if(nTillderCurrentQuestion < AMOUNT_OF_TILLDER_QUESTION) {
            addContentToQuestion();
        } else {
            questionsEnd();
        }
    }, DELAY_AFTER_QUESTION)
}