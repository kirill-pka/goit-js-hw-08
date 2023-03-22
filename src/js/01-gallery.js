import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');

const createMarkup = (images) => 
    images
    .map(
        ({ preview, original, description }) =>
        `<div class='gallery__item'>
            <a href="${original}" class='gallery__link'>
                <img
                    class="gallery__image"
                    src="${preview}" 
                    title="${description}"
                    alt="${description}"
                />
                </a>
        </div>
        `,
    ).join('');
        
const galleryMarkup = createMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a');
