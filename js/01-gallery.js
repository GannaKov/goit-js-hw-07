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
  window.addEventListener("keydown", onEscClickClose);
}

function onEscClickClose(evt) {
  if (evt.code === "Escape") {
    modaleBoxGallery.close();
    console.log(evt);
    window.removeEventListener("keydown", onEscClickClose);
  }
}
// ---------- Var How to create --------
// const gallerryBox = document.querySelector(".gallery");

// const render = galleryItems
//   .map(
//     (item) => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`
//   )
//   .join("");
// gallerryBox.insertAdjacentHTML("beforeend", render);
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
// ------------ Var Vlad --------------
// const gallerryBox = document.querySelector(".gallery");
// // console.log(gallerryBox);

// const render = galleryItems
//   .map(
//     (item) => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`
//   )
//   .join("");
// gallerryBox.insertAdjacentHTML("beforeend", render);

// gallerryBox.addEventListener("click", onClick);

// function onClick(e) {
//   e.preventDefault();
//   const targetImg = e.target.nodeName === "IMG";
//   if (!targetImg) {
//     return;
//   }

//   const options = {
//     onShow: () => {
//       window.addEventListener("keydown", onEscClose);
//       instance.element().querySelector("img").onclick = instance.close;
//     },

//     onClose: () => {
//       window.removeEventListener("keydown", onEscClose);
//     },
//   };

//   const instance = basicLightbox.create(
//     `<div class="modal"><img src="${e.target.dataset.source}"/></div>`,
//     options
//   );

//   function onEscClose(e) {
//     if (e.code === "Escape") {
//       instance.close();
//       console.log(e);
//     }
//   }

//   instance.show();
// }
