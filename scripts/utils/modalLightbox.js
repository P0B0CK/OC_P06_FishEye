import { imagesFactory } from "../factories/image.js";
import { mediasFactory } from "../factories/medias.js";
import { videosFactory } from "../factories/video.js";

const lightboxModal = document.getElementById("lightbox-modal"); // lightbox
const mediaContent = document.querySelectorAll('.mediaContent'); //  Media source container 
const LbMedia = document.querySelector('.mediaPlayer'); // Place in current Media Player
const LbLegend = document.querySelector('.mediaTitle'); // Place in current Legend Media


export function lightbox(data, index, title) {

    /**
     * 
     */
    function openLightbox() {
        lightboxModal.style.display = "block";
        
        const mediaImage = imagesFactory(data[index]);
        const mediaVideo = videosFactory(data[index]);
        const mediaContent = data[index].image ? mediaImage.getImageDOM() : mediaVideo.getVideoDOM();
        LbMedia.innerHTML = mediaContent;
    };

    // function sortFocusablesLightbox () {
    //     focusablesLightbox.sort(function (a, b) {
    //       const x = a.getAttribute('tabindex')
    //       const y = b.getAttribute('tabindex')
    //       if (x < y) {
    //         return -1
    //       }
    //       if (x > y) {
    //         return 1
    //       }
    //       return 0
    //     })
    //   }

    function nextMedia() {
        if (mediaContent.data[index] < mediaContent.data[index +1]) {
            return mediaContent.data[index +1];
        }
        if (mediaContent.data[index] > mediaContent.data[index -1]) {
            return mediaContent.data[index -1];
        }
    }

    return { openLightbox, nextMedia };
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
    lightboxModal.style.display = "none";
};

document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;