// question
let nTillderCurrentQuestion = 0;
let nTillderCorrectAnswers = 0;
let arrTillderQuestions = [];
// const
const AMOUNT_OF_TILLDER_QUESTION = DATA.tillder.amountOfQuestions; // how many questions we want out of the array
const DELAY_AFTER_QUESTION = 300;

/* tillder
--------------------------------------------------------------
Description: start tillder app*/
const tillder = () => {
    strCurrentApp = "tillder";
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
        El("div", {classes: [`binaryAns`, `true`, `ans`] , listeners: {click : onClickTillderAnswer}},
        El("img", {classes: [`ansPic`], attributes: {src: `../assets/images/tillder/vMark.svg`}},), "נכון"
    ),
        El("div", {classes: [`binaryAns`, `false`, `ans`] , listeners: {click : onClickTillderAnswer}},
        El("img", {classes: [`ansPic`], attributes: {src: `../assets/images/tillder/xMark.svg`}},),"לא נכון"
    ),
    );
    document.querySelector(`.tillderContentContainer`).append(ansContainer);
    document.querySelector(`.tillderQuestionContainer`).addEventListener('swiped', onClickTillderAnswer);
}

/* onClickTillderAnswer    
--------------------------------------------------------------
Description: */
const onClickTillderAnswer = (event) => {
    // remove listeners
    document.querySelector(`.tillderQuestionContainer`).removeEventListener('swiped', onClickTillderAnswer);
    document.querySelector(`.tillderContentContainer .true`).removeEventListener('click', onClickTillderAnswer);
    document.querySelector(`.tillderContentContainer .false`).removeEventListener('click', onClickTillderAnswer);
    // save selected answer
    if(event.currentTarget.classList[0] === "tillderQuestionContainer") {
        // if swipe
        if(event.detail.dir === "left") {
            arrTillderQuestions[nTillderCurrentQuestion].selectedAns = false;
        } else if (event.detail.dir === "right") {
            arrTillderQuestions[nTillderCurrentQuestion].selectedAns = true;
        }
    } else {
        arrTillderQuestions[nTillderCurrentQuestion].selectedAns = event.currentTarget.classList[1];
    }
    // check if answer is correct
    if (String(arrTillderQuestions[nTillderCurrentQuestion].selectedAns) === String(arrTillderQuestions[nTillderCurrentQuestion].correctAns)){
        nTillderCorrectAnswers++;
    }

// add swipe animation
    if (String(arrTillderQuestions[nTillderCurrentQuestion].selectedAns) === `true`){
        document.querySelector(`.tillderQuestionContainer`).classList.add(`slideRight`);
    } else {
        document.querySelector(`.tillderQuestionContainer`).classList.add(`slideLeft`);
    }
    // send to next question.
    nTillderCurrentQuestion++;
    if(nTillderCurrentQuestion < AMOUNT_OF_TILLDER_QUESTION) {
        setTimeout(addContentToQuestion, DELAY_AFTER_QUESTION)
    } else {
        endTillderExer();
    }

}

/* endTillderExer
--------------------------------------------------------------
Description: */
const endTillderExer = () => {
    nTillderCurrentQuestion = 0;
    let endContainer = El("div", {classes: ["tillderEndContainer"]});
    document.querySelector(`.tillder`).append(endContainer);
    let back = El("img",{cls: `sendToHome`, listeners: {click: sendHome}, attributes: {src: `../assets/images/tillder/arrowRight.svg`}})
    document.querySelector(`.tillder`).append(back);
    document.querySelector(`.tillderEndContainer`).classList.add(`fadeIn`)
    let feedback;
    // add feedback accordingly
    if(nTillderCorrectAnswers/AMOUNT_OF_TILLDER_QUESTION >= PASSING_RATE){ // win - add precentegt
        feedback = El("div", {classes: ["tillderFeedbackTitle", "flexCenter"]}, 
        El("div", {cls: `FeedbackTitle`}, `It’s a Match!`),
        El("div", {cls: `Feedback`}, `ידענו שאתם מתאימים!`),
        El("div", {cls: `FeedbackAnswers`},),
        El("div", {cls: `Feedback`}, `קבלו ${calcPercentageWin(nTillderCorrectAnswers, AMOUNT_OF_TILLDER_QUESTION)}% לסוללה שלכם`),
        );
    } else {// loose - remove 5 %
        feedback = El("div", {classes: ["tillderFeedbackTitle", "flexCenter"]}, 
        El("div", {cls: `FeedbackTitle`}, `It’s not a Match!`),
        El("div", {cls: `Feedback`}, `אתם לא מתאימים לתרגול הזה!`),
        El("div", {cls: `FeedbackAnswers`},),
        El("div", {cls: `Feedback`}, `סתם בזבזתם 5%....`),
        );
        updatePercentage(-5);
    }
    document.querySelector(`.tillderEndContainer`).append(feedback);
    // add pics and answers counts
    let pic = El("div", {classes: [`picContainer`, `flexCenter`]},
        El("img", {attributes: {src: `../assets/images/tillder/FeedBackPic.svg`, class: `picTillderEnd`}}),
        El("img", {attributes: {src: `../assets/images/tillder/FeedBackPic.svg`, class: `picTillderEnd`}}),
    );
    document.querySelector(`.FeedbackAnswers`).append(pic);
    let answers =El("div", {classes: [`answerContainer`, `flexCenter`]},
        El("div", {cls: `tillderAnsFeedback`}, `${nTillderCorrectAnswers} תשובות נכונות`),
        El("div", {cls: `tillderAnsFeedback`}, `${AMOUNT_OF_TILLDER_QUESTION - nTillderCorrectAnswers} תשובות שגויות`),
    );
    document.querySelector(`.FeedbackAnswers`).append(answers);

    // add review button
    let review = El("div", {classes: [`reivewButton`, `flexCenter`], listeners: {click: reviewAnswers}},
        El("img", {attributes: {src: `../assets/images/tillder/scrollingIcon.svg`, class: `tillderScroll`}}),
        `לצפייה בתשובות הנכונות`
    );
    document.querySelector(`.tillderEndContainer`).append(review);
}

