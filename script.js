// adding button hover animations
function mouseOver(e) {
    e.target.classList.add("hover");
}

function mouseLeave(e) {
    e.target.classList.remove("hover");
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("mouseover", mouseOver));
buttons.forEach(button => button.addEventListener("mouseleave", mouseLeave));

// adding github icon animation
function githubAddClass(e) {
    e.target.classList.add("fa-bounce");
}

function githubRemoveClass(e) {
    e.target.classList.remove("fa-bounce");
}

const github = document.querySelector(".fa-brands");

github.addEventListener("mouseover", githubAddClass);
github.addEventListener("mouseleave", githubRemoveClass);