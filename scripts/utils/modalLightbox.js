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


export function lightbox(data , index) {
    
    function openLightbox() {
        lightboxModal.style.display = "block";

        const lbListMedias = document.querySelectorAll('.lbMediaElt');
        lbListMedias[index].classList.remove('hiddenMedia'); // Show all elt
        lightboxModal.dataset.current = index; // Give index of selected elt 
    };
    
    return openLightbox();
};

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
    lbListMedias[lightboxModal.dataset.current].classList.add('hiddenMedia'); // Retire l'invisibilité du média
    
    // tester current elt = 0 alors 0 - 1 = 10.
    // (SI) INDEX média actif est égal à -1...
    if (lightboxModal.dataset.current === -1) {
        lbListMedias.length.classList.remove('hiddenMedia');
        lightboxModal.dataset.current = lightboxModal.dataset.length;
        console.log('charge le dernier');
    }   
        // (SINON SI)  INDEX media actif DIFFERENT de l'INDEX media position - 1
        else if (lightboxModal.dataset.current !== lightboxModal.dataset.current-1){
            // DECREMENT le dataset index du média
            lbListMedias[lightboxModal.dataset.current -1].classList.remove('hiddenMedia'); // Retire l'invisibilité du média
            lightboxModal.dataset.current = lightboxModal.dataset.current -1;
            console.log('Decrementation');
        };
});

nextBtn.addEventListener('click', () => {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    lbListMedias[lightboxModal.dataset.current].classList.add('hiddenMedia'); // Retire l'invisibilité du média
    
    // tester current elt = 0 alors 0 - 1 = 10.
    // (SI) INDEX média actif est égal à -1...
    if (lightboxModal.dataset.current === -1) {
        lbListMedias.length.classList.remove('hiddenMedia');
        lightboxModal.dataset.current = lightboxModal.dataset.length;
        console.log('charge le dernier');
    }   
        // (SINON SI)  INDEX media actif DIFFERENT de l'INDEX media position + 1
        else if (lightboxModal.dataset.current !== lightboxModal.dataset.current+1){
            // INCREMENT le dataset index du média
            lbListMedias[lightboxModal.dataset.current +1].classList.remove('hiddenMedia'); // Retire l'invisibilité du média
            lightboxModal.dataset.current = lightboxModal.dataset.current +1;
            console.log('Incrementation');
        };
});

document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;