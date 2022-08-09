// question
let nTillsappCurrentQuestion = 0;
let nTillsappCorrectAnswers = 0;
let arrTillsappQuestions = DATA.tillsapp.appContent;
let nTillsappCategory = 0;

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const tillsapp = () => {
    strCurrentApp = "tillsapp";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillsapp`).classList.remove(`hidden`);
    createTillsappNav();
}

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const createTillsappNav = () => {
    let navBar = El("div", {classes: ["tillsappTopNav", "centerX"]},
        El("img",{ attributes: {class: "tillsappCameraIcon", src: "../assets/images/tillsapp/camera-free-icon-font.svg"}}),
        El("div", {classes: ["tillsappExercise", "tillsappCategory1", "tillsappCategory"], listeners: {click: creatCategory, swiped:creatCategory}}, "תרגולים",
            El("div", {cls: "tillsappExerciseCounter"}, Object.keys(arrTillsappQuestions).length)
        ),
        El("div", {classes: ["tillsappInstractions", "tillsappCategory2", "tillsappCategory"], listeners: {click: creatCategory, swiped:creatCategory}}, "הוראות"),
        El("div", {classes: ["tillsappProgress", "tillsappCategory3", "tillsappCategory"], listeners: {click: creatCategory, swiped:creatCategory}}, "התקדמות"),
    );
    document.querySelector(".tillsappMainPageHeader").append(navBar);
    document.querySelector(".tillsappExercise").classList.add("tillsappChoosenCategory");
    for(exer of Object.keys(arrTillsappQuestions)) {
        let exerContainer = El("div", {cls: "tillsappExerContainer"},
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
        console.log(exer);
    }
}

/* creatCategory
--------------------------------------------------------------
Description: start creatCategory app*/
const creatCategory = (event) => {
    console.log(event);
    if(event.type === "click") {

    } else {

    }
    console.log(event.currentTarget);

}

