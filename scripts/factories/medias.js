import { imagesFactory } from "./image.js";
import { videosFactory } from "./video.js";

/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    function getUserMediasDOM(){
        const mediaSection = document.querySelector(".media-section");
        const mediaImage = imagesFactory(data);
        const mediaVideo = videosFactory(data);
        const mediaFormat = data.image ? mediaSection.appendChild(mediaImage.getImageDOM()) : mediaSection.appendChild(mediaVideo.getVideoDOM());

        return mediaFormat;
    };
    
    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM};
};