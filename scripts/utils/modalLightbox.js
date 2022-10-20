import { imagesFactory } from "../factories/image.js";
import { mediasFactory } from "../factories/medias.js";
import { videosFactory } from "../factories/video.js";

const lightboxModal = document.getElementById("lightbox-modal"); // lightbox
const mediaContent = document.querySelectorAll('.mediaContent'); //  Media source container 
const mediaCurrent = mediaContent.children; // Media source image and video content
const LbMedia = document.querySelector('.mediaPlayer'); // Place in currentMedia

let mediaArray; // New array content index, id, image, video, title

export function lightbox(data, index) {

    function openLightbox() {
        lightboxModal.style.display = "block";
        
        const mediaImage = imagesFactory(data[index]);
        const mediaVideo = videosFactory(data[index]);
        const mediaContent = data[index].image ? mediaImage.getImageDOM() : mediaVideo.getVideoDOM();
        LbMedia.innerHTML = mediaContent;
    };
    return { openLightbox };
}

// Open Lightbox
function openLightbox() {
    lightboxModal.style.display = "block";

    function getMediaIndex() {

        console.log("OK !");

        mediaContent.forEach( mediaCurrent => mediaCurrent.addEventListener('click', e => {
            e.preventDefault();
            // if (mediaContent === imagesFactory) {
            //     return console.log(mediaCurrent.src);
            // }
            // else if (mediaContent === videosFactory) {
            //     return (mediaCurrent.src);
            // }
            // else {
            //     return console.log('Nope')
            // }
        })); 
    };
    
    return getMediaIndex();
};

// close Lightbox :: OK
function closeLightbox() {
    lightboxModal.style.display = "none";
};


document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;


// function displayLightbox() {
//     mediaLinks.forEach(mediaLinks => mediaLinks.addEventListener('click', e => {
//         e.preventDefault()
//         new lightboxModal(e.currentTarget.getAttribute('href'))
//     }));
// };

// function getMediaType() {
//     getIndexOf = mediaLinks.children[index];
//     getIndexOf.forEach( (elt, index) => {
//         console.log(`media ${index}`)
//     })
    
//     return 
// }


// media.forEach( (element, index) => {
//     const mediaCard = mediasFactory(element);
//     mediaCard.getUserMediasDOM();
// }); 
// LbMedia.appendChild();
// return console.log(`media ${index}`);
// mediaLinks.onclick = (elt, index, ) => {
//     if (mediaLinks.children === media.${image}) {
//         return media.${image};
//     };
//     else if (mediaLinks.children === media.${video}) {
//         return media.${video};
//     };
//     else {
//         return console.log("ERROR : Can't load file ! :(")
//     };
// };




// ECRITURE
//
//
// ma_fonction_douverture()
// ouvre la modale Lightbox
//
//
// Quand "ma_fonction_douverture()" a été activée
// function openLightbox() { lightboxModal.style.display = "block"};

// Déclenchement au clic sur un media
// J'execute une fonction getMedia...
// media.addEventListener('click', getMediaIndex())

// Au clic récupère l'index (position des medias) et restitue l'id de la source
// A l'intérieur du dom
//
//
// ma_fonction_de_fermeture
// ferme la modale Lightbox
