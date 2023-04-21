// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// const SimpleLightbox = require('simplelightbox');

// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('ul.gallery');

const createGalleryElementMarkupFromObject = ({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;

const createGalleryMarkup = galleryItems
  .map(createGalleryElementMarkupFromObject)
  .join(``);

galleryElement.insertAdjacentHTML('afterbegin',createGalleryMarkup);

galleryElement.addEventListener('click',onClick)

const galleryLinks = galleryElement.querySelectorAll('a')
// console.log(galleryLinks[0].querySelector('img').getAttribute('alt'));
// const alt = galleryLinks.map(e => e.)

let gallery = new SimpleLightbox(galleryLinks,{captionsData: 'alt'});

gallery.on('show.simplelightbox', function () {
	// Do something…
});

function onClick(event){
    event.preventDefault();
}