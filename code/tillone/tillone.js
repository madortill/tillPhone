// question
let nTilloneCurrentQuestion = 0;
let nTilloneCorrectAnswers = 0;
let arrTilloneQuestions = [];
// const
const AMOUNT_OF_TILLONE_QUESTION = DATA.tillone.amountOfQuestions; // how many questions we want out of the array
/* tillone
--------------------------------------------------------------
Description: start tillone app*/
const tillone = () => {
    strCurrentApp = "tillone";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillone`).classList.remove(`hidden`);
    arrTilloneQuestions = shuffle(DATA.tillone.appContent);
    addContentToTilloneQuestion();
}

/* addContentToTilloneQuestion
--------------------------------------------------------------
Description: */
const addContentToTilloneQuestion = () => {
    document.querySelector(`.tilloneReviewContainer`).innerHTML = "";
    document.querySelector(`.tilloneTopBar`).innerHTML = `דיווח ${nTilloneCurrentQuestion + 1}/${AMOUNT_OF_TILLONE_QUESTION}`;
    // add question
    let question = El("div", {cls: `tilloneQuestion`}, arrTilloneQuestions[nTilloneCurrentQuestion].question);
    document.querySelector(`.tilloneContentContainer`).append(question);
    // add answeres     
    let ansContainer = El("div", {cls: `ansContainer`},);
    document.querySelector(`.tilloneContentContainer`).append(ansContainer);
    for(let i = 0; i < arrTilloneQuestions[nTilloneCurrentQuestion].answers.length; i++){
        let answer = El("div", {classes: [`tilloneAns`, `ans${i}`, `ans`] , listeners: {click : onClickTilloneAnswer}},
            El("div", {attributes: {class: `tilloneQuestionIconContainer`}},
                El("img", {attributes: {class: `tilloneQuestionIcon`, src: arrTilloneQuestions[nTilloneCurrentQuestion].icons[i]}} ),
            ),
            arrTilloneQuestions[nTilloneCurrentQuestion].answers[i],
        );
        document.querySelector(`.ansContainer`).append(answer);
    }
}

/* onClickTilloneAnswer
--------------------------------------------------------------
Description: */
const onClickTilloneAnswer = (event) => {
    let correctAns = arrTilloneQuestions[nTilloneCurrentQuestion].correctAns;
    // check if answer is correct
    if(event.currentTarget.classList[1] === String(correctAns)){
        nTilloneCorrectAnswers++;
    }
    // show right container
    document.querySelector(`.tilloneContentContainer`).innerHTML = "";
    // add next button
    document.querySelector(`.tilloneTopBar`).innerHTML = ``;
    let next = El("img", {attributes: {src: `../assets/images/tillone/leftArrow.svg`, class: `tilloneNextArrrow`}});
    document.querySelector(`.tilloneTopBar`).append(next);
    // add review
    let review = El("div", {classes: [`tilloneReview`]}, 
        El("img", {attributes: {src: arrTilloneQuestions[nTilloneCurrentQuestion].icons[correctAns.slice(3)], class: `tilloneAnswerIcon`}}),
        El("div", {cls: `tilloneReviewQuestion`}, arrTilloneQuestions[nTilloneCurrentQuestion].question),
        arrTilloneQuestions[nTilloneCurrentQuestion].answers[correctAns.slice(3)],
        );
    document.querySelector(`.tilloneReviewContainer`).append(review);
    // add explanation
    let explaine = El("div", {classes: [`tilloneExplaine`]},
        El("div", {cls: `tilloneExplainetion`},arrTilloneQuestions[nTilloneCurrentQuestion].explanation),
    );
    document.querySelector(`.tilloneReviewContainer`).append(explaine);
    // send to next question.
    nTilloneCurrentQuestion++;
    if(nTilloneCurrentQuestion < AMOUNT_OF_TILLONE_QUESTION) {
        document.querySelector(`.tilloneNextArrrow`).addEventListener("click", addContentToTilloneQuestion);
    } else {
        document.querySelector(`.tilloneNextArrrow`).addEventListener("click", tilloneEnd);
    }
}

/* tilloneEnd
--------------------------------------------------------------
Description: start tillone app*/
const tilloneEnd = () => {
    console.log("סיימתי");
}
