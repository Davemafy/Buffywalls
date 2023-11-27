//import { load } from './js/load.js'

const body = document.body;
const bodyClone = document.createDocumentFragment();

const footer = document.querySelector('footer');
let app = document.getElementById('update_area');
let menuBtn = document.querySelector('.menu-btn');
let navMenu = document.querySelector('.nav-menu');
const scrollSec = document.querySelectorAll('.wrapper');

let old = [];
let toggle = true;
let loadstates = document.querySelectorAll('.loading')



menuBtn.addEventListener('click',
	toggleMenu
)

footer.addEventListener('click', () => {
	updateDom('Dom')})

function toggleMenu(e) {
	e.target.classList.add('open')
}

function updateDom(text) {
	old.length < 3
	?
	old.push(app.innerHTML):
	old;

	if (toggle) {
		toggle = false;
		app.innerHTML = `
		<header style="padding: 1rem 1.5rem;">
		<nav class="app-bar" >
		<h1 class="app-name"> ${text} </h1>
		<button class="logo"><img src="/icons/infinity.svg" alt="app-logo"> </button>
		</nav>
		</header> `;
	} else {
		toggle = true;
		app.innerHTML = old[0].slice(0, old[0].length);
	}
}

scrollSec.forEach((scroller) => {
	scroller.addEventListener('', scroll)
})

function scroll(e) {
	const childs = e.target.querySelectorAll('div')
	childs.forEach((child) => {
		//parallax
	})
	const imgs = e.target.querySelectorAll('img')
	imgs.forEach((child) => {
		//parallax
	})

}

function expand(e) {
	unexpand();
	e.target.classList.add('expand');
}

function unexpand() {
	document.querySelectorAll('.expand').forEach(item => item.classList.remove('expand'))
}


//console.log('divs with images look aded');
/*
let a = document.createElement('a');
let container = document.querySelector('.container');
let documentFragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let cloneA = a.cloneNode(true);
    cloneA.text = `Row N° ${i}`;
    documentFragment.appendChild(cloneA);
  }
  container.appendChild(documentFragment)

*/
/*
let container = imgWrapper;

const wrapdiv = document.createDocumentFragment();

size = imgWrapper.length;
for (var i = 0; i < size; i++) {
  container[i].innerHTML = divWrap;
}

imgWrapper.innerHTML = container;
*/
/*
window.onclick = (e) => {
  if (!e.target.closest('.wrapper img')) return;
  count++
  console.log(count);
  console.log(document.querySelectorAll('.expand'));
  e.target.parentNode.classList.add('expand')
}
*/