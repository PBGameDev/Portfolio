var scrollPercent;

$(document).on("click", "a", function () {
    if ($(this).attr("href") == "#Home" && scrollPercent >= 16.66) {
        GlitchEffect();
    }
})

let HeaderText = "cout << \"Hello World\";";
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
        document.getElementById('Navbar').style.display = "block";
        document.getElementById('intro').style.animation = "pushdivup 1s 1 ease";
        document.getElementById('intro').style.marginTop = "-100vh";
        GlitchEffect();
        setTimeout(() => {
            document.getElementById('intro').style.display = "none";
        }, 1000);
    }, 1000);
}

function GlitchEffect() {
    const text = baffle(".GlitchText");
    text.set({
        characters: "AbCdEfGhIjKlMnOpQrStUvWxYz/?.,<>'[}:;{",
        speed: 150
    });
    text.start();
    text.reveal(2500);
};

$(window).on('scroll', function () {
    prevScrollPrecent = scrollPercent;
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    scrollPercent = (s / (d - c)) * 100;
    $('#scrollProgressBar').attr('aria-valuenow', scrollPercent).css('width', scrollPercent + '%');
    changeSectionSelectionOnScroll();
})

function changeSectionSelectionOnScroll() {
    if (scrollPercent >= 0 && scrollPercent < 16.66) {
        $('a[href*="#Home"]').closest("li").addClass("active").siblings().removeClass("active");
    }
    else if (scrollPercent >= 16.66 && scrollPercent < 33.33) {
        $('a[href*="#About"]').closest("li").addClass("active").siblings().removeClass("active");
    }
    else if (scrollPercent >= 33.33 && scrollPercent < 49.98) {
        $('a[href*="#ProfessionalWorks"]').closest("li").addClass("active").siblings().removeClass("active");
    }
    else if (scrollPercent >= 49.98 && scrollPercent < 66.64) {
        $('a[href*="#PersonalProjects"]').closest("li").addClass("active").siblings().removeClass("active");
    }
    else if (scrollPercent >= 66.64 && scrollPercent < 83.33) {
        $('a[href*="#Résumé"]').closest("li").addClass("active").siblings().removeClass("active");
    }
    else if (scrollPercent >= 83.33 && scrollPercent <= 100) {
        $('a[href*="#Contact"]').closest("li").addClass("active").siblings().removeClass("active");
    }
}