import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDiv = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);
galleryDiv.insertAdjacentHTML("beforeend", imgMarkup);
function createImgMarkup(imgArr) {
  return imgArr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>;
</div>`;
    })
    .join("");
}
console.log(galleryItems);

let modaleBoxGallery = {};
galleryDiv.addEventListener("click", onGalleryImgClick);
function onGalleryImgClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImgEl) {
    return;
  }
  const clickedImgOriginalUrl = evt.target.dataset.source;

  createModaleBoxGallery(clickedImgOriginalUrl);
}
function createModaleBoxGallery(imgClickedUrl) {
  var lightbox = new SimpleLightbox(".gallery a", {
    // captionType: "attr",
    captionsData: "alt",
    // captionPosition: "bottom",
    captionDelay: 250,
  });
}
