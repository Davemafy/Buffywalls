const footer = document.querySelector('footer')
let app = document.getElementById('update_area')
let imgWrapper = document.querySelectorAll('.wrapper')
const old = []
let toggle = true

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
    app.innerHTML = old[0];
  }
  console.log(old);
}

let count = ''
window.onclick = (e) => {
  let div = e.target.closest('div')
  if (!e.target.closest('.wrapper img')) return;
  count++
  console.log(count);
  document.querySelectorAll('.expand').forEach(item => item.classList.remove('expand'))
  e.target.parentNode.classList.add('expand')
}

footer.addEventListener('click', () => updateDom())

for (var i = 0; i <= 50; i++) {
  if (i === 10) {}
  imgWrapper.forEach(wrapper => {
    wrapper.innerHTML += `
     <div class="wrap-img" style="opacity: .6;">
     </div>
    `

  })
}
console.log('divs created ');
setTimeout(() => {
  for (var i = 0; i <= 50; i++) {
    imgWrapper.forEach((wrapper, index) => {
      if (i === 0) {
        wrapper.innerHTML = ' '
      }
      wrapper.innerHTML += `
       <div class="wrap-img" style="opacity: 1;">
         <img src="images/wall${i<5?i+1:3}.jpeg" alt="">
       </div>
      `
    })
  }
})

console.log('divs with images look aded');