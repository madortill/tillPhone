let nTillhangCurrentQuestion = 0;
let nCorrectAns = 0;
let nWrongAns = 0 
const ALPHABET = [`א`,`ב`,`ג`,`ד`,`ה`,`ו`,`ז`,`ח`,`ט`,`י`,`כ`,`ל`,`מ`,`נ`,`ס`,`ע`,`פ`,`צ`,`ק`,`ר`,`ש`,`ת`];
const LOOSE_QUESTION = 6;

/* tillhang
--------------------------------------------------------------
Description: start tillhang app*/
const tillhang = () => {
    strCurrentApp = "tillhang";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillhang`).classList.remove(`hidden`);
    createHangman();
}

/* tillhang
--------------------------------------------------------------
Description: start tillhang app*/
const createHangman = () => {
    nCorrectAns = 0;
    nWrongAns = 0 
    let content = El("div", {classes: [`tillhangContainer`, `flexCenter`]},
        El("div",{cls: `tillhangTitle`}, `tillhang`),
        El("div",{cls: `tillhangPicContainer`},
            El("img",{classes: [`tillhangHanger`], attributes: {src: `../assets/images/tillhang/hanger.png`}}),
        ),
        El("div",{cls: `tillhangTitleDefinition`}, `הגדרה:`),
        El("div",{cls: `tillhangDefinition`}, DATA.tillhang.appContent[nTillhangCurrentQuestion].definition),
        El("div",{cls: `tillhangLetterSpace`},),
        El("div",{cls: `tillhangkeyBoard`},),
    );
    document.querySelector(`.tillhang`).append(content);
    let letterSpace;
    for(let i = 0; i < DATA.tillhang.appContent[nTillhangCurrentQuestion].answer.length; i++){
        if(DATA.tillhang.appContent[nTillhangCurrentQuestion].answer[i] === `-`){
            letterSpace = El("div",{classes: [`letterSpace`, `letterSpace${i}`, `letterSpaceDash`]});
            nCorrectAns++;
        } else {
            letterSpace = El("div",{classes: [`letterSpace`, `letterSpace${i}`]});
        }
        document.querySelector(`.tillhangLetterSpace`).append(letterSpace);
    }
    let keyBoardLetter;
    for(let j = 0; j < ALPHABET.length; j++){
        keyBoardLetter = El("div",{classes: [`keyboardLetter`, `${ALPHABET[j]}`], listeners: {click: checkLetter}}, ALPHABET[j]);
        document.querySelector(`.tillhangkeyBoard`).append(keyBoardLetter);
    }
}

/* checkLetter
--------------------------------------------------------------
Description: start tillhang app*/
const checkLetter = (event) => {
    let clickedLetter = event.currentTarget.classList[1];
    event.currentTarget.style.backgroundColor = "red";
    event.currentTarget.removeEventListener("click", checkLetter)
    nWrongAns++;
    for(let i = 0; i < DATA.tillhang.appContent[nTillhangCurrentQuestion].answer.length; i++){
        if(DATA.tillhang.appContent[nTillhangCurrentQuestion].answer[i] === clickedLetter){
            document.querySelector(`.letterSpace${i}`).innerHTML = clickedLetter;
            event.currentTarget.style.backgroundColor = "green";
            nWrongAns--;
            nCorrectAns++
        }
    }
    // document.querySelector(`.tillhangHanger`).setAttribute("src", `../assets/images/tillhang/hanger${nWrongAns}.png`);
    if(nCorrectAns === DATA.tillhang.appContent[nTillhangCurrentQuestion].answer.length){
        //send to win
        console.log("win");
    } else if(nWrongAns === LOOSE_QUESTION) {
        //send to loose
        console.log("loose");
    }
}