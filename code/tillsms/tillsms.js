// question
let ntillsmsCorrectAnswers = 0;
let strTillsmsCorrectAnswer = [];
let ntillsmsCurrentQuestion;
let arrtillsmsQuestions = DATA.tillsms.appContent;
let pageNum = 1;
let tillsmsCurrentExer;
let tillsmsCurrentAns
let objTillsmsCurrentQuestion;
let nTillsmsAmountOfExers = arrtillsmsQuestions.length;

let amountOfTillsmsQuestions = 0;

/* tillsms
--------------------------------------------------------------
Description: start tillsms app*/
const tillsms = () => {
    strCurrentApp = "tillsms";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillsms`).classList.remove(`hidden`);
    createtillsmsContent();
}

/* createtillsmsContent
--------------------------------------------------------------
Description: start tillsms app*/
const createtillsmsContent = () => {
    let navBar = El("div", {classes: ["tillsmsTopNav", "centerX"]},
        El("img",{ attributes: {class: "tillsmsCameraIcon", src: "../assets/images/tillsms/gift.svg"}}),
        El("div", {classes: ["tillsmsExercise", "tillsmsCategory1", "tillsmsCategory"], listeners: {click: switchCategory}}, "תרגולים",
            El("div", {cls: "tillsmsExerciseCounter"}, nTillsmsAmountOfExers)
        ),
        El("div", {classes: ["tillsmsInstractions", "tillsmsCategory2", "tillsmsCategory"], listeners: {click: switchCategory}}, "הוראות"),
        El("div", {classes: ["tillsmsProgress", "tillsmsCategory3", "tillsmsCategory"], listeners: {click: switchCategory}}, "התקדמות"),
    );
    document.querySelector(".tillsmsMainPageHeader").append(navBar);
    document.querySelector(".tillsmsExercise").classList.add("tillsmsChoosenCategory");
    // create exer page
    for(exer of Object.keys(arrtillsmsQuestions)) {
        let exerContainer = El("div", {classes: ["tillsmsExerciseContainer", `tillsmsExer${exer}`], listeners: {click: startExer}},
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[exer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[exer].title),
                El("div", {cls: "tillsmsExerStatus"}, `סטטוס: ${arrtillsmsQuestions[exer].status}`),
            ),
            El("div", {cls: "tillsmsExerCounterContainer"},
                El("div", {cls: "tillsmsExerCounter"}, `0/${arrtillsmsQuestions[exer].content.length}`),
                El("div", {cls: "tillsmsExerAmount"}, arrtillsmsQuestions[exer].content.length),
            ),
            
        );
        amountOfTillsmsQuestions += arrtillsmsQuestions[exer].content.length;
        document.querySelector(".tillsmsPageContent").append(exerContainer);
        arrtillsmsQuestions[exer].status = "בביצוע";
    }
    document.querySelectorAll(".tillsmsContainer").forEach(elem => {
        elem.addEventListener("swiped", switchCategory);
    })
}

/* switchCategory
--------------------------------------------------------------
Description: */
const switchCategory = (event) => {
    document.querySelector(`.tillsmsCategory${pageNum}`).classList.remove("tillsmsChoosenCategory");
    document.querySelector(`.tillsmsContainer${pageNum}`).classList.add("hidden");
    if(event.type === "click") {
        pageNum = Number(event.currentTarget.classList[1].slice(15));
    } else {
        pageNum = Number(event.currentTarget.classList[1].slice(16));
        if(event.detail.dir === "right" && pageNum < 3) {
            pageNum++;
        } else if (event.detail.dir === "left" && pageNum > 1) {
            pageNum--;
        };
    }
    document.querySelector(`.tillsmsCategory${pageNum}`).classList.add("tillsmsChoosenCategory");
    document.querySelector(`.tillsmsContainer${pageNum}`).classList.remove("hidden");
}

/* startExer
--------------------------------------------------------------
Description: */
const startExer = (event) => {
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="none";
    document.querySelector(`.tillsmsAnswerKeybord`).classList.remove("hidden")
    // show exer page and save exer index of exer and question
    document.querySelector(`.tillsmsMainPage`).classList.add("hidden");
    document.querySelector(`.tillsmsExerPage`).classList.remove("hidden");
    tillsmsCurrentExer = Number(event.currentTarget.classList[1].slice(11));
    ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion;
    // create header and stsrt question
    let exerHeader = El("div",{cls: "tillsmsExerheaderContainer"},
        El("div",{cls: "tillsmsExerHeader"},
        El("img",{attributes: {class: "tillsmsExerArrow",src: "../assets/images/tillsms/arrowRight.svg"}, listeners: {"click": () => {
            document.querySelector(`.tillsmsMainPage`).classList.remove("hidden");
            document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerStatus`).innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
            let header = document.querySelector(`.tillsmsExerheaderContainer`)
            document.querySelector(`.tillsmsExerPage`).removeChild(header);
            document.querySelector(`.tillsmsExerPage`).classList.add("hidden");
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.add("hidden");
            document.querySelectorAll(".animate__pulse").forEach(el => {
                el.classList.remove("animate__pulse");
            })
        }}}),
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[tillsmsCurrentExer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[tillsmsCurrentExer].title),
                El("div", {cls: "tillsmsExerStatus"}, `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`),
            ),
            El("div", {cls: "tillsmsExerCounter"}, `${ntillsmsCurrentQuestion}/${arrtillsmsQuestions[tillsmsCurrentExer].content.length}`),
        )
    );
    document.querySelector(".tillsmsExerPage").append(exerHeader);
    startQuestion();
}

