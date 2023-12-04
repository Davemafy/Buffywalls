const walls = document.querySelectorAll('#wall')

//setTimeout(openMenu, 100)


window.addEventListener('click' , function(e){
	let target = e.target 
	
	if(target.matches('#menu-btn , #menu-btn *') ){
		openMenu()
	}
	 else if(target.matches('#back, #back *')){
		closeMenu()
	}
	else if(target.matches('.img-track img')){
		if(target.classList.contains('loaded') && !menu.classList.contains('open')){
		  showModal(target)
		}
	} else if(target.matches('#closeModal, #closeModal *')){
		modal.classList.remove('show')
	}
})

function showModal(target){
	let imgSrc = target.src

	makeModal(imgSrc)
	
	modal.classList.add('show')
	
}

function makeModal(src){
  modalImg.setAttribute('src', src)
}


function openMenu(){
	if(!menu && scaler) return;
	
	menu.classList.add('open')
	scaler.classList.add('transit')
}


function closeMenu(){
	if(!menu && scaler) return;
	
	menu.classList.remove('open')
	scaler.classList.remove('transit')
}


function setIndex(e){
  let	target = e.target 
	if(target.classList.contains('show')) return;
	
	//console.log('closed', target.classList)
}

modal.addEventListener('transitionend', setIndex)

let effects = ['opacity-10']

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    	entry.target.parentElement.style.transition = '600ms'
      entry.target.parentElement.classList.remove(...effects)
   } else {
  		entry.target.parentElement.style.transition = '500ms'
      entry.target.parentElement.classList.add(...effects)
  }
  })
})


walls.forEach((el) => observer.observe(el));



