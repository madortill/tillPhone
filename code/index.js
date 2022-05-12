let userName;
let nPercent = 0;
let strCurrentApp;
const PERCENT_PER_APP = 100/Object.keys(DATA).length;
const PASSING_RATE = 0.5;
const BONUS = 2;// NOT MORE THEN 5


/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelector(`.loader`).classList.add(`fade`);
    document.querySelector(`.nameEntry`).classList.add(`fade`);
    document.querySelector(`.submitName`).addEventListener(`click`,startApp);
});

/* startApp
--------------------------------------------------------------
Description: */
const startApp = () => {
    // saves user name
    userName = document.querySelector(`#name`).value;
    document.querySelector(`.nameEntry`).classList.add(`hidden`);
    let app;
    for(key of Object.keys(DATA)){
        app = El("div", {classes: [`app`, `${key}App`], listeners: {"click": eval(key)}},
            El("img", {attributes: {class: `appIcon`, src: DATA[key].icon}}),
            El("div", {cls: `appTitle`}, key),
        );
        document.querySelector(`.appsContainer`).append(app);
    };
    alert(`${userName}! הסוללה במצב 0% וזקוקה להטענה! זה הזמן לשחק במשחקים ולצבור נקודות כדי להגיע ל100%.`, `מוכנים לאתגר!`)
}

/* sendHome
--------------------------------------------------------------
Description: hide and enable recent app, shoe home page*/
const sendHome = () => {
    document.querySelector(`.homePage`).classList.remove(`hidden`);
    document.querySelector(`.${strCurrentApp}`).classList.add(`hidden`);
    document.querySelector(`.appsContainer > .${strCurrentApp}App`).removeEventListener(`click`, eval(strCurrentApp));
}

/* alert
--------------------------------------------------------------
Description: gets an allert in animation.
parameters: text - the content of the alert, button - the content of the button
 */
const alert = (text, button) => {
    document.querySelector(`.alertText`).innerHTML = text;
    document.querySelector(`.alertButton`).innerHTML = button;
    // add alert in animation
    document.querySelector(`.alertContainer`).style.animation = "getAlert 2s forwards";
    document.querySelector(`.alert`).style.animation = "fadeIn 2s forwards";
    // listener to remove alert
    document.querySelector(`.alertButton`).addEventListener("click", () => {
        document.querySelector(`.alertContainer`).style.animation = "removeAlert 2s forwards";
        document.querySelector(`.alert`).style.animation = "fadeOut 2s forwards";
    })
}

/* updatePercentage
--------------------------------------------------------------
Description: update the percentage */
const updatePercentage = (nPercentToAdd) => {
    nPercent = nPercent + nPercentToAdd
    document.querySelector(`#battery`).innerHTML = `${nPercent}%`;
    if(nPercent < 5){
        // lowBattery();
    } else if (nPercent > 5 && nPercent <= 20){
        // change pic to low battery
    } else if (nPercent > 20 && nPercent <= 50){
        // change pic to half battery
    } else if (nPercent > 50 && nPercent < 100){
        // change pic to high battery
    } else if (nPercent >= 100) {
        // endGame();
    }
}

/* calcPercentage
--------------------------------------------------------------
Description: calculate the current percentage and send to update */
const calcPercentageWin = (correctAnswers, answers, bonus) => {
    let winningRatio = correctAnswers/answers;
    let percentage = Math.floor(PERCENT_PER_APP * winningRatio);
    if (bonus){
        percentage = percentage + bonus
    }
    updatePercentage(percentage);
    return percentage;
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

/* El
--------------------------------------------------------------
Description: create html elements */
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}
