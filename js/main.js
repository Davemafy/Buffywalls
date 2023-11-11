const body = document.body;
const bodyClone = document.createDocumentFragment();

const footer = document.body.querySelector('footer');
let app = document.getElementById('update_area');
let imgWrapper = document.body.querySelectorAll('.wrapper');
let old = []
let toggle = true;
let loadstates = document.querySelectorAll('.loading')

function updateDom() {
  old.length < 3 ? old.push(app.innerHTML) : old;

  if (toggle)
  {
    toggle = false
    app.innerHTML = `          
          <header 
            style="
              padding: 1rem 1.5rem;
            ">
            <nav class="app-bar" >
              <h1 class="app-name">
                DOM Updated!
              </h1>
              <button class="logo">
                <img src="" alt&&="app-logo">
              </button>
            </nav>
          </header>
        `
  } else {
    toggle = true
    app.innerHTML = old[0].slice(0, old[0].length)
  }
}

let count = ''
window.onclick = (e) => {
  let div = e.target.closest('div')
  if (!e.target.closest('.wrapper img')) return;
  count++
  console.log(count);
  bodyClone.querySelectorAll('.expand').forEach(item => item.classList.remove('expand'))
  e.target.parentNode.classList.add('expand')
}

footer.addEventListener('click', () => updateDom())

let divWrap = '';

for (var i = 0; i <= 100; i++) {
  if (i === 0) {
    divWrap = `
     <div class="loading" style="opacity: .6;">
      <img id="item" src="" alt="">
      </div>
    `
  }
  divWrap += `
     <div class="loading" style="opacity: .6;">
      <div id="item" src="" alt="">
     </div>
    `
}

let container = [...imgWrapper]

const wrapdiv = document.createDocumentFragment()

size = imgWrapper.length

for (var i = 0; i < size; i++) {
  container[i].innerHTML = divWrap
}

imgWrapper.innerHTML = container

let images = []
limit = random(10)

container = [...imgWrapper]

console.log('divs created ');

const imageArr = document.querySelectorAll('#item')
window.addEventListener('load', () => {
  setTimeout(() => {
    for (var i = 0; i < limit; i++) {
      imgWrapper.forEach((wrapper, index) => {
        if (i === 0) {
          a = random(25)
          images[index] = `
             <div class="wrap-img" style="opacity: 1;">
               <img class="" src="images/wall${a}.jpg" alt="">
             </div>
          `
        }
        else if (i < limit) {
          images[index] += `
             <div class="wrap-img" style="opacity: 1;">
               <img class="" src="images/wall${random(25) === a ? i : random(25)}.jpg" alt="">
             </div>
          `
        }
      })
    }
    container.forEach((wrapper, index) => {
      wrapper.innerHTML = images[index]
      wrapper.querySelectorAll('img').forEach(img => img.classList.remove('loading'))
      wrapper.querySelectorAll('img').forEach(img => img.classList.add('loaded'))
    })
  })
})



const nums = []

function random(num) {
  index = Math.floor((Math.random() * num) + 1)
  return index;
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