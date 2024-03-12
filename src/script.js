var mainFrame;
var firstLoad = true;
var updateTitle = false;
var pageParam = "z";
var titlePrefix = "";
var hitCounterFunction = undefined;

window.addEventListener("DOMContentLoaded", (e) => {
    mainFrame = document.getElementById("mainframe");
    mainFrame.addEventListener("load", updateHistory, false);
    setMainFrame();
});

window.addEventListener("popstate", function (e) {
    if (e.state !== null) {
        setMainFrame();
    }
});

function setMainFrame() {
    let params = new URLSearchParams(window.location.search);
    let page = params.get(pageParam);
    if (page != null) {
        mainFrame.src = page;
    }
}

function updateHistory() {
    let title = titlePrefix + mainFrame.contentDocument.title;
    if (firstLoad) {
        firstLoad = false;
        if (updateTitle) {
            document.title = title;
        }
        if (hitCounterFunction != undefined) {
            hitCounterFunction();
        }
        return;
    }

    history.replaceState(null, "", "?" + pageParam + "=" + mainFrame.contentWindow.location.pathname);

    if (updateTitle) {
        document.title = title;
    }
}