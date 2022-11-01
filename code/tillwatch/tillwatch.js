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
}

/* onClickThumbnail
--------------------------------------------------------------
Description: */
const onClickThumbnail = (event) => {
    document.querySelector(".tillwatchContentContainer").classList.add("hidden");
    // document.querySelector(".tillwatchVideoContainer").innerHTML = "";
    let index = event.currentTarget.getAttribute("data-index");
    let playlist = event.currentTarget.getAttribute("data-playlist");
    let videoInfo = TILLWATCH_CONTENT[playlist][index];

    player = new YT.Player("videoPlayer", {
        videoId: videoInfo.src,
        playerVars: {
            controls: 0,
            playlist: videoInfo.src,
        },
        events: {
            // onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });

    if (videoInfo.forceToWatch) {
        console.log("force");
    } else {
        console.log("not force");

    }
}

// document.querySelector(".check").addEventListener("click", () => {
//     let iframe = document.querySelector("#videoPlayer")
//     var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
//     if (requestFullScreen) {
//       requestFullScreen.bind(iframe)();
//     }
// });

// autoplay video
const onPlayerReady = (event) => {
    event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {
    if (event.data === 0) {
        console.log("done");
        event.target.stopVideo();
        // document.exitFullscreen();
    }
}