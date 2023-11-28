const btn = document.getElementById('menu-btn')
const navMenu = document.getElementById('menu')
const navMenuBack = document.getElementById('back')
const walls = document.querySelectorAll('.wall')

//setTimeout(openMenu, 100)

btn.addEventListener('click', openMenu)
navMenuBack.addEventListener('click', closeMenu)

function openMenu(e){
	navMenu.classList.add('open')
	scaler.classList.add('transit')
}
function closeMenu(e){
	navMenu.classList.remove('open')
	scaler.classList.remove('transit')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    	entry.target.style.scale = "7"
      entry.target.classList.remove('hide')
      
    } else {
      entry.target.classList.add('hide')
    	entry.target.style.scale = "0"
      
    }
  })
})

walls.forEach((el) => observer.observe(el));


