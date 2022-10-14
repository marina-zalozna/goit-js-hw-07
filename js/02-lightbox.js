import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createImageMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
   <li>
   <a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
  </li>
</ul>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
