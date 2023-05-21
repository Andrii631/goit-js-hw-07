import { galleryItems } from './gallery-items.js';

// Change code below this line

const ulEl = document.querySelector('.gallery')
function addGallery (galleryItems) {
    let arr = []
    
    galleryItems.forEach(galleryItem => {
        arr.push(`<li class="galleryItem"> <a class="gallery__link" href='${galleryItem.original}'> <img class="gallery__image" src='${galleryItem.preview}' data-source='${galleryItem.original}' alt='${galleryItem.description}' /> </a> </li>`)
    });


ulEl.innerHTML =  [...arr].join('')
}

addGallery(galleryItems)
ulEl.addEventListener('click', openModal)
function openModal(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src=
    "${event.target.dataset.source}"
     />`)
    
     instance.show()
    
    ulEl.addEventListener("keydown",(event) =>{
    if(event.code === "Escape"){
     instance.close();
    } 
  });

}


  

