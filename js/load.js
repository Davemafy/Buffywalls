let imgWrapper = document.body.querySelectorAll(".img-track");

let limit = 10;
let renderLimit = 25;
const arr = [];

preload(limit);
window.addEventListener("load", e => {
    render();
});

function preload(limit) {
    imgWrapper.forEach(wrapper => (wrapper.innerHTML = spinner(limit)));
}

function render() {
    const walls = document.querySelectorAll("#wall");

    walls.forEach((wall, index) => {
        if (navigator.onLine) {
            if (wall.complete) {
                wall.classList.replace("loading", "loaded");

                if (index == walls.length - 1) {
                    document.body.classList.replace("loading", "loaded");
                }
            } else {
                wall.addEventListener("load", () => {
                    wall.classList.replace("loading", "loaded");
                    if (index == walls.length - 1) {
                        document.body.classList.replace("loading", "loaded");
                    }
                });
            }
        }
    });
}

function random(num) {
    const index = Math.floor(Math.random() * num + 1);
    return index;
}

function spinner(amount) {
    let divWrap = "";

    for (var i = 0; i < amount; i++) {
        let id = random(29);
        divWrap += `<div>
                  <img id="wall" class="loading" src="https://source.unsplash.com/random/?${id}" loading="lazy" alt="">
                </div>`;
    }

    return divWrap;
}
