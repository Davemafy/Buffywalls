let imgWrapper = document.body.querySelectorAll(".img-track");

let limit = 10;
let renderLimit = 25;

(function () {
    preload(limit);
    document.body.classList.replace("loading", "partial");
    render();
})();

setTimeout(() => {
    document
        .querySelectorAll(".loader-div")
        .forEach(div => (div.style.opacity = "0"));
}, 2000);

document.addEventListener("DomContentLoaded", console.log("loaded"));

window.addEventListener("load", e => {
    console.log("windoe loaded");
});

function preload(limit) {
    imgWrapper.forEach(wrapper => {
        let div = spinner(limit, wrapper);

        //	wrapper.firstChild.remove()

        wrapper.innerHTML = div;
    });
}

function render() {
    const walls = document.querySelectorAll("#wall");

    walls.forEach((wall, index) => {
        if (wall.complete) {
            wall.classList.replace("loading", "loaded");

            if (index == walls.length - 1) {
                document.body.classList.replace("partial", "loaded");
            }
        } else {
            wall.addEventListener("load", () => {
                wall.classList.replace("loading", "loaded");
                if (index == walls.length - 1) {
                    document.body.classList.replace("partial", "loaded");
                }
            });
        }
    });
}

function random(num) {
    const index = Math.floor(Math.random() * num + 1);
    return index;
}

function spinner(amount, wrapper) {
    // let divWrap = document.createDocumentFragment();
    let divWrap = "";
		let arr = []
    for (var i = 1; i <= amount; i++) {
        let id = random(29);
        let track = wrapper.parentElement.id
        if (track === 'modal') {
            divWrap += `<div>
                  <img id="wall" class="loading" src="https://source.unsplash.com/random/${id *.5}" loading="lazy" alt="">
                </div>`;
        } 
        else if (track === 'groupModal') {
            divWrap += `<div>
                  <img id="wall" class="loading" src="https://source.unsplash.com/random/${id *.5}" loading="lazy" alt="">
                </div>`;
        } else if(track === 'newest-sec') {
            if (i > 3){divWrap += `<div>             
            <img id="wall" data-group="Newest" class="loading" src="https://source.unsplash.com/random/newest/${id}" loading="lazy" alt="">
               </div>`;
              } else{
        		
        		divWrap += `<div>
                  <img id="wall" data-group="New" class="loading" src="thumbnails/wall${random(id)}-min.jpg" loading="lazy" data-locked="false" alt="">
                </div>`;
        	}
        }
         else if(track === 'category-sec') {
         	 let categories = ['Amoled', 'Abstract', 'Acrylic', 'Funny', 'Material', 'B / W ', 'Art', 'Geometric', 'Space', 'Minimal', 'More']
         	 
           /* divWrap += `<div data-group='Categories' id='${categories[i]}'>
                  <img id="wall" class="loading" src="thumbnails/wall${id}-min.jpg" loading="lazy" alt="">
                </div>`;*/
            divWrap += `<div>
                  <img id="wall" class="loading" src="https://source.unsplash.com/random/${categories[i]}" loading="lazy" alt="">
                </div>`;
        }
        else if(track === 'trending-sec') {
        	if(i  > 3){
            divWrap += `<div>          
          				 <img id="wall" data-group="Trending" class="loading" src="https://source.unsplash.com/random/trending:${id}" loading="lazy" alt="">
               </div>`;
        	
        }
        	else{
        		
        		divWrap += `<div>
                  <img id="wall" data-group="Trending" class="loading" src="thumbnails/wall${id}-min.jpg" loading="lazy" alt="">
                </div>`;
        	}
        }
        console.log(wrapper.parentElement.id)
      }

    return divWrap;
}
