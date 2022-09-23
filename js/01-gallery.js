import { galleryItems } from "./gallery-items.js";

const galleryDiv = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);
galleryDiv.insertAdjacentHTML("beforeend", imgMarkup);
function createImgMarkup(imgArr) {
  return imgArr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
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
function createModaleBoxGallery(imgUrl) {
  modaleBoxGallery = basicLightbox.create(`<img src="${imgUrl}">`);
  modaleBoxGallery.show();
  document.addEventListener("keyup", onEscClickClose);
}

function onEscClickClose(evt) {
  if (evt.code === "Escape") {
    modaleBoxGallery.close();
    console.log(evt);
    document.removeEventListener("keyup", onEscClickClose);
  }
}

// --------- Var 2 How to create-------------
// const galleryDiv = document.querySelector(".gallery");

// let items = galleryItems;

// const galleryTemplate = ({
//   preview,
//   original,
//   description,
// }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;

// const render = () => {
//   const imgMarkup = items.map((item) => galleryTemplate(item)).join("");

//   galleryDiv.insertAdjacentHTML("beforeend", imgMarkup);
// };
// render();
