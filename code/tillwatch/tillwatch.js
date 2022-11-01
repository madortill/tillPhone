// question
let bTillwatchVisited = false;
let player;
const TILLWATCH_CONTENT = DATA.tillwatch.appContent

/* tillwatch
--------------------------------------------------------------
Description: start tillder app*/
var tillwatch = () => {
    strCurrentApp = "tillwatch";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillwatch`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTillwatchVisited) {
        bTillwatchVisited = true;
        startTillwatch();
    }
}

/* startTillwatch
--------------------------------------------------------------
Description: */
const startTillwatch = () => {
    for(playlists of Object.keys(TILLWATCH_CONTENT)) {
        let playlistContainor = El("div",{cls: "tillwatchPlaylistContainor"},
            El("div",{cls: "tillwatchPlaylistTitle"}, addSpace(playlists)),
            El("div",{classes: ["tillwatchThumbnailsContainer", playlists]},),
        );
        document.querySelector(".tillwatchContentContainer").append(playlistContainor);
        TILLWATCH_CONTENT[playlists].forEach((video, index) => {
            let thumbnailContainer = El("div",{cls: "thumbnailContainer"},
                El("div",{cls: "thumbnailTitle"}, video.videoTitle),
            );
            let thumbnail = El("div",{cls: "tillwatchVideoThumbnail", attributes: {"data-index": index, "data-playlist": playlists}, listeners: {click: onClickThumbnail}},);
            thumbnail.style.backgroundImage = `url("http://img.youtube.com/vi/${video.src}/0.jpg")`;
            thumbnailContainer.prepend(thumbnail);
            document.querySelector(`.tillwatchThumbnailsContainer.${playlists}`).append(thumbnailContainer);
        });
    }
    document.querySelector(".tillwatchBackButton").addEventListener("click", onClickTillwatchBack);
}

/* onClickThumbnail
--------------------------------------------------------------
Description: */
const onClickThumbnail = (event) => {
    document.querySelector(".tillwatchContentContainer").classList.add("hidden");
    document.querySelector(".tillwatchVideoContainer").classList.remove("hidden");
    // back button
    document.querySelector(".tillwatchBackButton").classList.remove("hidden");
    document.querySelector(".tillwatchVideoContainer").innerHTML = "";
    let videoPlayer = El("div", {id: "videoPlayer"});
    document.querySelector(".tillwatchVideoContainer").append(videoPlayer)
    let index = event.currentTarget.getAttribute("data-index");
    let playlist = event.currentTarget.getAttribute("data-playlist");
    let videoInfo = TILLWATCH_CONTENT[playlist][index];

    player = new YT.Player("videoPlayer", {
        videoId: videoInfo.src,
        playerVars: {
            controls: videoInfo.forceToWatch,
            playlist: videoInfo.src,
        },
        events: {
            onStateChange: onPlayerStateChange,
        },
    });
    if (!videoInfo.forceToWatch) { // forced to watch
        let fullScreen = El("div", {id: "tillwatchFullScreenButton", cls: "centerItem", listeners: {click: videoFullscreen}}, "צפייה במסך מלא");
        document.querySelector(".tillwatchVideoContainer").append(fullScreen)
        console.log("force");
    } else {
        console.log("not force");

    }
}

const videoFullscreen = () => {
    let iframe = document.querySelector("#videoPlayer");
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
        console.log(requestFullScreen);
        requestFullScreen.bind(iframe)();
    }
}

// backButton
const onClickTillwatchBack = () => {
    if(document.querySelector(".tillwatchSearchPage").classList[1] === "hidden"){ // video page
        document.querySelector(".tillwatchContentContainer").classList.remove("hidden");
        document.querySelector(".tillwatchVideoContainer").classList.add("hidden");
        document.querySelector(".tillwatchVideoContainer").innerHTML = "";
    } else {// search page
        document.querySelector(".tillwatchMainPage").classList.remove("hidden");
        document.querySelector(".tillwatchSearchPage").classList.add("hidden");
    }
    document.querySelector(".tillwatchBackButton").classList.add("hidden");
}

// when video ends
function onPlayerStateChange(event) {
    if (event.data === 0) {
        console.log("done");
        event.target.stopVideo();
        document.exitFullscreen();
    }
}