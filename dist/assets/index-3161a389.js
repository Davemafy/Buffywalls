(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const a of n.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(r) {
        const n = {};
        return (
            r.integrity && (n.integrity = r.integrity),
            r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (n.credentials = "include")
                : r.crossOrigin === "anonymous"
                ? (n.credentials = "omit")
                : (n.credentials = "same-origin"),
            n
        );
    }
    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = s(r);
        fetch(r.href, n);
    }
})();
let l = document.body.querySelectorAll(".img-track"),
    c = 10;
d(c);
window.addEventListener("load", t => {
    t.preventDefault(), u();
});
function d(t) {
    l.forEach(e => (e.innerHTML = f(t)));
}
function u() {
    const t = document.querySelectorAll("#wall");
    t.forEach((e, s) => {
        e.complete
            ? (e.classList.replace("loading", "loaded"),
              s == t.length - 1 &&
                  document.body.classList.replace("loading", "loaded"))
            : e.addEventListener("load", () => {
                  e.classList.replace("loading", "loaded"),
                      s == t.length - 1 &&
                          document.body.classList.replace("loading", "loaded");
              });
    });
}
function m(t) {
    return Math.floor(Math.random() * t + 1);
}
function f(t) {
    let e = "";
    for (var s = 0; s < t; s++) {
        let o = m(29);
        e += `<div class="bg-lighterDark rounded-3xl" style="background: url('/backgroundpreload/pre${o}.jpg'); background-position: center;background-repeat: no-repeat!important;background-size: cover;">
                  <img id="wall" class="loading" src="/thumbnails/wall${o}-min.jpg" loading="lazy" alt="">
                </div>`;
    }
    return e;
}
const p = document.querySelectorAll("#wall");
window.addEventListener("click", function (t) {
    let e = t.target;
    e.matches("#menu-btn , #menu-btn *")
        ? L()
        : e.matches("#back, #back *")
        ? b()
        : e.matches(".img-track img")
        ? e.classList.contains("loaded") &&
          !menu.classList.contains("open") &&
          g(e)
        : e.matches("#closeModal, #closeModal *") &&
          modal.classList.remove("show");
});
function g(t) {
    let e = t.src;
    h(e), modal.classList.add("show");
}
function h(t) {
    modalImg.setAttribute("src", t);
}
function L() {
    (!menu && scaler) ||
        (menu.classList.add("open"), scaler.classList.add("transit"));
}
function b() {
    (!menu && scaler) ||
        (menu.classList.remove("open"), scaler.classList.remove("transit"));
}
function v(t) {
    t.target.classList.contains("show");
}
modal.addEventListener("transitionend", v);
let i = ["opacity-10"];
const y = new IntersectionObserver(t => {
    t.forEach(e => {
        e.isIntersecting
            ? ((e.target.parentElement.style.transition = "600ms"),
              e.target.parentElement.classList.remove(...i))
            : ((e.target.parentElement.style.transition = "500ms"),
              e.target.parentElement.classList.add(...i));
    });
});
p.forEach(t => y.observe(t));
