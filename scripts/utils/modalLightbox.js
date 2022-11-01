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
    
    let currentIndex = lightboxModal.dataset.current;
    let nextIndex = currentIndex -1; // varstock

    if (nextIndex === -1) {
        currentIndex = lbListMedias.length;
        console.log('Decrementation 70:: position actuelle => ' + nextIndex + " / " + (lbListMedias.length-1));
    }
        // (SI) INDEX média actif est EGAL à -1 
        if (lightboxModal.dataset.current === -1) {
            lbListMedias.length.classList.remove('hiddenMedia');
            lightboxModal.dataset.current = lightboxModal.dataset.length;
            console.log('Decrementation 76:: position actuelle => ' + nextIndex + " / " + (lbListMedias.length-1));
        }   
            // (SINON SI)  INDEX media actif DIFFERENT de l'INDEX media position - 1
            else if (currentIndex !== currentIndex-1){
                // DECREMENT le dataset index du média
                lbListMedias[currentIndex-1].classList.remove('hiddenMedia'); // Retire l'invisibilité du média
                lightboxModal.dataset.current = lightboxModal.dataset.current -1;
                console.log('Decrementation 83:: position actuelle => ' + (currentIndex-1) + " / " + (lbListMedias.length-1));
            };
    });

nextBtn.addEventListener('click', () => {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    lbListMedias[lightboxModal.dataset.current].classList.add('hiddenMedia'); // Retire l'invisibilité du média
    
    let currentIndex = lightboxModal.dataset.current;
    let nextIndex = currentIndex + 1; // varstock
    let maxIndex = lbListMedias.length-1;

    
    if (lbListMedias[lightboxModal.dataset.current] < (lbListMedias.length-1)) {
        lbListMedias[currentIndex].classList.remove('hiddenMedia'); // Retire l'invisibilité du média
        lightboxModal.dataset.current = lightboxModal.dataset.current+1;
        
        console.log( currentIndex + ' / ' + nextIndex)
    }
        // SINON SI (index Actuel) EQUIVAUT à (index Max) 
        else if (lbListMedias[lightboxModal.dataset.current] === (lbListMedias.length-1)) {
            lbListMedias[currentIndex].classList.remove('hiddenMedia'); // Retire l'invisibilité du média
            lightboxModal.dataset.current = lightboxModal.dataset.current+1;
            
            console.log( currentIndex + ' / ' + nextIndex);
        }
});

document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;