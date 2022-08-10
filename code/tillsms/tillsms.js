// question
let ntillsmsCurrentQuestion = 0;
let ntillsmsCorrectAnswers = 0;
let arrtillsmsQuestions = DATA.tillsms.appContent;
let pageNum = 1;

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
    let currentExer = Number(event.currentTarget.classList[1].slice(11));
    let exerHeader = El("div",{cls: "tillsmsExerheaderContainer"},
        El("div",{cls: "tillsmsExerHeader"},
        El("img",{attributes: {class: "tillsmsExerArrow",src: "../assets/images/tillsms/arrowRight.svg"}, listeners: {"click": () => {
            document.querySelector(`.tillsmsMainPage`).classList.remove("hidden");
            document.querySelector(`.tillsmsExerPage`).innerHTML = ``;
            document.querySelector(`.tillsmsExerPage`).classList.add("hidden");
        }}}),
            El("img",{attributes: {class: "tillsmsExerPic",src: arrtillsmsQuestions[currentExer].pic}}),
            El("div", {cls: "tillsmsExerText"},
                El("div", {cls: "tillsmsExerTitle"}, arrtillsmsQuestions[currentExer].title),
                El("div", {cls: "tillsmsExerStatus"}, "סטטוס: בביצוע"),
            ),
            El("div", {cls: "tillsmsExerCounter"}, `${ntillsmsCurrentQuestion}/${arrtillsmsQuestions[exer].content.length}`),
        )
    );
    document.querySelector(".tillsmsExerPage").append(exerHeader);
}

