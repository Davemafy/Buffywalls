const walls = document.querySelectorAll("#wall");

//setTimeout(openMenu, 100)

window.addEventListener("click", function (e) {
    let target = e.target;

    if (target.matches("#menu-btn , #menu-btn *")) {
        openMenu();
    } else if (target.matches("#back, #back *")) {
        closeMenu();
    } else if (target.matches(" .img-track img")) {
        if (
            
            !menu.classList.contains("open") 
             ) {
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
    if (src) {
        modalImg.setAttribute("src", src);
        modalImg.parentElement.style.display = "auto";
    } else {
        modalImg.parentElement.style.display = "none";
    }
    if (text) {
    	if(target.parentElement.parentElement.parentElement === modal) return;
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

function setIndex(e) {
    let target = e.target;
    if (target.classList.contains("show")) return;

    //console.log('closed', target.classList)
}

modal.addEventListener("transitionend", setIndex);

let effects = ["opacity-100"];

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.parentElement.style.transition = "600ms";
            entry.target.parentElement.classList.remove(...effects);
        } else {
            entry.target.parentElement.style.transition = "500ms";
            entry.target.parentElement.classList.add(...effects);
        }
    });
});

walls.forEach(el => observer.observe(el));
