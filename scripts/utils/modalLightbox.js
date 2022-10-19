import { mediasFactory } from "../factories/medias.js";

const lightboxModal = document.getElementById("lightbox-modal");
const LbMedia = document.querySelector('.mediaPlayer');
const mediaLinks = document.querySelectorAll('.getMediaLink');



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

// Open Lightbox
function openLightbox() {
    lightboxModal.style.display = "block";

    // getTabIndex = mediaLinks.children.index;
    // console.log(getTabIndex);

    function getMediaIndex(elt, index) {
        console.log(elt.onclick.currentTarget `${index}`);
    };
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
    return getMediaIndex();
};

// close Lightbox :: OK
function closeLightbox() {
    lightboxModal.style.display = "none";
};


document.closeLightbox = closeLightbox;
document.openLightbox = openLightbox;