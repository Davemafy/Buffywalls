const walls = document.querySelectorAll("#wall");

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
