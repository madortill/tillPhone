// question
let ntillsmsCorrectAnswers = 0;
let ntillsmsCurrentQuestion;
let arrtillsmsQuestions = DATA.tillsms.appContent;
let pageNum = 1;
let tillsmsCurrentExer;
let tillsmsCurrentAns
let objTillsmsCurrentQuestion;

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
            El("div", {cls: "tillsmsExerciseCounter"}, arrtillsmsQuestions.length)
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
                El("div", {cls: "tillsmsExerStatus"}, "סטטוס: לא הותחל"),
            ),
            El("div", {cls: "tillsmsExerCounterContainer"},
                El("div", {cls: "tillsmsExerCounter"}, `0/${arrtillsmsQuestions[exer].content.length}`),
                El("div", {cls: "tillsmsExerAmount"}, arrtillsmsQuestions[exer].content.length),
            ),
            
        );
        document.querySelector(".tillsmsPageContent").append(exerContainer);
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
    document.querySelector(`.tillsmsMainPage`).classList.add("hidden");
    document.querySelector(`.tillsmsExerPage`).classList.remove("hidden");
    tillsmsCurrentExer = Number(event.currentTarget.classList[1].slice(11));
    ntillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion;
    let exerHeader = El("div",{cls: "tillsmsExerheaderContainer"},
        El("div",{cls: "tillsmsExerHeader"},
        El("img",{attributes: {class: "tillsmsExerArrow",src: "../assets/images/tillsms/arrowRight.svg"}, listeners: {"click": () => {
            document.querySelector(`.tillsmsMainPage`).classList.remove("hidden");
            let header = document.querySelector(`.tillsmsExerheaderContainer`)
            document.querySelector(`.tillsmsExerPage`).removeChild(header);
            document.querySelector(`.tillsmsExerPage`).classList.add("hidden");
            document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.add("hidden");
        }}}),
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[tillsmsCurrentExer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[tillsmsCurrentExer].title),
                El("div", {cls: "tillsmsExerStatus"}, "סטטוס: בביצוע"),
            ),
            El("div", {cls: "tillsmsExerCounter"}, `${ntillsmsCurrentQuestion}/${arrtillsmsQuestions[tillsmsCurrentExer].content.length}`),
        )
    );
    document.querySelector(".tillsmsExerPage").append(exerHeader);
    // arrtillsmsQuestions[tillsmsCurrentExer].curretntQuestion++;
    startQuestion();
}

/* startQuestion
--------------------------------------------------------------
Description: */
const startQuestion = () => {
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="all";
    objTillsmsCurrentQuestion = arrtillsmsQuestions[tillsmsCurrentExer].content[ntillsmsCurrentQuestion];
    if (!document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`)) {
        let questionContainer = El("div", {classes: ["tillsmsQuestionContainer", `tillsmsQuestionContainer${tillsmsCurrentExer}`]});
        document.querySelector(`.tillsmsExerPage`).append(questionContainer);
    } else {
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).classList.remove("hidden");
    }

    if (!document.querySelector(`.Exer${tillsmsCurrentExer}Question${ntillsmsCurrentQuestion}`)) {
        let question = El("div",{classes: ["animate__pulse", "tillsmsQuestionBubble", `Exer${tillsmsCurrentExer}Question${ntillsmsCurrentQuestion}`]},
            El("img",{ attributes: {src: "../assets/images/tillsms/blue.svg", class: "bubbleArrow"}}),
            El("div",{cls: "tillsmsQuestion"}, objTillsmsCurrentQuestion.question),
        );
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(question);
        document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    }

    document.querySelector(`.tillsmsAnswersContainer`).innerHTML = "";
    switch (objTillsmsCurrentQuestion.type) {
        case "manyChoices":
            tillsmsCurrentAns = [];
            objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
                let answer = El("div", {classes: [`manyChoices`, `ans${index + 1}`, `ans`] , listeners: {click: onClickManyChoices}}, ans);
                document.querySelector(`.tillsmsAnswersContainer`).append(answer);
            })
            break;
    
        default:
            break;
    }

}


/* onClickManyChoices-
--------------------------------------------------------------
Description: */
const onClickManyChoices = (event) => {
    let currAns = event.currentTarget.classList[1];
    if(document.querySelector(`.${currAns}`).style.backgroundColor === "rgb(201, 223, 231)") {
        document.querySelector(`.${currAns}`).style.backgroundColor = "white";
        tillsmsCurrentAns = tillsmsCurrentAns.filter(e => e !== currAns);
    } else if(tillsmsCurrentAns.length < objTillsmsCurrentQuestion.correctAns.length) {
        tillsmsCurrentAns.push(event.currentTarget.classList[1]);
        document.querySelector(`.${currAns}`).style.backgroundColor = "rgb(201, 223, 231)";
    }
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    objTillsmsCurrentQuestion.answers.forEach((ans, index) => {
        tillsmsCurrentAns.forEach(e => {
            if(index === (e.slice(3) - 1)) {
                document.querySelector(`.tillsmsSendBar`).innerHTML += `${ans}, `;
            }
        })
    })

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
    let answerContentToSend = document.querySelector(`.tillsmsSendBar`).innerHTML;
    document.querySelector(`.tillsmsSendBar`).innerHTML = "";
    let answerToSend = El("div",{classes: ["animate__pulse", "tillsmsAnswerBubble", `Exer${tillsmsCurrentExer}anwser${ntillsmsCurrentQuestion}`]},
        El("div",{cls: "tillsmsAnswer"}, answerContentToSend),
        El("img",{ attributes: {src: "../assets/images/tillsms/white.svg", class: "bubbleArrow"}}),
    );
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).append(answerToSend); 
    document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollTop = document.querySelector(`.tillsmsQuestionContainer${tillsmsCurrentExer}`).scrollHeight;
    
    document.querySelector(`.tillsmsAnswerKeybord`).style.pointerEvents ="none";
    document.querySelector(`.tillsmsSendArrow`).removeEventListener("click", checkAnswer);

    if (objTillsmsCurrentQuestion.type === "manyChoices") {
        // compare arrays
        if(compareOutOfOrder(tillsmsCurrentAns, objTillsmsCurrentQuestion.correctAns)) {
            ntillsmsCorrectAnswers++;
        }
    // } else {
    //     if (tillsmsCurrentAns === String(objTillsmsCurrentQuestion.correctAns)){
    //         ntillsmsCorrectAnswers++;
    //         if(document.querySelector(`.dropDownTitle`)) {
    //             document.querySelector(`.dropDownTitle`).style.backgroundColor = "green"; 
    //         } else {
    //             document.querySelector(`.${tillsmsCurrentAns}`).style.backgroundColor = "green";   
    //         }
    //     } else {
    //         if(document.querySelector(`.dropDownTitle`)) {
    //             document.querySelector(`.dropDownTitle`).style.backgroundColor = "red"; 
    //         } else {
    //             document.querySelector(`.${tillsmsCurrentAns}`).style.backgroundColor = "red";   
    //         }
    //     }
    }
    ntillsmsCurrentQuestion++;
    setTimeout(() => {
        if(ntillsmsCurrentQuestion <  arrtillsmsQuestions[tillsmsCurrentExer].content.length) {
            startQuestion();
        } else {
            // questionsEnd();
        }
    }, 2500);
}