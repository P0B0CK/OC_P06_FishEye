/**
 * 
 * @returns event modal lighbox
 */


function lightboxFactory() {

    function lightboxDOM() {
        const lbContain = document.createElement("div");
        lbContain.setAttribute("id", "lightbox-Modal");

        const lbPicture = document.createElement("div");
        lbPicture.setAttribute("class", "lbPicture");
    };

    // function openLightbox() {

    // };

    // function closeLightbox() {

    // };

    return lightboxDOM, openLightbox, closeLightbox;
}