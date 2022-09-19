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

let lightbox = {};

let modaleBoxGallery = {};
galleryDiv.addEventListener("click", onGalleryImgClick);
function onGalleryImgClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImgEl) {
    return;
  }

  if (lightbox.eventNamespace === "simplelightbox") {
    document.querySelectorAll(".sl-wrapper").forEach((el) => el.remove());
    document.querySelectorAll(".sl-overlay").forEach((el) => el.remove());
  }
  const clickedImgOriginalUrl = evt.target.parentElement;

  createModaleBoxGallery(clickedImgOriginalUrl);
}
function createModaleBoxGallery(imgUrl) {
  lightbox = new SimpleLightbox(".gallery a", {
    // captionType: "attr",
    captionsData: "alt",
    // captionPosition: "bottom",
    captionDelay: 250,
  });
  console.log(lightbox);
  lightbox.open(imgUrl);
}
console.log(lightbox.eventNamespace);