/* startQuestion
--------------------------------------------------------------
Description: */
const startQuestion = () => {
    // restore event listeners and save current question object
    objTillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].content[ntillsmsCurrentQuestion];
    // create question container on first visit and shoe it on next visits
    if (!document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`)) {
        let questionContainer = El("div", {classes: ["tillsmsQuestionContainer", `tillsmsQuestionContainer${tillsmsCurrentExer}`]});
        document.querySelector(`.tillsmsExerPage`).append(questionContainer);
    } else {
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.remove("hidden");
    }
    if (ntillsmsCurrentQuestion === arrtillsmsQuestions[tillsmsCurrentExer].content.length) {
        document.querySelector(`.tillsmsAnswerKeybord`).classList.add("hidden")
        return;
    }
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="all";
    // create question if it hasn't been created already
    if (!document.querySelector(`.Exer${tillsmsCurrentExer}Question${ntillsmsCurrentQuestion}`)) {
        let question = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble", `Exer${tillsmsCurrentExer}Question${ntillsmsCurrentQuestion}`]},
            El("img",{ attributes: {src: "../assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{cls: "tillsmsQuestion"}, objTillsmsCurrentQuestion.question),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(question);
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    }
    // ampty answer container and fill it acording to type
    document.querySelector(`.tillsmsAnswersContainer`).innerHTML = "";
    switch (objTillsmsCurrentQuestion.type) {
        case "manyChoices":
            tillsmsCurrentAns = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `tillsmsAns`] , listeners: {click: onClickManyChoices}}, ans);
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
        case "manyPics":
            tillsmsCurrentAns = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `tillsmsAns`] , listeners: {click: onClickManyChoices}},
                    El("img", {attributes: {src: ans}, classes: [`manyPicsAns`] },)
                );
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
        default:
            break;
    }

    strTillsmsCorrectAnswer = [];
    objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
        objTillsmsCurrentQuestion.correctAns.forEach(e => {
            if(index === (e.slice(3) - 1)) {
                strTillsmsCorrectAnswer.push(ans);
            }
        })
    })

    // control grid columns
    document.querySelector(`.tillsmsAnswersContainer`).style.gridTemplateColumns = "";
    for(let i = 0; i < Math.ceil(Math.sqrt(objTillsmsCurrentQuestion.answers.length)); i++) {
        document.querySelector(`.tillsmsAnswersContainer`).style.gridTemplateColumns += " 1fr";
    }
}


/* onClickManyChoices-
--------------------------------------------------------------
Description: */
const onClickManyChoices = (event) => {
    // check if ans was clicked before, add or remove to arry acordingly
    let currAns = event.currentTarget.classList[1];
    if(document.querySelector(`.${currAns}`).style.backgroundColor === "rgb(201, 223, 231)") {
        document.querySelector(`.${currAns}`).style.backgroundColor = "white";
        tillsmsCurrentAns = tillsmsCurrentAns.filter(e => e !== currAns);
    } else if(tillsmsCurrentAns.length < objTillsmsCurrentQuestion.correctAns.length) {
        tillsmsCurrentAns.push(event.currentTarget.classList[1]);
        document.querySelector(`.${currAns}`).style.backgroundColor = "rgb(201, 223, 231)";
    }
    // add text or pics in send bar
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
        tillsmsCurrentAns.forEach(e => {
            if(index === (e.slice(3) - 1)) {
                if(objTillsmsCurrentQuestion.type === "manyChoices") {
                    document.querySelector(`.tillsmsSendBar`).innerHTML += `${ans}, `;
                } else {
                    document.querySelector(".tillsmsSendBar").classList.add("tillsmsSendBarWithPic")
                    let pic = El("img",{attributes: {src: ans, class: "tillsmsSendBarPic"}});
                    document.querySelector(`.tillsmsSendBar`).append(pic)
                }
            }
        })
    })
    // remove last "," from text
    if(objTillsmsCurrentQuestion.type === "manyChoices") {
        let answerTyped = document.querySelector(`.tillsmsSendBar`).innerHTML;
        document.querySelector(`.tillsmsSendBar`).innerHTML = answerTyped.slice(0, answerTyped.length - 2);
    }
    // add or remove check button listener
    if(tillsmsCurrentAns.length === objTillsmsCurrentQuestion.correctAns.length){
        document.querySelector(`.tillsmsSendArrow`).addEventListener("click", checkAnswer);
    } else {
        document.querySelector(`.tillsmsSendArrow`).removeEventListener("click", checkAnswer);
    }
}

/* compareOutOfOrder
--------------------------------------------------------------
Description: */
const compareOutOfOrder = (arr1, arr2) => {
    if(arr1.length !== arr2.length){ return false; } 
    const counts = new Map();
    arr1.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1)); 
    arr2.forEach((value) => counts.set(value, (counts.get(value) ?? 0) - 1));
    return Array.from(counts.values()).every((count) => count === 0);
};

/* checkAnswer
--------------------------------------------------------------
Description: */
const checkAnswer = () => {
    // save send bar content and empty it, send messege with answers
    document.querySelector(".tillsmsExerArrow").style.pointerEvents = "none";
    let answerContentToSend = document.querySelector(`.tillsmsSendBar`).innerHTML;
    document.querySelector(".tillsmsSendBar").classList.remove("tillsmsSendBarWithPic")
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    let answerToSend = El("div",{classes: ["animate__pulse", "tillsmsAnswerBubble", `Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}`]},
        El("div",{classes: ["tillsmsAnswer", `Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Content`]},),
        El("img",{ attributes: {src: "../assets/images/tillsms/white.svg", class: "bubbleArrow"}}),
    );
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(answerToSend); 
    document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Content`).innerHTML = answerContentToSend;
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    // disable event listeners
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="none";
    document.querySelector(`.tillsmsSendArrow`).removeEventListener("click", checkAnswer);
    // check if answer was correct, if so update varuble and send messege
    setTimeout(() => {
        let feedback = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble"]},
        El("img",{ attributes: {src: "../assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
        El("div",{classes: ["tillsmsQuestion", `Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`]},),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(feedback);
        if(compareOutOfOrder(tillsmsCurrentAns, objTillsmsCurrentQuestion.correctAns)) {
            ntillsmsCorrectAnswers++;
            document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = "כל הכבוד! תשובה נכונה"
        } else if (objTillsmsCurrentQuestion.type === "manyChoices"){
            document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `אופס! טעות. התשובה היא: <br> ${strTillsmsCorrectAnswer.join(', ')}`
        } else if (objTillsmsCurrentQuestion.type === "manyPics") {
            document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `אופס! טעות. התשובה היא:`
            strTillsmsCorrectAnswer.forEach(src => {
                let pic = El("img",{attributes: {src: src, class: "tillsmsSendBarPic"}});
                document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).append(pic)
            })
        }
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
        // update current answer in array and resave it to varuble
        arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion++;
        ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion;
        document.querySelector(".tillsmsExerPage .tillsmsExerCounter").innerHTML = `${ntillsmsCurrentQuestion}/${arrtillsmsQuestions[tillsmsCurrentExer].content.length}`,
        document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerCounter`).innerHTML = `${ntillsmsCurrentQuestion}/${arrtillsmsQuestions[tillsmsCurrentExer].content.length}`;
    }, 1500);

    // move to next question or end exer
    setTimeout(() => {
        document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
        if(ntillsmsCurrentQuestion <  arrtillsmsQuestions[tillsmsCurrentExer].content.length) {
            startQuestion();
        } else {
            endTillsmsExer();
        }
    }, 3000);
}

/* endTillsmsExer
--------------------------------------------------------------
Description: */
const endTillsmsExer = () => {
    arrtillsmsQuestions[tillsmsCurrentExer].status = "הסתיים";
    document.querySelector(".tillsmsExerPage .tillsmsExerStatus").innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerStatus`).innerHTML = `סטטוס: ${arrtillsmsQuestions[tillsmsCurrentExer].status}`;
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerAmount`).classList.add("hidden")
    document.querySelector(`.tillsmsExer${tillsmsCurrentExer} .tillsmsExerCounter`).style.color = "rgb(143 143 143)";
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).style.height = "84vh";
    document.querySelector(`.tillsmsAnswerKeybord`).classList.add("hidden")

    let feedback = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble"]},
    El("img",{ attributes: {src: "../assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
    El("div",{classes: ["tillsmsQuestion", `Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`]}, "מעולה! התרגול הסתיים יכולים לעבור לתרגול הבא"),
    );
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(feedback);
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;

    nTillsmsAmountOfExers--;
    if(nTillsmsAmountOfExers > 0) {
        document.querySelector(".tillsmsExerciseCounter").innerHTML = nTillsmsAmountOfExers;
    } else {
        document.querySelector(".tillsmsExerciseCounter").classList.add("hidden");
        if(ntillsmsCorrectAnswers/amountOfTillsmsQuestions >= PASSING_RATE){ // win - add precentegt
            document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `אלופים! סיימתם את כל התרגולים קבלו ${calcPercentageWin(ntillsmsCorrectAnswers, amountOfTillsmsQuestions)} אחוזים לסוללה שלכם`;
        } else {// loose - remove 5 %
            document.querySelector(`.Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}Feedback`).innerHTML = `איזה באסה! לא הצלחתם בתרגול וסתם בזבזבתם 5% מהסוללה שלכם`;
            updatePercentage(-5);
        }
        let backToHome = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble",], listeners: {click: () => {sendHome(); restartTillsms();}}},
            El("img",{ attributes: {src: "../assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{classes: ["tillsmsQuestion", "tillsmsSendHomeMessege"]}, "לחצו כדי לחזור למסך הבית",
                El("img", {attributes: {src: "../assets/images/tillsms/backToHome.svg", class: "tillsmsSendHomeButton"}})
            ),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(backToHome);
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
        let backToHomeMainPage = El("img", {attributes: {src: "../assets/images/tillsms/backToHome.svg", class: "tillsmsSendHomeButton tillsmsSendHomeButtonMainPage"}, listeners: {click: () => {sendHome(); restartTillsms();}}},);
        document.querySelector(`.tillsmsMainPageHeader`).append(backToHomeMainPage);
        // restartTillsms();
    }
    // document.querySelector(".tillsmsExerArrow").style.pointerEvents = "all";
}

/* endTillsmsExer
--------------------------------------------------------------
Description: */
const restartTillsms = () => {
    arrtillsmsQuestions.forEach(exer => {
        exer.curretntQuestion = 0;
        exer.status = "לא הותחל";
    })

    document.querySelector(`.tillsmsMainPage`).classList.remove("hidden");
    let header = document.querySelector(`.tillsmsExerheaderContainer`)
    if(header) {
        document.querySelector(`.tillsmsExerPage`).removeChild(header);
    }
    document.querySelector(`.tillsmsExerPage`).classList.add("hidden");
    document.querySelectorAll(".tillsmsQuestionContainer").forEach( container => {
        document.querySelector(`.tillsmsExerPage`).removeChild(container);
    })
    document.querySelector(`.tillsmsPageContent`).innerHTML = "";
    document.querySelector(`.tillsmsMainPageHeader`).innerHTML = "";
    
    ntillsmsCorrectAnswers = 0;
    amountOfTillsmsQuestions = 0;
    nTillsmsAmountOfExers = arrtillsmsQuestions.length;
    // createtillsmsContent();
}