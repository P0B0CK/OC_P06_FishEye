import { imagesFactory } from "../factories/image.js";
import { mediasFactory } from "../factories/medias.js";
import { videosFactory } from "../factories/video.js";

const lightboxModal = document.getElementById("lightbox-modal"); // lightbox = LB

const lbContent = document.querySelector('.lbContent'); // container media of LB
const prevBtn = document.querySelector('.prevBtn'); // nav of LB : PREVIOUS media
const nextBtn = document.querySelector('.nextBtn'); // nav of LB : NEXT media




export function lightbox(data , index) {
    

    function openLightbox() {
        lightboxModal.style.display = "block";

        const lbListMedias = document.querySelectorAll('.lbMediaElt');
        lbListMedias[index].classList.remove('hidden-media'); // Show all elt
        lightboxModal.dataset.current = index; // Give index of selected elt
    };

    return { openLightbox };
};

export function initLb(media) {
    media.map((elt, index) => {
        
        const mediaImage = imagesFactory(elt);
        const mediaVideo = videosFactory(elt);
        const mediaContent = elt.image ? mediaImage.getImageDOM() : mediaVideo.getVideoDOM();
        const mediaContentTitle = elt.title;
        const lbMedia = `
            <div class="lbMedia lbMediaElt hidden-media" data-index="${index}">
                <div class="media-player">${mediaContent}</div>
                <div class="media-legend"><h4 class="media-title">${mediaContentTitle}</h4></div>
            </div>`;

        lbContent.insertAdjacentHTML("beforeend" , lbMedia);
    });
}

/**
 * 
 * @param {} event Close Lightbox
 */
function closeLightbox() {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    lightboxModal.style.display = "none";
    lbListMedias[lightboxModal.dataset.current].classList.add('hidden-media'); 
};


/**
 * @param {MouseEvent/KeyBoard} event
 */

function previousMedia() {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    //Index du média affiché
    let currentIndex = Number(lightboxModal.dataset.current);
    //calcul de l index du prochain média à afficher
    let nextIndex = currentIndex==0 ? lbListMedias.length-1 : currentIndex -1;
    // PROCHAIN INDEX  == Lorsque l'index est égal à 0 EST VRAI retourne L'IndexMax SINON décrémente l'index de -1;
    //Masquer le media affiché
    lbListMedias[currentIndex].classList.add('hidden-media'); // 
    //afficher le prochain média
    lbListMedias[nextIndex].classList.remove('hidden-media');
    //mise à jour de l index du media affiché dans les propriétés de la lightbox
    lightboxModal.dataset.current = nextIndex;
};

prevBtn.addEventListener('click', previousMedia);

function nextMedia() {
    const lbListMedias = document.querySelectorAll('.lbMediaElt');
    //Index du média affiché
    let currentIndex = Number(lightboxModal.dataset.current);
    //calcul de l index du prochain média à afficher
    let nextIndex = currentIndex==lbListMedias.length-1 ? 0 : currentIndex +1;
    // PROCHAIN INDEX  == Lorsque l'index est égal à l'index max EST VRAI retourne L'IndexMin SINON incrémente l'index de +1;
    //Masquer le media affiché
    lbListMedias[currentIndex].classList.add('hidden-media');
    //afficher le prochain média
    lbListMedias[nextIndex].classList.remove('hidden-media');
    //mise à jour de l index du media affiché dans les propriétés de la lightbox
    lightboxModal.dataset.current = nextIndex;
};

nextBtn.addEventListener('click', nextMedia);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        previousMedia();
    } else if  (e.key === 'ArrowRight') {
        nextMedia();
    }
        else {
            return console.log('NOT ASSIGN KEY : ' + e.key )
        }
});

document.closeLightbox = closeLightbox;