/**
 * 
 * @returns Structure de la Lightbox 
 */


 export function lightboxFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    function lightboxDOM() {

        const  lightboxModal = document.createElement("div");
            lightboxModal.setAttribute("id", "lightbox-modal");
            lightboxModal.setAttribute("role", "dialog");
            lightboxModal.setAttribute("aria-label", "image closeup view");

            const lightbox = document.createElement("div");
                lightbox.setAttribute("class", "lightbox");

                const lbSwitchLeft = document.createElement("div");
                    lbSwitchLeft.setAttribute("class", "lbSwitch");
                    lbSwitchLeft.setAttribute("class", "lbIcons");
                    lbSwitchLeft.setAttribute("aria-label", "Previous image");
                    lbSwitchLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;

                const lbMedia = document.createElement("div");
                    lbMedia.setAttribute("class", "lbMedia");
                        const MediaPlayer = document.createElement("div");
                            lbMedia.setAttribute("class", "MediaPlayer");
                        const MediaTitle = document.createElement("div");
                            lbMedia.setAttribute("class", "MediaTitle");
                                lbMedia.appendChild(MediaPlayer);
                                lbMedia.appendChild(MediaTitle);

                const lbSwitchRight = document.createElement("button");
                lbSwitchRight.setAttribute("class", "lbSwitch");
                lbSwitchRight.setAttribute("class", "lbIcons");
                lbSwitchRight.setAttribute("aria-label", "Next image");
                lbSwitchRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;


                const lbClose = document.createElement("button");
                lbClose.setAttribute("class", "lbClose");
                lbClose.setAttribute("class", "lbIcons");
                lbClose.setAttribute("aria-label", "Close dialog");
                lbClose.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
        
        lightbox.appendChild(lbSwitchLeft);
        lightbox.appendChild(lbMedia);
        lightbox.appendChild(lbSwitchRight);
        lightbox.appendChild(lbClose);
    };

    return { id, photographerId, title, image, video, likes, date, price, lightboxDOM };
}