/* reviewAnswers
--------------------------------------------------------------
Description: start tillder app*/
const reviewAnswers = (event) => {
    document.querySelector(`.tillderEndContainer`).classList.add(`hidden`);
    document.querySelector(`.tillderContentContainer`).innerHTML = "";
    // update current ans
    if(event.currentTarget.classList[1] === "arrowLeft") {
        nTillderCurrentQuestion--;
        if(nTillderCurrentQuestion < 0) {
            nTillderCurrentQuestion += AMOUNT_OF_TILLDER_QUESTION;
        }
    } else if(event.currentTarget.classList[1] === "arrowRight"){
        nTillderCurrentQuestion++;
        if(nTillderCurrentQuestion === AMOUNT_OF_TILLDER_QUESTION) {
            nTillderCurrentQuestion = 0;
        }
    }
    // add question
    let question = El("div", {classes: [`tillderQuestionContainer`, `flexCenter`]}, 
        El("img", {cls: `tillderPic`, attributes: {src: arrTillderQuestions[nTillderCurrentQuestion].src}},),
        El("div", {cls: `tillderQuestion`}, arrTillderQuestions[nTillderCurrentQuestion].question),
    );
    document.querySelector(`.tillderContentContainer`).append(question);
    // add answeres
    let ansContainer = El("div", {classes: [`ansContainer`, `flexCenter`]},
        El("img", {classes: [`arrowPic`, `arrowRight`], attributes: {src: `../assets/images/tillder/arrowRight.svg`}, listeners: {click : reviewAnswers}},),
        El("div", {classes: [`binaryAns`, `true`, `ans`]},
        El("img", {classes: [`ansPic`], attributes: {src: `../assets/images/tillder/vMark.svg`}},), "נכון"
        ),
        El("div", {classes: [`binaryAns`, `false`, `ans`]},
        El("img", {classes: [`ansPic`], attributes: {src: `../assets/images/tillder/xMark.svg`}},),"לא נכון"
        ),
        El("img", {classes: [`arrowPic`, `arrowLeft`], attributes: {src: `../assets/images/tillder/arrowRight.svg`}, listeners: {click : reviewAnswers}},),
    );
    document.querySelector(`.tillderContentContainer`).append(ansContainer);
    document.querySelector(`.tillderContentContainer  .${arrTillderQuestions[nTillderCurrentQuestion].correctAns} .ansPic`).style.borderColor = "#20a830";
    if(String(arrTillderQuestions[nTillderCurrentQuestion].correctAns) !== String(arrTillderQuestions[nTillderCurrentQuestion].selectedAns)){
        document.querySelector(`.${arrTillderQuestions[nTillderCurrentQuestion].selectedAns} .ansPic`).style.borderColor = "#ff0000";
    }

    // // show feedback - correct ans
    // let correctAnswer;
    // if(arrTillderQuestions[nTillderCurrentQuestion].correctAns){
    //     correctAnswer = El("div", {cls: `tillderFeedBackCorrectAns`}, "התשובה הנכונה היא נכון");
    // } else {
    //     correctAnswer = El("div", {cls: `tillderFeedBackCorrectAns`}, "התשובה הנכונה היא לא נכון");
    // }
    // document.querySelector(`.tillderQuestionContainer`).append(correctAnswer);
    // // show user selected answer
    // document.querySelector(`.${arrTillderQuestions[nTillderCurrentQuestion].selectedAns} .ansPic`).style.backgroundColor = "rgb(209, 209, 209)";
    
}
