import { imagesFactory } from "../factories/image.js";
import { mediasFactory } from "../factories/medias.js";
import { videosFactory } from "../factories/video.js";

const lightboxModal = document.getElementById("lightbox-modal"); // lightbox
const mediaContent = document.querySelectorAll('.mediaContent'); //  Media source container 
const mediaCurrent = mediaContent.children; // Media source image and video content
const LbMedia = document.querySelector('.mediaPlayer'); // Place in currentMedia

let mediaArray; // New array content index, id, image, video, title


// Open Lightbox
function openLightbox() {
    lightboxModal.style.display = "block";
    
    function getMediaIndex() {
        
        mediaContent.forEach( mediaCurrent => mediaCurrent.addEventListener('click', e => {
            e.preventDefault();
            console.log('Yop');
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