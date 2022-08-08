// question
let nTillsappCurrentQuestion = 0;
let nTillsappCorrectAnswers = 0;
let arrTillsappQuestions = DATA.tillsapp.appContent;

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const tillsapp = () => {
    strCurrentApp = "tillsapp";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillsapp`).classList.remove(`hidden`);
    createTillsappNav();
    console.log(Object.keys(arrTillsappQuestions).length);
}

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const creatCategory = () => {

}

/* tillsapp
--------------------------------------------------------------
Description: start tillsapp app*/
const createTillsappNav = () => {
    let navBar = El("div", {classes: ["tillsappTopNav", "centerX"]},
        El("img",{ attributes: {class: "tillsappCameraIcon", src: "../assets/images/tillsapp/camera-free-icon-font.svg"}}),
        El("div", {cls: "tillsappExercise", listeners: {click: creatCategory}}, "תרגולים",
            El("div", {cls: "tillsappExerciseCounter"}, Object.keys(arrTillsappQuestions).length)
        ),
        El("div", {cls: "tillsappInstractions", listeners: {click: creatCategory}}, "הוראות"),
        El("div", {cls: "tillsappProgress", listeners: {click: creatCategory}}, "התקדמות"),
    );
    document.querySelector(".tillsappMainPageHeader").append(navBar)
    document.querySelector(".tillsappExercise").classList.add("tillsappChoosenCategory")
}

