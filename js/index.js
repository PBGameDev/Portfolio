$(document).on("click", "ul li a", function () {
    $(this).closest("li").addClass("active").siblings().removeClass("active");
})

// new fullpage("#scrollHolder", {
//     licenseKey: 'YOUR_KEY_HERE',
//     autoScrolling: true,
// })

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