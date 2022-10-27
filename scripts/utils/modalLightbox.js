import { imagesFactory } from "../factories/image.js";
import { mediasFactory } from "../factories/medias.js";
import { videosFactory } from "../factories/video.js";

const lightboxModal = document.getElementById("lightbox-modal"); // lightbox
const mediaContent = document.querySelectorAll('.mediaContent'); //  Media source container 
const LbMedia = document.querySelector('.mediaPlayer'); // Place in current Media Player
const LbLegend = document.querySelector('.mediaTitle'); // Place in current Legend Media
const lbContent = document.querySelector('.lbContent');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


export function lightbox(data, index) {
    
    /**
     * 
     */
    function openLightbox() {
        lightboxModal.style.display = "block";
        const lbListMedias = document.querySelectorAll('.lbMediaElt');
        lbListMedias[index].classList.remove('hiddenMedia');
        lightboxModal.dataset.current = index;
    };
    
    function switchMedia(media, index) {
        console.log('Acqui')
        let i = media[index];

        prevBtn.addEventListener('click', () => {
            if (i < i.length) {
                return media[index++];
            } else if (i === i) {
                return media[index - 1];
            } else {
                return console.log('Error Prev BTN')
            };
        });

    };
    
    return { openLightbox, switchMedia };
}

export function initLb(media) {
    media.map((elt, index) => {
        
        const mediaImage = imagesFactory(elt);
        const mediaVideo = videosFactory(elt);
        const mediaContent = elt.image ? mediaImage.getImageDOM() : mediaVideo.getVideoDOM();
        const lbMedia = `
            <div class="lbMedia lbMediaElt hiddenMedia" data-index="${index}">
                <div class="mediaPlayer">${mediaContent}</div>
                <div class="mediaTitle"></div>
            </div>`;

        lbContent.insertAdjacentHTML("beforeend" , lbMedia);
    })
}

/**
 *  @param {} event Open Lightbox
 */
function openLightbox() {
    lightboxModal.style.display = "block";
};

/**
 * 
 * @param {} event Close Lightbox
 */
function closeLightbox() {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    lightboxModal.style.display = "none";
    lbListMedias[lightboxModal.dataset.current].classList.add('hiddenMedia');
};

prevBtn.addEventListener('click', () => {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    lbListMedias[lightboxModal.dataset.current].classList.add('hiddenMedia');
    // tester current elt = 0 alors 0 - 1 = 10.
    // if current media = -1 alors -1 = array.length max 
    lbListMedias[lightboxModal.dataset.current - 1].classList.remove('hiddenMedia');
    lightboxModal.dataset.current = lightboxModal.dataset.current - 1;
    
});

document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;



// nextBtn.addEventListener('click', () => {
//     if (i > i.length) {
//         return data[index--];
//     } else if (i === i) {
//         return data[index + 1];
//     } else {
//         return console.log('Error Next BTN')
//     };
// });

// if (mediaContent.data[index] < mediaContent.data[index +1]) {
//     return mediaContent.data[index +1];
// }
// if (mediaContent.data[index] > mediaContent.data[index -1]) {
//     return mediaContent.data[index -1];
// }