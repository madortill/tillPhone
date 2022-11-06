// question
let bTillwatchVisited = false;
let player;
let currVideoIndex;
let currVideoPlaylist;
let nTillwatchCorrectAns = 0;
let nTillwatchTotalAns = 0;
let strLastPage = "Main";
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
    strCurrPage = "Main";
    for(playlists of Object.keys(TILLWATCH_CONTENT)) {
        let playlistContainor = El("div",{cls: "tillwatchPlaylistContainor"},
            El("div",{cls: "tillwatchPlaylistTitle"}, addSpace(playlists)),
            El("div",{classes: ["tillwatchThumbnailsContainer", playlists]},),
        );
        document.querySelector(".tillwatchMainPage").append(playlistContainor);
        TILLWATCH_CONTENT[playlists].forEach((video, index) => {
            nTillwatchTotalAns++;
            let thumbnailContainer = El("div",{cls: "thumbnailContainer"},
                El("div",{cls: "thumbnailTitle"}, video.videoTitle),
            );
            let thumbnail = El("div",{cls: "tillwatchVideoThumbnail", attributes: {id: `${playlists}${index}`,"data-index": index, "data-playlist": playlists}, listeners: {click: onClickThumbnail}},);
            thumbnail.style.backgroundImage = `url("http://img.youtube.com/vi/${video.src}/0.jpg")`;
            thumbnailContainer.prepend(thumbnail);
            document.querySelector(`.tillwatchThumbnailsContainer.${playlists}`).append(thumbnailContainer);
        });
    }
    document.querySelector(".tillwatchBackButton").addEventListener("click", onClickTillwatchBack);
    document.querySelector(".tillwatchSearchButton").addEventListener("click", onClickTillwatchSearch);
}

/* onClickThumbnail
--------------------------------------------------------------
Description: */
const onClickThumbnail = (event) => {
    currVideoIndex = event.currentTarget.getAttribute("data-index");
    currVideoPlaylist = event.currentTarget.getAttribute("data-playlist");
    let videoInfo = TILLWATCH_CONTENT[currVideoPlaylist][currVideoIndex];
    document.querySelector(`.tillwatch${strCurrPage}Page`).classList.add("hidden");
    document.querySelector("#backToHomePage").classList.add("hidden");
    document.querySelector(".tillwatchVideoPage").classList.remove("hidden");
    document.querySelector(".tillwatchBackButton").setAttribute("src", "../assets/images/tillwatch/arrow-right.svg");
    document.querySelector(".tillwatchBackButton").classList.remove("hidden");
    document.querySelector(".tillwatchVideoPage").innerHTML = "";
    let videoPlayer = El("div", {id: "videoPlayer"});
    document.querySelector(".tillwatchVideoPage").append(videoPlayer);
    strCurrPage = "Video";

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
    if (!videoInfo.forceToWatch && !iOS()) { // forced to watch only works on android
        let fullScreen = El("div", {id: "tillwatchFullScreenButton", cls: "centerItem", listeners: {click: videoFullscreen}}, "צפייה במסך מלא");
        document.querySelector(".tillwatchVideoPage").append(fullScreen)
        console.log("force");
    } else {
        console.log("not force");
    }
}

const videoFullscreen = () => {
    let iframe = document.querySelector("#videoPlayer");
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
        screen.orientation.lock("landscape");
    }
}

// backButton
const onClickTillwatchBack = () => {
    document.querySelector(".tillwatchVideoPage").innerHTML = "";
    document.querySelector(`.tillwatch${strCurrPage}Page`).classList.add("hidden");
    strCurrPage = "Main";
    document.querySelector(`.tillwatch${strCurrPage}Page`).classList.remove("hidden");
    document.querySelector(".tillwatchBackButton").classList.add("hidden");
    document.querySelector("#backToHomePage").classList.remove("hidden");
    document.querySelector("#backToHomePage").classList.remove("hidden");
}

// when video ends
function onPlayerStateChange(event) {
    if (event.data === 0) {
        let thumbnail = document.querySelector(`#${currVideoPlaylist}${currVideoIndex}`);
        if(thumbnail.classList.length === 1) {
            let symbol = El("img",{attributes: {src: "../assets/images/tillwatch/eye.svg", class: "tillwatchWatchedSymbol"}});
            thumbnail.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,.5)";
            thumbnail.append(symbol);
            thumbnail.classList.add("watched");
            console.log("watched");
            nTillwatchCorrectAns++;
        }

        event.target.stopVideo();
        if(screen.orientation.type.includes("landscape")) {
            screen.orientation.lock("portrait");
            document.exitFullscreen();
        }

    }
}

// onClickTillwatchSearch
const onClickTillwatchSearch = () => {
    document.querySelector(".tillwatchVideoPage").innerHTML = "";
    document.querySelector(`.tillwatch${strCurrPage}Page`).classList.add("hidden");
    document.querySelector("#backToHomePage").classList.add("hidden");
    strCurrPage = "Search";
    document.querySelector(".tillwatchSearchPage").classList.remove("hidden");
    document.querySelector(".tillwatchBackButton").setAttribute("src", "../assets/images/tillwatch/cross-small.svg");
    document.querySelector(".tillwatchBackButton").classList.remove("hidden");
    document.querySelector(".tillwatchSearchScrollContainer").innerHTML = "";
    document.querySelector(".tillwatchSearchScrollContainer").scrollTop = 0;
    for(playlists of Object.keys(TILLWATCH_CONTENT)) {
        TILLWATCH_CONTENT[playlists].forEach((video, index) => {
            let searchVideo = El("div",{cls: "searchVideoContainer"},
                El("div",{cls: "tillwatchSearchVideoTitle"}, video.videoTitle),
                // El("div",{classes: ["tillwatchSearchVideoThumbnail", playlists]},),
            );
            let thumbnail = El("div",{cls: "tillwatchSearchThumbnail", attributes: {"data-index": index, "data-playlist": playlists}, listeners: {click: onClickThumbnail}},);
            thumbnail.style.backgroundImage = `url("http://img.youtube.com/vi/${video.src}/0.jpg")`;
            searchVideo.prepend(thumbnail);
            document.querySelector(".tillwatchSearchScrollContainer").append(searchVideo);
        });
    }
}