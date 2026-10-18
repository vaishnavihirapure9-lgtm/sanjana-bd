/* ================================
   PAGE NAVIGATION
================================ */

function showGallery() {

    const opening = document.getElementById("opening");
    const gallery = document.getElementById("gallery");

    opening.classList.add("hidden");

    gallery.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showLetter() {

    const gallery = document.getElementById("gallery");
    const letter = document.getElementById("letter");

    gallery.classList.add("hidden");

    letter.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================
   ENVELOPE
================================ */

function openEnvelope() {

    const letterBox = document.getElementById("letterBox");

    letterBox.classList.add("show");

    createSparkles();

}


/* Close letter */

function closeLetter() {

    const letterBox = document.getElementById("letterBox");

    letterBox.classList.remove("show");

}


/* ================================
   SPARKLE EFFECT
================================ */

function createSparkles() {

    const container = document.querySelector(".letter-sparkles");

    for (let i = 0; i < 18; i++) {

        const sparkle = document.createElement("span");

        sparkle.innerHTML =
            Math.random() > 0.5 ? "✦" : "♡";

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.color =
            Math.random() > 0.5
                ? "#c9ace4"
                : "#edbfd8";

        sparkle.style.fontSize =
            (12 + Math.random() * 20) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.animation =
            `sparkle ${1 + Math.random() * 2}s ease-in-out infinite`;

        container.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 5000);
    }
}


/* ================================
   ESCAPE KEY
================================ */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLetter();

    }

});