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
	 console.log(e.target)
    if (!menu && scaler) return;

    menu.classList.add("open");
    scaler.classList.add("transit");
}

function closeMenu() {
    if (!menu && scaler) return;

    menu.classList.remove("open");
    scaler.classList.remove("transit");
}

