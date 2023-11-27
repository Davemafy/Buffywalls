let imgWrapper = document.body.querySelectorAll('#track');

let limit = 25;
let renderLimit = 25;
const arr = []

preload(limit)
window.addEventListener('load', (e) => {
  e.preventDefault()
  render()
})

function preload(limit) {
  imgWrapper.forEach(wrapper => wrapper.innerHTML = spinner(limit))
}

function render() {
  const images = [];
  const walls = document.querySelectorAll('#wall')

  walls.forEach((wall, index) => {
    if (wall.complete) {
      document.body.classList.replace('loading', 'loaded')
    } else {
      wall.addEventListener('load', () => {
        document.body.classList.replace('loading', 'loaded')
      })
    }
  })
}

// generateImages(limit, renderLimit, images)



function generateImages(limit, imgLength, images) {
  for (var i = 0; i < limit; i++) {
    imgWrapper.forEach((wrapper, index) => {
      if (i === 0) {
        images[index] = createImg('first', imgLength)
      }
      else if (i < limit) {
        images[index] += createImg('random', imgLength)
      }
    })
  }
}

function createImg(pick, imgLength) {
  const firstPick = random(imgLength)
  if (pick = 'random') {
    return `<div class="wrap-img">
             <img id="wall" style="object-fit: cover" src="thumbnails/wall${random(imgLength) === firstPick ? random(firstPick) : random(imgLength)}-min.jpg" alt="">
          </div>`
  }
  else if (pick = 'first') {
    return `<div class="wrap-img">
              <img id="wall" style="object-fit: cover" src="thumbnails/wall${firstPick}-min.jpg" alt="">
            </div>`
  }
}


function random(num) {
  const index = Math.floor((Math.random() * num) + 1)
  return index;
}

function spinner(amount) {
  let divWrap = '';
;  for (var i = 0; i < amount; i++) {
  let id = random(10000)
  divWrap += `<div style="/*background: url('/preload/pre${id}.jpg')*/; background-position: center;background-repeat: no-repeat!important;background-size: cover;">
                  <img id="wall" style="object-fit: cover;" src="https://source.unsplash.com/random?photos?${id}*${id}" loading="lazy" alt="">
                </div>`
  }
  return divWrap;
}
//<img class="spinner" style="z-index: 1" src="/images/spinner.gif" alt="">
// divWrap += `<div style="background: url('/preload/pre${i+1}.jpg'); background-position: center;background-repeat: no-repeat!important;background-size: cover;">
//<img id="wall-bg" style="z-index: 0; object-fit: cover" src="/preload/pre${random(20) + random(9)}.jpg" loading="load" alt="">