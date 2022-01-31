// Описан в документации
import simpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const takeContainer = document.querySelector(".gallery");
const takeMarkup = createPicMarkup(galleryItems);

takeContainer.insertAdjacentHTML('beforeend',takeMarkup);

function createPicMarkup (pics){
    
    return pics.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');

}

new simpleLightbox(".gallery__link",{captionType : "alt"} );

console.log(simpleLightbox);