// const
const AMOUNT_OF_TILLGRAM_QUESTION = DATA.tillgram.appContent.length;

/* tillgram
--------------------------------------------------------------
Description: start tillgram app*/
const tillgram = () => {
    strCurrentApp = "tillgram";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillgram`).classList.remove(`hidden`);
    createTillgranContent();
}

/* createTillgranContent
--------------------------------------------------------------
Description: start tillgram app*/
const createTillgranContent = () => {
    let title = El("div", {classes: [`tillgramTitleContainer`, `centerX`]},
        El("div", {cls: `tillgramTitle`}, `Tillgram`),
        El("div", {classes: [`tillgramIconContainer`, `flexCenter`]},
        El("img", {attributes: {src: `../assets/images/tillgram/tiilLogo.svg`, class: `tillgramTitleIcon`}},),
        El("img", {attributes: {src: `../assets/images/tillgram/heart.svg`, class: `tillgramTitleIcon`}},),
        El("img", {attributes: {src: `../assets/images/tillgram/rocket.svg`, class: `tillgramTitleIcon`}},),
        ),
    );
    document.querySelector(`.tillgram`).append(title);
    let pageContent;
    for(let i = 0; i <  DATA.tillgram.appContent.length; i++){
        currentPost = DATA.tillgram.appContent[i]
        pageContent = El("div", {cls: `tillgramPictureContainer`},
            El("div", {cls: `tillgramPicTopContainer`},
                El("img", {attributes: {src: currentPost.icon, class: `tillgramPicIcon`}},),
                currentPost.title
            ),
            El("img",
                {attributes: {
                    src: currentPost.src[currentPost.currentPic],
                    class: `tillgramPic ${i} tillgramPic${i}`},
                listeners: {dblclick: onRead}},
            ),
            El("div", {cls: `tillgramButtomIcon`},
                El("img", {attributes: {src: `../assets/images/tillgram/readIcon.svg`, class: `tillgramPicButtomIcon readIcon${i}`}},),
                El("img", {attributes: {src: `../assets/images/tillgram/heart.svg`, class: `tillgramPicButtomIcon`}},),
                El("img", {attributes: {src: `../assets/images/tillgram/rocket.svg`, class: `tillgramPicButtomIcon`}},),
            ),
            El("div", {cls: `tillgramPicContent`},currentPost.text),
        );
        document.querySelector(`.tillgramPageContent`).append(pageContent);
        if (currentPost.src.length > 1) {
            document.querySelector(`.tillgramPic${i}`).addEventListener('swiped', caruslePics);
        }
    }
}

/* onRead
--------------------------------------------------------------
Description: update battery if read*/
const onRead = (event) => {
    let currentPic = event.currentTarget.classList[1];
    if (DATA.tillgram.appContent[currentPic].notRead) {
        calcPercentageWin(1 , AMOUNT_OF_TILLGRAM_QUESTION);
        DATA.tillgram.appContent[currentPic].notRead = false
        document.querySelector(`.tillgram .readIcon${currentPic}`).setAttribute("src", `../assets/images/tillgram/readIconSelected.svg`);
    }
}

/* caruslePics
--------------------------------------------------------------
Description: start tillgram app*/
const caruslePics = (event) => {
    let currentPicContainer = event.currentTarget.classList[1];
    let currentPic = DATA.tillgram.appContent[currentPicContainer].currentPic;
    if(event.detail.dir === "left" && currentPic + 1 < DATA.tillgram.appContent[currentPicContainer].src.length) {
        currentPic++
    } else if (event.detail.dir === "right" && currentPic > 0) {
        currentPic--;
    }
    document.querySelector(`.tillgram .tillgramPic${currentPicContainer}`).setAttribute("src", DATA.tillgram.appContent[currentPicContainer].src[currentPic]);
    DATA.tillgram.appContent[currentPicContainer].currentPic = currentPic;
}
