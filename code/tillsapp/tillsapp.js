// question
let nTillsappCurrentQuestion = 0;
let nTillsappCorrectAnswers = 0;
let arrTillsappQuestions = DATA.tillsapp.appContent;
let pageNum = 1;

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const tillsapp = () => {
    strCurrentApp = "tillsapp";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillsapp`).classList.remove(`hidden`);
    createTillsappContent();
}

/* createTillsappContent
--------------------------------------------------------------
Description: start tillsapp app*/
const createTillsappContent = () => {
    let navBar = El("div", {classes: ["tillsappTopNav", "centerX"]},
        El("img",{ attributes: {class: "tillsappCameraIcon", src: "../assets/images/tillsapp/camera-free-icon-font.svg"}}),
        El("div", {classes: ["tillsappExercise", "tillsappCategory1", "tillsappCategory"], listeners: {click: switchCategory}}, "תרגולים",
            El("div", {cls: "tillsappExerciseCounter"}, Object.keys(arrTillsappQuestions).length)
        ),
        El("div", {classes: ["tillsappInstractions", "tillsappCategory2", "tillsappCategory"], listeners: {click: switchCategory}}, "הוראות"),
        El("div", {classes: ["tillsappProgress", "tillsappCategory3", "tillsappCategory"], listeners: {click: switchCategory}}, "התקדמות"),
    );
    document.querySelector(".tillsappMainPageHeader").append(navBar);
    document.querySelector(".tillsappExercise").classList.add("tillsappChoosenCategory");
    // create exer page
    for(exer of Object.keys(arrTillsappQuestions)) {
        let exerContainer = El("div", {classes: ["tillsappExerciseContainer"]},
            El("img",{attributes: {class: "tillsappExerPic",src: arrTillsappQuestions[exer].pic}}),
            El("div", {cls: "tillsappExerText"},
                El("div", {cls: "tillsappExerTitle"}, exer),
                El("div", {cls: "tillsappExerStatus"}, "סטטוס: לא הותחל"),
            ),
            El("div", {cls: "tillsappExerCounterContainer"},
                El("div", {cls: "tillsappExerCounter"}, `0/${arrTillsappQuestions[exer].content.length}`),
                El("div", {cls: "tillsappExerAmount"}, arrTillsappQuestions[exer].content.length),
            ),
            
        );
        document.querySelector(".tillsappPageContent").append(exerContainer);
    }
    document.querySelectorAll(".tillsappContainer").forEach(elem => {
        elem.addEventListener("swiped", switchCategory);
    })
}

/* switchCategory
--------------------------------------------------------------
Description: start switchCategory app*/
const switchCategory = (event) => {
    document.querySelector(`.tillsappCategory${pageNum}`).classList.remove("tillsappChoosenCategory");
    document.querySelector(`.tillsappContainer${pageNum}`).classList.add("hidden");
    if(event.type === "click") {
        pageNum = Number(event.currentTarget.classList[1].slice(16));
    } else {
        pageNum = Number(event.currentTarget.classList[1].slice(17));
        if(event.detail.dir === "right" && pageNum < 3) {
            pageNum++;
        } else if (event.detail.dir === "left" && pageNum > 1) {
            pageNum--;
        };
    }
    document.querySelector(`.tillsappCategory${pageNum}`).classList.add("tillsappChoosenCategory");
    document.querySelector(`.tillsappContainer${pageNum}`).classList.remove("hidden");

    console.log(pageNum);

}

