function openModal(modal) {
    return () => modal.classList.add("show");
}

function closeModal(modal) {
    return () => modal.classList.remove("show");
}

let openImgModal = openModal(modal);
let closeImgModal = closeModal(modal);

let openGroupModal = openModal(groupModal);
let closeGroupModal = closeModal(groupModal);

let openProModal = openModal(proModal);
let closeProModal = closeModal(proModal);

let openFullImgModal = openModal(fullSreenModal);
let closeFullImgModal = closeModal(fullSreenModal);

function setSrc(src, target) {
    target.src = src;
}

function changeTitle(title, el) {
    el.innerText = title;
}

function setDownloadLink(src, el) {
    el.setAttribute("href", src);
}

window.addEventListener("click", e => {
    let target = e.target;

    if (target.matches('[data-locked="true"], [data-locked="true"] *')) {
        openProModal();
        return;
    }

    if (target.matches("#wall")) {
        if (
            !menu.classList.contains("open") &&
            !modal.classList.contains("show") &&
            !groupModal.classList.contains("show")
        ) {
            changeTitle(
                target.getAttribute("data-group")
                    ? target.getAttribute("data-group")
                    : "Category",
                modalTitle
            );
            setSrc(target.src, modalImg);
            openImgModal();
            setDownloadLink(target.src, downloadBtn);
        } else {
            setSrc(target.src, modalFullImg);
            setDownloadLink(target.src, downloadFullBtn);
            openFullImgModal();
        }
    }
    if (target.matches("#currentImgWrapper .overlay ")) {
        setSrc(modalImg.src, modalFullImg);
        openFullImgModal();
    }

    if (target.matches(" button, button *")) {
        if (target.matches(".modal button,.modal button *")) {
            if (target.matches("#closeModal, #closeModal *")) {
                closeImgModal();
            } else if (target.matches("#closeFullModal, #closeFullModal *")) {
                closeFullImgModal();
            } else if (target.matches("#closeProModal, #closeProModal *")) {
                closeProModal();
            } else if (target.matches("#closeGroupModal, #closeGroupModal *")) {
                closeGroupModal();
            }
        } else if (target.matches("#content button, #content button *")) {
            changeTitle(target.getAttribute("aria-owns"), groupModalTitle);
            openGroupModal();
        }
    }
});


window.addEventListener("click", e => {
    let target = e.target;

    if (target.matches('#menu-btn, #menu-btn *')) {
      openMenu(e) 
    }
    else if (target.matches('#back, #back *')) {
      closeMenu() 
    }
});


function openMenu(e) {
	 
    if (!menu && scaler) return;

    menu.classList.add("open");
    scaler.classList.add("transit");
}

function closeMenu() {
    if (!menu && scaler) return;

    menu.classList.remove("open");
    scaler.classList.remove("transit");
}

