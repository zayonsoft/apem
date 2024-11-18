function activateNavControl() {
    let navBtn = document.querySelector("button.nav-btn");
    let header = document.querySelector("header");
    navBtn.addEventListener("click", function () {
        if (header.classList.contains("closed-nav")) {
            openNav();
        }
        else {
            closeNav();

        }
    });

}

function openNav() {
    let header = document.querySelector("header");
    header.classList.remove("closed-nav");
    header.classList.add("opened-nav");
    setNavHeight();
}

function closeNav() {
    let header = document.querySelector("header");
    header.classList.remove("opened-nav");
    header.classList.add("closed-nav");
    removeNavHeight();
}

function setNavHeight() {
    let heightTeller = document.querySelector("div.nav-links-container");
    let currentHeight = heightTeller.getBoundingClientRect().height;

    let heightMaker = document.querySelector("div.nav-links-cover");
    heightMaker.style.height = `${currentHeight}px`;
}

function removeNavHeight() {
    let heightMaker = document.querySelector("div.nav-links-cover");
    heightMaker.style.height = `${0}px`;
}

function activateNavFixing() {
    document.addEventListener("scroll", function () {
        closeNav();
        if (scrollY >= 150) {
            fixHeader();
        }
        else {
            unfixHeader();
        }
    });
}

function fixHeader() {
    let header = document.querySelector("header");
    header.classList.add("fixed-header");
}

function unfixHeader() {
    let header = document.querySelector("header");
    header.classList.remove("fixed-header");
}

document.addEventListener("DOMContentLoaded", function () {
    activateNavControl();
    activateNavFixing();
});