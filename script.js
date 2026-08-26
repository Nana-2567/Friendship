// =========================================
// CHANGE BETWEEN PAGES
// =========================================

function showPage(pageId, addToHistory = true) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if (addToHistory) {
        history.pushState(
            { page: pageId },
            "",
            "#" + pageId
        );
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("popstate", function () {

    const pageId =
        window.location.hash.substring(1);

    if (pageId) {

        showPage(pageId, false);

    } else {

        showPage("welcomePage", false);

    }

});


// =========================================
// SELECT SUBSCRIPTION PLAN
// =========================================

function selectPlan(planName) {

    document.getElementById("selectedPlan").textContent = planName;

    showPage("invoicePage");
}


// =========================================
// CONFIRM SUBSCRIPTION
// =========================================

function confirmSubscription() {

    showPage("successPage");

    createConfetti();

    const song = document.getElementById("friendshipSong");

    song.currentTime = 0;
    song.play();
}


// =========================================
// CONFETTI
// =========================================

function createConfetti() {

    const symbols = ["💗", "🎀", "✨", "💕", "🌸", "🥹"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = Math.random() * 15 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration * 1000);
    }
}


// =========================================
// SHOW "NO" POPUP
// =========================================

function showNoOption() {

    const popup = document.getElementById("noPopup");

    popup.classList.add("show");
}


// =========================================
// CLOSE "NO" POPUP
// =========================================

function closeNoOption() {

    const popup = document.getElementById("noPopup");

    popup.classList.remove("show");
}
