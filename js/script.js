const walls = document.querySelectorAll("#wall");

//setTimeout(openMenu, 100)

window.addEventListener("click", function (e) {
    let target = e.target;

    if (target.matches("#menu-btn , #menu-btn *")) {
        openMenu();
    } else if (target.matches("#back, #back *")) {
        closeMenu();
    } else if (target.matches(" .img-track img")) {
        if (!menu.classList.contains("open")) {
            console.log(target.src);
            showModal(
                target,
                target.parentElement.parentElement.parentElement.textContent
            );
        }
    } else if (target.matches("#content  button")) {
        if (!menu.classList.contains("open")) {
            showModal(target, target.textContent);
        }
    } else if (target.matches("#closeModal, #closeModal *")) {
        modal.classList.remove("show");
    }
});

function showModal(target, text) {
    let imgSrc = target.src;
    makeModal(imgSrc, text, target);

    modal.classList.add("show");
}

function makeModal(src, text, target) {
    modalImg.setAttribute("src", src);
    modalImg.parentElement.style.height = "auto";
        modalImg.parentElement.style.display = "block";
    if (!src) {
        modalImg.parentElement.style.height = "0";
        modalImg.parentElement.style.display = "none";
    }
    if (text) {
        if (target.parentElement.parentElement.parentElement === modal) return;
        modalTitle.textContent = text;

        if (text === document.getElementById("newest-sec").textContent) {
            modalTitle.textContent = "Newest";
        }
    }
}

function openMenu() {
    if (!menu && scaler) return;

    menu.classList.add("open");
    scaler.classList.add("transit");
}

function closeMenu() {
    if (!menu && scaler) return;

    menu.classList.remove("open");
    scaler.classList.remove("transit");
}

