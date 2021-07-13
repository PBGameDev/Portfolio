var scrollPercent;
var sections = ["#Home", "#About", "#ProfessionalWorks", "#PersonalProjects", "#Résumé", "#Contact"];
var currentSection = 0;
var sectionScrolling = false;
var Glitching = false;

$(document).on("click", "a", function () {
    if ($(this).attr("href") == "#Home") {
        if (scrollPercent >= 16.66) {
            pageInEffect(0);
        }
        currentSection = 0;
    }
    else if ($(this).attr("href") == "#About") {
        if (scrollPercent < 16.66 && scrollPercent >= 33.33) {
            pageInEffect(1);
        }
        currentSection = 1;
    }
    else if ($(this).attr("href") == "#ProfessionalWorks") {
        if (scrollPercent < 33.33 && scrollPercent >= 49.98) {
            pageInEffect(2);
        }
        currentSection = 2;
    }
    else if ($(this).attr("href") == "#PersonalProjects") {
        if (scrollPercent < 49.98 && scrollPercent >= 66.64) {
            pageInEffect(3);
        }
        currentSection = 3;
    }
    else if ($(this).attr("href") == "#Résumé") {
        if (scrollPercent < 66.64 && scrollPercent >= 83.33) {
            pageInEffect(4);
        }
        currentSection = 4;
    }
    else if ($(this).attr("href") == "#Contact") {
        if (scrollPercent < 83.33) {
            pageInEffect(5);
        }
        currentSection = 5;
    }
    setTimeout(() => {
        $("#offcanvasRight").offcanvas("hide");
    }, 300)
})

let HeaderText = "website.open(portfolio.home());";
let LetterIndex = 0;
let CurrentWord = "";
(function typeHeader() {
    CurrentWord = HeaderText.slice(0, ++LetterIndex);
    document.getElementById("HeaderText").innerHTML = CurrentWord;
    if (LetterIndex === HeaderText.length) {
        OnTypeFinish();
        return;
    }
    else {
        setTimeout(typeHeader, 80);
    }
})();

function OnTypeFinish() {
    document.getElementById('intro').style.animation = "invert-colors 0.5s 1 ease";
    document.getElementById('intro').style.filter = "invert(1)";
    setTimeout(() => {
        document.getElementById('scrollHolder').style.display = "block";
        document.getElementById('MenuButton').style.display = "block";
        document.getElementById('intro').style.animation = "pushdivup 1s 1 ease";
        document.getElementById('intro').style.marginTop = "-100vh";
        pageInEffect(0);
        setTimeout(() => {
            document.getElementById('intro').style.display = "none";
        }, 1000);
    }, 1000);
}

$(window).on('scroll', function () {
    prevScrollPrecent = scrollPercent;
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    scrollPercent = (s / (d - c)) * 100;
    $('#scrollProgressBar').attr('aria-valuenow', scrollPercent).css('width', scrollPercent + '%');
})

window.addEventListener('wheel', function (event) {
    if (!sectionScrolling) {
        sectionScrolling = true;
        if (event.deltaY < 0) {
            if (currentSection > 0) {
                currentSection--;
            }
        }
        else if (event.deltaY > 0) {
            if (currentSection < (sections.length - 1)) {
                currentSection++;
            }
        }
        window.location.href = sections[currentSection];
        setTimeout(() => {
            sectionScrolling = false;
        }, 300);
    }
});

function BodyButtonClicks(i) {
    currentSection = i;
    window.location.href = sections[currentSection];
    pageInEffect(currentSection);
}

function pageInEffect(a) {
    if (a == 0) {
        GlitchEffect();
        HomePageRevealButton();
    }
    else if (a == 1) {

    }
    else if (a == 2) {

    }
    else if (a == 3) {

    }
    else if (a == 4) {

    }
    else if (a == 5) {

    }
}

function GlitchEffect() {
    if (!Glitching) {
        Glitching = true;
        const text = baffle(".GlitchText");
        text.set({
            characters: "AbCdEfGhIjKlMnOpQrStUvWxYz<,>.?/':;{}[]",
            speed: 150
        });
        text.start();
        text.reveal(2500);
        setTimeout(() => {
            Glitching = false;
        }, 2500);
    }
};

function HomePageRevealButton() {
    document.getElementById("HomePageButtons").style.animation = "ButtonIn 1.5s 1 ease";
    setTimeout(() => {
        document.getElementById("HomePageButtons").style.animation = "";
    }, 1500);
}